import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page } from "./components/Page/Page";
import { AppStyled } from "./styled";
import { LoadPage } from "./components/LoadPage";

import Image1 from "./images/image1.png";
import Image2 from "./images/image2.png";
import Image3 from "./images/image_3.jpg";
import Image4 from "./images/image4.png";
import Image5 from "./images/image_5.jpg";

import { Page1, Page2, Page3, Page4, Page5 } from "./components/Pages";

const configValue: string = process.env.REACT_APP_WEDDING_INVITE as string;

let pages = [
  {
    img: Image1,
    content: <Page1 />
  },
  {
    img: Image2,
    content: <Page2 />
  },
  {
    img: Image3,
    content: <Page3 />
  },
  {
    img: Image4,
    content: <Page4 />
  },
  {
    img: Image5,
    content: <Page5 />
  }
];

const receptionPages = [
  {
    img: Image1,
    content: <Page1 />
  },
  {
    img: Image4,
    content: <Page4 />
  },
  {
    img: Image5,
    content: <Page5 />
  }
];

export const App = () => {
  const [loading, setLoading] = useState(true);
  if (configValue === '0') {
    pages = receptionPages;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/wedding-invite" element={
          <AppStyled>
            {loading && <LoadPage />}
            {pages.map((page, index) => (
              <Page setLoading={setLoading} key={index} index={index} page={page}></Page>
            ))}
          </AppStyled>
        }>
        </Route>
      </Routes>
    </BrowserRouter>

  );
};
