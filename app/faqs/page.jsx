'use client';
import { useState } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import styles from "./faqs.module.css";

const FAQData = [
  {
    question: "What is a hackathon ?",
    answer:
      "A hackathon is a programming competition in which competitors use technology to build innovative projects within a fixed time duration. There will be opportunities to win cool prizes, learn from our key-note speakers, and network with our sponsors.",
  },
  {
    question: "Who can participate in HackSRM ?",
    answer:
      "Anyone! Whether you are a total beginner or a tech wizard, it doesn’t matter. We encourage anyone who is interested in learning more about Hackathons, programming, and the tech industry to join HackSRM!",
  },
  {
    question: "Do I have to know how to code to join ?",
    answer:
      "Nope! You can learn along the way or team up with experienced programmers. Skills such as designing, business planning, and etc are all going to impact the projects in various ways!",
  },
  {
    question: "How much does it cost to participate in HackSRM ??",
    answer:
      "Zero. Zip. Zilch. Nada. Nothing. Admission to HackSRM is completely free, thanks to our sponsors!",
  },
  {
    question: "Is it a team event ?",
    answer:
      "Yes, you can form teams of up to 5 people. If you don't have a team, don't worry! We will have a few workshops and talks to help you get started. You can also join our Discord server to find teammates before the event!",
  },
  {
    question: "Can I apply individually ?",
    answer: "Yes, you can also form a team after you get selected.",
  },

  {
    question: "Is there a code of conduct ?",
    answer:
      "Attendees must abide by our Code of Conduct. We want to respect each other and keep HackSRM a safe environment for all participants.",
  },
  {
    question: "When and where is the hackathon?",
    answer:
      "HackSRM will be hosted on Feb 5th - 6th 2025 at APJ Abdul Kalam Auditorium,SRM University AP.",
  },
];

export function FAQSection() {
  return (
    <>
    <div id="FAQS" className={styles.temp}></div>
    <section className={styles.faqSection}>
      <div className={styles.title}>Frequently Asked Questions</div>
      <div className={styles.container}>
        <div className={styles.faqList}>
          {FAQData.map((faq) => (
            <div key={faq.question}>
              <QuestionsAndAnswers faq={faq} />
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

const QuestionsAndAnswers = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={styles.question}
      >
        <span>{faq.question}</span>
        <span>
          {isOpen ? (
            <IconChevronUp stroke={1.5} size={24} />
          ) : (
            <IconChevronDown size={24} stroke={1.5} />
          )}
        </span>
      </div>
      {isOpen && <p className={styles.answer}>{faq.answer}</p>}
    </div>
  );
};
