import styled from "styled-components";

export const StyledHeaderContent = styled.div`
    position: relative;

    &>h1 {
    font-style: italic;
    font-weight: 800;
    color: teal;
    text-align: center;
}
`;

export const StyledSelectInput = styled.select`
    box-shadow: 0 0 2px white;
    border-radius: 5px;
    float: right;
    min-width: 400px;
    min-height: 30px;
    margin-right: 20px;

    @media (max-width: 767px){
        float: none;
        min-width: 240px;
    }
`;

export const StyledInput = styled.input`
    box-shadow: 0 0 2px white;
    border-radius: 5px;
    float: right;
    min-width: 400px;
    min-height: 30px;
    margin-right: 20px;

    @media (max-width: 767px){
        float: none;
        min-width: 240px;
    }
`;

export const StyledParagraph = styled.p`
    font-weight: 200;
    padding: 10px;
    padding-left: 0px;
    font-size: 20px;

    @media (max-width: 767px){
        padding: 0px;
        padding-left: 10px;
        font-size: 16px;
        font-weight: 70;
   }
`;

export const StyledInfoParagraph = styled.p`
  font-weight: 100;
    font-size: 11px;
    font-style: italic;
`;

export const StyledButton = styled.button`
    width: 100%;
    justify-content: center;
    background-color: teal;
    color: white;
    padding: 10px;
    font-weight: 300;
    border: 1px solid white;
    border-radius: 5px;
    transition: 1s;

    &:hover {
    background-color: hsl(180, 100%, 35%);
    transform: scale(1.02);   
    }
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  & > p {
    color: teal;
    padding: 20px;
    text-align: center;
  }
`;

