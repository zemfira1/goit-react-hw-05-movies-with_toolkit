import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  width: 100%;
  height: 36px;
  max-width: 600px;
  background-color: inherit;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0px 2px 4px -1px rgba(225, 77, 114, 0.4),
    0px 4px 5px 0px rgba(225, 77, 114, 0.4),
    0px 1px 10px 0px rgba(225, 77, 114, 0.4);
  transition: box-shadow 200ms linear;

  &:hover,
  :focus {
    box-shadow: 2px 4px 6px -2px rgba(225, 77, 114, 0.4),
      2px 6px 7px 2px rgba(225, 77, 114, 0.4),
      2px 3px 12px 2px rgba(225, 77, 114, 0.4);
  }
`;

export const Button = styled.button`
  width: 10%;
  height: 100%;
  border: none;
  padding: 0;
  background-color: inherit;
  color: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    opacity: 1;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  width: 90%;
  height: 100%;
  vertical-align: middle;
  background-color: inherit;
  padding-left: 12px;
  font-size: 20px;
  color: inherit;
`;
