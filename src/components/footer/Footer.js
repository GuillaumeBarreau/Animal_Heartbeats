import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const FooterContent = styled.footer`
	padding: 2rem;
	margin-top: 2.5rem;
	background: ${props => props.theme.secondary};
	color: ${props => props.theme.text};
`;

const Link = styled.a`
	color: red;
	font-weight: 600;
	text-decoration: none;
	:focus {
		color: rebeccapurple;
	}
`;

const Footer = ({ theme }) => (
	<FooterContent theme={theme}>
		<p>
			Made with love &hearts; &hearts; &hearts; - Repository{' '}
			<Link target="_blank" href="https://github.com/GuillaumeBarreau/Animal_Heartbeats">
				GitHub
			</Link>
		</p>
	</FooterContent>
);

const mapStateToProps = state => {
	return {
		theme: state.theme,
	};
};

export default connect(mapStateToProps)(Footer);
