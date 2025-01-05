// FormWizard/index.jsx
import { useState, useContext } from 'react';
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
import { schema } from '../ConfigurationForm/schema';
import { uiSchema } from '../ConfigurationForm/uiSchema';
import { useFormContext } from '../../context/formContext';
import { QBOAuthWidget } from './widgets/QBOAuthWidget';

// Split your existing schema into steps
const steps = [
    {
        id: "auth",
        title: "QuickBooks Authentication",
        schema: {
            type: "object",
            properties: {
                quickbooks: schema.properties.connectQuickbooks
            }
        },
        uiSchema: {
            quickbooks: uiSchema.connectQuickbooks
        }
    },
    {
    "id": "integration",
    "title": "Configure Integration", 
    "schema": {
      "type": "object",
      "properties": {
        "configureIntegration": schema.properties.configureIntegration
      },
      "definitions": schema.definitions
    },
    "uiSchema": {
      "configureIntegration": uiSchema.configureIntegration
    }
  },
  {
    "id": "tracking",
    "title": "Tracking Settings",
    "schema": {
      "type": "object", 
      "properties": {
        "trackingSection": schema.properties.trackingSection
      },
      "definitions": schema.definitions
    },
    "uiSchema": {
      "trackingSection": uiSchema.trackingSection
    }
  }
];

const widgets = {
    QBOAuthWidget
};

export const FormWizard = () => {
    const { currentStep, formData, setFormData, setStep } = useFormContext();

    const uiSchema = {
        ...steps[currentStep].uiSchema,
        ...(currentStep === 0 && {
            "ui:widget": QBOAuthWidget
        })
    };

    const handleStepSubmit = ({ formData: stepData }) => {
        setFormData(stepData);
        if (currentStep === steps.length - 1) {
            console.log('Final Form Data:', stepData);
        } else {
            setStep(currentStep + 1);
        }
    };

    return (
        <div>
            <div className="wizard-progress">
                {steps.map((step, index) => (
                    <div
                        key={step.id}
                        className={`step ${index === currentStep ? 'active' : ''}`}
                    >
                        {step.title}
                    </div>
                ))}
            </div>
            <Form
                schema={steps[currentStep].schema}
                uiSchema={steps[currentStep].uiSchema}
                validator={validator}
                widgets={widgets}
                formData={formData}
                onChange={e => setFormData(e.formData)}
                onSubmit={handleStepSubmit}
            >
                <div className="wizard-buttons">
                    {currentStep > 0 && (
                        <button type="button" onClick={() => setStep(currentStep - 1)}>Previous</button>
                    )}
                    <button type="submit">
                        {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
                    </button>
                </div>
            </Form>
        </div>
    );
};