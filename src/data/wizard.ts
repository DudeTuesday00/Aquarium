export type WizardAnswerKey =
  | 'experience'
  | 'environment'
  | 'tank'
  | 'water'
  | 'fish'
  | 'plants'
  | 'maint'
  | 'budget';

export type ExperienceValue = 'beginner' | 'some' | 'advanced';
export type EnvironmentValue = 'home' | 'office';
export type TankValue = 'small' | 'medium' | 'large';
export type WaterValue = 'fresh' | 'salt';
export type FishValue = 'community' | 'betta' | 'cichlid';
export type PlantsValue = 'yes' | 'no';
export type MaintenanceValue = 'low' | 'medium';
export type BudgetValue = 'low' | 'medium' | 'high';

export interface WizardOption {
  value: string;
  label: string;
}

export interface WizardQuestion {
  key: WizardAnswerKey;
  fieldName: string;
  step: number;
  title: string;
  options: WizardOption[];
}

export interface RecommendationAnswers {
  experience: ExperienceValue | '';
  environment: EnvironmentValue | '';
  tank: TankValue | '';
  water: WaterValue | '';
  fish: FishValue | '';
  plants: PlantsValue | '';
  maint: MaintenanceValue | '';
  budget: BudgetValue | '';
}

export interface GuideMatch {
  slug: string;
  title: string;
  reason: string;
}

export interface ProductMatch {
  id: string;
  name: string;
  price: string;
  href: string;
  summary: string;
}

export interface EquipmentBundle {
  name: string;
  summary: string;
  items: string[];
}

export interface WizardRecommendation {
  headline: string;
  setupSummary: string;
  stockingSummary: string;
  maintenanceSummary: string;
  startupRange: string;
  equipmentBundle: EquipmentBundle;
  accessoryProducts: ProductMatch[];
  matchedGuides: GuideMatch[];
  notes: string[];
}

export const wizardQuestions: WizardQuestion[] = [
  {
    key: 'experience',
    fieldName: 'experience-level',
    step: 1,
    title: 'Step 1: Experience Level',
    options: [
      { value: 'beginner', label: 'Beginner - this will be my first aquarium' },
      { value: 'some', label: 'Some experience - I have kept fish before' },
      { value: 'advanced', label: 'Advanced - I am comfortable with equipment and water care' }
    ]
  },
  {
    key: 'environment',
    fieldName: 'tank-environment',
    step: 2,
    title: 'Step 2: Where Will the Tank Live?',
    options: [
      { value: 'home', label: 'Home - living room, bedroom, kitchen, or entryway' },
      { value: 'office', label: 'Small office - desk, waiting room, or front office' }
    ]
  },
  {
    key: 'tank',
    fieldName: 'tank-size',
    step: 3,
    title: 'Step 3: Tank Size',
    options: [
      { value: 'small', label: 'Small (5-20 gallons) - compact footprint' },
      { value: 'medium', label: 'Medium (20-55 gallons) - most flexible range' },
      { value: 'large', label: 'Large (55+ gallons) - dedicated display' }
    ]
  },
  {
    key: 'water',
    fieldName: 'water-type',
    step: 4,
    title: 'Step 4: Water Type',
    options: [
      { value: 'fresh', label: 'Freshwater - simpler and more beginner-friendly' },
      { value: 'salt', label: 'Saltwater - higher visual payoff but more work' }
    ]
  },
  {
    key: 'fish',
    fieldName: 'fish-pref',
    step: 5,
    title: 'Step 5: Fish Style',
    options: [
      { value: 'community', label: 'Peaceful community fish' },
      { value: 'betta', label: 'Betta or single-show fish' },
      { value: 'cichlid', label: 'Active cichlids or more assertive fish' }
    ]
  },
  {
    key: 'plants',
    fieldName: 'live-plants',
    step: 6,
    title: 'Step 6: Do You Want Live Plants?',
    options: [
      { value: 'yes', label: 'Yes - I want a planted look' },
      { value: 'no', label: 'No - I prefer a simpler setup' }
    ]
  },
  {
    key: 'maint',
    fieldName: 'maintenance',
    step: 7,
    title: 'Step 7: Maintenance Level',
    options: [
      { value: 'low', label: 'Low - under 2 hours per week' },
      { value: 'medium', label: 'Medium - I can handle regular upkeep' }
    ]
  },
  {
    key: 'budget',
    fieldName: 'budget',
    step: 8,
    title: 'Step 8: Budget for Accessories and Upgrades',
    options: [
      { value: 'low', label: 'Under $150' },
      { value: 'medium', label: '$150-$350' },
      { value: 'high', label: '$350+' }
    ]
  }
];

