import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landingpage from './Landingpage'
import About from './About'
import Resume from './Resume'
import Project from './Project'
import Contact from './Contact'


const Main = () => (
    <Switch>
        <Route exact path="/" component={Landingpage}  />
        <Route path="/about" component={About}  />
        <Route path="/resume" component={Resume}  />
        <Route path="/project" component={Project}  />
        <Route path="/contact" component={Contact}  />
    </Switch>
)

export default Main
