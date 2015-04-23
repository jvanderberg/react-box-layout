"use strict";
import React from 'react';
import Box from '../../../';

var HBox = Box.HBox;
var VBox = Box.VBox;
function render(dummy) {
	React.render(
		<HBox style={{width:window.innerWidth, height:window.innerHeight}}>
			<VBox >
				<div className="demo"></div>
				<div className="demo"></div>
				<div className="demo"></div>
			</VBox>
			<VBox style={{flex:4}}>
				<div className="demo"></div>
				<HBox style={{flex:4}}>
					<VBox >
						<div className="demo"></div>
						<div className="demo"></div>
						<div className="demo"></div>
					</VBox>
					<VBox style={{flex:4}}>
						<div className="demo"></div>
						<HBox style={{flex:4}}>
							<VBox >
								<div className="demo"></div>
								<div className="demo"></div>
								<div className="demo"></div>
							</VBox>
							<VBox style={{flex:4}}>
								<div className="demo"></div>
								<HBox style={{flex:4}}>
									<VBox >
										<div className="demo"></div>
										<div className="demo"></div>
										<div className="demo"></div>
									</VBox>
									<VBox style={{flex:4}}>
										<div className="demo"></div>
										<HBox style={{flex:4}}>
											<VBox >
												<div className="demo"></div>
												<div className="demo"></div>
												<div className="demo"></div>
											</VBox>
											<VBox style={{flex:4}}>
												<div className="demo"></div>


												<HBox style={{flex:4}}>
													<VBox >
														<div className="demo"></div>
														<div className="demo"></div>
														<div className="demo"></div>
													</VBox>
													<VBox style={{flex:4}}>
														<div className="demo"></div>
														<HBox style={{flex:4}}>
															<VBox >
																<div className="demo"></div>
																<div className="demo"></div>
																<div className="demo"></div>
															</VBox>
															<VBox style={{flex:4}}>
																<div className="demo"></div>
																<div className="demo" style={{flex:4}}></div>
																<div className="demo"></div>
															</VBox>
															<VBox>
																<div className="demo"></div>
																<div className="demo"></div>
																<div className="demo"></div>
															</VBox>
														</HBox>
														<div className="demo"></div>
													</VBox>
													<VBox>
														<div className="demo"></div>
														<div className="demo"></div>
														<div className="demo"></div>
													</VBox>
												</HBox>


												<div className="demo"></div>
											</VBox>
											<VBox>
												<div className="demo"></div>
												<div className="demo"></div>
												<div className="demo"></div>
											</VBox>
										</HBox>
										<div className="demo"></div>
									</VBox>
									<VBox>
										<div className="demo"></div>
										<div className="demo"></div>
										<div className="demo"></div>
									</VBox>
								</HBox>
								<div className="demo"></div>
							</VBox>
							<VBox>
								<div className="demo"></div>
								<div className="demo"></div>
								<div className="demo"></div>
							</VBox>
						</HBox>
						<div className="demo"></div>
					</VBox>
					<VBox>
						<div className="demo"></div>
						<div className="demo"></div>
						<div className="demo"></div>
					</VBox>
				</HBox>
				<div className="demo"></div>
			</VBox>
			<VBox>
				<div className="demo"></div>
				<div className="demo"></div>
				<div className="demo"></div>
			</VBox>
		</HBox>, 
		document.getElementById('content')
	);
}

document.addEventListener('DOMContentLoaded', function () {
	render();
	window.addEventListener('resize', render);
});



