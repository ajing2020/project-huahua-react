import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
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
const NoteSection: React.FC = () => {
  const [note, setNote] = useState<string>('')
 
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input
          onChange={(e) => setNote(e.target.value)}
          value={note}
          type="text"
        />
      </label>
    </Wrapper>
  )
}

export { NoteSection }