const experienceProfiles = {
  beginner: {
    fit: 'beginner-safe',
    note: 'Keep decisions simple and avoid stacking too many variables at once.'
  },
  some: {
    fit: 'comfortable for returning hobbyists',
    note: 'You can handle a little more equipment complexity if the setup solves a real need.'
  },
  advanced: {
    fit: 'open to more specialized setups',
    note: 'You can support more demanding gear and stocking choices as long as the tank size matches the plan.'
  }
} as const;

const environmentProfiles = {
  home: {
    label: 'home setup',
    note: 'Home tanks can tolerate a little more personality, motion, and maintenance variation.'
  },
  office: {
    label: 'small-office setup',
    note: 'Office tanks should stay quieter, cleaner-looking, and easier for a short maintenance window.'
  }
} as const;

const tankProfiles = {
  small: {
    headline: '10-gallon',
    environment: 'a compact choice for desks, apartments, and reception counters',
    note: 'Keep stocking light so the tank stays stable and easy to monitor.'
  },
  medium: {
    headline: '29-30 gallon',
    environment: 'a balanced choice for living rooms and small offices',
    note: 'This size gives you more stocking flexibility without becoming hard to maintain.'
  },
  large: {
    headline: '55-gallon',
    environment: 'a display-oriented choice for a dedicated wall or long-term setup',
    note: 'This size is the most stable, but it needs a stronger upfront commitment.'
  }
} as const;

const waterProfiles = {
  fresh: {
    label: 'freshwater',
    experience: 'the easiest path for practical daily ownership',
    note: 'Use dechlorinator, a reliable test kit, and simple stocking discipline.'
  },
  salt: {
    label: 'saltwater',
    experience: 'a more advanced path with higher visual payoff and tighter maintenance',
    note: 'Plan for salt mix, salinity testing, and more structured maintenance from day one.'
  }
} as const;

const fishProfiles = {
  community: {
    label: 'community tank',
    stocking: 'tetras, rasboras, corydoras, and guppies',
    temperament: 'peaceful and colorful with strong beginner appeal'
  },
  betta: {
    label: 'betta-centered setup',
    stocking: 'one betta in a calm, low-flow layout',
    temperament: 'simple stocking with strong personality and lower compatibility risk'
  },
  cichlid: {
    label: 'cichlid-style setup',
    stocking: 'carefully selected cichlids or similarly active fish',
    temperament: 'more movement and personality, but more attention to territory and compatibility'
  }
} as const;

const plantProfiles = {
  yes: {
    label: 'planted presentation',
    note: 'Plan for plant-safe layout decisions, cleaner cable management, and at least modest lighting quality.'
  },
  no: {
    label: 'low-complexity hardscape setup',
    note: 'This keeps equipment simpler and reduces one more variable for first-time owners.'
  }
} as const;

const maintenanceProfiles = {
  low: {
    label: 'low-maintenance routine',
    routine: 'one short cleaning and check cycle each week',
    note: 'Prioritize hardy fish, easy equipment access, and stable stocking.'
  },
  medium: {
    label: 'standard maintenance routine',
    routine: 'weekly care with more active testing and equipment upkeep',
    note: 'This opens the door to more demanding livestock and cleaner presentation.'
  }
} as const;

const budgetProfiles = {
  low: {
    startupRange: '$120-$180',
    accessoryTier: 2
  },
  medium: {
    startupRange: '$250-$350',
    accessoryTier: 3
  },
  high: {
    startupRange: '$450+',
    accessoryTier: 4
  }
} as const;

type CompleteRecommendationAnswers = {
  experience: ExperienceValue;
  environment: EnvironmentValue;
  tank: TankValue;
  water: WaterValue;
  fish: FishValue;
  plants: PlantsValue;
  maint: MaintenanceValue;
  budget: BudgetValue;
};

