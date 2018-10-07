import React from 'react'

const Footer = () => {
	return (
		<footer>
			<div className='footer-links-grid'>
				<a href="https://github.com/snyggme" target='_blank'rel="noopener noreferrer" className='link-gth'>
					<i className="fa fa-github"></i>
				</a>
				<a href="https://codepen.io/snygg" target='_blank' rel="noopener noreferrer" className='link-cdp'>
					<i className="fa fa-codepen"></i>
				</a>
				<a href="https://www.freecodecamp.org/snyggme" rel="noopener noreferrer" target='_blank' className='link-fcc'>
					<i className="fa fa-free-code-camp"></i>
				</a>
			</div>		
		</footer>
	)
}

export default Footer