import React from 'react'

export const SkillsItem = ({ logo, screenWidth }) => {
	return (
		<div className={`skills-grid-block skills-grid-block-${logo.name}`}>
			<i className={logo.class}></i>
			{ screenWidth > 663 &&
				<div className='skills-grid-block-lang'>{logo.name}</div>
			}
		</div>
	)
}