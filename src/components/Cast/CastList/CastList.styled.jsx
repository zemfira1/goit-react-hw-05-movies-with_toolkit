import styled from '@emotion/styled';

export const List = styled.ul`
  display: grid;
  max-width: 1900px;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 82px;
  -ms-grid-column-align: center;
  margin-left: auto;
  margin-right: auto;
`;
