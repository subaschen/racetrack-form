import React from 'react';
import { useFormContext } from '../../../App';
import { QBOApi } from '../../../api/QBOApi';
export const QBOAuthWidget = ({ value = {}, onChange }) => {
    const context = useFormContext();
    
    const handleQBOAuth = async () => {
        try {
            const response = await QBOApi.authenticate();
            context.setFormData({ connectQuickbooks: response });
            onChange(response);
            console.log('Updated with context.setFormData:', response);
            console.log('Full context object:', context);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h3>Sign in to QBO to connect the file for your first location</h3>
            {!value?.qbo_realm_id ? (
                <button type="button" onClick={handleQBOAuth}>
                    Connect To Quickbooks
                </button>
            ) : (
                <div>
                    <div>✓ Connection Successful</div>
                    <div>QBO File Name: {value.account_name}</div>
                    <button type="button" onClick={handleQBOAuth}>
                        Connect a different file
                    </button>
                </div>
            )}
        </div>
    );
};