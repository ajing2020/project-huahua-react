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

  return (
    <MyLayout>
      <TagsSection
        selected={selected.tags}
        onChange={(tags) => setSelected({ ...selected, tags })}
      />
      <NoteSection
        note={selected.note}
        onChange={(note) => setSelected({ ...selected, note })}
      />
      <CategorySection
        category={selected.category}
        onChange={(category) => setSelected({ ...selected, category })}
      />
      <NumberPadSection
        amount={selected.amount}
        onChange={(amount) => setSelected({ ...selected, amount })}
        onOk={() => {}}
      />
    </MyLayout>
  )
}

export default Money
