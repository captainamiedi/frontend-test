import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import { Button } from '@mui/material';

const Sidebar: React.FC = () => (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['ВАКАНСИИ', 'КУРСЫ'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
                <Button variant="contained" fullWidth>
                    <ListItemText primary={text} />
                </Button>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  export default Sidebar