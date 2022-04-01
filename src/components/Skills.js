import React from 'react'
import { Transition, CSSTransition } from 'react-transition-group'
import { SkillsItem } from './SkillsItem'

const durationStory = 400;
const durationSkills = 800;

const defaultStyleStory = {
	transition: `opacity ${durationStory}ms ease-in-out`
}
const defaultStyleSkills = {
	transition: `opacity ${durationSkills}ms ease-in-out`
}
  
const transitionStyles = {
	entering: { opacity: 0 },
	entered:  { opacity: 1 }
};

const Skills = (props) => {
	const { screenWidth } = props

	return (
		<div style={{height: '100%'}}>
			<Transition in={true} timeout={durationStory} appear > 
				{ state => (
					<div className='skills-story'
						style={{
							...defaultStyleStory,
							...transitionStyles[state]
						}}
					>
						<div>
							My name is Roman or just snygg. I am fan of programming and especially of frontend development. Strive to learn new technologies and competitive skills. Interested in backend development. Also i like computer hardware and to build impressive stuff with microcontrollers.
						</div>
					</div>
				)}
			</Transition>		
			<Transition in={true} timeout={durationSkills} appear >
					{ state => (
						<div style={{
							display: 'block', position: 'relative', height: '100%', 
							...defaultStyleSkills,
							...transitionStyles[state]}}>
							<div className='skills-grid'>
								{skillsLogos.map((item, index) => 
									<SkillsItem screenWidth={screenWidth} logo={item} key={index}/>
								)}
							</div>
						</div>
					)}
			</Transition>
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