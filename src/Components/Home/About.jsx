
import sir from '../../assets/sir.jpg';

const About = () => {
  return (
    <section id="about" className="pt-20 bg-gray-100">
  <div className="container-custom px-4 overflow-hidden">
    <h2
      className="text-3xl font-bold text-blue-500 text-center mb-10"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      About Us
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:items-center gap-8 md:gap-12 lg:gap-20 mb-10">
      <div
        className="w-full flex justify-center mb-6 md:mb-0"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <img
          src={sir}
          alt="A K M Badruzzoha"
          className="rounded-lg shadow-2xl sm:max-w-xs md:max-w-sm h-auto"
        />
      </div>
      <div
        className="w-full md:w-4/5"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <h3
          className="text-2xl font-bold"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          A K M Badruzzoha
        </h3>
        <p
          className="text-gray-700 mt-4 text-start"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          A K M Badruzzoha has been at the forefront of our company’s growth and success, leading with a vision of innovation and excellence. With over 20 years of industry experience, he has a proven track record of driving business development and fostering strong client relationships. Under his leadership, our company has achieved remarkable milestones, positioning us as a trusted partner in the industry.
        </p>
        <p
          className="text-gray-700 mt-4"
          data-aos="fade-up"
          data-aos-duration="1400"
        >
          His commitment to quality and customer satisfaction has played a key role in shaping the company’s culture and strategic direction. He continues to inspire our team with his relentless pursuit of excellence and passion for delivering exceptional value to our clients.
        </p>
      </div>
    </div>
  </div>
</section>

  );
};

export default About;
