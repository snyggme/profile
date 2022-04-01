import React from 'react'
import { animStr } from '../helpers/stringanim.js'
import { Transition } from 'react-transition-group'
   
const duration = 500;
const defaultStyle = {
	transition: `opacity ${duration}ms ease-in-out`
  }
  
const transitionStyles = {
	entering: { opacity: 0 },
	entered:  { opacity: 1 }
};

const Home = () => {
	return (
		<Transition in={true} timeout={duration} appear>
			{ state => (
				<div className='home'
					style={{
						... defaultStyle,
						...transitionStyles[state]
					}}
				>
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
			)}
		</Transition>
	)
}

export default Home