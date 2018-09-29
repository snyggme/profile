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
                
            },
            nextPath: '',
            disableLinks: false,
            showContent: false
        }
    }
    render() {
        let { newStyle, nextPath, disableLinks, showContent } = this.state

        if (nextPath === '' && window.location.pathname !== '/') {
            newStyle = {
                animation: getAnimationName('/home', window.location.pathname)
            }
        }
        return (
            <div>
                <Header disableLinks={disableLinks} 
                        handleClick={(e) => {
                            const nextPath = getPathname(e.target.href)
                            const currentPath = window.location.pathname

                            if (nextPath !== currentPath) {
                                this.setState({
                                    newStyle: {
                                        animation: getAnimationName(currentPath, nextPath),
                                    },
                                    nextPath: nextPath,
                                    disableLinks: true,
                                    showContent: false
                                })  
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
                <Main showContent={showContent}/>
                <Footer />
            </div>
        )
    }
}
export default App
