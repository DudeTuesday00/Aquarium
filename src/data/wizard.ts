export type WizardAnswerKey = 'tank' | 'water' | 'fish' | 'maint' | 'budget';

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
  tank: string;
  water: string;
  fish: string;
  maint: string;
  budget: string;
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

export const recommendationData = {
  tank: {
    small: {
      headline: '10-gallon setup',
      environment: 'best for desks, apartments, and low-footprint spaces',
      equipment: ['quiet hang-on-back filter or sponge filter', 'compact heater', 'simple LED light'],
      note: 'Keep stocking light so the tank stays stable for a first-time owner.'
    },
    medium: {
      headline: '29-30 gallon setup',
      environment: 'a strong fit for living rooms and small offices',
      equipment: ['hang-on-back or canister filter', 'reliable heater', 'mid-range LED light'],
      note: 'This size gives you better stocking flexibility without becoming hard to manage.'
    },
    large: {
      headline: '55-gallon setup',
      environment: 'best for a dedicated display wall or long-term hobby setup',
      equipment: ['canister filter', 'higher-output heater', 'full-length LED lighting'],
      note: 'This size gives the best stability but needs a larger upfront commitment.'
    }
  },
  water: {
    fresh: {
      label: 'freshwater',
      experience: 'the most practical path for beginners and low-maintenance owners',
      equipmentNote: 'Use dechlorinator, a basic test kit, and a forgiving stocking plan.'
    },
    salt: {
      label: 'saltwater',
      experience: 'a more advanced path with more colorful livestock and stricter maintenance',
      equipmentNote: 'Plan for salt mix, refractometer testing, and more disciplined water management.'
    }
  },
  fish: {
    community: {
      label: 'community fish',
      stocking: 'tetras, rasboras, corydoras, and guppies',
      temperament: 'peaceful, colorful fish with good beginner appeal',
      guidePath: '/guides'
    },
    betta: {
      label: 'single-show fish setup',
      stocking: 'one betta with a gentle filter and calm layout',
      temperament: 'simple stocking with personality and lower compatibility risk',
      guidePath: '/guides'
    },
    cichlid: {
      label: 'active cichlid-style setup',
      stocking: 'carefully chosen peaceful cichlids or other more active fish',
      temperament: 'more movement and personality, but more attention to compatibility',
      guidePath: '/guides'
    }
  },
  maint: {
    low: {
      label: 'low-maintenance routine',
      filter: 'simple sponge filter or quiet beginner-friendly filter',
      routine: 'one short cleaning/check cycle each week',
      note: 'Prioritize hardy fish, stable stocking, and easy-access equipment.'
    },
    medium: {
      label: 'standard maintenance routine',
      filter: 'more capable filtration such as a canister or higher-capacity HOB filter',
      routine: 'weekly care plus more active testing and equipment upkeep',
      note: 'This allows more livestock flexibility and cleaner long-term presentation.'
    }
  },
  budget: {
    low: {
      label: 'starter accessory budget',
      accessorySet: 'basic accessory kit',
      startupCost: '$120-$180',
      accessoryFocus: ['filter guard', 'feeding ring']
    },
    medium: {
      label: 'balanced accessory budget',
      accessorySet: 'expanded accessory kit',
      startupCost: '$250-$350',
      accessoryFocus: ['filter guard', 'feeding ring', 'plant clips']
    },
    high: {
      label: 'premium accessory budget',
      accessorySet: 'premium accessory bundle',
      startupCost: '$450+',
      accessoryFocus: ['custom-fit accessories', 'plant clips', 'display-focused upgrades']
    }
  }
} as const;
