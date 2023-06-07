import { Link } from "react-router-dom";

function Blog() {
    return (
        <div className="container mx-auto p-4 flex flex-col align-middle justify-items-center w-full">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white text-center">Blog</h1>
            <p className="text-gray-600 dark:text-gray-300 text-center">Insane person rambles about insane things.</p>
            <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
                <Link to="/blog/test" className="dark:bg-gray-800 dark:text-white px-6 py-2 rounded-md dark:hover:bg-gray-700 transition duration-300">
                    First Post, because this UI is unfinished
                </Link>
            </div>
        </div>
    )
}

export default Blog;