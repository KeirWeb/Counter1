import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import CounterSettings from "./CounterSettings";

export type inputsValue = {
  maxValue: number;
  minValue: number;
};
export type error = {
  maxValueError: boolean;
  minValueError: boolean;
};

function App() {
  const [counter, setCounter] = useState<number>(0);

  const [inputsValue, setInputsValue] = useState<inputsValue>({
    maxValue: 1,
    minValue: 0,
  });
  const { maxValue, minValue } = inputsValue;

  const [setMode, setSetMode] = useState<boolean>(false);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const resetValue = () => {
    setCounter(inputsValue.minValue);
  };

  const onChangeInputsValue = (newValue: number, name: keyof inputsValue) => {
    if (!setMode) {
      setSetMode(true);
    }
    setInputsValue({ ...inputsValue, [name]: newValue });
  };

  const onChangeSetMode = () => {
    setSetMode(false);
    resetValue();
  };

  const errorMode = minValue < 0 || maxValue < 1 || maxValue <= minValue;
  const minValueInputErrorMode = minValue < 0 || maxValue <= minValue;
  const maxValueInputErrorMode = maxValue < 1 || maxValue <= minValue;

  return (
    <div className="App">
      <Counter
        error={errorMode}
        setMode={setMode}
        counter={counter}
        incrementCounter={incrementCounter}
        resetValue={resetValue}
        inputsValue={inputsValue}
      />
      <CounterSettings
        onChangeSetMode={onChangeSetMode}
        inputsValue={inputsValue}
        minValueInputErrorMode={minValueInputErrorMode}
        maxValueInputErrorMode={maxValueInputErrorMode}
        onChangeInputsValue={onChangeInputsValue}
      />
    </div>
  );
}

export default App;
