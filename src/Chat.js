import React from 'react';
import qs from 'qs';
import socket from './socket';
import MessageList from './MessageList';

export default class Chat extends React.Component{
	state = {
		ready: false,
		error: 'Loading...',
		messages: [],
	}

	qs = null;
	limit = 30;

	componentDidMount(){
		this.qs = qs.parse(this.props.qs);
		console.log(this.qs);
		if(this.qs.id === undefined){
			return this.setState({error: 'Specify ?id='});
		}
		if(this.qs.limit && this.qs.limit === 'inf'){
			this.limit = Infinity;
		}else if(this.qs.limit && this.qs.limit.match(/^[0-9]+$/)){
			this.limit = parseInt(this.qs.limit, 10);
		}

		if(this.qs.theme){
			this.loadTheme(this.qs.theme);
		}
		this.socket = socket(this.qs.id);
		this.socket.on('connected', () => {
			this.setState({ready: true});
			if(this.qs.simulate){
				let id = -1;
				setInterval(() => this.addMessage({
					c: 2,
					i: id--,
					d: 'This is a demo message',
					n: 'Demo',
					t: '00:00',
					u: 'demo',
				}), 2000);
			}
		});
		this.socket.on('msg', (message) => this.addMessage(message));
	}

	render(){
		if(!this.state.ready){
			return (
				<div style={{textShadow: 'white 0px 0px 20px'}}>{this.state.error}</div>
			);
		}

		return (
			<MessageList messages={this.state.messages} />
		);
	}

	addMessage(message){
		let list = this.state.messages.slice(0, this.limit - 1);
		list.unshift(message);

		this.setState({messages: list});
	}

	loadTheme(theme){
		require([`../theme/${theme}.css`], () => {});
	}
}
