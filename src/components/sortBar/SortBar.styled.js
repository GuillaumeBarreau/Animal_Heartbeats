import styled from 'styled-components';

export const ContentInput = styled.div`
	display: flex;
	margin-top: 2.5rem;
`;

export const Input = styled.input`
	padding: 1rem;
	flex: 100%;
	margin: 0 0.5rem 0.5rem;
	background: ${props => props.theme.secondary};
	border-radius: 0.25rem;
	border: 0.0625rem solid ${props => props.theme.secondary};
	color: ${props => props.theme.text};
	box-shadow: 0rem 0.1875rem 0.1875rem 0rem rgba(0, 0, 0, 0.1);
	::placeholder {
		color: grey;
		font-size: 1rem;
	}
`;
