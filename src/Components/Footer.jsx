import { FaFacebookF } from 'react-icons/fa';
import { LuTwitter } from 'react-icons/lu';
import { SlSocialLinkedin } from 'react-icons/sl';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div className="container-custom py-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-center sm:text-left">
      {/* Company Info */}
      <div className="flex flex-col items-center sm:items-start">
        <img className="w-44" src={logo} alt="Zan Limited Logo" />
        <p className="text-2xl font-semibold mt-2">Zan Limited</p>
      </div>

      {/* Company Links */}
      <div className="flex flex-col items-center sm:items-start gap-2">
        <h1 className="text-xl font-bold">Company</h1>
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#services">Service</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Social Media */}
      <div className="flex flex-col items-center sm:items-start">
        <h1 className="font-bold text-xl">Social Media</h1>
        <a href="#" className="flex items-center space-x-2 mt-2">
          <FaFacebookF className="border w-10 p-2 h-10 rounded-lg" />
          <p>Facebook</p>
        </a>
        <a href="#" className="flex items-center space-x-2 mt-2">
          <LuTwitter className="border w-10 p-2 h-10 rounded-lg" />
          <p>Twitter</p>
        </a>
        <a href="#" className="flex items-center space-x-2 mt-2">
          <SlSocialLinkedin className="border w-10 p-2 h-10 rounded-lg" />
          <p>LinkedIn</p>
        </a>
      </div>

      {/* Legal & Press */}
      <div className="flex flex-col items-center sm:items-start gap-2">
        <h1 className="text-xl font-bold">Legal & Press</h1>
        <a href="/privacy-policy" className="py-2">Privacy Policy</a>
        <a href="/terms-condition" className="py-2">Terms & Conditions</a>
      </div>
    </div>
  );
};

export default Footer;
