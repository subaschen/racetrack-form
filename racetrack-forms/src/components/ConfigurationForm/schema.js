export const schema = {
    "title": "Racetrack Form",
    "type": "object",
    "required": ["textBox"],
    "definitions": {
      "integrations": {
        "type": "string",
        "enum": ["DUTCHIE", "FLOWHUB", "CANIX"]
      },
      "accounts": {
        "enum": [
          { "name": "Account1", "id": 1 },
          { "name": "Account2", "id": 2 },
          { "name": "Account3", "id": 3 }
        ]
      }
    },
    "properties": {
      "connectQuickbooks": {
        "type": "object",
        "title": "Connect Quickbooks",
       // "required": ["qbo_realm_id", "qbo_access_token", "qbo_refresh_token"],
        "properties": {
          "qbo_realm_id": {
            "type": "string",
            "title": "QBO File Name",
            //"default": ""
          },
          "qbo_access_token": {
            "type": "string",
            "title": "Access Token",
            //"default": ""
          },
          "qbo_refresh_token": {
            "type": "string",
            "title": "Refresh Token",
            //"default": ""
          }
        }
      },
      "configureIntegration": {
        "type": "object",
        "title": "Configure Integration",
        "required": ["integration_name"],
        "properties": {
          "integration_name": {
            "type": "string",
            "title": "Integration Type",
            "$ref": "#/definitions/integrations"
          },
          "parent_acc_name": {
            "type": "string",
            "title": "Registers Parent Bank Account Name",
            "default": "Cash on Hand"
          },

          "accounting_basis": {
            "type": "string",
            "title": "Accounting Basis",
            "enum": ["Cash", "Accrual"],
            "default": "Cash"
          }
        },
        "dependencies": {
          "integration_name": {
            "oneOf": [
              {
                "properties": {
                  "integration_name": {
                    "enum": ["DUTCHIE"]
                  },
                  "dutchie_key": {
                    "type": "string",
                    "title": "Dutchie API Key"
                  },
                  "pos_timezone": {
                    "type": "string",
                    "title": "Time Zone",
                    "enum": [
                      "America/Los Angeles",
                      "America/Denver",
                      "America/Chicago",
                      "America/New York"
                    ]
                  }
                },
                "required": ["dutchie_key"]
              },
              {
                "properties": {
                  "integration_name": {
                    "enum": ["FLOWHUB"]
                  },
                  "flow_token": {
                    "type": "string",
                    "title": "Flowhub API Key"
                  },
                  "flow_client_id": {
                    "type": "string",
                    "title": "Flowhub Client ID"
                  },
                  "flow_location_id": {
                    "type": "string",
                    "title": "Flowhub Location ID"
                  }
                },
                "required": ["flow_token", "flow_client_id", "flow_location_id"]
              },
              {
                "properties": {
                  "integration_name": {
                    "enum": ["CANIX"]
                  },
                  "canix_token": {
                    "type": "string",
                    "title": "Canix API Key"
                  },
                  "canix_customer_id": {
                    "type": "string",
                    "title": "Canix Customer ID",
                    "default": "None"
                  }
                },
                "required": ["canix_token", "canix_customer_id"]
              }
            ]
          }
        }
      },
      "basicInfo": {
        "type": "object",
        "title": "Basic Information",
        "properties": {
          "textBox": {
            "type": "string",
            "title": "A Text Input"
          },
          "switch": {
            "type": "boolean",
            "oneOf": [
              { "const": true, "title": "On" },
              { "const": false, "title": "Off" }
            ]
          }
        }
      },
      "accountSection": {
        "type": "object",
        "title": "Account Settings",
        "properties": {
          "dropdown": {
            "title": "accounts",
            "$ref": "#/definitions/accounts"
          }
        }
      },
      "trackingSection": {
        "type": "object",
        "title": "Tracking Configuration",
        "properties": {
          "enableTrackingClass": {
            "title": "Enable Tracking Class",
            "type": "boolean",
            "default": false
          }
        },
        "dependencies": {
          "enableTrackingClass": {
            "oneOf": [
              {
                "properties": {
                  "enableTrackingClass": {
                    "enum": [false]
                  }
                }
              },
              {
                "properties": {
                  "enableTrackingClass": {
                    "enum": [true]
                  },
                  "trackingClassName": {
                    "type": "string",
                    "title": "Class Name"
                  }
                },
                "required": ["trackingClassName"]
              }
            ]
          }
        }
      }
    }
};
