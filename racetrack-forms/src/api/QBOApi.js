export const QBOApi = {
    authenticate: async () => {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Simulate API response
        return {
            qbo_realm_id: 'foo',
            qbo_access_token: 'bar',
            qbo_refresh_token: 'bas',
            account_name: 'my_account'
        };
    }
}; 