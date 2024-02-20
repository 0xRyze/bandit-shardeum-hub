import { useState } from "react";

const Faqs = () => {
  return (
    <section id="dev-faq" className="sidepad-sm px-0">
      <h1 className="text-[42px] md:text-[85px] pt-[100px] pb-[32px] md:pb-[100px]">
        FAQs
      </h1>
      <div className="faq-wrap faqcontainer">
        <FaqItem question="What is the reward amount?" />
        <FaqItem question="How do you calculate winner?" />
        <FaqItem question="How to claim reward?" />
      </div>
    </section>
  );
};

const FaqItem = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`faq-question ${isOpen ? "open" : ""} px-0`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="inner-wrap !mx-0">
        <div className="question">
          <div className="arr">
            <span className="icon-arrow" />
          </div>
          <h2 className="text-[24px] md:text-[38px] font-bold">{question}</h2>
        </div>
        <div className="answer" style={{ height: isOpen ? "auto" : 0 }}>
          <div>
            <div>
              <p>
                With GUI, you can start running a node with a few clicks of your
                mouse. Shardeum is one of the first L1 networks to enable
                user-friendly GUI feature for node validatorsCLI is the primary
                interface used by the vast majority of blockchain networks. It
                is enabled for more advanced users and developers who intend to
                work with nodes more deeply and technically
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
