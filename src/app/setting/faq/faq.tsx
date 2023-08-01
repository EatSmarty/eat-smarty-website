

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
  return <div>
  <section className='faq flex justefy-center items-center flex-col'>
      <div className='contact-box rounded flex justify-center items-center flex-col'>
        <div className='faq-container mb-10 mt-16'>
            {faqData.map((data) => {
                    // eslint-disable-next-line react/jsx-key
                    return <div className="container flex justify-center items-center flex-col px-5 py-5 text-base text-gray-500 text-left ">
                        <div className="font-bold text-center mb-2">{data.title}</div>
                        <div className="desc">{data.desc}</div>
                    </div> 
                })}
        </div>
      </div>
  </section>
</div>
}

export default Faq