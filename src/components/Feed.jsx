import { useState,useEffect } from "react";
import { Box,Stack,Typography } from "@mui/material";
import SideBar  from "./SideBar";
import Video from "./Video";
import { fetchFromApi } from "../utils/FetchFromApi";

const Feed = () => {
    const [selectCategory, setselectCategory] = useState('New');
    const [video, setvideo] = useState([]);
    useEffect(()=>{
        fetchFromApi(`search?part=snippet&q=${selectCategory}`)
        .then((data)=>setvideo(data.items))
    },[selectCategory])

    return ( 
        <Stack
        sx={{flexDirection:{sx:'column',md:'row'}}}>
            <Box sx={{height:{sx:'auto',md:'92vh'},
            borderRight:'1px solid #3d3d3d',
            px:{sx:0,md:2}}}>
                <SideBar
                selectCategory=
                {selectCategory}
                setselectCategory=
                {setselectCategory}/>
                <Typography
                className="copyright"
                variant="body2"
                sx={{mt:1.5,color:'#fff'}}>
                    Copyright 2023 AKM Media
                </Typography>
            </Box>
            <Box p={2} sx={{overflow:'auto',
                    height:'90vh',flex:2}}>
                <Typography variant="h4"
                fontWeight='bold' mb={2}
                sx={{color:'white'}}>
                    {selectCategory} <span style={{color:'#F31503'}}>
                        videos

                    </span>
                </Typography>
                <Video videos={video}/>
            </Box>
        </Stack>
     );
}
 
export default Feed;