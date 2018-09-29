import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { animStr } from '../helpers/stringanim'

class Header extends Component {
	constructor(props) {
        super(props)
        this.state = {
        	menuList: ['Home', 'Skills', 'Projects', 'Contacts']
        }
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
    	const { menuList } = this.state
    	const { disableLinks } = this.props
	// can disable link until animation isnt ended
	// const disabled = disableLinks ? 'disabled-link' :''
    	const disabled = disableLinks ? '' :''

    	let active = 'home'
    	const path = window.location.pathname

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
					    {menuList.map(item => 
					    	<li className='nav-item'>
					    		<Link 	className={item.toLowerCase() === active 
					    					? `nav-link active ${disabled}` 
					    					: `nav-link ${disabled}`}
					    				to={item === 'Home' ? '/' : item.toLowerCase()}
					    				onMouseEnter={animStr}
					    				onClick={this.props.handleClick}>
					    			{item.toUpperCase()}
					    		</Link>
					    	</li>
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
					<Link className='header-logo-link' to='/'>s</Link>
				</button>
			</header>
		)
	}
}

// propTypes
export default Header