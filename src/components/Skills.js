import React, { Component } from 'react'

const Item = ({ logo }) => {
	return (
		<div className='skills-grid-block'>
			<div>
				<img src={logo.src} />
				<div style={{textAlign: 'center', marginTop: '5px'}}>{logo.name}</div>
			</div>
		</div>
	)
}

class Skills extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	render() {
		return (
			<div>
				<div className='skills-grid'>
					{skillsLogos.map((item, index) => 
						<Item logo={item} key={index}/>
					)}
				</div>
				<p>
					Skills story
				</p>
			</div>
		)	
	}
}

const skillsLogos = [
	{
		src: 'https://cdn.iconscout.com/public/images/icon/free/png-512/html5-logo-341eda6a9876c66d-512x512.png',
		name: 'HTML5'
	},
	{
		src: 'https://www.shareicon.net/data/512x512/2015/09/08/97876_css_512x512.png',
		name: 'CSS3'
	},
	{
		src: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/205/thumb/javascriptlang.png',
		name: 'JavaScript'
	},
	{
		src: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/026/thumb/react.png',
		name: 'React'
	},
	{
		src: 'http://icons.iconarchive.com/icons/sicons/basic-round-social/512/jquery-icon.png',
		name: 'jQuery'
	},
	{
		src: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/thumb/nodejslogo.png',
		name: 'NodeJS'
	},
	{
		src: 'http://mareconversionpro.fr/wp-content/uploads/2017/05/bootstrap-logo-300x300.jpg',
		name: 'Bootstrap'
	},
	{
		src: 'https://cdn.worldvectorlogo.com/logos/sass-1.svg',
		name: 'SCSS'
	},
	{
		src: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
		name: 'Git'
	}
]

export default Skills

