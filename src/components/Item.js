import React from 'react'

export const Item = ({ logo }) => {
	return (
		<div className='skills-grid-block'>
			<i className={logo.class}></i>
			<div style={{textAlign: 'center', marginTop: '5px'}}>{logo.name}</div>
		</div>
	)
}