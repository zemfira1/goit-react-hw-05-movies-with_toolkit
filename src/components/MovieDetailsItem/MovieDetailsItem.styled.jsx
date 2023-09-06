import styled from '@emotion/styled';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const MovieContainer = styled.div`
  display: flex;
  gap: 32px;
`;

export const Image = styled.img`
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.5),
    0px 4px 5px 0px rgba(0, 0, 0, 0.5), 0px 1px 10px 0px rgba(0, 0, 0, 0.5);
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-left: 24px;
  padding-right: 32px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.3),
    0px 4px 5px 0px rgba(0, 0, 0, 0.3), 0px 1px 10px 0px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h2`
  font-size: 44px;
`;

export const Paragraph = styled.p`
  font-size: 22px;
  font-weight: 500;
`;

export const Score = styled.span`
  font-size: 20px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Overview = styled.p`
  padding-left: 28px;
  font-size: 18px;
`;

export const GenresList = styled.ul`
  padding-left: 28px;
  font-size: 18px;
  display: flex;
  gap: 24px;
`;

export const AddInfoContainer = styled.div`
  border-color: gray;
`;

export const AddInfoTitle = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const AddInfoList = styled.ul`
  font-size: 20px;
  padding-left: 28px;
  color: #de0b74;
`;

export const AddInfoItem = styled.li`
  margin-bottom: 12px;
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  border: none;
  background-color: gray;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.8),
    0px 1px 10px 0px rgba(0, 0, 0, 0.8);
`;
