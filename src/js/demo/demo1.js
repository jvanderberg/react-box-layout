"use strict";
import React from 'react';
import Box from '../../../';

function render(dummy) {
	React.render(
		<Box.HBox style={{width:window.innerWidth, height:window.innerHeight}}>
			<Box.VBox >
				<div className="demo"></div>
				<div className="demo"></div>
				<div className="demo"></div>
			</Box.VBox>
			<Box.VBox style={{flex:4}}>
				<div className="demo"></div>
				<Box.HBox style={{flex:4}}>
					<Box.VBox >
						<div className="demo"></div>
						<div className="demo"></div>
						<div className="demo"></div>
					</Box.VBox>
					<Box.VBox style={{flex:4}}>
						<div className="demo"></div>
						<Box.HBox style={{flex:4}}>
							<Box.VBox >
								<div className="demo"></div>
								<div className="demo"></div>
								<div className="demo"></div>
							</Box.VBox>
							<Box.VBox style={{flex:4}}>
								<div className="demo"></div>
								<Box.HBox style={{flex:4}}>
									<Box.VBox >
										<div className="demo"></div>
										<div className="demo"></div>
										<div className="demo"></div>
									</Box.VBox>
									<Box.VBox style={{flex:4}}>
										<div className="demo"></div>
										<Box.HBox style={{flex:4}}>
											<Box.VBox >
												<div className="demo"></div>
												<div className="demo"></div>
												<div className="demo"></div>
											</Box.VBox>
											<Box.VBox style={{flex:4}}>
												<div className="demo"></div>


												<Box.HBox style={{flex:4}}>
													<Box.VBox >
														<div className="demo"></div>
														<div className="demo"></div>
														<div className="demo"></div>
													</Box.VBox>
													<Box.VBox style={{flex:4}}>
														<div className="demo"></div>
														<Box.HBox style={{flex:4}}>
															<Box.VBox >
																<div className="demo"></div>
																<div className="demo"></div>
																<div className="demo"></div>
															</Box.VBox>
															<Box.VBox style={{flex:4}}>
																<div className="demo"></div>
																<div className="demo" style={{flex:4}}></div>
																<div className="demo"></div>
															</Box.VBox>
															<Box.VBox>
																<div className="demo"></div>
																<div className="demo"></div>
																<div className="demo"></div>
															</Box.VBox>
														</Box.HBox>
														<div className="demo"></div>
													</Box.VBox>
													<Box.VBox>
														<div className="demo"></div>
														<div className="demo"></div>
														<div className="demo"></div>
													</Box.VBox>
												</Box.HBox>


												<div className="demo"></div>
											</Box.VBox>
											<Box.VBox>
												<div className="demo"></div>
												<div className="demo"></div>
												<div className="demo"></div>
											</Box.VBox>
										</Box.HBox>
										<div className="demo"></div>
									</Box.VBox>
									<Box.VBox>
										<div className="demo"></div>
										<div className="demo"></div>
										<div className="demo"></div>
									</Box.VBox>
								</Box.HBox>
								<div className="demo"></div>
							</Box.VBox>
							<Box.VBox>
								<div className="demo"></div>
								<div className="demo"></div>
								<div className="demo"></div>
							</Box.VBox>
						</Box.HBox>
						<div className="demo"></div>
					</Box.VBox>
					<Box.VBox>
						<div className="demo"></div>
						<div className="demo"></div>
						<div className="demo"></div>
					</Box.VBox>
				</Box.HBox>
				<div className="demo"></div>
			</Box.VBox>
			<Box.VBox>
				<div className="demo"></div>
				<div className="demo"></div>
				<div className="demo"></div>
			</Box.VBox>
		</Box.HBox>, 
		document.getElementById('content')
	);
}

document.addEventListener('DOMContentLoaded', function () {
	render();
	window.addEventListener('resize', render);
});



