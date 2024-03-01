import React from "react";
import styled from "styled-components";
const FooterComponent = styled.div`
  padding: 20px;
  border-top: 1px solid #ddd;
  text-align: center;
  font-size: 12px;
  color: #777;
`;

export default function Footer() {
  return (
    <FooterComponent>
      copyright 2024. sooya all rights reserved.
    </FooterComponent>
  );
}
