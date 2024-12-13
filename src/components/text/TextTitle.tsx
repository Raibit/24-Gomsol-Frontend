import { ReactNode } from "react";
import styled from "styled-components";

const Text = styled.div`
  font-size: 28pt;
  font-weight: 800;
  margin-bottom: 20px;
`

export function TextTitle(props: { children: ReactNode }) {
  return <Text>{props.children}</Text>
}