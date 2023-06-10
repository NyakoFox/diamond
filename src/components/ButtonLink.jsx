import { Link } from "react-router-dom";

import PropTypes from 'prop-types';

function ButtonLink(props) {
    const { to, outside, children } = props;

    const classes =
        'dark:bg-gray-800 dark:text-white px-6 py-2 rounded-md dark:hover:bg-gray-700 transition duration-300';

    return outside ? (
        <a href={to} className={classes}>
            {children}
        </a>
    ) : (
        <Link to={to} className={classes}>
            {children}
        </Link>
    );
}

ButtonLink.propTypes = {
    to: PropTypes.string.isRequired,
    outside: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

export default ButtonLink;
