import { useEffect, useState } from "react";
import styled from "styled-components";
import { Team } from "../api/model";
import { Layout } from "../components/layout/Layout";
import { TextLine } from "../components/text/TextLine";
import { TextTitle } from "../components/text/TextTitle";
import rank from "./rank.json";


function getRankColor(index: number) {
  return ["#705c0d", "#595f78", "#451917", "#000062a0"][Math.min(3, index)]
}


const LineFrame = styled.div<{ index: number}>`
  width: 100%;
  height: 50px;

  background: linear-gradient(to right, ${props => getRankColor(props.index)}, #fff 150px);

  border-radius: 10px;
  box-shadow: 0 0 24px #0004;
  overflow: hidden;
  
  display: flex;
  flex-direction: row;
`

const RankIndex = styled.div`
  width: 36px;
  height: 100%;

  color: #fff;
  font-size: 24pt;
  font-weight: 800;

  display: inline-flex;
  justify-content: center;
  flex-direction: column;
  vertical-align: center;
  text-align: right;
`

const RankSubstring = styled.div`
  width: 20px;
  height: 100%;

  color: #fff;
  font-size: 12pt;
`

const Members = styled.div`
  margin-left: 80px;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
`

const MemberFrame = styled.div`
  margin-left: 20px;

  display: flex;
  flex-direction: column;
  vertical-align: middle;
  justify-content: center;
`

const MemberNumber = styled.div`
  letter-spacing: 10px;
  font-size: 10pt;
  color: #999;
`

const MemberName = styled.div`
  font-size: 18pt;
  line-height: 75%;
  margin-bottom: 10px;
  font-weight: 800;
`

const Score = styled.div<{ index: number }>`
  color: ${props => getRankColor(props.index)};
  font-size: 24pt;
  line-height: 75%;
  margin-bottom: 10px;
  font-weight: 800;

  display: inline-flex;
  justify-content: center;
  flex-direction: column;
  vertical-align: center;
  text-align: right;
`

const ScoreText = styled(Score)`
  font-size: 10pt;
  font-weight: 200;
  margin-right: 20px;
`

function getSubstring(number: number) {
  if (number % 10 === 1) return "st";
  if (number % 10 === 2 && Math.floor(number / 10) % 10 !== 1) return "nd";
  if (number % 10 === 3 && Math.floor(number / 10) % 10 !== 1) return "rd";
  return "th";
}

function RankLine(props: { index: number, team: Team }) {
  return <LineFrame index={props.index} key={props.index}>
    <RankIndex>{props.index + 1}</RankIndex>
    <RankSubstring>{getSubstring(props.index + 1)}</RankSubstring>
    <Members>
      {props.team.members.map((member, index) => <MemberFrame key={`member-${props.index}-${index}`}>
        <MemberName>{member.name}</MemberName>
      </MemberFrame>)}
    </Members>
    <Score index={props.index}>{props.team.score ?? 0}</Score>
    <ScoreText index={props.index}>점</ScoreText>
  </LineFrame>
}

export function PageRanking() {
  const [teams, setTeams] = useState<Team[] | null>(null);
  useEffect(() => { 
    setTeams(rank as Team[])
    // getTeams().then(res => !res ? alert("랭킹 로딩에 실패했습니다.") : setTeams(res.data.sort((a, b) => (b.score ?? 0) - (a.score ?? 0)))) 
  }, [])

  return <Layout selected="ranking">
    <TextTitle>점수판</TextTitle>
    {!teams
      ? <TextLine>로딩 중...</TextLine>
      : <>
        <TextLine>
          현재까지 <strong>{teams?.length}</strong>팀이 예약했습니다. 
        </TextLine>
        {teams.map((team, index) => <RankLine index={index} team={team}></RankLine>)}
      </>}
  </Layout>
}