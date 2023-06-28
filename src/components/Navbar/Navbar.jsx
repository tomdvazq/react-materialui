import { useState } from "react"
import NavbarList from "./NavbarList"
import { AppBar, Button, Drawer } from "@mui/material";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar position="static">h</AppBar>

      <Button variant="outlined" onClick={() => setOpen(true)}>Open</Button>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
      >
        <NavbarList />
      </Drawer>
    </>
  )
}

export default Navbar