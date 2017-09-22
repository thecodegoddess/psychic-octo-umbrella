import React, { PropTypes } from 'react';
import BuffyStore from './store/BuffyStore';
import Dispatcher from './store/Dispatcher';
import storeHOC from './hoc/StoreHOC';
import ConnectHOC from './hoc/ConnectHOC';
import Me from './components/Me';
import ChooseSeason from './components/ChooseSeason';
import ChooseChar from './components/ChooseChar';
import QuoteList from './components/QuoteList';

const buffyStoreDispatcher = new Dispatcher();
const buffyStore = new BuffyStore(buffyStoreDispatcher);

const Test = ConnectHOC(Me, ['availableSeasons', 'selectedChar']);
const SelectChar = ConnectHOC(ChooseChar, ['availableChar', 'selectedChar']);
const SelectSeason = ConnectHOC(ChooseSeason, ['availableSeasons', 'selectedSeason']);
const ConnectQuoteList = ConnectHOC(QuoteList, ['activeQuotes', 'selectedChar']);
/**
 * This is the main app component. This is what will be mounted on the main page
 */
class App extends React.Component {

	constructor(props) {
		super(props);
		this.updateCharacter = this.updateCharacter.bind(this);
		this.getQuote = this.getQuote.bind(this);
		this.updateValue = this.updateValue.bind(this);

	}

	componentDidMount() {
		this.context.dispatcher.dispatch({type : 'FETCH_OBJ'});
	}

	updateCharacter(name, value) {
		this.context.dispatcher.dispatch({type : name, value : value});
	}

	getQuote() {
		this.context.dispatcher.dispatch({type : 'GET_QUOTES'})
	}

	updateValue(evt) {
		console.log(arguments);
		this.context.dispatcher.dispatch({type : 'UPDATE_CHAR', value : 'Chris'})
	}

	render(){

		const subTitleElement = (this.props.subTitle) ? (<h3>{ this.props.subTitle }</h3>) : null;

		// const BuffThing = BuffyHOC(SelectChar, 'CHAR_TYPE');


		return (
			<div>
				<p>
					{JSON.stringify(this.context.store.getUserSelections(), null)}
				</p>
				<div className="row">
					<div className="col" style={{padding : '1px 0'}}>
						<h1>Buffy Quotes App</h1>
					</div>
				</div>

				<div className="row">
					<div className="col-3">
						<SelectChar onChange={ this.updateCharacter} />
						<SelectSeason onChange={ this.updateCharacter} />
						<button onClick={ this.getQuote }>Get Quote</button>
					</div>
					<div className="col">
						<ConnectQuoteList />
					</div>
				</div>

			</div>

		);

	}



}

App.contextTypes = {
	dispatcher : PropTypes.object,
	store : PropTypes.object
};

export default storeHOC(App, buffyStore, buffyStoreDispatcher);
// export default App;
