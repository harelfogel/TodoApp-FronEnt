import { makeStyles, createStyles } from '@material-ui/core/styles';
import List from '@mui/material/List';
import AppMenuItem from './AppMenuItem';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import ListIcon from '@mui/icons-material/List';
import './SideBar.css';

const drawerWidth = 200;
const appMenuItems = [
    {
        name: 'Posts',
        link: '/posts',
        Icon: LocalPostOfficeIcon,
    },
    {
        name: 'Albums',
        link: '/albums',
        Icon: PhotoLibraryIcon,
    },
    {
        name: 'Users',
        link: '/users',
        Icon: SupervisedUserCircleIcon,
    },
    {
        name: 'Todos',
        link: '/todos',
        Icon: ListIcon,
    }
]


const AppMenu: React.FC = () => {
    const classes = useStyles()
  
    return (
      <List component="nav" className={classes.appMenu} disablePadding>
        {appMenuItems.map((item, index) => (
          <AppMenuItem {...item} key={index} />
        ))}
      </List>
    )
  }
  
  const useStyles = makeStyles(theme =>
    createStyles({
      appMenu: {
        width: '100%',
        marginTop:'80px'
      },
      navList: {
        width: drawerWidth,
      },
      menuItem: {
        width: '50%',
      },
      menuItemIcon: {
        color: '#3464eb',
      },
    }),
  )
  
  export default AppMenu;