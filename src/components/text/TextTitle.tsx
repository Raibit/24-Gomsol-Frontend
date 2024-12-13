import { ReactNode } from "react";
import styled from "styled-components";

const Text = styled.div`
  font-size: 28pt;
  font-weight: 800;
  margin-bottom: 20px;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export function TextTitle(props: { children: ReactNode }) {
  return <Text>{props.children}</Text>
}