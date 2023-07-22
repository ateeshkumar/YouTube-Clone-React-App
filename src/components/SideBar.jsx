import { Stack } from "@mui/material";
import {categories} from '../utils/constants';
// const selectCategory = 'New';

const SideBar = ({selectCategory, setselectCategory}) => {
    return ( 
        <Stack
        direction='row'
        sx={{overflowY:'auto',
        height:{sx:'auto',md:'95%'},
        flexDirection:{md:'column'},
        }}>
            {categories.map((category)=>(
                <button
                onClick={()=>setselectCategory(category.name)}
                className="category-btn"
                style={{background: category.name===
                selectCategory && '#fc1503',color:'white'}}
                key={category.name}>
                    <span style={{
                        color:category.name===selectCategory?'white':'red', 
                        marginRight:'15px'}}>{category.icon}
                    </span>
                    <span style={{
                        opacity:category.name===selectCategory?'1':0.8}}>
                            {category.name}
                    </span>
                </button>
            ))}

        </Stack>
     );
}
 
export default SideBar;