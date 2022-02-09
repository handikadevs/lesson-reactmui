import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';

export default function NestedList() {
    const [open, setOpen] = React.useState(false);

    const directoryClick = () => {
        setOpen(!open);
    };

    const [openApps, setOpenApps] = React.useState(false);

    const appsClick = () => {
        setOpenApps(!openApps);
    };

    return (
        <Box sx={{
            flexBasis: '250px',
            marginTop: '80px',
            backgroundColor: '#FAFAFA',
            height: 'calc(100vh - 60px)',
        }}>
            <List>
                <ListItemButton component='a' href='/'>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItemButton>
                <ListItemButton component='a' href='/dashboard'>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItemButton>
                <ListItemButton onClick={directoryClick}>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Directory" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 10 }} component='a' href='/users'>
                            <ListItemText primary="Users" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 10 }}>
                            <ListItemText primary="Organizational units" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton onClick={appsClick}>
                    <ListItemIcon>
                        <AppsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Apps" />
                    {openApps ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openApps} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 10 }}>
                            <ListItemText primary="Mail" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 10 }}>
                            <ListItemText primary="Drive" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 10 }}>
                            <ListItemText primary="Maps" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton>
                    <ListItemIcon>
                        <ManageAccountsIcon />
                    </ListItemIcon>
                    <ListItemText primary="My Account" />
                </ListItemButton>
            </List>
        </Box>
    );
}