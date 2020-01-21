import React from 'react';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';

// Create the keyframes
const animate = keyframes`
  0%   {transform: scale(1);}
  50%  {transform: scale(2);}
  100% {transform: scale(1);
  }
`;

// Create the components
const Item = styled.li`
	background: ${props => props.theme.secondary};
	border-radius: 4px;
	box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.1);
	margin: 0.5rem;
	min-width: 320px;
	display: flex;
	flex: 0 0 calc(25% - 1rem);
	flex-direction: column;
	align-items: center;
`;

const Link = styled.a`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-decoration: none;
	width: 100%;
	color: ${props => props.theme.text};
	pointer-events: none;
	cursor: default;
`;

const Title = styled.h2`
	margin: 1rem 0;
`;

const hearthSize = '1.5rem';

const ContentHearth = styled.div`
	transform: rotate(-135deg);
`;

const Hearth = styled.div`
	background-color: red;
	height: ${hearthSize};
	width: ${hearthSize};
	animation: ${animate} ${props => 60 / props.fcm}s infinite;
	margin: 2rem;
	&:after,
	&:before {
		content: '';
		background-color: red;
		border-radius: 50%;
		height: ${hearthSize};
		position: absolute;
		width: ${hearthSize};
	}
	&:before {
		top: calc(${hearthSize} / 2);
		left: 0;
	}
`;

const Legende = styled.p`
	font-size: 0.8rem;
`;

const Text = styled.p``;

const Avatar = styled.img`
	width: 150px;
	height: 150px;
	border-radius: 50%;
	background: #cbc5c5;
`;

const Card = ({ theme, ...props }) => (
	<Item id={props.name} theme={theme}>
		<Link theme={theme} href="">
			<Title>{props.name}</Title>
			{props.image ? <Avatar /> : null}
			<ContentHearth>
				<Hearth fcm={props.fcm}></Hearth>
			</ContentHearth>
			<Text>{props.fcm} BPM</Text>
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
