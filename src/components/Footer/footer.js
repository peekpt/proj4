import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import Favorite from '@material-ui/icons/Favorite';

import styles from 'assets/components/footerStyle';


const useStyles = makeStyles(styles);

export default function Footer(props) {

    const classes = useStyles();
    const { whiteFont } = props;
    const footerClasses = classNames({
        [classes.footer]: true,
        [classes.footerWhiteFont]: whiteFont,
    });

    const aClasses = classNames({
        [classes.a]: true,
        [classes.footerWhiteFont]: whiteFont
    });

    return (
        <footer className={footerClasses}>
            <div className={classes.container}>
                <div className={classes.left} >
                    <List className={classes.list}>
                        <ListItem className={classes.inlineBlock}>
                            <a href="http:// www.iefp.pt" className={classes.block} target="_blank" rel="noreferrer">IEFP</a>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <a href="##" className={classes.block} target="_blank" rel="noreferrer">Quem Somos</a>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <a href="##" className={classes.block} target="_blank" rel="noreferrer">Localização</a>
                        </ListItem>
                    </List>
                </div>
                <div className={classes.right}>
                    &copy; {1900 + new Date().getYear()}, criado por {" "}<Favorite className={classes.icon} /><a href="##" className={aClasses}> Formação</a> React
                </div>
            </div>
        </footer>

    );
}

Footer.propTypes = {
    whiteFont: PropTypes.bool
}