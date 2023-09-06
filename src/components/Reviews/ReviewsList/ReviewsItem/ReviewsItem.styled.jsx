import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 10px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.4),
    0px 4px 5px 0px rgba(0, 0, 0, 0.4), 0px 1px 10px 0px rgba(0, 0, 0, 0.4);
`;

export const Name = styled.h3`
  font-weight: 500;
`;

export const Content = styled.p`
  font-size: 18px;
  padding-left: 24px;
`;
