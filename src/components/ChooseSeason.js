import React from 'react';
import Select from './Select';

const ChooseSeason = (props) => {

	return (

		<div>
			<Select
				name="UPDATE_SEASON"
				values={ props.availableSeasons }
				value={ props.selectedSeason }
				onChange={ props.onChange || ((name, val) => { console.log(name, val); })}
			/>
		</div>
	) ;


}

export default ChooseSeason;
