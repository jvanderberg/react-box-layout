var Box = require('./Box.js');

class HBox extends Box {

}

HBox.defaultProps = { className: 'Box HBox', flexDirection : Box.DIRECTION_ROW};

export default HBox;