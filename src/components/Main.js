import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Skills from './Skills'
import Projects from './Projects'
import Contacts from './Contacts'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
    	// const style = {
    	// 	width: ''
    	// }
        return (
          	<main>
	      		<div className='main-background' style={this.props.newStyle}></div>
	      		<Switch>
	            	<Route exact path='/' component={Home}/>
	            	<Route path='/skills' component={Skills}/>
	            	<Route path='/projects' component={Projects}/>
	            	<Route path='/contacts' component={Contacts}/>
	        	</Switch>
	    	</main>
        )
    }
}
export default Main