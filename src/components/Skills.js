import AboutImg from '../assets/about.png';

export default function Skills() {
    const config = {
        technicalSkills: {
            programmingLanguages: 'Python, PHP, Java',
            database: 'MySQL, SQL Server, Oracle',
            software: 'WordPress, Tally',
            webTechnology: 'HTML, CSS',
            mobileAppDevelopment: 'Kotlin',
            documentation: 'MS Office'
        },
        personalitySkills: [
            'Quick learner',
            'Team player',
            'Adaptability'
        ]
    }

    return (
        <section className='flex flex-col md:flex-row bg-secondary text-white px-5 py-10 font-hero-font' id='skills'>
            <div className='py-5 md:w-1/2 flex justify-center items-center md:mr-32'>
                <img src={AboutImg} alt="Skill" className='w-3/4 rounded-lg shadow-lg transform hover:scale-105 transition duration-500' />
            </div>
            <div className='md:w-1/3 flex flex-col justify-center'>
                <h1 className='text-4xl border-b-4 border-white mb-5 w-[170px] font-bold'>SKILLS</h1>
                <div>
                    <h2 className='text-3xl border-b-2 border-white mb-3 font-semibold'>Technical Skills</h2>
                    <div className='bg-gray-400 p-5 rounded-lg shadow-lg hover:bg-gray-700 transition duration-500 grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='bg-gray-900 bg-opacity-80 p-4 rounded-lg'>
                            <p className='text-lg'>Programming Languages :</p>
                            <p className='text-lg'>{config.technicalSkills.programmingLanguages}</p>
                        </div>
                        <div className='bg-gray-900 bg-opacity-80 p-4 rounded-lg'>
                            <p className='text-lg'>Database :</p>
                            <p className='text-lg'>{config.technicalSkills.database}</p>
                        </div>
                        <div className='bg-gray-900 bg-opacity-80 p-4 rounded-lg'>
                            <p className='text-lg'>Software :</p>
                            <p className='text-lg'>{config.technicalSkills.software}</p>
                        </div>
                        <div className='bg-gray-900 bg-opacity-80 p-4 rounded-lg'>
                            <p className='text-lg'>Web Technology :</p>
                            <p className='text-lg'>{config.technicalSkills.webTechnology}</p>
                        </div>
                        <div className='bg-gray-900 bg-opacity-80 p-4 rounded-lg'>
                            <p className='text-lg'>Mobile App Development :</p>
                            <p className='text-lg'>{config.technicalSkills.mobileAppDevelopment}</p>
                        </div>
                        <div className='bg-gray-900 bg-opacity-80 p-4 rounded-lg'>
                            <p className='text-lg'>Documentation :</p>
                            <p className='text-lg'>{config.technicalSkills.documentation}</p>
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                    <h2 className='text-3xl border-b-2 border-white mb-3 font-semibold'>Personality Skills</h2>
                    <ul className='list-disc list-inside text-lg bg-gray-500 p-5 rounded-lg shadow-lg hover:bg-gray-700 transition duration-500'>
                        {config.personalitySkills.map(skill => (
                            <li key={skill} className='mb-2'>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
