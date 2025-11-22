/**
 * Blog Posts Data
 * Articles, news, and updates from IAMD
 */

export const blogPosts = [
  {
    id: 1,
    slug: 'understanding-muscular-dystrophy',
    title: 'Understanding Muscular Dystrophy: A Comprehensive Guide',
    excerpt: 'Learn about the different types of muscular dystrophy, symptoms, and how early intervention can make a difference.',
    content: 'Full article content would go here...',
    author: 'Dr. Rajesh Verma',
    authorRole: 'Chief Medical Officer, IAMD',
    authorImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
    category: 'Education',
    tags: ['Muscular Dystrophy', 'Health', 'Awareness'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop',
    publishedAt: '2023-11-01',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 2,
    slug: 'importance-of-physiotherapy',
    title: 'The Importance of Regular Physiotherapy for MD Patients',
    excerpt: 'Discover how consistent physiotherapy can help maintain mobility and improve quality of life for muscular dystrophy patients.',
    content: 'Full article content would go here...',
    author: 'Priya Sharma',
    authorRole: 'Senior Physiotherapist',
    authorImage: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop',
    category: 'Therapy',
    tags: ['Physiotherapy', 'Treatment', 'Mobility'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop',
    publishedAt: '2023-10-25',
    readTime: '6 min read',
    featured: true,
  },
  {
    id: 3,
    slug: 'nutrition-tips-md-patients',
    title: 'Nutrition Tips for Muscular Dystrophy Patients',
    excerpt: 'Expert advice on maintaining proper nutrition and managing dietary challenges for MD patients.',
    content: 'Full article content would go here...',
    author: 'Anjali Desai',
    authorRole: 'Clinical Dietitian',
    authorImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
    category: 'Nutrition',
    tags: ['Nutrition', 'Diet', 'Health'],
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=600&fit=crop',
    publishedAt: '2023-10-15',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 4,
    slug: 'mental-health-matters',
    title: 'Mental Health Matters: Coping with MD Diagnosis',
    excerpt: 'Understanding the emotional impact of MD and strategies for maintaining mental well-being.',
    content: 'Full article content would go here...',
    author: 'Dr. Kavita Menon',
    authorRole: 'Clinical Psychologist',
    authorImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    category: 'Mental Health',
    tags: ['Mental Health', 'Counselling', 'Support'],
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&h=600&fit=crop',
    publishedAt: '2023-10-05',
    readTime: '7 min read',
    featured: true,
  },
  {
    id: 5,
    slug: 'respiratory-care-guide',
    title: 'Respiratory Care: Essential Guide for MD Patients',
    excerpt: 'Learn about respiratory complications in MD and how proper care can prevent serious issues.',
    content: 'Full article content would go here...',
    author: 'Dr. Suresh Kumar',
    authorRole: 'Respiratory Specialist',
    authorImage: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop',
    category: 'Medical Care',
    tags: ['Respiratory Care', 'Health', 'Prevention'],
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=1200&h=600&fit=crop',
    publishedAt: '2023-09-28',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 6,
    slug: 'adaptive-technology-independence',
    title: 'Adaptive Technology for Greater Independence',
    excerpt: 'Explore the latest assistive devices and technologies that can enhance independence for MD patients.',
    content: 'Full article content would go here...',
    author: 'Rahul Joshi',
    authorRole: 'Occupational Therapist',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    category: 'Technology',
    tags: ['Technology', 'Independence', 'Assistive Devices'],
    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=1200&h=600&fit=crop',
    publishedAt: '2023-09-20',
    readTime: '6 min read',
    featured: false,
  },
];

export const getBlogPostBySlug = (slug) => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getBlogPostById = (id) => {
  return blogPosts.find((post) => post.id === id);
};

export const getFeaturedPosts = () => {
  return blogPosts.filter((post) => post.featured);
};

export const getPostsByCategory = (category) => {
  return blogPosts.filter((post) => post.category === category);
};

export const getRecentPosts = (count = 3) => {
  return blogPosts
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, count);
};

export const categories = [
  'Education',
  'Therapy',
  'Nutrition',
  'Mental Health',
  'Medical Care',
  'Technology',
];
