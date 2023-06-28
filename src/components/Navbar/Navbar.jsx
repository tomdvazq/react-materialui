import { useState } from "react"
import NavbarList from "./NavbarList"
import { Button, Drawer } from "@mui/material";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
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