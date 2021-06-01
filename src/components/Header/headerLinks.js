import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/style';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip'
import Button from 'components/CustomButtons/RegularButton';
import styles from 'assets/components/headerLinksStyle';
import CustomDropdown from 'components/CustomDropdown/CustomDropdown';
import { Apps, CloudDownload } from '@material-ui/icons';

const useStyles = makeStyles(styles);


export default function HeaderLinks(props) {

    const classes = useStyles();


    return (
        <List className={classes.list}>
            <ListItem className={classes.ListItem}>
                <CustomDropdown noLiPadding buttonText="Quem Somos" buttonProps={{ className: classes.navLink, color: "trasnparent" }} buttonIcon={Apps} dropdownList={[
                    <Link to="/" className={classes.dropdownLink}>
                        Quem Somos
                    </Link>,
                    <a href="##" className={classes.dropdownLink}>Localização</a>
                ]}>
                </CustomDropdown>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button href="##" color="transparent" className={classes.navLink}>
                    <CloudDownload className={classes.icon} >
                        Download
                    </CloudDownload>
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip id="instagram-twitter" title="Siga-nos no Twitter" placement={window.innweWidth > 959 ? "top" : "left"} classes={{ tooltop: classes.tooltip }}>
                    <Button href="" color="transparent" className={classes.navLink}>
                        <i className={classes.socialIcons + "fab fa-twitter"}></i>
                    </Button>
                </Tooltip>
            </ListItem>
        </List>

    );
};