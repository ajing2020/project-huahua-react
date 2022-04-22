import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  font-size: 24px;
  > ul {
    display: flex;
    background: #c4c4c4;
    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after {
        content: '';
        display: block;
        height: 3px;
        background: #333;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`

const CategorySection: React.FC = () => {
  const categoryMap = { '-': '支出', '+': '收入' }
  type Keys = keyof typeof categoryMap
  const [categoryList] = useState<Keys[]>(['-', '+'])
  const [category, setCategory] = useState<string>('-') //+表示收入 -表示支出
  const isSelected = (type: string) => (category === type ? 'selected' : '')
  return (
    <Wrapper>
      <ul>
        {categoryList.map((type) => (
          <li
            className={isSelected(type)}
            key={type}
            onClick={() => setCategory(type)}
          >
            {categoryMap[type]}
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}

export { CategorySection }
