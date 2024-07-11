import websiteImg2 from '../assets/car_rental.jpg';
import websiteImg3 from '../assets/dynamic_website.jpg';
import websiteImg4 from '../assets/treasure_hunt.jpg';
import websiteImg5 from '../assets/library.jpg';

export default function Projects() {
    const config = {
        projects: [
            {
                image: websiteImg2,
                description: 'Car Rental Management (Using PHP and MySQL)',
                link: 'https://github.com/Mahalakshmi-R-18/Car_Rental_Website'
            },
            {
                image: websiteImg3,
                description: 'Created a dynamic webpage (Using HTML, CSS, JavaScript)',
                link: 'https://github.com/Mahalakshmi-R-18/Dynamic_Webpage'
            },
            {
                image: websiteImg4,
                description: 'Created Treasure hunt game (Using C)',
                link: 'https://github.com/Mahalakshmi-R-18/Treasure_Hunt_Game'
            },
            {
                image: websiteImg5,
                description: 'Developed a mobile app for Department Library Management (Using Kotlin with Firebase)',
                link: 'https://github.com/Mahalakshmi-R-18/Department_Library_App'
            }
        ]
    };

    return (
        <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white font-hero-font">
            <div className="w-full text-center mb-10">
                <h1 className="text-4xl border-b-4 border-white inline-block mb-5 font-bold">PROJECTS</h1>
                <p className="text-lg">These are my project works. Check them out.</p>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10">
                {config.projects.map((project) => (
                    <div key={project.description} className="relative bg-gray-300 text-black rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-500">
                        <img className="h-48 w-full object-cover" src={project.image} alt="Project" />
                        <div className="p-5">
                            <p className="text-center mb-5">{project.description}</p>
                            <div className="flex justify-center">
                                <a className="bg-primary text-white px-4 py-2 rounded hover:bg-gray-200 transition duration-300" target="_blank" rel="noopener noreferrer" href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
