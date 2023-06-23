
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ProjectCard(props) {
    const { title, description, link, outside, className, nolink } = props;
    return (outside || nolink) ? (
        <a className="col-span-4 md:col-span-1 hover:scale-110 transition-transform" href={(!nolink) && link}>
            <div className={`bg-gray-300 dark:bg-gray-700 rounded-md p-4 ${className}`}>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">{title}</h2>
                <p className="text-gray-800 dark:text-gray-300 text-center">{description}</p>
            </div>
        </a>
    ) : (
        <Link className="col-span-4 md:col-span-1 hover:scale-110 transition-transform" to={link}>
            <div className={`bg-gray-300 dark:bg-gray-700 rounded-md p-4 ${className}`}>
                <h2 className="text-2xl font-bold text-gray-200 dark:text-white text-center">{title}</h2>
                <p className="text-gray-400 dark:text-gray-300 text-center">{description}</p>
            </div>
        </Link>
    )
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string,
    outside: PropTypes.bool,
    className: PropTypes.string,
    nolink: PropTypes.bool,
};

export default ProjectCard;