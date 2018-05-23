import React from 'react'

function LiItem(props){
  return <li>{props.number}</li>
}

function LiList(props){
  let numbers = props.numbers;
  let listItems = numbers.map((number) =>
    <LiItem number= {number} key={number.toString()} />
  )
  return (
    <ul>
      {numbers.map((number) =>
         <LiItem number= {number} key={number.toString()} />
      )}
    </ul>
  )
}

export default LiList;
