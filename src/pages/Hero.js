import React from 'react'
import '../App.css';
import { Box, Typography, Button, Modal } from '@mui/material'
import { useNavigate } from 'react-router-dom';

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

export const Hero = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const navigate = useNavigate();


  return (
    <div className='Hero-mobile'>
        <div className='flex flex-col w-[50%] md:w-full sm:w-full xs:w-full md:pb-8 sm:pb-8'>

                <div className='flex flex-col mb-auto mt-auto pl-24 md:pl-0 sm:pl-0 xs:pl-0 md:items-center sm:items-center xs:items-center'>
                    <Typography className='feature text-left text-3xl xs:text-2xl' variant='p' color='#efefef'>
                        Artificial Intelligence:
                    </Typography>
                    <Typography className='lily text-left text-9xl xs:text-6xl' variant='p' color='#FD4085'>
                        Gone Wild
                    </Typography>
                    <div className='mt-4 text-left w-[95%]'>
                        <Typography className='feature text-left text-1xl' variant='p' color='#efefef'>
                        Our main goal is to offer a platform wherein people can generate AI-driven hyper realistic NSFW models and use them for creative applications through our own cryptocurrency coin, AiGoneWild Token (#AIGW). Moreover, by developing a fun tool powered by blockchain that can be used by everyone, it will serve as a medium to bring more awareness about crypto space.                        </Typography>                        
                    </div>

                    <div className='flex flex-row space-x-4 mt-4 w-[100%] md:justify-center md:w-[100%] sm:w-[100%] xs:w-[100%]'>
                        <Button onClick={() => navigate('/generate')} color='primary' sx={{ backgroundColor: '#03F1EF', '&:hover': { backgroundColor: '#D83772' }, padding: '10px'}}>
                            <Typography className='feature text-1xl' variant='p' color='#FD4085' sx={{ '&:hover': { color: '#efefef' } }}>
                                Generate image
                            </Typography>
                        </Button>

                      <Button target='_blank' rel="noopener noreferrer" href='https://www.dextools.io/app/en/ether/pair-explorer/0x5c9b94187c26eac6b5bd2c45b066d30e69518082' color="primary" sx={{ backgroundColor: '#01B8D9', border:'1px solid black', padding: '10px', '&:hover': { backgroundColor: '#D83772' }}} >
                        <Typography className="feature text-1xl md:text-base" variant="p" color="#efefef">
                            Dex Tools
                        </Typography>
                      </Button>

                      <Button target='_blank' rel="noopener noreferrer" href='https://app.uniswap.org/#/swap?outputCurrency=0x21c4118c57f142d9de711396b2d329fa0f57a033' color="primary" sx={{ backgroundColor: '#A624E1', border:'1px solid black', padding: '10px','&:hover': { backgroundColor: '#D83772' }}} >
                        <Typography className="feature text-1xl" variant="p" color="#efefef">
                            Uniswap
                        </Typography>
                      </Button>

                      <Button target='_blank' rel="noopener noreferrer" href='https://etherscan.io/token/0x21C4118C57f142D9de711396b2D329Fa0F57A033' color="primary" sx={{ backgroundColor: '#23335C', border:'1px solid black', padding: '10px', '&:hover': { backgroundColor: '#D83772' }}} >
                        <Typography className="feature text-1xl" variant="p" color="#efefef">
                            Etherscan
                        </Typography>
                      </Button>

                    </div>


                    
                </div>
        </div>

        <div className='m-auto w-[50%]'>
        <Box
          component="img"
            sx={{
                margin: 'auto',
                minWidth: '200px',
                maxWidth: '600px',
                maxHeight: '1000px',
            }}
            src={require('../images/sss.png')}
            className='w-auto h-[100%] md:w-[90%]'
            />
        </div>


        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 300}}>
            <Typography className='feature text-1xl' variant="p" color="#efefef">
                AI Gone Wild image generator is not yet available for public use.
            </Typography>
        </Box>
      </Modal>
     

    </div>
  )
}
