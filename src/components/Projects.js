import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import { ProjectsItem } from './ProjectsItem'
import { httpGet } from '../helpers/network'

class Projects extends Component {
	constructor(props) {
        super(props)
        this.state = {
        	projects: [],
        	carouselMargin: 0,
        	carouselWidth: 87,
        	isLoading: false,
        	index: 0,
        	className: 'appear'
        }
        this.handleLeftButton = this.handleLeftButton.bind(this)
        this.handleRightButton = this.handleRightButton.bind(this)
    }
    componentDidMount() {
    	this.loadData()
    }
    loadData() {
    	this.setState({ isLoading: true })

    	httpGet('projects')
	      .then(json => this.setState({ 
	      	projects: json.projects, 
	      	isLoading: false 
	      }))
	      .catch(e => this.setState({ 
	      	isLoading: false
	      }))
    }
    handleLeftButton(e) {
    	// this.setState(prevState => ({
    	// 	carouselMargin: prevState.carouselMargin === 0 
    	// 		? -prevState.carouselWidth * (prevState.projects.length - 1) 
    	// 		: prevState.carouselMargin + prevState.carouselWidth
    	// }))
		this.setState({
			className: 'move-to-left'
		})

    	setTimeout(() => {
    		this.setState(prevState => ({
	    		index: prevState.index === 0 
	    			? prevState.projects.length - 1 
	    			: prevState.index - 1,
	    		className: 'appear'
	    	}))
    	}, 500)
    }
    handleRightButton(e) {
		// this.setState(prevState => ({
  //   		carouselMargin: prevState.carouselMargin === -prevState.carouselWidth * (prevState.projects.length - 1)
  //   			? 0 
  //   			: prevState.carouselMargin - prevState.carouselWidth
  //   	}))
  		this.setState({
			className: 'move-to-right'
		})

    	setTimeout(() => {
    		this.setState(prevState => ({
    		index: prevState.index === prevState.projects.length - 1 
    			? 0 
    			: prevState.index + 1,
    		className: 'appear'
    	}))
    	}, 600)
    }
    render() {
		const { show } = this.props
		const { projects, isLoading, index, className } = this.state

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
					{ !isLoading &&
							<ProjectsItem {...projects[index]} show={show} className={className}/>
					}
					</ul>
				</div>
			</CSSTransitionGroup>
		)
	}
}

export default Projects

// projects.map(item => 
// 							<ProjectsItem {...item} show={show} key={item.name.toString()}/>)