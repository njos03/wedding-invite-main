import React from "react";
import { Title, Page1Wrapper, Page1SubWrapper, Page2Container } from "./styled";
import { Text } from "../Text";

export const Page1: React.FC = () => {
  return (
    <Page1Wrapper>
      <Title paddingTop="30px">Niraj & Zarna</Title>
      <Page1SubWrapper>
        <Page2Container>
          <Text fontSize="18px" fontWeight="bold">
            Together with their families, Zarna and Niraj invite you to share in the joy and celebration of their wedding day.
          </Text>
        </Page2Container>
      </Page1SubWrapper>
    </Page1Wrapper>
  );
};
