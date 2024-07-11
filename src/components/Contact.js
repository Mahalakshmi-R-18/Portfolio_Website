export default function Contact() {
    const config = {
        email: 'mahalakshmir183@gmail.com',
        phone: '+91-9498413977'
    };

    return (
        <section id='contact' className='flex flex-col bg-primary px-5 py-32 text-white font-hero-font'>
            <div className='flex flex-col items-center text-center'>
                <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold'>CONTACT</h1>
                <p className='pb-5 text-lg'>For further discussions, please contact me</p>
                <p className='py-2 text-lg'>
                    <span className='font-bold'>Email :</span> 
                    <a href={`mailto:${config.email}`} className='hover:underline ml-2'>
                        {config.email}
                    </a>
                </p>
                <p className='py-2 text-lg'>
                    <span className='font-bold'>Phone :</span>
                    <a href={`tel:${config.phone}`} className='hover:underline ml-2'>
                        {config.phone}
                    </a>
                </p>
            </div>
        </section>
    );
}
