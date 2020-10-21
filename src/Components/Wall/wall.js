 import React from 'react';
 import './style.css';

 import Brick from '../Brick/brick.js';
 class Wall extends React.Component{
    
     constructor(props){
        super(props);
        this.state={
            bricks:[1,2,3,4]
        };
     }
     addMorebricks=() =>{
         const newBricksArray=[...this.state.bricks];
         newBricksArray.push(newBricksArray.length +1);
        this.setState({
            bricks:newBricksArray
        })
     }
    render=() => {
       return <div className="wall-container">
           {
               this.state.bricks.map( (brick) =>{
                   return <Brick key={brick} name={brick}/>
               })
           }
           {/* <Brick name="Brick 1"/>
           <Brick name="Brick 2"/> */}

           <button className="btn" onClick={this.addMorebricks}>
               ADD MORE
           </button>
        </div>
    };




 }
 export default Wall