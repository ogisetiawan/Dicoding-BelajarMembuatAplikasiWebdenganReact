import React from "react";
import { createRoot } from "react-dom/client";

//? component fungsi untuk show data count sesuai event
function CounterDisplay({ count }) {
  return <p>{count}</p>;
}

//? component button
function IncraseButton({ increase }) {
  return (
    <div>
      <button onClick={increase}>+ Button increase</button>
    </div>
  );
}
function ResetButton({ reset }) {
  return (
    <div>
      <button onClick={reset}>- Button Reset</button>
    </div>
  );
}

class CounterApp extends React.Component { //? class react Component
  constructor(props) {
    super(props); //? wajib menggunakan super(props)
    console.log("Component created!");

    //? inisialisasi nilai count di dalam state
    this.state = { //? nilai state (count) tersimpan
      count: 0,
    };

    //?  binding event handler
    this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
    this.onResetEventHandler = this.onResetEventHandler.bind(this);
  }
  

  //? event Handler
  onIncreaseEventHandler() {
    this.setState((previousState) => { //? previousState adalah default
      return {
        count: previousState.count + 1,
      };
    });
  }
  onResetEventHandler() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }

  render() {
    //? call component function
    return  <div>
    <IncraseButton increase={this.onIncreaseEventHandler} />
    <CounterDisplay count={this.state.count} />
    <ResetButton reset={this.onResetEventHandler} />
  </div>
  }
}

const root = createRoot(document.getElementById("root"));
root.render(<CounterApp />); //? render class/function
