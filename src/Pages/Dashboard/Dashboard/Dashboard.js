import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import {Button} from '@mui/material/';
import Typography from '@mui/material/Typography';
import UserOrders from '../UserOrders/UserOrders';
import {
    
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import Review from '../Review/Review';
 


const drawerWidth = 250;


function Dashboard(props) {
    let { path, url } = useRouteMatch();
    const {logOut, user} = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    
  };

  const drawer = (
     
    <div>
      <Toolbar />
      <Divider />
      <List sx={{paddingTop: '30%'}}>
       
        <Link to={`${url}`}> <Button variant="contained" color="success" sx={{marginBottom:'10px', width:'140px'}} >DashBoard</Button></Link> <br />
        <Link to={`${url}/pay`}> <Button sx={{marginBottom:'10px', width:'140px'}} variant="contained" color="success">Pay</Button></Link> <br />
        <Link to={`${url}/myorders`}> <Button sx={{marginBottom:'10px', width:'140px'}} variant="contained" color="success">My Orders</Button></Link> <br />
        <Link to={`${url}/reviews`}> <Button sx={{marginBottom:'10px', width:'140px'}}variant="contained" color="success">Review</Button></Link> <br />
        
        
        <Link to="/home">  <Button  variant="contained" color="success" sx={{marginBottom:'10px', width:'140px'}} >Home</Button></Link> <br /> 
        <Button sx={{marginBottom:'10px', width:'140px'}} onClick={logOut} variant="contained" color="success">LogOut</Button>

       
        
        
      </List> 
       
       

      <Divider />
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
        <Switch>
        <Route exact path={path}>
          <h3>Welcome to DashBoard, {user.displayName} </h3>
        </Route>
        <Route  path={`${path}/pay`}>
          <h3>Payment System Comming Soon</h3>
        </Route>
        <Route  path={`${path}/reviews`}>
          <Review></Review>
        </Route>
        <Route path={`${path}/myorders`}>
        <UserOrders></UserOrders>
        </Route>
      </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
