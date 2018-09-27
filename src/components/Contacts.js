import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

const Contacts = () => {
	return (
		<CSSTransitionGroup
	        transitionName="example"
	        transitionAppear={true}
	        transitionAppearTimeout={1000}
	        transitionEnterTimeout={1000}
	        transitionLeaveTimeout={1000}>
	        <div className='contacts-container'>
	        	<h3 className="contacts-header">Have any questions?</h3>
	        	<form action='' method='GET' className='contacts-form'>
	        		<input required type="text" className="contacts-form-control" id="first-name" placeholder="First Name" />
	        		<input required type="text" className="contacts-form-control" id="last-name" placeholder="Last Name" />
	        		<input type="text" className="contacts-form-control" id="subject" placeholder="Subject" />
	        		<input required type="email" className="contacts-form-control" id="email" placeholder="Email" />
	        		<textarea className="contacts-form-control" rows="2" id="comment" placeholder="Comment"></textarea>
	        		<button type="submit" className="btn">Submit</button>
	        	</form>
	        </div>
		</CSSTransitionGroup>
	)
}

export default Contacts

// <form action="" method="GET">
//               <div class="row justify-content-between">
//                 <div class="col-6">
//                   <div class="form-group">
//                     <input type="text" class="form-control" id="first-name" placeholder="First Name">
//                   </div>
//                 </div>
//                 <div class="col-6">
//                   <div class="form-group">
//                     <input type="text" class="form-control" id="last-name" placeholder="Last Name">
//                   </div>
//                 </div>
//               </div>
//               <div class="form-group">
// 					    	<input type="email" class="form-control" id="email" placeholder="Email">
// 					  	</div>
// 					  	<div class="form-group">
// 						  	<textarea class="form-control" rows="7" id="comment" placeholder="Comment"></textarea>
// 						</div>
// 					 	<button type="submit" class="btn btn-danger btn-lg btn-block">Submit</button>
// 					</form>