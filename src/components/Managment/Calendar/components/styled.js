import styled from "styled-components";

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 25px 40px 25px 40px;

	.title-header > h1 {
		color: var(--black);
		font-weight: 600;
		font-size: 20px;
	}

	.title-header > h2 {
		color: var(--gray-opacity-50);
		font-weight: 600;
		font-size: 16px;
	}
`;

export const Wrapper = styled.div`
	border: 2px solid var(--light-green);
	border-radius: 8px;
	margin: 10px 10px;
	height: 100%;
	width: 100%;
`;

export const StyledEvent = styled.span`
	display: inline-flex;
	align-items: center;
	color: black;
	font-size: 13px;
	// cursor: move;
	cursor: pointer;
	text-transform: capitalize;
	background: var(--gray-almost-white);
	margin-left: 40px;
	border-radius: 8px;
	padding: 7px;
	position: relative;

	&::before {
		content: "";
		width: 5px;
		height: calc(100% - 10px);
		background: var(--dark-green);
		position: absolute;
		border-radius: 8px;
	}

	p {
		margin-left: 10px;
	}
`;

export const SevenColGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	${(props) => props.fullheight && `height: calc(100% - 100px);`}
	${(props) =>
		props.fullheight &&
		`grid-template-rows: repeat(${props.is28Days ? 4 : 5}, minmax(100px, 1fr));`}
  	
	div {
		height: 100%;
		min-height: 100px;
		border: 2px solid var(--light-green);
		border-left: none;
		border-top: none;
		font-size: 16px;
		font-weight: 500;
		color: var(--black);
		font-weight: 600;
		padding-top: 20px;

		${StyledEvent} {
			display: none;
		}

		${StyledEvent}:nth-child(-n + 3) {
			display: inline-flex;
		}

		span > .day {
			padding-left: 40px;
		}

		span {
			text-align: left;
			height: fit-content;
		}

		span.active > .day {
			color: red;
		}

		/*
		span.active::before {
			content: "Today ";
			font-size: 14px;
		}*/
	}

	div:nth-child(7n) {
		// ultima coluna
		border-right: none;
		color: var(--gray-opacity-50);
		font-weight: 500;
	}

	div:nth-child(7n + 1) {
		// primeira coluna
		border-left: none;
	}
`;

export const HeadDays = styled.span`
	text-align: left;
	border: 2px solid var(--light-green);
	border-left: none;
	padding: 12px 0px 12px 40px;
	color: var(--dark-gray);
	font-weight: 600;

	&:last-child {
		border-right: none;
	}
`;

export const DateControls = styled.div`
	display: flex;
	gap: 26px;
	justify-content: space-around;
	padding: 10px 0;
	align-items: center;

	svg {
		cursor: pointer;
	}

	.location {
		display: flex;
		align-items: center;
		border: 2px solid var(--light-green);
		color: var(--gray-opacity-50);
		font-weight: 600;
		padding: 8px 15px;
		border-radius: 8px;
		gap: 10px;
	}
`;

export const SeeMore = styled.p`
	font-size: 12px;
	padding: 0px 40px;
	cursor: pointer;
`;

export const PortalWrapper = styled.div`
	background: white;
	position: absolute;
	width: 60%;
	height: 200px;
	top: 50%;
	left: 50%;
	border-radius: 6px;
	transform: translate(-50%, -50%);
	box-shadow: 10px 10px 20px black;
	padding: 40px;

	h2 {
		font-size: 3rem;
	}

	ion-icon {
		font-size: 2rem;
		color: red;
		background: lightblue;
		padding: 10px 20px;
		border-radius: 6px;
	}

	p {
		margin-bottom: 15px;
	}

	ion-icon[name="close-outline"] {
		position: absolute;
		top: 10px;
		right: 10px;
		background: red;
		color: lightblue;
	}
`;