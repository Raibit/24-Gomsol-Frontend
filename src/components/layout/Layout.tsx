import { ReactNode } from "react"
import Div100vh from "react-div-100vh"
import styled from "styled-components"
import { Main } from "./Main"
import { SideMenu } from "./SideMenu"

const Frame = styled.div`
  display: flex;
  height: 100%;
`

interface LayoutProps {
  readonly children: ReactNode;
  readonly selected: string;
}

export function Layout(props: LayoutProps) {
  return <Div100vh>
    <Frame>
      <SideMenu selected={props.selected}/>
      <Main>
        {props.children}
      </Main>
    </Frame>
  </Div100vh>
}