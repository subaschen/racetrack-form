import { useState, createContext, useContext } from 'react'
import './App.css'
import { ConfigurationForm } from './components/ConfigurationForm'
import { FormWizard } from './components/FormWizard'

export const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const store = {
    currentStep,
    formData,
    setStep: (step) => setCurrentStep(step),
    setFormData: (newData) => setFormData(prev => ({ ...prev, ...newData })),
    resetForm: () => {
      setCurrentStep(0);
      setFormData({});
    }
  };
  
  return (
    <FormContext.Provider value={store}>
      {children}
    </FormContext.Provider>
  );
};

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
}

function App() {

  return (
    <div className="App">
      <FormProvider>
        <FormWizard />
      </FormProvider>
    </div>
  )
}

export default App

