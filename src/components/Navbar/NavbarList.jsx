import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';

const NavbarList = () => {
  return (
    <Box sx={{width: 250}}>
        <nav>
            <List>
                <ListItem disabledPadding>
                    <ListItemButton
                        component="a"
                        href="">
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Home"/>
                    </ListItemButton>
                </ListItem>
            </List>
        </nav>
    </Box>
  )
}

export default NavbarList