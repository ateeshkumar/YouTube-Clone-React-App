
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Box } from '@mui/material';
// import {Feed,VideoDetails,ChannelDetails,SearchFeed,Navbar} from './components';
import {Navbar,Feed,VideoDetails,ChannelDetails,SearchFeed} from './components/index';


function App() {
  return (
      <BrowserRouter>
      <Box sx={{backgroundColor:'#000'}}>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Feed/>}/>
          <Route path='/video/:id' exact element={<VideoDetails/>}/>
          <Route path='/channel/:id' exact element={<ChannelDetails/>}/>
          <Route path='/search/:searchTerm' exact element={<SearchFeed/>}/>
        </Routes>
      </Box>
       
      </BrowserRouter>
  );
}

export default App;
