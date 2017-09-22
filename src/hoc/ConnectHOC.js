import React, {PropTypes, Component} from 'react';

const ConnectHOC = (WrappedComponent, states) => {
	class CHOC extends Component {

		constructor(props, context) {
			super(props);
			const stateStore = context.store.getUserSelections();
			const newState = {};
			states.forEach((item) => {
				if (stateStore[item]) {
					newState[item] = stateStore[item];
				}
			});
			this.state = Object.assign({test : true}, newState);
		}

		static filterResults(state, keys) {
			const newState = {};
			keys.forEach((item) => {
				if (state[item]) {
					newState[item] = state[item];
				}
			});

			return newState;
		}

		componentDidMount() {
			this.context.store.addListener((state) => {
				console.log('CHOC componentDidMount()', state);
				this.setState(Object.assign({}, CHOC.filterResults(state, states)))
			})
		}

		render() {
			return (
				<div>
					<WrappedComponent { ...this.props } { ...this.state } />

				</div>
			);
		}
	}

	CHOC.contextTypes = {
		store : PropTypes.object,
		dispatch : PropTypes.object
	}

	return CHOC;
};

export default ConnectHOC;
