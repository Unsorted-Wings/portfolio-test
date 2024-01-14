// pages/index.js
import Head from 'next/head';
import { FaTwitter, FaLinkedin, FaEnvelope, FaPhone, FaGraduationCap } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="bg-slate-900 min-h-screen flex items-center justify-center">
            <Head>
                <title>Rohit Shukla</title>
                <meta name="description" content="Your description here" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="col-span-1 bg-slate-800 bg-opacity-70 text-white p-6 rounded-md shadow-md backdrop-filter backdrop-blur-lg">
                    <h2 className="text-2xl font-semibold mb-2">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                        <div className="bg-slate-600 text-white px-4 py-2 rounded-xl">HTML</div>
                        <div className="bg-slate-600 text-white px-4 py-2 rounded-xl">CSS</div>
                        <div className="bg-slate-600 text-white px-4 py-2 rounded-xl">Javascript</div>
                        <div className="bg-slate-600 text-white px-4 py-2 rounded-xl">React.js</div>
                        <div className="bg-slate-600 text-white px-4 py-2 rounded-xl">Next.js</div>
                        <div className="bg-slate-600 text-white px-4 py-2 rounded-xl">Tailwind CSS</div>
                        <div className="bg-slate-600 text-white px-4 py-2 rounded-xl">Node.js</div>
                        <div className="bg-slate-600 text-white px-4 py-2 rounded-xl">SQL</div>
                        <div className="bg-slate-600 text-white px-4 py-2 rounded-xl">Python</div>
                        <div className="bg-slate-600 text-white px-4 py-2 rounded-xl">C</div>
                        <div className="bg-slate-600 text-white px-4 py-2 rounded-xl">C++</div>
                    </div>
                </div>

                <div className="col-span-1 md:col-span-1 bg-slate-800 bg-opacity-70 text-white p-6 rounded-md shadow-md backdrop-filter backdrop-blur-lg">
                    <h2 className="text-2xl font-semibold mb-2">About Me</h2>
                    <img src="/your-image.jpg" alt="Your Name" className="rounded-full w-32 h-32 mb-4 mx-auto" />
                    <p>Your introduction or any additional content about yourself.</p>

                    
                </div>

                <div className="col-span-1 bg-slate-800 bg-opacity-70 text-white p-6 rounded-md shadow-md backdrop-filter backdrop-blur-lg">
                    <h2 className="text-2xl font-semibold mb-2">Education</h2>
                    <p>University: Degree, Year</p>
                    <p>High School: Diploma, Year</p>
                </div>

                <div className="col-span-1 bg-slate-800 bg-opacity-70 text-white p-6 rounded-md shadow-md backdrop-filter backdrop-blur-lg">
                    <h2 className="text-2xl font-semibold mb-2">Projects</h2>
                    <p>Project 1: Description and link</p>
                    <p>Project 2: Description and link</p>
                </div>
                <div className="col-span-1 bg-slate-800 bg-opacity-70 text-white p-6 rounded-md shadow-md backdrop-filter backdrop-blur-lg">
                    <h3 className="text-xl font-semibold">Links</h3>

                    <div className="m-4 flex">
                        <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-white mx-10"><FaTwitter size={28} /></a>
                        <a href="https://www.linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer" className="text-white mx-10"><FaLinkedin size={28} /></a>
                        <a href="mailto:your@email.com" className="text-white mx-10"><FaEnvelope size={28} /></a>
                        <a href="tel:+1234567890" className="text-white mx-10"><FaPhone size={28} /></a>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default Home;
