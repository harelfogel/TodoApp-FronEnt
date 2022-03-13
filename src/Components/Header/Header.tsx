import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Header.css'
import { fetchUserNameById } from '../../Services/user.service';
import { useEffect, useState } from 'react';
import { User } from '../../Types/user.type';
import { NavLink } from 'react-router-dom';


export default function Header() {
  const [user, setUser] = useState<User | null>();
  useEffect(() => {
    const getPosts = async () => {
      const userResponse = await fetchUserNameById(1);
      setUser(userResponse);
    }
    getPosts();
  }, [])
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <NavLink className="nav-link" to='/'>
              App
          </NavLink>
          <div className="logout-btn">
            <Typography sx={{ paddingLeft: 3 }} variant="h6" noWrap component="div">
              Hello {user?.username}!
            </Typography>
          </div>
          <Typography sx={{ paddingLeft: 6 }} variant="h6" noWrap component="div">Logout</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}