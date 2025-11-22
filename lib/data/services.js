/**
 * Services Data
 * Information about IAMD's rehabilitation and support services
 */

export const services = [
  {
    id: 'physiotherapy',
    title: 'Physiotherapy',
    slug: 'physiotherapy',
    icon: '🏥',
    shortDescription: 'Specialized physical therapy programs to improve mobility and strength',
    description: 'Our physiotherapy program is designed specifically for muscular dystrophy patients, focusing on maintaining muscle function, improving mobility, and preventing complications.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
    features: [
      'Customized exercise programs',
      'Mobility and gait training',
      'Stretching and flexibility exercises',
      'Respiratory muscle training',
      'Pain management techniques',
      'Assistive device training',
    ],
    benefits: [
      'Improved muscle strength and endurance',
      'Better mobility and independence',
      'Reduced pain and discomfort',
      'Prevention of contractures',
      'Enhanced quality of life',
    ],
  },
  {
    id: 'occupational-therapy',
    title: 'Occupational Therapy',
    slug: 'occupational-therapy',
    icon: '🎯',
    shortDescription: 'Learn daily living skills and adaptive techniques for independence',
    description: 'Our occupational therapy helps patients develop skills for daily activities, work, and leisure, promoting independence and quality of life.',
    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800&h=600&fit=crop',
    features: [
      'Activities of daily living (ADL) training',
      'Adaptive equipment assessment',
      'Home modification recommendations',
      'Fine motor skill development',
      'Energy conservation techniques',
      'Vocational rehabilitation',
    ],
    benefits: [
      'Greater independence in daily tasks',
      'Improved self-care abilities',
      'Enhanced productivity',
      'Better quality of life',
      'Increased confidence',
    ],
  },
  {
    id: 'counselling',
    title: 'Psychological Counselling',
    slug: 'counselling',
    icon: '💬',
    shortDescription: 'Professional mental health support for patients and families',
    description: 'Living with muscular dystrophy affects mental health. Our counselling services provide emotional support and coping strategies for patients and their families.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop',
    features: [
      'Individual counselling sessions',
      'Family therapy',
      'Support group facilitation',
      'Stress management',
      'Coping strategies development',
      'Crisis intervention',
    ],
    benefits: [
      'Better emotional well-being',
      'Improved family relationships',
      'Effective coping mechanisms',
      'Reduced anxiety and depression',
      'Enhanced resilience',
    ],
  },
  {
    id: 'respiratory-care',
    title: 'Respiratory Care',
    slug: 'respiratory-care',
    icon: '🫁',
    shortDescription: 'Specialized respiratory support and breathing exercises',
    description: 'Respiratory complications are common in MD. Our respiratory care program helps maintain lung function and prevent complications.',
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&h=600&fit=crop',
    features: [
      'Breathing exercises',
      'Cough assistance techniques',
      'Ventilator support training',
      'Respiratory monitoring',
      'Airway clearance therapy',
      'Sleep apnea management',
    ],
    benefits: [
      'Improved lung function',
      'Better oxygen levels',
      'Reduced respiratory infections',
      'Enhanced sleep quality',
      'Increased energy levels',
    ],
  },
  {
    id: 'nutrition',
    title: 'Nutrition & Dietetics',
    slug: 'nutrition',
    icon: '🥗',
    shortDescription: 'Customized nutrition plans for optimal health',
    description: 'Proper nutrition is crucial for MD patients. Our dietitians create personalized meal plans to maintain optimal health and manage weight.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop',
    features: [
      'Personalized meal planning',
      'Nutritional assessment',
      'Weight management',
      'Swallowing difficulty management',
      'Supplement recommendations',
      'Family nutrition education',
    ],
    benefits: [
      'Optimal nutritional status',
      'Better energy levels',
      'Healthy weight maintenance',
      'Improved overall health',
      'Enhanced healing',
    ],
  },
  {
    id: 'speech-therapy',
    title: 'Speech Therapy',
    slug: 'speech-therapy',
    icon: '🗣️',
    shortDescription: 'Communication and swallowing therapy',
    description: 'Our speech therapists help patients maintain communication abilities and manage swallowing difficulties.',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&h=600&fit=crop',
    features: [
      'Communication strategies',
      'Voice therapy',
      'Swallowing assessment',
      'Dysphagia management',
      'Augmentative communication devices',
      'Articulation exercises',
    ],
    benefits: [
      'Maintained communication abilities',
      'Safer swallowing',
      'Reduced choking risk',
      'Better social interaction',
      'Improved quality of life',
    ],
  },
];

export const getServiceBySlug = (slug) => {
  return services.find((service) => service.slug === slug);
};

export const getServiceById = (id) => {
  return services.find((service) => service.id === id);
};
