
function About() {
    return (
        <div className="container mx-auto p-4 flex flex-col align-middle justify-items-center w-full">
            <h1 className="text-3xl font-bold text-gray-400 dark:text-gray text-center">I&apos;m <span className="text-gray-800 dark:text-white text-4xl">Nyako</span>.</h1>
            <p className="text-gray-600 dark:text-gray-300 text-center">Or Ally, if you want a real name.</p>

            <section className="mt-8">
                <p className="text-gray-600 dark:text-gray-300 text-center">I&apos;m a software developer, musician, and artist (sometimes).</p>
                <p className="text-gray-600 dark:text-gray-300 text-center">I&apos;m 18 years old and transgender. (she/her)</p>
                <p className="text-gray-600 dark:text-gray-300 text-center">I like to make things.</p>
            </section>

            <h2 className="text-gray-800 dark:text-gray-100 font-bold text-3xl text-center pt-8">Experience:</h2>

            <section className="mt-8 m-auto">
                <h3 className="text-gray-700 dark:text-gray-200 font-bold text-2xl">Programming Languages:</h3>
                <ul className="text-gray-600 dark:text-gray-300 pl-8 list-disc">
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>Java</li>
                    <li>Lua</li>
                    <li>C++</li>
                    <li>C</li>
                </ul>
                <h3 className="text-gray-700 dark:text-gray-200 font-bold text-2xl mt-4">Web Technologies:</h3>
                <ul className="text-gray-600 dark:text-gray-300 pl-8 list-disc">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React</li>
                    <li>Tailwind CSS</li>
                    <li>Django</li>
                </ul>
                <h3 className="text-gray-700 dark:text-gray-200 font-bold text-2xl mt-4">Misc:</h3>
                <ul className="text-gray-600 dark:text-gray-300 pl-8 list-disc">
                    <li><b>Version Control:</b> Git</li>
                    <li><b>Operating System:</b> Windows, experience with Linux</li>
                    <li><b>IDEs:</b> Visual Studio Code, Visual Studio, Intellij IDEA</li>
                    <li><b>Database Technologies:</b> MongoDB</li>
                    <li><b>Collaboration Tools:</b> Discord, Microsoft Teams</li>
                </ul>
            </section>
        </div>
    )
}

export default About;