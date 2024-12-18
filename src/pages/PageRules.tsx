import { Layout } from "../components/layout/Layout"
import { TextLine } from "../components/text/TextLine"
import { TextTitle } from "../components/text/TextTitle"

export function PageRules() {
  return <Layout selected="rules">
    <TextTitle>규칙</TextTitle>
    <TextLine>-</TextLine>
  </Layout>
}