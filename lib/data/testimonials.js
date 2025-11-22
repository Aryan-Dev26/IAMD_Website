/**
 * Testimonials Data
 * Patient and family testimonials
 */

export const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    age: 28,
    location: 'Delhi',
    role: 'MD Warrior',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    quote: 'IAMD gave me hope when I thought there was none. The physiotherapy program helped me regain mobility I thought I had lost forever.',
    story: 'After being diagnosed with Duchenne Muscular Dystrophy at age 12, I struggled with daily activities. The comprehensive care at IAMD, especially the physiotherapy and counselling, has transformed my life. I can now do things I never thought possible.',
    rating: 5,
    date: '2023-11-15',
    program: 'Physiotherapy & Counselling',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    age: 35,
    location: 'Mumbai',
    role: 'Parent',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    quote: 'As a mother, seeing my son improve at IAMD has been the greatest gift. The staff treats him like family.',
    story: 'When my son was diagnosed with MD, we felt lost. IAMD not only provided excellent medical care but also emotional support for our entire family. The counselling sessions helped us cope and stay positive.',
    rating: 5,
    date: '2023-10-20',
    program: 'Family Support & Counselling',
  },
  {
    id: 3,
    name: 'Amit Patel',
    age: 24,
    location: 'Gujarat',
    role: 'MD Warrior',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    quote: 'The occupational therapy program taught me how to live independently. I now work from home and support my family.',
    story: 'IAMD\'s occupational therapy program was life-changing. They taught me adaptive techniques and helped me set up my home workspace. Today, I\'m a successful freelance graphic designer.',
    rating: 5,
    date: '2023-09-10',
    program: 'Occupational Therapy',
  },
  {
    id: 4,
    name: 'Sunita Reddy',
    age: 42,
    location: 'Hyderabad',
    role: 'Parent',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
    quote: 'The residential facility at Manav Mandir is world-class. My daughter receives the best care possible.',
    story: 'We traveled from Hyderabad to Solan for treatment. The facilities, staff, and care at Manav Mandir exceeded all our expectations. It truly feels like a home away from home.',
    rating: 5,
    date: '2023-08-25',
    program: 'Residential Care',
  },
  {
    id: 5,
    name: 'Vikram Singh',
    age: 19,
    location: 'Punjab',
    role: 'MD Warrior',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
    quote: 'The respiratory care program literally saved my life. I can breathe easier and sleep better now.',
    story: 'I was struggling with severe respiratory issues. The respiratory care team at IAMD taught me breathing exercises and proper ventilator use. My quality of life has improved dramatically.',
    rating: 5,
    date: '2023-07-30',
    program: 'Respiratory Care',
  },
  {
    id: 6,
    name: 'Meera Iyer',
    age: 38,
    location: 'Chennai',
    role: 'Parent',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
    quote: 'The nutrition program helped my son gain healthy weight and have more energy for therapy.',
    story: 'My son was underweight and weak. The dietitian at IAMD created a personalized meal plan that worked wonders. He\'s now stronger and more active in his therapy sessions.',
    rating: 5,
    date: '2023-06-15',
    program: 'Nutrition & Dietetics',
  },
];

export const getTestimonialById = (id) => {
  return testimonials.find((testimonial) => testimonial.id === id);
};

export const getTestimonialsByProgram = (program) => {
  return testimonials.filter((testimonial) => 
    testimonial.program.toLowerCase().includes(program.toLowerCase())
  );
};

export const getFeaturedTestimonials = (count = 3) => {
  return testimonials.slice(0, count);
};
