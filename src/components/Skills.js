import React from 'react'
import { Transition } from 'react-transition-group'
import { SkillsItem } from './SkillsItem'
import { skillsLogos } from '../helpers/network'

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
							My name is <b>Roman</b> or just snygg. I am passionate about programming and especially <b>frontend development</b>. Strive to learn new technologies and competitive skills. Interested in <b>backend development</b>. Also I like computer hardware and to build impressive stuff with microcontrollers.
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

export default Skills