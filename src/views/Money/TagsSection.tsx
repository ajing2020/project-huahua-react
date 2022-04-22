import styled from 'styled-components'

import React, { useState } from 'react'

const Wapper = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  > ol {
    margin: 0 -12px;
    > li {
      background: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
    }
    & .selected {
      background: #929292;
    }
  }
  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`

const TagsSection: React.FC = (props) => {
  const [tags, setTages] = useState<string[]>(['衣', '食', '住', '行'])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const onAddTag = () => {
    const tagName = window.prompt('新标签名字为？')
    if (tagName !== '') {
      setTages([...tags, tagName])
    }
  }
  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag)

    if (index >= 0) {
      //如果被选中就抛弃 寻找没有被选中的更新
      setSelectedTags(selectedTags.filter((t) => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }
  const isSelected = (tag) => (selectedTags.indexOf(tag) >= 0 ? 'selected' : '')

  return (
    <Wapper>
      <ol>
        {tags.map((tag) => (
          <li
            onClick={() => onToggleTag(tag)}
            key={tag}
            className={isSelected(tag)}
          >
            {tag}
          </li>
        ))}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wapper>
  )
}

export { TagsSection }
