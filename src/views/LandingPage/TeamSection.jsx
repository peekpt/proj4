import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';

// import cartão
import Card from 'components/Card/card'

import styles from 'assets/views/teamStyle';
import CardBody from 'components/Card/cardBody';
import CardFooter from 'components/Card/cardFooter';
import CardHeader from 'components/Card/cardHeader';

const useStyles = makeStyles(styles);


export default function TeamSection() {

    const classes = useStyles();
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundCircle,
        classes.imgFluid
    );
    return (
        <div className="team">
            <Card plain>
                <CardHeader></CardHeader>
                <CardBody className={classes.description}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolorem ea quaerat blanditiis perferendis aspernatur ut qui iusto? Perspiciatis veniam dolore praesentium iste delectus esse eaque deleniti molestias alias cum?</p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}></CardFooter>
            </Card>
        </div>

    );
}

