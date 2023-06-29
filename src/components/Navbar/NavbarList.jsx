import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

const NavbarList = ({navLink}) => {
  return (
    <Box sx={{width: 250}}>
        <nav>
            <List>
                {
                    navLink.map(i => (
                        <ListItem key={i.title} disabledPadding>
                            <ListItemButton component="a" href={i.path}>
                                <ListItemText>{i.title}</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </nav>
    </Box>
  )
}

export default NavbarList