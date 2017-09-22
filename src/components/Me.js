import React from 'react';

const Me = (props) => {
	return (
		<pre>
			<code>
				{ JSON.stringify(props, null) }
			</code>
		</pre>
	);
}

export default Me;
