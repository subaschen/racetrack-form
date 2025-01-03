export const uiSchema = {
  "connectQuickbooks": {
  "qbo_realm_id": {
    "ui:widget": "QBOAuthWidget",
    "ui:readonly": true
  },
  "qbo_access_token": {
    "ui:widget": "hidden"
  },
  "qbo_refresh_token": {
    "ui:widget": "hidden"
  }
  },
    "configureIntegration": {
      "integration_name": {
        "ui:enumNames": ["Dutchie", "Flowhub", "Canix"]
      },
      "dutchie_key": {
        "ui:widget": "password"
      },
      "flow_token": {
        "ui:widget": "password"
      },
      "flow_client_id": {
        "ui:widget": "password"
      },
      "canix_token": {
        "ui:widget": "password"
      },
      "canix_customer_id": {
        "ui:widget": "hidden"
      }
    }
  };    

