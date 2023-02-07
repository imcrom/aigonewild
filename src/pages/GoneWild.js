import { Typography, Box, TextField, Button } from '@mui/material'
import '../App.css'
import placeholder1 from '../images/placeholder.png'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {io} from 'socket.io-client'
import { Player } from '@lottiefiles/react-lottie-player'


export const GoneWild = () => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [posPrompt, setPosPrompt] = useState('');
    const [negPrompt, setNegPrompt] = useState('');


    const [backendData, setBackendData] = useState([{}]);

    async function sendDataToBackend() {
      if (!posPrompt) {
        alert("Please enter a positive prompt");
        return;
      }
      setLoading(true);
      try {
        const response = await fetch("/api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({'posPrompt': posPrompt, 'negPrompt': negPrompt})
        });
        const data = await response.json();
        setBackendData(data);
        console.log(data.output[0]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    
    

    const handlePosPromptChange = (event) => {
        setPosPrompt(event.target.value);
      };
    
      const handleNegPromptChange = (event) => {
        setNegPrompt(event.target.value);
      };



    function handleOutput(){
        if(loading){
            return(<Player autoplay loop src="https://assets6.lottiefiles.com/packages/lf20_jk6c1n2n.json" style={{ height: '500px', width: '300px' }}></Player>)
        }
        
        else if(backendData && backendData.output && backendData.output.length > 0){
            return(<img src={backendData.output[0]} className='w-[512px] h-[512px] self-center'/>)
        }

        else{
            return(<img src={placeholder1} className='w-[512px] h-[512px] self-center'/>)

        }
        
    }


    // async function dreamboothApi() {
    //     if (!posPrompt) {
    //       alert("Please enter a positive prompt");
    //       return;
    //     }
    //     setLoading(true);
    //     try {
    //       const response = await axios.post(dreamboothUrl, dreamboothData, {
    //         headers: {
    //           "Content-Type": "application/json"
    //         }
    //       });
      
    //       if (response.data.status === "processing") {
    //         console.log("processing");
    //         console.log(response);
    //         dreamboothUrl = response.data.fetch_result;
    //         var time = response.data.eta * 1000;
    //         await new Promise(resolve => setTimeout(resolve, time));
    //         return dreamboothApi();
    //       }
      
    //       setResponse(response.data);
    //     } catch (error) {
    //       console.error(error);
    //     } finally {
    //       setLoading(false);
    //     }
    //   }
      

  return (
    <div className='Gonewild'>
            <div id='generate' className='flex flex-row w-full h-full mt-8 pb-8'>
                <div className='flex flex-col w-[50%] space-y-4'>
                    <Typography className='feature text-4xl w-full text-center pb-4' variant='p' color='#efefef'>
                        AIGoneWild Image Generator
                    </Typography>  
                    <div className='flex flex-col space-y-4 w-[75%] self-center items-center'>
                            <TextField id="filled-basic" label="Positive prompt..." variant="filled" fullWidth inputProps={{
                                    style: { color: '#efefef', backgroundColor: '#1e1e1e', borderRadius: '25px', height: '10px' },
                                }} InputLabelProps={{
                                    style: { color: '#efefef', borderRadius: '25px'},
                                }}         
                                value={posPrompt}
                                onChange={handlePosPromptChange}/>
                            <TextField id="filled-basic" label="Negative prompt..." variant="filled" fullWidth inputProps={{
                                    style: { color: '#efefef', backgroundColor: '#1e1e1e', borderRadius: '25px', height: '10px' },
                                }} InputLabelProps={{
                                    style: { color: '#efefef', borderRadius: '25px'},
                                }}         
                                value={negPrompt}
                                onChange={handleNegPromptChange}/>
                    </div>
                        <Button onClick={() => sendDataToBackend()} sx={{ width: '25%', alignSelf: 'center' ,borderRadius: '30px', backgroundColor: '#FD4085', '&:hover': { backgroundColor: '#03F1EF' } }} variant='contained' color='primary'>
                            Generate 
                        </Button>    
                        <div className='w-[50%] self-center text-justify pt-4'>
                            <Typography className='feature text-2xl w-[70%] m-auto text-center pt-4' variant='p' color='#efefef'> 
                                AI Gone Wild can generate NSFW images using a combination of AI and human input. This use hassanblend as its model to generate hyper-realistic images.
                            </Typography>
                        </div>
                </div>

                <div className='flex justify-center w-[50%] '> 
                    {handleOutput()}
                </div>
            </div>
    </div>

  )
}
