export default class Store {

	constructor(dispatcher) {

		this.__listeners = [];
		this.__state = this.getInitialState();
		dispatcher.register(this.__onDispatch.bind(this));

	}

	getInitialState() {

		throw new Error('Subclass must define getInitialState method');

	}

	__onDispatch() {

		throw new Error('Subclass must define __onDispatch method');

	}

	addListener(listener){

		this.__listeners.push(listener);

	}

	__emitChange(){

		console.log(`Change emitted, calling ${this.__listeners.length} listeners`);
		this.__listeners.forEach((listener) => {

			listener(this.__state);

		});

	}

}
