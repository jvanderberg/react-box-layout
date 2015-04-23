var Layout = require('./Layout.js');
import React from 'react';

class Box extends Layout {

    constructor(props) {
        super(props);
    } 

    render() {
        console.log('Box metrics - width:'+this.props.style.width+ ' height:'+this.props.style.height );
        var className = this.props.className;
        var style = this.props.style;
        if (typeof(style) !== 'undefined') {
            style.position = 'absolute';
        } else {
            style = {position: 'absolute'};
        }
        return(
            <div {...this.props} style={style} className={className}>
                 {this.renderChildren(this.props.children)}
            </div>
        );
    }

}

Box.DIRECTION_ROW = 'row';
Box.DIRECTION_COLUMN = 'column';

export default Box;