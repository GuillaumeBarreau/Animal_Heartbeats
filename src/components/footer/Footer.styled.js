import styled from 'styled-components';

export const FooterContent = styled.footer`
	padding: 2rem;
	margin-top: 2.5rem;
	background: ${props => props.theme.secondary};
	color: ${props => props.theme.text};
`;

export const Link = styled.a`
	color: red;
	font-weight: 600;
	text-decoration: none;
	:focus {
		color: rebeccapurple;
	}
`;
