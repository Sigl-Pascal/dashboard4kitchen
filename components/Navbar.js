import Link from "next/link"
import {AppBar, Toolbar, Menu, MenuItem, Button, Stack} from "@mui/material"
import {HomeOutlined, KeyboardArrowDown} from "@mui/icons-material"
import {useState} from "react"

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return(
        <AppBar position="static">
            <Toolbar >
            <Link href="/" passHref>
                <HomeOutlined style={{cursor: "pointer"}}/>
            </Link>
            <div>
                <Button
                    id="recipe-button"
                    aria-controls={open ? 'recipe-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    disableElevation
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDown style={{color: "white"}}/>}
                    variant="outlined"
                    
                >
                    <a style={{color: "white"}}>Rezepte</a>
                </Button>
                <Menu
                    id="recipe-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'recipe-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>
                        <Link href="/recipes">
                            <a className="blank-link">Übersicht</a>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link href="/recipes/new">
                            <a className="blank-link">Neues Rezept</a>
                        </Link>
                    </MenuItem>
                </Menu>
            </div>
            </Toolbar>
        </AppBar>
    )   
}

export default Navbar
