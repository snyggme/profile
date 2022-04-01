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
            screenWidth: window.innerWidth
        }
    }

    handleClick = (e) => {
        const screenWidth = window.innerWidth
        const nextPath = getPathname(e.target.href)
        const currentPath = getPathname(window.location.pathname)

        if (nextPath !== currentPath) {
            if(screenWidth < 663) {
                document.getElementById('reverse-lines').click()

                this.setState({
                    nextPath,
                    disableLinks: false,
                    screenWidth
                })  
            } else {
               this.setState({
                    newStyle: {
                        animation: getAnimationName(currentPath, nextPath)
                    },
                    nextPath,
                    disableLinks: true,
                    screenWidth
                })   
            }
        }
    }

    render() {
        let { newStyle, nextPath, disableLinks, showContent, screenWidth } = this.state

        if (nextPath === '' && getPathname(window.location.pathname) !== '/' && screenWidth > 663) {
            newStyle = {
                animation: getAnimationName('/home', getPathname(window.location.pathname))
            }
        }
        
        return (
            <div>
                <Header disableLinks={disableLinks} 
                        handleClick={this.handleClick} />
                <div className='main-background' style={newStyle}
                        onAnimationEnd={() => { 
                            this.setState({ 
                                disableLinks: false
                            }) 
                        }}
                ></div>
                <Main screenWidth={screenWidth}/>
                <Footer />
            </div>
        )
    }
}

export default App
