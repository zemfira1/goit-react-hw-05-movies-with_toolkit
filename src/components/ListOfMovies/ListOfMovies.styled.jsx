import styled from '@emotion/styled';

export const List = styled.ul`
  padding-top: 20px;
  display: grid;
  max-width: 1900px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 40px;
  -ms-grid-column-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.li`
  size: 20px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.4),
    0px 4px 5px 0px rgba(0, 0, 0, 0.4), 0px 1px 10px 0px rgba(0, 0, 0, 0.4);
  transition: color, box-shadow 250ms linear;

  &:hover,
  :focus {
    color: #de0b74;
    box-shadow: 0px 2px 4px -1px rgba(225, 77, 114, 0.4),
      0px 4px 5px 0px rgba(225, 77, 114, 0.4),
      0px 1px 10px 0px rgba(225, 77, 114, 0.4);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 390px;
  margin-bottom: 8px;
  z-index: 9999;
`;

export const Title = styled.p`
  font-size: 20px;
  text-align: center;
`;
