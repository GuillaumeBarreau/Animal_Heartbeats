import React from 'react';
import { connect } from 'react-redux';
// Styled components
import { TitleApp } from './Title.styled';

const Title = ({ children, theme }) => {
	const props = {
		theme,
	};

	return <TitleApp {...props}>{children}</TitleApp>;
};

const mapStateToProps = state => {
	return {
		theme: state.theme,
	};
};

export default connect(mapStateToProps)(Title);
