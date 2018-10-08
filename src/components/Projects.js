import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import { ProjectsItem } from './ProjectsItem'

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
		        transitionEnter={false}
		        transitionLeave={false}
		        transitionAppearTimeout={1000}
		        transitionEnterTimeout={0}
		        transitionLeaveTimeout={0}>
		        <div id='carousel'>
		        	<div 	className='arrow arrow-left'
		        			onClick={this.handleLeftButton}>
		        			<i className="fa fa-angle-left" aria-hidden="true"></i>
		        	</div>
		        	<div 	className='arrow arrow-right'
		        			onClick={this.handleRightButton}>
		        			<i className="fa fa-angle-right" aria-hidden="true"></i>
		        	</div>
			        <ul className='carousel-elements-container' 
			        	style={{marginLeft: `${this.state.carouselMargin}vw`}}>
					{
						projects.map(item => 
							<ProjectsItem {...item} show={show} key={item.name.toString()}/>)
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
		src: './images/twitchtv.PNG',
		description: 'App displays the status of a set of Twitch Streamers. You can delete or add your favourite one. Responsive design.',
		technologies: ['JS', 'ReactJS', 'SASS', 'Twitch API'],
		name: 'TwitchTV',
		project: 'https://snyggme.github.io/twitch-tv/',
		github: 'https://github.com/snyggme/twitch-tv'
	},
	{
		src: './images/tictactoe.PNG',
		description: 'Play the classic game of X\'s and O\'s vs. the computer.',
		technologies: ['JS', 'ReactJS','SASS'],
		name: 'Tic-Tac-Toe',
		project: 'https://snyggme.github.io/tic-tac-toe/',
		github: 'https://github.com/snyggme/tic-tac-toe'
	},
	{
		src: './images/pomodoro.PNG',
		description: 'It\'s an easy to use, flexible Pomodoro Technique timer. Clean interface, ability to pause or reset the timer intervals, audio notifications at the end of a timer period.',
		technologies: ['JS', 'ReactJS', 'SASS'],
		name: 'Pomodoro Clock',
		project: 'https://snyggme.github.io/pomodoro-clock/',
		github: 'https://github.com/snyggme/pomodoro-clock'
	},
	{
		src: './images/drummachine.PNG',
		description: 'Explore drumming with two unique sound banks. Power controls, adjusting volume.',
		technologies: ['JS', 'ReactJS', 'SASS', 'HTML5'],
		name: 'Drum Machine',
		project: 'https://snyggme.github.io/drum-machine/',
		github: 'https://github.com/snyggme/drum-machine'
	},
	{
		src: './images/localweather.PNG',
		description: 'Simple web app that displays the local weather forecast using HTML5 Geolocation to get user location and to look for the weather depending on the city.',
		technologies: ['jQuery', 'HTML5', 'CSS', 'Weather API'],
		name: 'Local Weather App',
		project: 'https://snyggme.github.io/local-weather/',
		github: 'https://github.com/snyggme/local-weather'
	},
	{
		src: './images/markdown.PNG',
		description: 'Converts and live previews plain text to HTML using markedjs compiler and parser.',
		technologies: ['JS', 'ReactJS', 'markedjs', 'SASS'],
		name: 'Markdown Previewer',
		project: 'https://snyggme.github.io/markdown-previewer/',
		github: 'https://github.com/snyggme/markdown-previewer'
	},
	{
		src: './images/wikipedia.PNG',
		description: 'Simple interface to the Wikipedia API that allows to search articles and display 10 possible article snippets for the user to select one.',
		technologies: ['jQuery', 'HTML5', 'CSS', 'MediaWiki API'],
		name: 'Wikipedia Viewer',
		project: 'https://snyggme.github.io/wikipedia-viewer/',
		github: 'https://github.com/snyggme/wikipedia-viewer'
	},
	{
		src: './images/randomquote.PNG',
		description: 'Makes an AJAX call to a random quote generator API and displays the response on the page. You can tweet it and share with others.',
		technologies: ['jQuery', 'HTML5', 'CSS', 'Quote API'],
		name: 'Random Quote Machine',
		project: 'https://snyggme.github.io/random-quote-machine/',
		github: 'https://github.com/snyggme/random-quote-machine'
	},
	{
		src: './images/this.PNG',
		description: 'This site itself. Uses react-router components to navigate through the site. Implements CSS and JS animation',
		technologies: ['JS', 'ReactJS', 'React-Router-v4'],
		name: 'Portfolio Site',
		project: 'https://snyggme.github.io/profile/',
		github: 'https://github.com/snyggme/profile'
	}
]