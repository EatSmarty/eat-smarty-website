

function Faq() {
    const accordionData = [
        {
            title: "test1?",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt laborum vel corrupti neque consequuntur reprehenderit ut, porro omnis quidem fugit officiis, eaque enim tempora laboriosam praesentium? Provident pariatur ducimus repellat.",
        },
        {
            title: "test2?",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt laborum vel corrupti neque consequuntur reprehenderit ut, porro omnis quidem fugit officiis, eaque enim tempora laboriosam praesentium? Provident pariatur ducimus repellat.",
        },
        {
            title: "test3?",
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt laborum vel corrupti neque consequuntur reprehenderit ut, porro omnis quidem fugit officiis, eaque enim tempora laboriosam praesentium? Provident pariatur ducimus repellat.",
        }
      ]
  return <div>
  <section className='contactus mt-20 text-2xl flex justefy-center items-center flex-col'>
      <p className='title text-bold text-[#0069FE] mb-10'>FAQ</p>
      <div className='contact-box rounded flex justify-center items-center flex-col'>
      
      <div className='faq-container mb-20'>
      {accordionData.map((data) => {
            // eslint-disable-next-line react/jsx-key
            return <div className="container flex justify-center items-center flex-col px-10 py-5 text-base text-gray-500 text-center">
                <div className="title mb-10 text-2xl">{data.title}</div>
                <div className="desc">{data.desc}</div>
            </div> 
        })}
      </div>
      </div>
  </section>
</div>
}

export default Faq