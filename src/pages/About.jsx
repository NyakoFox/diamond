
function About() {
    return (
        <div className="container mx-auto p-4 flex flex-col align-middle justify-items-center w-full">
            <h1 className="text-3xl font-bold text-gray-400 dark:text-gray text-center">I&apos;m <span className="text-gray-800 dark:text-white text-4xl">Nyako</span>.</h1>
            <p className="text-gray-600 dark:text-gray-300 text-center">Or Ally, or Alexia, or Alexandra, or-</p>

            <section className="mt-8">
                <p className="text-gray-600 dark:text-gray-300 text-center">I&apos;m a software developer, musician, and artist (sometimes).</p>
                <p className="text-gray-600 dark:text-gray-300 text-center">I like to make things.</p>
            </section>
        </div>
    )
}

export default About;