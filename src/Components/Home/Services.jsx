
import { FaLaptopCode, FaTshirt, FaPencilAlt, FaStethoscope } from 'react-icons/fa'; // Import relevant icons

const Services = () => {
  return (
    <section id="services" className="pt-20 pb-5 bg-white">
  <div className="text-center container-custom px-5">
    <h2 className="text-3xl font-bold text-blue-500 mb-10">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <a href="https://zanvisionlabs.com"
      target='blank'
        className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <FaLaptopCode className="text-blue-500 text-4xl mb-4" />
        <h3 className="text-xl font-semibold mb-2">IT Services</h3>
        <p className="text-gray-600">Providing cutting-edge IT solutions and support.</p>
      </a>
      <a href="https://zanmart.zanvisionlabs.com/"
        target='blank'
        className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <FaTshirt className="text-blue-500 text-4xl mb-4" />
        <h3 className="text-xl font-semibold mb-2">Garments</h3>
        <p className="text-gray-600">High-quality garment production and supply.</p>
      </a>
      <a href="https://zanmart.zanvisionlabs.com/"
        target='blank'
        className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <FaPencilAlt className="text-blue-500 text-4xl mb-4 mx-auto" />
        <h3 className="text-xl font-semibold mb-2">Stationery</h3>
        <p className="text-gray-600">Comprehensive stationery solutions for all your needs.</p>
      </a>
      <a href='https://zanmart.zanvisionlabs.com/'
        target='blank'
        className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <FaStethoscope className="text-blue-500 text-4xl mb-4 mx-auto" />
        <h3 className="text-xl font-semibold mb-2">Medical Equipment</h3>
        <p className="text-gray-600">Supplying high-quality medical equipment and tools.</p>
      </a>
    </div>
  </div>
</section>

  );
};

export default Services;
