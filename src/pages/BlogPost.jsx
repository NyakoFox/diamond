import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Blog() {
    const { slug } = useParams();
    const [meta, setMeta] = useState({
        title: "Loading...",
        description: "",
        date: Date.now()
    });
    const [content, setContent] = useState();
    const [dateTime, setDateTime] = useState(new Date());

    const props = {
        components: {
            code: (props) => {
                const match = /language-(\w+)/.exec(props.className || '')
                return match
                  ? <SyntaxHighlighter style={dracula} language={match[1]} PreTag="div" {...props} />
                  : <code className={props.className} {...props} />
            }
        }
    }

    useEffect(() => {
        import(`./posts/${slug}.mdx`).then((data) => {
            setMeta(data.meta);
            //setContent(data.default(props));
            setContent(data.default); // Disable syntax highlighting for now... :/
            setDateTime(new Date(data.meta.date * 1000));
        }).catch(() => {
            // Not found!
        });
    });

    return (
        <div className="container mx-auto p-4 flex flex-col align-middle justify-items-center w-full">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white text-center">{meta.title}</h1>
            <p className="text-gray-600 dark:text-gray-300 text-center italic">{meta.description}</p>
            <p className="text-gray-400 dark:text-gray-500 text-center block" dateTime={dateTime}>
                {dateTime.toLocaleDateString("en-US")} • {dateTime.toLocaleTimeString("en-US")}
            </p>
            <article className="m-auto mt-16 prose dark:prose-invert">
                {content ?? <>Not found</>}
                <hr className="mt-16"/>
            </article>
            <footer className="mt-16 mb-16 m-auto">
                <Link to="/blog" className="dark:bg-gray-800 dark:text-white px-6 py-2 rounded-md dark:hover:bg-gray-700 transition duration-300">
                    Back to blog
                </Link>
            </footer>
        </div>
    )
}

export default Blog;