const baseBundles: Record<`${WaterValue}-${TankValue}`, EquipmentBundle> = {
  'fresh-small': {
    name: 'Compact Freshwater Starter Bundle',
    summary: 'Quiet and simple equipment for small home or desk tanks.',
    items: ['quiet sponge or HOB filter', 'compact heater', 'entry LED light', 'water conditioner', 'master test kit']
  },
  'fresh-medium': {
    name: 'Balanced Freshwater Home Bundle',
    summary: 'A practical setup for living-room and small-office freshwater tanks.',
    items: ['mid-size HOB or canister filter', 'reliable heater', 'mid-range LED light', 'gravel vacuum', 'water test kit']
  },
  'fresh-large': {
    name: 'Large Freshwater Display Bundle',
    summary: 'Stronger equipment for higher water volume and longer-term stability.',
    items: ['canister filter', 'high-capacity heater', 'full-length LED lighting', 'bucket and hose kit', 'water test kit']
  },
  'salt-small': {
    name: 'Nano Saltwater Starter Bundle',
    summary: 'Basic gear for a simple fish-focused saltwater setup.',
    items: ['high-quality filtration', 'heater', 'marine-safe circulation', 'salt mix', 'salinity tester']
  },
  'salt-medium': {
    name: 'Mid-Size Saltwater Bundle',
    summary: 'A more capable saltwater package for owners ready for disciplined upkeep.',
    items: ['strong filtration system', 'heater', 'wave maker', 'salt mix', 'refractometer']
  },
  'salt-large': {
    name: 'Large Saltwater Display Bundle',
    summary: 'A display-oriented system with stronger equipment and more stability.',
    items: ['high-capacity filtration', 'larger heater system', 'circulation pump setup', 'salt mix', 'refractometer and testing supplies']
  }
};

const productCatalog: Record<string, ProductMatch & { tags: string[] }> = {
  'filter-guard': {
    id: 'filter-guard',
    name: 'Filter Guard',
    price: '$12.99',
    href: '/shop',
    summary: 'Protects fish from intake tubes and keeps beginner setups safer.',
    tags: ['all', 'beginner', 'office']
  },
  'feeding-ring': {
    id: 'feeding-ring',
    name: 'Feeding Ring',
    price: '$8.99',
    href: '/shop',
    summary: 'Keeps food in one spot and reduces floating mess in community and betta tanks.',
    tags: ['community', 'betta', 'office', 'all']
  },
  'plant-clips': {
    id: 'plant-clips',
    name: 'Plant Clips',
    price: '$14.99',
    href: '/shop',
    summary: 'Keeps live plants and decor in place in planted freshwater tanks.',
    tags: ['plants', 'fresh']
  },
  'custom-mounts': {
    id: 'custom-mounts',
    name: 'Custom Accessory Mounts',
    price: '$24.99+',
    href: '/shop',
    summary: 'Best for premium display setups that need cleaner cable or equipment layout.',
    tags: ['premium', 'large', 'display']
  }
};

const guideCatalog: Record<string, Omit<GuideMatch, 'reason'>> = {
  'beginner-tank-setup': {
    slug: 'beginner-tank-setup',
    title: 'Complete Beginner Tank Setup Guide 2026'
  },
  'freshwater-vs-saltwater': {
    slug: 'freshwater-vs-saltwater',
    title: 'Freshwater vs Saltwater Aquariums'
  },
  'freshwater-community-fish': {
    slug: 'freshwater-community-fish',
    title: 'Best Freshwater Community Fish for Home Tanks'
  },
  'betta-tank-basics': {
    slug: 'betta-tank-basics',
    title: 'Betta Tank Basics for Beginners'
  },
  'cichlid-tank-basics': {
    slug: 'cichlid-tank-basics',
    title: 'Cichlid Tank Basics'
  },
  'saltwater-beginner-basics': {
    slug: 'saltwater-beginner-basics',
    title: 'Saltwater Aquarium Basics for Beginners'
  },
  'aquarium-filter-types': {
    slug: 'aquarium-filter-types',
    title: 'Aquarium Filter Types Explained'
  }
};

function guideMatch(slug: keyof typeof guideCatalog, reason: string): GuideMatch {
  return { ...guideCatalog[slug], reason };
}

function buildEquipmentBundle(answers: CompleteRecommendationAnswers): EquipmentBundle {
  const base = baseBundles[`${answers.water}-${answers.tank}`];
  const items = [...base.items];

  if (answers.plants === 'yes' && answers.water === 'fresh') {
    items.push('plant-friendly substrate', 'better planted-tank lighting');
  }

  if (answers.environment === 'office') {
    items.push('quiet timer setup');
  }

  if (answers.experience === 'beginner') {
    items.push('water-change bucket kit');
  }

  return {
    ...base,
    items
  };
}

