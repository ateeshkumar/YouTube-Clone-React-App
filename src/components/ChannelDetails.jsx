import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import {ChannelCard,Video} from './';
import { fetchFromApi } from "../utils/FetchFromApi";
import zIndex from "@mui/material/styles/zIndex";


const ChannelDetails = () => {
    const {id} = useParams();
    const [channelDetails,setchannelDetails] = useState(null);
    const [video,setvideo] = useState([])
    
    console.log(channelDetails);
    console.log(video);

    useEffect(()=>{
        fetchFromApi(`channels?part=snippet&id=${id}`)
        .then((data)=>setchannelDetails(data?.items[0]))

        fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
        .then((data)=>setvideo(data?.items))
    },[id])

    return ( 
        <Box minHeight='95vh'>
            <Box>
                <div style={{
                    background:'linear-gradient(90deg,rgba(0,238,247,1) 0%,rgba(206,3,184,1) 100%,rgba(0,212,255,1) 100%)',
                    zIndex:10,
                    height:'300px'}}>
                        

                </div>
                <ChannelCard channeldetails={channelDetails} marginTop="-110px"/>

            </Box>
            <Box display="flex" p={2}>
                <Box sx={{mr:{sm:'100px'}}}/>
                    <Video videos={video}/>

            </Box>

        </Box>
        
     );
}
 
export default ChannelDetails;