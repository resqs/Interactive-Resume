import React from 'react'
import {
	Input,
	Intro,
	Bio,
	Skills,
	Education,
	Work,
	Print,
	TerminalError,
	Projects,
	Images
} from './items'

export default class Panel extends React.PureComponent{
	constructor(props){
		super(props)

		this.handleMainClick = this.handleMainClick.bind(this)
		this.handleEntered = this.handleEntered.bind(this)
	}

	componentWillUpdate(nextProps, nextState) {
		if(nextProps.tabID !== this.props.tabID){
			document.getElementsByClassName('content')[0].scrollTop = 0
		}
	}

	handleMainClick(){
		document.getElementById('caret').classList.remove('focus-out')
		document.getElementById('main-textarea').focus()
	}

	handleEntered(command){
		this.props.onRequestCommand(command, this.props.tabID)
	}

	render(){
		const {
			path,
			tabLog,
			onRequestImage
		} = this.props

		const logList = tabLog.map( (data, index) =>
			<Switch key={index} data={data} path={path}
				shouldPrint={tabLog.length - 1 === index}
				onRequestImage={onRequestImage}/>
		)

		return (
			<div className='content' onClick={this.handleMainClick}>
				{logList}

				<Input
					path={path}
					onRequestEnter={this.handleEntered}/>
			</div>
		)
	}
}


/**
* Switch Component
*/
class Switch extends React.Component{
	constructor(props){
		super(props)
	}

	shouldComponentUpdate(nextProps, nextState) {
		if(nextProps.data.command === this.props.data.command){
			return false
		}
		return true
	}

	render(){
		const {
			data,
			path,
			shouldPrint,
			onRequestImage
		} = this.props

		if(data.error){
			return <TerminalError data={data} path={path}/>
		}

		switch (data.command.split(/\s/g)[0]) {
		case 'bio':
			return <Bio data={data} path={path}/>

		case 'skills':
			return <Skills data={data} path={path}/>

		case 'education':
			return (
				<Education
					data={data}
					path={path}
					onRequestImage={onRequestImage}/>
			)

		case 'work':
			return <Work data={data} path={path}/>

		case 'projects':
			return (
				<Projects
					data={data}
					path={path}
					onRequestImage={onRequestImage}/>
			)

		case 'intro':
			return <Intro data={data} path={path}/>

		case 'print':
			return <Print data={data} path={path} shouldPrint={shouldPrint}/>

		case 'images':
			return <Images data={data} path={path}/>

		default:
			return <TerminalError data={data} path={path}/>
		}
	}
}
