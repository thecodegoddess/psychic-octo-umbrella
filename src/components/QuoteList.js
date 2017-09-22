import React from 'react';

const QuoteList = (props) => {
console.log('Quote List Props', props);
	return (
		<div className="media">
			<div className="media-body">
				{props.activeQuotes.map((quote, idx) => {
					return (
						<blockquote key={ `${props.selectedChar}_${idx}` }>"{quote.quote} - Season {quote.season}"</blockquote>
					);
				})}
			</div>

		</div>
	);

}

QuoteList.propTypes = {
	activeQuotes : React.PropTypes.array
}

export default QuoteList;
