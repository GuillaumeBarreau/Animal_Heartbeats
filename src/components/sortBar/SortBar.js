import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FILTERBYNAME } from '../../store/actions/actionTypes';
// Import Styled components
import { ContentInput, Input } from './SortBar.styled';

const SortBar = ({ dispatch, theme }) => {
	const [inputValueState, setInputValueState] = useState('');

	const handleChange = event => {
		setInputValueState(event.target.value);
		dispatch({
			type: FILTERBYNAME,
			value: event.target.value,
		});
	};

	const props = {
		theme: theme,
		type: 'text',
		placeholder: 'Searching by name',
		onChange: handleChange,
		value: inputValueState,
	};

	return (
		<ContentInput>
			<Input {...props} />
		</ContentInput>
	);
};

const mapStateToProps = state => {
	return {
		theme: state.theme,
	};
};

export default connect(mapStateToProps)(SortBar);
