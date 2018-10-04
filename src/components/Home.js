import React from 'react'
import { animStr } from '../helpers/stringanim.js'
import { CSSTransitionGroup } from 'react-transition-group'

const Home = () => {
	return (
		<CSSTransitionGroup
                    transitionName="example"
                    transitionAppear={true}
                    transitionEnter={false}
			        transitionLeave={false}
			        transitionAppearTimeout={1000}
			        transitionEnterTimeout={0}
			        transitionLeaveTimeout={0}>
			<div className='home'>
				<h1>
					<span 	className='home-greetings' 
							onMouseEnter={animStr}>hello("world");
					</span>
				</h1>
				<h2>my name is <i>
					<span 	className='home-name' 
							onMouseEnter={animStr}>snygg
					</span>
					</i>
				</h2>
				<h2>aspiring frontend developer</h2>
			</div>
		</CSSTransitionGroup>
	)
}

export default Home