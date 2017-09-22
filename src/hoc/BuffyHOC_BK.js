import React, { Component } from 'react';
import Dispatcher from '../store/Dispatcher';
import BuffyStore from '../BuffyStore';

const BuffyHOC = (WrappedComponent, selectionType) => {

	return class BHOC extends Component {

		constructor(props){

			super(props);
			this.buffyDispatcher = new Dispatcher();
			this.buffyStore = new BuffyStore(this.buffyDispatcher);
			// this.state = this.buffyStore.getInitialState();
			this.state = {
				values : []
			};

			this.buffyStore.addListener((state) => {

				console.log(state);

				const newState = {
					values : (selectionType === 'CHAR_TYPE') ? state.availableChar : state.availableSeasons
				};
				this.setState(newState);

			});

		}

		componentDidMount() {

			console.log('it mounted');

			this.buffyDispatcher.dispatch({type : 'FETCH_OBJ'});

		}

		render() {

			console.log('Buffy HOC State', this.state);
			// <h1 { ...this.props } { ...this.state } className="AMBER">Hello</h1>

			//  <WrappedComponent { ...this.props } className="AMBER" />
			return (
				<WrappedComponent { ...this.props } { ...this.state } />
			);

		}

	}

};

export default BuffyHOC;

