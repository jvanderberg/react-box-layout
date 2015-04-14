"use strict";
import React from 'react';
import Box from '../../../';
//import Box from 'react-box-layout'

class Demo2class extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {sidePanelWidth : this.props.sidePanelWidth};
		this.originalSidePanelWidth = this.props.sidePanelWidth;
	}
	handleToggle(event) {
		this.setState({sidePanelWidth:(this.state.sidePanelWidth>0?0:this.originalSidePanelWidth)});
	}

	render() {
		return	(
			<Box.VBox style={{width:window.innerWidth, height:window.innerHeight}}>
				<Box.HBox style={{height:100, backgroundColor: '#AAAAFF'}}>
					<Box.VBox style={{height:100}}>
						<div style={{width:10}}></div>
						<div style={{height:20}}>
							<input type='button' value="Toggle Sidepanel" onClick={event=>this.handleToggle(event)} ></input>
						</div>
						<div style={{width:10}}></div>
					</Box.VBox>
					<Box.VBox style={{height:100,width:400}}>
						<div style={{width:300}}></div>
						<div style={{width:400,height:45,fontSize:40,fontWeight:'bold'}} >A Centered Header</div>
						<div style={{width:300}}></div>
					</Box.VBox>
					<div style={{height:100}}></div>
				</Box.HBox>
				<Box.HBox>
					<Box.VBox ref='sidePanel' style={{width:this.state.sidePanelWidth,backgroundColor:'#7676A6',display:(this.state.sidePanelWidth===0)?"none":""}}>
						<Box.VBox>
							<div></div>
							<Box.HBox>
								<div></div>
								<div style={{fontSize:40,height:45, width:100,fontWeight:'bold'}}>
									Side Panel
								</div>
								<div></div>
							</Box.HBox>
							<div></div>
						</Box.VBox>
					</Box.VBox>
					<Box.VBox>
						<div></div>
						<Box.HBox>
							<div></div>
							<div style={{fontSize:40,height:45, width:100,fontWeight:'bold'}}>
								Body
							</div>
							<div></div>
						</Box.HBox>
						<div></div>
					</Box.VBox>
				</Box.HBox>
			</Box.VBox>);
  	}

}

function render(dummy) {
	React.render(
		<Demo2class sidePanelWidth='300'/>, 
		document.getElementById('content')
	);
}

document.addEventListener('DOMContentLoaded', function () {
	render();
	window.addEventListener('resize', render);
});



