import React from "react";
import styled from "styled-components";
const HeaderComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .logo {
    width: 100%;
    max-width: 500px;
    padding: 20px;
    img {
      width: 100%;
    }
  }
  border-bottom: 1px solid #ddd;
`;

export default function Header() {
  return (
    <HeaderComponent>
      <div className="logo">
        <img src="images/logo.png" />
      </div>
    </HeaderComponent>
  );
}
