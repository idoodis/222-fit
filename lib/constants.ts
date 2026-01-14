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
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?sca_esv=cbcc352c89b9e229&sxsrf=ANbL-n6Zvdkvz3ffL-CGEAYZhq7pMs44DA:1768420080740&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOa9yPN29-40MLSV4ieyYqe2IB2dKuAr6OWRMWlxD0DjETPm4jU_rw-3oBkaFRkQgRXsay0pA3yj8wc7ylVpPkBfnrJKF&q=222+FIT+Reviews&sa=X&ved=2ahUKEwiWqueV5ouSAxUs7skDHTJdEkcQ0bkNegQIQhAH&biw=1536&bih=826&dpr=1.25&aic=0";

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

