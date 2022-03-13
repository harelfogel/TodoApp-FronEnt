import { Drawer } from "@mui/material";
import { Box } from "@mui/system";
import AppMenu from "./AppMenu";
import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240;
export default function SideBar() {
    const classes = useStyles();
    return (
        <Box>
            <Drawer
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <AppMenu />
            </Drawer>
        </Box>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawerPaper: {
        whiteSpace: 'nowrap',
        width: drawerWidth,
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(6),
        background: '#535454',
        color: '#fff',
    },
    content: {
        flexGrow: 1,
        height: '50vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}))