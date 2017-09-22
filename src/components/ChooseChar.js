import React from 'react';
import Select from './Select';

const ChooseChar = (props) => {

	return (

		<div>
			<Select
				name="UPDATE_CHAR"
				values={ props.availableChar }
				value={ props.selectedChar }
				onChange={ props.onChange || ((name, val) => { console.log(name, val); })}
			/>
		</div>
	) ;


}

export default ChooseChar;
