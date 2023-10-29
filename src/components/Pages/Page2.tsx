import React from "react";
import { Page2Wrapper, Page2Container } from "./styled";
import { Text } from "../Text";

export const Page2: React.FC = () => {
  return (
    <Page2Wrapper>
      <Page2Container>
        <Text fontSize="32px" fontWeight="bold" paddingBottom="18px">
          Wedding Invitation
        </Text>
        <Text fontSize="32px" paddingBottom="18px">
          December 06, 2023
        </Text>
        <Text fontSize="32px" paddingBottom="2px">
          -8:30-
        </Text>
        <Text fontSize="20px" paddingBottom="18px">
          Ring Ceremony
        </Text>
        <Text fontSize="32px" paddingBottom="2px">
          -11:30-
        </Text>
        <Text fontSize="20px" paddingBottom="18px">
          Wedding Ceremony
        </Text>
        <Text fontSize="32px" paddingBottom="2px">
          -13:00-
        </Text>
        <Text fontSize="20px" paddingBottom="18px">
          Lunch
        </Text>
        <Text fontSize="32px" paddingBottom="2px">
          -16:45-
        </Text>
        <Text fontSize="20px">
          The Bride's Farewell
        </Text>
      </Page2Container>
    </Page2Wrapper>
  );
};
