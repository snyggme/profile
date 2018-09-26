import React, { Component } from 'react'
import './App.css'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import { getPathname } from './helpers/getpath.js'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newStyle: {
                
            },
            currentPath: '',
            nextPath: ''
        }
    }
    render() {
        let { newStyle, currentPath, nextPath } = this.state

        if (nextPath === '' && window.location.pathname !== '/') {
            newStyle = {
                animation: 'main-background-change 1s forwards'
            }
        }
        return (
          <div>
            <Header handleClick={(e) => {
                this.setState({
                    newStyle: {
                        animation: 'main-background-change 1s forwards',
                    },
                    currentPath: window.location.pathname,
                    nextPath: getPathname(e.target.href)
                })
            }}/>
            <div className='main-background' style={newStyle}></div>
            <Main/>
            <Footer />
          </div>
        )
    }
}
export default App
