import React from 'react'
import './Categories.scss'
import styled,{css} from 'styled-components'
import {NavLink} from "react-router-dom";

const categoryList=[
    {
        name:'all',
        text:'전체보기'
    },
    {
        name:'business',
        text:'비즈니스'
    },
    {
        name:'entertainment',
        text:'엔터테인먼트'
    },
    {
        name:'health',
        text:'건강'
    },
    {
        name:'science',
        text:'과학'
    },
    {
        name:'sports',
        text:'스포츠'
    },
    {
        name:'technology',
        text:'기술'
    }
]

const Category=styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover{
    color: #495057;
  }
  &.active{
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color:#22b8cf;
    &:hover{
      color:#3bc9db
    }
  }
  &+&{
    margin-left:1rem;
  }
`;

const Categories =()=>{
    return(
        <div className='Categories'>
            {categoryList.map(c=>
                <Category
                    key={c.name} activeClassName="active" exact={c.name==='all'} to={c.name==='all'?'/':`/${c.name}`}>{c.text}</Category> )

            }
        </div>
    )
}

export default Categories