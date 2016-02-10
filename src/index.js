import React from 'react';
import ReactDOM from 'react-dom';
import ajax from 'superagent';

class Card extends React.Component {
    constructor(props) {
	super(props);
	this.state = { news: [] }
    }
    
    componentWillMount() {
	ajax.get('http://www.freecodecamp.com/news/hot').
	       end((error, response) => {
		   if (!error && response) {
		       this.setState({news: response.body});
		   }
		   else {
		       console.log('There was an error fetching ' +
				   'the feed from freecodecamp', error);
		   }
	       });
    }
    
    render() {
	return (
	    <div>
	    <h1>Camper News</h1>
	    <div className = 'cardsContainer'>

	    {this.state.news.map((newsItem, index) => {
		let date = new Date(newsItem.timePosted).toDateString();
		let headline = newsItem.headline;
		
		if (headline.length > 79) {
		    headline = headline.substring(0,79) + "...";
		}

		let authorLink = "//www.freecodecamp.com/" + newsItem.author.username
		
		return (
		    <div key={index} className='card'>
			<a href={newsItem.link}>
			    <img src={newsItem.author.picture} />
			</a>
			<a href={authorLink}>
			    <p className='small'>by - {newsItem.author.username} </p>
			</a>
			<a href={newsItem.link}>
			    <p className='headline'>{headline} </p>
			</a>
			<p className="small upvotes"> &#10084; {newsItem.upVotes.length}</p>
		    </div>

		);
	    })}
	    </div>
	    </div>
	)

    }

}

ReactDOM.render(
    <Card />,
    document.getElementById('content')
);
