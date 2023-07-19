import React, { useContext } from 'react';
import { Box, IconButton } from '@mui/material';
import {Button} from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext, tokens } from '../../theme';
import InputBase from '@mui/material/InputBase';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* Search Bar */}

      <Box 
        display="flex" 
        backgroundColor = {colors.primary[400]}
        borderRadius="5px"
        >
          <InputBase sx ={{ml: 2, flex: 1}} placeholder = "Search here"/>
          <IconButton type='button' sx={{p:1}}>
            <SearchOutlinedIcon/>
          </IconButton>
      </Box>

      <Box display="flex" >
        <Button variant='contained' color='success' sx={{px:3}}> New Upload <UploadIcon/></Button>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlinedIcon/>
          ) : (
            <LightModeOutlinedIcon/>
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon/>
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon/>
        </IconButton>
        <IconButton>
          <TextsmsOutlinedIcon/>
        </IconButton>
        <IconButton>
          <AccountCircleOutlinedIcon/>
        </IconButton>
      </Box>
    </Box>
  )
}

export default Topbar