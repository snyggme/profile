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
            currentPath: '',
            nextPath: '',
            disableLinks: false,
            showContent: false
        }
    }
    render() {
        let { newStyle, currentPath, nextPath, disableLinks, showContent } = this.state

        if (nextPath === '' && window.location.pathname !== '/') {
            newStyle = {
                animation: 'main-background-change 0.8s forwards'
            }
        }
        return (
            <div>
                <Header disableLinks={disableLinks} 
                        handleClick={(e) => {
                            const nextPath = getPathname(e.target.href)
                            
                            this.setState({
                                newStyle: {
                                    animation: getAnimationName(window.location.pathname, nextPath),
                                },
                                currentPath: window.location.pathname,
                                nextPath: nextPath,
                                disableLinks: true,
                                showContent: false
                            })
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
