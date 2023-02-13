import { Typography, Button, InputBase } from '@mui/material'
import '../App.css'
import React, {useState} from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Snackbar from '@mui/material/Snackbar';
import CircularProgress from '@mui/material/CircularProgress';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '512px',
  bgcolor: '#808080',
  border: '2px solid #FD4085',
  boxShadow: 24,
  p: 4,
};

export const GoneWild = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [url, setUrl] = useState('https://i.ibb.co/Jm1rD3Y/error.png');

  const [openNotif, setOpenNotif] = React.useState(false);
  const [negative, setNegative] = React.useState(false);
  const handleClick = () => {
    if (!posPrompt) {
      alert("Please enter a positive prompt");
      return;
    }
    setOpenNotif(true);
    sendDataToBackend();
  };

  const handleCloseNotif = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenNotif(false);
  };

  const action = (
    <React.Fragment>

    </React.Fragment>
  );


    const [posPrompt, setPosPrompt] = useState('');
    const [negPrompt, setNegPrompt] = useState('');


    const [backendData, setBackendData] = useState([{}]);

    async function sendDataToBackend() {
      try {
        const response = await fetch("https://seal-app-8nfqb.ondigitalocean.app/api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({'posPrompt': posPrompt , 'negPrompt': negPrompt})
        });
        const data = await response.json();
        setBackendData(data);
        console.log(data.output[0]);
        setUrl(data.output[0]);
        handleOpen();
      } catch (error) {
        console.error(error);
      } finally {
        handleCloseNotif();
        setOpenNotif(false)
      }
    }
    
    

    const handlePosPromptChange = (event) => {
        setPosPrompt(event.target.value);
      };
    
      const handleNegPromptChange = (event) => {
        setNegPrompt(event.target.value);
      };



  


  return (
    <div className='Gonewild'>
      <div className='flex flex-col space-y-5 m-auto w-[90%]'>
        <div className='flex flex-row space-x-6'>
          <Typography className='feature text-8xl md:text-3xl sm:text-2xl' color='#efefef' variant='p'>
            Go Creative with
          </Typography>
          <div className='flex flex-row'>
            <Typography className='feature text-8xl md:text-3xl sm:text-2xl' color='#03F1EF' variant='p'>
              AI
            </Typography>
            <Typography className='feature text-8xl md:text-3xl sm:text-2xl' color='#FD4085' variant='p'>
              GW
            </Typography>              
          </div>

        </div>

        <div className='flex flex-col w-full justify-left'>

          <InputBase disabled={openNotif}
          
                      startAdornment={<InputAdornment position="start">
                                  <SearchIcon style={{color: '#efefef', fontSize: '38px'}} />
                                </InputAdornment>
                      }
                      endAdornment={<InputAdornment position="start">
                                  <Button onClick={handleClick} >
                                    <ArrowCircleRightIcon style={{color: '#efefef', fontSize: '38px', marginLeft: '8px'}} />
                                  </Button>
                                 
                                </InputAdornment>
                      }


                      className='w-full' placeholder='Safe for work prompts' variant="filled" 
                      inputProps={{
                        style: { 
                          color: '#808080', 
                          borderColor: '#FD4085',   
                          border: '1px solid #FD4085', 
                          backgroundColor: !openNotif ? '#efefef' : '#808080', 
                          borderRadius: '25px', 
                          fontSize: '24px', 
                          padding: '24px', 
                          height: '10px'
                        },
                      }}
                      InputLabelProps={{
                                      style: { color: '#efefef', borderRadius: '25px'},
                                  }} 
                      value={posPrompt}
                      onChange={handlePosPromptChange}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleClick();
                          sendDataToBackend();
                        }
                      }}/>

            {negative && <InputBase disabled={openNotif}
          
          className='w-[30%] pt-4 self-center' placeholder='Safe for work prompts' variant="filled" 
          inputProps={{
            style: { 
              color: '#808080', 
              borderColor: '#FD4085',   
              border: '1px solid #FD4085', 
              backgroundColor: !openNotif ? '#efefef' : '#808080', 
              borderRadius: '25px', 
              fontSize: '24px', 
              padding: '24px', 
              height: '2px'
            },
          }}
          InputLabelProps={{
                          style: { color: '#efefef', borderRadius: '25px'},
                      }} 
          value={negPrompt}
          onChange={handleNegPromptChange}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleClick();
            }
          }}/>}
        </div>

        <div className='flex space-x-8 pl-4 w-[80%] justify-left'>
        <Button onClick={() => setNegative(!negative)} color="primary" sx={{  padding: '8px', '&:hover': { backgroundColor: '#D83772'}}} >
                { !negative && <Typography className="feature text-xl md:text-base" variant="p" color="#efefef">
                  + Negative prompts
                </Typography>}
                { negative && <Typography className="feature text-xl md:text-base" variant="p" color="#efefef">
                  - Negative prompts
                </Typography>}
              </Button>
            <Button target='_blank' rel="noopener noreferrer" href='https://medium.com/@aigonewilderc' color="primary" sx={{  padding: '8px', '&:hover': { backgroundColor: '#D83772'}}} >
                <Typography className="feature text-xl md:text-base" variant="p" color="#efefef">
                  👋 Help?
                </Typography>
              </Button>
        </div>

        <div>
            <Snackbar
              open={openNotif}
              onClose={handleCloseNotif}
              message={<div className='flex flex-row space-x-8'>
                        <div className='flex m-auto'>
                            <CircularProgress color="secondary" size='24px' />
                        </div>
                        <div className='flex flex-col'>
                            <Typography className="feature text-xl md:text-base text-left" variant="p" color="#efefef">
                              Generating...
                            </Typography> 
                            <Typography className="feature text-l md:text-base text-left" variant="p" color="#efefef">
                                Please be patient, this can take up to a minute or two.
                            </Typography>        
                        </div>
      
                      </div>

              }
              action={action}
            />
        </div>

        (<Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <img src={url}/>
          </Box>
      </Modal>)

      </div>
    </div>

  )
}
