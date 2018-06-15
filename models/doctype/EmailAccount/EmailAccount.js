module.exports = {
    "name": "Email Account",
    "label": "Email Account",
    "doctype": "DocType",
    "isSingle": 0,
    "isChild": 0,
    "keywordFields": [
        "name",
    ],
    "fields": [
        {
            "fieldname": "name",
            "label": "Name",
            "fieldtype": "Data",
            "required": 1
        },
        {
            "fieldname": "email",
            "label": "Email",
            "fieldtype": "Data",
            "required": 1
        },
        {
            "fieldname": "defaultIncoming",
            "label": "Default Incoming",
            "fieldtype": "Check",
        },
        {
            "fieldname": "password",
            "label": "Password",
            "fieldtype": "Password",
            // "hidden": 1, uncomment when s: OAuth
        },
        {
            "fieldname": "host",
            "label": "Host",
            "fieldtype": "Link"
        },
        {
            "fieldname": "port",
            "label": "Port",
            "fieldtype": "Int"
        },
        {
            "fieldname": "defaultOutgoing",
            "label": "Default Outgoing",
            "fieldtype": "Check"
        },
        {
            "fieldname": "clientId",
            "label": "Client Id",
            "fieldtype": "Data"
        },
        {
            "fieldname": "clientSecret",
            "label": "Client Secret",
            "fieldtype": "Data"
        },
        {
            "fieldname": "refreshToken",
            "label": "Refresh Token",
            "fieldtype": "Data"
        },
        {
            "fieldname": "initialSync",
            "label": "Initial Sync",
            "fieldtype": "Int",
            "default": "50"
        }
    ]
};

