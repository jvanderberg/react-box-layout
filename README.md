# react-box-layout
Simple absolute layout tools written in React

#React Box Layout

VBox and HBox that implement some simple column/row based layout rules.  When composed they can create complex flexible layouts.

#Installing and Usage
1. npm install --save-dev react-box-layout
2. For ES6 style code:
import Box from 'react-box-layout';
3. For non-ES6 usage:
var Box = require('react-box-layout');

JSX usage:
```
<Box.VBox style={{width:200,height:300}}>
	<div id="content"></div>
<Box.VBox>
```

See the /demo directory for two relatively complex examples of usage.

#Layout rules
1. VBoxes layout their children as a column, HBoxes layout children as a row.
2. The layout engine respects explicit CSS width/height and will not change them.
3. Set the css "flex" property to flex the size of a child element in the direction of the parent Box.
4. The css 'flex' property behaves the same way as it does for flexbox, proportionally dividing the parent width/height using 'flex' as a weight. Any children with explicit sizes in the direction of layout will get their size, and this will subtract from the amount of space available to be divied up for flex elements.
5. If no explicit size is declared in the direction of layout, the child behaves as if flex:1 were set.
6. In the non-layout direction, children are set to the size of their parent if no explicit size is declared.  For example, VBox sets the width of children without a width to the width of the VBox.

Remember to style VBoxes, HBoxes, and their children using inline styles only.  There is no easy way for React to detect css styles without manipulating the DOM.  You must style the root container with an explicit height/width.  A common pattern is to pin it to the viewport:

```
import React from 'react';
import Box from 'react-box-layout'

class Demo extends React.Component {
	
	render() {
		return	(
			<Box.VBox style={{width:window.innerWidth, height:window.innerHeight}}>
				<div>content1</div>
				<div>content2</div>
				<div>content3</div>
			</Box.VBox>);
  	}

}

function render(dummy) {
	React.render(
		<Demo />, 
		document.getElementById('content')
	);
}

document.addEventListener('DOMContentLoaded', function () {
	render();
	window.addEventListener('resize', render);
});

```

Both of the demo projects use this pattern.

As these components use props.style to style children, if you want a custom child element to respect the layout you must pass on the styles in your JSX, example:

```
<Box.VBox style={{width:200,height:300}}>
	<CustomElement></CustomElemet>
<Box.VBox>
```

```
class CustomElement extends React.Component {
    render() {
    	//This passes on the styles sent to CustomElement, alternatively you can merge this.props.style into a new style declaration.
	    return <div style={this.props.style} ></div>;
    }
}
```


##Production build

npm run build-all

This will build the lib directory and the demo directory
