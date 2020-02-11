import styled from 'styled-components';

export const ContentSwitch = styled.div`
	padding: 0.5rem;
	display: flex;
	justify-content: flex-end;
`;

export const SwitchCheckbox = styled.input`
	height: 0;
	width: 0;
	visibility: hidden;
	:checked + .react-switch-label .react-switch-button {
		left: calc(100% - 0.0625rem);
		transform: translateX(-100%);
	}
`;

export const SwitchLabel = styled.label`
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
	width: 3.125rem;
	height: 1.5625rem;
	background: grey;
	border-radius: 3.125rem;
	position: relative;
	transition: background-color 0.2s;
	.react-switch-button {
		content: '';
		position: absolute;
		top: 0.0625rem;
		left: 0.0625rem;
		width: 1.4063rem;
		height: 1.4063rem;
		border-radius: 1.4063rem;
		transition: 0.2s;
		background: ${props => props.theme.text};
		box-shadow: 0 0 0.0625rem 0 rgba(10, 10, 10, 0.29);
	}
	:active .react-switch-button {
		width: 2.5rem;
	}
`;
