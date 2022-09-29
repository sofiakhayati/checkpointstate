/*import React, { Component } from 'react'

import './App.css';
import my_image from './mypicture.jpg'
export default class App extends Component {
  constructor(){
    super()
    this.state={
      Person :
      { fullName: "SOFIA KHAYATI",
        bio: "write any thing about me ", 
        imgSrc: my_image,
        profession: "Engineer"
      },
      show:false,
      currentTime: null,
      count: null
    };
  }
  


componentDidMount(){
  
  this.setState({currentTime : new Date()
  })
  
  const funct = () => {
    const dat = new Date();
    this.setState(() => ({count: Math.floor((dat - this.state.currentTime)/1000)
  }));
  }
  setInterval(funct, 1000);
  
}



 showme =(e) =>{
  e.preventDefault()
  this.setState(
    {show:!this.state.show}
  )
 }

  
  render() {
    return ( 
      <div className="App">
      {this.state.show? 
      <div>
      <h1>{this.state.Person.fullName}</h1>
      <p>{this.state.Person.bio}</p>
      <img src={this.state.Person.imgSrc} alt="so" style={{width:"150px", height:"100px", borderRadius:"50%"}}/>
      <h3><i>{this.state.Person.profession}</i></h3>
      </div>:null
      }
      <button onClick={this.showme} >Toggle</button> 
      <div>
      {this.state.count} Seconds
      </div>
      
      
      </div>
    )
  }
}

*/
import './App.css'
import React, { Component } from 'react'
import my_image from './mypicture.jpg'
export default class App extends Component {
  constructor(){
    super()
    this.state={
      Person:{
        fullName: "SOFIA KHAYATI",
        bio: "I'm sofia khayati, i'm a mechatronic engineer graduate from the national school of engineering in sousse and i've a master degree in Mechanic and system engineering. I work actually as a production manager in Mitech Tunisie ", 
        imgSrc: my_image,
        profession: "Mechatronic Engineer"
      },
      show: false,
      currentdate:null,
      count: null,
      design: "Designed by sofia",
      show2: false
    }
  }

/*********************** count time */
componentDidMount(){
  this.setState(
    {
      currentdate: new Date()
    }
  )
 
  const funct = () => {
    const dat = new Date()
    this.setState(() =>({count: Math.floor((dat-this.state.currentdate)/1000)}  
    ))
  }

  setInterval(funct, 1000)
}


/************************* */

  showme = () => {
    this.setState(
      {
        show:!this.state.show
      }
    )
  }


  render() {
    return (
      <div className='App'>
        {this.state.show?
        <div className='SOFI'>
          <h1>{this.state.Person.fullName}</h1>
          <p style={{width:"50%", marginLeft:" 25%", textAlign:"center"}}>{this.state.Person.bio}</p>
          <img src={this.state.Person.imgSrc} alt="sofi" style={{width:300, height:300, borderRadius:"50%"}}/>
          <h3 style={{color:"blue"}}><i>{this.state.Person.profession}</i></h3>
        </div>:null }
        <button onClick={this.showme} className='so'>
          <b>Toggle</b>
        </button>
        <div style={{border:"15px dotted blue", marginTop:"4%", width:"20%", marginLeft:"40%", marginBottom:"5%"}}> <h1> {this.state.count} seconds</h1></div>
        {this.state.show?<div style={{fontSize:"150%", paddingBottom:"3%", color:"white"}}><i>{this.state.design}</i></div>:null}
      </div>
    )
  }
}
