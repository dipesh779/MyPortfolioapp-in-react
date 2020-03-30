import React, { Component, Fragment } from 'react'
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton } from 'react-mdl'
class Project extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            activeTab:0
        };
    }


    onToggleCategory() {
        if(this.state.activeTab === 0){
            return(
                <Card shadow={0} style={{width: '50%',objectFit:'cover', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '250px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6NdVa_IYJ_PfVo0AYbe-WMVMNuYQCUmyAed8mcBJgbmf7R__c) center / cover'}}>School Management System</CardTitle>
                    <CardText>
                        A SMS portal built on django(2.x) Python's framework(django) and drf api's...
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/dipesh779/school-management-system-backend-DRF" target="-blank"><Button colored>Get Started</Button></a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            )
        } else if(this.state.activeTab === 1){
            return(
                <Fragment>
                <Card shadow={0} style={{width: '50%',objectFit:'cover', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '250px', background: 'url(https://techviral.net/wp-content/uploads/2018/12/to-do-list-apps-featured.jpg) center / cover'}}>Todo app</CardTitle>
                    <CardText>
                        Todo's App in react...
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/dipesh779/school-management-system-backend-DRF" target="-blank"><Button colored>Get Started</Button></a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                    <hr />
                <Card shadow={0} style={{width: '50%',objectFit:'cover', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '250px', background: 'url(https://techviral.net/wp-content/uploads/2018/12/to-do-list-apps-featured.jpg) center / cover'}}>Portfolio App</CardTitle>
                    <CardText>
                        Portfolio App in react...
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/dipesh779/portfolio-app-in-react" target="-blank"><Button colored>Get Started</Button></a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </Fragment>
            )
        }else if(this.state.activeTab ===2){
            return (
                <h1>This is Personal</h1>
            )
        }
    }

    render() {
        return (
            <div className="category-tab" >
                <Tabs activeTab={this.state.activeTab} onChange={(tabid)=>this.setState({activeTab:tabid})} ripple>
                    <Tab>Python (django)</Tab>
                    <Tab>React</Tab>
                    <Tab>Personal</Tab>
                </Tabs>

                <section className="project-toggle">
                    <Grid className="project-grid">
                        <Cell className="project-cell" col={10}>
                            <div className="project-content">{this.onToggleCategory()}</div>
                        </Cell>
                    </Grid>
                </section>

            </div>
        )
    }
}

export default Project
