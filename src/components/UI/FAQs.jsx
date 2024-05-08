import React from "react";
import Accordion from "../reusable/Accordion.jsx";
import faqbg from "../../assets/Union.svg";

const accordionData = [
  {
    question: "Do you offer freelancers?",
    answer:
      "Yes, our company offers freelance opportunities for individuals looking to work independently on various projects and assignments.",
  },
  {
    question:
      "What's the guarantee that I will be satisfied with the hired talent?",
    answer:
      "We strive to ensure satisfaction by carefully matching talents to your needs and offering support throughout the project.",
  },
  {
    question: "Can I hire multiple talents at once?",
    answer:
      "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
  },
  {
    question: "Why should I not go to an agency directly?",
    answer:
      "Choosing us ensures personalized attention, competitive rates, and direct communication with talents, enhancing flexibility and project customization.",
  },
  {
    question: "Who can help me pick a right skillset and duration for me?",
    answer:
      "Our experienced team can assist in selecting the ideal skillset and duration tailored to your project requirements and goals.",
  },
];

function FAQs() {
  return (
    <div className="bg-[#E8EEE7] overflow-hidden rounded-3xl flex sm:flex-row flex-col px-10 sm:px-16 mx-2 sm:mx-8 md:px-20 md:py-14 py-10 mt-10 sm:mt-0">
      <div className="sm:w-1/2 relative">
        <h2 className="font-coveredByYourGrace font-medium text-[22px] text-[#9E9D9D]">
          What's on your mind
        </h2>
        <h2 className="font-bold  my-2  text-[40px]">Ask Questions</h2>
        <img
          src={faqbg}
          alt="union"
          className="absolute -left-2 top-[204px] h-[300px] hidden sm:block"
          draggable="false"
        />
      </div>
      <div className="sm:w-1/2 space-y-4 pt-12 pb-8">
        {accordionData.map((data, index) => (
          <Accordion
            key={index}
            question={data.question}
            answer={data.answer}
          />
        ))}
      </div>
    </div>
  );
}

export default FAQs;
