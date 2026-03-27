const supportedMajors = new Set([22, 24]);
const [major, minor] = process.versions.node.split('.').map(Number);

const isSupported =
  (major === 22 && minor >= 12) ||
  supportedMajors.has(major) && major !== 22;

if (!isSupported) {
  console.error(
    [
      `Unsupported Node.js version: ${process.versions.node}.`,
      'Use Node 22.12+ or Node 24.x for this project.',
      'The current Astro toolchain can fail with non-LTS versions such as Node 25.'
    ].join('\n')
  );
  process.exit(1);
}
