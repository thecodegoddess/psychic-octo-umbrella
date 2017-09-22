export default class Dispatcher {

	constructor() {

		this.__listeners = [];

	}

	register(listener) {

		this.__listeners.push(listener);

	}

	dispatch(action) {
		console.log(`Dispacher dispatch with ${this.__listeners.length} many listeners`);

		this.__listeners.forEach((listener) => {

			listener(action);

		});

	}

}
