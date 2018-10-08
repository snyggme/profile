import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { HeaderItem } from './HeaderItem' 
import { getPathname } from '../helpers/chooseanim'

class Header extends Component {
	constructor(props) {
        super(props)
        this.menuList = ['Home', 'Skills', 'Projects', 'Contacts']
        this.processing = false
        this.menuMouseEnter = this.menuMouseEnter.bind(this)
        this.menuClick = this.menuClick.bind(this)
    }
	menuMouseEnter(e) {
		if (e.target.className !== 'selected') {
			document.querySelector('.line-up').classList.toggle('down')
			document.querySelector('.line-down').classList.toggle('up')	
		}
	}
	menuClick(e) {
		if (this.processing)
			return

		document.getElementById('reverse-lines').classList.toggle('selected')

		this.processing = true
		
		document.querySelector('.line-up').classList.toggle('flip-up')
		document.querySelector('.line-down').classList.toggle('flip-down')	
		document.querySelector('.navbar').classList.toggle('navbar-show')
	}
    render() {
    	const { disableLinks } = this.props
    	const disabled = disableLinks ? 'disabled-link' :''

    	let active = 'home'
    	const path = getPathname(window.location.pathname)

    	if (path !== '/') {
    		let arr = [...path]
    		arr.shift()
    		active = arr.join('')
    	}

		return (
			<header>
				<nav className="navbar" onTransitionEnd={() => {
					this.processing = false
				}}>
					<ul className="navbar-list">
					    {this.menuList.map(item => 
					    	<HeaderItem item={item} 
					    				active={active} 
					    				onClick={this.props.handleClick} 
					    				disabled={disabled}
					    				key={item.toString()}/>
					    )}
					</ul>
				</nav>
				<button id='reverse-lines' 
						onMouseEnter={this.menuMouseEnter}
						onClick={this.menuClick}>
					<div className="line line-up"></div>
					<div className="line line-down"></div>
				</button>
				<button id='header-logo'>
					<Link className={`header-logo-link ${disabled}`} to='' onClick={this.props.handleClick}>s</Link>
				</button>
			</header>
		)
	}
}

export default Header