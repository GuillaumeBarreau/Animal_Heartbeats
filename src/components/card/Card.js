import React from 'react';
import { connect } from 'react-redux';
import { convertToIntFcm } from '../../logic/convertToIntFcm.logic';
// Import Styled components
import { Item, Link, Title, ContentHearth, Hearth, Legende, Text, Avatar } from './Card.styled';

const Card = ({ theme, ...props }) => (
	<Item id={props.name} theme={theme}>
		<Link theme={theme} href="">
			<Title>{props.name}</Title>
			{props.image ? <Avatar /> : null}
			<ContentHearth>
				<Hearth fcm={convertToIntFcm(props.fcm)}></Hearth>
			</ContentHearth>
			<Text>≈ {convertToIntFcm(props.fcm)} BPM</Text>
			<Legende>BPM : Beats per minute</Legende>
		</Link>
	</Item>
);

const mapStateToProps = state => {
	return {
		theme: state.theme,
	};
};

export default connect(mapStateToProps)(Card);
