/**
 * Image Helper Utilities
 * Provides placeholder images and image optimization helpers
 */

/**
 * Get Unsplash placeholder image URL
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @param {string} query - Search query for image type
 * @returns {string} Image URL
 */
export const getUnsplashImage = (width, height, query = 'medical,therapy') => {
  return `https://source.unsplash.com/${width}x${height}/?${query}`;
};

/**
 * Get gradient placeholder for images
 * @param {string} type - Type of gradient (hero, service, team, etc.)
 * @returns {string} Gradient CSS class
 */
export const getGradientPlaceholder = (type) => {
  const gradients = {
    hero: 'bg-gradient-to-br from-blue-600 to-purple-600',
    service: 'bg-gradient-to-br from-orange-500 to-pink-500',
    team: 'bg-gradient-to-br from-green-600 to-teal-600',
    facility: 'bg-gradient-to-br from-indigo-600 to-blue-600',
    blog: 'bg-gradient-to-br from-purple-600 to-pink-600',
    warrior: 'bg-gradient-to-br from-cyan-600 to-blue-600',
  };
  return gradients[type] || gradients.hero;
};

/**
 * Placeholder images for different sections
 */
export const placeholderImages = {
  hero: {
    main: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop',
    therapy: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=600&fit=crop',
    facility: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=600&fit=crop',
  },
  services: {
    physiotherapy: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
    counselling: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop',
    occupational: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=600&h=400&fit=crop',
    respiratory: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&h=400&fit=crop',
  },
  facility: {
    exterior: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop',
    therapy_room: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    accommodation: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
    garden: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=800&h=600&fit=crop',
  },
  team: {
    doctor: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
    therapist: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop',
    nurse: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop',
  },
  blog: {
    default: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=500&fit=crop',
  },
};

/**
 * Get optimized image props for Next.js Image component
 * @param {string} src - Image source
 * @param {string} alt - Alt text
 * @returns {object} Image props
 */
export const getImageProps = (src, alt) => {
  return {
    src,
    alt,
    loading: 'lazy',
    quality: 85,
  };
};
