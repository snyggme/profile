import React, { Component } from 'react'
import './App.css'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import { getPathname, getAnimationName } from './helpers/chooseanim'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newStyle: {
                animation: ''
            },
            nextPath: '',
            disableLinks: false,
            showContent: false,
            screenWidth: window.innerWidth
        }
    }
    render() {
        let { newStyle, nextPath, disableLinks, showContent, screenWidth } = this.state

        if (nextPath === '' && getPathname(window.location.pathname) !== '/' && screenWidth > 663) {
            newStyle = {
                animation: getAnimationName('/home', getPathname(window.location.pathname))
            }
        } else if (screenWidth < 663) {
            showContent = true
        }
        
        return (
            <div>
                <Header disableLinks={disableLinks} 
                        handleClick={(e) => {
                            const screenWidth = window.innerWidth
                            const nextPath = getPathname(e.target.href)
                            const currentPath = getPathname(window.location.pathname)

                            if (nextPath !== currentPath) {
                                if(screenWidth < 663) {
                                    document.getElementById('reverse-lines').click()

                                    this.setState({
                                        nextPath: nextPath,
                                        disableLinks: false,
                                        showContent: true,
                                        screenWidth: screenWidth
                                    })  
                                } else {
                                   this.setState({
                                        newStyle: {
                                            animation: getAnimationName(currentPath, nextPath)
                                        },
                                        nextPath: nextPath,
                                        disableLinks: true,
                                        showContent: false,
                                        screenWidth: screenWidth
                                    })   
                                }
                            }        
                }}/>
                <div    className='main-background' style={newStyle}
                        onAnimationEnd={() => { 
                            this.setState({ 
                                disableLinks: false,
                                showContent: true 
                            }) 
                        }}
                ></div>
                <Main showContent={showContent} screenWidth={screenWidth}/>
                <Footer />
            </div>
        )
    }
}
export default App
