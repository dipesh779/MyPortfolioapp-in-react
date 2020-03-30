import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import image from './lucifer.jpg';
import Education from './Education';
// import axios from 'axios'

class Resume extends Component {

    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          data : null
    //     }
    // }

    // componentDidMount(){
    //     axios.get(`http://127.0.0.1:8000/resume-list`)
    //     .then((res) => {
    //         const data = res.data;
    //         // console.log(data)
    //         this.setState({data})
    //     });
        
    // }
    

    render() {
        return (
            <div>
                <Grid>
                    <Cell col = {4}>
                        <div style={{textAlign:"center"}}>
                            <img 
                            src = {image}
                            alt = 'avatar'
                            style={{height: "200px"}}
                             />
                        </div>
                        <h2 style={{paddingTop: "2em"}}>Dipesh Singh</h2>
                        <h2 style={{color: "grey"}}>Programmer</h2>
                        <hr style={{borderTop: "3px solid #833fb2", width: "50%"}} />
                        <p>This is my personal portfolio</p>


                        {/* {
                            this.state.data ? 
                            this.state.data.map((item, i)=>
                            <div key={item.id}>
                            <Card className="card-body">
                                <img alt="avatar" src= "{item.image}" />
                            
                            <p>{i}---{item.id}---{item.name}</p><br />
                            <p>{item.description}</p>
                            </Card>
                            </div>
                            )
                            :
                            null
                        } */}
                       


                        <hr style={{borderTop: "3px solid #833fb2", width: "50%"}} />
                        <h5>Address</h5>
                        <p>Kusunti-13, Lalitpur</p>

                        <h5>Phone</h5>
                        <p>(+977) 981 000 4740</p>  

                        <h5>Email</h5>
                        <p>dipeshsingh779@gmail.com</p>

                        <hr style={{borderTop: "3px solid #833fb2", width: "50%"}} />                      


                    </Cell>

                    <Cell col={8} className="resume-right-col">
                        <h1>Education</h1>
                        <Education startYear = {2012} 
                        endYear = {2013}
                        MyUniversity = "HSEB"
                        Description = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock"
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume
