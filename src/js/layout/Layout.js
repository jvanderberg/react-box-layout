'use strict';
import React from 'react/addons';

class Layout extends React.Component{

 	/**
 	 * In fill widths in the direction of flow
 	 * Available space is divvied up equally.
     */
  	calcFlex(direction, metrics, parentMetrics) {
  		var flexSize = 0;
  		var nonFlexSize = 0;
  		var flexDimension = null;
  		var nonFlexDimension = null;
  		if (direction === 'row') {
  			flexSize = parentMetrics.contentWidth;
  			nonFlexSize = parentMetrics.contentHeight;
  			flexDimension = 'width';
  			nonFlexDimension = 'height';
  		} else {
  			flexSize = parentMetrics.contentHeight;
  			nonFlexSize = parentMetrics.contentWidth;
  			flexDimension = 'height';
  			nonFlexDimension = 'width';
  		}
  		var totalFixed = 0;
        var flexCount = 0;
        for (var i = 0; i < metrics.length; i++) {
            let size = metrics[i][flexDimension];
            let flex = metrics[i].flex;
            if (size === null && flex !== null) {
                flexCount+=flex;
            } else {
                totalFixed+=size;
            }
        }
        
        flexSize -=  totalFixed;  //Space not taken by fixed size children

        var flexUnitSize = 0;
        if (flexSize > 0) {
            flexUnitSize = flexSize / flexCount;  //The width of one 'unit' of 'flex'
        }

        let flexIndex = 0;

        for (i = 0; i < metrics.length; i++) {
            let size = metrics[i][flexDimension];
            var otherSize = metrics[i][nonFlexDimension];
            let flex = metrics[i].flex;
            if (size === null && flex !== null) {
                metrics[i][flexDimension] = flex * flexUnitSize;
                flexIndex++;
            } 
            if (otherSize === null) {
            	metrics[i][nonFlexDimension] = nonFlexSize;
            }
        }

  	}

  	getChildMetrics(layoutChildren, direction, parentMetrics) {
  		var contentHeight = parentMetrics.contentHeight;
  		var contentWidth = parentMetrics.contentWidth;
  		var metrics = [];
        var i = 0;

        React.Children.forEach(layoutChildren, function (child) {
        	metrics[i] = {width: null, height: null, flex: null};
        	if (typeof(child)!=='string' && typeof(child)!=='number' ) {

	   			if (typeof(child.props.style) !== 'undefined' && typeof(child.props.style.flex) !== 'undefined') {
	                metrics[i].flex = child.props.style.flex;
	            } 

	   			if (typeof(child.props.style) !== 'undefined' && typeof(child.props.style.width) !== 'undefined') {
	                metrics[i].width = child.props.style.width;
	            } 

	   			if (typeof(child.props.style) !== 'undefined' && typeof(child.props.style.height) !== 'undefined') {
	                metrics[i].height = child.props.style.height;
	            } 
	            if (typeof(child.props.style) !== 'undefined' && direction === 'row' && typeof(child.props.style.flex) !== 'undefined') {
	            	metrics[i].width = null;
	            }
                if (typeof(child.props.style) !== 'undefined' && direction === 'column' && typeof(child.props.style.flex) !== 'undefined') {
                    metrics[i].height = null;
                }

                //If Row, and width is undefined, and flex is undefined, default to 1.
                if (direction === 'row' && (typeof(child.props.style) === 'undefined' || (typeof(child.props.style.width) === 'undefined' && typeof(child.props.style.flex) === 'undefined'))) {
                    metrics[i].flex = 1;
                }
                if (direction === 'column' && (typeof(child.props.style) === 'undefined' || (typeof(child.props.style.height) === 'undefined' && typeof(child.props.style.flex) === 'undefined'))) {
	            	metrics[i].flex = 1;
	            }
            }     
            i++;

        });

        //Now infill the items that didn't have explicit widths/heights
        this.calcFlex(direction, metrics, parentMetrics);
        return metrics;
  	}
  	
  	getMetrics() {
  		
        var contentWidth = 0;
        var contentHeight = 0;
        var height = 0;
        var width = 0;
        var padding = 0;
  		
        if (typeof(this.props.style)!=='undefined') {
            if (typeof(this.props.style.height)!=='undefined') {
                height = this.props.style.height;
            }
            if (typeof(this.props.style.width)!=='undefined') {
                width = this.props.style.width;
            }
            if (typeof(this.props.style.padding) !== 'undefined') {
                padding = this.props.style.padding;
            }
            contentWidth = width - 2 * padding;
            contentHeight = height - 2 * padding;
        
  		} 
        
        return {height: height, width: width, contentHeight : contentHeight, contentWidth : contentWidth, padding: padding};

  	}

  	positionChildren(direction,childMetrics,parentMetrics) {
        var left = parentMetrics.padding;
        var top = parentMetrics.padding;

        for (var i = 0; i < childMetrics.length; i++) {
        	var w = childMetrics[i].width;
        	var h = childMetrics[i].height;
	        childMetrics[i].top = top;
    	    childMetrics[i].left = left;

        	if (direction === 'row') {
        		left+=w;
        	} else if (direction === 'column') {
        		top+=h;
        	}
        }
        return childMetrics;
  	}
  	
  	getDirection() {
  		if (typeof(this.props.flexDirection) === 'undefined') {
  			if (typeof(this.props.style.flexDirection)==='undefined') {
  				return this.props.style.flexDirection;
  			} else {
 	 			return 'column';
  			}
  		} else {
  			return this.props.flexDirection;
  		}
  	}

  	renderChildren(layoutChildren) {
  		var children = [];
  		var direction = this.getDirection();
        var metrics = this.getMetrics(this);
        var childMetrics = this.getChildMetrics(layoutChildren,direction, metrics);
        childMetrics = this.positionChildren(direction,childMetrics,metrics);
  
        var i = 0;
        React.Children.map(layoutChildren, function (child) {
        	if (typeof(child)==='string'||typeof(child)==='number') {
        		children.push(child);
        	} else {
	            var style = {key: i,style: {position: 'absolute',left:childMetrics[i].left,top:childMetrics[i].top,height:childMetrics[i].height,width:childMetrics[i].width}};
	            children.push(React.addons.cloneWithProps(child, style)); 
	            i++; 
        	}
        });
        return children;
    }

}

export default Layout;
