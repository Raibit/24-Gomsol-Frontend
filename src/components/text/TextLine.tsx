import { ReactNode } from "react";
import styled from "styled-components";

const Text = styled.div`
  font-size: 18pt;
  font-weight: 300;
  margin-bottom: 10px;
`

export function TextLine(props: { children: ReactNode }) {
  return <Text>{props.children}</Text>
}