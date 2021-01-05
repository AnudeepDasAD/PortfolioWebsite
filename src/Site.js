
import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainComponents from './MainComponents'
import Projects from './components/projects'


class Site extends React.Component {
  
    render() {
      return (
        <BrowserRouter>
          <div>
            <Switch>
                <Route exact path = '/' component = {MainComponents}/>
                <Route path = '/projects' component={Projects}/>
            </Switch>
          </div>
        </BrowserRouter>
      )
    }
  }
  
  //'observer' forces App to listen for changes in the userStore
  export default Site;