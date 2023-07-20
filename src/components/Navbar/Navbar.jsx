import { useState } from "react"
import NavbarList from "./NavbarList"
import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = ({ navArrayLinks }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={() => setOpen(true)} sx={{ display: { sm: "flex", md: "none" } }}>
            <MenuOutlined sx={{ color: 'white' }} />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Skinbox</Typography>
          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            {
              navArrayLinks.map((i, index) => (
                index !== 6 ? (
                    <Button
                    sx={{ color: 'white' }}
                    key={i.title}
                    component={NavLink}
                    to={i.path}>
                    {i.title}
                    </Button>
                ) : null
              ))
            }
          </Box>
          <Box sx={{ display: {sm: "block", md: "block" } }}>
            <CartWidget navArrayLinks={navArrayLinks} NavLink={NavLink}/>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer open={open} anchor="left" onClose={() => setOpen(false)} sx={{ display: { sm: "flex", md: "none" } }}>
        <NavbarList navArrayLinks={navArrayLinks} NavLink={NavLink} setOpen={setOpen} />
      </Drawer>
    </>
  )
}

export default Navbar