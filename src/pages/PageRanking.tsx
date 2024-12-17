import { useEffect, useState } from "react";
import { Team } from "../api/model";
import { getTeams } from "../api/teams";
import { Layout } from "../components/layout/Layout";
import { TextLine } from "../components/text/TextLine";
import { TextTitle } from "../components/text/TextTitle";


export function PageRanking() {
  const [teams, setTeams] = useState<Team[] | null>(null);
  useEffect(() => { getTeams().then(res => setTeams(res.data)) }, [])

  return <Layout selected="ranking">
    <TextTitle>아직 시작하지 않았어요.</TextTitle>
    <TextLine>
      현재까지 <strong>{teams?.length}</strong>팀이 예약했습니다. 
    </TextLine>
  </Layout>
}