function getAccessoryProducts(answers: CompleteRecommendationAnswers): ProductMatch[] {
  const selectedIds = new Set<string>(['filter-guard']);

  if (answers.fish === 'community' || answers.fish === 'betta' || answers.environment === 'office') {
    selectedIds.add('feeding-ring');
  }

  if (answers.plants === 'yes' && answers.water === 'fresh') {
    selectedIds.add('plant-clips');
  }

  if (answers.budget === 'high' || answers.tank === 'large') {
    selectedIds.add('custom-mounts');
  }

  return Array.from(selectedIds)
    .slice(0, budgetProfiles[answers.budget].accessoryTier)
    .map((id) => productCatalog[id]);
}

function getGuideMatches(answers: CompleteRecommendationAnswers): GuideMatch[] {
  const matches: GuideMatch[] = [
    guideMatch('beginner-tank-setup', 'Use this as your foundation for setup order, cycling, and avoiding early mistakes.'),
    guideMatch('freshwater-vs-saltwater', 'Use this to sanity-check whether your chosen water type matches your time, budget, and goals.'),
    guideMatch('aquarium-filter-types', 'Filter choice should follow your tank size, noise tolerance, and maintenance target.')
  ];

  if (answers.water === 'salt') {
    matches.push(guideMatch('saltwater-beginner-basics', 'This explains the extra testing and maintenance a saltwater path requires.'));
  }

  if (answers.fish === 'community') {
    matches.push(guideMatch('freshwater-community-fish', 'This helps you choose peaceful fish that stock well together.'));
  }

  if (answers.fish === 'betta') {
    matches.push(guideMatch('betta-tank-basics', 'This covers low-flow filtration and calm layouts for bettas.'));
  }

  if (answers.fish === 'cichlid') {
    matches.push(guideMatch('cichlid-tank-basics', 'This explains compatibility, territory, and stronger filtration needs.'));
  }

  return matches.slice(0, 4);
}

function getHeadline(answers: CompleteRecommendationAnswers): string {
  const tankProfile = tankProfiles[answers.tank];
  const waterProfile = waterProfiles[answers.water];
  const environmentProfile = environmentProfiles[answers.environment];
  return `${tankProfile.headline} ${waterProfile.label} ${environmentProfile.label}`;
}

export function isCompleteWizardAnswers(answers: RecommendationAnswers): answers is CompleteRecommendationAnswers {
  return Boolean(
    answers.experience &&
      answers.environment &&
      answers.tank &&
      answers.water &&
      answers.fish &&
      answers.plants &&
      answers.maint &&
      answers.budget
  );
}

export function buildWizardRecommendation(answers: RecommendationAnswers): WizardRecommendation | null {
  if (!isCompleteWizardAnswers(answers)) {
    return null;
  }

  const experienceProfile = experienceProfiles[answers.experience];
  const environmentProfile = environmentProfiles[answers.environment];
  const tankProfile = tankProfiles[answers.tank];
  const waterProfile = waterProfiles[answers.water];
  const fishProfile = fishProfiles[answers.fish];
  const plantProfile = plantProfiles[answers.plants];
  const maintenanceProfile = maintenanceProfiles[answers.maint];
  const budgetProfile = budgetProfiles[answers.budget];
  const equipmentBundle = buildEquipmentBundle(answers);
  const accessoryProducts = getAccessoryProducts(answers);
  const matchedGuides = getGuideMatches(answers);

  const setupSummary =
    answers.environment === 'office'
      ? `This plan is tuned for a quieter, cleaner-looking office display and keeps equipment choices practical.`
      : `This plan is tuned for a home display where you have more flexibility with personality, layout, and maintenance rhythm.`;

  const stockingSummary =
    answers.experience === 'beginner' && answers.water === 'salt'
      ? `Your answers point toward a visually ambitious setup, but the recommendation stays conservative because saltwater plus beginner status needs extra margin.`
      : `Your livestock direction is a ${fishProfile.label} built around ${fishProfile.stocking}.`;

  const maintenanceSummary =
    answers.plants === 'yes'
      ? `Plan for a ${maintenanceProfile.label}: ${maintenanceProfile.routine}. Because you want a ${plantProfile.label}, lighting and cleanup discipline matter more.`
      : `Plan for a ${maintenanceProfile.label}: ${maintenanceProfile.routine}.`;

  const notes = [
    experienceProfile.note,
    environmentProfile.note,
    tankProfile.note,
    waterProfile.note,
    plantProfile.note,
    fishProfile.temperament,
    maintenanceProfile.note
  ];

  return {
    headline: getHeadline(answers),
    setupSummary,
    stockingSummary,
    maintenanceSummary,
    startupRange: budgetProfile.startupRange,
    equipmentBundle,
    accessoryProducts,
    matchedGuides,
    notes
  };
}
