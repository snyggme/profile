import React from 'react'
import { Link } from 'react-router-dom'
import { animStr } from '../helpers/stringanim'

export const HeaderItem = (props) => {
	const { item, disabled, active, onClick } = props

	return (
		<li className='nav-item'>
			<Link 	className={item.toLowerCase() === active 
						? `nav-link active ${disabled}` 
						: `nav-link ${disabled}`}
					to={item === 'Home' ? '/' : item.toLowerCase()}
					onMouseEnter={animStr}
					onClick={onClick}>
					    {item.toUpperCase()}
			</Link>
		</li>
	)
}