import React, { Component, PropTypes } from 'react';

// import Dispatcher from '../store/Dispatcher';
// import BuffyStore from '../BuffyStore';

const StoreHOC = (WrappedComponent, storeInstance, dispatcherInstance) => {

	class SHOC extends Component {

		constructor(props) {
			super(props);
		}

		getChildContext() {
			return {
				store : storeInstance,
				dispatcher : dispatcherInstance
			}
		}

		render() {
			console.log(this.context.store);

			return(
					<WrappedComponent { ...this.props } />
			);
		}
	}

	SHOC.childContextTypes = {
		store : PropTypes.object.isRequired,
		dispatcher : PropTypes.object.isRequired
	};

	return SHOC;

};

export default StoreHOC;

