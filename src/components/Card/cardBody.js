import React from 'react';
import { makeStyles } from '@material-ui/styles';
import styles from '../../assets/components/cardBodyStyle';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const useStyles = makeStyles(styles);

export default function CardBody(props) {

    const classes = useStyles();
    const { className, children, ...rest } = props;
    const cardBodyClasses = classNames({

        [classes.cardBody]: true,
        [className]: className !== undefined

    });

    return (
        <div className={cardBodyClasses}{...rest}>
            {children}
        </div>
    );


}
CardBody.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}