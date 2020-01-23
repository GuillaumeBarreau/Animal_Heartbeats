import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FILTERBYNAME } from '../../store/actions/actionTypes';

const ContentInput = styled.div`
	display: flex;
	margin-top: 2.5rem;
`;

const Input = styled.input`
	padding: 1rem;
	flex: 100%;
	margin: 0 0.5rem 0.5rem;
	background: ${props => props.theme.secondary};
	border-radius: 4px;
	border: 1px solid ${props => props.theme.secondary};
	color: ${props => props.theme.text};
	box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.1);
	::placeholder {
		color: grey;
		font-size: 1rem;
	}
`;

const SortBar = ({ dispatch, theme }) => {
	const [inputValueState, setInputValueState] = useState('');

	const handleChange = event => {
		setInputValueState(event.target.value);
		dispatch({
			type: FILTERBYNAME,
			value: event.target.value,
		});
	};

	return (
		<ContentInput>
			<Input theme={theme} type="text" placeholder="Searching by name" onChange={handleChange} value={inputValueState} />
		</ContentInput>
	);
};

const mapStateToProps = state => {
	return {
		theme: state.theme,
	};
};

export default connect(mapStateToProps)(SortBar);