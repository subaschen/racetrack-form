import { useContext } from "react";
import { StepperContext, IStepperContext } from "../../context/stepperContext";

export const useStepper = <T, S>(): IStepperContext<T, S> => {
    const context = useContext(StepperContext);
    if(context === undefined) {
        throw new Error("useStepper must be used within a StepperProvider");
    }
    return context;
}