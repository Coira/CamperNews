import React from 'react';
import ReactDOM from 'react-dom';

class Card extends React.Component {
    render() {
	return (
	    <div>
	    <p>This is a card</p>
	    </div>
	);
    }
}

ReactDOM.render(
    <Card />,
    document.getElementById('content')
);
