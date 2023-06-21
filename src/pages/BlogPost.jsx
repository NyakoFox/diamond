import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ButtonLink from '../components/ButtonLink';

const aliases = {
    js: 'javascript',
    jsx: 'javascript',
}

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
                  ? <SyntaxHighlighter style={dracula} language={aliases[match[1]] || match[1]} PreTag="div" {...props} />
                  : <code className={props.className} {...props} />
            }
        }
    }

    useEffect(() => {
        import(`./posts/${slug}.mdx`).then((data) => {
            setMeta(data.meta);
            setContent(data.default(props));
            setDateTime(new Date(data.meta.date * 1000));
        }).catch(() => {
            // Not found!
        });
    }, []);

    return (
        <div className="container mx-auto p-4 flex flex-col align-middle justify-items-center w-full">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white text-center">{meta.title}</h1>
            <p className="text-gray-600 dark:text-gray-300 text-center italic">{meta.description}</p>
            <p className="text-gray-400 dark:text-gray-500 text-center block" dateTime={dateTime}>
                {dateTime.toLocaleDateString("en-US")} • {dateTime.toLocaleTimeString("en-US")}
            </p>
            <article className="m-auto mt-16 prose dark:prose-invert max-w-4xl">
                {content ?? <>Not found</>}
                <hr className="mt-16"/>
            </article>
            <footer className="mt-16 mb-16 m-auto">
                <ButtonLink to="/blog">
                    Back to blog
                </ButtonLink>
            </footer>
        </div>
    )
}

export default Blog;