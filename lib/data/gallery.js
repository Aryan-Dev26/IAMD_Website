/**
 * Gallery Data
 * Photos from IAMD activities, picnics, and camp moments
 */

export const galleryImages = [
  {
    id: 1,
    title: 'Group Picnic at Manav Mandir',
    description: 'Warriors enjoying a beautiful day outdoors',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&h=800&fit=crop',
    category: 'picnic',
  },
  {
    id: 2,
    title: 'Outdoor Games Session',
    description: 'Fun and laughter during group activities',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=800&fit=crop',
    category: 'activities',
  },
  {
    id: 3,
    title: 'Yoga in the Garden',
    description: 'Morning yoga session in our peaceful gardens',
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200&h=800&fit=crop',
    category: 'activities',
  },
  {
    id: 4,
    title: 'Group Therapy Session',
    description: 'Warriors supporting each other',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&h=800&fit=crop',
    category: 'therapy',
  },
  {
    id: 5,
    title: 'Arts & Crafts Time',
    description: 'Creative activities bring joy and skill development',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&h=800&fit=crop',
    category: 'activities',
  },
  {
    id: 6,
    title: 'Nature Walk',
    description: 'Accessible trails for everyone to enjoy nature',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop',
    category: 'picnic',
  },
  {
    id: 7,
    title: 'Music Therapy',
    description: 'Healing through music and rhythm',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&h=800&fit=crop',
    category: 'activities',
  },
  {
    id: 8,
    title: 'Celebration Time',
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
