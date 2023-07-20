import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

const NavbarList = ({navArrayLinks, NavLink, setOpen}) => {
  return (
    <Box sx={{width: 250}}>
        <nav>
            <List>
                {
                    navArrayLinks.map((i, index) => (
                        index !== 4 ? (
                            <ListItem key={i.title} disabledPadding>
                            <ListItemButton component={NavLink} to={i.path} onClick={() => setOpen(false)}>
                                <ListItemIcon>{i.icon}</ListItemIcon>
                                <ListItemText>{i.title}</ListItemText>
                            </ListItemButton>
                            </ListItem>
                        ) : null
                    ))
                }
            </List>
        </nav>
    </Box>
  )
}

export default NavbarList