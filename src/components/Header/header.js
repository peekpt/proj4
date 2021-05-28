import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';

// importar menus

import Menus from '@material-ui/icons/Menu';
import styles from 'assets/components/headerStyle';

const useStyles = makeStyles(styles);

export default function Header(props) {

    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    React.useEffect(() => {
        if (props.changeColorOnScroll) {
            window.addEventListener("scroll", headerColorChange);
        }
        return function cleanup() {
            if (props.changeColorOnScroll) {
                window.addEventListener("scroll", headerColorChange);
            }
        }
    });
    const headerColorChange = () => {
        const { color, changeColorOnScroll } = props;

        const windowsScrollTop = window.pageYOffset;

        if (windowsScrollTop > changeColorOnScroll.height) {
            document.body.getElementsByTagName("header")[0].classList.remove(classes[color]);
            document.body.getElementsByTagName("header")[0].add(classes[changeColorOnScroll.color]);
        }


    };

    const { color, rightLinks, leftLinks, brand, fixed, absolute } = props;
    const appBarClasses = classNames({
        [classes.appBar]: true,
        [classes[color]]: color,
        [classes.ablsolute]: absolute,
        [classes.fixed]: fixed
    });

    const brandComponent = <Button className={classes.title}>{brand}</Button>
    return (
        <div>
            <AppBar className={appBarClasses}>
                <ToolBar className={classes.container}>
                    ss
                </ToolBar>
            </AppBar>
        </div>
    );


}