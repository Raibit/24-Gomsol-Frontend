import Div100vh from "react-div-100vh"
import styled from "styled-components"
import { TextLine } from "../components/text/TextLine"
import { TextTitle } from "../components/text/TextTitle"

const Frame = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  vertical-align: middle;
  text-align: center;
  color: #fff;
`

const To = styled.a`
  color: inherit;
  text-decoration: none;
`

export function Page404() {
  return <Div100vh>
    <Frame>
      <TextTitle>페이지를 찾을 수 없어요.</TextTitle>
      <TextLine>
        <To href="information">메인 페이지로 이동하기</To>
      </TextLine>
    </Frame>
  </Div100vh>
}