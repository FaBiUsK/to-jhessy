import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  overflow: hidden;
`;

export const Container = styled.div`
  width: 400px;
  height: 300px;
  position: relative;
  z-index: 100;
  -webkit-perspective: 1300px;
  perspective: 1300px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

export const Page = styled.div`
  position: absolute;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition-property: -webkit-transform;
  transition-property: transform;
  width: 50%;
  height: 100%;
  left: 50%;
  -webkit-transform-origin: left center;
  transform-origin: left center;
`;
