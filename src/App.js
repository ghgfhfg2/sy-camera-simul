import "./base.css";
import "./App.css";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

import styled from "styled-components";
const Wrapper = styled.div`
  width: 100%;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <Body />
      <Footer />
    </Wrapper>
  );
}

export default App;
