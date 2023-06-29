import { useState } from "react"
import NavbarList from "./NavbarList"
import { AppBar, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";

const navLinks = [
  {
      title: 'Home',
      path: '/',
      icon: ''
  },
  {
      title: 'Login',
      path: '/login',
      icon: ''
  },
  {
      title: 'Register',
      path: '/register',
      icon: ''
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={() => setOpen(true)}>
            <MenuOutlined sx={{color: 'white'}}/>
          </IconButton>
          <Typography variant="h6" sx={{flexGrow: 1}}>Skinbox</Typography>
          {
            navLinks.map(i => (
              <Button 
              sx={{color: 'white'}} 
              key={i.index}
              component="a"
              href={i.path}>
                {i.title}
              </Button>
            ))
          }
        </Toolbar>
      </AppBar>

      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        <NavbarList navLinks={navLinks}/>
      </Drawer>
    </>
  )
}

export default Navbar