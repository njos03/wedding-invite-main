import React from "react";
import { Page2Wrapper, Page2Container } from "./styled";
import { Text } from "../Text";

export const Page4: React.FC = () => {
  return (
    <Page2Wrapper>
      <Page2Container>
        <Text fontSize="32px" fontWeight="bold" paddingBottom="18px">
          Reception Invitation
        </Text>
        <Text fontSize="32px" paddingBottom="18px">
          December 08, 2023
        </Text>
        <Text fontSize="32px" paddingBottom="2px">
          -19:00-
        </Text>
        <Text fontSize="20px" paddingBottom="18px">
          Wedding Reception
        </Text>
      </Page2Container>
    </Page2Wrapper>
  );
};
