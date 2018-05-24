import React from 'react'

function FancyBorder(props){
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function Contacts(){
  return <div>我是 left</div>
}

function Chat(){
  return <div>我是 right</div>
}

function SplitPana(props){
  return (
    <div>
      {props.left}
      {props.right}
    </div>
  )
}

function WelcomeDialog(){
  return (
    <div>
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          Welcome
        </h1>
        <p className="Dialog-message">
          Thank you for visiting our spacecraft!
        </p>
      </FancyBorder>
      <SplitPana
        left={<Contacts />}
        right={<Chat />}
      />
    </div>

  )
}

export default WelcomeDialog;
