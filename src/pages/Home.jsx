import ButtonLink from "../components/ButtonLink";

function Home() {
    return (
        <div className="container mx-auto p-4 flex flex-col align-middle justify-items-center w-full">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white text-center">Nyako</h1>
            <p className="text-gray-600 dark:text-gray-300 text-center">Soft girl, cat, 100 cm (39 ¼ &quot;)</p>
            <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
                <ButtonLink to="https://twitter.com/NyakoFox" outside>
                    Twitter
                </ButtonLink>
                <ButtonLink to="https://bsky.app/profile/nyako.gay" outside>
                    Bluesky
                </ButtonLink>
                <ButtonLink to="https://www.youtube.com/@nyakofox" outside>
                    YouTube
                </ButtonLink>
            </div>
        </div>
    )
}

export default Home;