import { useState,useEffect } from "react";
import { Box,Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Video from "./Video";
import { fetchFromApi } from "../utils/FetchFromApi";

const SearchFeed = () => {
    const [video, setvideo] = useState([]);
    const {searchTerm} = useParams();
    useEffect(()=>{
        fetchFromApi(`search?part=snippet&q=${searchTerm}`)
        .then((data)=>setvideo(data.items))
    },[searchTerm])

    return ( 
        <Box p={2} sx={{overflow:'auto',
                    height:'90vh',flex:2}}>
                <Typography variant="h4"
                fontWeight='bold' mb={2}
                sx={{color:'white'}}>
                    Search Results for: <span style={{color:'#F31503'}}>

                        {searchTerm} </span> video
                </Typography>
                <Video videos={video}/>
            </Box>
     );
}
 
export default SearchFeed;