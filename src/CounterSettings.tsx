import React, { FC } from "react";
import { MaxMinInput } from "./MinMaxValueInput";
import { Button } from "./Button";
import { inputsValue } from "./App";

type CounterSettings = {
  onChangeInputsValue: (newValue: number, name: keyof inputsValue) => void;
  onChangeSetMode: () => void;
  inputsValue: inputsValue;
  minValueInputErrorMode: boolean;
  maxValueInputErrorMode: boolean;
};

const CounterSettings: FC<CounterSettings> = ({
  onChangeInputsValue,
  inputsValue,
  onChangeSetMode,
  minValueInputErrorMode,
  maxValueInputErrorMode,
}) => {
  const onChangeSetModeHandler = () => {
    onChangeSetMode();
  };

  return (
    <div className="counter">
      <div className="window">
        <MaxMinInput
          error={maxValueInputErrorMode}
          labelValue={"max value: "}
          name={"maxValue"}
          value={inputsValue.maxValue}
          onChangeInputsValue={onChangeInputsValue}
        />
        <MaxMinInput
          error={minValueInputErrorMode}
          labelValue={"min value: "}
          name={"minValue"}
          value={inputsValue.minValue}
          onChangeInputsValue={onChangeInputsValue}
        />
      </div>
      <div className="buttons">
        <Button onClick={onChangeSetModeHandler}>set</Button>
      </div>
    </div>
  );
};

export default CounterSettings;
