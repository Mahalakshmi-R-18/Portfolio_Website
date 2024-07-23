import ResumeImg from '../assets/resume.jpg';

export default function Resume() {
    const config = {
        link: 'https://acrobat.adobe.com/id/urn:aaid:sc:AP:d710b469-921a-461d-9b27-9a0e75ce4be7'
    }

    return (
        <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5 py-10 font-hero-font'>
            <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
                <img className='w-[500px] rounded-lg shadow-lg transform hover:scale-105 transition duration-500' src={ResumeImg} alt="Resume" />
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'>RESUME</h1>
                    <p className='pb-5 text-lg'>
                        To view my resume{' '}
                        <a
                            className='bg-primary text-white px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300'
                            href={config.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                        >
                            Click Here
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
