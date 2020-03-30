import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import Main from './components/Main';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <div className="demo-big-content">
          <Layout>
              <Header className='header-color' style = {{height:"80px"}} title="My Portfolio" scroll>
                  <Navigation>
                      <Link to="/">Home</Link>
                      <Link to="/resume">Resume</Link>
                      <Link to="/about">About</Link>
                      <Link to="/project">Project</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Header>
              <Drawer title="Title">
                  <Navigation>
                      <Link to="/">Home</Link>
                      <Link to="/resume">Resume</Link>
                      <Link to="/about">About</Link>
                      <Link to="/project">Project</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main />
              </Content>
          </Layout>
      </div>
    </div>
  );
}

export default App;
