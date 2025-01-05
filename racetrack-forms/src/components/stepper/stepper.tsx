import { useStepper } from "./useStepper";

export const Stepper = <T, S extends string>() => {
    const {activeStep, steps } = useStepper<T, S>();

    return (
        <div className="flex h-full flex-col justify-center gap-10">
            <section className="flex items-center justify-center">
                {steps[activeStep]?.content}
            </section>
        </div>
    );
};