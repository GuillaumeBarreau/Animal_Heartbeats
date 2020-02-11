import React, { useState } from 'react';
import { connect } from 'react-redux';
import { selectWhiteTheme, selectDarkTheme } from '../../store/actions/selectTheme';
// import Styled components
import { ContentSwitch, SwitchCheckbox, SwitchLabel } from './Switch.styled';

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
