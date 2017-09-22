import React, { PropTypes } from 'react';
import { array, func, string } from 'prop-types';

class SelectChar extends React.Component {

	constructor(props) {

		super(props);
		// this.state = {
		// 	value : props.defaultVal || ''
		// };

		this.onChangeHandler = this.onChangeHandler.bind(this);

	}

	onChangeHandler (evt) {

		this.setState({ value : evt.target.value });
		this.props.onChange(this.props.name, evt.target.value);

		// this.props.onChange({type : evt.target.name, value : evt.target.value });

	}

	render() {

		return (
			<select name={ this.props.name } id="buff_char_select"
				value={ this.props.value || '' }
				onChange={ this.onChangeHandler }
			>
				{
					this.props.values.map((optionValues) => {

						return (
							<option value={ optionValues } key={ `opt_${optionValues}` }>{ optionValues }</option>
						);

					})
				}

			</select>
		);

	}

}

SelectChar.propTypes = {
	onChange : func.isRequired,
	values : array.isRequired,
	name : string.isRequired,
	value : string
};

export default SelectChar;
