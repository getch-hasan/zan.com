
import hero from '../../assets/hero.webp';

const HeroSection = () => {
    return (
        <section id="hero" className="h-screen  flex items-center justify-center bg-gray-100 px-4">
            <div className="container-custom flex flex-col sm:flex-row items-center">
                <div className="text-center  sm:text-left sm:w-1/2 mb-8 sm:mb-0" data-aos="fade-right" data-aos-duration="1000">
                    <h1 className="text-3xl overflow-hidden sm:text-4xl md:text-5xl font-bold text-blue-500 mb-4">
                    Empowering Your Business with Innovative Solutions
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-700">
                    At ZAN, we specialize in providing top-notch IT services, high-quality garments, essential stationery, and reliable medical equipment. Our mission is to deliver excellence and help your business thrive in a competitive marketplace.
                    </p>
                </div>
                <div className="sm:w-1/2" data-aos="fade-up" data-aos-duration="1000">
                    <img src={hero} alt="Hero" className="w-full h-auto rounded-lg" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
