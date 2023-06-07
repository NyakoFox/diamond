
function Projects() {
    return (
        <div className="container mx-auto p-4 flex flex-col align-middle justify-items-center w-full">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white text-center">Projects</h1>
            <p className="text-gray-600 dark:text-gray-300 text-center">Warning: there&apos;s a lot of them.</p>
            <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
                <a href="https://kristal.cc/" className="dark:bg-gray-800 dark:text-white px-6 py-2 rounded-md dark:hover:bg-gray-700 transition duration-300">
                    Kristal
                </a>
            </div>
        </div>
    )
}

export default Projects;