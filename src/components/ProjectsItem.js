import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

export const ProjectsItem = (props) => {
	const { show, src, name, description, technologies, codepen, github } = props

	return(
		<li>
			<div className='project-container'>
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
									<a href={codepen} target='_blank'>View Project</a>
								</div>
								<div>
									<a href={github}>View Code</a>
								</div>
							</div>
						</div>
					</CSSTransitionGroup>
				}
			</div>
		</li>
	)
}