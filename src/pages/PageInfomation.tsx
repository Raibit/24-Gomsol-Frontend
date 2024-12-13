import styled from "styled-components"
import { Layout } from "../components/layout/Layout"

const Video = <iframe frameBorder="0" width="100%" height="100%" src="https://www.youtube.com/embed/n6WaTObHRJM?si=e8fZw08BSm7JxugX" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
const VideoFrame = styled.div`
  width: 100%;
  height: 80%;
  border-radius: 10px;
  overflow: hidden;
`

export function PageInformation() {
  return <Layout selected="information">
    <VideoFrame>{Video}</VideoFrame>
  </Layout>
}