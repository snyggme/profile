import React, { Component } from 'react'
import './App.css'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newStyle: {
                width: '100%'
            }
        }
    }
    render() {
        return (
          <div>
            <Header handleClick={() => {
                this.setState({
                    newStyle: {
                        animation: 'main-background-change 1.5s forwards'
                    }
                })
            }}/>
            <Main newStyle={this.state.newStyle}/>
            <Footer />
          </div>
        )
    }
}
export default App
