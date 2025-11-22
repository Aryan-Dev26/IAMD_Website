/**
 * Gallery Data
 * Photos from IAMD activities, picnics, and camp moments
 */

export const galleryImages = [
  {
    id: 1,
    title: 'Therapy Session at IAMD',
    description: 'Warriors receiving personalized care',
    image: '/images/facility/img15.jpg.jpeg',
    category: 'therapy',
  },
  {
    id: 2,
    title: 'Group Activities',
    description: 'Fun and laughter during group sessions',
    image: '/images/facility/img17.jpg.jpeg',
    category: 'activities',
  },
  {
    id: 3,
    title: 'Physiotherapy Session',
    description: 'Professional therapy in modern facilities',
    image: '/images/facility/img18.jpg.jpeg',
    category: 'therapy',
  },
  {
    id: 4,
    title: 'Warriors Together',
    description: 'Building friendships and support',
    image: '/images/facility/img19.jpg.jpeg',
    category: 'activities',
  },
  {
    id: 5,
    title: 'Outdoor Activities',
    description: 'Enjoying nature and fresh air',
    image: '/images/facility/img20.jpg.jpeg',
    category: 'picnic',
  },
  {
    id: 6,
    title: 'Camp Activities',
    description: 'Engaging programs for all warriors',
    image: '/images/facility/img21.jpg.jpeg',
    category: 'activities',
  },
  {
    id: 7,
    title: 'Group Therapy',
    description: 'Healing through shared experiences',
    image: '/images/facility/img23.jpg.jpeg',
    category: 'therapy',
  },
  {
    id: 8,
    title: 'Celebration Moments',
    description: 'Every milestone is celebrated together',
    image: '/images/facility/img24.jpg.jpeg',
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
