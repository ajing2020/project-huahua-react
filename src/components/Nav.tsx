import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import React from 'react'
import Icon from './Icon'

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;
    > li {
      text-align: center;
      width: 33.3333%;
      > a {
        display: flex;
        padding: 4px 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .icon {
          width: 24px;
          height: 24px;
        }
        &.selected {
          color: red;
          .icon {
            fill: red;
          }
        }
      }
    }
  }
`

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink activeClassName="selected" to="/tags">
            <Icon name="tag" />
            标签
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/money">
            <Icon name="money" />
            记账
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/statistics">
            <Icon name="chart" />
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav
