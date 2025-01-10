import React from 'react';
import { useForm } from '../context/signUpFormContext';
import { IntegrationType } from '../types/types';

const FormStep: React.FC = () => {
  const { currentStep, formData, updateFormData } = useForm();

  switch (currentStep) {
    case 0:
      return (
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Configure Integration</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Integration Type</span>
              </label>
              <select
                className="select select-bordered w-full"
                value={formData.integrationType || ''}
                onChange={(e) => updateFormData({ integrationType: e.target.value as IntegrationType })}
              >
                <option value="">Select integration type</option>
                <option value="dutchie">Dutchie</option>
                <option value="flowhub">Flowhub</option>
                <option value="canix">Canix</option>
              </select>
            </div>
          </div>
        </div>
      );
      
    case 1:
      return (
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Integration Settings</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">API Key</span>
              </label>
              <input
                type="password"
                className="input input-bordered w-full"
                value={formData.apiKey || ''}
                onChange={(e) => updateFormData({ apiKey: e.target.value })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Time Zone</span>
              </label>
              <select
                className="select select-bordered w-full"
                value={formData.timeZone || ''}
                onChange={(e) => updateFormData({ timeZone: e.target.value })}
              >
                <option value="">Select time zone</option>
                <option value="America/New_York">Eastern Time</option>
                <option value="America/Chicago">Central Time</option>
                <option value="America/Denver">Mountain Time</option>
                <option value="America/Los_Angeles">Pacific Time</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Accounting Basis</span>
              </label>
              <select
                className="select select-bordered w-full"
                value={formData.accountingBasis || ''}
                onChange={(e) => updateFormData({ accountingBasis: e.target.value as 'Cash' | 'Accrual' })}
              >
                <option value="">Select accounting basis</option>
                <option value="Cash">Cash</option>
                <option value="Accrual">Accrual</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Registers Parent Bank Account Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={formData.parentAccountName || ''}
                onChange={(e) => updateFormData({ parentAccountName: e.target.value })}
              />
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default FormStep;