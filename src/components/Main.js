import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Skills from './Skills'
import Projects from './Projects'
import Contacts from './Contacts'
    	
const Main = (props) => {
    const { showContent } = props
    return (
        <main>
	      	<Switch>
	           	<Route exact path='/' component={Home}/>                   
	           	<Route path='/skills' render={(routeProps) => (
                    <Skills {...routeProps} show={showContent}/>
                )}/>
	           	<Route path='/projects' render={(routeProps) => (
                    <Projects {...routeProps} show={showContent}/>
                )}/>
	           	<Route path='/contacts' component={Contacts}/>
	        </Switch>
	    </main>
    )
}
export default Main