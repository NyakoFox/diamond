import ButtonLink from "../components/ButtonLink";

function NotFound() {
    return (
        <div className="container mx-auto p-4 flex flex-col align-middle justify-items-center w-full">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white text-center">404</h1>
            <p className="text-gray-600 dark:text-gray-300 text-center">Page not found.</p>
            <div className="flex flex-col md:flex-row justify-center items-center mt-8">
                <ButtonLink to="/">
                    Home
                </ButtonLink>
            </div>
        </div>
    )
}

export default NotFound;