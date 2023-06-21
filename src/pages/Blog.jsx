import ButtonLink from "../components/ButtonLink";

function Blog() {
    return (
        <div className="container mx-auto p-4 flex flex-col align-middle justify-items-center w-full">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white text-center">Blog</h1>
            <p className="text-gray-600 dark:text-gray-300 text-center">Insane person rambles about insane things.</p>
            <div className="flex flex-col justify-center items-center mt-8 gap-4">
                <ButtonLink to="/blog/tailwind">
                    Tailwind
                </ButtonLink>
                <ButtonLink to="/blog/test">
                    Doesn&apos;t everyone have one of these? (Initial test post)
                </ButtonLink>
            </div>
        </div>
    )
}

export default Blog;