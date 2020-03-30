import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'
import image from './lucifer.jpg'


class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                    <h1>Dipesh Singh</h1>
                    <img src= {image} 
                        alt="avatar" 
                        style = {{height: '200px', width:'70%'}}
                        />
                    <p style={{width: "75%", margin: "auto", paddingTop: "1em"}}>
                        I am Dipesh Singh. A common Person from a small village of Nepal.
                    </p>
                    </Cell>
                    <Cell col={6}>
                        <h1>Contact Me</h1>
                        <hr />


                    <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:"30px", fontFamily: "Anton"}}>
                                <i className= "fa fa-phone-square" aria-hidden="true"  />
                                <p>(9810004740)</p>
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize:"30px", fontFamily: "Anton"}}>
                                <i className= "fa fa-envelope" aria-hidden="true"  />
                                <p>dipeshsingh779@gmail.com</p>
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize:"30px", fontFamily: "Anton"}}>
                                <i className= "fa fa-skype" aria-hidden="true"  />
                                <p>dipesh779</p>
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize:"30px", fontFamily: "Anton"}}>
                                <i className= "fa fa-fax" aria-hidden="true"  />
                                <p>(123) 456-789</p>
                                </ListItemContent>
                            </ListItem>
                        </List>
                    </div>
                    </Cell>
                </Grid>
                
            </div>
        )
    }
}

export default Contact
