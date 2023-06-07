
function Home() {
    return (
        <div className="container mx-auto p-4 flex flex-col align-middle justify-items-center w-full">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white text-center">Nyako</h1>
            <p className="text-gray-600 dark:text-gray-300 text-center">Soft girl, cat, 100 cm (39 ¼ &quot;)</p>
            <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
                <a href="https://twitter.com/Nyakorita/" className="dark:bg-gray-800 dark:text-white px-6 py-2 rounded-md dark:hover:bg-gray-700 transition duration-300">
                    Twitter
                </a>
                <a href="https://bsky.app/profile/nyako.gay" className="dark:bg-gray-800 dark:text-white px-6 py-2 rounded-md dark:hover:bg-gray-700 transition duration-300">
                    Bluesky
                </a>
                <a href="https://www.youtube.com/@nyakofox" className="dark:bg-gray-800 dark:text-white px-6 py-2 rounded-md dark:hover:bg-gray-700 transition duration-300">
                    YouTube
                </a>
            </div>
        </div>
    )
}

export default Home;