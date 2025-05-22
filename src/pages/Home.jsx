import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col gap-20 items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
                <div className='flex items-center flex-col'>
                    <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Maje Karo <span className="text-5xl">🔥</span>
</h1>
                    <nav className="flex gap-2 ">
                        <Link
                            to="/awtcountor"
                            className="px-6 py-3 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
                        >
                            AWT Countor
                        </Link>
                        <Link
                            to="/awtaccumulator"
                            className="px-6 py-3 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
                        >
                            AWT Accumulator
                        </Link>
                        <Link
                            to="/filehandling"
                            className="px-6 py-3 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
                        >
                            File Handling
                        </Link>
                    </nav>
                </div>

                <Link
                    to="/developer"
                >
                    <div className="text-center p-10 rounded-2xl shadow-lg bg-white dark:bg-gray-800 hover:dark:bg-gray-700 transition-all duration-500">
                        <div className="text-6xl font-bold text-gray-800 dark:text-white mb-4">☕</div>
                        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-2">JAVA</h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Write Once, Run Anywhere
                        </p>
                    </div>
                </Link>
            </div>

        </>
    );
};

export default Home;