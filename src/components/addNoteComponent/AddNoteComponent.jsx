import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const AddNoteComponent = () => {

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
            <EditNoteOutlinedIcon aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            />
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
                <MenuItem onClick={handleClose} ><CloseOutlinedIcon /></MenuItem>
                <MenuItem><TextField
                    required
                    id="outlined-required"
                    label="New Notes"
                /></MenuItem>
                <MenuItem><Button variant='contained'>Add New Note</Button></MenuItem>
            </Menu>
        </div>
    )
}

export default AddNoteComponent
