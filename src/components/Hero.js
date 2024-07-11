import HeroImg from '../assets/hero.jpg';
import { AiOutlineLinkedin, AiOutlinePhone, AiOutlineMail, AiOutlineGithub } from "react-icons/ai";

export default function Hero() {
    const config  = {
        subtitle: 'BCA -> MCA',
        contact: {
            phone: 'tel:+91-9498413977',
            email: 'mailto:mahalakshmir183@gmail.com',
            linkedin: 'https://www.linkedin.com/in/mahalakshmi-r-87a447279',
            github: 'https://github.com/Mahalakshmi-R-18'
        }
    }

    return (
        <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center items-center font-hero-font'>
            <div className='md:w-1/2 flex flex-col'>
                <h1 className='text-white text-6xl font-hero-font'>
                    Hello, <br/> I'm MAHALAKSHMI R
                    <p className='text-2xl'>{config.subtitle}</p>
                </h1>
                <div className='flex py-10'>
                    <a href={config.contact.phone} className='pr-5 hover:text-white'><AiOutlinePhone size={40} /></a>
                    <a href={config.contact.email} className='pr-5 hover:text-white'><AiOutlineMail size={40}/></a>
                    <a href={config.contact.linkedin} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
                    <a href={config.contact.github} className='hover:text-white'><AiOutlineGithub size={40}/></a>
                </div>
                <p className='text-white text-lg mt-1'>
                    A highly organized, enthusiastic, and hard-working individual looking for a responsible career opportunity in a reputed organization to utilize the training and skills, expand the knowledge and contribute to the success of the company.
                </p>
            </div>
            
            <img className='md:w-60 mt-5 md:mt-0 rounded-full' src={HeroImg} alt="Hero" />
        </section>
    );
}
