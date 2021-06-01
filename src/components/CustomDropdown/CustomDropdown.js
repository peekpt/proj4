import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Button from 'components/CustomButtons/RegularButton';
import styles from 'assets/components/customDropdownStyle';
import Icon from '@material-ui/core/Icon';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuList';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(styles);

export default function CustomDropdown(props) {


    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        if (anchorEl && anchorEl.contains(event.target)) {
            setAnchorEl(null);
        } else {
            setAnchorEl(event.currentTarget);
        }

    };

    const handleCloseAway = (event) => {
        if (anchorEl.contains(event.target)) {
            return;
        }
        setAnchorEl(null);
    };

    const handleClose = (param) => {
        setAnchorEl(null);
        if (props && props.onClick) {
            props.onClick(param);
        }
    };

    const classes = useStyles();

    const { buttonProps,
        caret,
        buttonText,
        rtlActive,
        dropup,
        left,
        dropdownHeader,
        dropdownList,
        hoverColor,
        noLiPadding
    } = props;

    const caretClasses = classNames({
        [classes.caret]: true,
        [classes.caretActive]: Boolean(anchorEl),
        [classes.caretRTL]: rtlActive
    });

    const dropdownItem = classNames({
        [classes.dropdownItem]: true,
        [classes[hoverColor]]: true,
        [classes.noLiPadding]: noLiPadding,
        [classes.dropdownItemRTL]: rtlActive
    });

    let icon = null;

    switch (typeof buttonIcon) {
        case "object":
            icon = <props.buttonIcon className={classes.buttonIcon}></props.buttonIcon>;
            break;
        case "string":
            icon = <Icon className={classes.buttonIcon}></Icon>;
            break;
        default:
            icon = null
            break;
    }

    return (

        <div>
            <div>
                <Button
                    aria-label="Notifications"
                    aria-owns={anchorEl ? "menu-list" : null}
                    aria-haspopup="true" {...buttonProps}
                    onClick={handleClick}>
                    {icon}
                    {buttonText !== undefined ? buttonText : null}
                    {caret ? <b className={caretClasses} /> : null}
                </Button>
            </div>
            <Popper
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                transition
                disablePortal
                placement={dropup
                    ? left
                        ? "top-start"
                        : "top"
                    : left ?
                        "bottom-start"
                        : "bottom"
                }
                className={classNames({
                    [classes.popperClose]: !anchorEl,
                    [classes.popperResponsive]: true
                })}>
                {
                    () => (
                        <Grow
                            in={Boolean(anchorEl)}
                            id="menu-list"
                            style={
                                dropup
                                    ? { transformOrigin: "0 100% 0" }
                                    : { transformOrigin: "0 0 0" }
                            }
                        >
                            <Paper className={classes.dropdown}>
                                <ClickAwayListener onClickAway={handleCloseAway}>
                                    <MenuList role="menu" className={classes.menuList}>
                                        {dropdownHeader !== undefined ? (
                                            <MenuItem onClick={() => handleClose(dropdownHeader)}
                                                className={classes.dropdownHeader}
                                            >
                                                {dropdownHeader}
                                            </MenuItem>
                                        ) : null}
                                        {dropdownList.map((prop, key) => {
                                            if (prop.divider) {
                                                return (
                                                    <Divider
                                                        key={key}
                                                        onClick={() => handleClose("divider")}
                                                        className={classes.dropdownDividerItem}
                                                    >

                                                    </Divider>
                                                );
                                            }
                                            return (
                                                <MenuItem
                                                    key={key}
                                                    onClick={() => handleClose(prop)}
                                                    className={dropdownItem}
                                                >
                                                    {prop}
                                                </MenuItem>

                                            );
                                        })}

                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )
                }
            </Popper>
        </div >
    );
}

CustomDropdown.propTypes = {
    hoverColor: PropTypes.oneOf([
        "black",
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "rose"
    ]), buttonText: PropTypes.node,
    ButtonIcon: PropTypes.oneOfType(PropTypes.object, PropTypes.string),
    dropdownList: PropTypes.array,
    buttonProps: PropTypes.object,
    dropup: PropTypes.bool,
    dropdownHeader: PropTypes.node,
    rtlActive: PropTypes.bool,
    left: PropTypes.bool,
    noLiPadding: PropTypes.bool,
    onClick: PropTypes.func
}

CustomDropdown.defaultProps = {
    caret: true,
    hoverColor: "primary"
}