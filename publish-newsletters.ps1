# publish-newsletters.ps1
# Build-validate newly-exported newsletter issues, then commit + push to main so
# Cloudflare Pages rebuilds. GATED on a real Astro build (never pushes a broken build).
# Intended to run on a schedule (Windows Task Scheduler) OR manually.
#   -DryRun : do everything EXCEPT git commit/push (safe to inspect the diff first).
param([switch]$DryRun)

$repo = 'D:\ClaudeProjects\Aquarium'
$log  = 'D:\ClaudeProjects\Aquarium\publish-newsletters.log'
function Log($m) {
  $line = '{0}  {1}' -f (Get-Date -Format 'yyyy-MM-dd HH:mm:ss'), $m
  $line | Out-File -FilePath $log -Append -Encoding utf8
  Write-Host $line
}

Set-Location $repo

# Act only when the export worker actually dropped newsletter files.
$trigger = git status --porcelain -- src/content/newsletter public/images/newsletter 2>$null
if (-not $trigger) { Log 'No newsletter changes detected; nothing to publish.'; exit 0 }
Log ('Newsletter changes detected:' + [Environment]::NewLine + ($trigger -join [Environment]::NewLine))

# GATE: the Astro static build must succeed before anything is committed.
# Catches a malformed content file (e.g. bad frontmatter from the exporter)
# before it ever reaches Cloudflare Pages, which would otherwise fail the
# live deploy. Runs `npx astro build` directly rather than `npm run build`,
# because this host's Node version (26.x) fails this repo's own prebuild
# version gate (scripts/check-node.mjs, which requires 22.12+/24.x) - a
# pre-existing gap between the repo's stated Node requirement and what's
# actually installed here, unrelated to the newsletter content itself.
Log 'npx astro build ...'
npx astro build 2>&1 | ForEach-Object { Log "  build: $_" }
if ($LASTEXITCODE -ne 0) {
  Log "astro build FAILED (exit $LASTEXITCODE). Leaving changes UNCOMMITTED for manual review."
  exit 1
}

# Commit message: list the newsletter slugs that changed.
$titles = (git status --porcelain -- src/content/newsletter |
  Select-String 'newsletter/([^./]+)\.md' |
  ForEach-Object { $_.Matches.Groups[1].Value } |
  Select-Object -Unique) -join ', '
if (-not $titles) { $titles = 'update' }
$msg = "Publish newsletter(s): $titles"

if ($DryRun) {
  Log "DRY RUN complete. Build passed. Would commit + push: $msg"
  exit 0
}

git add -A 2>&1 | Out-Null
git commit -m $msg 2>&1 | ForEach-Object { Log "  commit: $_" }
git push 2>&1 | ForEach-Object { Log "  push: $_" }
if ($LASTEXITCODE -ne 0) { Log 'git push FAILED (check credentials / network).'; exit 1 }
Log "Published + pushed: $msg"
