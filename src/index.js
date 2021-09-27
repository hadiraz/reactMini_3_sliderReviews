import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./assets/index.css"

function Index() {
  return (
    <App/>
  )
}

export default Index

ReactDOM.render(
    <Index />
  ,
  document.getElementById('root')
);

