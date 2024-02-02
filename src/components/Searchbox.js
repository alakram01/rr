import React from "react";


const Searchbox = ({searchfield, searchChange}) =>{

    return (
        <div className = 'pa2'>
    <input className = 'pa3 ba bg-light-yellow b--black bw2'
     type ='search' 
     placeholder  = 'Search Robos' 
     onChange = {searchChange}
     />
        


</div>
    );


}
export default Searchbox;