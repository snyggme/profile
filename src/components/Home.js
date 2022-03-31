import React from 'react'
import { animStr } from '../helpers/stringanim.js'
import { Transition } from 'react-transition-group'
   

const defaultStyle = {
	transition: `opacity ${300}ms ease-in-out`,
	opacity: 0,
  }
  
  const transitionStyles = {
	entering: { opacity: 1 },
	entered:  { opacity: 1 },
	exiting:  { opacity: 1 },
	exited:  { opacity: 1 },
  };

const Home = () => {
	return (
		<Transition timeout={{
			appear: 500
		   }}>
			{ state => (
				<div className='home'
					style={{
						...defaultStyle,
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
			)
			}
		</Transition>
	)
}

export default Home