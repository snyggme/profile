import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Skills from './Skills'
import Projects from './Projects'
import Contacts from './Contacts'

const Main = (props) => {
    const { showContent, screenWidth } = props
    
    return (
        <main>
	      	<Routes>
	           	<Route exact path='/' element={<Home/>}/>                   
	           	<Route path='/skills' element={<Skills show={showContent} screenWidth={screenWidth} />} />
	           	<Route path='/projects' element={<Projects show={showContent} />} />
	           	<Route path='/contacts' element={<Contacts show={showContent} />} />
	        </Routes>
	    </main>
    )
}

export default Main