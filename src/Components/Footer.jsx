
import { FaFacebookF } from 'react-icons/fa';
import { LuTwitter } from 'react-icons/lu';
import { SlSocialLinkedin } from 'react-icons/sl';
import logo from '../assets/logo.png'
const Footer = () => {
    return (
        <div className= ' container-custom py-10 grid sm:grid-cols-2 xs:grid-cols-1 lg:grid-cols-4  gap-5'>
           <div className='grid'>
                  <img className='w-44' src={logo} alt="" />
                <p  className='relative items-center text-2xl font-semibold '> Zan Limited </p>

            </div>
            <div className='grid gap-2'>
                <h1 className='text-xl font-bold'>Company</h1>
               
                <a href='/'>Home</a>
                <a href='#about'>About</a>
                <a href='#services'>Service</a>
                <a href='#contact'>Contact</a>
            </div>
            <div className=''>
                <h1 className='font-bold text-xl'>Social Media</h1>
                <a href='' className='flex items-center'><span className=''><FaFacebookF className='border w-10 p-2 h-10  me-1 rounded-lg' /></span><p className='py-4'>Facebook</p></a>
                {/* <div className='flex items-center'><span className=''><FaInstagram className='border w-10 p-2 h-10 me-1 rounded-lg' /></span><p className='py-4'>Instagram</p></div> */}
                <a href='' className='flex items-center'><span className=''><LuTwitter className='border w-10 p-2 h-10   me-1 rounded-lg' /></span><p className='py-4'>Twitter</p></a>
                <a href='' className='flex items-center'><span className=''><SlSocialLinkedin className='border w-10 p-2 me-1 h-10 rounded-lg' /></span><p className='py-4'>LinkedIn</p></a>

            </div>
            <div className='grid gap-2'>
                <h1 className='text-xl font-bold'>Legal & Press</h1>
               <p> <a href='/privacy-policy' className='py-2'>Privacy Policy</a></p>
              <p>  <a href='/terms-condition' className='py-2'>Terms & Conditions</a></p>
                
            </div>
        </div>
    );
};

export default Footer;