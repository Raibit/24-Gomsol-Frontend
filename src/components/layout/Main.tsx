import { ReactNode } from "react";
import styled from "styled-components";

const MainFrame = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;

  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  margin-left: 10px;

  background-color: #fff;
  border-radius: 10px;
  
  flex-shrink: 1;
`

export function Main(props: { children?: ReactNode }) {
  return <MainFrame>
    {props.children}
  </MainFrame>
}