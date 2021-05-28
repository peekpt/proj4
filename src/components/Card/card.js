import React from 'react';
import { makeStyles } from '@material-ui/styles';
import styles from 'assets/components/cardStyle';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const useStyles = makeStyles(styles);

export default function Card(props) {
    const classes = useStyles();
    const { className, plain, carrousel, children, ...rest } = props;
    const cardClasses = classNames({
        [classes.card]: true,
        [classes.cardPlain]: plain,
        [classes.cardCarrousel]: carrousel,
        [className]: className !== undefined
    });
    return (
        <div className={cardClasses}{...rest} >
            {children}
        </div>
    );
}

Card.propTypes = {
    className: PropTypes.string,
    plain: PropTypes.bool,
    carrousel: PropTypes.bool,
    children: PropTypes.node
}