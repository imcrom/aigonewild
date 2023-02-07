import React from 'react'
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export const Tokenomics = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  return (
    <div className='Tokenomics'>
                    <div id='roadmap' className='flex flex-col h-full justify-center'>
                        <div className='flex justify-center pt-24'>
                            <Typography className='feature text-4xl underline md:text-3xl sm:text-2xl' color='#efefef' variant='p'>
                                AI Gone Wild Project Roadmap:
                            </Typography>
                        </div>
                        <div className='flex justify-center pt-4'>
                            <MobileStepper
                                variant="progress"
                                steps={4}
                                position="static"
                                activeStep={activeStep}
                                sx={{ maxWidth: 400, flexGrow: 1, backgroundColor: '#000' }}
                                nextButton={
                                    <Button size="small" sx={{ color: '#FD4085'}} onClick={handleNext} disabled={activeStep === 4}>
                                    Next
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowLeft />
                                    ) : (
                                        <KeyboardArrowRight />
                                    )}
                                    </Button>
                                }
                                backButton={
                                    <Button sx={{ color: '#03F1EF' }} size="small" onClick={handleBack} disabled={activeStep === 0}>
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowRight />
                                    ) : (
                                        <KeyboardArrowLeft />
                                    )}
                                    Back
                                    </Button>
                                }
                            />
                        </div>
                        <div className='flex self-center pt-12 w-[35%] md:w-[85%] text-center justify-center'>
                            { 
                                activeStep === 0 &&
                                <Typography className='feature text-2xl' color='#efefef' variant='p'>
                                    This shows AI Gone Wild project roadmap. This contains all the planned features and milestones for the project.
                                </Typography>
                            }
                            { 
                                activeStep === 1 &&
                                <Typography className='feature text-2xl' color='#efefef' variant='p' 
                                dangerouslySetInnerHTML={{__html: `<u>Phase 0</u>:<br/> •Website Launch <br /> •Socials Launch <br/> •Token Launch`}}/>

                            }
                            { 
                                activeStep === 2 &&
                                <Typography className='feature text-2xl' color='#efefef' variant='p' 
                                dangerouslySetInnerHTML={{__html: `<u>Phase 1</u>:<br/> •Community Building <br /> •Marketing <br/> •Bot development and beta testing `}}/>

                            }
                            { 
                                activeStep === 3 &&
                                <Typography className='feature text-2xl' color='#efefef' variant='p' 
                                dangerouslySetInnerHTML={{__html: `<u>Phase 2</u>:<br/> •Enhancement of the telegram bot Ai technology  <br /> •Lifetime  partnership<br/> •CEX Listings <br/> •Development of website and mobile app `}}/>

                            }
                            { 
                                activeStep === 4 &&
                                <Typography className='feature text-2xl' color='#efefef' variant='p' 
                                dangerouslySetInnerHTML={{__html: `<u>Phase 4</u>:<br/> •Partnership with viral tiktok and youtube influencers to try out the applications   <br /> •Global expansion<br/>`}}/>

                            }
                            
                        </div>

                        <div className='flex flex-col items-center space-y-4 justify-center pt-8'>
                            <Typography className='feature text-4xl underline' color='#efefef' variant='p'>
                                Tokenomics:
                            </Typography>
                            <Typography className='feature text-6xl' color='#efefef' variant='p'>
                                4/4 TAX
                            </Typography>
                        </div>
                        <div className='flex flex-col items-center space-y-4 justify-center pt-8 mb-4 '>
                            <Typography className='feature text-4xl underline md:text-3xl sm:text-2xl' color='#efefef' variant='p'>
                                AI Gone Wild Socials:
                            </Typography>
                            <Typography className='feature text-2xl md:text-base' color='#efefef' variant='p'>
                                Twitter: https://twitter.com/aigonewildeth
                            </Typography>
                            <Typography className='feature text-2xl md:text-base' color='#efefef' variant='p'>
                                Telegram: https://t.me/aigonewild
                            </Typography>
                        </div>
                        
                    </div>
            </div>
    )
}
