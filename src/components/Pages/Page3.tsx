import React from "react";
import { Page3Wrapper, Page2Container, MapStyled } from "./styled";
import { Text } from "../Text";

export const Page3: React.FC = () => {
  const defaultProps = {
    address: '5 Tulsi Shyam Society, Behind Sardar Patel Society, Near Gangabaa Panchal Chhatralay, Karamsad Rd, Nandanvan, Vallabh Vidyanagar, Anand, Gujarat 388120',
    center: {
      lat: 22.5505425,
      lng: 72.9179195
    },
    zoom: 11
  };
  return (
    <Page3Wrapper>
      <MapStyled src="https://maps.google.com/maps?q=22.5505425,72.9179195&z=16&output=embed">
      </MapStyled>
      <Page2Container>
        <Text fontSize="18px" fontWeight="bold" paddingBottom="18px">
          Wedding Location
        </Text>
        <Text fontSize="16px" fontWeight="bold" paddingBottom="18px">
          {defaultProps.address}
        </Text>
        <a href="https://maps.app.goo.gl/JcD3iPrALzASyrxDA" rel="noreferrer" target="_blank">
            Open in Google Maps.
        </a>
      </Page2Container>
    </Page3Wrapper>
  );
};
