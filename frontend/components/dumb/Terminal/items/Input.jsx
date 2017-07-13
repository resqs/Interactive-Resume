import React from 'react'
import autosize from 'autosize'
import TerminalItem from './Item'

/**
* Terminal Input Component
*/
class TerminalInput extends React.PureComponent {
	constructor(props){
		super(props)
		this.handleBlur = this.handleBlur.bind(this)
		this.handleEntered = this.handleEntered.bind(this)
		this.handleSelection = this.handleSelection.bind(this)
		this.handleCommandMovement = this.handleCommandMovement.bind(this)
	}

	componentDidMount() {
		autosize(document.getElementById('main-textarea'))
	}


	handleSelection(event){
		document.getElementById('caret').style.transform = `translate(${100 * (event.target.selectionStart+1)}%, 0)`
	}

	handleEntered(event){
		if(event.keyCode === 13){
			event.preventDefault()
			this.props.onRequestEnter(event.target.value)
			event.target.value = ''
			event.target.selectionStart = 0
		}
		this.handleSelection(event)
	}


	handleCommandMovement(event){
		if(event.keyCode === 38){
			//
		}

		if(event.keyCode === 40){
			//
		}
		this.handleSelection(event)
	}


	handleBlur(){
		document.getElementById('caret').classList.add('focus-out')
	}

	render(){

		return (
			<TerminalItem withInput={true}>
					$<textarea
					spellCheck='false'
					id='main-textarea'
					rows='1'
					onChange={this.handleSelection}
					onKeyUp={this.handleCommandMovement}
					onKeyDown={this.handleEntered}
					onClick={this.handleSelection}
					onBlur={this.handleBlur}>
				</textarea>

				<span id='caret' className='caret focus-out'>A</span>
			</TerminalItem>
		)
	}
}

export { TerminalInput }