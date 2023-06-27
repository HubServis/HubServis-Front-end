import styled from "styled-components";

export const CalenderBody = styled.div`
	height: calc(100% - 27px - 40px);
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	grid-template-rows: repeat(${({ fourCol }) => (fourCol ? 4 : 5)}, 1fr);
`;

export const StyledDay = styled.span`
    border: 1px solid;
    text-align: right;
    padding: 5px;
    ${({active}) => active && `background: pink`};
`;

export const StyledEvents = styled.span`
    display: grid;
    text-align: left;
    background: ${({bgColor}) => bgColor || 'purple'};
    color: white;
    padding: 2px 5px;
    border-radius: 8px;
`;