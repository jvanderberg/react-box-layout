"use strict";
import React from 'react';
import Box from '../../../';
import PropertyAnimator from './PropertyAnimator.js';
//import Box from 'react-box-layout'
var HBox = Box.HBox;
var VBox = Box.VBox;

class Demo2class extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {sidePanelWidth : this.props.sidePanelWidth};
		this.originalSidePanelWidth = this.props.sidePanelWidth;
	}
	handleToggle(event) {
		if (this.state.sidePanelWidth===0) {
			this.animator = new PropertyAnimator(this,'sidePanelWidth',0,Number(this.originalSidePanelWidth),400,PropertyAnimator.easeInOutQuad);
		} else {
			this.animator = new PropertyAnimator(this,'sidePanelWidth',Number(this.originalSidePanelWidth),0,400,PropertyAnimator.easeInOutQuad);
		}
	}

	render() {
		return	(
			<VBox style={{width:window.innerWidth, height:window.innerHeight}}>
				<HBox style={{height:100, backgroundColor: '#AAAAFF'}}>
					<VBox style={{height:100}}>
						<div style={{width:10}}></div>
						<div style={{height:20}}>
							<input type='button' value="Toggle Sidepanel" onClick={event=>this.handleToggle(event)} ></input>
						</div>
						<div style={{width:10}}></div>
					</VBox>
					<VBox style={{height:100,width:400}}>
						<div style={{width:300}}></div>
						<div style={{width:400,height:45,fontSize:40,fontWeight:'bold'}} >A Centered Header</div>
						<div style={{width:300}}></div>
					</VBox>
					<div style={{height:100}}></div>
				</HBox>
				<HBox>
					<VBox style={{width:this.state.sidePanelWidth,backgroundColor:'#7676A6',overflow:'hidden',display:(this.state.sidePanelWidth===0)?"none":""}}>
						<VBox>
							<div></div>
							<HBox>
								<div></div>
								<div style={{fontSize:40,height:45, width:100,fontWeight:'bold'}}>
									Side Panel
								</div>
								<div></div>
							</HBox>
							<div></div>
						</VBox>
					</VBox>
					<VBox>
						<div></div>
						<HBox>
							<div></div>
							<div style={{fontSize:40,height:45, width:100,fontWeight:'bold'}}>
								Body
							</div>
							<div></div>
						</HBox>
						<div></div>
					</VBox>
				</HBox>
			</VBox>);
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



