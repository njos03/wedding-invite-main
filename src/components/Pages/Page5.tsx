import React from "react";
import { Page3Wrapper, Page2Container, MapStyled } from "./styled";
import { Text } from "../Text";

export const Page5: React.FC = () => {
  const defaultProps = {
    address: 'Shree Pancham Thal, Empire Business Hub 1st Floor, Science City Road,NR AUDA Water Tank, Sola, Ahmedabad, Gujarat 380060',
    center: {
      lat: 22.5505425,
      lng: 72.9179195
    },
    zoom: 11
  };
  return (
    <Page3Wrapper>
      <MapStyled src="https://maps.google.com/maps?q=23.0732051,72.513365&z=16&output=embed">
      </MapStyled>
      <Page2Container>
        <Text fontSize="18px" fontWeight="bold" paddingBottom="18px">
          Reception Location
        </Text>
        <Text fontSize="16px" fontWeight="bold" paddingBottom="18px">
          {defaultProps.address}
        </Text>
        <a href="https://maps.app.goo.gl/AvEMgwyr1oQSAsTAA" rel="noreferrer" target="_blank">
            Open in Google Maps.
        </a>
      </Page2Container>
    </Page3Wrapper>
  );
};
