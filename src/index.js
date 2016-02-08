import React from 'react';
import ReactDOM from 'react-dom';
import ajax from 'superagent';

class Card extends React.Component {
    constructor(props) {
	super(props);
	this.state = { news: [] }
    }
    
    componentWillMount() {
	const baseURL = 'http://www.freecodecamp.com/news/hot';
	ajax.get('http://www.freecodecamp.com/news/hot').
	     end((error, response) => {
		 if (!error && response) {
		     this.setState({news: response.body});
		 }
		 else {
		     console.log('There was an error fetching the feed from freecodecamp', error);
		 }
	     });
    }
    
    render() {
	return (<div>
	    <h1>Camper News</h1>
	    <div className = 'cardContainer'>
	    {this.state.news.map((newsItem, index) => (
		<div key={index} className='card'>
		    <p> {newsItem.headline} </p>
		    <p> {newsItem.author.username} </p>
		</div>
	    ))}
	</div>
	</div>);
    }

}


ReactDOM.render(
    <Card />,
    document.getElementById('content')
);
