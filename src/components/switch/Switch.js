import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { selectWhiteTheme, selectDarkTheme } from '../../store/actions/selectTheme';

const ContentSwitch = styled.div`
	padding: 0.5rem;
	display: flex;
	justify-content: flex-end;
`;

const SwitchCheckbox = styled.input`
	height: 0;
	width: 0;
	visibility: hidden;
	:checked + .react-switch-label .react-switch-button {
		left: calc(100% - 1px);
		transform: translateX(-100%);
	}
`;

const SwitchLabel = styled.label`
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
	width: 50px;
	height: 25px;
	background: grey;
	border-radius: 50px;
	position: relative;
	transition: background-color 0.2s;
	.react-switch-button {
		content: '';
		position: absolute;
		top: 1px;
		left: 1px;
		width: 22.5px;
		height: 22.5px;
		border-radius: 22.5px;
		transition: 0.2s;
		background: ${props => props.theme.text};
		box-shadow: 0 0 1px 0 rgba(10, 10, 10, 0.29);
	}
	:active .react-switch-button {
		width: 40px;
	}
`;

const Switch = ({ dispatch, theme }) => {
	const [buttonState, setButtonState] = useState(false);

	const handleClick = () => {
		setButtonState(!buttonState);
		const themeColor = !buttonState ? selectWhiteTheme() : selectDarkTheme();
		
		dispatch(themeColor);
	};

	return (
		<ContentSwitch>
			<SwitchCheckbox className="react-switch-checkbox" id={`react-switch-new`} type="checkbox" />
			<SwitchLabel theme={theme} className="react-switch-label" htmlFor={`react-switch-new`} onClick={handleClick}>
				<span className={`react-switch-button`} />
			</SwitchLabel>
		</ContentSwitch>
	);
};

const mapStateToProps = state => {
	return {
		theme: state.theme,
	};
};

export default connect(mapStateToProps)(Switch);
