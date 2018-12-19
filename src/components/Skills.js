import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import { SkillsItem } from './SkillsItem'

const Skills = (props) => {
	const { show, screenWidth } = props

	return (
		<div style={{height: '100%'}}>
			<CSSTransitionGroup
	            transitionName="example"
	            transitionAppear={true}
	            transitionEnter={false}
			    transitionLeave={false}
			    transitionAppearTimeout={1000}
			    transitionEnterTimeout={0}
			    transitionLeaveTimeout={0}>
				<div className='skills-story'>
					<div>
						My name is Roman or just snygg. I am fan of programming and especially of frontend development. Strive to learn new technologies and competitive skills. Interested in backend development. Also i like computer hardware and to build impressive stuff with microcontrollers.
					</div>
				</div>
			</CSSTransitionGroup>		
			{ show &&
				<CSSTransitionGroup
	                transitionName="example"
	                transitionAppear={true}
	                transitionEnter={false}
			        transitionLeave={false}
			        transitionAppearTimeout={1000}
			        transitionEnterTimeout={0}
			        transitionLeaveTimeout={0}
			        style={{display: 'block', position: 'relative', height: '100%'}}>
					<div className='skills-grid'>
						{skillsLogos.map((item, index) => 
							<SkillsItem screenWidth={screenWidth} logo={item} key={index}/>
						)}
					</div>
				</CSSTransitionGroup>
			}
		</div>
	)	
}

const skillsLogos = [
	{
		class: 'icon-html5-alt',
		name: 'HTML5'
	},
	{
		class: 'icon-css3-alt',
		name: 'CSS3'
	},
	{
		class: 'icon-javascript-alt',
		name: 'JavaScript'
	},
	{
		class: 'icon-reactjs',
		name: 'React'
	},
	{
		class: 'icon-jquery',
		name: 'jQuery'
	},
	{
		class: 'icon-nodejs',
		name: 'NodeJS'
	},
	{
		class: 'icon-bootstrap',
		name: 'Bootstrap'
	},
	{
		class: 'icon-sass',
		name: 'SCSS'
	},
	{
		class: 'icon-git',
		name: 'Git'
	}
]

export default Skills