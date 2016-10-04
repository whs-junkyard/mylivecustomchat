import React from 'react';

export default class MessageList extends React.Component{
	shouldComponentUpdate(nextProps){
		return nextProps.messages.length !== this.props.messages.length;
	}

	render(){
		// c = user class
		// i = id
		// d = text
		// n = display name
		// t = time
		// u = username
		return (
			<div className="messages">
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
			</div>
		);
	}
}
