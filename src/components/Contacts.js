import React from 'react'
import { CSSTransition } from 'react-transition-group'

const Contacts = ({ show }) => {
	return (
		<div style={{height: '100%'}}>
			{ show &&
				<CSSTransition
			        transitionName="example"
			        transitionAppear={true}
			        transitionEnter={false}
		        	transitionLeave={false}
		        	transitionAppearTimeout={800}
		        	transitionEnterTimeout={0}
		        	transitionLeaveTimeout={0}>
			        <div className='contacts-container'>
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

				</CSSTransition>
			}
		</div>
	)
}

export default Contacts