import { ReactNode } from "react";
import styled from "styled-components";

interface SideMenuButtonProps {
  readonly children: ReactNode
  readonly path: string
  readonly selected: string
}

const SideMenuButtonFrame = styled.a`
  width: 100%;
  height: 50px;

  border-radius: 10px;
  box-shadow: 0 0 24px #0004;

  font-size: 18pt;
  font-weight: 600;
  text-align: center;
  text-decoration: none;

  display: inline-flex;
  justify-content: center;
  flex-direction: column;
  vertical-align: center;
`

const Unselected = styled(SideMenuButtonFrame)`
  background: #fff;
  color: #000062;
  &:hover {
    background: #000062;
    color: white;
    transition: all ease-out 0.2s;
  }
`
const Selected = styled(SideMenuButtonFrame)`
    background: #000062;
    color: white;
`

export function SideMenuButton(props: SideMenuButtonProps) {
  return props.selected === props.path
    ? <Selected href={props.path}>{props.children}</Selected>
    : <Unselected href={props.path}>{props.children}</Unselected>
}