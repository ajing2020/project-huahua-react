import React from 'react'
import { Wrapper } from './NumberPadSection/Wrapper'

type Props = {
  onChange: (selected: string[]) => viod
  onOk: () => void
  amount: string
}

const NumberPadSection: React.FC<Props> = (props) => {
  const output = props.amount
  const onClickButtonWrapper = (e: React.MouseEvent<HTMLButtonElement>) => {
    switch (e.target.textContent) {
      case '删除':
        const newOutput =
          output.substr(0, output.length - 1).length === 0
            ? '0'
            : output.substr(0, output.length - 1)
        props.onChange(newOutput)
        break
      case '清空':
        props.onChange('0')
        break
      case 'OK':
        props.onOk('0')
        console.log('提交')

        break
      case '.':
        output === '0'
          ? props.onChange('0' + e.target.textContent)
          : output.length < 16
          ? props.onChange(output + e.target.textContent)
          : window.alert('您输入的金额太大了')

        break
      default:
        output === '0'
          ? props.onChange(e.target.textContent)
          : output.length < 16
          ? props.onChange(output + e.target.textContent)
          : window.alert('您输入的金额太大了')
    }
  }
  return (
    <Wrapper>
      <div className="output">{output}</div>
      <div className="pad clearfix" onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zero">0</button>
        <button className="dot">.</button>
      </div>
    </Wrapper>
  )
}

export { NumberPadSection }
