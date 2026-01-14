export interface FeaturedReview {
  author: string;
  rating: number;
  date: string; // YYYY-MM-DD
  text: string;
  source: "Google";
}

export const featuredReviews: FeaturedReview[] = [
  {
    author: "Yadira B.",
    rating: 5,
    date: "2026-01-04",
    text: "222 Fit is a beautiful community to start your fitness journey! Coach Bri is very attentive and supportive in helping you reach your fitness goals. The group classes are always very high energetic and fun and have you coming back for more! Highly recommend training with Coach Bri!",
    source: "Google",
  },
  {
    author: "Sarah W.",
    rating: 5,
    date: "2026-01-04",
    text: "I cannot say enough great things about 222 Fit and its owner, Briana. This is not a one-size-fits-all gym—everything is thoughtful, education-driven, and focused on real, lasting results. Briana’s knowledge and ability to personalize training to your goals and limitations is exceptional. If you’re looking for professionalism and individualized care, this is the place.",
    source: "Google",
  },
  {
    author: "Julyanna G.",
    rating: 5,
    date: "2026-01-04",
    text: "I honestly can’t say enough good things about these personal group training classes. In less than a year, I have transformed not only physically, but mentally and emotionally too. The energy is unmatched—supportive people, good vibes, and amazing trainers. Bri and Brandon genuinely care about your growth and make every class motivating and empowering. I highly recommend this place!",
    source: "Google",
  },
];

