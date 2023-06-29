import { useState } from "react"
import NavbarList from "./NavbarList"
import { AppBar, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";

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
          {/*Menú en desktop/tablet*/}
          <Button sx={{color: 'white'}}>Home</Button>
          <Button sx={{color: 'white'}}>Login</Button>
          <Button sx={{color: 'white'}}>Register</Button>
        </Toolbar>
      </AppBar>

      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        <NavbarList />
      </Drawer>
    </>
  )
}

export default Navbar