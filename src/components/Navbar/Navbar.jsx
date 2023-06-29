import { useState } from "react"
import NavbarList from "./NavbarList"
import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const Navbar = ({navArrayLinks}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={() => setOpen(true)} sx={{display: {xs: "flex", sm: "none"}}}>
            <MenuOutlined sx={{color: 'white'}}/>
          </IconButton>
          <Typography variant="h6" sx={{flexGrow: 1}}>Skinbox</Typography>
          <Box sx={{display: {xs: "none", sm: "block"}}}>
            {
              navArrayLinks.map(i => (
                <Button 
                sx={{color: 'white'}} 
                key={i.index}
                component={NavLink}
                to={i.path}>
                  {i.title}
                </Button>
              ))
            }
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer open={open} anchor="left" onClose={() => setOpen(false)} sx={{display: {xs: "flex", sm: "none"}}}>
        <NavbarList navArrayLinks={navArrayLinks} NavLink={NavLink} setOpen={setOpen}/>
      </Drawer>
    </>
  )
}

export default Navbar