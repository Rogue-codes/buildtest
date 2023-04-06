import React, { useState } from "react";

export default function Faq() {
  const data = [
    {
      question: "What is Node Army? ",
      answer:
        "Node Army is a cloud-native blockchain infrastructure provider that empowers individuals and businesses to deploy and manage nodes, even without technical expertise. Our infrastructure is secure and scalable, with advanced features such as co-nodes, compounding, and managed nodes.",
    },
    {
      question: "How can I benefit from using Node Army?",
      answer:
        "Node Army is a cloud-native blockchain infrastructure provider that empowers individuals and businesses to deploy and manage nodes, even without technical expertise. Our infrastructure is secure and scalable, with advanced features such as co-nodes, compounding, and managed nodes.",
    },
    {
      question: "Do I need technical expertise to use Node Army?",
      answer:
        "Node Army is a cloud-native blockchain infrastructure provider that empowers individuals and businesses to deploy and manage nodes, even without technical expertise. Our infrastructure is secure and scalable, with advanced features such as co-nodes, compounding, and managed nodes.",
    },
    {
      question: "What kind of support does Node Army provide?",
      answer:
        "Node Army is a cloud-native blockchain infrastructure provider that empowers individuals and businesses to deploy and manage nodes, even without technical expertise. Our infrastructure is secure and scalable, with advanced features such as co-nodes, compounding, and managed nodes.",
    },
    {
      question: "How do I get started with Node Army?",
      answer:
        "Node Army is a cloud-native blockchain infrastructure provider that empowers individuals and businesses to deploy and manage nodes, even without technical expertise. Our infrastructure is secure and scalable, with advanced features such as co-nodes, compounding, and managed nodes.",
    },
    {
      question: "How will I be rewarded by using Node Army?",
      answer:
        "Node Army is a cloud-native blockchain infrastructure provider that empowers individuals and businesses to deploy and manage nodes, even without technical expertise. Our infrastructure is secure and scalable, with advanced features such as co-nodes, compounding, and managed nodes.",
    },
  ];

  const [active, setActive] = useState<number|null>(0);

  const toggleAccordion = (index: number) => {
    index === active ? setActive(null):
    setActive(index);
  };
  return (
    <div>
      <h2 className="headers text-4xl lg:text-6xl leading-[8rem] capitalize mt-[3.75rem] text-center">
        Frequently Asked
      </h2>
      <div className="w-full px-5 lg:px-0 lg:w-[70%] mx-auto">
        {data.map((data, index) => (
          <div
            key={index}
            className={`${
              active === index ? "h-[32rem] lg:h-[16rem]" : "h-16"
            } overflow-hidden mt-12 transition-all`}
          >
            <header
              className={`${
                active === index
                  ? "bg-gradient-to-r from-[#FFCC97] to-[#D5D9C5] text-black-100"
                  : "bg-[#000]"
              } flex text-white-100 justify-between items-center px-7 py-1 lg:py-5 `}
              onClick={() => toggleAccordion(index)}
            >
              <p>{data.question}</p>
              <p className="cursor-pointer">{active === index ? "-" : "+"}</p>
            </header>
            <main className="px-5 text-lg leading-[30px] font-normal mt-8">{data.answer}</main>
          </div>
        ))}
      </div>
    </div>
  );
}
