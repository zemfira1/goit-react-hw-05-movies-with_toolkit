import styled from '@emotion/styled';

export const ButtonEl = styled.button`
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 8px 16px;
  border-radius: 2px;
  background-color: inherit;
  text-align: center;
  display: inline-block;
  color: inherit;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 20px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  width: 100%;
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
