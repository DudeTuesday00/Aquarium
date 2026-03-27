export type WizardAnswerKey = 'tank' | 'water' | 'fish' | 'maint' | 'budget';
export type TankValue = 'small' | 'medium' | 'large';
export type WaterValue = 'fresh' | 'salt';
export type FishValue = 'community' | 'betta' | 'cichlid';
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
  tank: TankValue | '';
  water: WaterValue | '';
  fish: FishValue | '';
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
    key: 'tank',
    fieldName: 'tank-size',
    step: 1,
    title: 'Step 1: Tank Size',
    options: [
      { value: 'small', label: 'Small (5-20 gallons) - Apartment / Desk' },
      { value: 'medium', label: 'Medium (20-55 gallons) - Living Room' },
      { value: 'large', label: 'Large (55+ gallons) - Dedicated Setup' }
    ]
  },
  {
    key: 'water',
    fieldName: 'water-type',
    step: 2,
    title: 'Step 2: Water Type',
    options: [
      { value: 'fresh', label: 'Freshwater (easier for beginners)' },
      { value: 'salt', label: 'Saltwater (more colorful fish)' }
    ]
  },
  {
    key: 'fish',
    fieldName: 'fish-pref',
    step: 3,
    title: 'Step 3: Fish Preference',
    options: [
      { value: 'community', label: 'Community fish (peaceful, colorful)' },
      { value: 'betta', label: 'Betta or single fish' },
      { value: 'cichlid', label: 'Cichlids or more active fish' }
    ]
  },
  {
    key: 'maint',
    fieldName: 'maintenance',
    step: 4,
    title: 'Step 4: Maintenance Level',
    options: [
      { value: 'low', label: 'Low (under 2 hours/week)' },
      { value: 'medium', label: 'Medium (2-4 hours/week)' }
    ]
  },
  {
    key: 'budget',
    fieldName: 'budget',
    step: 5,
    title: 'Step 5: Budget for Accessories',
    options: [
      { value: 'low', label: 'Under $150' },
      { value: 'medium', label: '$150-$350' },
      { value: 'high', label: '$350+' }
    ]
  }
];

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
    experience: 'the easiest path for beginners and practical daily ownership',
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
    label: 'starter budget',
    startupRange: '$120-$180',
    accessoryTier: 2
  },
  medium: {
    label: 'balanced budget',
    startupRange: '$250-$350',
    accessoryTier: 3
  },
  high: {
    label: 'premium budget',
    startupRange: '$450+',
    accessoryTier: 4
  }
} as const;

const equipmentBundles: Record<`${WaterValue}-${TankValue}`, EquipmentBundle> = {
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

const productCatalog: Record<string, ProductMatch & { priorities: string[] }> = {
  'filter-guard': {
    id: 'filter-guard',
    name: 'Filter Guard',
    price: '$12.99',
    href: '/shop',
    summary: 'Protects fish from intake tubes and keeps beginner setups safer.',
    priorities: ['low-any-any', 'medium-any-any', 'high-any-any']
  },
  'feeding-ring': {
    id: 'feeding-ring',
    name: 'Feeding Ring',
    price: '$8.99',
    href: '/shop',
    summary: 'Keeps food in one spot and reduces floating mess in community and betta tanks.',
    priorities: ['low-community-any', 'low-betta-any', 'medium-any-any', 'high-any-any']
  },
  'plant-clips': {
    id: 'plant-clips',
    name: 'Plant Clips',
    price: '$14.99',
    href: '/shop',
    summary: 'Keeps plants and decor under control in freshwater tanks.',
    priorities: ['medium-community-any', 'medium-betta-any', 'high-any-any']
  },
  'custom-mounts': {
    id: 'custom-mounts',
    name: 'Custom Accessory Mounts',
    price: '$24.99+',
    href: '/shop',
    summary: 'Best for premium display setups that need a cleaner cable or equipment layout.',
    priorities: ['high-any-medium', 'high-any-large']
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

type CompleteRecommendationAnswers = {
  tank: TankValue;
  water: WaterValue;
  fish: FishValue;
  maint: MaintenanceValue;
  budget: BudgetValue;
};

function guideMatch(slug: keyof typeof guideCatalog, reason: string): GuideMatch {
  return { ...guideCatalog[slug], reason };
}

function getAccessoryProducts(answers: CompleteRecommendationAnswers): ProductMatch[] {
  const exactPriority = `${answers.budget}-${answers.fish}-${answers.tank}`;
  const broadPriority = `${answers.budget}-any-any`;

  return Object.values(productCatalog)
    .filter((product) => product.priorities.includes(exactPriority) || product.priorities.includes(broadPriority))
    .slice(0, budgetProfiles[answers.budget].accessoryTier - 1)
    .map(({ priorities: _priorities, ...product }) => product);
}

function getGuideMatches(answers: CompleteRecommendationAnswers): GuideMatch[] {
  const matches: GuideMatch[] = [
    guideMatch('beginner-tank-setup', 'Use this as your foundation for setup order and cycling.'),
    guideMatch('freshwater-vs-saltwater', 'Compare the long-term cost and maintenance tradeoffs for your chosen path.')
  ];

  if (answers.water === 'salt') {
    matches.push(guideMatch('saltwater-beginner-basics', 'This covers the extra testing and maintenance a saltwater setup requires.'));
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

  matches.push(guideMatch('aquarium-filter-types', 'Choose a filter that matches your tank size and maintenance tolerance.'));

  return matches.slice(0, 4);
}

export function isCompleteWizardAnswers(answers: RecommendationAnswers): answers is CompleteRecommendationAnswers {
  return Boolean(answers.tank && answers.water && answers.fish && answers.maint && answers.budget);
}

export function buildWizardRecommendation(answers: RecommendationAnswers): WizardRecommendation | null {
  if (!isCompleteWizardAnswers(answers)) {
    return null;
  }

  const tankProfile = tankProfiles[answers.tank];
  const waterProfile = waterProfiles[answers.water];
  const fishProfile = fishProfiles[answers.fish];
  const maintenanceProfile = maintenanceProfiles[answers.maint];
  const budgetProfile = budgetProfiles[answers.budget];
  const equipmentBundle = equipmentBundles[`${answers.water}-${answers.tank}`];
  const accessoryProducts = getAccessoryProducts(answers);
  const matchedGuides = getGuideMatches(answers);

  return {
    headline: `${tankProfile.headline} ${waterProfile.label} setup`,
    setupSummary: `This is ${tankProfile.environment} and follows ${waterProfile.experience}.`,
    stockingSummary: `Your livestock direction is a ${fishProfile.label} built around ${fishProfile.stocking}.`,
    maintenanceSummary: `Plan for a ${maintenanceProfile.label}: ${maintenanceProfile.routine}.`,
    startupRange: budgetProfile.startupRange,
    equipmentBundle,
    accessoryProducts,
    matchedGuides,
    notes: [tankProfile.note, waterProfile.note, fishProfile.temperament, maintenanceProfile.note]
  };
}
