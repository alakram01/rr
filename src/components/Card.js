import React from 'react';

const Card = (props)=>{
    
    const {name, email,id,username} = props;
return(

    <div className= 'tc bg-light-green  dib br4 pa3 ma2 grow ba bw2 shadow-5 b--black'>
        
        
        <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
    
        <div>
            <h2>{props.name}</h2>
            <p> {props.username} </p>
            
            <a className="f6 link dim ph3 pv1 mb2 dib black bg-light-yellow grow ba bw2 shadow-5 b--black br4" href={props.email}>CLICK</a>
        </div>
        
    </div>
);

}
export default Card;