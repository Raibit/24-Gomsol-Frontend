import styled from "styled-components"
import { Layout } from "../components/layout/Layout"
import { TextLine } from "../components/text/TextLine"

const Video = <iframe frameBorder="0" width="100%" height="100%" src=" https://youtube.com/embed/v7bqPftZFqQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
const VideoFrame = styled.div`
  width: 100%;
  height: min(60%, 40vw);
  border-radius: 10px;
  margin-bottom: 10px;
  overflow: hidden;
`

const Warning = styled.div`
  width: calc(100% - 10px);
  height: auto;
  padding: 5px;
  padding-bottom: 0;
  margin-bottom: 10px;

  background-color: #fff4d9;
  border: 3px solid #ffc02e;
  border-radius: 10px;
  color: #ffc02e;
`

export function PageInformation() {
  return <Layout selected="information">
    <VideoFrame>{Video}</VideoFrame>
    <Warning>
      <TextLine>(!) 공포 테마의 체험이므로, 체험 참가에 주의해주세요.</TextLine>
    </Warning>
    <TextLine>체험에 앞서 대탈출 {"<"}어둠의 별장{">"} 편을 보고 오시면 적응하기 쉽습니다.</TextLine>
    <TextLine>체험을 즐겨주시되 어두운 환경이니만큼 위험한 행동은 삼가해주세요.</TextLine>
    <TextLine>체험 시간에 늦으시면 활동 시간이 줄어드니 반드시 시간을 준수해주세요.</TextLine>
    <TextLine>소품들, 특히 '활'은 직접 제작했기 때문에 무리하게 다루지 말아주세요.</TextLine>
  </Layout>
}