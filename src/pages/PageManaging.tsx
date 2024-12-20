import { useState } from "react"
import { postManaging } from "../api/teams"
import { TextLine } from "../components/text/TextLine"

export function PageManaging() {

  const [password, setPassword] = useState<string>("")
  const [leader, setLeader] = useState<string>("")
  const [score, setScore] = useState<string>("")

  return <form onSubmit={async () => {
    const res = await postManaging({
      password: password,
      leader: leader,
      score: score
    })
    alert(res)
  }}>
    <TextLine>점수 업데이트</TextLine>
    <input value={password} onChange={e => setPassword(e.target.value)} placeholder="관리자 비밀번호" type="password"></input>
    <input value={leader} onChange={e => setLeader(e.target.value)} placeholder="수정할 팀의 팀장 이름"></input>
    <input value={score} onChange={e => setScore(e.target.value)} placeholder="수정 후 점수" type="number"></input>
    <button type="submit">등록</button>
  </form>
}