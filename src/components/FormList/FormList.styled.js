import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  max-width: 500px;
`;

export const Item = styled.li`
    display: flex;
    font-size: 20px;
    align-items: center;
    gap: 20px;
    justify-content: space-around;
`;

export const DeleteBtn = styled.button`
  padding: 2px 16px 2px 16px;
  border-radius: 5px;
  background-color: white;
  font-size: 18px;
  height: 36px;
  max-width: 100px;
  color: black;
  cursor: pointer;

  :hover {
    color: #ffff;
    background-color: rgb(224 139 66);
  }
`;

export const Tel = styled.a`
    font-size: 18px;
    color: black;   
`;

