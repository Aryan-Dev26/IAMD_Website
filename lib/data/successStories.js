/**
 * Success Stories Data
 * Inspiring stories of MD warriors and their journey
 */

export const successStories = [
  {
    id: 1,
    name: 'Rahul Sharma',
    age: 24,
    condition: 'Duchenne Muscular Dystrophy',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    story: 'When I first came to IAMD, I could barely move my arms. After 6 months of dedicated physiotherapy and hydrotherapy, I regained significant mobility. The team here gave me hope and strength I never knew I had.',
    achievement: 'Regained 60% arm mobility',
    duration: '6 months at IAMD',
    quote: 'IAMD didn\'t just treat my body, they healed my spirit.',
  },
  {
    id: 2,
    name: 'Priya Patel',
    age: 19,
    condition: 'Limb-Girdle MD',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=600&fit=crop',
    story: 'The counselling sessions at IAMD helped me accept my condition and find my purpose. I learned that MD doesn\'t define me. Today, I\'m pursuing my degree online and inspiring others through my blog.',
    achievement: 'Completed education, started advocacy work',
    duration: '1 year at IAMD',
    quote: 'I found my voice and my strength at IAMD.',
  },
  {
    id: 3,
    name: 'Arjun Mehta',
    age: 16,
    condition: 'Becker Muscular Dystrophy',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=600&fit=crop',
    story: 'The camp activities and games showed me that I can still have fun and make friends. The yoga and meditation sessions taught me to stay positive. IAMD is my second home.',
    achievement: 'Improved mental health and social skills',
    duration: '8 months at IAMD',
    quote: 'At IAMD, I\'m not a patient - I\'m a warrior!',
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    age: 22,
    condition: 'Facioscapulohumeral MD',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=600&fit=crop',
    story: 'The comprehensive care at IAMD - from physiotherapy to dental checkups - means I don\'t have to worry about coordinating multiple doctors. Everything I need is here, and the staff treats me like family.',
    achievement: 'Maintained independence and quality of life',
    duration: '2 years at IAMD',
    quote: 'IAMD is where healing meets hope.',
  },
  {
    id: 5,
    name: 'Vikram Singh',
    age: 28,
    condition: 'Myotonic Dystrophy',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=600&fit=crop',
    story: 'After years of feeling isolated, the IAMD community gave me a sense of belonging. The picnics, group activities, and shared experiences with other warriors showed me I\'m not alone in this journey.',
    achievement: 'Built lasting friendships and support network',
    duration: '1.5 years at IAMD',
    quote: 'IAMD gave me a family of warriors.',
  },
];

export const getFeaturedStories = (count = 3) => {
  return successStories.slice(0, count);
};

export const getStoryById = (id) => {
  return successStories.find((story) => story.id === id);
};
