import { Link } from "react-router-dom";

function Navigation() {
    return (
        <>
            <nav className="bg-white dark:bg-slate-900 dark:text-white p-4 sticky top-0 border-b-2 border-b-slate-300 dark:border-b-slate-800">
                <ul className="flex justify-evenly lg:justify-end gap-16 lg:mr-16">
                    <li className="transition-transform hover:scale-110">
                        <Link to="/" className="dark:text-white hover:text-gray-400">Home</Link>
                    </li>
                    <li className="transition-transform hover:scale-110">
                        <Link to="/blog" className="dark:text-white hover:text-gray-400">Blog</Link>
                    </li>
                    <li className="transition-transform hover:scale-110">
                        <Link to="/projects" className="dark:text-white hover:text-gray-400">Projects</Link>
                    </li>
                    <li className="transition-transform hover:scale-110">
                        <Link to="/about" className="dark:text-white hover:text-gray-400">About</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;