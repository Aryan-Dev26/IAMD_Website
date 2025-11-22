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
    shortDescription: 'Specialized physical therapy to improve mobility, strength and muscle function',
    description: 'Our expert physiotherapists provide personalized therapy programs designed specifically for muscular dystrophy patients, focusing on maintaining muscle function, improving mobility, and preventing complications.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
    features: [
      'Customized exercise programs',
      'Mobility and gait training',
      'Stretching and flexibility exercises',
    ],
  },
  {
    id: 'hydrotherapy',
    title: 'Hydrotherapy',
    slug: 'hydrotherapy',
    icon: '💧',
    shortDescription: 'Water-based therapy for gentle muscle strengthening and relaxation',
    description: 'Hydrotherapy uses the therapeutic properties of water to provide low-impact exercise, improve circulation, and reduce muscle tension in a safe, supportive environment.',
    image: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=800&h=600&fit=crop',
    features: [
      'Aquatic exercises',
      'Buoyancy-assisted movements',
      'Warm water therapy sessions',
    ],
  },
  {
    id: 'dental-checkup',
    title: 'Dental Checkup',
    slug: 'dental-checkup',
    icon: '🦷',
    shortDescription: 'Comprehensive dental care and oral health monitoring',
    description: 'Regular dental checkups are essential for MD warriors. Our dental team provides thorough examinations, preventive care, and treatment in a comfortable, accessible setting.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop',
    features: [
      'Complete oral examination',
      'Preventive dental care',
      'Oral hygiene guidance',
    ],
  },
  {
    id: 'orientation',
    title: 'Orientation',
    slug: 'orientation',
    icon: '📋',
    shortDescription: 'Comprehensive introduction to camp facilities and programs',
    description: 'Our orientation program helps new warriors and families understand all available services, meet the team, and feel comfortable in our facility from day one.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    features: [
      'Facility tour',
      'Meet the care team',
      'Program overview and scheduling',
    ],
  },
  {
    id: 'counselling',
    title: 'Counselling',
    slug: 'counselling',
    icon: '💬',
    shortDescription: 'Professional emotional and psychological support for warriors and families',
    description: 'Living with muscular dystrophy affects mental health. Our counselling services provide emotional support, coping strategies, and a safe space to share feelings and concerns.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop',
    features: [
      'Individual counselling sessions',
      'Family therapy',
      'Stress management techniques',
    ],
  },
  {
    id: 'meditation',
    title: 'Meditation',
    slug: 'meditation',
    icon: '🧘',
    shortDescription: 'Mindfulness and meditation practices for inner peace and stress relief',
    description: 'Our guided meditation sessions help warriors find inner calm, reduce stress, and improve mental clarity through mindfulness practices adapted for all abilities.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop',
    features: [
      'Guided meditation sessions',
      'Breathing exercises',
      'Relaxation techniques',
    ],
  },
  {
    id: 'picnic',
    title: 'Picnic & Outings',
    slug: 'picnic',
    icon: '🌳',
    shortDescription: 'Fun outdoor activities and social gatherings in nature',
    description: 'Regular picnics and outdoor activities provide warriors with opportunities to enjoy nature, socialize with peers, and create joyful memories in accessible outdoor settings.',
    image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop',
    features: [
      'Outdoor group activities',
      'Nature walks (accessible)',
      'Social bonding time',
    ],
  },
  {
    id: 'medical-checkup',
    title: 'Medical Checkup',
    slug: 'medical-checkup',
    icon: '⚕️',
    shortDescription: 'Regular health monitoring and medical assessments',
    description: 'Comprehensive medical checkups by experienced doctors ensure continuous health monitoring, early detection of issues, and appropriate medical interventions when needed.',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop',
    features: [
      'Complete physical examination',
      'Health status monitoring',
      'Medical consultation',
    ],
  },
  {
    id: 'yoga-pranayam',
    title: 'Yoga & Pranayam',
    slug: 'yoga-pranayam',
    icon: '🕉️',
    shortDescription: 'Adaptive yoga and breathing exercises for flexibility and wellness',
    description: 'Our specially adapted yoga and pranayam sessions focus on gentle movements, breathing techniques, and poses modified for different ability levels to promote physical and mental wellness.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
    features: [
      'Adaptive yoga poses',
      'Pranayam (breathing exercises)',
      'Flexibility and balance work',
    ],
  },
  {
    id: 'games-activities',
    title: 'Games & Activities',
    slug: 'games-activities',
    icon: '🎮',
    shortDescription: 'Recreational games and engaging activities for fun and skill development',
    description: 'A variety of accessible games and recreational activities keep warriors engaged, promote social interaction, develop skills, and most importantly - bring joy and laughter!',
    image: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800&h=600&fit=crop',
    features: [
      'Indoor and outdoor games',
      'Group activities',
      'Skill-building exercises',
    ],
  },
];

export const getServiceBySlug = (slug) => {
  return services.find((service) => service.slug === slug);
};

export const getServiceById = (id) => {
  return services.find((service) => service.id === id);
};
