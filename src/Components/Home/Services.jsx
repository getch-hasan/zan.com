
import { FaLaptopCode, FaTshirt, FaPencilAlt, FaStethoscope } from 'react-icons/fa'; // Import relevant icons

const Services = () => {
  return (
<section id="services" className="pt-20 pb-5 bg-white">
  <div className="text-center container-custom overflow-hidden px-5">
    <h2 className="text-3xl font-bold text-blue-500 mb-10">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <a href="https://zanvisionlabs.com"
         target="blank"
         className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
         data-aos="fade-up"
         data-aos-duration="1000"
      >
      <img  className='h-20 w-20' src='/zan.jpeg' alt='zan'/>
        <h3 className="text-xl font-semibold mb-2">Zan vision Labs  </h3>
        <p className="text-gray-600">Zan Vision Labs provides reliable and innovative IT services, empowering businesses with robust digital infrastructure and custom software solutions.</p>

      </a>
      
      <a href="https://zanmart.com/"
         target="blank"
         className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
         data-aos="fade-down"
         data-aos-duration="1000"
      >
        <img  className='h-20 w-20' src='/zanmart.png' alt='zanmart'/>
        <h3 className="text-xl font-semibold mb-2">Zan Mart</h3>
        <p className="text-gray-600">ZanMart is a streamlined single-vendor eCommerce platform, empowering businesses to sell directly to customers with ease and efficiency.</p>

      </a>

      <a href="https://mocktestbd.com/"
         target="blank"
         className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
         data-aos="fade-left"
         data-aos-duration="1000"
      >
       <img  className='h-20 w-20' src='/mocktest.webp' alt='zanmart'/>
        <h3 className="text-xl font-semibold mb-2">Mocktestbd.com</h3>
        <p className="text-gray-600">MockTestBD.com offers comprehensive online mock tests to help students prepare confidently for competitive exams and academic assessments.</p>

      </a>

     
    </div>
  </div>
</section>

  );
};

export default Services;
