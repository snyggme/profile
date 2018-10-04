import React from 'react'

export const SkillsItem = ({ logo }) => {
	return (
		<div className='skills-grid-block'>
			<i className={logo.class}></i>
			<div style={{textAlign: 'center', marginTop: '5px'}}>{logo.name}</div>
		</div>
	)
}