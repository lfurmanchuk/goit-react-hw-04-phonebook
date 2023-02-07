import styled from 'styled-components';

export const Label = styled.label`
    display: block;
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 10px;
    color: grey;
`;

export const Input = styled.input`
    font-size: 20px;
    height: 36px;
    color: black;
    border-radius: 5px;
    padding: 2px 12px;
`;

export const AddBtn = styled.button`
    display: block;
    font-size: 20px;
    margin: 0 auto 64px;
    padding: 8px 24px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 5px;
    background-color: white;

    :hover {
    color: #ffff;
    background-color: #0000ff4f;
  }
`;

export const FormField = styled.div`
    margin-bottom: 20px;
`;
    
