import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

export const ProjectsItem = (props) => {
	const { 
		show, 
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
				{ show && 
					<CSSTransitionGroup
						transitionName="example"
						transitionAppear={true}
						transitionEnter={false}
				        transitionLeave={false}
				        transitionAppearTimeout={1000}
				        transitionEnterTimeout={0}
				        transitionLeaveTimeout={0}>
						<div className='project-definition' style={{color: 'black'}}>
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
					</CSSTransitionGroup>
				}
			</div>
		</li>
	)
}