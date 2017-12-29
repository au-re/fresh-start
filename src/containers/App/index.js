import "./App.css";

import React, { Component } from "react";

import AsyncWrapper from "../../components/AsyncWrapper";
import Button from "../../components/Button";
import logo from "./logo.svg";
import { setTimeout } from "timers";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Button>hi there</Button>
        <Button primary>hi there</Button>
        <AsyncWrapper
          promise={new Promise((resolve, reject) => setTimeout(() => resolve(), 4000))}
          resolve={<Button>async</Button>}
          loading={<Button disabled>loading...</Button>}
          error={<Button disabled>error</Button>}
        />
      </div>
    );
  }
}

export default App;
