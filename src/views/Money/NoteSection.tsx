import styled from 'styled-components'
import React from 'react'
import { Input } from '../../components/Input'

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 14px 16px;
  font-size: 14px;
  > label {
    display: flex;
    align-items: center;
    > span {
      margin-right: 16px;
      white-space: nowrap;
    }
    > input {
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
      outline: none;
    }
  }
`

type Props = {
  onChange: (note: string) => viod
  note: string
}

const NoteSection: React.FC<Props> = (props) => {
  const note = props.note

  return (
    <Wrapper>
      <label>
        <Input
          label="备注"
          type="text"
          value={note}
          onChange={(e) => props.onChange(e.target.value)}
          placeholder="请填写备注"
        />
      </label>
    </Wrapper>
  )
}

export { NoteSection }
