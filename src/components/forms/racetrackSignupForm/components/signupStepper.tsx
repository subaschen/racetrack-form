import React, { useState } from "react";
import { useSignupStepper } from "../hooks/useRacetrackSignupStepper";
import { Stepper } from "../../../stepper/stepper";
import { StepperProvider } from "../../../../context/stepperContext";

const Introduction = () => {
  const { navigateTo } = useSignupStepper();
  return (
    <div>
      <p>Welcome to the form!</p>
      <button onClick={() => navigateTo("PersonalInfo")}>Next</button>
    </div>
  );
};

const PersonalInfo = () => {
  const { navigateTo, handleSetData, data } = useSignupStepper();

  const handleNext = () => {
    if (age >= 18) {
      navigateTo("Address");
    } else {
      navigateTo("Confirmation");
    }
  };

  return (
    <div>
      <p>Please enter your personal information:</p>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => handleSetData({ name: e.target.value})}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => handleSetData({ age: e.target.value})}
      />
      <button onClick={handleNext}>Next</button>
      <button onClick={() => navigateTo("Introduction")}>Back</button>
    </div>
  );
};

const Address = () => {
  const { navigateTo, handleSetData, data } = useSignupStepper();

  const handleNext = () => {
    navigateTo("Summary");
  };

  return (
    <div>
      <p>Where do you live?</p>
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => handleSetData({ address: e.target.value})}
      />
      <button onClick={handleNext}>Next</button>
      <button onClick={() => navigateTo("PersonalInfo")}>Back</button>
    </div>
  );
};

const Summary = () => {
  const { data, navigateTo } = useSignupStepper();

  const handleBack = () => {
    if (data.age < 18) {
      navigateTo("PersonalInfo");
    } else {
      navigateTo("Address");
    }
  };

  return (
    <div>
      <p>Heres a summary of your information:</p>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
      <p>Address: {data.address}</p>
      <button onClick={() => navigateTo("Confirmation")}>Submit</button>
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

const Confirmation = () => {
  const { navigateTo } = useSignupStepper();
  return (
    <div>
      <p>Thank you! Youve completed the form.</p>
      <button onClick={() => navigateTo("Introduction")}>Restart</button>
    </div>
  );
};

// Define the steps for the stepper
const steps = [
  { label: "Introduction", content: <Introduction /> },
  { label: "PersonalInfo", content: <PersonalInfo /> },
  { label: "Address", content: <Address /> },
  { label: "Summary", content: <Summary /> },
  { label: "Confirmation", content: <Confirmation /> },
];

// Use the StepperProvider to wrap your stepper
export const StepperExample = () => (
  <StepperProvider
    initialData={{ name: "", age: null, address: "" }} // Set initial form data
    steps={steps}
  >
    <Stepper />
  </StepperProvider>
);