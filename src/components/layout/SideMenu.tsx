import styled from "styled-components";
import { SideMenuButton } from "./SideMenuButton";

const SideMenuFrame = styled.div`
  width: 240px;
  height: 100%;

  background-color: #fff;
  border-radius: 10px;
`

export function SideMenu(props: { selected: string }) {
  return <SideMenuFrame>
    <SideMenuButton path="information" selected={props.selected}>소개</SideMenuButton>
    <SideMenuButton path="rules" selected={props.selected}>규칙</SideMenuButton>
    <SideMenuButton path="reserve" selected={props.selected}>예약</SideMenuButton>
  </SideMenuFrame>
}