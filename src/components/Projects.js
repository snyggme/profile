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
    		carouselMargin: prevState.carouselMargin + prevState.carouselWidth 
    	}))
    }
    handleRightButton(e) {
		this.setState(prevState => ({
    		carouselMargin: prevState.carouselMargin === -348 ? prevState.carouselMargin - prevState.carouselWidth : 0 
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
			        <ul className='projects-carousel' style={{marginLeft: `${this.state.carouselMargin}vw`}}>
					{
						projects.map(item => 
							<li>
								<div className='projects-container'>
									<div className='projects-imgs'><img src={item.src} /></div>
									{ show && 
										<CSSTransitionGroup
									        transitionName="example"
									        transitionAppear={true}
									        transitionAppearTimeout={1000}>
											<div style={{color: 'black'}}>
												<h2>{item.name}</h2>
												<div>{item.description}</div>
												<div>{item.technologies[0]}</div>
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
		description: 'watch your favorite twitch streams',
		technologies: ['react'],
		name: 'TwitchTV'
	},
	{
		src: './images/tictactoe.png',
		description: 'tic tac toe game with one player',
		technologies: ['react'],
		name: 'Tic-Tac-Toe'
	},
	{
		src: './images/pomodoro.png',
		description: 'app helps you to manage your work time',
		technologies: ['react'],
		name: 'Pomodoro Clock'
	}
]