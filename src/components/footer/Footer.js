import React from 'react';
import { connect } from 'react-redux';
// Import Styled components
import { FooterContent, Link } from './Footer.styled';

const Footer = ({ theme }) => {
	const props = {
		theme,
	};

	return (
		<FooterContent {...props}>
			<p>
				Made with love &hearts; &hearts; &hearts; - Repository{' '}
				<Link target="_blank" href="https://github.com/GuillaumeBarreau/Animal_Heartbeats">
					GitHub
				</Link>
			</p>
		</FooterContent>
	);
};

const mapStateToProps = state => {
	return {
		theme: state.theme,
	};
};

export default connect(mapStateToProps)(Footer);
