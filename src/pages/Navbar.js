import React from 'react'
import '../App.css'
import { AppBar, Toolbar, Typography, Button, Modal, Box } from '@mui/material'
import TableRowsSharpIcon from '@mui/icons-material/TableRowsSharp';
import { useHistory } from "react-router-dom";
import { Hero } from './Hero';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'rgba(18, 18, 18, 0.9)',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };


export const Navbar = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <div className='App-Nav-Hero'>
            <AppBar id='Home' position='relative' className="Appbar" color='transparent' elevation={0}>
                <Toolbar className="flex-row w-full">
                    <div className='flex flex-row p-1'>
                        <Typography className="feature text-5xl inline self-center" variant="p" color="#efefef">
                            AI
                        </Typography>
                        <div className="flex flex-col pl-2 pr-2">
                            <Typography className="lily text-2xl inline self-center" variant="p" color="#FD4085">
                                Gone
                            </Typography>    
                            <Typography className="lily text-2xl inline self-center" variant="p" color="#FD4085">
                                Wild
                            </Typography>                    
                        </div>
                        <Typography className="feature text-2xl inline self-center" variant="p" color="#efefef">
                        🫦
                        </Typography>
                
                    </div>

                    <div className="NavbuttonMult space-x-4">
                        <Button color="inherit" onClick={ () => window.location.href = '#home'} sx={{ '&:hover': { backgroundColor: '#D83772' }, textTransform: 'unset' }}>
                            <Typography className="feature text-1xl ml-4 " variant="p" color="#efefef">
                                home
                            </Typography>
                        </Button>
                        <Button onClick={ () => window.location.href = '#roadmap'} color="inherit" sx={{ '&:hover': { backgroundColor: '#D83772' }, textTransform: 'unset' }}>
                            <Typography className="feature  text-1xl" variant="p" color="#efefef">
                                tokenomics
                            </Typography>
                        </Button>
                        <Button onClick={ () => window.location.href = '#roadmap'} color="inherit" sx={{ '&:hover': { backgroundColor: '#D83772' }, textTransform: 'unset' }}>
                            <Typography className="feature  text-1xl " variant="p" color="#efefef">
                                roadmap
                            </Typography>
                        </Button>
                        <Button onClick={ () => window.location.href = '#roadmap'} color="inherit" sx={{ '&:hover': { backgroundColor: '#D83772' }, textTransform: 'unset' }}>
                            <Typography className="feature  text-1xl" variant="p" color="#efefef">
                                socials
                            </Typography>
                        </Button>
                        <Button onClick={ () => window.location.href = '#gallery'} color="inherit" sx={{ '&:hover': { backgroundColor: '#D83772'}, textTransform: 'unset'  }}>
                            <Typography className="feature  text-1xl" variant="p" color="#efefef">
                                gallery
                            </Typography>
                        </Button>


                    </div>
                    
                <div className="Navbutton">
                        <Button onClick={handleOpen}>
                            <TableRowsSharpIcon sx={{ color: '#fff', width: 30, height: 30}}/>
                        </Button>            
                </div>


                    <Modal
                open={open}
                disableRestoreFocus
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 400 }}>
                        <Button onClick={ () => window.location.href = '#home'} color="inherit" sx={{ backgroundColor: '#D83772', width: '100%', padding: '10px', '&:hover': { backgroundColor: '#992791' } }}>
                            <Typography className="feature text-2xl ml-4 underline " variant="p" color="#efefef">
                                Home
                            </Typography>
                        </Button>
                        <Button onClick={ () => window.location.href = '#roadmap'} color="inherit" sx={{ backgroundColor: '#D83772', width: '100%', padding: '10px', marginTop: '10px', '&:hover': { backgroundColor: '#992791' } }}>
                            <Typography className="feature underline text-2xl" variant="p" color="#efefef">
                                Tokenomics
                            </Typography>
                        </Button>
                        <Button onClick={ () => window.location.href = '#roadmap'} color="inherit" sx={{ backgroundColor: '#D83772', width: '100%', padding: '10px', marginTop: '10px', '&:hover': { backgroundColor: '#992791' } }}>
                            <Typography className="feature underline text-2xl " variant="p" color="#efefef">
                                Roadmap
                            </Typography>
                        </Button>
                        <Button onClick={ () => window.location.href = '#roadmap'} color="inherit" sx={{ backgroundColor: '#D83772', width: '100%', padding: '10px', marginTop: '10px', '&:hover': { backgroundColor: '#992791' } }}>
                            <Typography className="feature underline text-2xl" variant="p" color="#efefef">
                                Socials
                            </Typography>
                        </Button>
                        <Button onClick={ () => window.location.href = '#gallery'} color="inherit" sx={{ backgroundColor: '#D83772', width: '100%', padding: '10px', marginTop: '10px', '&:hover': { backgroundColor: '#992791' } }}>
                            <Typography className="feature underline text-2xl" variant="p" color="#efefef">
                                gallery
                            </Typography>
                        </Button>

                </Box>
            </Modal>
            

                </Toolbar>


            </AppBar>
            <Hero/>

        </div>
  )
}