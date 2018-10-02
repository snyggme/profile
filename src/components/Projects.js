import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

class Projects extends Component {
	constructor(props) {
        super(props)
        this.state = {
        	carouselMargin: 0,
        	carouselWidth: 87
        }
        this.handleLeftButton = this.handleLeftButton.bind(this)
        this.handleRightButton = this.handleRightButton.bind(this)
    }
    handleLeftButton(e) {
    	this.setState(prevState => ({
    		carouselMargin: prevState.carouselMargin === 0 
    			? -prevState.carouselWidth * (projects.length - 1) 
    			: prevState.carouselMargin + prevState.carouselWidth
    	}))
    }
    handleRightButton(e) {
		this.setState(prevState => ({
    		carouselMargin: prevState.carouselMargin === -prevState.carouselWidth * (projects.length - 1)
    			? 0 
    			: prevState.carouselMargin - prevState.carouselWidth
    	}))
    }
    render() {
		const { show } = this.props

		return (
			<CSSTransitionGroup
		        transitionName="example"
		        transitionAppear={true}
		        transitionAppearTimeout={1000}>
		        <div id='carousel'>
		        	<div 	className='arrow arrow-left'
		        			onClick={this.handleLeftButton}>
		        			<i className="fa fa-angle-left" aria-hidden="true"></i>
		        	</div>
		        	<div 	className='arrow arrow-right'
		        			onClick={this.handleRightButton}>
		        			<i className="fa fa-angle-right" aria-hidden="true"></i>
		        	</div>
			        <ul className='carousel-elements-container' style={{marginLeft: `${this.state.carouselMargin}vw`}}>
					{
						projects.map(item => 
							<li>
								<div className='project-container'>
									<div className='project-imgs'><img src={item.src} /></div>
									{ show && 
										<CSSTransitionGroup
									        transitionName="example"
									        transitionAppear={true}
									        transitionAppearTimeout={1000}>
											<div className='project-definition' style={{color: 'black'}}>
												<h2 className='project-name'>{item.name}</h2>
												<div className='project-description'>{item.description}</div>
												<div className='project-technologies'>{
													item.technologies.map(item => 
														<span>{item}</span>
													)}
												</div>
												<div className='project-external-links'>
													<a href={item.code}>View Project</a>
													<a href={item.code}>View Code</a>
												</div>
											</div>
										</CSSTransitionGroup>
									}
								</div>
							</li>)
					}
					</ul>
				</div>
			</CSSTransitionGroup>
		)
	}
}

export default Projects

const projects = [ 
	{
		src: './images/twitchtv.png',
		description: 'App displays the status of a set of Twitch Streamers. You can delete or add your favourite one.',
		technologies: ['JS', 'ReactJS', 'SASS', 'Twitch API'],
		name: 'TwitchTV',
		code: ''
	},
	{
		src: './images/tictactoe.png',
		description: 'Play the classic game of X\'s and O\'s vs. the computer.',
		technologies: ['JS', 'ReactJS','SASS'],
		name: 'Tic-Tac-Toe',
		code: ''
	},
	{
		src: './images/pomodoro.png',
		description: 'It\'s an easy to use, flexible Pomodoro Technique timer. Clean interface, ability to pause or reset the timer intervals, audio notifications at the end of a timer period.',
		technologies: ['JS', 'ReactJS', 'SASS'],
		name: 'Pomodoro Clock',
		code: ''
	}
]