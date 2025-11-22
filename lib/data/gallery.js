/**
 * Gallery Data
 * Photos from IAMD activities, picnics, and camp moments
 */

export const galleryImages = [
  {
    id: 1,
    title: 'Therapy Session at IAMD',
    description: 'Warriors receiving personalized care',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop',
    category: 'therapy',
  },
  {
    id: 2,
    title: 'Group Activities',
    description: 'Fun and laughter during group sessions',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=800&fit=crop',
    category: 'activities',
  },
  {
    id: 3,
    title: 'Physiotherapy Session',
    description: 'Professional therapy in modern facilities',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&h=800&fit=crop',
    category: 'therapy',
  },
  {
    id: 4,
    title: 'Warriors Together',
    description: 'Building friendships and support',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&h=800&fit=crop',
    category: 'activities',
  },
  {
    id: 5,
    title: 'Outdoor Activities',
    description: 'Enjoying nature and fresh air',
    image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1200&h=800&fit=crop',
    category: 'picnic',
  },
  {
    id: 6,
    title: 'Camp Activities',
    description: 'Engaging programs for all warriors',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&h=800&fit=crop',
    category: 'activities',
  },
  {
    id: 7,
    title: 'Group Therapy',
    description: 'Healing through shared experiences',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&h=800&fit=crop',
    category: 'therapy',
  },
  {
    id: 8,
    title: 'Celebration Moments',
    description: 'Every milestone is celebrated together',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&h=800&fit=crop',
    category: 'activities',
  },
];

export const getGalleryByCategory = (category) => {
  if (!category) return galleryImages;
  return galleryImages.filter((image) => image.category === category);
};

export const getFeaturedGallery = (count = 6) => {
  return galleryImages.slice(0, count);
};
