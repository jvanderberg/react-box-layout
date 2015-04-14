var Box = require('./Box.js');

class VBox extends Box {

}

VBox.defaultProps = { className: 'Box VBox', flexDirection : Box.DIRECTION_COLUMN  };

export default VBox;
