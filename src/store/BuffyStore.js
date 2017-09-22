import Store from './Store';
import quotes from './quotes';

export default class BuffyStore extends Store{

	// set the initial state for the Buffy Quote Store
	getInitialState() {

		return {
			availableSeasons : [],
			availableChar : [],
			selectedChar : null,
			selectedSeason : null,
			activeQuotes : []
		};

	}

	__fetchData(){

		const data = new Promise((resolve, reject)=> {

			setTimeout(() => {

				resolve({
					availableSeasons : [1, 2, 3, 4, 5, 6, 7],
					availableChar : [
						'Buffy',
						'Angel',
						'Willow',
						'Xander',
						'Cordelia',
						'Giles',
						'Anya',
						'Spike',
						'Drusilla'
					],
					selectedChar : 'Buffy',
					selectedSeason : '1',
					quotes : quotes,
					activeQuotes : []
				})

			}, 2000);

		});

		data.then((result) => {

			// console.log(this);
			console.log('this was positive', result);
			this.__onDispatch({ type : 'FETCH_OBJ_SUCCESS', value : result})

		}, (err)=>{

			console.warn(`${err} this happened`)

		});

	}

	__getQuotes() {
		// Convert to a number
		const selectedSeason = this.__state.selectedSeason;
		if (this.__state.selectedChar === '') {
			return;
		}
		// this.__state.selectedSeason++
		// t.filter((q)=>{console.log(q.season); return q.season === this.__state.selectedSeason++})
		// this.__state.activeQuotes = [...this.__state.quotes[this.__state.selectedChar.toLowerCase()]];
		let charQuotes = [...this.__state.quotes[this.__state.selectedChar.toLowerCase()]];
		// if (selectedSeason !== 0 || isNaN(selectedSeason)) {
		if (selectedSeason !== '') {
			charQuotes = charQuotes.filter((quote) => {
				return quote.season === selectedSeason
			});

		}
		this.__state.activeQuotes = charQuotes;
	}

	__onDispatch(action) {

		console.log(action);
		switch (action.type) {

			case 'UPDATE_CHAR':
				this.__state.selectedChar = action.value;
				this.__emitChange();
				break;

			case 'UPDATE_SEASON':
				this.__state.selectedSeason = action.value;
				this.__emitChange();
				break;

			case 'FETCH_OBJ':
				this.__fetchData();
				break;

			case 'FETCH_OBJ_SUCCESS':
				this.__state = action.value;
				this.__emitChange();
				break;

			case 'GET_QUOTES':
				this.__getQuotes();
				this.__emitChange();
				break;

			default:

		}

	}

	getUserSelections(){

		return this.__state;

	}

	getCharacters(){

		return this.__state.availableChar;

	}

	getSeasons(){

		return this.__state.availableSeasons;

	}

}
