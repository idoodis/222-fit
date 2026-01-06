import { SectionHeader } from "@/components/SectionHeader";
import { DEFAULT_CITY } from "@/lib/constants";
import { generateMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";

export const metadata = generateMetadata({
  title: "Frequently Asked Questions",
  description: `Common questions about 222 Fit services, pricing, and training programs in ${DEFAULT_CITY}.`,
  path: "/faq",
});

const faqs = [
  {
    question: "Do I need prior fitness experience?",
    answer:
      "No prior experience is necessary! Our trainers work with clients of all fitness levels, from complete beginners to advanced athletes. We'll assess your current fitness level and create a program that's appropriate for you.",
  },
  {
    question: "What should I bring to my first session?",
    answer:
      "For your first session, bring comfortable workout clothes, athletic shoes, a water bottle, and a towel. We provide all necessary equipment. If you have any specific equipment preferences or requirements, let us know in advance.",
  },
  {
    question: "How long are the training sessions?",
    answer:
      "Most training sessions are 45-60 minutes long. Group classes typically run for 45 minutes, while personal training sessions are usually 60 minutes. Online training sessions can be customized to fit your schedule.",
  },
  {
    question: "Can I try a session before committing?",
    answer:
      "Yes! We offer trial sessions for new clients. Contact us to schedule a trial session and see if our training style is a good fit for you.",
  },
  {
    question: "What's the cancellation policy?",
    answer:
      "We require 24 hours notice for cancellations. Cancellations made with less than 24 hours notice may be subject to a fee. We understand that emergencies happen, so please contact us if you need to reschedule.",
  },
  {
    question: "Do you offer nutrition guidance?",
    answer:
      "Yes! Many of our packages include nutrition guidance. Our trainers can provide general nutrition advice and help you create a meal plan that supports your fitness goals. For more detailed nutrition coaching, we can connect you with a registered dietitian.",
  },
  {
    question: "What's the difference between group training and personal training?",
    answer:
      "Personal training offers one-on-one attention with a customized program tailored specifically to your goals. Group training provides a motivating group atmosphere at a lower cost. Both are effective - the choice depends on your preferences, goals, and budget.",
  },
  {
    question: "How do I book a session?",
    answer:
      "You can book a session through our online booking system, or contact us directly via phone or email. We'll help you find a time that works for your schedule.",
  },
];

export default function FAQPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "FAQ", url: "/faq" },
  ]);

  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4 py-12 md:py-16">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="FAQ"
          description="Common questions about our services and training programs"
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-card p-6"
            >
              <h3 className="mb-2 text-lg font-semibold">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

