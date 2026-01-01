import { ReadingResource, Testimonial, DailyFocus } from '@/types';

export const readingResources: ReadingResource[] = [
  {
    id: '1',
    title: 'Understanding Digital Addiction',
    description: 'Scientific perspective on how digital habits form and why they are hard to break',
    url: 'https://detoxmind.org/resources/digital-addiction',
    image: '/resources/addiction.jpg',
    tags: ['science', 'basics', 'understanding']
  },
  {
    id: '2',
    title: 'The Brain Science of Habit Change',
    description: 'How neuroplasticity works and what it means for recovery',
    url: 'https://detoxmind.org/resources/brain-science',
    image: '/resources/brain.jpg',
    tags: ['science', 'neuroscience', 'habits']
  },
  {
    id: '3',
    title: 'Dealing with Urges',
    description: 'Practical strategies for when the urge hits',
    url: 'https://detoxmind.org/resources/urges',
    image: '/resources/urges.jpg',
    tags: ['practical', 'strategies', 'mindfulness']
  },
  {
    id: '4',
    title: 'Building Healthy Routines',
    description: 'Replace old patterns with sustainable new habits',
    url: 'https://detoxmind.org/resources/routines',
    image: '/resources/routines.jpg',
    tags: ['practical', 'habits', 'lifestyle']
  },
  {
    id: '5',
    title: 'Understanding Shame and Recovery',
    description: 'Why shame makes things worse and how to move past it',
    url: 'https://detoxmind.org/resources/shame',
    image: '/resources/shame.jpg',
    tags: ['psychology', 'emotions', 'healing']
  },
  {
    id: '6',
    title: 'The Role of Community',
    description: 'How connection supports recovery without exposure',
    url: 'https://detoxmind.org/resources/community',
    image: '/resources/community.jpg',
    tags: ['community', 'support', 'connection']
  },
  {
    id: '7',
    title: 'Sleep and Digital Health',
    description: 'The connection between screen time, dopamine, and sleep quality',
    url: 'https://detoxmind.org/resources/sleep',
    image: '/resources/sleep.jpg',
    tags: ['health', 'science', 'lifestyle']
  },
  {
    id: '8',
    title: 'Mindfulness for Digital Detox',
    description: 'Simple mindfulness practices that support your journey',
    url: 'https://detoxmind.org/resources/mindfulness',
    image: '/resources/mindfulness.jpg',
    tags: ['mindfulness', 'practical', 'meditation']
  },
  {
    id: '9',
    title: 'What to Do After Relapse',
    description: 'Specific steps to take when you slip up',
    url: 'https://detoxmind.org/resources/after-relapse',
    image: '/resources/relapse.jpg',
    tags: ['relapse', 'practical', 'recovery']
  },
  {
    id: '10',
    title: 'Long-term Maintenance',
    description: 'Sustaining change beyond the 30 days',
    url: 'https://detoxmind.org/resources/long-term',
    image: '/resources/longterm.jpg',
    tags: ['long-term', 'lifestyle', 'maintenance']
  }
];

export const dailyFocuses: DailyFocus[] = [
  { day: 1, text: 'You decided to start. That\'s enough for today.' },
  { day: 2, text: 'Notice the urges without acting on them.' },
  { day: 3, text: 'Discomfort is part of change, not a sign of failure.' },
  { day: 4, text: 'Your brain is already beginning to rewire.' },
  { day: 5, text: 'Progress isn\'t always visible, but it\'s happening.' },
  { day: 6, text: 'One decision at a time builds new patterns.' },
  { day: 7, text: 'First week complete. You showed up seven times.' },
  { day: 8, text: 'Recovery isn\'t about perfection, it\'s about direction.' },
  { day: 9, text: 'Each moment of resistance strengthens you.' },
  { day: 10, text: 'Notice what\'s different, even if it\'s small.' },
  { day: 11, text: 'Struggle means you\'re pushing against something real.' },
  { day: 12, text: 'Your effort matters more than the outcome.' },
  { day: 13, text: 'Building new habits takes time and repetition.' },
  { day: 14, text: 'Two weeks. You\'re building something.' },
  { day: 15, text: 'Halfway to 30. Keep going.' },
  { day: 16, text: 'Some days are harder. That\'s normal.' },
  { day: 17, text: 'You\'re not alone in this journey.' },
  { day: 18, text: 'Notice the moments when it feels easier.' },
  { day: 19, text: 'Each day adds to your foundation.' },
  { day: 20, text: 'Twenty days of showing up matters.' },
  { day: 21, text: 'Three weeks. New patterns are forming.' },
  { day: 22, text: 'Consistency builds trust with yourself.' },
  { day: 23, text: 'You\'ve come further than you think.' },
  { day: 24, text: 'Keep moving forward, one day at a time.' },
  { day: 25, text: 'Five days to 30. You can do this.' },
  { day: 26, text: 'Almost there. Don\'t stop now.' },
  { day: 27, text: 'Three more days. Stay steady.' },
  { day: 28, text: 'You\'re building something lasting.' },
  { day: 29, text: 'One more day to 30. You made it this far.' },
  { day: 30, text: 'Thirty days. What you built here continues beyond today.' }
];
