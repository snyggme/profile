import React from 'react'
import { Transition } from 'react-transition-group'

const duration = 600;
const defaultStyle = {
	transition: `opacity ${duration}ms ease-in-out`
  }
  
const transitionStyles = {
	entering: { opacity: 0 },
	entered:  { opacity: 1 }
};

const Contacts = () => {
	return (
		<div style={{height: '100%'}}>
			<Transition in={true} timeout={duration} appear >
				{ state => (
					<div className='contacts-container'
						style={{
							...defaultStyle,
							...transitionStyles[state]
						}}
					>
						<h3 className="contacts-header">Have any questions?</h3>
						<form action='' method='GET' className='contacts-form'>
							<input required type="text" className="contacts-form-control" id="first-name" placeholder="First Name" />
							<input required type="text" className="contacts-form-control" id="last-name" placeholder="Last Name" />
							<input type="text" className="contacts-form-control" id="subject" placeholder="Subject" />
							<input required type="email" className="contacts-form-control" id="email" placeholder="Email" />
							<textarea className="contacts-form-control" id="comment" placeholder="Comment"></textarea>
							<button type="submit" className="btn">Submit</button>
						</form>
					</div>
				)}
			</Transition>
		</div>
	)
}

export default Contacts