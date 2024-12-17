import { ChangeEvent, FormEventHandler, useState } from "react"
import styled from "styled-components"
import { getDefaultUser, User } from "../api/model"
import { postReserves, ReserveResponse } from "../api/teams"
import { Layout } from "../components/layout/Layout"
import { TextLine } from "../components/text/TextLine"
import { TextTitle } from "../components/text/TextTitle"

const Input = styled.input`
  display: inline;
  width: 100%;
  height: 100%;

  border-radius: 20px;
  border: 4px solid #ddd;
  outline: none;

  margin-left: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
  
  font-size: 14pt;

  &:focus {
    border: 4px solid #000062;
  }

  &::placeholder {
    color: #999;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  vertical-align: middle;
  line-height: 220%;
  color: #000062;
`

const Button = styled.button`
  width: 100%;
  
  color: #000062;
  background-color: white;

  border: 4px solid #000062;
  border-radius: 20px;

  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;

  line-height: 180%;

  text-align: center;
  font-weight: 800;
  font-size: 14pt;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  
  &:hover {
    background: #000062;
    color: white;
    transition: all ease-out 0.2s;

    cursor: pointer;
  }
  
`

type changeHandler = (event: ChangeEvent<HTMLInputElement>, index: number) => void

function InputLine(props: { index: number, players: User[], numberHandler: changeHandler, nameHandler: changeHandler }) {
  return <Row>
    <TextLine>{props.index ? "팀원" : "팀장"}</TextLine>
    <Input 
        value={props.players[props.index].id}
        type="number" 
        placeholder="학번" 
        name={`number-${props.index}`} 
        onChange={e => props.numberHandler(e, props.index)} 
      />
    <Input 
      value={props.players[props.index].name}
      placeholder="이름" 
      name={`name-${props.index}`} 
      onChange={e =>props.nameHandler(e, props.index)} 
    />
  </Row>
}

export function PageReserve() {
  const [players, setPlayers] = useState<User[]>(new Array(4).fill(0).map(_ => getDefaultUser()))

  function updateNumberHandler(event: ChangeEvent<HTMLInputElement>, index: number) {
    const updated = [...players]
    const parsed = parseInt(event.target.value)
    updated[index].id = Number.isNaN(parsed) ? 0 : parsed;
    setPlayers(updated)
  }

  function updateNameHandler(event: ChangeEvent<HTMLInputElement>, index: number) {
    const updated = [...players]
    updated[index].name = event.target.value;
    setPlayers(updated)
  }

  function increaseHandler() {
    if (players.length < 6) {
      setPlayers([...players, getDefaultUser()])
    }
  }

  function decreaseHandler() {
    if (players.length > 4) {
      const updated = [...players]
      updated.pop()
      setPlayers(updated)
    }
  }

  const reserve: FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault()
    const result = await postReserves({ members: players })
    switch (result) {
      case ReserveResponse.OUTLIER: return alert("예약에 실패했습니다.\n잘못된 학번이나 이름을 입력하지 않았는지 확인하세요.")
      case ReserveResponse.DUPLICATED: return alert("예약에 실패했습니다.\n구성원 중에 이미 예약된 사람이 있습니다.")
      case ReserveResponse.CREATED: return alert("예약을 성공했습니다!")
      case ReserveResponse.ERROR: return alert("알 수 없는 오류가 발생했습니다.")
    }
  }

  return <form onSubmit={reserve}>
    <Layout selected="reserve">
      <TextTitle>예약(4-6인)</TextTitle>
      <Row>
        <Button type="button" onClick={increaseHandler}>+ 팀원 추가</Button>
        <Button type="button" onClick={decreaseHandler}>- 팀원 제거</Button>
        </Row>
        {new Array(players.length).fill(0).map((_, index) => 
          <InputLine 
            index={index} 
            key={index} 
            players={players} 
            numberHandler={updateNumberHandler} 
            nameHandler={updateNameHandler}
          ></InputLine>
        )}
        <Row>
          <Button type="submit">예약하기!</Button>
        </Row>
    </Layout>
  </form>
}