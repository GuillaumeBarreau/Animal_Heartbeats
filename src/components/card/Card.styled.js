import styled, { keyframes } from 'styled-components';

// Create the keyframes
export const animate = keyframes`
  0%   {transform: scale(1);}
  50%  {transform: scale(2);}
  100% {transform: scale(1);}
`;

// Create the components
export const Item = styled.li`
	background: ${props => props.theme.secondary};
	border-radius: 0.25rem;
	box-shadow: 0rem 0.1875rem 0.1875rem 0rem rgba(0, 0, 0, 0.1);
	margin: 0.5rem;
	display: flex;
	flex: 1 1 auto;
	min-width: 18.75rem;
	min-height: 18.75rem;
	flex-direction: column;
`;

export const Link = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-decoration: none;
	width: 100%;
	height: 100%;
	color: ${props => props.theme.text};
	pointer-events: none;
	cursor: default;
`;

export const Title = styled.h2`
	margin: 1rem 0;
`;

const hearthSize = '1.5rem';

export const ContentHearth = styled.div`
	transform: rotate(-135deg);
`;

export const Hearth = styled.div`
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

export const Legende = styled.p`
	font-size: 0.8rem;
`;

export const Text = styled.p``;

export const Avatar = styled.img`
	width: 9.375rem;
	height: 9.375rem;
	border-radius: 50%;
	background: #cbc5c5;
`;
