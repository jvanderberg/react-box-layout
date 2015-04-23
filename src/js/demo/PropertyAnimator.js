"use strict";
class PropertyAnimator {
	

	constructor(component, property, fromvalue, tovalue, duration,easing) {
    	this.component = component;
    	this.property = property;
    	this.fromvalue = fromvalue;
    	this.tovalue = tovalue;
    	this.startTime = Date.now();
    	this.duration = duration;
    	if (typeof(easing) !== 'undefined' && typeof(easing)==='function') {
    		this.easing = easing;
    	} else {
    		this.easing = PropertyAnimator.linear;
    	}
    	window.requestAnimationFrame(this.handleAnimationStep.bind(this));
    } 

    handleAnimationStep() {
    	let duration = Date.now() - this.startTime;
    	if (duration < this.duration) {
    		let val = (this.tovalue - this.fromvalue) * this.easing(duration / this.duration) + this.fromvalue;
    		this.setValue(val);
    		window.requestAnimationFrame(this.handleAnimationStep.bind(this));
    	} else {
			this.setValue(this.tovalue);	
    	}
    }

	setValue(value) {
		let state = this.component.state;
		state[this.property] = value;
		this.component.setState(state);
	}

}

PropertyAnimator.linear =  function (t) { return t; };
  // accelerating from zero velocity
PropertyAnimator.easeInQuad = function (t) { return t*t ;};
  // decelerating to zero velocity
PropertyAnimator.easeOutQuad = function (t) { return t*(2-t) ;};
  // acceleration until halfway, then deceleration
PropertyAnimator.easeInOutQuad = function (t) { return (t<0.5) ? 2*t*t : -1+(4-2*t)*t; };
  // accelerating from zero velocity 
PropertyAnimator.easeInCubic = function (t) { return t*t*t ;};
  // decelerating to zero velocity 
PropertyAnimator.easeOutCubic = function (t) { return (--t)*t*t+1 ;};
  // acceleration until halfway, then deceleration 
PropertyAnimator.easeInOutCubic = function (t) { return ((t<0.5) ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1) ;};
  // accelerating from zero velocity 
PropertyAnimator.easeInQuart = function (t) { return t*t*t*t ;};
  // decelerating to zero velocity 
PropertyAnimator.easeOutQuart = function (t) { return 1-(--t)*t*t*t; };
  // acceleration until halfway, then deceleration
PropertyAnimator.easeInOutQuart = function (t) { return (t<0.5) ? 8*t*t*t*t : 1-8*(--t)*t*t*t ;};
  // accelerating from zero velocity
PropertyAnimator.easeInQuint = function (t) { return t*t*t*t*t ;};
  // decelerating to zero velocity
PropertyAnimator.easeOutQuint = function (t) { return 1+(--t)*t*t*t*t; };
  // acceleration until halfway, then deceleration 
PropertyAnimator.easeInOutQuint = function (t) { return (t<0.5) ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t; };


export default PropertyAnimator;