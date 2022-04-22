import Layout from '../components/Layout'
import React, { useState } from 'react'
import styled from 'styled-components'

import { TagsSection } from './Money/TagsSection'
import { NoteSection } from './Money/NoteSection'
import { CategorySection } from './Money/CategorySection'
import { NumberPadSection } from './Money/NumberPadSection'

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

function Money() {
  const [selected, setSelected] = useState({
    tags: [] as string[],
    note: '',
    category: '-' as '-' | '+',
    amount: '0'
  })
  console.log(selected)
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({ ...selected, ...obj })
  }

  return (
    <MyLayout>
      <TagsSection
        selected={selected.tags}
        onChange={(tags) => onChange({ tags })}
      />
      <NoteSection
        note={selected.note}
        onChange={(note) => onChange({ note })}
      />
      <CategorySection
        category={selected.category}
        onChange={(category) => onChange({ category })}
      />
      <NumberPadSection
        amount={selected.amount}
        onChange={(amount) => onChange({ amount })}
        onOk={() => {}}
      />
    </MyLayout>
  )
}

export default Money
