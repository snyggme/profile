import React, { Component } from 'react'
import { Transition } from 'react-transition-group'
import { ProjectsItem } from './ProjectsItem'
import { httpGet } from '../helpers/network'

class Projects extends Component {
	constructor(props) {
        super(props)
        this.state = {
			projects: [],
        	carouselMargin: 0,
        	carouselWidth: 87,
        	isLoading: false
        }
    }
	
    componentDidMount() {
    	this.loadData()
    }	      			

    loadData() {
    	this.setState({ isLoading: true })

    	httpGet('projects')
	    	.then(projects => 
	    		this.setState({ 
	      			projects, 
	      			isLoading: false 
	      		})
	      	)
	      	.catch(e => 
	      		this.setState({ 
	      			isLoading: false
	      		})
	      	)
    }

    handleLeftButton = (e) => {
    	this.setState(prevState => ({
    		carouselMargin: 
    			prevState.carouselMargin === 0 
    				? -prevState.carouselWidth * (prevState.projects.length - 1) 
    				: prevState.carouselMargin + prevState.carouselWidth
    	}))
    }

    handleRightButton = (e) => {
		this.setState(prevState => ({
    		carouselMargin: 
    			prevState.carouselMargin === -prevState.carouselWidth * (prevState.projects.length - 1)
    				? 0 
    				: prevState.carouselMargin - prevState.carouselWidth
    	}))
    }

    render() {
		const { show } = this.props
		const { projects, isLoading } = this.state
		

		return (
			<Transition
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
						{ isLoading 
								? <div className='loading'></div>
								: projects.map(item => 
									<ProjectsItem {...item} show={show} key={item.name.toString()}/>)
								
						}
					</ul>
				</div>
			</Transition>
		)
	}
}

export default Projects

// projects.map(item => 
// 							<ProjectsItem {...item} show={show} key={item.name.toString()}/>)