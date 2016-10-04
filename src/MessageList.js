import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class MessageList extends React.Component{
	render(){
		// c = user class
		// i = id
		// d = text
		// n = display name
		// t = time
		// u = username
		return (
			<div className="messages">
				<ReactCSSTransitionGroup
					transitionEnterTimeout={1000}
					transitionLeaveTimeout={1000}>
				{this.props.messages.map((item) => {
					return (
						<div className="message-wrapper" key={item.id}
							data-userclass={item.c}
							data-id={item.i}
							data-time={item.t}
							data-username={item.u}
							data-name={item.n}>
							<div className="message">
								<div className="message-inner">
									<div className="time">{item.t}</div>
									<div className="user">{item.n}</div>
									<div className="text">{item.d}</div>
								</div>
							</div>
						</div>
					);
				})}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}
