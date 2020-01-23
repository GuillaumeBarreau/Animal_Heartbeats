import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const TitleApp = styled.h1`
	color: ${props => props.theme.text};
    margin: 0;
    padding: 2rem 0 0;
`;

const Title = ({ children, theme }) => <TitleApp theme={theme}>{children}</TitleApp>;

const mapStateToProps = state => {
	return {
		theme: state.theme,
	};
};

export default connect(mapStateToProps)(Title);