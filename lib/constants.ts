export const SITE_NAME = "222 Fit";
export const SITE_DESCRIPTION = "Premium fitness training in Carol Stream. Personal training, group classes, Pilates, boxing, and online coaching.";
export const DEFAULT_CITY = "Carol Stream";
export const ADDRESS = {
  street: "503 Thornhill Dr",
  city: "Carol Stream",
  state: "IL",
  zip: "60188",
  full: "503 Thornhill Dr, Carol Stream, IL 60188",
};

export const BOOKING_MEMBERSHIPS_URL = "https://www.vagaro.com/222fit/memberships";

export const SERVICES = [
  {
    slug: "personal-training",
    title: "Personal Training",
    description: "One-on-one training tailored to your goals",
    icon: "dumbbell",
  },
  {
    slug: "group-training",
    title: "Group Training Classes",
    description: "Motivating group workouts for all fitness levels",
    icon: "users",
  },
  {
    slug: "mat-pilates",
    title: "Mat Pilates",
    description: "Core strength and flexibility through Pilates",
    icon: "activity",
  },
  {
    slug: "boxing-lessons",
    title: "Boxing Lessons",
    description: "Learn boxing techniques and get in shape",
    icon: "boxing-glove",
  },
  {
    slug: "online-training",
    title: "Online Training",
    description: "Train from home or gym with virtual coaching",
    icon: "monitor",
  },
] as const;

