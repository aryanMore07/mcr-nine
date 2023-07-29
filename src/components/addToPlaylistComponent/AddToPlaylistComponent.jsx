import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';

const AddToPlaylistComponent = () => {


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <PlaylistAddOutlinedIcon aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick} />
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem>
                    <TextField
                        required
                        id="outlined-required"
                        label="Enter title of your playlist"
                    />
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Write a description"
                    />
                </MenuItem>
                <MenuItem>
                    <Button variant="contained">Create new playlist</Button>
                </MenuItem>
                <hr />
            </Menu>
        </div>
    )
}

export default AddToPlaylistComponent
