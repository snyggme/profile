import React from 'react'
import { Transition } from 'react-transition-group'

const duration = 800;

const defaultStyle= {
	transition: `opacity ${duration}ms ease-in-out`
}
  
const transitionStyles = {
	entering: { opacity: 0 },
	entered:  { opacity: 1 }
};

export const ProjectsItem = (props) => {
	const {  
		src, 
		name, 
		description, 
		technologies, 
		project, 
		github, 
		className } = props
		
	return(
		<li>
			<div className={`project-container ${className}`}>
				<div className='project-imgs'><img src={src} alt=''/></div>
				<Transition in={true} timeout={duration} appear>
					{ state => (
						<div className='project-definition' 
							style={{
								...defaultStyle,
								...transitionStyles[state]
							}}
						>
							<h2 className='project-name'>
								{name}
							</h2>
							<div className='project-description'>
								{description}
							</div>
							<div className='project-technologies'>{
								technologies.map(item => 
									<span key={item.toString()}>{item}</span>
								)}
							</div>
							<div className='project-external-links'>
								<div>
									<a href={project} target='_blank' rel="noopener noreferrer">View Project</a>
								</div>
								<div>
									<a href={github} target='_blank' rel="noopener noreferrer">View Code</a>
								</div>
							</div>
						</div>
					)}
				</Transition>
			</div>
		</li>
	)
}