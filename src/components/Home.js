import React from 'react'
import { animStr } from '../helpers/stringanim.js'
import { CSSTransitionGroup } from 'react-transition-group'

const Home = () => {
	return (
		<CSSTransitionGroup
                    transitionName="example"
                    transitionAppear={true}
                    transitionAppearTimeout={1000}>
			<div className='home'>
				<h1>
					<span 	className='home-greetings' 
							onMouseEnter={animStr}>hello("world");
					</span>
				</h1>
				<h2>my name is <i>
					<span 	className='home-name' 
							onMouseEnter={animStr}>snygg
					</span></i>
				</h2>
				<h3>beginner frontend developer</h3>
			</div>
		</CSSTransitionGroup>
	)
}

export default Home