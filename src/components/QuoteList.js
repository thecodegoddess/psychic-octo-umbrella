import React from 'react';

const QuoteList = (props) => {
console.log('Quote List Props', props);
	return (
		<ul>
			{props.activeQuotes.map((quote, idx) => {
				return (
					<li key={ `${props.selectedChar}_${idx}` }>"{quote.quote} - Season {quote.season}"</li>
				);
			})}
		</ul>
	);

}

QuoteList.propTypes = {
	activeQuotes : React.PropTypes.array
}

export default QuoteList;
