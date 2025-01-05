import { createContext, ReactNode, useState } from "react";

export interface IStepperContext<T, S> {
    activeStep: number;
    setActiveStep: (step: number) => void;
    navigateTo: (id: IStep<S>["label"]) => void;
    handleSetData: (partial: Partial<T>) => void;
    data: T;
    steps: IStep<S>[];
    //getVisibleSteps: () => typeof formSteps;
    //isStepValid: (stepId: string) => boolean;
    //updateFormData: (property: Partial<FormData>) => void;

  }
  
  interface IStepperProviderProps<T, S> {
    children: ReactNode;
    initialData: T;
    steps: IStep<S>[];
  }

  export interface IStep<S> {
      label: S;
      content: React.ReactNode;
  }

  export const StepperContext = createContext<IStepperContext<any, any> | undefined>(undefined);

  export const StepperProvider = <T, S extends string>({
    children, 
    initialData,
    steps,
  }: IStepperProviderProps<T, S>) => {
    const [activeStep, setActiveStep] = useState<number>(0);
    const [data, setData] = useState<T>(initialData);

    const handleSetData: IStepperContext<T, S>["handleSetData"] = (partial) =>
        setData((prev) => ({ ...prev, ...partial }))
    
        const navigateTo = (id: IStep<S>["label"]) => {
            setActiveStep(steps.findIndex((step) => step.label === id));
        };

    return (
        <StepperContext.Provider 
            value={{
                activeStep,
                setActiveStep,
                navigateTo,
                data,
                handleSetData,
                steps,
            }}
        >
            {children}
        </StepperContext.Provider>
    );
  };