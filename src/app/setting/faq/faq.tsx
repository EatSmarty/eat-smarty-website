import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/accordion";

function Faq() {
    const faqData = [
        {
            title: "What is your startup's main service?",
            desc: "We specialize in providing a convenient and efficient solution for identifying halal food products using their barcodes. With our technology, you can quickly determine whether a product meets your halal dietary requirements.",
        },
        {
            title: "How does your barcode scanning process work?",
            desc: "Our cutting-edge barcode scanning technology employs advanced algorithms to analyze the barcode data of food products. It cross-references this data with our extensive halal food database to determine the product's halal status accurately.",
        },
        {
            title: "Is your halal identification process reliable?",
            desc: "Absolutely! Our startup has invested significant efforts in building a robust and up-to-date halal food database. We continuously verify and update the information to ensure the highest level of accuracy in identifying halal products.",
        },
        {
            title: "Can your service be used internationally?",
            desc: "Yes, our service is designed to work internationally. As long as the product's barcode can be scanned, our system can determine its halal status, regardless of the country of origin or purchase.",
        },
        {
            title: "What languages does your app support?",
            desc: "Currently, our app supports multiple languages, making it accessible to a broader audience. English is the default language, but we offer options for users to choose from various other languages to enhance user experience and understanding.",
        },
        {
            title: "Is your startup affiliated with any halal certification organizations?",
            desc: "While we strive to collaborate with reputable halal certification organizations to enrich our database, we operate as an independent entity. Our identification process is based on our own comprehensive research and verification.",
        },
        {
            title: "Can users contribute to the database?",
            desc: "Yes, we value user contributions and encourage our community to provide feedback and suggest new products or updates to existing entries. Users can help us ensure the database remains accurate and relevant.",
        },
        {
            title: "What measures do you take to ensure data privacy and security?",
            desc: "Protecting our users' data is a top priority. We employ industry-standard security protocols to safeguard all user information and follow strict privacy policies to maintain confidentiality.",
        },
        {
            title: "Is your app free to use?",
            desc: "We offer both free and premium subscription options. The free version includes basic features, while our premium subscription unlocks additional benefits and advanced functionalities for a seamless experience.",
        }
      ]
  return <Accordion className="accordion mt-20 text-gray-500" isCompact variant="splitted" defaultExpandedKeys={["1"]} hideIndicator
    motionProps={{
        variants: {
        enter: {
            y: 0,
            opacity: 1,
            height: "auto",
            transition: {
            height: {
                type: "spring",
                stiffness: 500,
                damping: 30,
                duration: 1,
            },
            opacity: {
                easings: "ease",
                duration: 1,
            },
            },
        },
        exit: {
            y: -10,
            opacity: 0,
            height: 0,
            transition: {
            height: {
                easings: "ease",
                duration: 0.25,
            },
            opacity: {
                easings: "ease",
                duration: 0.3,
            },
            },
        },
        },
    }}
  >
  <AccordionItem className="accordion-item text-xl m-5" key="1" aria-label={faqData[0].title} title={faqData[0].title}>
      <p className="desc text-base">{faqData[0].desc}</p>
  </AccordionItem>
  <AccordionItem className="accordion-item text-xl m-5" key="2" aria-label={faqData[1].title} title={faqData[1].title}>
      <p className="desc text-base">{faqData[1].desc}</p>
  </AccordionItem>
  <AccordionItem className="accordion-item text-xl m-5" key="3" aria-label={faqData[2].title} title={faqData[2].title}>
      <p className="desc text-base">{faqData[2].desc}</p>
  </AccordionItem>
</Accordion>
}

export default Faq