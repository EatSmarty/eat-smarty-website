import { FC } from 'react'

interface aboutProps {
  
}

const About: FC<aboutProps> = ({}) => {
  return <div>
    <section className='common mt-20 text-2xl'>
          <p className=''>About</p>
          <div className='common-items text-xl'>
              <div className='setting-item language flex justify-between itmes-center w-full py-3 mt-3 rounded cursor-pointer'>
                <div className='flex justify-center items-center'>
                  <p className='ml-4'>FAQ</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-8 mr-4 hover:mr-3 duration-200 font-bold">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            <div className='setting-item contact-us flex justify-between itmes-center w-full py-3 mt-3 rounded cursor-pointer'>
                <div className='flex justify-center items-center'>
                  <p className='ml-4'>Contact Us</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-8 mr-4 hover:mr-3 duration-200 font-bold">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
          </div>
          </section>
  </div>
}

export default About