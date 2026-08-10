import { Scenario } from './scenarios';

export const GENERATED_SCENARIOS: Scenario[] = [
  {
    "id": 200,
    "title": "Smart Retail System (Context Diagram)",
    "category": "Generated Retail",
    "level": "Context Diagram",
    "description": "A 'Patient' sends a 'Claims Request' to the 'Smart Retail System' (Process). The system processes the request and sends a 'Claims Response' back to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Smart Retail System"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Smart Retail System",
          "label": "Claims Request"
        },
        {
          "source": "Smart Retail System",
          "target": "Patient",
          "label": "Claims Response"
        }
      ]
    }
  },
  {
    "id": 201,
    "title": "Cloud Retail System (Level 2 DFD)",
    "category": "Generated Retail",
    "level": "Level 2 DFD",
    "description": "A 'Client' sends a 'Orders Form' to 'Validate Orders' (Process). 'Validate Orders' fetches 'Config Data' from 'Orders Config' (Data Store) and passes 'Validated Orders' to 'Update Orders' (Process). 'Update Orders' saves 'Saved Orders' to 'Orders Records' (Data Store) and issues a 'Confirmation' to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Orders"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Orders"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Orders Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Orders Records"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Validate Orders",
          "label": "Orders Form"
        },
        {
          "source": "Orders Config",
          "target": "Validate Orders",
          "label": "Config Data"
        },
        {
          "source": "Validate Orders",
          "target": "Update Orders",
          "label": "Validated Orders"
        },
        {
          "source": "Update Orders",
          "target": "Orders Records",
          "label": "Saved Orders"
        },
        {
          "source": "Update Orders",
          "target": "Client",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 202,
    "title": "Cloud Banking System (Level 2 DFD)",
    "category": "Generated Banking",
    "level": "Level 2 DFD",
    "description": "A 'Client' sends a 'Requests Form' to 'Validate Requests' (Process). 'Validate Requests' fetches 'Config Data' from 'Requests Config' (Data Store) and passes 'Validated Requests' to 'Update Requests' (Process). 'Update Requests' saves 'Saved Requests' to 'Requests Records' (Data Store) and issues a 'Confirmation' to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Requests"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Requests"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Requests Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Requests Records"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Validate Requests",
          "label": "Requests Form"
        },
        {
          "source": "Requests Config",
          "target": "Validate Requests",
          "label": "Config Data"
        },
        {
          "source": "Validate Requests",
          "target": "Update Requests",
          "label": "Validated Requests"
        },
        {
          "source": "Update Requests",
          "target": "Requests Records",
          "label": "Saved Requests"
        },
        {
          "source": "Update Requests",
          "target": "Client",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 203,
    "title": "Global Airline System (Level 2 DFD)",
    "category": "Generated Airline",
    "level": "Level 2 DFD",
    "description": "A 'Customer' sends a 'Reports Form' to 'Validate Reports' (Process). 'Validate Reports' fetches 'Config Data' from 'Reports Config' (Data Store) and passes 'Validated Reports' to 'Update Reports' (Process). 'Update Reports' saves 'Saved Reports' to 'Reports Records' (Data Store) and issues a 'Confirmation' to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Reports"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Reports"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Reports Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Reports Records"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Validate Reports",
          "label": "Reports Form"
        },
        {
          "source": "Reports Config",
          "target": "Validate Reports",
          "label": "Config Data"
        },
        {
          "source": "Validate Reports",
          "target": "Update Reports",
          "label": "Validated Reports"
        },
        {
          "source": "Update Reports",
          "target": "Reports Records",
          "label": "Saved Reports"
        },
        {
          "source": "Update Reports",
          "target": "Customer",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 204,
    "title": "Local Pharmacy System (Level 1 DFD)",
    "category": "Generated Pharmacy",
    "level": "Level 1 DFD",
    "description": "A 'User' submits a 'Claims Request' to 'Analyze Claims' (Process). The process checks the 'Claims DB' (Data Store) for 'Claims Data', updates the 'Claims DB' with 'New Claims Data', and sends a 'Claims Status' to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Analyze Claims"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Claims DB"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Analyze Claims",
          "label": "Claims Request"
        },
        {
          "source": "Claims DB",
          "target": "Analyze Claims",
          "label": "Claims Data"
        },
        {
          "source": "Analyze Claims",
          "target": "Claims DB",
          "label": "New Claims Data"
        },
        {
          "source": "Analyze Claims",
          "target": "User",
          "label": "Claims Status"
        }
      ]
    }
  },
  {
    "id": 205,
    "title": "Auto Pharmacy System (Context Diagram)",
    "category": "Generated Pharmacy",
    "level": "Context Diagram",
    "description": "A 'Patient' sends a 'Invoices Request' to the 'Auto Pharmacy System' (Process). The system processes the request and sends a 'Invoices Response' back to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Auto Pharmacy System"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Auto Pharmacy System",
          "label": "Invoices Request"
        },
        {
          "source": "Auto Pharmacy System",
          "target": "Patient",
          "label": "Invoices Response"
        }
      ]
    }
  },
  {
    "id": 206,
    "title": "Digital Cinema System (Level 2 DFD)",
    "category": "Generated Cinema",
    "level": "Level 2 DFD",
    "description": "A 'User' sends a 'Orders Form' to 'Validate Orders' (Process). 'Validate Orders' fetches 'Config Data' from 'Orders Config' (Data Store) and passes 'Validated Orders' to 'Update Orders' (Process). 'Update Orders' saves 'Saved Orders' to 'Orders Records' (Data Store) and issues a 'Confirmation' to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Orders"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Orders"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Orders Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Orders Records"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Validate Orders",
          "label": "Orders Form"
        },
        {
          "source": "Orders Config",
          "target": "Validate Orders",
          "label": "Config Data"
        },
        {
          "source": "Validate Orders",
          "target": "Update Orders",
          "label": "Validated Orders"
        },
        {
          "source": "Update Orders",
          "target": "Orders Records",
          "label": "Saved Orders"
        },
        {
          "source": "Update Orders",
          "target": "User",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 207,
    "title": "Enterprise Pharmacy System (Level 1 DFD)",
    "category": "Generated Pharmacy",
    "level": "Level 1 DFD",
    "description": "A 'Student' submits a 'Reports Request' to 'Process Reports' (Process). The process checks the 'Reports DB' (Data Store) for 'Reports Data', updates the 'Reports DB' with 'New Reports Data', and sends a 'Reports Status' to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Process Reports"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Reports DB"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Process Reports",
          "label": "Reports Request"
        },
        {
          "source": "Reports DB",
          "target": "Process Reports",
          "label": "Reports Data"
        },
        {
          "source": "Process Reports",
          "target": "Reports DB",
          "label": "New Reports Data"
        },
        {
          "source": "Process Reports",
          "target": "Student",
          "label": "Reports Status"
        }
      ]
    }
  },
  {
    "id": 208,
    "title": "Secure Pharmacy System (Level 2 DFD)",
    "category": "Generated Pharmacy",
    "level": "Level 2 DFD",
    "description": "A 'Client' sends a 'Reports Form' to 'Validate Reports' (Process). 'Validate Reports' fetches 'Config Data' from 'Reports Config' (Data Store) and passes 'Validated Reports' to 'Update Reports' (Process). 'Update Reports' saves 'Saved Reports' to 'Reports Records' (Data Store) and issues a 'Confirmation' to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Reports"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Reports"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Reports Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Reports Records"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Validate Reports",
          "label": "Reports Form"
        },
        {
          "source": "Reports Config",
          "target": "Validate Reports",
          "label": "Config Data"
        },
        {
          "source": "Validate Reports",
          "target": "Update Reports",
          "label": "Validated Reports"
        },
        {
          "source": "Update Reports",
          "target": "Reports Records",
          "label": "Saved Reports"
        },
        {
          "source": "Update Reports",
          "target": "Client",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 209,
    "title": "Secure Library System (Level 1 DFD)",
    "category": "Generated Library",
    "level": "Level 1 DFD",
    "description": "A 'Driver' submits a 'Records Request' to 'Calculate Records' (Process). The process checks the 'Records DB' (Data Store) for 'Records Data', updates the 'Records DB' with 'New Records Data', and sends a 'Records Status' to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Calculate Records"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Records DB"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Calculate Records",
          "label": "Records Request"
        },
        {
          "source": "Records DB",
          "target": "Calculate Records",
          "label": "Records Data"
        },
        {
          "source": "Calculate Records",
          "target": "Records DB",
          "label": "New Records Data"
        },
        {
          "source": "Calculate Records",
          "target": "Driver",
          "label": "Records Status"
        }
      ]
    }
  },
  {
    "id": 210,
    "title": "Enterprise Banking System (Level 1 DFD)",
    "category": "Generated Banking",
    "level": "Level 1 DFD",
    "description": "A 'Client' submits a 'Records Request' to 'Handle Records' (Process). The process checks the 'Records DB' (Data Store) for 'Records Data', updates the 'Records DB' with 'New Records Data', and sends a 'Records Status' to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Handle Records"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Records DB"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Handle Records",
          "label": "Records Request"
        },
        {
          "source": "Records DB",
          "target": "Handle Records",
          "label": "Records Data"
        },
        {
          "source": "Handle Records",
          "target": "Records DB",
          "label": "New Records Data"
        },
        {
          "source": "Handle Records",
          "target": "Client",
          "label": "Records Status"
        }
      ]
    }
  },
  {
    "id": 211,
    "title": "Quick Pharmacy System (Context Diagram)",
    "category": "Generated Pharmacy",
    "level": "Context Diagram",
    "description": "A 'Manager' sends a 'Requests Request' to the 'Quick Pharmacy System' (Process). The system processes the request and sends a 'Requests Response' back to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Quick Pharmacy System"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Quick Pharmacy System",
          "label": "Requests Request"
        },
        {
          "source": "Quick Pharmacy System",
          "target": "Manager",
          "label": "Requests Response"
        }
      ]
    }
  },
  {
    "id": 212,
    "title": "Local Airline System (Level 1 DFD)",
    "category": "Generated Airline",
    "level": "Level 1 DFD",
    "description": "A 'Customer' submits a 'Orders Request' to 'Approve Orders' (Process). The process checks the 'Orders DB' (Data Store) for 'Orders Data', updates the 'Orders DB' with 'New Orders Data', and sends a 'Orders Status' to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Approve Orders"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Orders DB"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Approve Orders",
          "label": "Orders Request"
        },
        {
          "source": "Orders DB",
          "target": "Approve Orders",
          "label": "Orders Data"
        },
        {
          "source": "Approve Orders",
          "target": "Orders DB",
          "label": "New Orders Data"
        },
        {
          "source": "Approve Orders",
          "target": "Customer",
          "label": "Orders Status"
        }
      ]
    }
  },
  {
    "id": 213,
    "title": "Cloud Retail System (Level 1 DFD)",
    "category": "Generated Retail",
    "level": "Level 1 DFD",
    "description": "A 'Manager' submits a 'Payments Request' to 'Update Payments' (Process). The process checks the 'Payments DB' (Data Store) for 'Payments Data', updates the 'Payments DB' with 'New Payments Data', and sends a 'Payments Status' to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Update Payments"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Payments DB"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Update Payments",
          "label": "Payments Request"
        },
        {
          "source": "Payments DB",
          "target": "Update Payments",
          "label": "Payments Data"
        },
        {
          "source": "Update Payments",
          "target": "Payments DB",
          "label": "New Payments Data"
        },
        {
          "source": "Update Payments",
          "target": "Manager",
          "label": "Payments Status"
        }
      ]
    }
  },
  {
    "id": 214,
    "title": "Smart Library System (Level 1 DFD)",
    "category": "Generated Library",
    "level": "Level 1 DFD",
    "description": "A 'Driver' submits a 'Reports Request' to 'Manage Reports' (Process). The process checks the 'Reports DB' (Data Store) for 'Reports Data', updates the 'Reports DB' with 'New Reports Data', and sends a 'Reports Status' to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Manage Reports"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Reports DB"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Manage Reports",
          "label": "Reports Request"
        },
        {
          "source": "Reports DB",
          "target": "Manage Reports",
          "label": "Reports Data"
        },
        {
          "source": "Manage Reports",
          "target": "Reports DB",
          "label": "New Reports Data"
        },
        {
          "source": "Manage Reports",
          "target": "Driver",
          "label": "Reports Status"
        }
      ]
    }
  },
  {
    "id": 215,
    "title": "Global Hotel System (Context Diagram)",
    "category": "Generated Hotel",
    "level": "Context Diagram",
    "description": "A 'Driver' sends a 'Claims Request' to the 'Global Hotel System' (Process). The system processes the request and sends a 'Claims Response' back to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Global Hotel System"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Global Hotel System",
          "label": "Claims Request"
        },
        {
          "source": "Global Hotel System",
          "target": "Driver",
          "label": "Claims Response"
        }
      ]
    }
  },
  {
    "id": 216,
    "title": "Global Cinema System (Level 1 DFD)",
    "category": "Generated Cinema",
    "level": "Level 1 DFD",
    "description": "A 'Student' submits a 'Reports Request' to 'Register Reports' (Process). The process checks the 'Reports DB' (Data Store) for 'Reports Data', updates the 'Reports DB' with 'New Reports Data', and sends a 'Reports Status' to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Register Reports"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Reports DB"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Register Reports",
          "label": "Reports Request"
        },
        {
          "source": "Reports DB",
          "target": "Register Reports",
          "label": "Reports Data"
        },
        {
          "source": "Register Reports",
          "target": "Reports DB",
          "label": "New Reports Data"
        },
        {
          "source": "Register Reports",
          "target": "Student",
          "label": "Reports Status"
        }
      ]
    }
  },
  {
    "id": 217,
    "title": "Digital Banking System (Level 1 DFD)",
    "category": "Generated Banking",
    "level": "Level 1 DFD",
    "description": "A 'Manager' submits a 'Records Request' to 'Calculate Records' (Process). The process checks the 'Records DB' (Data Store) for 'Records Data', updates the 'Records DB' with 'New Records Data', and sends a 'Records Status' to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Calculate Records"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Records DB"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Calculate Records",
          "label": "Records Request"
        },
        {
          "source": "Records DB",
          "target": "Calculate Records",
          "label": "Records Data"
        },
        {
          "source": "Calculate Records",
          "target": "Records DB",
          "label": "New Records Data"
        },
        {
          "source": "Calculate Records",
          "target": "Manager",
          "label": "Records Status"
        }
      ]
    }
  },
  {
    "id": 218,
    "title": "Pro Retail System (Level 1 DFD)",
    "category": "Generated Retail",
    "level": "Level 1 DFD",
    "description": "A 'Patient' submits a 'Invoices Request' to 'Generate Invoices' (Process). The process checks the 'Invoices DB' (Data Store) for 'Invoices Data', updates the 'Invoices DB' with 'New Invoices Data', and sends a 'Invoices Status' to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Generate Invoices"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Invoices DB"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Generate Invoices",
          "label": "Invoices Request"
        },
        {
          "source": "Invoices DB",
          "target": "Generate Invoices",
          "label": "Invoices Data"
        },
        {
          "source": "Generate Invoices",
          "target": "Invoices DB",
          "label": "New Invoices Data"
        },
        {
          "source": "Generate Invoices",
          "target": "Patient",
          "label": "Invoices Status"
        }
      ]
    }
  },
  {
    "id": 219,
    "title": "Enterprise Library System (Context Diagram)",
    "category": "Generated Library",
    "level": "Context Diagram",
    "description": "A 'Client' sends a 'Reports Request' to the 'Enterprise Library System' (Process). The system processes the request and sends a 'Reports Response' back to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Enterprise Library System"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Enterprise Library System",
          "label": "Reports Request"
        },
        {
          "source": "Enterprise Library System",
          "target": "Client",
          "label": "Reports Response"
        }
      ]
    }
  },
  {
    "id": 220,
    "title": "Auto Logistics System (Context Diagram)",
    "category": "Generated Logistics",
    "level": "Context Diagram",
    "description": "A 'Guest' sends a 'Requests Request' to the 'Auto Logistics System' (Process). The system processes the request and sends a 'Requests Response' back to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Auto Logistics System"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Auto Logistics System",
          "label": "Requests Request"
        },
        {
          "source": "Auto Logistics System",
          "target": "Guest",
          "label": "Requests Response"
        }
      ]
    }
  },
  {
    "id": 221,
    "title": "Cloud Cinema System (Context Diagram)",
    "category": "Generated Cinema",
    "level": "Context Diagram",
    "description": "A 'Student' sends a 'Claims Request' to the 'Cloud Cinema System' (Process). The system processes the request and sends a 'Claims Response' back to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Cloud Cinema System"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Cloud Cinema System",
          "label": "Claims Request"
        },
        {
          "source": "Cloud Cinema System",
          "target": "Student",
          "label": "Claims Response"
        }
      ]
    }
  },
  {
    "id": 222,
    "title": "Quick Logistics System (Level 1 DFD)",
    "category": "Generated Logistics",
    "level": "Level 1 DFD",
    "description": "A 'Driver' submits a 'Claims Request' to 'Analyze Claims' (Process). The process checks the 'Claims DB' (Data Store) for 'Claims Data', updates the 'Claims DB' with 'New Claims Data', and sends a 'Claims Status' to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Analyze Claims"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Claims DB"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Analyze Claims",
          "label": "Claims Request"
        },
        {
          "source": "Claims DB",
          "target": "Analyze Claims",
          "label": "Claims Data"
        },
        {
          "source": "Analyze Claims",
          "target": "Claims DB",
          "label": "New Claims Data"
        },
        {
          "source": "Analyze Claims",
          "target": "Driver",
          "label": "Claims Status"
        }
      ]
    }
  },
  {
    "id": 223,
    "title": "Auto Airline System (Context Diagram)",
    "category": "Generated Airline",
    "level": "Context Diagram",
    "description": "A 'Student' sends a 'Profiles Request' to the 'Auto Airline System' (Process). The system processes the request and sends a 'Profiles Response' back to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Auto Airline System"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Auto Airline System",
          "label": "Profiles Request"
        },
        {
          "source": "Auto Airline System",
          "target": "Student",
          "label": "Profiles Response"
        }
      ]
    }
  },
  {
    "id": 224,
    "title": "Pro Retail System (Level 2 DFD)",
    "category": "Generated Retail",
    "level": "Level 2 DFD",
    "description": "A 'Customer' sends a 'Claims Form' to 'Validate Claims' (Process). 'Validate Claims' fetches 'Config Data' from 'Claims Config' (Data Store) and passes 'Validated Claims' to 'Update Claims' (Process). 'Update Claims' saves 'Saved Claims' to 'Claims Records' (Data Store) and issues a 'Confirmation' to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Claims"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Claims"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Claims Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Claims Records"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Validate Claims",
          "label": "Claims Form"
        },
        {
          "source": "Claims Config",
          "target": "Validate Claims",
          "label": "Config Data"
        },
        {
          "source": "Validate Claims",
          "target": "Update Claims",
          "label": "Validated Claims"
        },
        {
          "source": "Update Claims",
          "target": "Claims Records",
          "label": "Saved Claims"
        },
        {
          "source": "Update Claims",
          "target": "Customer",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 225,
    "title": "Secure Hotel System (Context Diagram)",
    "category": "Generated Hotel",
    "level": "Context Diagram",
    "description": "A 'Staff' sends a 'Claims Request' to the 'Secure Hotel System' (Process). The system processes the request and sends a 'Claims Response' back to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Secure Hotel System"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Secure Hotel System",
          "label": "Claims Request"
        },
        {
          "source": "Secure Hotel System",
          "target": "Staff",
          "label": "Claims Response"
        }
      ]
    }
  },
  {
    "id": 226,
    "title": "Auto Cinema System (Level 2 DFD)",
    "category": "Generated Cinema",
    "level": "Level 2 DFD",
    "description": "A 'Guest' sends a 'Profiles Form' to 'Validate Profiles' (Process). 'Validate Profiles' fetches 'Config Data' from 'Profiles Config' (Data Store) and passes 'Validated Profiles' to 'Update Profiles' (Process). 'Update Profiles' saves 'Saved Profiles' to 'Profiles Records' (Data Store) and issues a 'Confirmation' to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Profiles"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Profiles"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Profiles Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Profiles Records"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Validate Profiles",
          "label": "Profiles Form"
        },
        {
          "source": "Profiles Config",
          "target": "Validate Profiles",
          "label": "Config Data"
        },
        {
          "source": "Validate Profiles",
          "target": "Update Profiles",
          "label": "Validated Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Profiles Records",
          "label": "Saved Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Guest",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 227,
    "title": "Enterprise Cinema System (Level 1 DFD)",
    "category": "Generated Cinema",
    "level": "Level 1 DFD",
    "description": "A 'Guest' submits a 'Appointments Request' to 'Verify Appointments' (Process). The process checks the 'Appointments DB' (Data Store) for 'Appointments Data', updates the 'Appointments DB' with 'New Appointments Data', and sends a 'Appointments Status' to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Verify Appointments"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Appointments DB"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Verify Appointments",
          "label": "Appointments Request"
        },
        {
          "source": "Appointments DB",
          "target": "Verify Appointments",
          "label": "Appointments Data"
        },
        {
          "source": "Verify Appointments",
          "target": "Appointments DB",
          "label": "New Appointments Data"
        },
        {
          "source": "Verify Appointments",
          "target": "Guest",
          "label": "Appointments Status"
        }
      ]
    }
  },
  {
    "id": 228,
    "title": "Pro Hospital System (Context Diagram)",
    "category": "Generated Hospital",
    "level": "Context Diagram",
    "description": "A 'Guest' sends a 'Records Request' to the 'Pro Hospital System' (Process). The system processes the request and sends a 'Records Response' back to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Pro Hospital System"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Pro Hospital System",
          "label": "Records Request"
        },
        {
          "source": "Pro Hospital System",
          "target": "Guest",
          "label": "Records Response"
        }
      ]
    }
  },
  {
    "id": 229,
    "title": "Secure Airline System (Level 2 DFD)",
    "category": "Generated Airline",
    "level": "Level 2 DFD",
    "description": "A 'Admin' sends a 'Claims Form' to 'Validate Claims' (Process). 'Validate Claims' fetches 'Config Data' from 'Claims Config' (Data Store) and passes 'Validated Claims' to 'Update Claims' (Process). 'Update Claims' saves 'Saved Claims' to 'Claims Records' (Data Store) and issues a 'Confirmation' to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Claims"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Claims"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Claims Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Claims Records"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Validate Claims",
          "label": "Claims Form"
        },
        {
          "source": "Claims Config",
          "target": "Validate Claims",
          "label": "Config Data"
        },
        {
          "source": "Validate Claims",
          "target": "Update Claims",
          "label": "Validated Claims"
        },
        {
          "source": "Update Claims",
          "target": "Claims Records",
          "label": "Saved Claims"
        },
        {
          "source": "Update Claims",
          "target": "Admin",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 230,
    "title": "Global Retail System (Level 1 DFD)",
    "category": "Generated Retail",
    "level": "Level 1 DFD",
    "description": "A 'Customer' submits a 'Payments Request' to 'Approve Payments' (Process). The process checks the 'Payments DB' (Data Store) for 'Payments Data', updates the 'Payments DB' with 'New Payments Data', and sends a 'Payments Status' to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Approve Payments"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Payments DB"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Approve Payments",
          "label": "Payments Request"
        },
        {
          "source": "Payments DB",
          "target": "Approve Payments",
          "label": "Payments Data"
        },
        {
          "source": "Approve Payments",
          "target": "Payments DB",
          "label": "New Payments Data"
        },
        {
          "source": "Approve Payments",
          "target": "Customer",
          "label": "Payments Status"
        }
      ]
    }
  },
  {
    "id": 231,
    "title": "Quick Pharmacy System (Level 1 DFD)",
    "category": "Generated Pharmacy",
    "level": "Level 1 DFD",
    "description": "A 'Manager' submits a 'Profiles Request' to 'Handle Profiles' (Process). The process checks the 'Profiles DB' (Data Store) for 'Profiles Data', updates the 'Profiles DB' with 'New Profiles Data', and sends a 'Profiles Status' to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Handle Profiles"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Profiles DB"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Handle Profiles",
          "label": "Profiles Request"
        },
        {
          "source": "Profiles DB",
          "target": "Handle Profiles",
          "label": "Profiles Data"
        },
        {
          "source": "Handle Profiles",
          "target": "Profiles DB",
          "label": "New Profiles Data"
        },
        {
          "source": "Handle Profiles",
          "target": "Manager",
          "label": "Profiles Status"
        }
      ]
    }
  },
  {
    "id": 232,
    "title": "Smart Airline System (Level 1 DFD)",
    "category": "Generated Airline",
    "level": "Level 1 DFD",
    "description": "A 'Guest' submits a 'Orders Request' to 'Analyze Orders' (Process). The process checks the 'Orders DB' (Data Store) for 'Orders Data', updates the 'Orders DB' with 'New Orders Data', and sends a 'Orders Status' to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Analyze Orders"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Orders DB"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Analyze Orders",
          "label": "Orders Request"
        },
        {
          "source": "Orders DB",
          "target": "Analyze Orders",
          "label": "Orders Data"
        },
        {
          "source": "Analyze Orders",
          "target": "Orders DB",
          "label": "New Orders Data"
        },
        {
          "source": "Analyze Orders",
          "target": "Guest",
          "label": "Orders Status"
        }
      ]
    }
  },
  {
    "id": 233,
    "title": "Quick Cinema System (Context Diagram)",
    "category": "Generated Cinema",
    "level": "Context Diagram",
    "description": "A 'User' sends a 'Invoices Request' to the 'Quick Cinema System' (Process). The system processes the request and sends a 'Invoices Response' back to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Quick Cinema System"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Quick Cinema System",
          "label": "Invoices Request"
        },
        {
          "source": "Quick Cinema System",
          "target": "User",
          "label": "Invoices Response"
        }
      ]
    }
  },
  {
    "id": 234,
    "title": "Cloud Library System (Context Diagram)",
    "category": "Generated Library",
    "level": "Context Diagram",
    "description": "A 'Guest' sends a 'Records Request' to the 'Cloud Library System' (Process). The system processes the request and sends a 'Records Response' back to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Cloud Library System"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Cloud Library System",
          "label": "Records Request"
        },
        {
          "source": "Cloud Library System",
          "target": "Guest",
          "label": "Records Response"
        }
      ]
    }
  },
  {
    "id": 235,
    "title": "Local School System (Level 2 DFD)",
    "category": "Generated School",
    "level": "Level 2 DFD",
    "description": "A 'Patient' sends a 'Invoices Form' to 'Validate Invoices' (Process). 'Validate Invoices' fetches 'Config Data' from 'Invoices Config' (Data Store) and passes 'Validated Invoices' to 'Update Invoices' (Process). 'Update Invoices' saves 'Saved Invoices' to 'Invoices Records' (Data Store) and issues a 'Confirmation' to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Invoices"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Invoices"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Invoices Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Invoices Records"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Validate Invoices",
          "label": "Invoices Form"
        },
        {
          "source": "Invoices Config",
          "target": "Validate Invoices",
          "label": "Config Data"
        },
        {
          "source": "Validate Invoices",
          "target": "Update Invoices",
          "label": "Validated Invoices"
        },
        {
          "source": "Update Invoices",
          "target": "Invoices Records",
          "label": "Saved Invoices"
        },
        {
          "source": "Update Invoices",
          "target": "Patient",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 236,
    "title": "Digital Retail System (Level 2 DFD)",
    "category": "Generated Retail",
    "level": "Level 2 DFD",
    "description": "A 'Guest' sends a 'Profiles Form' to 'Validate Profiles' (Process). 'Validate Profiles' fetches 'Config Data' from 'Profiles Config' (Data Store) and passes 'Validated Profiles' to 'Update Profiles' (Process). 'Update Profiles' saves 'Saved Profiles' to 'Profiles Records' (Data Store) and issues a 'Confirmation' to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Profiles"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Profiles"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Profiles Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Profiles Records"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Validate Profiles",
          "label": "Profiles Form"
        },
        {
          "source": "Profiles Config",
          "target": "Validate Profiles",
          "label": "Config Data"
        },
        {
          "source": "Validate Profiles",
          "target": "Update Profiles",
          "label": "Validated Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Profiles Records",
          "label": "Saved Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Guest",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 237,
    "title": "Secure Logistics System (Context Diagram)",
    "category": "Generated Logistics",
    "level": "Context Diagram",
    "description": "A 'Customer' sends a 'Tickets Request' to the 'Secure Logistics System' (Process). The system processes the request and sends a 'Tickets Response' back to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Secure Logistics System"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Secure Logistics System",
          "label": "Tickets Request"
        },
        {
          "source": "Secure Logistics System",
          "target": "Customer",
          "label": "Tickets Response"
        }
      ]
    }
  },
  {
    "id": 238,
    "title": "Local Cinema System (Level 2 DFD)",
    "category": "Generated Cinema",
    "level": "Level 2 DFD",
    "description": "A 'Patient' sends a 'Reports Form' to 'Validate Reports' (Process). 'Validate Reports' fetches 'Config Data' from 'Reports Config' (Data Store) and passes 'Validated Reports' to 'Update Reports' (Process). 'Update Reports' saves 'Saved Reports' to 'Reports Records' (Data Store) and issues a 'Confirmation' to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Reports"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Reports"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Reports Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Reports Records"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Validate Reports",
          "label": "Reports Form"
        },
        {
          "source": "Reports Config",
          "target": "Validate Reports",
          "label": "Config Data"
        },
        {
          "source": "Validate Reports",
          "target": "Update Reports",
          "label": "Validated Reports"
        },
        {
          "source": "Update Reports",
          "target": "Reports Records",
          "label": "Saved Reports"
        },
        {
          "source": "Update Reports",
          "target": "Patient",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 239,
    "title": "Quick Hotel System (Level 1 DFD)",
    "category": "Generated Hotel",
    "level": "Level 1 DFD",
    "description": "A 'Manager' submits a 'Claims Request' to 'Approve Claims' (Process). The process checks the 'Claims DB' (Data Store) for 'Claims Data', updates the 'Claims DB' with 'New Claims Data', and sends a 'Claims Status' to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Approve Claims"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Claims DB"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Approve Claims",
          "label": "Claims Request"
        },
        {
          "source": "Claims DB",
          "target": "Approve Claims",
          "label": "Claims Data"
        },
        {
          "source": "Approve Claims",
          "target": "Claims DB",
          "label": "New Claims Data"
        },
        {
          "source": "Approve Claims",
          "target": "Manager",
          "label": "Claims Status"
        }
      ]
    }
  },
  {
    "id": 240,
    "title": "Auto Airline System (Level 2 DFD)",
    "category": "Generated Airline",
    "level": "Level 2 DFD",
    "description": "A 'Driver' sends a 'Requests Form' to 'Validate Requests' (Process). 'Validate Requests' fetches 'Config Data' from 'Requests Config' (Data Store) and passes 'Validated Requests' to 'Update Requests' (Process). 'Update Requests' saves 'Saved Requests' to 'Requests Records' (Data Store) and issues a 'Confirmation' to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Requests"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Requests"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Requests Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Requests Records"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Validate Requests",
          "label": "Requests Form"
        },
        {
          "source": "Requests Config",
          "target": "Validate Requests",
          "label": "Config Data"
        },
        {
          "source": "Validate Requests",
          "target": "Update Requests",
          "label": "Validated Requests"
        },
        {
          "source": "Update Requests",
          "target": "Requests Records",
          "label": "Saved Requests"
        },
        {
          "source": "Update Requests",
          "target": "Driver",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 241,
    "title": "Digital Cinema System (Level 2 DFD)",
    "category": "Generated Cinema",
    "level": "Level 2 DFD",
    "description": "A 'Guest' sends a 'Claims Form' to 'Validate Claims' (Process). 'Validate Claims' fetches 'Config Data' from 'Claims Config' (Data Store) and passes 'Validated Claims' to 'Update Claims' (Process). 'Update Claims' saves 'Saved Claims' to 'Claims Records' (Data Store) and issues a 'Confirmation' to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Claims"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Claims"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Claims Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Claims Records"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Validate Claims",
          "label": "Claims Form"
        },
        {
          "source": "Claims Config",
          "target": "Validate Claims",
          "label": "Config Data"
        },
        {
          "source": "Validate Claims",
          "target": "Update Claims",
          "label": "Validated Claims"
        },
        {
          "source": "Update Claims",
          "target": "Claims Records",
          "label": "Saved Claims"
        },
        {
          "source": "Update Claims",
          "target": "Guest",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 242,
    "title": "Auto Hotel System (Level 1 DFD)",
    "category": "Generated Hotel",
    "level": "Level 1 DFD",
    "description": "A 'Staff' submits a 'Orders Request' to 'Approve Orders' (Process). The process checks the 'Orders DB' (Data Store) for 'Orders Data', updates the 'Orders DB' with 'New Orders Data', and sends a 'Orders Status' to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Approve Orders"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Orders DB"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Approve Orders",
          "label": "Orders Request"
        },
        {
          "source": "Orders DB",
          "target": "Approve Orders",
          "label": "Orders Data"
        },
        {
          "source": "Approve Orders",
          "target": "Orders DB",
          "label": "New Orders Data"
        },
        {
          "source": "Approve Orders",
          "target": "Staff",
          "label": "Orders Status"
        }
      ]
    }
  },
  {
    "id": 243,
    "title": "Quick Retail System (Context Diagram)",
    "category": "Generated Retail",
    "level": "Context Diagram",
    "description": "A 'User' sends a 'Requests Request' to the 'Quick Retail System' (Process). The system processes the request and sends a 'Requests Response' back to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Quick Retail System"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Quick Retail System",
          "label": "Requests Request"
        },
        {
          "source": "Quick Retail System",
          "target": "User",
          "label": "Requests Response"
        }
      ]
    }
  },
  {
    "id": 244,
    "title": "Quick Hotel System (Level 1 DFD)",
    "category": "Generated Hotel",
    "level": "Level 1 DFD",
    "description": "A 'Guest' submits a 'Requests Request' to 'Process Requests' (Process). The process checks the 'Requests DB' (Data Store) for 'Requests Data', updates the 'Requests DB' with 'New Requests Data', and sends a 'Requests Status' to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Process Requests"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Requests DB"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Process Requests",
          "label": "Requests Request"
        },
        {
          "source": "Requests DB",
          "target": "Process Requests",
          "label": "Requests Data"
        },
        {
          "source": "Process Requests",
          "target": "Requests DB",
          "label": "New Requests Data"
        },
        {
          "source": "Process Requests",
          "target": "Guest",
          "label": "Requests Status"
        }
      ]
    }
  },
  {
    "id": 245,
    "title": "Auto Library System (Context Diagram)",
    "category": "Generated Library",
    "level": "Context Diagram",
    "description": "A 'Admin' sends a 'Records Request' to the 'Auto Library System' (Process). The system processes the request and sends a 'Records Response' back to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Auto Library System"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Auto Library System",
          "label": "Records Request"
        },
        {
          "source": "Auto Library System",
          "target": "Admin",
          "label": "Records Response"
        }
      ]
    }
  },
  {
    "id": 246,
    "title": "Auto Banking System (Context Diagram)",
    "category": "Generated Banking",
    "level": "Context Diagram",
    "description": "A 'Client' sends a 'Profiles Request' to the 'Auto Banking System' (Process). The system processes the request and sends a 'Profiles Response' back to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Auto Banking System"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Auto Banking System",
          "label": "Profiles Request"
        },
        {
          "source": "Auto Banking System",
          "target": "Client",
          "label": "Profiles Response"
        }
      ]
    }
  },
  {
    "id": 247,
    "title": "Smart Hotel System (Context Diagram)",
    "category": "Generated Hotel",
    "level": "Context Diagram",
    "description": "A 'Customer' sends a 'Records Request' to the 'Smart Hotel System' (Process). The system processes the request and sends a 'Records Response' back to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Smart Hotel System"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Smart Hotel System",
          "label": "Records Request"
        },
        {
          "source": "Smart Hotel System",
          "target": "Customer",
          "label": "Records Response"
        }
      ]
    }
  },
  {
    "id": 248,
    "title": "Auto Cinema System (Context Diagram)",
    "category": "Generated Cinema",
    "level": "Context Diagram",
    "description": "A 'Driver' sends a 'Reports Request' to the 'Auto Cinema System' (Process). The system processes the request and sends a 'Reports Response' back to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Auto Cinema System"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Auto Cinema System",
          "label": "Reports Request"
        },
        {
          "source": "Auto Cinema System",
          "target": "Driver",
          "label": "Reports Response"
        }
      ]
    }
  },
  {
    "id": 249,
    "title": "Auto Library System (Level 1 DFD)",
    "category": "Generated Library",
    "level": "Level 1 DFD",
    "description": "A 'Customer' submits a 'Claims Request' to 'Analyze Claims' (Process). The process checks the 'Claims DB' (Data Store) for 'Claims Data', updates the 'Claims DB' with 'New Claims Data', and sends a 'Claims Status' to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Analyze Claims"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Claims DB"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Analyze Claims",
          "label": "Claims Request"
        },
        {
          "source": "Claims DB",
          "target": "Analyze Claims",
          "label": "Claims Data"
        },
        {
          "source": "Analyze Claims",
          "target": "Claims DB",
          "label": "New Claims Data"
        },
        {
          "source": "Analyze Claims",
          "target": "Customer",
          "label": "Claims Status"
        }
      ]
    }
  },
  {
    "id": 250,
    "title": "Digital Pharmacy System (Context Diagram)",
    "category": "Generated Pharmacy",
    "level": "Context Diagram",
    "description": "A 'Admin' sends a 'Records Request' to the 'Digital Pharmacy System' (Process). The system processes the request and sends a 'Records Response' back to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Digital Pharmacy System"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Digital Pharmacy System",
          "label": "Records Request"
        },
        {
          "source": "Digital Pharmacy System",
          "target": "Admin",
          "label": "Records Response"
        }
      ]
    }
  },
  {
    "id": 251,
    "title": "Smart Library System (Context Diagram)",
    "category": "Generated Library",
    "level": "Context Diagram",
    "description": "A 'Patient' sends a 'Requests Request' to the 'Smart Library System' (Process). The system processes the request and sends a 'Requests Response' back to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Smart Library System"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Smart Library System",
          "label": "Requests Request"
        },
        {
          "source": "Smart Library System",
          "target": "Patient",
          "label": "Requests Response"
        }
      ]
    }
  },
  {
    "id": 252,
    "title": "Smart School System (Level 1 DFD)",
    "category": "Generated School",
    "level": "Level 1 DFD",
    "description": "A 'Staff' submits a 'Claims Request' to 'Process Claims' (Process). The process checks the 'Claims DB' (Data Store) for 'Claims Data', updates the 'Claims DB' with 'New Claims Data', and sends a 'Claims Status' to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Process Claims"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Claims DB"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Process Claims",
          "label": "Claims Request"
        },
        {
          "source": "Claims DB",
          "target": "Process Claims",
          "label": "Claims Data"
        },
        {
          "source": "Process Claims",
          "target": "Claims DB",
          "label": "New Claims Data"
        },
        {
          "source": "Process Claims",
          "target": "Staff",
          "label": "Claims Status"
        }
      ]
    }
  },
  {
    "id": 253,
    "title": "Digital Banking System (Level 2 DFD)",
    "category": "Generated Banking",
    "level": "Level 2 DFD",
    "description": "A 'Manager' sends a 'Tickets Form' to 'Validate Tickets' (Process). 'Validate Tickets' fetches 'Config Data' from 'Tickets Config' (Data Store) and passes 'Validated Tickets' to 'Update Tickets' (Process). 'Update Tickets' saves 'Saved Tickets' to 'Tickets Records' (Data Store) and issues a 'Confirmation' to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Tickets"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Tickets"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Tickets Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Tickets Records"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Validate Tickets",
          "label": "Tickets Form"
        },
        {
          "source": "Tickets Config",
          "target": "Validate Tickets",
          "label": "Config Data"
        },
        {
          "source": "Validate Tickets",
          "target": "Update Tickets",
          "label": "Validated Tickets"
        },
        {
          "source": "Update Tickets",
          "target": "Tickets Records",
          "label": "Saved Tickets"
        },
        {
          "source": "Update Tickets",
          "target": "Manager",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 254,
    "title": "Pro Airline System (Context Diagram)",
    "category": "Generated Airline",
    "level": "Context Diagram",
    "description": "A 'Client' sends a 'Requests Request' to the 'Pro Airline System' (Process). The system processes the request and sends a 'Requests Response' back to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Pro Airline System"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Pro Airline System",
          "label": "Requests Request"
        },
        {
          "source": "Pro Airline System",
          "target": "Client",
          "label": "Requests Response"
        }
      ]
    }
  },
  {
    "id": 255,
    "title": "Global Logistics System (Context Diagram)",
    "category": "Generated Logistics",
    "level": "Context Diagram",
    "description": "A 'Student' sends a 'Orders Request' to the 'Global Logistics System' (Process). The system processes the request and sends a 'Orders Response' back to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Global Logistics System"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Global Logistics System",
          "label": "Orders Request"
        },
        {
          "source": "Global Logistics System",
          "target": "Student",
          "label": "Orders Response"
        }
      ]
    }
  },
  {
    "id": 256,
    "title": "Auto Pharmacy System (Level 2 DFD)",
    "category": "Generated Pharmacy",
    "level": "Level 2 DFD",
    "description": "A 'Admin' sends a 'Reports Form' to 'Validate Reports' (Process). 'Validate Reports' fetches 'Config Data' from 'Reports Config' (Data Store) and passes 'Validated Reports' to 'Update Reports' (Process). 'Update Reports' saves 'Saved Reports' to 'Reports Records' (Data Store) and issues a 'Confirmation' to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Reports"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Reports"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Reports Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Reports Records"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Validate Reports",
          "label": "Reports Form"
        },
        {
          "source": "Reports Config",
          "target": "Validate Reports",
          "label": "Config Data"
        },
        {
          "source": "Validate Reports",
          "target": "Update Reports",
          "label": "Validated Reports"
        },
        {
          "source": "Update Reports",
          "target": "Reports Records",
          "label": "Saved Reports"
        },
        {
          "source": "Update Reports",
          "target": "Admin",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 257,
    "title": "Digital School System (Level 1 DFD)",
    "category": "Generated School",
    "level": "Level 1 DFD",
    "description": "A 'Student' submits a 'Requests Request' to 'Handle Requests' (Process). The process checks the 'Requests DB' (Data Store) for 'Requests Data', updates the 'Requests DB' with 'New Requests Data', and sends a 'Requests Status' to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Handle Requests"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Requests DB"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Handle Requests",
          "label": "Requests Request"
        },
        {
          "source": "Requests DB",
          "target": "Handle Requests",
          "label": "Requests Data"
        },
        {
          "source": "Handle Requests",
          "target": "Requests DB",
          "label": "New Requests Data"
        },
        {
          "source": "Handle Requests",
          "target": "Student",
          "label": "Requests Status"
        }
      ]
    }
  },
  {
    "id": 258,
    "title": "Smart Cinema System (Level 1 DFD)",
    "category": "Generated Cinema",
    "level": "Level 1 DFD",
    "description": "A 'Patient' submits a 'Claims Request' to 'Approve Claims' (Process). The process checks the 'Claims DB' (Data Store) for 'Claims Data', updates the 'Claims DB' with 'New Claims Data', and sends a 'Claims Status' to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Approve Claims"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Claims DB"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Approve Claims",
          "label": "Claims Request"
        },
        {
          "source": "Claims DB",
          "target": "Approve Claims",
          "label": "Claims Data"
        },
        {
          "source": "Approve Claims",
          "target": "Claims DB",
          "label": "New Claims Data"
        },
        {
          "source": "Approve Claims",
          "target": "Patient",
          "label": "Claims Status"
        }
      ]
    }
  },
  {
    "id": 259,
    "title": "Quick Retail System (Context Diagram)",
    "category": "Generated Retail",
    "level": "Context Diagram",
    "description": "A 'Manager' sends a 'Claims Request' to the 'Quick Retail System' (Process). The system processes the request and sends a 'Claims Response' back to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Quick Retail System"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Quick Retail System",
          "label": "Claims Request"
        },
        {
          "source": "Quick Retail System",
          "target": "Manager",
          "label": "Claims Response"
        }
      ]
    }
  },
  {
    "id": 260,
    "title": "Pro Banking System (Context Diagram)",
    "category": "Generated Banking",
    "level": "Context Diagram",
    "description": "A 'Driver' sends a 'Claims Request' to the 'Pro Banking System' (Process). The system processes the request and sends a 'Claims Response' back to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Pro Banking System"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Pro Banking System",
          "label": "Claims Request"
        },
        {
          "source": "Pro Banking System",
          "target": "Driver",
          "label": "Claims Response"
        }
      ]
    }
  },
  {
    "id": 261,
    "title": "Auto Banking System (Context Diagram)",
    "category": "Generated Banking",
    "level": "Context Diagram",
    "description": "A 'Driver' sends a 'Profiles Request' to the 'Auto Banking System' (Process). The system processes the request and sends a 'Profiles Response' back to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Auto Banking System"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Auto Banking System",
          "label": "Profiles Request"
        },
        {
          "source": "Auto Banking System",
          "target": "Driver",
          "label": "Profiles Response"
        }
      ]
    }
  },
  {
    "id": 262,
    "title": "Auto Airline System (Level 2 DFD)",
    "category": "Generated Airline",
    "level": "Level 2 DFD",
    "description": "A 'Driver' sends a 'Claims Form' to 'Validate Claims' (Process). 'Validate Claims' fetches 'Config Data' from 'Claims Config' (Data Store) and passes 'Validated Claims' to 'Update Claims' (Process). 'Update Claims' saves 'Saved Claims' to 'Claims Records' (Data Store) and issues a 'Confirmation' to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Claims"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Claims"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Claims Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Claims Records"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Validate Claims",
          "label": "Claims Form"
        },
        {
          "source": "Claims Config",
          "target": "Validate Claims",
          "label": "Config Data"
        },
        {
          "source": "Validate Claims",
          "target": "Update Claims",
          "label": "Validated Claims"
        },
        {
          "source": "Update Claims",
          "target": "Claims Records",
          "label": "Saved Claims"
        },
        {
          "source": "Update Claims",
          "target": "Driver",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 263,
    "title": "Pro Logistics System (Level 2 DFD)",
    "category": "Generated Logistics",
    "level": "Level 2 DFD",
    "description": "A 'Guest' sends a 'Appointments Form' to 'Validate Appointments' (Process). 'Validate Appointments' fetches 'Config Data' from 'Appointments Config' (Data Store) and passes 'Validated Appointments' to 'Update Appointments' (Process). 'Update Appointments' saves 'Saved Appointments' to 'Appointments Records' (Data Store) and issues a 'Confirmation' to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Appointments"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Appointments"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Appointments Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Appointments Records"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Validate Appointments",
          "label": "Appointments Form"
        },
        {
          "source": "Appointments Config",
          "target": "Validate Appointments",
          "label": "Config Data"
        },
        {
          "source": "Validate Appointments",
          "target": "Update Appointments",
          "label": "Validated Appointments"
        },
        {
          "source": "Update Appointments",
          "target": "Appointments Records",
          "label": "Saved Appointments"
        },
        {
          "source": "Update Appointments",
          "target": "Guest",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 264,
    "title": "Quick Library System (Level 2 DFD)",
    "category": "Generated Library",
    "level": "Level 2 DFD",
    "description": "A 'Admin' sends a 'Tickets Form' to 'Validate Tickets' (Process). 'Validate Tickets' fetches 'Config Data' from 'Tickets Config' (Data Store) and passes 'Validated Tickets' to 'Update Tickets' (Process). 'Update Tickets' saves 'Saved Tickets' to 'Tickets Records' (Data Store) and issues a 'Confirmation' to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Tickets"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Tickets"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Tickets Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Tickets Records"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Validate Tickets",
          "label": "Tickets Form"
        },
        {
          "source": "Tickets Config",
          "target": "Validate Tickets",
          "label": "Config Data"
        },
        {
          "source": "Validate Tickets",
          "target": "Update Tickets",
          "label": "Validated Tickets"
        },
        {
          "source": "Update Tickets",
          "target": "Tickets Records",
          "label": "Saved Tickets"
        },
        {
          "source": "Update Tickets",
          "target": "Admin",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 265,
    "title": "Smart Airline System (Level 2 DFD)",
    "category": "Generated Airline",
    "level": "Level 2 DFD",
    "description": "A 'Manager' sends a 'Orders Form' to 'Validate Orders' (Process). 'Validate Orders' fetches 'Config Data' from 'Orders Config' (Data Store) and passes 'Validated Orders' to 'Update Orders' (Process). 'Update Orders' saves 'Saved Orders' to 'Orders Records' (Data Store) and issues a 'Confirmation' to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Orders"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Orders"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Orders Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Orders Records"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Validate Orders",
          "label": "Orders Form"
        },
        {
          "source": "Orders Config",
          "target": "Validate Orders",
          "label": "Config Data"
        },
        {
          "source": "Validate Orders",
          "target": "Update Orders",
          "label": "Validated Orders"
        },
        {
          "source": "Update Orders",
          "target": "Orders Records",
          "label": "Saved Orders"
        },
        {
          "source": "Update Orders",
          "target": "Manager",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 266,
    "title": "Auto Hospital System (Level 1 DFD)",
    "category": "Generated Hospital",
    "level": "Level 1 DFD",
    "description": "A 'User' submits a 'Profiles Request' to 'Register Profiles' (Process). The process checks the 'Profiles DB' (Data Store) for 'Profiles Data', updates the 'Profiles DB' with 'New Profiles Data', and sends a 'Profiles Status' to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Register Profiles"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Profiles DB"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Register Profiles",
          "label": "Profiles Request"
        },
        {
          "source": "Profiles DB",
          "target": "Register Profiles",
          "label": "Profiles Data"
        },
        {
          "source": "Register Profiles",
          "target": "Profiles DB",
          "label": "New Profiles Data"
        },
        {
          "source": "Register Profiles",
          "target": "User",
          "label": "Profiles Status"
        }
      ]
    }
  },
  {
    "id": 267,
    "title": "Global Library System (Level 2 DFD)",
    "category": "Generated Library",
    "level": "Level 2 DFD",
    "description": "A 'User' sends a 'Appointments Form' to 'Validate Appointments' (Process). 'Validate Appointments' fetches 'Config Data' from 'Appointments Config' (Data Store) and passes 'Validated Appointments' to 'Update Appointments' (Process). 'Update Appointments' saves 'Saved Appointments' to 'Appointments Records' (Data Store) and issues a 'Confirmation' to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Appointments"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Appointments"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Appointments Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Appointments Records"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Validate Appointments",
          "label": "Appointments Form"
        },
        {
          "source": "Appointments Config",
          "target": "Validate Appointments",
          "label": "Config Data"
        },
        {
          "source": "Validate Appointments",
          "target": "Update Appointments",
          "label": "Validated Appointments"
        },
        {
          "source": "Update Appointments",
          "target": "Appointments Records",
          "label": "Saved Appointments"
        },
        {
          "source": "Update Appointments",
          "target": "User",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 268,
    "title": "Auto Retail System (Level 2 DFD)",
    "category": "Generated Retail",
    "level": "Level 2 DFD",
    "description": "A 'Client' sends a 'Payments Form' to 'Validate Payments' (Process). 'Validate Payments' fetches 'Config Data' from 'Payments Config' (Data Store) and passes 'Validated Payments' to 'Update Payments' (Process). 'Update Payments' saves 'Saved Payments' to 'Payments Records' (Data Store) and issues a 'Confirmation' to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Payments"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Payments"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Payments Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Payments Records"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Validate Payments",
          "label": "Payments Form"
        },
        {
          "source": "Payments Config",
          "target": "Validate Payments",
          "label": "Config Data"
        },
        {
          "source": "Validate Payments",
          "target": "Update Payments",
          "label": "Validated Payments"
        },
        {
          "source": "Update Payments",
          "target": "Payments Records",
          "label": "Saved Payments"
        },
        {
          "source": "Update Payments",
          "target": "Client",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 269,
    "title": "Digital Retail System (Level 1 DFD)",
    "category": "Generated Retail",
    "level": "Level 1 DFD",
    "description": "A 'User' submits a 'Payments Request' to 'Calculate Payments' (Process). The process checks the 'Payments DB' (Data Store) for 'Payments Data', updates the 'Payments DB' with 'New Payments Data', and sends a 'Payments Status' to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Calculate Payments"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Payments DB"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Calculate Payments",
          "label": "Payments Request"
        },
        {
          "source": "Payments DB",
          "target": "Calculate Payments",
          "label": "Payments Data"
        },
        {
          "source": "Calculate Payments",
          "target": "Payments DB",
          "label": "New Payments Data"
        },
        {
          "source": "Calculate Payments",
          "target": "User",
          "label": "Payments Status"
        }
      ]
    }
  },
  {
    "id": 270,
    "title": "Enterprise Hospital System (Level 2 DFD)",
    "category": "Generated Hospital",
    "level": "Level 2 DFD",
    "description": "A 'Patient' sends a 'Payments Form' to 'Validate Payments' (Process). 'Validate Payments' fetches 'Config Data' from 'Payments Config' (Data Store) and passes 'Validated Payments' to 'Update Payments' (Process). 'Update Payments' saves 'Saved Payments' to 'Payments Records' (Data Store) and issues a 'Confirmation' to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Payments"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Payments"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Payments Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Payments Records"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Validate Payments",
          "label": "Payments Form"
        },
        {
          "source": "Payments Config",
          "target": "Validate Payments",
          "label": "Config Data"
        },
        {
          "source": "Validate Payments",
          "target": "Update Payments",
          "label": "Validated Payments"
        },
        {
          "source": "Update Payments",
          "target": "Payments Records",
          "label": "Saved Payments"
        },
        {
          "source": "Update Payments",
          "target": "Patient",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 271,
    "title": "Quick Hospital System (Level 1 DFD)",
    "category": "Generated Hospital",
    "level": "Level 1 DFD",
    "description": "A 'Customer' submits a 'Requests Request' to 'Generate Requests' (Process). The process checks the 'Requests DB' (Data Store) for 'Requests Data', updates the 'Requests DB' with 'New Requests Data', and sends a 'Requests Status' to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Generate Requests"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Requests DB"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Generate Requests",
          "label": "Requests Request"
        },
        {
          "source": "Requests DB",
          "target": "Generate Requests",
          "label": "Requests Data"
        },
        {
          "source": "Generate Requests",
          "target": "Requests DB",
          "label": "New Requests Data"
        },
        {
          "source": "Generate Requests",
          "target": "Customer",
          "label": "Requests Status"
        }
      ]
    }
  },
  {
    "id": 272,
    "title": "Global Logistics System (Level 1 DFD)",
    "category": "Generated Logistics",
    "level": "Level 1 DFD",
    "description": "A 'User' submits a 'Invoices Request' to 'Handle Invoices' (Process). The process checks the 'Invoices DB' (Data Store) for 'Invoices Data', updates the 'Invoices DB' with 'New Invoices Data', and sends a 'Invoices Status' to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Handle Invoices"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Invoices DB"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Handle Invoices",
          "label": "Invoices Request"
        },
        {
          "source": "Invoices DB",
          "target": "Handle Invoices",
          "label": "Invoices Data"
        },
        {
          "source": "Handle Invoices",
          "target": "Invoices DB",
          "label": "New Invoices Data"
        },
        {
          "source": "Handle Invoices",
          "target": "User",
          "label": "Invoices Status"
        }
      ]
    }
  },
  {
    "id": 273,
    "title": "Secure Retail System (Level 1 DFD)",
    "category": "Generated Retail",
    "level": "Level 1 DFD",
    "description": "A 'Admin' submits a 'Claims Request' to 'Verify Claims' (Process). The process checks the 'Claims DB' (Data Store) for 'Claims Data', updates the 'Claims DB' with 'New Claims Data', and sends a 'Claims Status' to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Verify Claims"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Claims DB"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Verify Claims",
          "label": "Claims Request"
        },
        {
          "source": "Claims DB",
          "target": "Verify Claims",
          "label": "Claims Data"
        },
        {
          "source": "Verify Claims",
          "target": "Claims DB",
          "label": "New Claims Data"
        },
        {
          "source": "Verify Claims",
          "target": "Admin",
          "label": "Claims Status"
        }
      ]
    }
  },
  {
    "id": 274,
    "title": "Digital Retail System (Level 2 DFD)",
    "category": "Generated Retail",
    "level": "Level 2 DFD",
    "description": "A 'Manager' sends a 'Appointments Form' to 'Validate Appointments' (Process). 'Validate Appointments' fetches 'Config Data' from 'Appointments Config' (Data Store) and passes 'Validated Appointments' to 'Update Appointments' (Process). 'Update Appointments' saves 'Saved Appointments' to 'Appointments Records' (Data Store) and issues a 'Confirmation' to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Appointments"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Appointments"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Appointments Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Appointments Records"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Validate Appointments",
          "label": "Appointments Form"
        },
        {
          "source": "Appointments Config",
          "target": "Validate Appointments",
          "label": "Config Data"
        },
        {
          "source": "Validate Appointments",
          "target": "Update Appointments",
          "label": "Validated Appointments"
        },
        {
          "source": "Update Appointments",
          "target": "Appointments Records",
          "label": "Saved Appointments"
        },
        {
          "source": "Update Appointments",
          "target": "Manager",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 275,
    "title": "Global Library System (Level 2 DFD)",
    "category": "Generated Library",
    "level": "Level 2 DFD",
    "description": "A 'Guest' sends a 'Tickets Form' to 'Validate Tickets' (Process). 'Validate Tickets' fetches 'Config Data' from 'Tickets Config' (Data Store) and passes 'Validated Tickets' to 'Update Tickets' (Process). 'Update Tickets' saves 'Saved Tickets' to 'Tickets Records' (Data Store) and issues a 'Confirmation' to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Tickets"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Tickets"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Tickets Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Tickets Records"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Validate Tickets",
          "label": "Tickets Form"
        },
        {
          "source": "Tickets Config",
          "target": "Validate Tickets",
          "label": "Config Data"
        },
        {
          "source": "Validate Tickets",
          "target": "Update Tickets",
          "label": "Validated Tickets"
        },
        {
          "source": "Update Tickets",
          "target": "Tickets Records",
          "label": "Saved Tickets"
        },
        {
          "source": "Update Tickets",
          "target": "Guest",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 276,
    "title": "Cloud Retail System (Level 1 DFD)",
    "category": "Generated Retail",
    "level": "Level 1 DFD",
    "description": "A 'Customer' submits a 'Records Request' to 'Analyze Records' (Process). The process checks the 'Records DB' (Data Store) for 'Records Data', updates the 'Records DB' with 'New Records Data', and sends a 'Records Status' to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Analyze Records"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Records DB"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Analyze Records",
          "label": "Records Request"
        },
        {
          "source": "Records DB",
          "target": "Analyze Records",
          "label": "Records Data"
        },
        {
          "source": "Analyze Records",
          "target": "Records DB",
          "label": "New Records Data"
        },
        {
          "source": "Analyze Records",
          "target": "Customer",
          "label": "Records Status"
        }
      ]
    }
  },
  {
    "id": 277,
    "title": "Pro Library System (Context Diagram)",
    "category": "Generated Library",
    "level": "Context Diagram",
    "description": "A 'Admin' sends a 'Records Request' to the 'Pro Library System' (Process). The system processes the request and sends a 'Records Response' back to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Pro Library System"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Pro Library System",
          "label": "Records Request"
        },
        {
          "source": "Pro Library System",
          "target": "Admin",
          "label": "Records Response"
        }
      ]
    }
  },
  {
    "id": 278,
    "title": "Auto Banking System (Context Diagram)",
    "category": "Generated Banking",
    "level": "Context Diagram",
    "description": "A 'Admin' sends a 'Orders Request' to the 'Auto Banking System' (Process). The system processes the request and sends a 'Orders Response' back to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Auto Banking System"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Auto Banking System",
          "label": "Orders Request"
        },
        {
          "source": "Auto Banking System",
          "target": "Admin",
          "label": "Orders Response"
        }
      ]
    }
  },
  {
    "id": 279,
    "title": "Local Airline System (Level 2 DFD)",
    "category": "Generated Airline",
    "level": "Level 2 DFD",
    "description": "A 'Client' sends a 'Tickets Form' to 'Validate Tickets' (Process). 'Validate Tickets' fetches 'Config Data' from 'Tickets Config' (Data Store) and passes 'Validated Tickets' to 'Update Tickets' (Process). 'Update Tickets' saves 'Saved Tickets' to 'Tickets Records' (Data Store) and issues a 'Confirmation' to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Tickets"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Tickets"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Tickets Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Tickets Records"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Validate Tickets",
          "label": "Tickets Form"
        },
        {
          "source": "Tickets Config",
          "target": "Validate Tickets",
          "label": "Config Data"
        },
        {
          "source": "Validate Tickets",
          "target": "Update Tickets",
          "label": "Validated Tickets"
        },
        {
          "source": "Update Tickets",
          "target": "Tickets Records",
          "label": "Saved Tickets"
        },
        {
          "source": "Update Tickets",
          "target": "Client",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 280,
    "title": "Cloud Retail System (Level 2 DFD)",
    "category": "Generated Retail",
    "level": "Level 2 DFD",
    "description": "A 'Customer' sends a 'Requests Form' to 'Validate Requests' (Process). 'Validate Requests' fetches 'Config Data' from 'Requests Config' (Data Store) and passes 'Validated Requests' to 'Update Requests' (Process). 'Update Requests' saves 'Saved Requests' to 'Requests Records' (Data Store) and issues a 'Confirmation' to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Requests"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Requests"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Requests Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Requests Records"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Validate Requests",
          "label": "Requests Form"
        },
        {
          "source": "Requests Config",
          "target": "Validate Requests",
          "label": "Config Data"
        },
        {
          "source": "Validate Requests",
          "target": "Update Requests",
          "label": "Validated Requests"
        },
        {
          "source": "Update Requests",
          "target": "Requests Records",
          "label": "Saved Requests"
        },
        {
          "source": "Update Requests",
          "target": "Customer",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 281,
    "title": "Global Logistics System (Level 1 DFD)",
    "category": "Generated Logistics",
    "level": "Level 1 DFD",
    "description": "A 'Manager' submits a 'Requests Request' to 'Handle Requests' (Process). The process checks the 'Requests DB' (Data Store) for 'Requests Data', updates the 'Requests DB' with 'New Requests Data', and sends a 'Requests Status' to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Handle Requests"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Requests DB"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Handle Requests",
          "label": "Requests Request"
        },
        {
          "source": "Requests DB",
          "target": "Handle Requests",
          "label": "Requests Data"
        },
        {
          "source": "Handle Requests",
          "target": "Requests DB",
          "label": "New Requests Data"
        },
        {
          "source": "Handle Requests",
          "target": "Manager",
          "label": "Requests Status"
        }
      ]
    }
  },
  {
    "id": 282,
    "title": "Smart Banking System (Level 1 DFD)",
    "category": "Generated Banking",
    "level": "Level 1 DFD",
    "description": "A 'Student' submits a 'Reports Request' to 'Handle Reports' (Process). The process checks the 'Reports DB' (Data Store) for 'Reports Data', updates the 'Reports DB' with 'New Reports Data', and sends a 'Reports Status' to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Handle Reports"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Reports DB"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Handle Reports",
          "label": "Reports Request"
        },
        {
          "source": "Reports DB",
          "target": "Handle Reports",
          "label": "Reports Data"
        },
        {
          "source": "Handle Reports",
          "target": "Reports DB",
          "label": "New Reports Data"
        },
        {
          "source": "Handle Reports",
          "target": "Student",
          "label": "Reports Status"
        }
      ]
    }
  },
  {
    "id": 283,
    "title": "Quick Retail System (Level 2 DFD)",
    "category": "Generated Retail",
    "level": "Level 2 DFD",
    "description": "A 'Customer' sends a 'Appointments Form' to 'Validate Appointments' (Process). 'Validate Appointments' fetches 'Config Data' from 'Appointments Config' (Data Store) and passes 'Validated Appointments' to 'Update Appointments' (Process). 'Update Appointments' saves 'Saved Appointments' to 'Appointments Records' (Data Store) and issues a 'Confirmation' to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Appointments"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Appointments"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Appointments Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Appointments Records"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Validate Appointments",
          "label": "Appointments Form"
        },
        {
          "source": "Appointments Config",
          "target": "Validate Appointments",
          "label": "Config Data"
        },
        {
          "source": "Validate Appointments",
          "target": "Update Appointments",
          "label": "Validated Appointments"
        },
        {
          "source": "Update Appointments",
          "target": "Appointments Records",
          "label": "Saved Appointments"
        },
        {
          "source": "Update Appointments",
          "target": "Customer",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 284,
    "title": "Quick Hotel System (Level 1 DFD)",
    "category": "Generated Hotel",
    "level": "Level 1 DFD",
    "description": "A 'Customer' submits a 'Payments Request' to 'Analyze Payments' (Process). The process checks the 'Payments DB' (Data Store) for 'Payments Data', updates the 'Payments DB' with 'New Payments Data', and sends a 'Payments Status' to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Analyze Payments"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Payments DB"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Analyze Payments",
          "label": "Payments Request"
        },
        {
          "source": "Payments DB",
          "target": "Analyze Payments",
          "label": "Payments Data"
        },
        {
          "source": "Analyze Payments",
          "target": "Payments DB",
          "label": "New Payments Data"
        },
        {
          "source": "Analyze Payments",
          "target": "Customer",
          "label": "Payments Status"
        }
      ]
    }
  },
  {
    "id": 285,
    "title": "Secure Banking System (Level 1 DFD)",
    "category": "Generated Banking",
    "level": "Level 1 DFD",
    "description": "A 'Student' submits a 'Invoices Request' to 'Register Invoices' (Process). The process checks the 'Invoices DB' (Data Store) for 'Invoices Data', updates the 'Invoices DB' with 'New Invoices Data', and sends a 'Invoices Status' to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Register Invoices"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Invoices DB"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Register Invoices",
          "label": "Invoices Request"
        },
        {
          "source": "Invoices DB",
          "target": "Register Invoices",
          "label": "Invoices Data"
        },
        {
          "source": "Register Invoices",
          "target": "Invoices DB",
          "label": "New Invoices Data"
        },
        {
          "source": "Register Invoices",
          "target": "Student",
          "label": "Invoices Status"
        }
      ]
    }
  },
  {
    "id": 286,
    "title": "Enterprise Retail System (Context Diagram)",
    "category": "Generated Retail",
    "level": "Context Diagram",
    "description": "A 'Manager' sends a 'Claims Request' to the 'Enterprise Retail System' (Process). The system processes the request and sends a 'Claims Response' back to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Enterprise Retail System"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Enterprise Retail System",
          "label": "Claims Request"
        },
        {
          "source": "Enterprise Retail System",
          "target": "Manager",
          "label": "Claims Response"
        }
      ]
    }
  },
  {
    "id": 287,
    "title": "Enterprise Retail System (Context Diagram)",
    "category": "Generated Retail",
    "level": "Context Diagram",
    "description": "A 'Driver' sends a 'Appointments Request' to the 'Enterprise Retail System' (Process). The system processes the request and sends a 'Appointments Response' back to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Enterprise Retail System"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Enterprise Retail System",
          "label": "Appointments Request"
        },
        {
          "source": "Enterprise Retail System",
          "target": "Driver",
          "label": "Appointments Response"
        }
      ]
    }
  },
  {
    "id": 288,
    "title": "Secure Retail System (Level 2 DFD)",
    "category": "Generated Retail",
    "level": "Level 2 DFD",
    "description": "A 'Admin' sends a 'Records Form' to 'Validate Records' (Process). 'Validate Records' fetches 'Config Data' from 'Records Config' (Data Store) and passes 'Validated Records' to 'Update Records' (Process). 'Update Records' saves 'Saved Records' to 'Records Records' (Data Store) and issues a 'Confirmation' to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Records"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Records"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Records Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Records Records"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Validate Records",
          "label": "Records Form"
        },
        {
          "source": "Records Config",
          "target": "Validate Records",
          "label": "Config Data"
        },
        {
          "source": "Validate Records",
          "target": "Update Records",
          "label": "Validated Records"
        },
        {
          "source": "Update Records",
          "target": "Records Records",
          "label": "Saved Records"
        },
        {
          "source": "Update Records",
          "target": "Admin",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 289,
    "title": "Smart Logistics System (Level 1 DFD)",
    "category": "Generated Logistics",
    "level": "Level 1 DFD",
    "description": "A 'Staff' submits a 'Records Request' to 'Calculate Records' (Process). The process checks the 'Records DB' (Data Store) for 'Records Data', updates the 'Records DB' with 'New Records Data', and sends a 'Records Status' to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Calculate Records"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Records DB"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Calculate Records",
          "label": "Records Request"
        },
        {
          "source": "Records DB",
          "target": "Calculate Records",
          "label": "Records Data"
        },
        {
          "source": "Calculate Records",
          "target": "Records DB",
          "label": "New Records Data"
        },
        {
          "source": "Calculate Records",
          "target": "Staff",
          "label": "Records Status"
        }
      ]
    }
  },
  {
    "id": 290,
    "title": "Local Airline System (Level 1 DFD)",
    "category": "Generated Airline",
    "level": "Level 1 DFD",
    "description": "A 'Client' submits a 'Invoices Request' to 'Update Invoices' (Process). The process checks the 'Invoices DB' (Data Store) for 'Invoices Data', updates the 'Invoices DB' with 'New Invoices Data', and sends a 'Invoices Status' to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Update Invoices"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Invoices DB"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Update Invoices",
          "label": "Invoices Request"
        },
        {
          "source": "Invoices DB",
          "target": "Update Invoices",
          "label": "Invoices Data"
        },
        {
          "source": "Update Invoices",
          "target": "Invoices DB",
          "label": "New Invoices Data"
        },
        {
          "source": "Update Invoices",
          "target": "Client",
          "label": "Invoices Status"
        }
      ]
    }
  },
  {
    "id": 291,
    "title": "Quick Retail System (Level 2 DFD)",
    "category": "Generated Retail",
    "level": "Level 2 DFD",
    "description": "A 'Admin' sends a 'Requests Form' to 'Validate Requests' (Process). 'Validate Requests' fetches 'Config Data' from 'Requests Config' (Data Store) and passes 'Validated Requests' to 'Update Requests' (Process). 'Update Requests' saves 'Saved Requests' to 'Requests Records' (Data Store) and issues a 'Confirmation' to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Requests"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Requests"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Requests Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Requests Records"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Validate Requests",
          "label": "Requests Form"
        },
        {
          "source": "Requests Config",
          "target": "Validate Requests",
          "label": "Config Data"
        },
        {
          "source": "Validate Requests",
          "target": "Update Requests",
          "label": "Validated Requests"
        },
        {
          "source": "Update Requests",
          "target": "Requests Records",
          "label": "Saved Requests"
        },
        {
          "source": "Update Requests",
          "target": "Admin",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 292,
    "title": "Smart School System (Level 1 DFD)",
    "category": "Generated School",
    "level": "Level 1 DFD",
    "description": "A 'Patient' submits a 'Invoices Request' to 'Register Invoices' (Process). The process checks the 'Invoices DB' (Data Store) for 'Invoices Data', updates the 'Invoices DB' with 'New Invoices Data', and sends a 'Invoices Status' to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Register Invoices"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Invoices DB"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Register Invoices",
          "label": "Invoices Request"
        },
        {
          "source": "Invoices DB",
          "target": "Register Invoices",
          "label": "Invoices Data"
        },
        {
          "source": "Register Invoices",
          "target": "Invoices DB",
          "label": "New Invoices Data"
        },
        {
          "source": "Register Invoices",
          "target": "Patient",
          "label": "Invoices Status"
        }
      ]
    }
  },
  {
    "id": 293,
    "title": "Auto Logistics System (Context Diagram)",
    "category": "Generated Logistics",
    "level": "Context Diagram",
    "description": "A 'Staff' sends a 'Invoices Request' to the 'Auto Logistics System' (Process). The system processes the request and sends a 'Invoices Response' back to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Auto Logistics System"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Auto Logistics System",
          "label": "Invoices Request"
        },
        {
          "source": "Auto Logistics System",
          "target": "Staff",
          "label": "Invoices Response"
        }
      ]
    }
  },
  {
    "id": 294,
    "title": "Pro Airline System (Level 2 DFD)",
    "category": "Generated Airline",
    "level": "Level 2 DFD",
    "description": "A 'Admin' sends a 'Claims Form' to 'Validate Claims' (Process). 'Validate Claims' fetches 'Config Data' from 'Claims Config' (Data Store) and passes 'Validated Claims' to 'Update Claims' (Process). 'Update Claims' saves 'Saved Claims' to 'Claims Records' (Data Store) and issues a 'Confirmation' to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Claims"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Claims"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Claims Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Claims Records"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Validate Claims",
          "label": "Claims Form"
        },
        {
          "source": "Claims Config",
          "target": "Validate Claims",
          "label": "Config Data"
        },
        {
          "source": "Validate Claims",
          "target": "Update Claims",
          "label": "Validated Claims"
        },
        {
          "source": "Update Claims",
          "target": "Claims Records",
          "label": "Saved Claims"
        },
        {
          "source": "Update Claims",
          "target": "Admin",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 295,
    "title": "Cloud Hotel System (Level 2 DFD)",
    "category": "Generated Hotel",
    "level": "Level 2 DFD",
    "description": "A 'Guest' sends a 'Reports Form' to 'Validate Reports' (Process). 'Validate Reports' fetches 'Config Data' from 'Reports Config' (Data Store) and passes 'Validated Reports' to 'Update Reports' (Process). 'Update Reports' saves 'Saved Reports' to 'Reports Records' (Data Store) and issues a 'Confirmation' to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Reports"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Reports"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Reports Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Reports Records"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Validate Reports",
          "label": "Reports Form"
        },
        {
          "source": "Reports Config",
          "target": "Validate Reports",
          "label": "Config Data"
        },
        {
          "source": "Validate Reports",
          "target": "Update Reports",
          "label": "Validated Reports"
        },
        {
          "source": "Update Reports",
          "target": "Reports Records",
          "label": "Saved Reports"
        },
        {
          "source": "Update Reports",
          "target": "Guest",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 296,
    "title": "Auto Hospital System (Level 2 DFD)",
    "category": "Generated Hospital",
    "level": "Level 2 DFD",
    "description": "A 'Staff' sends a 'Profiles Form' to 'Validate Profiles' (Process). 'Validate Profiles' fetches 'Config Data' from 'Profiles Config' (Data Store) and passes 'Validated Profiles' to 'Update Profiles' (Process). 'Update Profiles' saves 'Saved Profiles' to 'Profiles Records' (Data Store) and issues a 'Confirmation' to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Profiles"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Profiles"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Profiles Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Profiles Records"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Validate Profiles",
          "label": "Profiles Form"
        },
        {
          "source": "Profiles Config",
          "target": "Validate Profiles",
          "label": "Config Data"
        },
        {
          "source": "Validate Profiles",
          "target": "Update Profiles",
          "label": "Validated Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Profiles Records",
          "label": "Saved Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Staff",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 297,
    "title": "Pro Hospital System (Level 1 DFD)",
    "category": "Generated Hospital",
    "level": "Level 1 DFD",
    "description": "A 'Client' submits a 'Reports Request' to 'Manage Reports' (Process). The process checks the 'Reports DB' (Data Store) for 'Reports Data', updates the 'Reports DB' with 'New Reports Data', and sends a 'Reports Status' to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Manage Reports"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Reports DB"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Manage Reports",
          "label": "Reports Request"
        },
        {
          "source": "Reports DB",
          "target": "Manage Reports",
          "label": "Reports Data"
        },
        {
          "source": "Manage Reports",
          "target": "Reports DB",
          "label": "New Reports Data"
        },
        {
          "source": "Manage Reports",
          "target": "Client",
          "label": "Reports Status"
        }
      ]
    }
  },
  {
    "id": 298,
    "title": "Digital Banking System (Context Diagram)",
    "category": "Generated Banking",
    "level": "Context Diagram",
    "description": "A 'Student' sends a 'Profiles Request' to the 'Digital Banking System' (Process). The system processes the request and sends a 'Profiles Response' back to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Digital Banking System"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Digital Banking System",
          "label": "Profiles Request"
        },
        {
          "source": "Digital Banking System",
          "target": "Student",
          "label": "Profiles Response"
        }
      ]
    }
  },
  {
    "id": 299,
    "title": "Auto Library System (Level 2 DFD)",
    "category": "Generated Library",
    "level": "Level 2 DFD",
    "description": "A 'Patient' sends a 'Tickets Form' to 'Validate Tickets' (Process). 'Validate Tickets' fetches 'Config Data' from 'Tickets Config' (Data Store) and passes 'Validated Tickets' to 'Update Tickets' (Process). 'Update Tickets' saves 'Saved Tickets' to 'Tickets Records' (Data Store) and issues a 'Confirmation' to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Tickets"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Tickets"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Tickets Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Tickets Records"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Validate Tickets",
          "label": "Tickets Form"
        },
        {
          "source": "Tickets Config",
          "target": "Validate Tickets",
          "label": "Config Data"
        },
        {
          "source": "Validate Tickets",
          "target": "Update Tickets",
          "label": "Validated Tickets"
        },
        {
          "source": "Update Tickets",
          "target": "Tickets Records",
          "label": "Saved Tickets"
        },
        {
          "source": "Update Tickets",
          "target": "Patient",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 300,
    "title": "Auto Banking System (Level 1 DFD)",
    "category": "Generated Banking",
    "level": "Level 1 DFD",
    "description": "A 'Driver' submits a 'Orders Request' to 'Handle Orders' (Process). The process checks the 'Orders DB' (Data Store) for 'Orders Data', updates the 'Orders DB' with 'New Orders Data', and sends a 'Orders Status' to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Handle Orders"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Orders DB"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Handle Orders",
          "label": "Orders Request"
        },
        {
          "source": "Orders DB",
          "target": "Handle Orders",
          "label": "Orders Data"
        },
        {
          "source": "Handle Orders",
          "target": "Orders DB",
          "label": "New Orders Data"
        },
        {
          "source": "Handle Orders",
          "target": "Driver",
          "label": "Orders Status"
        }
      ]
    }
  },
  {
    "id": 301,
    "title": "Auto Retail System (Level 2 DFD)",
    "category": "Generated Retail",
    "level": "Level 2 DFD",
    "description": "A 'Customer' sends a 'Appointments Form' to 'Validate Appointments' (Process). 'Validate Appointments' fetches 'Config Data' from 'Appointments Config' (Data Store) and passes 'Validated Appointments' to 'Update Appointments' (Process). 'Update Appointments' saves 'Saved Appointments' to 'Appointments Records' (Data Store) and issues a 'Confirmation' to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Appointments"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Appointments"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Appointments Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Appointments Records"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Validate Appointments",
          "label": "Appointments Form"
        },
        {
          "source": "Appointments Config",
          "target": "Validate Appointments",
          "label": "Config Data"
        },
        {
          "source": "Validate Appointments",
          "target": "Update Appointments",
          "label": "Validated Appointments"
        },
        {
          "source": "Update Appointments",
          "target": "Appointments Records",
          "label": "Saved Appointments"
        },
        {
          "source": "Update Appointments",
          "target": "Customer",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 302,
    "title": "Global Logistics System (Context Diagram)",
    "category": "Generated Logistics",
    "level": "Context Diagram",
    "description": "A 'Guest' sends a 'Payments Request' to the 'Global Logistics System' (Process). The system processes the request and sends a 'Payments Response' back to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Global Logistics System"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Global Logistics System",
          "label": "Payments Request"
        },
        {
          "source": "Global Logistics System",
          "target": "Guest",
          "label": "Payments Response"
        }
      ]
    }
  },
  {
    "id": 303,
    "title": "Global School System (Level 1 DFD)",
    "category": "Generated School",
    "level": "Level 1 DFD",
    "description": "A 'Student' submits a 'Claims Request' to 'Register Claims' (Process). The process checks the 'Claims DB' (Data Store) for 'Claims Data', updates the 'Claims DB' with 'New Claims Data', and sends a 'Claims Status' to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Register Claims"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Claims DB"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Register Claims",
          "label": "Claims Request"
        },
        {
          "source": "Claims DB",
          "target": "Register Claims",
          "label": "Claims Data"
        },
        {
          "source": "Register Claims",
          "target": "Claims DB",
          "label": "New Claims Data"
        },
        {
          "source": "Register Claims",
          "target": "Student",
          "label": "Claims Status"
        }
      ]
    }
  },
  {
    "id": 304,
    "title": "Secure Retail System (Level 2 DFD)",
    "category": "Generated Retail",
    "level": "Level 2 DFD",
    "description": "A 'Guest' sends a 'Profiles Form' to 'Validate Profiles' (Process). 'Validate Profiles' fetches 'Config Data' from 'Profiles Config' (Data Store) and passes 'Validated Profiles' to 'Update Profiles' (Process). 'Update Profiles' saves 'Saved Profiles' to 'Profiles Records' (Data Store) and issues a 'Confirmation' to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Profiles"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Profiles"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Profiles Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Profiles Records"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Validate Profiles",
          "label": "Profiles Form"
        },
        {
          "source": "Profiles Config",
          "target": "Validate Profiles",
          "label": "Config Data"
        },
        {
          "source": "Validate Profiles",
          "target": "Update Profiles",
          "label": "Validated Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Profiles Records",
          "label": "Saved Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Guest",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 305,
    "title": "Secure Logistics System (Context Diagram)",
    "category": "Generated Logistics",
    "level": "Context Diagram",
    "description": "A 'Guest' sends a 'Appointments Request' to the 'Secure Logistics System' (Process). The system processes the request and sends a 'Appointments Response' back to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Secure Logistics System"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Secure Logistics System",
          "label": "Appointments Request"
        },
        {
          "source": "Secure Logistics System",
          "target": "Guest",
          "label": "Appointments Response"
        }
      ]
    }
  },
  {
    "id": 306,
    "title": "Quick Hospital System (Level 1 DFD)",
    "category": "Generated Hospital",
    "level": "Level 1 DFD",
    "description": "A 'Customer' submits a 'Requests Request' to 'Generate Requests' (Process). The process checks the 'Requests DB' (Data Store) for 'Requests Data', updates the 'Requests DB' with 'New Requests Data', and sends a 'Requests Status' to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Generate Requests"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Requests DB"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Generate Requests",
          "label": "Requests Request"
        },
        {
          "source": "Requests DB",
          "target": "Generate Requests",
          "label": "Requests Data"
        },
        {
          "source": "Generate Requests",
          "target": "Requests DB",
          "label": "New Requests Data"
        },
        {
          "source": "Generate Requests",
          "target": "Customer",
          "label": "Requests Status"
        }
      ]
    }
  },
  {
    "id": 307,
    "title": "Global Pharmacy System (Context Diagram)",
    "category": "Generated Pharmacy",
    "level": "Context Diagram",
    "description": "A 'Patient' sends a 'Reports Request' to the 'Global Pharmacy System' (Process). The system processes the request and sends a 'Reports Response' back to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Global Pharmacy System"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Global Pharmacy System",
          "label": "Reports Request"
        },
        {
          "source": "Global Pharmacy System",
          "target": "Patient",
          "label": "Reports Response"
        }
      ]
    }
  },
  {
    "id": 308,
    "title": "Global Cinema System (Level 2 DFD)",
    "category": "Generated Cinema",
    "level": "Level 2 DFD",
    "description": "A 'Patient' sends a 'Requests Form' to 'Validate Requests' (Process). 'Validate Requests' fetches 'Config Data' from 'Requests Config' (Data Store) and passes 'Validated Requests' to 'Update Requests' (Process). 'Update Requests' saves 'Saved Requests' to 'Requests Records' (Data Store) and issues a 'Confirmation' to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Requests"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Requests"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Requests Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Requests Records"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Validate Requests",
          "label": "Requests Form"
        },
        {
          "source": "Requests Config",
          "target": "Validate Requests",
          "label": "Config Data"
        },
        {
          "source": "Validate Requests",
          "target": "Update Requests",
          "label": "Validated Requests"
        },
        {
          "source": "Update Requests",
          "target": "Requests Records",
          "label": "Saved Requests"
        },
        {
          "source": "Update Requests",
          "target": "Patient",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 309,
    "title": "Secure Retail System (Level 1 DFD)",
    "category": "Generated Retail",
    "level": "Level 1 DFD",
    "description": "A 'Customer' submits a 'Profiles Request' to 'Generate Profiles' (Process). The process checks the 'Profiles DB' (Data Store) for 'Profiles Data', updates the 'Profiles DB' with 'New Profiles Data', and sends a 'Profiles Status' to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Generate Profiles"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Profiles DB"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Generate Profiles",
          "label": "Profiles Request"
        },
        {
          "source": "Profiles DB",
          "target": "Generate Profiles",
          "label": "Profiles Data"
        },
        {
          "source": "Generate Profiles",
          "target": "Profiles DB",
          "label": "New Profiles Data"
        },
        {
          "source": "Generate Profiles",
          "target": "Customer",
          "label": "Profiles Status"
        }
      ]
    }
  },
  {
    "id": 310,
    "title": "Enterprise Logistics System (Context Diagram)",
    "category": "Generated Logistics",
    "level": "Context Diagram",
    "description": "A 'Driver' sends a 'Appointments Request' to the 'Enterprise Logistics System' (Process). The system processes the request and sends a 'Appointments Response' back to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Enterprise Logistics System"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Enterprise Logistics System",
          "label": "Appointments Request"
        },
        {
          "source": "Enterprise Logistics System",
          "target": "Driver",
          "label": "Appointments Response"
        }
      ]
    }
  },
  {
    "id": 311,
    "title": "Digital Pharmacy System (Level 2 DFD)",
    "category": "Generated Pharmacy",
    "level": "Level 2 DFD",
    "description": "A 'Patient' sends a 'Requests Form' to 'Validate Requests' (Process). 'Validate Requests' fetches 'Config Data' from 'Requests Config' (Data Store) and passes 'Validated Requests' to 'Update Requests' (Process). 'Update Requests' saves 'Saved Requests' to 'Requests Records' (Data Store) and issues a 'Confirmation' to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Requests"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Requests"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Requests Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Requests Records"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Validate Requests",
          "label": "Requests Form"
        },
        {
          "source": "Requests Config",
          "target": "Validate Requests",
          "label": "Config Data"
        },
        {
          "source": "Validate Requests",
          "target": "Update Requests",
          "label": "Validated Requests"
        },
        {
          "source": "Update Requests",
          "target": "Requests Records",
          "label": "Saved Requests"
        },
        {
          "source": "Update Requests",
          "target": "Patient",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 312,
    "title": "Local Hospital System (Level 2 DFD)",
    "category": "Generated Hospital",
    "level": "Level 2 DFD",
    "description": "A 'Student' sends a 'Records Form' to 'Validate Records' (Process). 'Validate Records' fetches 'Config Data' from 'Records Config' (Data Store) and passes 'Validated Records' to 'Update Records' (Process). 'Update Records' saves 'Saved Records' to 'Records Records' (Data Store) and issues a 'Confirmation' to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Records"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Records"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Records Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Records Records"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Validate Records",
          "label": "Records Form"
        },
        {
          "source": "Records Config",
          "target": "Validate Records",
          "label": "Config Data"
        },
        {
          "source": "Validate Records",
          "target": "Update Records",
          "label": "Validated Records"
        },
        {
          "source": "Update Records",
          "target": "Records Records",
          "label": "Saved Records"
        },
        {
          "source": "Update Records",
          "target": "Student",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 313,
    "title": "Auto Library System (Level 1 DFD)",
    "category": "Generated Library",
    "level": "Level 1 DFD",
    "description": "A 'Patient' submits a 'Profiles Request' to 'Approve Profiles' (Process). The process checks the 'Profiles DB' (Data Store) for 'Profiles Data', updates the 'Profiles DB' with 'New Profiles Data', and sends a 'Profiles Status' to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Approve Profiles"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Profiles DB"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Approve Profiles",
          "label": "Profiles Request"
        },
        {
          "source": "Profiles DB",
          "target": "Approve Profiles",
          "label": "Profiles Data"
        },
        {
          "source": "Approve Profiles",
          "target": "Profiles DB",
          "label": "New Profiles Data"
        },
        {
          "source": "Approve Profiles",
          "target": "Patient",
          "label": "Profiles Status"
        }
      ]
    }
  },
  {
    "id": 314,
    "title": "Local Airline System (Level 1 DFD)",
    "category": "Generated Airline",
    "level": "Level 1 DFD",
    "description": "A 'Manager' submits a 'Profiles Request' to 'Register Profiles' (Process). The process checks the 'Profiles DB' (Data Store) for 'Profiles Data', updates the 'Profiles DB' with 'New Profiles Data', and sends a 'Profiles Status' to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Register Profiles"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Profiles DB"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Register Profiles",
          "label": "Profiles Request"
        },
        {
          "source": "Profiles DB",
          "target": "Register Profiles",
          "label": "Profiles Data"
        },
        {
          "source": "Register Profiles",
          "target": "Profiles DB",
          "label": "New Profiles Data"
        },
        {
          "source": "Register Profiles",
          "target": "Manager",
          "label": "Profiles Status"
        }
      ]
    }
  },
  {
    "id": 315,
    "title": "Pro Hotel System (Level 2 DFD)",
    "category": "Generated Hotel",
    "level": "Level 2 DFD",
    "description": "A 'Admin' sends a 'Payments Form' to 'Validate Payments' (Process). 'Validate Payments' fetches 'Config Data' from 'Payments Config' (Data Store) and passes 'Validated Payments' to 'Update Payments' (Process). 'Update Payments' saves 'Saved Payments' to 'Payments Records' (Data Store) and issues a 'Confirmation' to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Payments"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Payments"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Payments Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Payments Records"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Validate Payments",
          "label": "Payments Form"
        },
        {
          "source": "Payments Config",
          "target": "Validate Payments",
          "label": "Config Data"
        },
        {
          "source": "Validate Payments",
          "target": "Update Payments",
          "label": "Validated Payments"
        },
        {
          "source": "Update Payments",
          "target": "Payments Records",
          "label": "Saved Payments"
        },
        {
          "source": "Update Payments",
          "target": "Admin",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 316,
    "title": "Smart Hotel System (Level 1 DFD)",
    "category": "Generated Hotel",
    "level": "Level 1 DFD",
    "description": "A 'Admin' submits a 'Orders Request' to 'Manage Orders' (Process). The process checks the 'Orders DB' (Data Store) for 'Orders Data', updates the 'Orders DB' with 'New Orders Data', and sends a 'Orders Status' to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Manage Orders"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Orders DB"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Manage Orders",
          "label": "Orders Request"
        },
        {
          "source": "Orders DB",
          "target": "Manage Orders",
          "label": "Orders Data"
        },
        {
          "source": "Manage Orders",
          "target": "Orders DB",
          "label": "New Orders Data"
        },
        {
          "source": "Manage Orders",
          "target": "Admin",
          "label": "Orders Status"
        }
      ]
    }
  },
  {
    "id": 317,
    "title": "Quick Banking System (Context Diagram)",
    "category": "Generated Banking",
    "level": "Context Diagram",
    "description": "A 'Guest' sends a 'Requests Request' to the 'Quick Banking System' (Process). The system processes the request and sends a 'Requests Response' back to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Quick Banking System"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Quick Banking System",
          "label": "Requests Request"
        },
        {
          "source": "Quick Banking System",
          "target": "Guest",
          "label": "Requests Response"
        }
      ]
    }
  },
  {
    "id": 318,
    "title": "Pro Hotel System (Level 1 DFD)",
    "category": "Generated Hotel",
    "level": "Level 1 DFD",
    "description": "A 'Driver' submits a 'Appointments Request' to 'Handle Appointments' (Process). The process checks the 'Appointments DB' (Data Store) for 'Appointments Data', updates the 'Appointments DB' with 'New Appointments Data', and sends a 'Appointments Status' to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Handle Appointments"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Appointments DB"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Handle Appointments",
          "label": "Appointments Request"
        },
        {
          "source": "Appointments DB",
          "target": "Handle Appointments",
          "label": "Appointments Data"
        },
        {
          "source": "Handle Appointments",
          "target": "Appointments DB",
          "label": "New Appointments Data"
        },
        {
          "source": "Handle Appointments",
          "target": "Driver",
          "label": "Appointments Status"
        }
      ]
    }
  },
  {
    "id": 319,
    "title": "Pro School System (Level 1 DFD)",
    "category": "Generated School",
    "level": "Level 1 DFD",
    "description": "A 'User' submits a 'Orders Request' to 'Analyze Orders' (Process). The process checks the 'Orders DB' (Data Store) for 'Orders Data', updates the 'Orders DB' with 'New Orders Data', and sends a 'Orders Status' to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Analyze Orders"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Orders DB"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Analyze Orders",
          "label": "Orders Request"
        },
        {
          "source": "Orders DB",
          "target": "Analyze Orders",
          "label": "Orders Data"
        },
        {
          "source": "Analyze Orders",
          "target": "Orders DB",
          "label": "New Orders Data"
        },
        {
          "source": "Analyze Orders",
          "target": "User",
          "label": "Orders Status"
        }
      ]
    }
  },
  {
    "id": 320,
    "title": "Smart Airline System (Level 2 DFD)",
    "category": "Generated Airline",
    "level": "Level 2 DFD",
    "description": "A 'Admin' sends a 'Orders Form' to 'Validate Orders' (Process). 'Validate Orders' fetches 'Config Data' from 'Orders Config' (Data Store) and passes 'Validated Orders' to 'Update Orders' (Process). 'Update Orders' saves 'Saved Orders' to 'Orders Records' (Data Store) and issues a 'Confirmation' to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Orders"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Orders"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Orders Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Orders Records"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Validate Orders",
          "label": "Orders Form"
        },
        {
          "source": "Orders Config",
          "target": "Validate Orders",
          "label": "Config Data"
        },
        {
          "source": "Validate Orders",
          "target": "Update Orders",
          "label": "Validated Orders"
        },
        {
          "source": "Update Orders",
          "target": "Orders Records",
          "label": "Saved Orders"
        },
        {
          "source": "Update Orders",
          "target": "Admin",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 321,
    "title": "Global Pharmacy System (Context Diagram)",
    "category": "Generated Pharmacy",
    "level": "Context Diagram",
    "description": "A 'Customer' sends a 'Appointments Request' to the 'Global Pharmacy System' (Process). The system processes the request and sends a 'Appointments Response' back to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Global Pharmacy System"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Global Pharmacy System",
          "label": "Appointments Request"
        },
        {
          "source": "Global Pharmacy System",
          "target": "Customer",
          "label": "Appointments Response"
        }
      ]
    }
  },
  {
    "id": 322,
    "title": "Smart Hospital System (Level 1 DFD)",
    "category": "Generated Hospital",
    "level": "Level 1 DFD",
    "description": "A 'Manager' submits a 'Records Request' to 'Manage Records' (Process). The process checks the 'Records DB' (Data Store) for 'Records Data', updates the 'Records DB' with 'New Records Data', and sends a 'Records Status' to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Manage Records"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Records DB"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Manage Records",
          "label": "Records Request"
        },
        {
          "source": "Records DB",
          "target": "Manage Records",
          "label": "Records Data"
        },
        {
          "source": "Manage Records",
          "target": "Records DB",
          "label": "New Records Data"
        },
        {
          "source": "Manage Records",
          "target": "Manager",
          "label": "Records Status"
        }
      ]
    }
  },
  {
    "id": 323,
    "title": "Cloud Retail System (Level 1 DFD)",
    "category": "Generated Retail",
    "level": "Level 1 DFD",
    "description": "A 'Client' submits a 'Claims Request' to 'Process Claims' (Process). The process checks the 'Claims DB' (Data Store) for 'Claims Data', updates the 'Claims DB' with 'New Claims Data', and sends a 'Claims Status' to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Process Claims"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Claims DB"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Process Claims",
          "label": "Claims Request"
        },
        {
          "source": "Claims DB",
          "target": "Process Claims",
          "label": "Claims Data"
        },
        {
          "source": "Process Claims",
          "target": "Claims DB",
          "label": "New Claims Data"
        },
        {
          "source": "Process Claims",
          "target": "Client",
          "label": "Claims Status"
        }
      ]
    }
  },
  {
    "id": 324,
    "title": "Auto Airline System (Level 2 DFD)",
    "category": "Generated Airline",
    "level": "Level 2 DFD",
    "description": "A 'Client' sends a 'Payments Form' to 'Validate Payments' (Process). 'Validate Payments' fetches 'Config Data' from 'Payments Config' (Data Store) and passes 'Validated Payments' to 'Update Payments' (Process). 'Update Payments' saves 'Saved Payments' to 'Payments Records' (Data Store) and issues a 'Confirmation' to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Payments"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Payments"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Payments Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Payments Records"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Validate Payments",
          "label": "Payments Form"
        },
        {
          "source": "Payments Config",
          "target": "Validate Payments",
          "label": "Config Data"
        },
        {
          "source": "Validate Payments",
          "target": "Update Payments",
          "label": "Validated Payments"
        },
        {
          "source": "Update Payments",
          "target": "Payments Records",
          "label": "Saved Payments"
        },
        {
          "source": "Update Payments",
          "target": "Client",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 325,
    "title": "Global Logistics System (Context Diagram)",
    "category": "Generated Logistics",
    "level": "Context Diagram",
    "description": "A 'Student' sends a 'Profiles Request' to the 'Global Logistics System' (Process). The system processes the request and sends a 'Profiles Response' back to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Global Logistics System"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Global Logistics System",
          "label": "Profiles Request"
        },
        {
          "source": "Global Logistics System",
          "target": "Student",
          "label": "Profiles Response"
        }
      ]
    }
  },
  {
    "id": 326,
    "title": "Local School System (Context Diagram)",
    "category": "Generated School",
    "level": "Context Diagram",
    "description": "A 'Patient' sends a 'Records Request' to the 'Local School System' (Process). The system processes the request and sends a 'Records Response' back to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Local School System"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Local School System",
          "label": "Records Request"
        },
        {
          "source": "Local School System",
          "target": "Patient",
          "label": "Records Response"
        }
      ]
    }
  },
  {
    "id": 327,
    "title": "Cloud Cinema System (Level 1 DFD)",
    "category": "Generated Cinema",
    "level": "Level 1 DFD",
    "description": "A 'Client' submits a 'Orders Request' to 'Update Orders' (Process). The process checks the 'Orders DB' (Data Store) for 'Orders Data', updates the 'Orders DB' with 'New Orders Data', and sends a 'Orders Status' to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Update Orders"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Orders DB"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Update Orders",
          "label": "Orders Request"
        },
        {
          "source": "Orders DB",
          "target": "Update Orders",
          "label": "Orders Data"
        },
        {
          "source": "Update Orders",
          "target": "Orders DB",
          "label": "New Orders Data"
        },
        {
          "source": "Update Orders",
          "target": "Client",
          "label": "Orders Status"
        }
      ]
    }
  },
  {
    "id": 328,
    "title": "Digital Logistics System (Level 2 DFD)",
    "category": "Generated Logistics",
    "level": "Level 2 DFD",
    "description": "A 'Customer' sends a 'Tickets Form' to 'Validate Tickets' (Process). 'Validate Tickets' fetches 'Config Data' from 'Tickets Config' (Data Store) and passes 'Validated Tickets' to 'Update Tickets' (Process). 'Update Tickets' saves 'Saved Tickets' to 'Tickets Records' (Data Store) and issues a 'Confirmation' to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Tickets"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Tickets"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Tickets Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Tickets Records"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Validate Tickets",
          "label": "Tickets Form"
        },
        {
          "source": "Tickets Config",
          "target": "Validate Tickets",
          "label": "Config Data"
        },
        {
          "source": "Validate Tickets",
          "target": "Update Tickets",
          "label": "Validated Tickets"
        },
        {
          "source": "Update Tickets",
          "target": "Tickets Records",
          "label": "Saved Tickets"
        },
        {
          "source": "Update Tickets",
          "target": "Customer",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 329,
    "title": "Global Banking System (Context Diagram)",
    "category": "Generated Banking",
    "level": "Context Diagram",
    "description": "A 'Admin' sends a 'Requests Request' to the 'Global Banking System' (Process). The system processes the request and sends a 'Requests Response' back to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Global Banking System"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Global Banking System",
          "label": "Requests Request"
        },
        {
          "source": "Global Banking System",
          "target": "Admin",
          "label": "Requests Response"
        }
      ]
    }
  },
  {
    "id": 330,
    "title": "Smart Airline System (Context Diagram)",
    "category": "Generated Airline",
    "level": "Context Diagram",
    "description": "A 'Admin' sends a 'Invoices Request' to the 'Smart Airline System' (Process). The system processes the request and sends a 'Invoices Response' back to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Smart Airline System"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Smart Airline System",
          "label": "Invoices Request"
        },
        {
          "source": "Smart Airline System",
          "target": "Admin",
          "label": "Invoices Response"
        }
      ]
    }
  },
  {
    "id": 331,
    "title": "Digital Airline System (Level 1 DFD)",
    "category": "Generated Airline",
    "level": "Level 1 DFD",
    "description": "A 'Driver' submits a 'Orders Request' to 'Register Orders' (Process). The process checks the 'Orders DB' (Data Store) for 'Orders Data', updates the 'Orders DB' with 'New Orders Data', and sends a 'Orders Status' to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Register Orders"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Orders DB"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Register Orders",
          "label": "Orders Request"
        },
        {
          "source": "Orders DB",
          "target": "Register Orders",
          "label": "Orders Data"
        },
        {
          "source": "Register Orders",
          "target": "Orders DB",
          "label": "New Orders Data"
        },
        {
          "source": "Register Orders",
          "target": "Driver",
          "label": "Orders Status"
        }
      ]
    }
  },
  {
    "id": 332,
    "title": "Secure Cinema System (Level 2 DFD)",
    "category": "Generated Cinema",
    "level": "Level 2 DFD",
    "description": "A 'Driver' sends a 'Profiles Form' to 'Validate Profiles' (Process). 'Validate Profiles' fetches 'Config Data' from 'Profiles Config' (Data Store) and passes 'Validated Profiles' to 'Update Profiles' (Process). 'Update Profiles' saves 'Saved Profiles' to 'Profiles Records' (Data Store) and issues a 'Confirmation' to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Profiles"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Profiles"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Profiles Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Profiles Records"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Validate Profiles",
          "label": "Profiles Form"
        },
        {
          "source": "Profiles Config",
          "target": "Validate Profiles",
          "label": "Config Data"
        },
        {
          "source": "Validate Profiles",
          "target": "Update Profiles",
          "label": "Validated Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Profiles Records",
          "label": "Saved Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Driver",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 333,
    "title": "Secure Retail System (Level 1 DFD)",
    "category": "Generated Retail",
    "level": "Level 1 DFD",
    "description": "A 'Patient' submits a 'Orders Request' to 'Register Orders' (Process). The process checks the 'Orders DB' (Data Store) for 'Orders Data', updates the 'Orders DB' with 'New Orders Data', and sends a 'Orders Status' to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Register Orders"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Orders DB"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Register Orders",
          "label": "Orders Request"
        },
        {
          "source": "Orders DB",
          "target": "Register Orders",
          "label": "Orders Data"
        },
        {
          "source": "Register Orders",
          "target": "Orders DB",
          "label": "New Orders Data"
        },
        {
          "source": "Register Orders",
          "target": "Patient",
          "label": "Orders Status"
        }
      ]
    }
  },
  {
    "id": 334,
    "title": "Secure Logistics System (Context Diagram)",
    "category": "Generated Logistics",
    "level": "Context Diagram",
    "description": "A 'Driver' sends a 'Profiles Request' to the 'Secure Logistics System' (Process). The system processes the request and sends a 'Profiles Response' back to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Secure Logistics System"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Secure Logistics System",
          "label": "Profiles Request"
        },
        {
          "source": "Secure Logistics System",
          "target": "Driver",
          "label": "Profiles Response"
        }
      ]
    }
  },
  {
    "id": 335,
    "title": "Digital Hotel System (Level 2 DFD)",
    "category": "Generated Hotel",
    "level": "Level 2 DFD",
    "description": "A 'User' sends a 'Claims Form' to 'Validate Claims' (Process). 'Validate Claims' fetches 'Config Data' from 'Claims Config' (Data Store) and passes 'Validated Claims' to 'Update Claims' (Process). 'Update Claims' saves 'Saved Claims' to 'Claims Records' (Data Store) and issues a 'Confirmation' to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Claims"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Claims"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Claims Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Claims Records"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Validate Claims",
          "label": "Claims Form"
        },
        {
          "source": "Claims Config",
          "target": "Validate Claims",
          "label": "Config Data"
        },
        {
          "source": "Validate Claims",
          "target": "Update Claims",
          "label": "Validated Claims"
        },
        {
          "source": "Update Claims",
          "target": "Claims Records",
          "label": "Saved Claims"
        },
        {
          "source": "Update Claims",
          "target": "User",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 336,
    "title": "Auto School System (Level 1 DFD)",
    "category": "Generated School",
    "level": "Level 1 DFD",
    "description": "A 'Student' submits a 'Records Request' to 'Update Records' (Process). The process checks the 'Records DB' (Data Store) for 'Records Data', updates the 'Records DB' with 'New Records Data', and sends a 'Records Status' to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Update Records"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Records DB"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Update Records",
          "label": "Records Request"
        },
        {
          "source": "Records DB",
          "target": "Update Records",
          "label": "Records Data"
        },
        {
          "source": "Update Records",
          "target": "Records DB",
          "label": "New Records Data"
        },
        {
          "source": "Update Records",
          "target": "Student",
          "label": "Records Status"
        }
      ]
    }
  },
  {
    "id": 337,
    "title": "Smart Pharmacy System (Level 1 DFD)",
    "category": "Generated Pharmacy",
    "level": "Level 1 DFD",
    "description": "A 'Admin' submits a 'Tickets Request' to 'Analyze Tickets' (Process). The process checks the 'Tickets DB' (Data Store) for 'Tickets Data', updates the 'Tickets DB' with 'New Tickets Data', and sends a 'Tickets Status' to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Analyze Tickets"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Tickets DB"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Analyze Tickets",
          "label": "Tickets Request"
        },
        {
          "source": "Tickets DB",
          "target": "Analyze Tickets",
          "label": "Tickets Data"
        },
        {
          "source": "Analyze Tickets",
          "target": "Tickets DB",
          "label": "New Tickets Data"
        },
        {
          "source": "Analyze Tickets",
          "target": "Admin",
          "label": "Tickets Status"
        }
      ]
    }
  },
  {
    "id": 338,
    "title": "Smart Banking System (Context Diagram)",
    "category": "Generated Banking",
    "level": "Context Diagram",
    "description": "A 'Guest' sends a 'Profiles Request' to the 'Smart Banking System' (Process). The system processes the request and sends a 'Profiles Response' back to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Smart Banking System"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Smart Banking System",
          "label": "Profiles Request"
        },
        {
          "source": "Smart Banking System",
          "target": "Guest",
          "label": "Profiles Response"
        }
      ]
    }
  },
  {
    "id": 339,
    "title": "Local Hotel System (Level 2 DFD)",
    "category": "Generated Hotel",
    "level": "Level 2 DFD",
    "description": "A 'Admin' sends a 'Reports Form' to 'Validate Reports' (Process). 'Validate Reports' fetches 'Config Data' from 'Reports Config' (Data Store) and passes 'Validated Reports' to 'Update Reports' (Process). 'Update Reports' saves 'Saved Reports' to 'Reports Records' (Data Store) and issues a 'Confirmation' to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Reports"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Reports"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Reports Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Reports Records"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Validate Reports",
          "label": "Reports Form"
        },
        {
          "source": "Reports Config",
          "target": "Validate Reports",
          "label": "Config Data"
        },
        {
          "source": "Validate Reports",
          "target": "Update Reports",
          "label": "Validated Reports"
        },
        {
          "source": "Update Reports",
          "target": "Reports Records",
          "label": "Saved Reports"
        },
        {
          "source": "Update Reports",
          "target": "Admin",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 340,
    "title": "Cloud Retail System (Level 2 DFD)",
    "category": "Generated Retail",
    "level": "Level 2 DFD",
    "description": "A 'Guest' sends a 'Reports Form' to 'Validate Reports' (Process). 'Validate Reports' fetches 'Config Data' from 'Reports Config' (Data Store) and passes 'Validated Reports' to 'Update Reports' (Process). 'Update Reports' saves 'Saved Reports' to 'Reports Records' (Data Store) and issues a 'Confirmation' to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Reports"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Reports"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Reports Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Reports Records"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Validate Reports",
          "label": "Reports Form"
        },
        {
          "source": "Reports Config",
          "target": "Validate Reports",
          "label": "Config Data"
        },
        {
          "source": "Validate Reports",
          "target": "Update Reports",
          "label": "Validated Reports"
        },
        {
          "source": "Update Reports",
          "target": "Reports Records",
          "label": "Saved Reports"
        },
        {
          "source": "Update Reports",
          "target": "Guest",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 341,
    "title": "Global Hospital System (Level 1 DFD)",
    "category": "Generated Hospital",
    "level": "Level 1 DFD",
    "description": "A 'Manager' submits a 'Claims Request' to 'Register Claims' (Process). The process checks the 'Claims DB' (Data Store) for 'Claims Data', updates the 'Claims DB' with 'New Claims Data', and sends a 'Claims Status' to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Register Claims"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Claims DB"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Register Claims",
          "label": "Claims Request"
        },
        {
          "source": "Claims DB",
          "target": "Register Claims",
          "label": "Claims Data"
        },
        {
          "source": "Register Claims",
          "target": "Claims DB",
          "label": "New Claims Data"
        },
        {
          "source": "Register Claims",
          "target": "Manager",
          "label": "Claims Status"
        }
      ]
    }
  },
  {
    "id": 342,
    "title": "Pro Logistics System (Level 1 DFD)",
    "category": "Generated Logistics",
    "level": "Level 1 DFD",
    "description": "A 'Manager' submits a 'Claims Request' to 'Generate Claims' (Process). The process checks the 'Claims DB' (Data Store) for 'Claims Data', updates the 'Claims DB' with 'New Claims Data', and sends a 'Claims Status' to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Generate Claims"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Claims DB"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Generate Claims",
          "label": "Claims Request"
        },
        {
          "source": "Claims DB",
          "target": "Generate Claims",
          "label": "Claims Data"
        },
        {
          "source": "Generate Claims",
          "target": "Claims DB",
          "label": "New Claims Data"
        },
        {
          "source": "Generate Claims",
          "target": "Manager",
          "label": "Claims Status"
        }
      ]
    }
  },
  {
    "id": 343,
    "title": "Cloud Logistics System (Context Diagram)",
    "category": "Generated Logistics",
    "level": "Context Diagram",
    "description": "A 'Manager' sends a 'Orders Request' to the 'Cloud Logistics System' (Process). The system processes the request and sends a 'Orders Response' back to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Cloud Logistics System"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Cloud Logistics System",
          "label": "Orders Request"
        },
        {
          "source": "Cloud Logistics System",
          "target": "Manager",
          "label": "Orders Response"
        }
      ]
    }
  },
  {
    "id": 344,
    "title": "Smart Airline System (Level 1 DFD)",
    "category": "Generated Airline",
    "level": "Level 1 DFD",
    "description": "A 'User' submits a 'Orders Request' to 'Generate Orders' (Process). The process checks the 'Orders DB' (Data Store) for 'Orders Data', updates the 'Orders DB' with 'New Orders Data', and sends a 'Orders Status' to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Generate Orders"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Orders DB"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Generate Orders",
          "label": "Orders Request"
        },
        {
          "source": "Orders DB",
          "target": "Generate Orders",
          "label": "Orders Data"
        },
        {
          "source": "Generate Orders",
          "target": "Orders DB",
          "label": "New Orders Data"
        },
        {
          "source": "Generate Orders",
          "target": "User",
          "label": "Orders Status"
        }
      ]
    }
  },
  {
    "id": 345,
    "title": "Cloud Pharmacy System (Context Diagram)",
    "category": "Generated Pharmacy",
    "level": "Context Diagram",
    "description": "A 'Admin' sends a 'Reports Request' to the 'Cloud Pharmacy System' (Process). The system processes the request and sends a 'Reports Response' back to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Cloud Pharmacy System"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Cloud Pharmacy System",
          "label": "Reports Request"
        },
        {
          "source": "Cloud Pharmacy System",
          "target": "Admin",
          "label": "Reports Response"
        }
      ]
    }
  },
  {
    "id": 346,
    "title": "Digital Hotel System (Level 2 DFD)",
    "category": "Generated Hotel",
    "level": "Level 2 DFD",
    "description": "A 'Staff' sends a 'Orders Form' to 'Validate Orders' (Process). 'Validate Orders' fetches 'Config Data' from 'Orders Config' (Data Store) and passes 'Validated Orders' to 'Update Orders' (Process). 'Update Orders' saves 'Saved Orders' to 'Orders Records' (Data Store) and issues a 'Confirmation' to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Orders"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Orders"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Orders Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Orders Records"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Validate Orders",
          "label": "Orders Form"
        },
        {
          "source": "Orders Config",
          "target": "Validate Orders",
          "label": "Config Data"
        },
        {
          "source": "Validate Orders",
          "target": "Update Orders",
          "label": "Validated Orders"
        },
        {
          "source": "Update Orders",
          "target": "Orders Records",
          "label": "Saved Orders"
        },
        {
          "source": "Update Orders",
          "target": "Staff",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 347,
    "title": "Secure School System (Context Diagram)",
    "category": "Generated School",
    "level": "Context Diagram",
    "description": "A 'Client' sends a 'Appointments Request' to the 'Secure School System' (Process). The system processes the request and sends a 'Appointments Response' back to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Secure School System"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Secure School System",
          "label": "Appointments Request"
        },
        {
          "source": "Secure School System",
          "target": "Client",
          "label": "Appointments Response"
        }
      ]
    }
  },
  {
    "id": 348,
    "title": "Digital Logistics System (Context Diagram)",
    "category": "Generated Logistics",
    "level": "Context Diagram",
    "description": "A 'Guest' sends a 'Appointments Request' to the 'Digital Logistics System' (Process). The system processes the request and sends a 'Appointments Response' back to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Digital Logistics System"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Digital Logistics System",
          "label": "Appointments Request"
        },
        {
          "source": "Digital Logistics System",
          "target": "Guest",
          "label": "Appointments Response"
        }
      ]
    }
  },
  {
    "id": 349,
    "title": "Cloud Retail System (Level 2 DFD)",
    "category": "Generated Retail",
    "level": "Level 2 DFD",
    "description": "A 'Student' sends a 'Invoices Form' to 'Validate Invoices' (Process). 'Validate Invoices' fetches 'Config Data' from 'Invoices Config' (Data Store) and passes 'Validated Invoices' to 'Update Invoices' (Process). 'Update Invoices' saves 'Saved Invoices' to 'Invoices Records' (Data Store) and issues a 'Confirmation' to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Invoices"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Invoices"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Invoices Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Invoices Records"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Validate Invoices",
          "label": "Invoices Form"
        },
        {
          "source": "Invoices Config",
          "target": "Validate Invoices",
          "label": "Config Data"
        },
        {
          "source": "Validate Invoices",
          "target": "Update Invoices",
          "label": "Validated Invoices"
        },
        {
          "source": "Update Invoices",
          "target": "Invoices Records",
          "label": "Saved Invoices"
        },
        {
          "source": "Update Invoices",
          "target": "Student",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 350,
    "title": "Enterprise Hotel System (Level 2 DFD)",
    "category": "Generated Hotel",
    "level": "Level 2 DFD",
    "description": "A 'User' sends a 'Orders Form' to 'Validate Orders' (Process). 'Validate Orders' fetches 'Config Data' from 'Orders Config' (Data Store) and passes 'Validated Orders' to 'Update Orders' (Process). 'Update Orders' saves 'Saved Orders' to 'Orders Records' (Data Store) and issues a 'Confirmation' to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Orders"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Orders"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Orders Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Orders Records"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Validate Orders",
          "label": "Orders Form"
        },
        {
          "source": "Orders Config",
          "target": "Validate Orders",
          "label": "Config Data"
        },
        {
          "source": "Validate Orders",
          "target": "Update Orders",
          "label": "Validated Orders"
        },
        {
          "source": "Update Orders",
          "target": "Orders Records",
          "label": "Saved Orders"
        },
        {
          "source": "Update Orders",
          "target": "User",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 351,
    "title": "Global Library System (Level 1 DFD)",
    "category": "Generated Library",
    "level": "Level 1 DFD",
    "description": "A 'Client' submits a 'Requests Request' to 'Analyze Requests' (Process). The process checks the 'Requests DB' (Data Store) for 'Requests Data', updates the 'Requests DB' with 'New Requests Data', and sends a 'Requests Status' to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Analyze Requests"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Requests DB"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Analyze Requests",
          "label": "Requests Request"
        },
        {
          "source": "Requests DB",
          "target": "Analyze Requests",
          "label": "Requests Data"
        },
        {
          "source": "Analyze Requests",
          "target": "Requests DB",
          "label": "New Requests Data"
        },
        {
          "source": "Analyze Requests",
          "target": "Client",
          "label": "Requests Status"
        }
      ]
    }
  },
  {
    "id": 352,
    "title": "Auto Logistics System (Level 1 DFD)",
    "category": "Generated Logistics",
    "level": "Level 1 DFD",
    "description": "A 'Staff' submits a 'Invoices Request' to 'Generate Invoices' (Process). The process checks the 'Invoices DB' (Data Store) for 'Invoices Data', updates the 'Invoices DB' with 'New Invoices Data', and sends a 'Invoices Status' to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Generate Invoices"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Invoices DB"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Generate Invoices",
          "label": "Invoices Request"
        },
        {
          "source": "Invoices DB",
          "target": "Generate Invoices",
          "label": "Invoices Data"
        },
        {
          "source": "Generate Invoices",
          "target": "Invoices DB",
          "label": "New Invoices Data"
        },
        {
          "source": "Generate Invoices",
          "target": "Staff",
          "label": "Invoices Status"
        }
      ]
    }
  },
  {
    "id": 353,
    "title": "Smart Retail System (Level 2 DFD)",
    "category": "Generated Retail",
    "level": "Level 2 DFD",
    "description": "A 'Customer' sends a 'Invoices Form' to 'Validate Invoices' (Process). 'Validate Invoices' fetches 'Config Data' from 'Invoices Config' (Data Store) and passes 'Validated Invoices' to 'Update Invoices' (Process). 'Update Invoices' saves 'Saved Invoices' to 'Invoices Records' (Data Store) and issues a 'Confirmation' to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Invoices"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Invoices"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Invoices Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Invoices Records"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Validate Invoices",
          "label": "Invoices Form"
        },
        {
          "source": "Invoices Config",
          "target": "Validate Invoices",
          "label": "Config Data"
        },
        {
          "source": "Validate Invoices",
          "target": "Update Invoices",
          "label": "Validated Invoices"
        },
        {
          "source": "Update Invoices",
          "target": "Invoices Records",
          "label": "Saved Invoices"
        },
        {
          "source": "Update Invoices",
          "target": "Customer",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 354,
    "title": "Auto Library System (Level 1 DFD)",
    "category": "Generated Library",
    "level": "Level 1 DFD",
    "description": "A 'Client' submits a 'Appointments Request' to 'Handle Appointments' (Process). The process checks the 'Appointments DB' (Data Store) for 'Appointments Data', updates the 'Appointments DB' with 'New Appointments Data', and sends a 'Appointments Status' to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Handle Appointments"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Appointments DB"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Handle Appointments",
          "label": "Appointments Request"
        },
        {
          "source": "Appointments DB",
          "target": "Handle Appointments",
          "label": "Appointments Data"
        },
        {
          "source": "Handle Appointments",
          "target": "Appointments DB",
          "label": "New Appointments Data"
        },
        {
          "source": "Handle Appointments",
          "target": "Client",
          "label": "Appointments Status"
        }
      ]
    }
  },
  {
    "id": 355,
    "title": "Smart Airline System (Level 1 DFD)",
    "category": "Generated Airline",
    "level": "Level 1 DFD",
    "description": "A 'Staff' submits a 'Payments Request' to 'Verify Payments' (Process). The process checks the 'Payments DB' (Data Store) for 'Payments Data', updates the 'Payments DB' with 'New Payments Data', and sends a 'Payments Status' to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Verify Payments"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Payments DB"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Verify Payments",
          "label": "Payments Request"
        },
        {
          "source": "Payments DB",
          "target": "Verify Payments",
          "label": "Payments Data"
        },
        {
          "source": "Verify Payments",
          "target": "Payments DB",
          "label": "New Payments Data"
        },
        {
          "source": "Verify Payments",
          "target": "Staff",
          "label": "Payments Status"
        }
      ]
    }
  },
  {
    "id": 356,
    "title": "Local Airline System (Level 2 DFD)",
    "category": "Generated Airline",
    "level": "Level 2 DFD",
    "description": "A 'Customer' sends a 'Invoices Form' to 'Validate Invoices' (Process). 'Validate Invoices' fetches 'Config Data' from 'Invoices Config' (Data Store) and passes 'Validated Invoices' to 'Update Invoices' (Process). 'Update Invoices' saves 'Saved Invoices' to 'Invoices Records' (Data Store) and issues a 'Confirmation' to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Invoices"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Invoices"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Invoices Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Invoices Records"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Validate Invoices",
          "label": "Invoices Form"
        },
        {
          "source": "Invoices Config",
          "target": "Validate Invoices",
          "label": "Config Data"
        },
        {
          "source": "Validate Invoices",
          "target": "Update Invoices",
          "label": "Validated Invoices"
        },
        {
          "source": "Update Invoices",
          "target": "Invoices Records",
          "label": "Saved Invoices"
        },
        {
          "source": "Update Invoices",
          "target": "Customer",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 357,
    "title": "Cloud Retail System (Context Diagram)",
    "category": "Generated Retail",
    "level": "Context Diagram",
    "description": "A 'Manager' sends a 'Profiles Request' to the 'Cloud Retail System' (Process). The system processes the request and sends a 'Profiles Response' back to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Cloud Retail System"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Cloud Retail System",
          "label": "Profiles Request"
        },
        {
          "source": "Cloud Retail System",
          "target": "Manager",
          "label": "Profiles Response"
        }
      ]
    }
  },
  {
    "id": 358,
    "title": "Enterprise Library System (Context Diagram)",
    "category": "Generated Library",
    "level": "Context Diagram",
    "description": "A 'Customer' sends a 'Payments Request' to the 'Enterprise Library System' (Process). The system processes the request and sends a 'Payments Response' back to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Enterprise Library System"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Enterprise Library System",
          "label": "Payments Request"
        },
        {
          "source": "Enterprise Library System",
          "target": "Customer",
          "label": "Payments Response"
        }
      ]
    }
  },
  {
    "id": 359,
    "title": "Global Retail System (Context Diagram)",
    "category": "Generated Retail",
    "level": "Context Diagram",
    "description": "A 'Manager' sends a 'Tickets Request' to the 'Global Retail System' (Process). The system processes the request and sends a 'Tickets Response' back to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Global Retail System"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Global Retail System",
          "label": "Tickets Request"
        },
        {
          "source": "Global Retail System",
          "target": "Manager",
          "label": "Tickets Response"
        }
      ]
    }
  },
  {
    "id": 360,
    "title": "Pro Logistics System (Context Diagram)",
    "category": "Generated Logistics",
    "level": "Context Diagram",
    "description": "A 'Staff' sends a 'Invoices Request' to the 'Pro Logistics System' (Process). The system processes the request and sends a 'Invoices Response' back to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Pro Logistics System"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Pro Logistics System",
          "label": "Invoices Request"
        },
        {
          "source": "Pro Logistics System",
          "target": "Staff",
          "label": "Invoices Response"
        }
      ]
    }
  },
  {
    "id": 361,
    "title": "Global Pharmacy System (Level 1 DFD)",
    "category": "Generated Pharmacy",
    "level": "Level 1 DFD",
    "description": "A 'User' submits a 'Payments Request' to 'Generate Payments' (Process). The process checks the 'Payments DB' (Data Store) for 'Payments Data', updates the 'Payments DB' with 'New Payments Data', and sends a 'Payments Status' to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Generate Payments"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Payments DB"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Generate Payments",
          "label": "Payments Request"
        },
        {
          "source": "Payments DB",
          "target": "Generate Payments",
          "label": "Payments Data"
        },
        {
          "source": "Generate Payments",
          "target": "Payments DB",
          "label": "New Payments Data"
        },
        {
          "source": "Generate Payments",
          "target": "User",
          "label": "Payments Status"
        }
      ]
    }
  },
  {
    "id": 362,
    "title": "Enterprise Airline System (Context Diagram)",
    "category": "Generated Airline",
    "level": "Context Diagram",
    "description": "A 'Student' sends a 'Orders Request' to the 'Enterprise Airline System' (Process). The system processes the request and sends a 'Orders Response' back to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Enterprise Airline System"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Enterprise Airline System",
          "label": "Orders Request"
        },
        {
          "source": "Enterprise Airline System",
          "target": "Student",
          "label": "Orders Response"
        }
      ]
    }
  },
  {
    "id": 363,
    "title": "Cloud Hotel System (Context Diagram)",
    "category": "Generated Hotel",
    "level": "Context Diagram",
    "description": "A 'Student' sends a 'Claims Request' to the 'Cloud Hotel System' (Process). The system processes the request and sends a 'Claims Response' back to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Cloud Hotel System"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Cloud Hotel System",
          "label": "Claims Request"
        },
        {
          "source": "Cloud Hotel System",
          "target": "Student",
          "label": "Claims Response"
        }
      ]
    }
  },
  {
    "id": 364,
    "title": "Pro Library System (Context Diagram)",
    "category": "Generated Library",
    "level": "Context Diagram",
    "description": "A 'Guest' sends a 'Appointments Request' to the 'Pro Library System' (Process). The system processes the request and sends a 'Appointments Response' back to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Pro Library System"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Pro Library System",
          "label": "Appointments Request"
        },
        {
          "source": "Pro Library System",
          "target": "Guest",
          "label": "Appointments Response"
        }
      ]
    }
  },
  {
    "id": 365,
    "title": "Global Hospital System (Level 1 DFD)",
    "category": "Generated Hospital",
    "level": "Level 1 DFD",
    "description": "A 'Patient' submits a 'Tickets Request' to 'Calculate Tickets' (Process). The process checks the 'Tickets DB' (Data Store) for 'Tickets Data', updates the 'Tickets DB' with 'New Tickets Data', and sends a 'Tickets Status' to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Calculate Tickets"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Tickets DB"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Calculate Tickets",
          "label": "Tickets Request"
        },
        {
          "source": "Tickets DB",
          "target": "Calculate Tickets",
          "label": "Tickets Data"
        },
        {
          "source": "Calculate Tickets",
          "target": "Tickets DB",
          "label": "New Tickets Data"
        },
        {
          "source": "Calculate Tickets",
          "target": "Patient",
          "label": "Tickets Status"
        }
      ]
    }
  },
  {
    "id": 366,
    "title": "Secure Airline System (Context Diagram)",
    "category": "Generated Airline",
    "level": "Context Diagram",
    "description": "A 'Guest' sends a 'Orders Request' to the 'Secure Airline System' (Process). The system processes the request and sends a 'Orders Response' back to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Secure Airline System"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Secure Airline System",
          "label": "Orders Request"
        },
        {
          "source": "Secure Airline System",
          "target": "Guest",
          "label": "Orders Response"
        }
      ]
    }
  },
  {
    "id": 367,
    "title": "Pro Pharmacy System (Level 2 DFD)",
    "category": "Generated Pharmacy",
    "level": "Level 2 DFD",
    "description": "A 'User' sends a 'Reports Form' to 'Validate Reports' (Process). 'Validate Reports' fetches 'Config Data' from 'Reports Config' (Data Store) and passes 'Validated Reports' to 'Update Reports' (Process). 'Update Reports' saves 'Saved Reports' to 'Reports Records' (Data Store) and issues a 'Confirmation' to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Reports"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Reports"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Reports Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Reports Records"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Validate Reports",
          "label": "Reports Form"
        },
        {
          "source": "Reports Config",
          "target": "Validate Reports",
          "label": "Config Data"
        },
        {
          "source": "Validate Reports",
          "target": "Update Reports",
          "label": "Validated Reports"
        },
        {
          "source": "Update Reports",
          "target": "Reports Records",
          "label": "Saved Reports"
        },
        {
          "source": "Update Reports",
          "target": "User",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 368,
    "title": "Cloud Pharmacy System (Level 1 DFD)",
    "category": "Generated Pharmacy",
    "level": "Level 1 DFD",
    "description": "A 'Student' submits a 'Reports Request' to 'Calculate Reports' (Process). The process checks the 'Reports DB' (Data Store) for 'Reports Data', updates the 'Reports DB' with 'New Reports Data', and sends a 'Reports Status' to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Calculate Reports"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Reports DB"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Calculate Reports",
          "label": "Reports Request"
        },
        {
          "source": "Reports DB",
          "target": "Calculate Reports",
          "label": "Reports Data"
        },
        {
          "source": "Calculate Reports",
          "target": "Reports DB",
          "label": "New Reports Data"
        },
        {
          "source": "Calculate Reports",
          "target": "Student",
          "label": "Reports Status"
        }
      ]
    }
  },
  {
    "id": 369,
    "title": "Digital Hospital System (Context Diagram)",
    "category": "Generated Hospital",
    "level": "Context Diagram",
    "description": "A 'Manager' sends a 'Reports Request' to the 'Digital Hospital System' (Process). The system processes the request and sends a 'Reports Response' back to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Digital Hospital System"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Digital Hospital System",
          "label": "Reports Request"
        },
        {
          "source": "Digital Hospital System",
          "target": "Manager",
          "label": "Reports Response"
        }
      ]
    }
  },
  {
    "id": 370,
    "title": "Global Retail System (Context Diagram)",
    "category": "Generated Retail",
    "level": "Context Diagram",
    "description": "A 'Driver' sends a 'Requests Request' to the 'Global Retail System' (Process). The system processes the request and sends a 'Requests Response' back to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Global Retail System"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Global Retail System",
          "label": "Requests Request"
        },
        {
          "source": "Global Retail System",
          "target": "Driver",
          "label": "Requests Response"
        }
      ]
    }
  },
  {
    "id": 371,
    "title": "Enterprise Pharmacy System (Context Diagram)",
    "category": "Generated Pharmacy",
    "level": "Context Diagram",
    "description": "A 'User' sends a 'Appointments Request' to the 'Enterprise Pharmacy System' (Process). The system processes the request and sends a 'Appointments Response' back to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Enterprise Pharmacy System"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Enterprise Pharmacy System",
          "label": "Appointments Request"
        },
        {
          "source": "Enterprise Pharmacy System",
          "target": "User",
          "label": "Appointments Response"
        }
      ]
    }
  },
  {
    "id": 372,
    "title": "Smart Airline System (Context Diagram)",
    "category": "Generated Airline",
    "level": "Context Diagram",
    "description": "A 'Driver' sends a 'Reports Request' to the 'Smart Airline System' (Process). The system processes the request and sends a 'Reports Response' back to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Smart Airline System"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Smart Airline System",
          "label": "Reports Request"
        },
        {
          "source": "Smart Airline System",
          "target": "Driver",
          "label": "Reports Response"
        }
      ]
    }
  },
  {
    "id": 373,
    "title": "Digital Cinema System (Level 2 DFD)",
    "category": "Generated Cinema",
    "level": "Level 2 DFD",
    "description": "A 'Manager' sends a 'Invoices Form' to 'Validate Invoices' (Process). 'Validate Invoices' fetches 'Config Data' from 'Invoices Config' (Data Store) and passes 'Validated Invoices' to 'Update Invoices' (Process). 'Update Invoices' saves 'Saved Invoices' to 'Invoices Records' (Data Store) and issues a 'Confirmation' to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Invoices"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Invoices"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Invoices Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Invoices Records"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Validate Invoices",
          "label": "Invoices Form"
        },
        {
          "source": "Invoices Config",
          "target": "Validate Invoices",
          "label": "Config Data"
        },
        {
          "source": "Validate Invoices",
          "target": "Update Invoices",
          "label": "Validated Invoices"
        },
        {
          "source": "Update Invoices",
          "target": "Invoices Records",
          "label": "Saved Invoices"
        },
        {
          "source": "Update Invoices",
          "target": "Manager",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 374,
    "title": "Smart Airline System (Level 2 DFD)",
    "category": "Generated Airline",
    "level": "Level 2 DFD",
    "description": "A 'User' sends a 'Records Form' to 'Validate Records' (Process). 'Validate Records' fetches 'Config Data' from 'Records Config' (Data Store) and passes 'Validated Records' to 'Update Records' (Process). 'Update Records' saves 'Saved Records' to 'Records Records' (Data Store) and issues a 'Confirmation' to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Records"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Records"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Records Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Records Records"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Validate Records",
          "label": "Records Form"
        },
        {
          "source": "Records Config",
          "target": "Validate Records",
          "label": "Config Data"
        },
        {
          "source": "Validate Records",
          "target": "Update Records",
          "label": "Validated Records"
        },
        {
          "source": "Update Records",
          "target": "Records Records",
          "label": "Saved Records"
        },
        {
          "source": "Update Records",
          "target": "User",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 375,
    "title": "Digital Logistics System (Context Diagram)",
    "category": "Generated Logistics",
    "level": "Context Diagram",
    "description": "A 'Customer' sends a 'Orders Request' to the 'Digital Logistics System' (Process). The system processes the request and sends a 'Orders Response' back to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Digital Logistics System"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Digital Logistics System",
          "label": "Orders Request"
        },
        {
          "source": "Digital Logistics System",
          "target": "Customer",
          "label": "Orders Response"
        }
      ]
    }
  },
  {
    "id": 376,
    "title": "Cloud Retail System (Level 2 DFD)",
    "category": "Generated Retail",
    "level": "Level 2 DFD",
    "description": "A 'Client' sends a 'Tickets Form' to 'Validate Tickets' (Process). 'Validate Tickets' fetches 'Config Data' from 'Tickets Config' (Data Store) and passes 'Validated Tickets' to 'Update Tickets' (Process). 'Update Tickets' saves 'Saved Tickets' to 'Tickets Records' (Data Store) and issues a 'Confirmation' to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Tickets"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Tickets"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Tickets Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Tickets Records"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Validate Tickets",
          "label": "Tickets Form"
        },
        {
          "source": "Tickets Config",
          "target": "Validate Tickets",
          "label": "Config Data"
        },
        {
          "source": "Validate Tickets",
          "target": "Update Tickets",
          "label": "Validated Tickets"
        },
        {
          "source": "Update Tickets",
          "target": "Tickets Records",
          "label": "Saved Tickets"
        },
        {
          "source": "Update Tickets",
          "target": "Client",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 377,
    "title": "Enterprise Pharmacy System (Level 1 DFD)",
    "category": "Generated Pharmacy",
    "level": "Level 1 DFD",
    "description": "A 'Manager' submits a 'Payments Request' to 'Approve Payments' (Process). The process checks the 'Payments DB' (Data Store) for 'Payments Data', updates the 'Payments DB' with 'New Payments Data', and sends a 'Payments Status' to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Approve Payments"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Payments DB"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Approve Payments",
          "label": "Payments Request"
        },
        {
          "source": "Payments DB",
          "target": "Approve Payments",
          "label": "Payments Data"
        },
        {
          "source": "Approve Payments",
          "target": "Payments DB",
          "label": "New Payments Data"
        },
        {
          "source": "Approve Payments",
          "target": "Manager",
          "label": "Payments Status"
        }
      ]
    }
  },
  {
    "id": 378,
    "title": "Global Library System (Context Diagram)",
    "category": "Generated Library",
    "level": "Context Diagram",
    "description": "A 'Staff' sends a 'Requests Request' to the 'Global Library System' (Process). The system processes the request and sends a 'Requests Response' back to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Global Library System"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Global Library System",
          "label": "Requests Request"
        },
        {
          "source": "Global Library System",
          "target": "Staff",
          "label": "Requests Response"
        }
      ]
    }
  },
  {
    "id": 379,
    "title": "Quick Logistics System (Level 1 DFD)",
    "category": "Generated Logistics",
    "level": "Level 1 DFD",
    "description": "A 'Student' submits a 'Reports Request' to 'Calculate Reports' (Process). The process checks the 'Reports DB' (Data Store) for 'Reports Data', updates the 'Reports DB' with 'New Reports Data', and sends a 'Reports Status' to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Calculate Reports"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Reports DB"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Calculate Reports",
          "label": "Reports Request"
        },
        {
          "source": "Reports DB",
          "target": "Calculate Reports",
          "label": "Reports Data"
        },
        {
          "source": "Calculate Reports",
          "target": "Reports DB",
          "label": "New Reports Data"
        },
        {
          "source": "Calculate Reports",
          "target": "Student",
          "label": "Reports Status"
        }
      ]
    }
  },
  {
    "id": 380,
    "title": "Global Cinema System (Level 1 DFD)",
    "category": "Generated Cinema",
    "level": "Level 1 DFD",
    "description": "A 'User' submits a 'Appointments Request' to 'Analyze Appointments' (Process). The process checks the 'Appointments DB' (Data Store) for 'Appointments Data', updates the 'Appointments DB' with 'New Appointments Data', and sends a 'Appointments Status' to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Analyze Appointments"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Appointments DB"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Analyze Appointments",
          "label": "Appointments Request"
        },
        {
          "source": "Appointments DB",
          "target": "Analyze Appointments",
          "label": "Appointments Data"
        },
        {
          "source": "Analyze Appointments",
          "target": "Appointments DB",
          "label": "New Appointments Data"
        },
        {
          "source": "Analyze Appointments",
          "target": "User",
          "label": "Appointments Status"
        }
      ]
    }
  },
  {
    "id": 381,
    "title": "Secure Banking System (Level 2 DFD)",
    "category": "Generated Banking",
    "level": "Level 2 DFD",
    "description": "A 'Customer' sends a 'Claims Form' to 'Validate Claims' (Process). 'Validate Claims' fetches 'Config Data' from 'Claims Config' (Data Store) and passes 'Validated Claims' to 'Update Claims' (Process). 'Update Claims' saves 'Saved Claims' to 'Claims Records' (Data Store) and issues a 'Confirmation' to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Claims"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Claims"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Claims Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Claims Records"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Validate Claims",
          "label": "Claims Form"
        },
        {
          "source": "Claims Config",
          "target": "Validate Claims",
          "label": "Config Data"
        },
        {
          "source": "Validate Claims",
          "target": "Update Claims",
          "label": "Validated Claims"
        },
        {
          "source": "Update Claims",
          "target": "Claims Records",
          "label": "Saved Claims"
        },
        {
          "source": "Update Claims",
          "target": "Customer",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 382,
    "title": "Secure Pharmacy System (Level 2 DFD)",
    "category": "Generated Pharmacy",
    "level": "Level 2 DFD",
    "description": "A 'Driver' sends a 'Orders Form' to 'Validate Orders' (Process). 'Validate Orders' fetches 'Config Data' from 'Orders Config' (Data Store) and passes 'Validated Orders' to 'Update Orders' (Process). 'Update Orders' saves 'Saved Orders' to 'Orders Records' (Data Store) and issues a 'Confirmation' to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Orders"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Orders"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Orders Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Orders Records"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Validate Orders",
          "label": "Orders Form"
        },
        {
          "source": "Orders Config",
          "target": "Validate Orders",
          "label": "Config Data"
        },
        {
          "source": "Validate Orders",
          "target": "Update Orders",
          "label": "Validated Orders"
        },
        {
          "source": "Update Orders",
          "target": "Orders Records",
          "label": "Saved Orders"
        },
        {
          "source": "Update Orders",
          "target": "Driver",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 383,
    "title": "Quick Retail System (Context Diagram)",
    "category": "Generated Retail",
    "level": "Context Diagram",
    "description": "A 'User' sends a 'Payments Request' to the 'Quick Retail System' (Process). The system processes the request and sends a 'Payments Response' back to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Quick Retail System"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Quick Retail System",
          "label": "Payments Request"
        },
        {
          "source": "Quick Retail System",
          "target": "User",
          "label": "Payments Response"
        }
      ]
    }
  },
  {
    "id": 384,
    "title": "Auto Banking System (Context Diagram)",
    "category": "Generated Banking",
    "level": "Context Diagram",
    "description": "A 'Admin' sends a 'Appointments Request' to the 'Auto Banking System' (Process). The system processes the request and sends a 'Appointments Response' back to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Auto Banking System"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Auto Banking System",
          "label": "Appointments Request"
        },
        {
          "source": "Auto Banking System",
          "target": "Admin",
          "label": "Appointments Response"
        }
      ]
    }
  },
  {
    "id": 385,
    "title": "Pro Pharmacy System (Context Diagram)",
    "category": "Generated Pharmacy",
    "level": "Context Diagram",
    "description": "A 'Client' sends a 'Profiles Request' to the 'Pro Pharmacy System' (Process). The system processes the request and sends a 'Profiles Response' back to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Pro Pharmacy System"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Pro Pharmacy System",
          "label": "Profiles Request"
        },
        {
          "source": "Pro Pharmacy System",
          "target": "Client",
          "label": "Profiles Response"
        }
      ]
    }
  },
  {
    "id": 386,
    "title": "Digital Hotel System (Level 1 DFD)",
    "category": "Generated Hotel",
    "level": "Level 1 DFD",
    "description": "A 'Client' submits a 'Records Request' to 'Update Records' (Process). The process checks the 'Records DB' (Data Store) for 'Records Data', updates the 'Records DB' with 'New Records Data', and sends a 'Records Status' to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Update Records"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Records DB"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Update Records",
          "label": "Records Request"
        },
        {
          "source": "Records DB",
          "target": "Update Records",
          "label": "Records Data"
        },
        {
          "source": "Update Records",
          "target": "Records DB",
          "label": "New Records Data"
        },
        {
          "source": "Update Records",
          "target": "Client",
          "label": "Records Status"
        }
      ]
    }
  },
  {
    "id": 387,
    "title": "Pro Logistics System (Level 2 DFD)",
    "category": "Generated Logistics",
    "level": "Level 2 DFD",
    "description": "A 'Client' sends a 'Requests Form' to 'Validate Requests' (Process). 'Validate Requests' fetches 'Config Data' from 'Requests Config' (Data Store) and passes 'Validated Requests' to 'Update Requests' (Process). 'Update Requests' saves 'Saved Requests' to 'Requests Records' (Data Store) and issues a 'Confirmation' to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Requests"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Requests"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Requests Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Requests Records"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Validate Requests",
          "label": "Requests Form"
        },
        {
          "source": "Requests Config",
          "target": "Validate Requests",
          "label": "Config Data"
        },
        {
          "source": "Validate Requests",
          "target": "Update Requests",
          "label": "Validated Requests"
        },
        {
          "source": "Update Requests",
          "target": "Requests Records",
          "label": "Saved Requests"
        },
        {
          "source": "Update Requests",
          "target": "Client",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 388,
    "title": "Global Retail System (Level 1 DFD)",
    "category": "Generated Retail",
    "level": "Level 1 DFD",
    "description": "A 'User' submits a 'Appointments Request' to 'Process Appointments' (Process). The process checks the 'Appointments DB' (Data Store) for 'Appointments Data', updates the 'Appointments DB' with 'New Appointments Data', and sends a 'Appointments Status' to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Process Appointments"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Appointments DB"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Process Appointments",
          "label": "Appointments Request"
        },
        {
          "source": "Appointments DB",
          "target": "Process Appointments",
          "label": "Appointments Data"
        },
        {
          "source": "Process Appointments",
          "target": "Appointments DB",
          "label": "New Appointments Data"
        },
        {
          "source": "Process Appointments",
          "target": "User",
          "label": "Appointments Status"
        }
      ]
    }
  },
  {
    "id": 389,
    "title": "Secure Airline System (Level 2 DFD)",
    "category": "Generated Airline",
    "level": "Level 2 DFD",
    "description": "A 'Manager' sends a 'Profiles Form' to 'Validate Profiles' (Process). 'Validate Profiles' fetches 'Config Data' from 'Profiles Config' (Data Store) and passes 'Validated Profiles' to 'Update Profiles' (Process). 'Update Profiles' saves 'Saved Profiles' to 'Profiles Records' (Data Store) and issues a 'Confirmation' to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Profiles"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Profiles"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Profiles Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Profiles Records"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Validate Profiles",
          "label": "Profiles Form"
        },
        {
          "source": "Profiles Config",
          "target": "Validate Profiles",
          "label": "Config Data"
        },
        {
          "source": "Validate Profiles",
          "target": "Update Profiles",
          "label": "Validated Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Profiles Records",
          "label": "Saved Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Manager",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 390,
    "title": "Smart Airline System (Context Diagram)",
    "category": "Generated Airline",
    "level": "Context Diagram",
    "description": "A 'User' sends a 'Claims Request' to the 'Smart Airline System' (Process). The system processes the request and sends a 'Claims Response' back to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Smart Airline System"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Smart Airline System",
          "label": "Claims Request"
        },
        {
          "source": "Smart Airline System",
          "target": "User",
          "label": "Claims Response"
        }
      ]
    }
  },
  {
    "id": 391,
    "title": "Pro Logistics System (Context Diagram)",
    "category": "Generated Logistics",
    "level": "Context Diagram",
    "description": "A 'Manager' sends a 'Tickets Request' to the 'Pro Logistics System' (Process). The system processes the request and sends a 'Tickets Response' back to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Pro Logistics System"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Pro Logistics System",
          "label": "Tickets Request"
        },
        {
          "source": "Pro Logistics System",
          "target": "Manager",
          "label": "Tickets Response"
        }
      ]
    }
  },
  {
    "id": 392,
    "title": "Pro Airline System (Context Diagram)",
    "category": "Generated Airline",
    "level": "Context Diagram",
    "description": "A 'Driver' sends a 'Payments Request' to the 'Pro Airline System' (Process). The system processes the request and sends a 'Payments Response' back to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Pro Airline System"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Pro Airline System",
          "label": "Payments Request"
        },
        {
          "source": "Pro Airline System",
          "target": "Driver",
          "label": "Payments Response"
        }
      ]
    }
  },
  {
    "id": 393,
    "title": "Smart Hotel System (Level 1 DFD)",
    "category": "Generated Hotel",
    "level": "Level 1 DFD",
    "description": "A 'Admin' submits a 'Invoices Request' to 'Calculate Invoices' (Process). The process checks the 'Invoices DB' (Data Store) for 'Invoices Data', updates the 'Invoices DB' with 'New Invoices Data', and sends a 'Invoices Status' to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Calculate Invoices"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Invoices DB"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Calculate Invoices",
          "label": "Invoices Request"
        },
        {
          "source": "Invoices DB",
          "target": "Calculate Invoices",
          "label": "Invoices Data"
        },
        {
          "source": "Calculate Invoices",
          "target": "Invoices DB",
          "label": "New Invoices Data"
        },
        {
          "source": "Calculate Invoices",
          "target": "Admin",
          "label": "Invoices Status"
        }
      ]
    }
  },
  {
    "id": 394,
    "title": "Secure Banking System (Level 2 DFD)",
    "category": "Generated Banking",
    "level": "Level 2 DFD",
    "description": "A 'Guest' sends a 'Orders Form' to 'Validate Orders' (Process). 'Validate Orders' fetches 'Config Data' from 'Orders Config' (Data Store) and passes 'Validated Orders' to 'Update Orders' (Process). 'Update Orders' saves 'Saved Orders' to 'Orders Records' (Data Store) and issues a 'Confirmation' to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Orders"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Orders"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Orders Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Orders Records"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Validate Orders",
          "label": "Orders Form"
        },
        {
          "source": "Orders Config",
          "target": "Validate Orders",
          "label": "Config Data"
        },
        {
          "source": "Validate Orders",
          "target": "Update Orders",
          "label": "Validated Orders"
        },
        {
          "source": "Update Orders",
          "target": "Orders Records",
          "label": "Saved Orders"
        },
        {
          "source": "Update Orders",
          "target": "Guest",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 395,
    "title": "Digital Pharmacy System (Context Diagram)",
    "category": "Generated Pharmacy",
    "level": "Context Diagram",
    "description": "A 'Client' sends a 'Reports Request' to the 'Digital Pharmacy System' (Process). The system processes the request and sends a 'Reports Response' back to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Digital Pharmacy System"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Digital Pharmacy System",
          "label": "Reports Request"
        },
        {
          "source": "Digital Pharmacy System",
          "target": "Client",
          "label": "Reports Response"
        }
      ]
    }
  },
  {
    "id": 396,
    "title": "Cloud Retail System (Level 1 DFD)",
    "category": "Generated Retail",
    "level": "Level 1 DFD",
    "description": "A 'Admin' submits a 'Claims Request' to 'Verify Claims' (Process). The process checks the 'Claims DB' (Data Store) for 'Claims Data', updates the 'Claims DB' with 'New Claims Data', and sends a 'Claims Status' to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Verify Claims"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Claims DB"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Verify Claims",
          "label": "Claims Request"
        },
        {
          "source": "Claims DB",
          "target": "Verify Claims",
          "label": "Claims Data"
        },
        {
          "source": "Verify Claims",
          "target": "Claims DB",
          "label": "New Claims Data"
        },
        {
          "source": "Verify Claims",
          "target": "Admin",
          "label": "Claims Status"
        }
      ]
    }
  },
  {
    "id": 397,
    "title": "Enterprise Airline System (Level 1 DFD)",
    "category": "Generated Airline",
    "level": "Level 1 DFD",
    "description": "A 'Student' submits a 'Reports Request' to 'Register Reports' (Process). The process checks the 'Reports DB' (Data Store) for 'Reports Data', updates the 'Reports DB' with 'New Reports Data', and sends a 'Reports Status' to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Register Reports"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Reports DB"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Register Reports",
          "label": "Reports Request"
        },
        {
          "source": "Reports DB",
          "target": "Register Reports",
          "label": "Reports Data"
        },
        {
          "source": "Register Reports",
          "target": "Reports DB",
          "label": "New Reports Data"
        },
        {
          "source": "Register Reports",
          "target": "Student",
          "label": "Reports Status"
        }
      ]
    }
  },
  {
    "id": 398,
    "title": "Local Banking System (Level 2 DFD)",
    "category": "Generated Banking",
    "level": "Level 2 DFD",
    "description": "A 'Student' sends a 'Records Form' to 'Validate Records' (Process). 'Validate Records' fetches 'Config Data' from 'Records Config' (Data Store) and passes 'Validated Records' to 'Update Records' (Process). 'Update Records' saves 'Saved Records' to 'Records Records' (Data Store) and issues a 'Confirmation' to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Records"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Records"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Records Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Records Records"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Validate Records",
          "label": "Records Form"
        },
        {
          "source": "Records Config",
          "target": "Validate Records",
          "label": "Config Data"
        },
        {
          "source": "Validate Records",
          "target": "Update Records",
          "label": "Validated Records"
        },
        {
          "source": "Update Records",
          "target": "Records Records",
          "label": "Saved Records"
        },
        {
          "source": "Update Records",
          "target": "Student",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 399,
    "title": "Cloud Logistics System (Level 1 DFD)",
    "category": "Generated Logistics",
    "level": "Level 1 DFD",
    "description": "A 'Guest' submits a 'Tickets Request' to 'Analyze Tickets' (Process). The process checks the 'Tickets DB' (Data Store) for 'Tickets Data', updates the 'Tickets DB' with 'New Tickets Data', and sends a 'Tickets Status' to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Analyze Tickets"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Tickets DB"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Analyze Tickets",
          "label": "Tickets Request"
        },
        {
          "source": "Tickets DB",
          "target": "Analyze Tickets",
          "label": "Tickets Data"
        },
        {
          "source": "Analyze Tickets",
          "target": "Tickets DB",
          "label": "New Tickets Data"
        },
        {
          "source": "Analyze Tickets",
          "target": "Guest",
          "label": "Tickets Status"
        }
      ]
    }
  },
  {
    "id": 400,
    "title": "Auto Banking System (Context Diagram)",
    "category": "Generated Banking",
    "level": "Context Diagram",
    "description": "A 'Guest' sends a 'Appointments Request' to the 'Auto Banking System' (Process). The system processes the request and sends a 'Appointments Response' back to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Auto Banking System"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Auto Banking System",
          "label": "Appointments Request"
        },
        {
          "source": "Auto Banking System",
          "target": "Guest",
          "label": "Appointments Response"
        }
      ]
    }
  },
  {
    "id": 401,
    "title": "Secure Airline System (Level 1 DFD)",
    "category": "Generated Airline",
    "level": "Level 1 DFD",
    "description": "A 'User' submits a 'Payments Request' to 'Process Payments' (Process). The process checks the 'Payments DB' (Data Store) for 'Payments Data', updates the 'Payments DB' with 'New Payments Data', and sends a 'Payments Status' to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Process Payments"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Payments DB"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Process Payments",
          "label": "Payments Request"
        },
        {
          "source": "Payments DB",
          "target": "Process Payments",
          "label": "Payments Data"
        },
        {
          "source": "Process Payments",
          "target": "Payments DB",
          "label": "New Payments Data"
        },
        {
          "source": "Process Payments",
          "target": "User",
          "label": "Payments Status"
        }
      ]
    }
  },
  {
    "id": 402,
    "title": "Secure Banking System (Level 1 DFD)",
    "category": "Generated Banking",
    "level": "Level 1 DFD",
    "description": "A 'Customer' submits a 'Claims Request' to 'Process Claims' (Process). The process checks the 'Claims DB' (Data Store) for 'Claims Data', updates the 'Claims DB' with 'New Claims Data', and sends a 'Claims Status' to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Process Claims"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Claims DB"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Process Claims",
          "label": "Claims Request"
        },
        {
          "source": "Claims DB",
          "target": "Process Claims",
          "label": "Claims Data"
        },
        {
          "source": "Process Claims",
          "target": "Claims DB",
          "label": "New Claims Data"
        },
        {
          "source": "Process Claims",
          "target": "Customer",
          "label": "Claims Status"
        }
      ]
    }
  },
  {
    "id": 403,
    "title": "Smart Library System (Context Diagram)",
    "category": "Generated Library",
    "level": "Context Diagram",
    "description": "A 'Customer' sends a 'Profiles Request' to the 'Smart Library System' (Process). The system processes the request and sends a 'Profiles Response' back to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Smart Library System"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Smart Library System",
          "label": "Profiles Request"
        },
        {
          "source": "Smart Library System",
          "target": "Customer",
          "label": "Profiles Response"
        }
      ]
    }
  },
  {
    "id": 404,
    "title": "Quick Pharmacy System (Context Diagram)",
    "category": "Generated Pharmacy",
    "level": "Context Diagram",
    "description": "A 'Client' sends a 'Orders Request' to the 'Quick Pharmacy System' (Process). The system processes the request and sends a 'Orders Response' back to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Quick Pharmacy System"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Quick Pharmacy System",
          "label": "Orders Request"
        },
        {
          "source": "Quick Pharmacy System",
          "target": "Client",
          "label": "Orders Response"
        }
      ]
    }
  },
  {
    "id": 405,
    "title": "Cloud Library System (Level 1 DFD)",
    "category": "Generated Library",
    "level": "Level 1 DFD",
    "description": "A 'Guest' submits a 'Records Request' to 'Analyze Records' (Process). The process checks the 'Records DB' (Data Store) for 'Records Data', updates the 'Records DB' with 'New Records Data', and sends a 'Records Status' to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Analyze Records"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Records DB"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Analyze Records",
          "label": "Records Request"
        },
        {
          "source": "Records DB",
          "target": "Analyze Records",
          "label": "Records Data"
        },
        {
          "source": "Analyze Records",
          "target": "Records DB",
          "label": "New Records Data"
        },
        {
          "source": "Analyze Records",
          "target": "Guest",
          "label": "Records Status"
        }
      ]
    }
  },
  {
    "id": 406,
    "title": "Local Hotel System (Level 1 DFD)",
    "category": "Generated Hotel",
    "level": "Level 1 DFD",
    "description": "A 'Admin' submits a 'Tickets Request' to 'Calculate Tickets' (Process). The process checks the 'Tickets DB' (Data Store) for 'Tickets Data', updates the 'Tickets DB' with 'New Tickets Data', and sends a 'Tickets Status' to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Calculate Tickets"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Tickets DB"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Calculate Tickets",
          "label": "Tickets Request"
        },
        {
          "source": "Tickets DB",
          "target": "Calculate Tickets",
          "label": "Tickets Data"
        },
        {
          "source": "Calculate Tickets",
          "target": "Tickets DB",
          "label": "New Tickets Data"
        },
        {
          "source": "Calculate Tickets",
          "target": "Admin",
          "label": "Tickets Status"
        }
      ]
    }
  },
  {
    "id": 407,
    "title": "Digital Hotel System (Level 1 DFD)",
    "category": "Generated Hotel",
    "level": "Level 1 DFD",
    "description": "A 'Guest' submits a 'Invoices Request' to 'Handle Invoices' (Process). The process checks the 'Invoices DB' (Data Store) for 'Invoices Data', updates the 'Invoices DB' with 'New Invoices Data', and sends a 'Invoices Status' to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Handle Invoices"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Invoices DB"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Handle Invoices",
          "label": "Invoices Request"
        },
        {
          "source": "Invoices DB",
          "target": "Handle Invoices",
          "label": "Invoices Data"
        },
        {
          "source": "Handle Invoices",
          "target": "Invoices DB",
          "label": "New Invoices Data"
        },
        {
          "source": "Handle Invoices",
          "target": "Guest",
          "label": "Invoices Status"
        }
      ]
    }
  },
  {
    "id": 408,
    "title": "Smart Retail System (Level 1 DFD)",
    "category": "Generated Retail",
    "level": "Level 1 DFD",
    "description": "A 'Manager' submits a 'Records Request' to 'Calculate Records' (Process). The process checks the 'Records DB' (Data Store) for 'Records Data', updates the 'Records DB' with 'New Records Data', and sends a 'Records Status' to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Calculate Records"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Records DB"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Calculate Records",
          "label": "Records Request"
        },
        {
          "source": "Records DB",
          "target": "Calculate Records",
          "label": "Records Data"
        },
        {
          "source": "Calculate Records",
          "target": "Records DB",
          "label": "New Records Data"
        },
        {
          "source": "Calculate Records",
          "target": "Manager",
          "label": "Records Status"
        }
      ]
    }
  },
  {
    "id": 409,
    "title": "Cloud Retail System (Context Diagram)",
    "category": "Generated Retail",
    "level": "Context Diagram",
    "description": "A 'Patient' sends a 'Appointments Request' to the 'Cloud Retail System' (Process). The system processes the request and sends a 'Appointments Response' back to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Cloud Retail System"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Cloud Retail System",
          "label": "Appointments Request"
        },
        {
          "source": "Cloud Retail System",
          "target": "Patient",
          "label": "Appointments Response"
        }
      ]
    }
  },
  {
    "id": 410,
    "title": "Local Airline System (Level 2 DFD)",
    "category": "Generated Airline",
    "level": "Level 2 DFD",
    "description": "A 'Student' sends a 'Payments Form' to 'Validate Payments' (Process). 'Validate Payments' fetches 'Config Data' from 'Payments Config' (Data Store) and passes 'Validated Payments' to 'Update Payments' (Process). 'Update Payments' saves 'Saved Payments' to 'Payments Records' (Data Store) and issues a 'Confirmation' to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Payments"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Payments"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Payments Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Payments Records"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Validate Payments",
          "label": "Payments Form"
        },
        {
          "source": "Payments Config",
          "target": "Validate Payments",
          "label": "Config Data"
        },
        {
          "source": "Validate Payments",
          "target": "Update Payments",
          "label": "Validated Payments"
        },
        {
          "source": "Update Payments",
          "target": "Payments Records",
          "label": "Saved Payments"
        },
        {
          "source": "Update Payments",
          "target": "Student",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 411,
    "title": "Quick Hotel System (Context Diagram)",
    "category": "Generated Hotel",
    "level": "Context Diagram",
    "description": "A 'Patient' sends a 'Reports Request' to the 'Quick Hotel System' (Process). The system processes the request and sends a 'Reports Response' back to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Quick Hotel System"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Quick Hotel System",
          "label": "Reports Request"
        },
        {
          "source": "Quick Hotel System",
          "target": "Patient",
          "label": "Reports Response"
        }
      ]
    }
  },
  {
    "id": 412,
    "title": "Local Library System (Level 2 DFD)",
    "category": "Generated Library",
    "level": "Level 2 DFD",
    "description": "A 'Student' sends a 'Invoices Form' to 'Validate Invoices' (Process). 'Validate Invoices' fetches 'Config Data' from 'Invoices Config' (Data Store) and passes 'Validated Invoices' to 'Update Invoices' (Process). 'Update Invoices' saves 'Saved Invoices' to 'Invoices Records' (Data Store) and issues a 'Confirmation' to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Invoices"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Invoices"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Invoices Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Invoices Records"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Validate Invoices",
          "label": "Invoices Form"
        },
        {
          "source": "Invoices Config",
          "target": "Validate Invoices",
          "label": "Config Data"
        },
        {
          "source": "Validate Invoices",
          "target": "Update Invoices",
          "label": "Validated Invoices"
        },
        {
          "source": "Update Invoices",
          "target": "Invoices Records",
          "label": "Saved Invoices"
        },
        {
          "source": "Update Invoices",
          "target": "Student",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 413,
    "title": "Enterprise Airline System (Context Diagram)",
    "category": "Generated Airline",
    "level": "Context Diagram",
    "description": "A 'Patient' sends a 'Profiles Request' to the 'Enterprise Airline System' (Process). The system processes the request and sends a 'Profiles Response' back to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Enterprise Airline System"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Enterprise Airline System",
          "label": "Profiles Request"
        },
        {
          "source": "Enterprise Airline System",
          "target": "Patient",
          "label": "Profiles Response"
        }
      ]
    }
  },
  {
    "id": 414,
    "title": "Pro Airline System (Level 2 DFD)",
    "category": "Generated Airline",
    "level": "Level 2 DFD",
    "description": "A 'Client' sends a 'Orders Form' to 'Validate Orders' (Process). 'Validate Orders' fetches 'Config Data' from 'Orders Config' (Data Store) and passes 'Validated Orders' to 'Update Orders' (Process). 'Update Orders' saves 'Saved Orders' to 'Orders Records' (Data Store) and issues a 'Confirmation' to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Orders"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Orders"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Orders Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Orders Records"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Validate Orders",
          "label": "Orders Form"
        },
        {
          "source": "Orders Config",
          "target": "Validate Orders",
          "label": "Config Data"
        },
        {
          "source": "Validate Orders",
          "target": "Update Orders",
          "label": "Validated Orders"
        },
        {
          "source": "Update Orders",
          "target": "Orders Records",
          "label": "Saved Orders"
        },
        {
          "source": "Update Orders",
          "target": "Client",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 415,
    "title": "Secure School System (Context Diagram)",
    "category": "Generated School",
    "level": "Context Diagram",
    "description": "A 'Customer' sends a 'Requests Request' to the 'Secure School System' (Process). The system processes the request and sends a 'Requests Response' back to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Secure School System"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Secure School System",
          "label": "Requests Request"
        },
        {
          "source": "Secure School System",
          "target": "Customer",
          "label": "Requests Response"
        }
      ]
    }
  },
  {
    "id": 416,
    "title": "Auto Hospital System (Level 2 DFD)",
    "category": "Generated Hospital",
    "level": "Level 2 DFD",
    "description": "A 'Student' sends a 'Orders Form' to 'Validate Orders' (Process). 'Validate Orders' fetches 'Config Data' from 'Orders Config' (Data Store) and passes 'Validated Orders' to 'Update Orders' (Process). 'Update Orders' saves 'Saved Orders' to 'Orders Records' (Data Store) and issues a 'Confirmation' to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Orders"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Orders"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Orders Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Orders Records"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Validate Orders",
          "label": "Orders Form"
        },
        {
          "source": "Orders Config",
          "target": "Validate Orders",
          "label": "Config Data"
        },
        {
          "source": "Validate Orders",
          "target": "Update Orders",
          "label": "Validated Orders"
        },
        {
          "source": "Update Orders",
          "target": "Orders Records",
          "label": "Saved Orders"
        },
        {
          "source": "Update Orders",
          "target": "Student",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 417,
    "title": "Auto Airline System (Context Diagram)",
    "category": "Generated Airline",
    "level": "Context Diagram",
    "description": "A 'Admin' sends a 'Claims Request' to the 'Auto Airline System' (Process). The system processes the request and sends a 'Claims Response' back to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Auto Airline System"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Auto Airline System",
          "label": "Claims Request"
        },
        {
          "source": "Auto Airline System",
          "target": "Admin",
          "label": "Claims Response"
        }
      ]
    }
  },
  {
    "id": 418,
    "title": "Auto Hospital System (Level 1 DFD)",
    "category": "Generated Hospital",
    "level": "Level 1 DFD",
    "description": "A 'Client' submits a 'Payments Request' to 'Analyze Payments' (Process). The process checks the 'Payments DB' (Data Store) for 'Payments Data', updates the 'Payments DB' with 'New Payments Data', and sends a 'Payments Status' to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Analyze Payments"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Payments DB"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Analyze Payments",
          "label": "Payments Request"
        },
        {
          "source": "Payments DB",
          "target": "Analyze Payments",
          "label": "Payments Data"
        },
        {
          "source": "Analyze Payments",
          "target": "Payments DB",
          "label": "New Payments Data"
        },
        {
          "source": "Analyze Payments",
          "target": "Client",
          "label": "Payments Status"
        }
      ]
    }
  },
  {
    "id": 419,
    "title": "Secure Airline System (Context Diagram)",
    "category": "Generated Airline",
    "level": "Context Diagram",
    "description": "A 'Patient' sends a 'Claims Request' to the 'Secure Airline System' (Process). The system processes the request and sends a 'Claims Response' back to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Secure Airline System"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Secure Airline System",
          "label": "Claims Request"
        },
        {
          "source": "Secure Airline System",
          "target": "Patient",
          "label": "Claims Response"
        }
      ]
    }
  },
  {
    "id": 420,
    "title": "Global Retail System (Context Diagram)",
    "category": "Generated Retail",
    "level": "Context Diagram",
    "description": "A 'Staff' sends a 'Profiles Request' to the 'Global Retail System' (Process). The system processes the request and sends a 'Profiles Response' back to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Global Retail System"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Global Retail System",
          "label": "Profiles Request"
        },
        {
          "source": "Global Retail System",
          "target": "Staff",
          "label": "Profiles Response"
        }
      ]
    }
  },
  {
    "id": 421,
    "title": "Pro Hospital System (Context Diagram)",
    "category": "Generated Hospital",
    "level": "Context Diagram",
    "description": "A 'Patient' sends a 'Appointments Request' to the 'Pro Hospital System' (Process). The system processes the request and sends a 'Appointments Response' back to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Pro Hospital System"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Pro Hospital System",
          "label": "Appointments Request"
        },
        {
          "source": "Pro Hospital System",
          "target": "Patient",
          "label": "Appointments Response"
        }
      ]
    }
  },
  {
    "id": 422,
    "title": "Smart Banking System (Context Diagram)",
    "category": "Generated Banking",
    "level": "Context Diagram",
    "description": "A 'Customer' sends a 'Appointments Request' to the 'Smart Banking System' (Process). The system processes the request and sends a 'Appointments Response' back to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Smart Banking System"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Smart Banking System",
          "label": "Appointments Request"
        },
        {
          "source": "Smart Banking System",
          "target": "Customer",
          "label": "Appointments Response"
        }
      ]
    }
  },
  {
    "id": 423,
    "title": "Pro School System (Level 1 DFD)",
    "category": "Generated School",
    "level": "Level 1 DFD",
    "description": "A 'Manager' submits a 'Tickets Request' to 'Register Tickets' (Process). The process checks the 'Tickets DB' (Data Store) for 'Tickets Data', updates the 'Tickets DB' with 'New Tickets Data', and sends a 'Tickets Status' to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Register Tickets"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Tickets DB"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Register Tickets",
          "label": "Tickets Request"
        },
        {
          "source": "Tickets DB",
          "target": "Register Tickets",
          "label": "Tickets Data"
        },
        {
          "source": "Register Tickets",
          "target": "Tickets DB",
          "label": "New Tickets Data"
        },
        {
          "source": "Register Tickets",
          "target": "Manager",
          "label": "Tickets Status"
        }
      ]
    }
  },
  {
    "id": 424,
    "title": "Cloud Hospital System (Level 2 DFD)",
    "category": "Generated Hospital",
    "level": "Level 2 DFD",
    "description": "A 'Driver' sends a 'Tickets Form' to 'Validate Tickets' (Process). 'Validate Tickets' fetches 'Config Data' from 'Tickets Config' (Data Store) and passes 'Validated Tickets' to 'Update Tickets' (Process). 'Update Tickets' saves 'Saved Tickets' to 'Tickets Records' (Data Store) and issues a 'Confirmation' to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Tickets"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Tickets"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Tickets Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Tickets Records"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Validate Tickets",
          "label": "Tickets Form"
        },
        {
          "source": "Tickets Config",
          "target": "Validate Tickets",
          "label": "Config Data"
        },
        {
          "source": "Validate Tickets",
          "target": "Update Tickets",
          "label": "Validated Tickets"
        },
        {
          "source": "Update Tickets",
          "target": "Tickets Records",
          "label": "Saved Tickets"
        },
        {
          "source": "Update Tickets",
          "target": "Driver",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 425,
    "title": "Pro Cinema System (Context Diagram)",
    "category": "Generated Cinema",
    "level": "Context Diagram",
    "description": "A 'Manager' sends a 'Claims Request' to the 'Pro Cinema System' (Process). The system processes the request and sends a 'Claims Response' back to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Pro Cinema System"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Pro Cinema System",
          "label": "Claims Request"
        },
        {
          "source": "Pro Cinema System",
          "target": "Manager",
          "label": "Claims Response"
        }
      ]
    }
  },
  {
    "id": 426,
    "title": "Cloud Logistics System (Level 2 DFD)",
    "category": "Generated Logistics",
    "level": "Level 2 DFD",
    "description": "A 'Client' sends a 'Orders Form' to 'Validate Orders' (Process). 'Validate Orders' fetches 'Config Data' from 'Orders Config' (Data Store) and passes 'Validated Orders' to 'Update Orders' (Process). 'Update Orders' saves 'Saved Orders' to 'Orders Records' (Data Store) and issues a 'Confirmation' to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Orders"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Orders"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Orders Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Orders Records"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Validate Orders",
          "label": "Orders Form"
        },
        {
          "source": "Orders Config",
          "target": "Validate Orders",
          "label": "Config Data"
        },
        {
          "source": "Validate Orders",
          "target": "Update Orders",
          "label": "Validated Orders"
        },
        {
          "source": "Update Orders",
          "target": "Orders Records",
          "label": "Saved Orders"
        },
        {
          "source": "Update Orders",
          "target": "Client",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 427,
    "title": "Cloud Logistics System (Context Diagram)",
    "category": "Generated Logistics",
    "level": "Context Diagram",
    "description": "A 'Patient' sends a 'Reports Request' to the 'Cloud Logistics System' (Process). The system processes the request and sends a 'Reports Response' back to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Cloud Logistics System"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Cloud Logistics System",
          "label": "Reports Request"
        },
        {
          "source": "Cloud Logistics System",
          "target": "Patient",
          "label": "Reports Response"
        }
      ]
    }
  },
  {
    "id": 428,
    "title": "Digital Pharmacy System (Context Diagram)",
    "category": "Generated Pharmacy",
    "level": "Context Diagram",
    "description": "A 'Customer' sends a 'Records Request' to the 'Digital Pharmacy System' (Process). The system processes the request and sends a 'Records Response' back to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Digital Pharmacy System"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Digital Pharmacy System",
          "label": "Records Request"
        },
        {
          "source": "Digital Pharmacy System",
          "target": "Customer",
          "label": "Records Response"
        }
      ]
    }
  },
  {
    "id": 429,
    "title": "Local Pharmacy System (Level 1 DFD)",
    "category": "Generated Pharmacy",
    "level": "Level 1 DFD",
    "description": "A 'User' submits a 'Claims Request' to 'Verify Claims' (Process). The process checks the 'Claims DB' (Data Store) for 'Claims Data', updates the 'Claims DB' with 'New Claims Data', and sends a 'Claims Status' to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Verify Claims"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Claims DB"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Verify Claims",
          "label": "Claims Request"
        },
        {
          "source": "Claims DB",
          "target": "Verify Claims",
          "label": "Claims Data"
        },
        {
          "source": "Verify Claims",
          "target": "Claims DB",
          "label": "New Claims Data"
        },
        {
          "source": "Verify Claims",
          "target": "User",
          "label": "Claims Status"
        }
      ]
    }
  },
  {
    "id": 430,
    "title": "Auto School System (Level 2 DFD)",
    "category": "Generated School",
    "level": "Level 2 DFD",
    "description": "A 'Guest' sends a 'Tickets Form' to 'Validate Tickets' (Process). 'Validate Tickets' fetches 'Config Data' from 'Tickets Config' (Data Store) and passes 'Validated Tickets' to 'Update Tickets' (Process). 'Update Tickets' saves 'Saved Tickets' to 'Tickets Records' (Data Store) and issues a 'Confirmation' to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Tickets"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Tickets"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Tickets Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Tickets Records"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Validate Tickets",
          "label": "Tickets Form"
        },
        {
          "source": "Tickets Config",
          "target": "Validate Tickets",
          "label": "Config Data"
        },
        {
          "source": "Validate Tickets",
          "target": "Update Tickets",
          "label": "Validated Tickets"
        },
        {
          "source": "Update Tickets",
          "target": "Tickets Records",
          "label": "Saved Tickets"
        },
        {
          "source": "Update Tickets",
          "target": "Guest",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 431,
    "title": "Auto Cinema System (Context Diagram)",
    "category": "Generated Cinema",
    "level": "Context Diagram",
    "description": "A 'Patient' sends a 'Claims Request' to the 'Auto Cinema System' (Process). The system processes the request and sends a 'Claims Response' back to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Auto Cinema System"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Auto Cinema System",
          "label": "Claims Request"
        },
        {
          "source": "Auto Cinema System",
          "target": "Patient",
          "label": "Claims Response"
        }
      ]
    }
  },
  {
    "id": 432,
    "title": "Auto Retail System (Context Diagram)",
    "category": "Generated Retail",
    "level": "Context Diagram",
    "description": "A 'Manager' sends a 'Invoices Request' to the 'Auto Retail System' (Process). The system processes the request and sends a 'Invoices Response' back to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Auto Retail System"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Auto Retail System",
          "label": "Invoices Request"
        },
        {
          "source": "Auto Retail System",
          "target": "Manager",
          "label": "Invoices Response"
        }
      ]
    }
  },
  {
    "id": 433,
    "title": "Auto Pharmacy System (Context Diagram)",
    "category": "Generated Pharmacy",
    "level": "Context Diagram",
    "description": "A 'Guest' sends a 'Tickets Request' to the 'Auto Pharmacy System' (Process). The system processes the request and sends a 'Tickets Response' back to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Auto Pharmacy System"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Auto Pharmacy System",
          "label": "Tickets Request"
        },
        {
          "source": "Auto Pharmacy System",
          "target": "Guest",
          "label": "Tickets Response"
        }
      ]
    }
  },
  {
    "id": 434,
    "title": "Local Hospital System (Context Diagram)",
    "category": "Generated Hospital",
    "level": "Context Diagram",
    "description": "A 'Manager' sends a 'Appointments Request' to the 'Local Hospital System' (Process). The system processes the request and sends a 'Appointments Response' back to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Local Hospital System"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Local Hospital System",
          "label": "Appointments Request"
        },
        {
          "source": "Local Hospital System",
          "target": "Manager",
          "label": "Appointments Response"
        }
      ]
    }
  },
  {
    "id": 435,
    "title": "Pro Hospital System (Context Diagram)",
    "category": "Generated Hospital",
    "level": "Context Diagram",
    "description": "A 'Manager' sends a 'Requests Request' to the 'Pro Hospital System' (Process). The system processes the request and sends a 'Requests Response' back to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Pro Hospital System"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Pro Hospital System",
          "label": "Requests Request"
        },
        {
          "source": "Pro Hospital System",
          "target": "Manager",
          "label": "Requests Response"
        }
      ]
    }
  },
  {
    "id": 436,
    "title": "Pro Pharmacy System (Context Diagram)",
    "category": "Generated Pharmacy",
    "level": "Context Diagram",
    "description": "A 'Guest' sends a 'Invoices Request' to the 'Pro Pharmacy System' (Process). The system processes the request and sends a 'Invoices Response' back to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Pro Pharmacy System"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Pro Pharmacy System",
          "label": "Invoices Request"
        },
        {
          "source": "Pro Pharmacy System",
          "target": "Guest",
          "label": "Invoices Response"
        }
      ]
    }
  },
  {
    "id": 437,
    "title": "Pro Hospital System (Level 1 DFD)",
    "category": "Generated Hospital",
    "level": "Level 1 DFD",
    "description": "A 'Patient' submits a 'Invoices Request' to 'Update Invoices' (Process). The process checks the 'Invoices DB' (Data Store) for 'Invoices Data', updates the 'Invoices DB' with 'New Invoices Data', and sends a 'Invoices Status' to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Update Invoices"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Invoices DB"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Update Invoices",
          "label": "Invoices Request"
        },
        {
          "source": "Invoices DB",
          "target": "Update Invoices",
          "label": "Invoices Data"
        },
        {
          "source": "Update Invoices",
          "target": "Invoices DB",
          "label": "New Invoices Data"
        },
        {
          "source": "Update Invoices",
          "target": "Patient",
          "label": "Invoices Status"
        }
      ]
    }
  },
  {
    "id": 438,
    "title": "Quick School System (Level 1 DFD)",
    "category": "Generated School",
    "level": "Level 1 DFD",
    "description": "A 'User' submits a 'Profiles Request' to 'Manage Profiles' (Process). The process checks the 'Profiles DB' (Data Store) for 'Profiles Data', updates the 'Profiles DB' with 'New Profiles Data', and sends a 'Profiles Status' to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Manage Profiles"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Profiles DB"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Manage Profiles",
          "label": "Profiles Request"
        },
        {
          "source": "Profiles DB",
          "target": "Manage Profiles",
          "label": "Profiles Data"
        },
        {
          "source": "Manage Profiles",
          "target": "Profiles DB",
          "label": "New Profiles Data"
        },
        {
          "source": "Manage Profiles",
          "target": "User",
          "label": "Profiles Status"
        }
      ]
    }
  },
  {
    "id": 439,
    "title": "Quick School System (Level 1 DFD)",
    "category": "Generated School",
    "level": "Level 1 DFD",
    "description": "A 'Manager' submits a 'Payments Request' to 'Analyze Payments' (Process). The process checks the 'Payments DB' (Data Store) for 'Payments Data', updates the 'Payments DB' with 'New Payments Data', and sends a 'Payments Status' to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Analyze Payments"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Payments DB"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Analyze Payments",
          "label": "Payments Request"
        },
        {
          "source": "Payments DB",
          "target": "Analyze Payments",
          "label": "Payments Data"
        },
        {
          "source": "Analyze Payments",
          "target": "Payments DB",
          "label": "New Payments Data"
        },
        {
          "source": "Analyze Payments",
          "target": "Manager",
          "label": "Payments Status"
        }
      ]
    }
  },
  {
    "id": 440,
    "title": "Cloud Logistics System (Context Diagram)",
    "category": "Generated Logistics",
    "level": "Context Diagram",
    "description": "A 'User' sends a 'Profiles Request' to the 'Cloud Logistics System' (Process). The system processes the request and sends a 'Profiles Response' back to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Cloud Logistics System"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Cloud Logistics System",
          "label": "Profiles Request"
        },
        {
          "source": "Cloud Logistics System",
          "target": "User",
          "label": "Profiles Response"
        }
      ]
    }
  },
  {
    "id": 441,
    "title": "Quick Hospital System (Level 2 DFD)",
    "category": "Generated Hospital",
    "level": "Level 2 DFD",
    "description": "A 'Manager' sends a 'Profiles Form' to 'Validate Profiles' (Process). 'Validate Profiles' fetches 'Config Data' from 'Profiles Config' (Data Store) and passes 'Validated Profiles' to 'Update Profiles' (Process). 'Update Profiles' saves 'Saved Profiles' to 'Profiles Records' (Data Store) and issues a 'Confirmation' to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Profiles"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Profiles"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Profiles Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Profiles Records"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Validate Profiles",
          "label": "Profiles Form"
        },
        {
          "source": "Profiles Config",
          "target": "Validate Profiles",
          "label": "Config Data"
        },
        {
          "source": "Validate Profiles",
          "target": "Update Profiles",
          "label": "Validated Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Profiles Records",
          "label": "Saved Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Manager",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 442,
    "title": "Quick Hospital System (Context Diagram)",
    "category": "Generated Hospital",
    "level": "Context Diagram",
    "description": "A 'Driver' sends a 'Invoices Request' to the 'Quick Hospital System' (Process). The system processes the request and sends a 'Invoices Response' back to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Quick Hospital System"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Quick Hospital System",
          "label": "Invoices Request"
        },
        {
          "source": "Quick Hospital System",
          "target": "Driver",
          "label": "Invoices Response"
        }
      ]
    }
  },
  {
    "id": 443,
    "title": "Pro Logistics System (Context Diagram)",
    "category": "Generated Logistics",
    "level": "Context Diagram",
    "description": "A 'User' sends a 'Orders Request' to the 'Pro Logistics System' (Process). The system processes the request and sends a 'Orders Response' back to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Pro Logistics System"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Pro Logistics System",
          "label": "Orders Request"
        },
        {
          "source": "Pro Logistics System",
          "target": "User",
          "label": "Orders Response"
        }
      ]
    }
  },
  {
    "id": 444,
    "title": "Digital Hotel System (Context Diagram)",
    "category": "Generated Hotel",
    "level": "Context Diagram",
    "description": "A 'Driver' sends a 'Claims Request' to the 'Digital Hotel System' (Process). The system processes the request and sends a 'Claims Response' back to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Digital Hotel System"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Digital Hotel System",
          "label": "Claims Request"
        },
        {
          "source": "Digital Hotel System",
          "target": "Driver",
          "label": "Claims Response"
        }
      ]
    }
  },
  {
    "id": 445,
    "title": "Auto Cinema System (Level 2 DFD)",
    "category": "Generated Cinema",
    "level": "Level 2 DFD",
    "description": "A 'Manager' sends a 'Payments Form' to 'Validate Payments' (Process). 'Validate Payments' fetches 'Config Data' from 'Payments Config' (Data Store) and passes 'Validated Payments' to 'Update Payments' (Process). 'Update Payments' saves 'Saved Payments' to 'Payments Records' (Data Store) and issues a 'Confirmation' to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Payments"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Payments"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Payments Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Payments Records"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Validate Payments",
          "label": "Payments Form"
        },
        {
          "source": "Payments Config",
          "target": "Validate Payments",
          "label": "Config Data"
        },
        {
          "source": "Validate Payments",
          "target": "Update Payments",
          "label": "Validated Payments"
        },
        {
          "source": "Update Payments",
          "target": "Payments Records",
          "label": "Saved Payments"
        },
        {
          "source": "Update Payments",
          "target": "Manager",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 446,
    "title": "Secure School System (Level 1 DFD)",
    "category": "Generated School",
    "level": "Level 1 DFD",
    "description": "A 'Customer' submits a 'Reports Request' to 'Handle Reports' (Process). The process checks the 'Reports DB' (Data Store) for 'Reports Data', updates the 'Reports DB' with 'New Reports Data', and sends a 'Reports Status' to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Handle Reports"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Reports DB"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Handle Reports",
          "label": "Reports Request"
        },
        {
          "source": "Reports DB",
          "target": "Handle Reports",
          "label": "Reports Data"
        },
        {
          "source": "Handle Reports",
          "target": "Reports DB",
          "label": "New Reports Data"
        },
        {
          "source": "Handle Reports",
          "target": "Customer",
          "label": "Reports Status"
        }
      ]
    }
  },
  {
    "id": 447,
    "title": "Secure Hotel System (Level 2 DFD)",
    "category": "Generated Hotel",
    "level": "Level 2 DFD",
    "description": "A 'Staff' sends a 'Requests Form' to 'Validate Requests' (Process). 'Validate Requests' fetches 'Config Data' from 'Requests Config' (Data Store) and passes 'Validated Requests' to 'Update Requests' (Process). 'Update Requests' saves 'Saved Requests' to 'Requests Records' (Data Store) and issues a 'Confirmation' to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Requests"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Requests"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Requests Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Requests Records"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Validate Requests",
          "label": "Requests Form"
        },
        {
          "source": "Requests Config",
          "target": "Validate Requests",
          "label": "Config Data"
        },
        {
          "source": "Validate Requests",
          "target": "Update Requests",
          "label": "Validated Requests"
        },
        {
          "source": "Update Requests",
          "target": "Requests Records",
          "label": "Saved Requests"
        },
        {
          "source": "Update Requests",
          "target": "Staff",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 448,
    "title": "Enterprise Hospital System (Context Diagram)",
    "category": "Generated Hospital",
    "level": "Context Diagram",
    "description": "A 'Manager' sends a 'Reports Request' to the 'Enterprise Hospital System' (Process). The system processes the request and sends a 'Reports Response' back to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Enterprise Hospital System"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Enterprise Hospital System",
          "label": "Reports Request"
        },
        {
          "source": "Enterprise Hospital System",
          "target": "Manager",
          "label": "Reports Response"
        }
      ]
    }
  },
  {
    "id": 449,
    "title": "Auto Hospital System (Level 2 DFD)",
    "category": "Generated Hospital",
    "level": "Level 2 DFD",
    "description": "A 'Driver' sends a 'Profiles Form' to 'Validate Profiles' (Process). 'Validate Profiles' fetches 'Config Data' from 'Profiles Config' (Data Store) and passes 'Validated Profiles' to 'Update Profiles' (Process). 'Update Profiles' saves 'Saved Profiles' to 'Profiles Records' (Data Store) and issues a 'Confirmation' to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Profiles"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Profiles"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Profiles Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Profiles Records"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Validate Profiles",
          "label": "Profiles Form"
        },
        {
          "source": "Profiles Config",
          "target": "Validate Profiles",
          "label": "Config Data"
        },
        {
          "source": "Validate Profiles",
          "target": "Update Profiles",
          "label": "Validated Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Profiles Records",
          "label": "Saved Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Driver",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 450,
    "title": "Auto Banking System (Level 1 DFD)",
    "category": "Generated Banking",
    "level": "Level 1 DFD",
    "description": "A 'Driver' submits a 'Records Request' to 'Approve Records' (Process). The process checks the 'Records DB' (Data Store) for 'Records Data', updates the 'Records DB' with 'New Records Data', and sends a 'Records Status' to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Approve Records"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Records DB"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Approve Records",
          "label": "Records Request"
        },
        {
          "source": "Records DB",
          "target": "Approve Records",
          "label": "Records Data"
        },
        {
          "source": "Approve Records",
          "target": "Records DB",
          "label": "New Records Data"
        },
        {
          "source": "Approve Records",
          "target": "Driver",
          "label": "Records Status"
        }
      ]
    }
  },
  {
    "id": 451,
    "title": "Quick Library System (Context Diagram)",
    "category": "Generated Library",
    "level": "Context Diagram",
    "description": "A 'Student' sends a 'Appointments Request' to the 'Quick Library System' (Process). The system processes the request and sends a 'Appointments Response' back to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Quick Library System"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Quick Library System",
          "label": "Appointments Request"
        },
        {
          "source": "Quick Library System",
          "target": "Student",
          "label": "Appointments Response"
        }
      ]
    }
  },
  {
    "id": 452,
    "title": "Digital Pharmacy System (Level 2 DFD)",
    "category": "Generated Pharmacy",
    "level": "Level 2 DFD",
    "description": "A 'Guest' sends a 'Appointments Form' to 'Validate Appointments' (Process). 'Validate Appointments' fetches 'Config Data' from 'Appointments Config' (Data Store) and passes 'Validated Appointments' to 'Update Appointments' (Process). 'Update Appointments' saves 'Saved Appointments' to 'Appointments Records' (Data Store) and issues a 'Confirmation' to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Appointments"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Appointments"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Appointments Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Appointments Records"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Validate Appointments",
          "label": "Appointments Form"
        },
        {
          "source": "Appointments Config",
          "target": "Validate Appointments",
          "label": "Config Data"
        },
        {
          "source": "Validate Appointments",
          "target": "Update Appointments",
          "label": "Validated Appointments"
        },
        {
          "source": "Update Appointments",
          "target": "Appointments Records",
          "label": "Saved Appointments"
        },
        {
          "source": "Update Appointments",
          "target": "Guest",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 453,
    "title": "Global Hospital System (Level 1 DFD)",
    "category": "Generated Hospital",
    "level": "Level 1 DFD",
    "description": "A 'Client' submits a 'Claims Request' to 'Register Claims' (Process). The process checks the 'Claims DB' (Data Store) for 'Claims Data', updates the 'Claims DB' with 'New Claims Data', and sends a 'Claims Status' to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Register Claims"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Claims DB"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Register Claims",
          "label": "Claims Request"
        },
        {
          "source": "Claims DB",
          "target": "Register Claims",
          "label": "Claims Data"
        },
        {
          "source": "Register Claims",
          "target": "Claims DB",
          "label": "New Claims Data"
        },
        {
          "source": "Register Claims",
          "target": "Client",
          "label": "Claims Status"
        }
      ]
    }
  },
  {
    "id": 454,
    "title": "Secure Retail System (Context Diagram)",
    "category": "Generated Retail",
    "level": "Context Diagram",
    "description": "A 'Patient' sends a 'Appointments Request' to the 'Secure Retail System' (Process). The system processes the request and sends a 'Appointments Response' back to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Secure Retail System"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Secure Retail System",
          "label": "Appointments Request"
        },
        {
          "source": "Secure Retail System",
          "target": "Patient",
          "label": "Appointments Response"
        }
      ]
    }
  },
  {
    "id": 455,
    "title": "Local Library System (Level 1 DFD)",
    "category": "Generated Library",
    "level": "Level 1 DFD",
    "description": "A 'Manager' submits a 'Invoices Request' to 'Analyze Invoices' (Process). The process checks the 'Invoices DB' (Data Store) for 'Invoices Data', updates the 'Invoices DB' with 'New Invoices Data', and sends a 'Invoices Status' to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Analyze Invoices"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Invoices DB"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Analyze Invoices",
          "label": "Invoices Request"
        },
        {
          "source": "Invoices DB",
          "target": "Analyze Invoices",
          "label": "Invoices Data"
        },
        {
          "source": "Analyze Invoices",
          "target": "Invoices DB",
          "label": "New Invoices Data"
        },
        {
          "source": "Analyze Invoices",
          "target": "Manager",
          "label": "Invoices Status"
        }
      ]
    }
  },
  {
    "id": 456,
    "title": "Auto Retail System (Level 1 DFD)",
    "category": "Generated Retail",
    "level": "Level 1 DFD",
    "description": "A 'Driver' submits a 'Claims Request' to 'Register Claims' (Process). The process checks the 'Claims DB' (Data Store) for 'Claims Data', updates the 'Claims DB' with 'New Claims Data', and sends a 'Claims Status' to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Register Claims"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Claims DB"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Register Claims",
          "label": "Claims Request"
        },
        {
          "source": "Claims DB",
          "target": "Register Claims",
          "label": "Claims Data"
        },
        {
          "source": "Register Claims",
          "target": "Claims DB",
          "label": "New Claims Data"
        },
        {
          "source": "Register Claims",
          "target": "Driver",
          "label": "Claims Status"
        }
      ]
    }
  },
  {
    "id": 457,
    "title": "Secure Hotel System (Level 2 DFD)",
    "category": "Generated Hotel",
    "level": "Level 2 DFD",
    "description": "A 'Client' sends a 'Requests Form' to 'Validate Requests' (Process). 'Validate Requests' fetches 'Config Data' from 'Requests Config' (Data Store) and passes 'Validated Requests' to 'Update Requests' (Process). 'Update Requests' saves 'Saved Requests' to 'Requests Records' (Data Store) and issues a 'Confirmation' to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Requests"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Requests"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Requests Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Requests Records"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Validate Requests",
          "label": "Requests Form"
        },
        {
          "source": "Requests Config",
          "target": "Validate Requests",
          "label": "Config Data"
        },
        {
          "source": "Validate Requests",
          "target": "Update Requests",
          "label": "Validated Requests"
        },
        {
          "source": "Update Requests",
          "target": "Requests Records",
          "label": "Saved Requests"
        },
        {
          "source": "Update Requests",
          "target": "Client",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 458,
    "title": "Local Library System (Level 1 DFD)",
    "category": "Generated Library",
    "level": "Level 1 DFD",
    "description": "A 'Client' submits a 'Invoices Request' to 'Approve Invoices' (Process). The process checks the 'Invoices DB' (Data Store) for 'Invoices Data', updates the 'Invoices DB' with 'New Invoices Data', and sends a 'Invoices Status' to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Approve Invoices"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Invoices DB"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Approve Invoices",
          "label": "Invoices Request"
        },
        {
          "source": "Invoices DB",
          "target": "Approve Invoices",
          "label": "Invoices Data"
        },
        {
          "source": "Approve Invoices",
          "target": "Invoices DB",
          "label": "New Invoices Data"
        },
        {
          "source": "Approve Invoices",
          "target": "Client",
          "label": "Invoices Status"
        }
      ]
    }
  },
  {
    "id": 459,
    "title": "Enterprise Cinema System (Level 1 DFD)",
    "category": "Generated Cinema",
    "level": "Level 1 DFD",
    "description": "A 'Manager' submits a 'Requests Request' to 'Approve Requests' (Process). The process checks the 'Requests DB' (Data Store) for 'Requests Data', updates the 'Requests DB' with 'New Requests Data', and sends a 'Requests Status' to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Approve Requests"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Requests DB"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Approve Requests",
          "label": "Requests Request"
        },
        {
          "source": "Requests DB",
          "target": "Approve Requests",
          "label": "Requests Data"
        },
        {
          "source": "Approve Requests",
          "target": "Requests DB",
          "label": "New Requests Data"
        },
        {
          "source": "Approve Requests",
          "target": "Manager",
          "label": "Requests Status"
        }
      ]
    }
  },
  {
    "id": 460,
    "title": "Digital Banking System (Level 2 DFD)",
    "category": "Generated Banking",
    "level": "Level 2 DFD",
    "description": "A 'Patient' sends a 'Profiles Form' to 'Validate Profiles' (Process). 'Validate Profiles' fetches 'Config Data' from 'Profiles Config' (Data Store) and passes 'Validated Profiles' to 'Update Profiles' (Process). 'Update Profiles' saves 'Saved Profiles' to 'Profiles Records' (Data Store) and issues a 'Confirmation' to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Profiles"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Profiles"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Profiles Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Profiles Records"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Validate Profiles",
          "label": "Profiles Form"
        },
        {
          "source": "Profiles Config",
          "target": "Validate Profiles",
          "label": "Config Data"
        },
        {
          "source": "Validate Profiles",
          "target": "Update Profiles",
          "label": "Validated Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Profiles Records",
          "label": "Saved Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Patient",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 461,
    "title": "Auto Pharmacy System (Context Diagram)",
    "category": "Generated Pharmacy",
    "level": "Context Diagram",
    "description": "A 'Driver' sends a 'Profiles Request' to the 'Auto Pharmacy System' (Process). The system processes the request and sends a 'Profiles Response' back to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Auto Pharmacy System"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Auto Pharmacy System",
          "label": "Profiles Request"
        },
        {
          "source": "Auto Pharmacy System",
          "target": "Driver",
          "label": "Profiles Response"
        }
      ]
    }
  },
  {
    "id": 462,
    "title": "Enterprise Logistics System (Context Diagram)",
    "category": "Generated Logistics",
    "level": "Context Diagram",
    "description": "A 'User' sends a 'Records Request' to the 'Enterprise Logistics System' (Process). The system processes the request and sends a 'Records Response' back to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Enterprise Logistics System"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Enterprise Logistics System",
          "label": "Records Request"
        },
        {
          "source": "Enterprise Logistics System",
          "target": "User",
          "label": "Records Response"
        }
      ]
    }
  },
  {
    "id": 463,
    "title": "Local Hospital System (Context Diagram)",
    "category": "Generated Hospital",
    "level": "Context Diagram",
    "description": "A 'Client' sends a 'Appointments Request' to the 'Local Hospital System' (Process). The system processes the request and sends a 'Appointments Response' back to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Local Hospital System"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Local Hospital System",
          "label": "Appointments Request"
        },
        {
          "source": "Local Hospital System",
          "target": "Client",
          "label": "Appointments Response"
        }
      ]
    }
  },
  {
    "id": 464,
    "title": "Auto Pharmacy System (Context Diagram)",
    "category": "Generated Pharmacy",
    "level": "Context Diagram",
    "description": "A 'Manager' sends a 'Payments Request' to the 'Auto Pharmacy System' (Process). The system processes the request and sends a 'Payments Response' back to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Auto Pharmacy System"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Auto Pharmacy System",
          "label": "Payments Request"
        },
        {
          "source": "Auto Pharmacy System",
          "target": "Manager",
          "label": "Payments Response"
        }
      ]
    }
  },
  {
    "id": 465,
    "title": "Local Pharmacy System (Level 1 DFD)",
    "category": "Generated Pharmacy",
    "level": "Level 1 DFD",
    "description": "A 'Admin' submits a 'Profiles Request' to 'Calculate Profiles' (Process). The process checks the 'Profiles DB' (Data Store) for 'Profiles Data', updates the 'Profiles DB' with 'New Profiles Data', and sends a 'Profiles Status' to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Calculate Profiles"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Profiles DB"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Calculate Profiles",
          "label": "Profiles Request"
        },
        {
          "source": "Profiles DB",
          "target": "Calculate Profiles",
          "label": "Profiles Data"
        },
        {
          "source": "Calculate Profiles",
          "target": "Profiles DB",
          "label": "New Profiles Data"
        },
        {
          "source": "Calculate Profiles",
          "target": "Admin",
          "label": "Profiles Status"
        }
      ]
    }
  },
  {
    "id": 466,
    "title": "Global Library System (Context Diagram)",
    "category": "Generated Library",
    "level": "Context Diagram",
    "description": "A 'Customer' sends a 'Orders Request' to the 'Global Library System' (Process). The system processes the request and sends a 'Orders Response' back to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Global Library System"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Global Library System",
          "label": "Orders Request"
        },
        {
          "source": "Global Library System",
          "target": "Customer",
          "label": "Orders Response"
        }
      ]
    }
  },
  {
    "id": 467,
    "title": "Cloud Retail System (Level 2 DFD)",
    "category": "Generated Retail",
    "level": "Level 2 DFD",
    "description": "A 'Student' sends a 'Records Form' to 'Validate Records' (Process). 'Validate Records' fetches 'Config Data' from 'Records Config' (Data Store) and passes 'Validated Records' to 'Update Records' (Process). 'Update Records' saves 'Saved Records' to 'Records Records' (Data Store) and issues a 'Confirmation' to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Records"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Records"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Records Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Records Records"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Validate Records",
          "label": "Records Form"
        },
        {
          "source": "Records Config",
          "target": "Validate Records",
          "label": "Config Data"
        },
        {
          "source": "Validate Records",
          "target": "Update Records",
          "label": "Validated Records"
        },
        {
          "source": "Update Records",
          "target": "Records Records",
          "label": "Saved Records"
        },
        {
          "source": "Update Records",
          "target": "Student",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 468,
    "title": "Cloud Hospital System (Level 2 DFD)",
    "category": "Generated Hospital",
    "level": "Level 2 DFD",
    "description": "A 'Guest' sends a 'Profiles Form' to 'Validate Profiles' (Process). 'Validate Profiles' fetches 'Config Data' from 'Profiles Config' (Data Store) and passes 'Validated Profiles' to 'Update Profiles' (Process). 'Update Profiles' saves 'Saved Profiles' to 'Profiles Records' (Data Store) and issues a 'Confirmation' to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Profiles"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Profiles"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Profiles Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Profiles Records"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Validate Profiles",
          "label": "Profiles Form"
        },
        {
          "source": "Profiles Config",
          "target": "Validate Profiles",
          "label": "Config Data"
        },
        {
          "source": "Validate Profiles",
          "target": "Update Profiles",
          "label": "Validated Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Profiles Records",
          "label": "Saved Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Guest",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 469,
    "title": "Local Banking System (Level 2 DFD)",
    "category": "Generated Banking",
    "level": "Level 2 DFD",
    "description": "A 'Guest' sends a 'Appointments Form' to 'Validate Appointments' (Process). 'Validate Appointments' fetches 'Config Data' from 'Appointments Config' (Data Store) and passes 'Validated Appointments' to 'Update Appointments' (Process). 'Update Appointments' saves 'Saved Appointments' to 'Appointments Records' (Data Store) and issues a 'Confirmation' to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Appointments"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Appointments"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Appointments Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Appointments Records"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Validate Appointments",
          "label": "Appointments Form"
        },
        {
          "source": "Appointments Config",
          "target": "Validate Appointments",
          "label": "Config Data"
        },
        {
          "source": "Validate Appointments",
          "target": "Update Appointments",
          "label": "Validated Appointments"
        },
        {
          "source": "Update Appointments",
          "target": "Appointments Records",
          "label": "Saved Appointments"
        },
        {
          "source": "Update Appointments",
          "target": "Guest",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 470,
    "title": "Local Hotel System (Level 2 DFD)",
    "category": "Generated Hotel",
    "level": "Level 2 DFD",
    "description": "A 'Staff' sends a 'Invoices Form' to 'Validate Invoices' (Process). 'Validate Invoices' fetches 'Config Data' from 'Invoices Config' (Data Store) and passes 'Validated Invoices' to 'Update Invoices' (Process). 'Update Invoices' saves 'Saved Invoices' to 'Invoices Records' (Data Store) and issues a 'Confirmation' to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Invoices"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Invoices"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Invoices Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Invoices Records"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Validate Invoices",
          "label": "Invoices Form"
        },
        {
          "source": "Invoices Config",
          "target": "Validate Invoices",
          "label": "Config Data"
        },
        {
          "source": "Validate Invoices",
          "target": "Update Invoices",
          "label": "Validated Invoices"
        },
        {
          "source": "Update Invoices",
          "target": "Invoices Records",
          "label": "Saved Invoices"
        },
        {
          "source": "Update Invoices",
          "target": "Staff",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 471,
    "title": "Auto Retail System (Level 1 DFD)",
    "category": "Generated Retail",
    "level": "Level 1 DFD",
    "description": "A 'Manager' submits a 'Records Request' to 'Calculate Records' (Process). The process checks the 'Records DB' (Data Store) for 'Records Data', updates the 'Records DB' with 'New Records Data', and sends a 'Records Status' to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Calculate Records"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Records DB"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Calculate Records",
          "label": "Records Request"
        },
        {
          "source": "Records DB",
          "target": "Calculate Records",
          "label": "Records Data"
        },
        {
          "source": "Calculate Records",
          "target": "Records DB",
          "label": "New Records Data"
        },
        {
          "source": "Calculate Records",
          "target": "Manager",
          "label": "Records Status"
        }
      ]
    }
  },
  {
    "id": 472,
    "title": "Auto Cinema System (Level 1 DFD)",
    "category": "Generated Cinema",
    "level": "Level 1 DFD",
    "description": "A 'Student' submits a 'Reports Request' to 'Approve Reports' (Process). The process checks the 'Reports DB' (Data Store) for 'Reports Data', updates the 'Reports DB' with 'New Reports Data', and sends a 'Reports Status' to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Approve Reports"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Reports DB"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Approve Reports",
          "label": "Reports Request"
        },
        {
          "source": "Reports DB",
          "target": "Approve Reports",
          "label": "Reports Data"
        },
        {
          "source": "Approve Reports",
          "target": "Reports DB",
          "label": "New Reports Data"
        },
        {
          "source": "Approve Reports",
          "target": "Student",
          "label": "Reports Status"
        }
      ]
    }
  },
  {
    "id": 473,
    "title": "Cloud Banking System (Context Diagram)",
    "category": "Generated Banking",
    "level": "Context Diagram",
    "description": "A 'Manager' sends a 'Payments Request' to the 'Cloud Banking System' (Process). The system processes the request and sends a 'Payments Response' back to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Cloud Banking System"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Cloud Banking System",
          "label": "Payments Request"
        },
        {
          "source": "Cloud Banking System",
          "target": "Manager",
          "label": "Payments Response"
        }
      ]
    }
  },
  {
    "id": 474,
    "title": "Local Library System (Level 2 DFD)",
    "category": "Generated Library",
    "level": "Level 2 DFD",
    "description": "A 'Staff' sends a 'Profiles Form' to 'Validate Profiles' (Process). 'Validate Profiles' fetches 'Config Data' from 'Profiles Config' (Data Store) and passes 'Validated Profiles' to 'Update Profiles' (Process). 'Update Profiles' saves 'Saved Profiles' to 'Profiles Records' (Data Store) and issues a 'Confirmation' to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Profiles"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Profiles"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Profiles Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Profiles Records"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Validate Profiles",
          "label": "Profiles Form"
        },
        {
          "source": "Profiles Config",
          "target": "Validate Profiles",
          "label": "Config Data"
        },
        {
          "source": "Validate Profiles",
          "target": "Update Profiles",
          "label": "Validated Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Profiles Records",
          "label": "Saved Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Staff",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 475,
    "title": "Smart School System (Level 1 DFD)",
    "category": "Generated School",
    "level": "Level 1 DFD",
    "description": "A 'Manager' submits a 'Tickets Request' to 'Handle Tickets' (Process). The process checks the 'Tickets DB' (Data Store) for 'Tickets Data', updates the 'Tickets DB' with 'New Tickets Data', and sends a 'Tickets Status' to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Handle Tickets"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Tickets DB"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Handle Tickets",
          "label": "Tickets Request"
        },
        {
          "source": "Tickets DB",
          "target": "Handle Tickets",
          "label": "Tickets Data"
        },
        {
          "source": "Handle Tickets",
          "target": "Tickets DB",
          "label": "New Tickets Data"
        },
        {
          "source": "Handle Tickets",
          "target": "Manager",
          "label": "Tickets Status"
        }
      ]
    }
  },
  {
    "id": 476,
    "title": "Enterprise Pharmacy System (Level 1 DFD)",
    "category": "Generated Pharmacy",
    "level": "Level 1 DFD",
    "description": "A 'User' submits a 'Requests Request' to 'Generate Requests' (Process). The process checks the 'Requests DB' (Data Store) for 'Requests Data', updates the 'Requests DB' with 'New Requests Data', and sends a 'Requests Status' to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Generate Requests"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Requests DB"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Generate Requests",
          "label": "Requests Request"
        },
        {
          "source": "Requests DB",
          "target": "Generate Requests",
          "label": "Requests Data"
        },
        {
          "source": "Generate Requests",
          "target": "Requests DB",
          "label": "New Requests Data"
        },
        {
          "source": "Generate Requests",
          "target": "User",
          "label": "Requests Status"
        }
      ]
    }
  },
  {
    "id": 477,
    "title": "Local Airline System (Context Diagram)",
    "category": "Generated Airline",
    "level": "Context Diagram",
    "description": "A 'Driver' sends a 'Profiles Request' to the 'Local Airline System' (Process). The system processes the request and sends a 'Profiles Response' back to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Local Airline System"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Local Airline System",
          "label": "Profiles Request"
        },
        {
          "source": "Local Airline System",
          "target": "Driver",
          "label": "Profiles Response"
        }
      ]
    }
  },
  {
    "id": 478,
    "title": "Cloud School System (Level 2 DFD)",
    "category": "Generated School",
    "level": "Level 2 DFD",
    "description": "A 'Manager' sends a 'Claims Form' to 'Validate Claims' (Process). 'Validate Claims' fetches 'Config Data' from 'Claims Config' (Data Store) and passes 'Validated Claims' to 'Update Claims' (Process). 'Update Claims' saves 'Saved Claims' to 'Claims Records' (Data Store) and issues a 'Confirmation' to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Claims"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Claims"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Claims Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Claims Records"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Validate Claims",
          "label": "Claims Form"
        },
        {
          "source": "Claims Config",
          "target": "Validate Claims",
          "label": "Config Data"
        },
        {
          "source": "Validate Claims",
          "target": "Update Claims",
          "label": "Validated Claims"
        },
        {
          "source": "Update Claims",
          "target": "Claims Records",
          "label": "Saved Claims"
        },
        {
          "source": "Update Claims",
          "target": "Manager",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 479,
    "title": "Global Airline System (Level 2 DFD)",
    "category": "Generated Airline",
    "level": "Level 2 DFD",
    "description": "A 'Admin' sends a 'Reports Form' to 'Validate Reports' (Process). 'Validate Reports' fetches 'Config Data' from 'Reports Config' (Data Store) and passes 'Validated Reports' to 'Update Reports' (Process). 'Update Reports' saves 'Saved Reports' to 'Reports Records' (Data Store) and issues a 'Confirmation' to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Reports"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Reports"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Reports Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Reports Records"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Validate Reports",
          "label": "Reports Form"
        },
        {
          "source": "Reports Config",
          "target": "Validate Reports",
          "label": "Config Data"
        },
        {
          "source": "Validate Reports",
          "target": "Update Reports",
          "label": "Validated Reports"
        },
        {
          "source": "Update Reports",
          "target": "Reports Records",
          "label": "Saved Reports"
        },
        {
          "source": "Update Reports",
          "target": "Admin",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 480,
    "title": "Enterprise Banking System (Level 1 DFD)",
    "category": "Generated Banking",
    "level": "Level 1 DFD",
    "description": "A 'User' submits a 'Payments Request' to 'Generate Payments' (Process). The process checks the 'Payments DB' (Data Store) for 'Payments Data', updates the 'Payments DB' with 'New Payments Data', and sends a 'Payments Status' to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Generate Payments"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Payments DB"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Generate Payments",
          "label": "Payments Request"
        },
        {
          "source": "Payments DB",
          "target": "Generate Payments",
          "label": "Payments Data"
        },
        {
          "source": "Generate Payments",
          "target": "Payments DB",
          "label": "New Payments Data"
        },
        {
          "source": "Generate Payments",
          "target": "User",
          "label": "Payments Status"
        }
      ]
    }
  },
  {
    "id": 481,
    "title": "Pro School System (Level 2 DFD)",
    "category": "Generated School",
    "level": "Level 2 DFD",
    "description": "A 'Guest' sends a 'Records Form' to 'Validate Records' (Process). 'Validate Records' fetches 'Config Data' from 'Records Config' (Data Store) and passes 'Validated Records' to 'Update Records' (Process). 'Update Records' saves 'Saved Records' to 'Records Records' (Data Store) and issues a 'Confirmation' to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Records"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Records"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Records Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Records Records"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Validate Records",
          "label": "Records Form"
        },
        {
          "source": "Records Config",
          "target": "Validate Records",
          "label": "Config Data"
        },
        {
          "source": "Validate Records",
          "target": "Update Records",
          "label": "Validated Records"
        },
        {
          "source": "Update Records",
          "target": "Records Records",
          "label": "Saved Records"
        },
        {
          "source": "Update Records",
          "target": "Guest",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 482,
    "title": "Quick Pharmacy System (Level 1 DFD)",
    "category": "Generated Pharmacy",
    "level": "Level 1 DFD",
    "description": "A 'User' submits a 'Reports Request' to 'Verify Reports' (Process). The process checks the 'Reports DB' (Data Store) for 'Reports Data', updates the 'Reports DB' with 'New Reports Data', and sends a 'Reports Status' to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Verify Reports"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Reports DB"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Verify Reports",
          "label": "Reports Request"
        },
        {
          "source": "Reports DB",
          "target": "Verify Reports",
          "label": "Reports Data"
        },
        {
          "source": "Verify Reports",
          "target": "Reports DB",
          "label": "New Reports Data"
        },
        {
          "source": "Verify Reports",
          "target": "User",
          "label": "Reports Status"
        }
      ]
    }
  },
  {
    "id": 483,
    "title": "Enterprise School System (Level 1 DFD)",
    "category": "Generated School",
    "level": "Level 1 DFD",
    "description": "A 'Admin' submits a 'Requests Request' to 'Analyze Requests' (Process). The process checks the 'Requests DB' (Data Store) for 'Requests Data', updates the 'Requests DB' with 'New Requests Data', and sends a 'Requests Status' to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Analyze Requests"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Requests DB"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Analyze Requests",
          "label": "Requests Request"
        },
        {
          "source": "Requests DB",
          "target": "Analyze Requests",
          "label": "Requests Data"
        },
        {
          "source": "Analyze Requests",
          "target": "Requests DB",
          "label": "New Requests Data"
        },
        {
          "source": "Analyze Requests",
          "target": "Admin",
          "label": "Requests Status"
        }
      ]
    }
  },
  {
    "id": 484,
    "title": "Quick Library System (Level 1 DFD)",
    "category": "Generated Library",
    "level": "Level 1 DFD",
    "description": "A 'Admin' submits a 'Tickets Request' to 'Verify Tickets' (Process). The process checks the 'Tickets DB' (Data Store) for 'Tickets Data', updates the 'Tickets DB' with 'New Tickets Data', and sends a 'Tickets Status' to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Verify Tickets"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Tickets DB"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Verify Tickets",
          "label": "Tickets Request"
        },
        {
          "source": "Tickets DB",
          "target": "Verify Tickets",
          "label": "Tickets Data"
        },
        {
          "source": "Verify Tickets",
          "target": "Tickets DB",
          "label": "New Tickets Data"
        },
        {
          "source": "Verify Tickets",
          "target": "Admin",
          "label": "Tickets Status"
        }
      ]
    }
  },
  {
    "id": 485,
    "title": "Quick Hotel System (Level 2 DFD)",
    "category": "Generated Hotel",
    "level": "Level 2 DFD",
    "description": "A 'Guest' sends a 'Claims Form' to 'Validate Claims' (Process). 'Validate Claims' fetches 'Config Data' from 'Claims Config' (Data Store) and passes 'Validated Claims' to 'Update Claims' (Process). 'Update Claims' saves 'Saved Claims' to 'Claims Records' (Data Store) and issues a 'Confirmation' to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Claims"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Claims"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Claims Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Claims Records"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Validate Claims",
          "label": "Claims Form"
        },
        {
          "source": "Claims Config",
          "target": "Validate Claims",
          "label": "Config Data"
        },
        {
          "source": "Validate Claims",
          "target": "Update Claims",
          "label": "Validated Claims"
        },
        {
          "source": "Update Claims",
          "target": "Claims Records",
          "label": "Saved Claims"
        },
        {
          "source": "Update Claims",
          "target": "Guest",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 486,
    "title": "Quick Hotel System (Context Diagram)",
    "category": "Generated Hotel",
    "level": "Context Diagram",
    "description": "A 'Student' sends a 'Claims Request' to the 'Quick Hotel System' (Process). The system processes the request and sends a 'Claims Response' back to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Quick Hotel System"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Quick Hotel System",
          "label": "Claims Request"
        },
        {
          "source": "Quick Hotel System",
          "target": "Student",
          "label": "Claims Response"
        }
      ]
    }
  },
  {
    "id": 487,
    "title": "Digital Logistics System (Level 2 DFD)",
    "category": "Generated Logistics",
    "level": "Level 2 DFD",
    "description": "A 'Student' sends a 'Profiles Form' to 'Validate Profiles' (Process). 'Validate Profiles' fetches 'Config Data' from 'Profiles Config' (Data Store) and passes 'Validated Profiles' to 'Update Profiles' (Process). 'Update Profiles' saves 'Saved Profiles' to 'Profiles Records' (Data Store) and issues a 'Confirmation' to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Profiles"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Profiles"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Profiles Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Profiles Records"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Validate Profiles",
          "label": "Profiles Form"
        },
        {
          "source": "Profiles Config",
          "target": "Validate Profiles",
          "label": "Config Data"
        },
        {
          "source": "Validate Profiles",
          "target": "Update Profiles",
          "label": "Validated Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Profiles Records",
          "label": "Saved Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Student",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 488,
    "title": "Pro Retail System (Level 1 DFD)",
    "category": "Generated Retail",
    "level": "Level 1 DFD",
    "description": "A 'Admin' submits a 'Invoices Request' to 'Verify Invoices' (Process). The process checks the 'Invoices DB' (Data Store) for 'Invoices Data', updates the 'Invoices DB' with 'New Invoices Data', and sends a 'Invoices Status' to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Verify Invoices"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Invoices DB"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Verify Invoices",
          "label": "Invoices Request"
        },
        {
          "source": "Invoices DB",
          "target": "Verify Invoices",
          "label": "Invoices Data"
        },
        {
          "source": "Verify Invoices",
          "target": "Invoices DB",
          "label": "New Invoices Data"
        },
        {
          "source": "Verify Invoices",
          "target": "Admin",
          "label": "Invoices Status"
        }
      ]
    }
  },
  {
    "id": 489,
    "title": "Local Retail System (Level 2 DFD)",
    "category": "Generated Retail",
    "level": "Level 2 DFD",
    "description": "A 'User' sends a 'Profiles Form' to 'Validate Profiles' (Process). 'Validate Profiles' fetches 'Config Data' from 'Profiles Config' (Data Store) and passes 'Validated Profiles' to 'Update Profiles' (Process). 'Update Profiles' saves 'Saved Profiles' to 'Profiles Records' (Data Store) and issues a 'Confirmation' to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Profiles"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Profiles"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Profiles Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Profiles Records"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Validate Profiles",
          "label": "Profiles Form"
        },
        {
          "source": "Profiles Config",
          "target": "Validate Profiles",
          "label": "Config Data"
        },
        {
          "source": "Validate Profiles",
          "target": "Update Profiles",
          "label": "Validated Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Profiles Records",
          "label": "Saved Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "User",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 490,
    "title": "Local Hotel System (Level 1 DFD)",
    "category": "Generated Hotel",
    "level": "Level 1 DFD",
    "description": "A 'Admin' submits a 'Appointments Request' to 'Update Appointments' (Process). The process checks the 'Appointments DB' (Data Store) for 'Appointments Data', updates the 'Appointments DB' with 'New Appointments Data', and sends a 'Appointments Status' to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Update Appointments"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Appointments DB"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Update Appointments",
          "label": "Appointments Request"
        },
        {
          "source": "Appointments DB",
          "target": "Update Appointments",
          "label": "Appointments Data"
        },
        {
          "source": "Update Appointments",
          "target": "Appointments DB",
          "label": "New Appointments Data"
        },
        {
          "source": "Update Appointments",
          "target": "Admin",
          "label": "Appointments Status"
        }
      ]
    }
  },
  {
    "id": 491,
    "title": "Enterprise Library System (Context Diagram)",
    "category": "Generated Library",
    "level": "Context Diagram",
    "description": "A 'User' sends a 'Orders Request' to the 'Enterprise Library System' (Process). The system processes the request and sends a 'Orders Response' back to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Enterprise Library System"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Enterprise Library System",
          "label": "Orders Request"
        },
        {
          "source": "Enterprise Library System",
          "target": "User",
          "label": "Orders Response"
        }
      ]
    }
  },
  {
    "id": 492,
    "title": "Digital School System (Level 1 DFD)",
    "category": "Generated School",
    "level": "Level 1 DFD",
    "description": "A 'Customer' submits a 'Records Request' to 'Generate Records' (Process). The process checks the 'Records DB' (Data Store) for 'Records Data', updates the 'Records DB' with 'New Records Data', and sends a 'Records Status' to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Generate Records"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Records DB"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Generate Records",
          "label": "Records Request"
        },
        {
          "source": "Records DB",
          "target": "Generate Records",
          "label": "Records Data"
        },
        {
          "source": "Generate Records",
          "target": "Records DB",
          "label": "New Records Data"
        },
        {
          "source": "Generate Records",
          "target": "Customer",
          "label": "Records Status"
        }
      ]
    }
  },
  {
    "id": 493,
    "title": "Auto Hotel System (Context Diagram)",
    "category": "Generated Hotel",
    "level": "Context Diagram",
    "description": "A 'Manager' sends a 'Orders Request' to the 'Auto Hotel System' (Process). The system processes the request and sends a 'Orders Response' back to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Auto Hotel System"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Auto Hotel System",
          "label": "Orders Request"
        },
        {
          "source": "Auto Hotel System",
          "target": "Manager",
          "label": "Orders Response"
        }
      ]
    }
  },
  {
    "id": 494,
    "title": "Cloud Pharmacy System (Context Diagram)",
    "category": "Generated Pharmacy",
    "level": "Context Diagram",
    "description": "A 'Client' sends a 'Records Request' to the 'Cloud Pharmacy System' (Process). The system processes the request and sends a 'Records Response' back to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Cloud Pharmacy System"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Cloud Pharmacy System",
          "label": "Records Request"
        },
        {
          "source": "Cloud Pharmacy System",
          "target": "Client",
          "label": "Records Response"
        }
      ]
    }
  },
  {
    "id": 495,
    "title": "Digital Hospital System (Level 2 DFD)",
    "category": "Generated Hospital",
    "level": "Level 2 DFD",
    "description": "A 'Guest' sends a 'Appointments Form' to 'Validate Appointments' (Process). 'Validate Appointments' fetches 'Config Data' from 'Appointments Config' (Data Store) and passes 'Validated Appointments' to 'Update Appointments' (Process). 'Update Appointments' saves 'Saved Appointments' to 'Appointments Records' (Data Store) and issues a 'Confirmation' to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Appointments"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Appointments"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Appointments Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Appointments Records"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Validate Appointments",
          "label": "Appointments Form"
        },
        {
          "source": "Appointments Config",
          "target": "Validate Appointments",
          "label": "Config Data"
        },
        {
          "source": "Validate Appointments",
          "target": "Update Appointments",
          "label": "Validated Appointments"
        },
        {
          "source": "Update Appointments",
          "target": "Appointments Records",
          "label": "Saved Appointments"
        },
        {
          "source": "Update Appointments",
          "target": "Guest",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 496,
    "title": "Enterprise Banking System (Level 2 DFD)",
    "category": "Generated Banking",
    "level": "Level 2 DFD",
    "description": "A 'Student' sends a 'Profiles Form' to 'Validate Profiles' (Process). 'Validate Profiles' fetches 'Config Data' from 'Profiles Config' (Data Store) and passes 'Validated Profiles' to 'Update Profiles' (Process). 'Update Profiles' saves 'Saved Profiles' to 'Profiles Records' (Data Store) and issues a 'Confirmation' to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Profiles"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Profiles"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Profiles Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Profiles Records"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Validate Profiles",
          "label": "Profiles Form"
        },
        {
          "source": "Profiles Config",
          "target": "Validate Profiles",
          "label": "Config Data"
        },
        {
          "source": "Validate Profiles",
          "target": "Update Profiles",
          "label": "Validated Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Profiles Records",
          "label": "Saved Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Student",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 497,
    "title": "Smart School System (Level 2 DFD)",
    "category": "Generated School",
    "level": "Level 2 DFD",
    "description": "A 'Driver' sends a 'Orders Form' to 'Validate Orders' (Process). 'Validate Orders' fetches 'Config Data' from 'Orders Config' (Data Store) and passes 'Validated Orders' to 'Update Orders' (Process). 'Update Orders' saves 'Saved Orders' to 'Orders Records' (Data Store) and issues a 'Confirmation' to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Orders"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Orders"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Orders Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Orders Records"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Validate Orders",
          "label": "Orders Form"
        },
        {
          "source": "Orders Config",
          "target": "Validate Orders",
          "label": "Config Data"
        },
        {
          "source": "Validate Orders",
          "target": "Update Orders",
          "label": "Validated Orders"
        },
        {
          "source": "Update Orders",
          "target": "Orders Records",
          "label": "Saved Orders"
        },
        {
          "source": "Update Orders",
          "target": "Driver",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 498,
    "title": "Secure Cinema System (Context Diagram)",
    "category": "Generated Cinema",
    "level": "Context Diagram",
    "description": "A 'Guest' sends a 'Payments Request' to the 'Secure Cinema System' (Process). The system processes the request and sends a 'Payments Response' back to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Secure Cinema System"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Secure Cinema System",
          "label": "Payments Request"
        },
        {
          "source": "Secure Cinema System",
          "target": "Guest",
          "label": "Payments Response"
        }
      ]
    }
  },
  {
    "id": 499,
    "title": "Local Hotel System (Context Diagram)",
    "category": "Generated Hotel",
    "level": "Context Diagram",
    "description": "A 'Staff' sends a 'Orders Request' to the 'Local Hotel System' (Process). The system processes the request and sends a 'Orders Response' back to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Local Hotel System"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Local Hotel System",
          "label": "Orders Request"
        },
        {
          "source": "Local Hotel System",
          "target": "Staff",
          "label": "Orders Response"
        }
      ]
    }
  },
  {
    "id": 500,
    "title": "Smart Hospital System (Level 1 DFD)",
    "category": "Generated Hospital",
    "level": "Level 1 DFD",
    "description": "A 'Customer' submits a 'Orders Request' to 'Approve Orders' (Process). The process checks the 'Orders DB' (Data Store) for 'Orders Data', updates the 'Orders DB' with 'New Orders Data', and sends a 'Orders Status' to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Approve Orders"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Orders DB"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Approve Orders",
          "label": "Orders Request"
        },
        {
          "source": "Orders DB",
          "target": "Approve Orders",
          "label": "Orders Data"
        },
        {
          "source": "Approve Orders",
          "target": "Orders DB",
          "label": "New Orders Data"
        },
        {
          "source": "Approve Orders",
          "target": "Customer",
          "label": "Orders Status"
        }
      ]
    }
  },
  {
    "id": 501,
    "title": "Global School System (Context Diagram)",
    "category": "Generated School",
    "level": "Context Diagram",
    "description": "A 'Staff' sends a 'Payments Request' to the 'Global School System' (Process). The system processes the request and sends a 'Payments Response' back to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Global School System"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Global School System",
          "label": "Payments Request"
        },
        {
          "source": "Global School System",
          "target": "Staff",
          "label": "Payments Response"
        }
      ]
    }
  },
  {
    "id": 502,
    "title": "Digital Cinema System (Level 1 DFD)",
    "category": "Generated Cinema",
    "level": "Level 1 DFD",
    "description": "A 'User' submits a 'Payments Request' to 'Handle Payments' (Process). The process checks the 'Payments DB' (Data Store) for 'Payments Data', updates the 'Payments DB' with 'New Payments Data', and sends a 'Payments Status' to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Handle Payments"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Payments DB"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Handle Payments",
          "label": "Payments Request"
        },
        {
          "source": "Payments DB",
          "target": "Handle Payments",
          "label": "Payments Data"
        },
        {
          "source": "Handle Payments",
          "target": "Payments DB",
          "label": "New Payments Data"
        },
        {
          "source": "Handle Payments",
          "target": "User",
          "label": "Payments Status"
        }
      ]
    }
  },
  {
    "id": 503,
    "title": "Smart Hotel System (Context Diagram)",
    "category": "Generated Hotel",
    "level": "Context Diagram",
    "description": "A 'Client' sends a 'Profiles Request' to the 'Smart Hotel System' (Process). The system processes the request and sends a 'Profiles Response' back to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Smart Hotel System"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Smart Hotel System",
          "label": "Profiles Request"
        },
        {
          "source": "Smart Hotel System",
          "target": "Client",
          "label": "Profiles Response"
        }
      ]
    }
  },
  {
    "id": 504,
    "title": "Enterprise Pharmacy System (Level 1 DFD)",
    "category": "Generated Pharmacy",
    "level": "Level 1 DFD",
    "description": "A 'Manager' submits a 'Profiles Request' to 'Register Profiles' (Process). The process checks the 'Profiles DB' (Data Store) for 'Profiles Data', updates the 'Profiles DB' with 'New Profiles Data', and sends a 'Profiles Status' to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Register Profiles"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Profiles DB"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Register Profiles",
          "label": "Profiles Request"
        },
        {
          "source": "Profiles DB",
          "target": "Register Profiles",
          "label": "Profiles Data"
        },
        {
          "source": "Register Profiles",
          "target": "Profiles DB",
          "label": "New Profiles Data"
        },
        {
          "source": "Register Profiles",
          "target": "Manager",
          "label": "Profiles Status"
        }
      ]
    }
  },
  {
    "id": 505,
    "title": "Digital Banking System (Context Diagram)",
    "category": "Generated Banking",
    "level": "Context Diagram",
    "description": "A 'Student' sends a 'Requests Request' to the 'Digital Banking System' (Process). The system processes the request and sends a 'Requests Response' back to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Digital Banking System"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Digital Banking System",
          "label": "Requests Request"
        },
        {
          "source": "Digital Banking System",
          "target": "Student",
          "label": "Requests Response"
        }
      ]
    }
  },
  {
    "id": 506,
    "title": "Smart Logistics System (Level 2 DFD)",
    "category": "Generated Logistics",
    "level": "Level 2 DFD",
    "description": "A 'Customer' sends a 'Profiles Form' to 'Validate Profiles' (Process). 'Validate Profiles' fetches 'Config Data' from 'Profiles Config' (Data Store) and passes 'Validated Profiles' to 'Update Profiles' (Process). 'Update Profiles' saves 'Saved Profiles' to 'Profiles Records' (Data Store) and issues a 'Confirmation' to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Profiles"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Profiles"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Profiles Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Profiles Records"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Validate Profiles",
          "label": "Profiles Form"
        },
        {
          "source": "Profiles Config",
          "target": "Validate Profiles",
          "label": "Config Data"
        },
        {
          "source": "Validate Profiles",
          "target": "Update Profiles",
          "label": "Validated Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Profiles Records",
          "label": "Saved Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Customer",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 507,
    "title": "Local Retail System (Context Diagram)",
    "category": "Generated Retail",
    "level": "Context Diagram",
    "description": "A 'Customer' sends a 'Tickets Request' to the 'Local Retail System' (Process). The system processes the request and sends a 'Tickets Response' back to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Local Retail System"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Local Retail System",
          "label": "Tickets Request"
        },
        {
          "source": "Local Retail System",
          "target": "Customer",
          "label": "Tickets Response"
        }
      ]
    }
  },
  {
    "id": 508,
    "title": "Pro Hotel System (Context Diagram)",
    "category": "Generated Hotel",
    "level": "Context Diagram",
    "description": "A 'Staff' sends a 'Claims Request' to the 'Pro Hotel System' (Process). The system processes the request and sends a 'Claims Response' back to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Pro Hotel System"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Pro Hotel System",
          "label": "Claims Request"
        },
        {
          "source": "Pro Hotel System",
          "target": "Staff",
          "label": "Claims Response"
        }
      ]
    }
  },
  {
    "id": 509,
    "title": "Smart Airline System (Level 2 DFD)",
    "category": "Generated Airline",
    "level": "Level 2 DFD",
    "description": "A 'Customer' sends a 'Invoices Form' to 'Validate Invoices' (Process). 'Validate Invoices' fetches 'Config Data' from 'Invoices Config' (Data Store) and passes 'Validated Invoices' to 'Update Invoices' (Process). 'Update Invoices' saves 'Saved Invoices' to 'Invoices Records' (Data Store) and issues a 'Confirmation' to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Invoices"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Invoices"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Invoices Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Invoices Records"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Validate Invoices",
          "label": "Invoices Form"
        },
        {
          "source": "Invoices Config",
          "target": "Validate Invoices",
          "label": "Config Data"
        },
        {
          "source": "Validate Invoices",
          "target": "Update Invoices",
          "label": "Validated Invoices"
        },
        {
          "source": "Update Invoices",
          "target": "Invoices Records",
          "label": "Saved Invoices"
        },
        {
          "source": "Update Invoices",
          "target": "Customer",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 510,
    "title": "Pro Hotel System (Level 2 DFD)",
    "category": "Generated Hotel",
    "level": "Level 2 DFD",
    "description": "A 'Driver' sends a 'Profiles Form' to 'Validate Profiles' (Process). 'Validate Profiles' fetches 'Config Data' from 'Profiles Config' (Data Store) and passes 'Validated Profiles' to 'Update Profiles' (Process). 'Update Profiles' saves 'Saved Profiles' to 'Profiles Records' (Data Store) and issues a 'Confirmation' to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Profiles"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Profiles"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Profiles Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Profiles Records"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Validate Profiles",
          "label": "Profiles Form"
        },
        {
          "source": "Profiles Config",
          "target": "Validate Profiles",
          "label": "Config Data"
        },
        {
          "source": "Validate Profiles",
          "target": "Update Profiles",
          "label": "Validated Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Profiles Records",
          "label": "Saved Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Driver",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 511,
    "title": "Auto Library System (Context Diagram)",
    "category": "Generated Library",
    "level": "Context Diagram",
    "description": "A 'Student' sends a 'Tickets Request' to the 'Auto Library System' (Process). The system processes the request and sends a 'Tickets Response' back to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Auto Library System"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Auto Library System",
          "label": "Tickets Request"
        },
        {
          "source": "Auto Library System",
          "target": "Student",
          "label": "Tickets Response"
        }
      ]
    }
  },
  {
    "id": 512,
    "title": "Local Retail System (Context Diagram)",
    "category": "Generated Retail",
    "level": "Context Diagram",
    "description": "A 'Admin' sends a 'Orders Request' to the 'Local Retail System' (Process). The system processes the request and sends a 'Orders Response' back to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Local Retail System"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Local Retail System",
          "label": "Orders Request"
        },
        {
          "source": "Local Retail System",
          "target": "Admin",
          "label": "Orders Response"
        }
      ]
    }
  },
  {
    "id": 513,
    "title": "Secure Hospital System (Level 2 DFD)",
    "category": "Generated Hospital",
    "level": "Level 2 DFD",
    "description": "A 'Staff' sends a 'Tickets Form' to 'Validate Tickets' (Process). 'Validate Tickets' fetches 'Config Data' from 'Tickets Config' (Data Store) and passes 'Validated Tickets' to 'Update Tickets' (Process). 'Update Tickets' saves 'Saved Tickets' to 'Tickets Records' (Data Store) and issues a 'Confirmation' to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Tickets"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Tickets"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Tickets Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Tickets Records"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Validate Tickets",
          "label": "Tickets Form"
        },
        {
          "source": "Tickets Config",
          "target": "Validate Tickets",
          "label": "Config Data"
        },
        {
          "source": "Validate Tickets",
          "target": "Update Tickets",
          "label": "Validated Tickets"
        },
        {
          "source": "Update Tickets",
          "target": "Tickets Records",
          "label": "Saved Tickets"
        },
        {
          "source": "Update Tickets",
          "target": "Staff",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 514,
    "title": "Global Logistics System (Context Diagram)",
    "category": "Generated Logistics",
    "level": "Context Diagram",
    "description": "A 'Staff' sends a 'Reports Request' to the 'Global Logistics System' (Process). The system processes the request and sends a 'Reports Response' back to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Global Logistics System"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Global Logistics System",
          "label": "Reports Request"
        },
        {
          "source": "Global Logistics System",
          "target": "Staff",
          "label": "Reports Response"
        }
      ]
    }
  },
  {
    "id": 515,
    "title": "Smart Retail System (Level 1 DFD)",
    "category": "Generated Retail",
    "level": "Level 1 DFD",
    "description": "A 'Patient' submits a 'Orders Request' to 'Update Orders' (Process). The process checks the 'Orders DB' (Data Store) for 'Orders Data', updates the 'Orders DB' with 'New Orders Data', and sends a 'Orders Status' to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Update Orders"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Orders DB"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Update Orders",
          "label": "Orders Request"
        },
        {
          "source": "Orders DB",
          "target": "Update Orders",
          "label": "Orders Data"
        },
        {
          "source": "Update Orders",
          "target": "Orders DB",
          "label": "New Orders Data"
        },
        {
          "source": "Update Orders",
          "target": "Patient",
          "label": "Orders Status"
        }
      ]
    }
  },
  {
    "id": 516,
    "title": "Secure Cinema System (Context Diagram)",
    "category": "Generated Cinema",
    "level": "Context Diagram",
    "description": "A 'Staff' sends a 'Invoices Request' to the 'Secure Cinema System' (Process). The system processes the request and sends a 'Invoices Response' back to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Secure Cinema System"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Secure Cinema System",
          "label": "Invoices Request"
        },
        {
          "source": "Secure Cinema System",
          "target": "Staff",
          "label": "Invoices Response"
        }
      ]
    }
  },
  {
    "id": 517,
    "title": "Global Hotel System (Level 2 DFD)",
    "category": "Generated Hotel",
    "level": "Level 2 DFD",
    "description": "A 'Client' sends a 'Records Form' to 'Validate Records' (Process). 'Validate Records' fetches 'Config Data' from 'Records Config' (Data Store) and passes 'Validated Records' to 'Update Records' (Process). 'Update Records' saves 'Saved Records' to 'Records Records' (Data Store) and issues a 'Confirmation' to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Records"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Records"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Records Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Records Records"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Validate Records",
          "label": "Records Form"
        },
        {
          "source": "Records Config",
          "target": "Validate Records",
          "label": "Config Data"
        },
        {
          "source": "Validate Records",
          "target": "Update Records",
          "label": "Validated Records"
        },
        {
          "source": "Update Records",
          "target": "Records Records",
          "label": "Saved Records"
        },
        {
          "source": "Update Records",
          "target": "Client",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 518,
    "title": "Auto Hotel System (Level 2 DFD)",
    "category": "Generated Hotel",
    "level": "Level 2 DFD",
    "description": "A 'Manager' sends a 'Profiles Form' to 'Validate Profiles' (Process). 'Validate Profiles' fetches 'Config Data' from 'Profiles Config' (Data Store) and passes 'Validated Profiles' to 'Update Profiles' (Process). 'Update Profiles' saves 'Saved Profiles' to 'Profiles Records' (Data Store) and issues a 'Confirmation' to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Profiles"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Profiles"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Profiles Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Profiles Records"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Validate Profiles",
          "label": "Profiles Form"
        },
        {
          "source": "Profiles Config",
          "target": "Validate Profiles",
          "label": "Config Data"
        },
        {
          "source": "Validate Profiles",
          "target": "Update Profiles",
          "label": "Validated Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Profiles Records",
          "label": "Saved Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Manager",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 519,
    "title": "Local Pharmacy System (Level 1 DFD)",
    "category": "Generated Pharmacy",
    "level": "Level 1 DFD",
    "description": "A 'Client' submits a 'Tickets Request' to 'Verify Tickets' (Process). The process checks the 'Tickets DB' (Data Store) for 'Tickets Data', updates the 'Tickets DB' with 'New Tickets Data', and sends a 'Tickets Status' to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Verify Tickets"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Tickets DB"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Verify Tickets",
          "label": "Tickets Request"
        },
        {
          "source": "Tickets DB",
          "target": "Verify Tickets",
          "label": "Tickets Data"
        },
        {
          "source": "Verify Tickets",
          "target": "Tickets DB",
          "label": "New Tickets Data"
        },
        {
          "source": "Verify Tickets",
          "target": "Client",
          "label": "Tickets Status"
        }
      ]
    }
  },
  {
    "id": 520,
    "title": "Smart Library System (Level 2 DFD)",
    "category": "Generated Library",
    "level": "Level 2 DFD",
    "description": "A 'Customer' sends a 'Records Form' to 'Validate Records' (Process). 'Validate Records' fetches 'Config Data' from 'Records Config' (Data Store) and passes 'Validated Records' to 'Update Records' (Process). 'Update Records' saves 'Saved Records' to 'Records Records' (Data Store) and issues a 'Confirmation' to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Records"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Records"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Records Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Records Records"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Validate Records",
          "label": "Records Form"
        },
        {
          "source": "Records Config",
          "target": "Validate Records",
          "label": "Config Data"
        },
        {
          "source": "Validate Records",
          "target": "Update Records",
          "label": "Validated Records"
        },
        {
          "source": "Update Records",
          "target": "Records Records",
          "label": "Saved Records"
        },
        {
          "source": "Update Records",
          "target": "Customer",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 521,
    "title": "Pro Retail System (Context Diagram)",
    "category": "Generated Retail",
    "level": "Context Diagram",
    "description": "A 'Customer' sends a 'Invoices Request' to the 'Pro Retail System' (Process). The system processes the request and sends a 'Invoices Response' back to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Pro Retail System"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Pro Retail System",
          "label": "Invoices Request"
        },
        {
          "source": "Pro Retail System",
          "target": "Customer",
          "label": "Invoices Response"
        }
      ]
    }
  },
  {
    "id": 522,
    "title": "Auto Library System (Level 2 DFD)",
    "category": "Generated Library",
    "level": "Level 2 DFD",
    "description": "A 'Admin' sends a 'Records Form' to 'Validate Records' (Process). 'Validate Records' fetches 'Config Data' from 'Records Config' (Data Store) and passes 'Validated Records' to 'Update Records' (Process). 'Update Records' saves 'Saved Records' to 'Records Records' (Data Store) and issues a 'Confirmation' to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Records"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Records"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Records Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Records Records"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Validate Records",
          "label": "Records Form"
        },
        {
          "source": "Records Config",
          "target": "Validate Records",
          "label": "Config Data"
        },
        {
          "source": "Validate Records",
          "target": "Update Records",
          "label": "Validated Records"
        },
        {
          "source": "Update Records",
          "target": "Records Records",
          "label": "Saved Records"
        },
        {
          "source": "Update Records",
          "target": "Admin",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 523,
    "title": "Auto Hospital System (Level 1 DFD)",
    "category": "Generated Hospital",
    "level": "Level 1 DFD",
    "description": "A 'User' submits a 'Profiles Request' to 'Calculate Profiles' (Process). The process checks the 'Profiles DB' (Data Store) for 'Profiles Data', updates the 'Profiles DB' with 'New Profiles Data', and sends a 'Profiles Status' to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Calculate Profiles"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Profiles DB"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Calculate Profiles",
          "label": "Profiles Request"
        },
        {
          "source": "Profiles DB",
          "target": "Calculate Profiles",
          "label": "Profiles Data"
        },
        {
          "source": "Calculate Profiles",
          "target": "Profiles DB",
          "label": "New Profiles Data"
        },
        {
          "source": "Calculate Profiles",
          "target": "User",
          "label": "Profiles Status"
        }
      ]
    }
  },
  {
    "id": 524,
    "title": "Enterprise Banking System (Context Diagram)",
    "category": "Generated Banking",
    "level": "Context Diagram",
    "description": "A 'Guest' sends a 'Claims Request' to the 'Enterprise Banking System' (Process). The system processes the request and sends a 'Claims Response' back to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Enterprise Banking System"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Enterprise Banking System",
          "label": "Claims Request"
        },
        {
          "source": "Enterprise Banking System",
          "target": "Guest",
          "label": "Claims Response"
        }
      ]
    }
  },
  {
    "id": 525,
    "title": "Pro Airline System (Context Diagram)",
    "category": "Generated Airline",
    "level": "Context Diagram",
    "description": "A 'Student' sends a 'Claims Request' to the 'Pro Airline System' (Process). The system processes the request and sends a 'Claims Response' back to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Pro Airline System"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Pro Airline System",
          "label": "Claims Request"
        },
        {
          "source": "Pro Airline System",
          "target": "Student",
          "label": "Claims Response"
        }
      ]
    }
  },
  {
    "id": 526,
    "title": "Local Logistics System (Level 1 DFD)",
    "category": "Generated Logistics",
    "level": "Level 1 DFD",
    "description": "A 'Client' submits a 'Records Request' to 'Generate Records' (Process). The process checks the 'Records DB' (Data Store) for 'Records Data', updates the 'Records DB' with 'New Records Data', and sends a 'Records Status' to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Generate Records"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Records DB"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Generate Records",
          "label": "Records Request"
        },
        {
          "source": "Records DB",
          "target": "Generate Records",
          "label": "Records Data"
        },
        {
          "source": "Generate Records",
          "target": "Records DB",
          "label": "New Records Data"
        },
        {
          "source": "Generate Records",
          "target": "Client",
          "label": "Records Status"
        }
      ]
    }
  },
  {
    "id": 527,
    "title": "Local Pharmacy System (Level 1 DFD)",
    "category": "Generated Pharmacy",
    "level": "Level 1 DFD",
    "description": "A 'Student' submits a 'Invoices Request' to 'Approve Invoices' (Process). The process checks the 'Invoices DB' (Data Store) for 'Invoices Data', updates the 'Invoices DB' with 'New Invoices Data', and sends a 'Invoices Status' to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Approve Invoices"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Invoices DB"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Approve Invoices",
          "label": "Invoices Request"
        },
        {
          "source": "Invoices DB",
          "target": "Approve Invoices",
          "label": "Invoices Data"
        },
        {
          "source": "Approve Invoices",
          "target": "Invoices DB",
          "label": "New Invoices Data"
        },
        {
          "source": "Approve Invoices",
          "target": "Student",
          "label": "Invoices Status"
        }
      ]
    }
  },
  {
    "id": 528,
    "title": "Secure Logistics System (Context Diagram)",
    "category": "Generated Logistics",
    "level": "Context Diagram",
    "description": "A 'Staff' sends a 'Reports Request' to the 'Secure Logistics System' (Process). The system processes the request and sends a 'Reports Response' back to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Secure Logistics System"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Secure Logistics System",
          "label": "Reports Request"
        },
        {
          "source": "Secure Logistics System",
          "target": "Staff",
          "label": "Reports Response"
        }
      ]
    }
  },
  {
    "id": 529,
    "title": "Secure Hospital System (Level 2 DFD)",
    "category": "Generated Hospital",
    "level": "Level 2 DFD",
    "description": "A 'User' sends a 'Reports Form' to 'Validate Reports' (Process). 'Validate Reports' fetches 'Config Data' from 'Reports Config' (Data Store) and passes 'Validated Reports' to 'Update Reports' (Process). 'Update Reports' saves 'Saved Reports' to 'Reports Records' (Data Store) and issues a 'Confirmation' to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Reports"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Reports"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Reports Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Reports Records"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Validate Reports",
          "label": "Reports Form"
        },
        {
          "source": "Reports Config",
          "target": "Validate Reports",
          "label": "Config Data"
        },
        {
          "source": "Validate Reports",
          "target": "Update Reports",
          "label": "Validated Reports"
        },
        {
          "source": "Update Reports",
          "target": "Reports Records",
          "label": "Saved Reports"
        },
        {
          "source": "Update Reports",
          "target": "User",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 530,
    "title": "Global Cinema System (Context Diagram)",
    "category": "Generated Cinema",
    "level": "Context Diagram",
    "description": "A 'Customer' sends a 'Tickets Request' to the 'Global Cinema System' (Process). The system processes the request and sends a 'Tickets Response' back to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Global Cinema System"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Global Cinema System",
          "label": "Tickets Request"
        },
        {
          "source": "Global Cinema System",
          "target": "Customer",
          "label": "Tickets Response"
        }
      ]
    }
  },
  {
    "id": 531,
    "title": "Auto Airline System (Level 1 DFD)",
    "category": "Generated Airline",
    "level": "Level 1 DFD",
    "description": "A 'Client' submits a 'Payments Request' to 'Manage Payments' (Process). The process checks the 'Payments DB' (Data Store) for 'Payments Data', updates the 'Payments DB' with 'New Payments Data', and sends a 'Payments Status' to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Manage Payments"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Payments DB"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Manage Payments",
          "label": "Payments Request"
        },
        {
          "source": "Payments DB",
          "target": "Manage Payments",
          "label": "Payments Data"
        },
        {
          "source": "Manage Payments",
          "target": "Payments DB",
          "label": "New Payments Data"
        },
        {
          "source": "Manage Payments",
          "target": "Client",
          "label": "Payments Status"
        }
      ]
    }
  },
  {
    "id": 532,
    "title": "Pro Cinema System (Context Diagram)",
    "category": "Generated Cinema",
    "level": "Context Diagram",
    "description": "A 'Patient' sends a 'Requests Request' to the 'Pro Cinema System' (Process). The system processes the request and sends a 'Requests Response' back to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Pro Cinema System"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Pro Cinema System",
          "label": "Requests Request"
        },
        {
          "source": "Pro Cinema System",
          "target": "Patient",
          "label": "Requests Response"
        }
      ]
    }
  },
  {
    "id": 533,
    "title": "Local Library System (Level 2 DFD)",
    "category": "Generated Library",
    "level": "Level 2 DFD",
    "description": "A 'Customer' sends a 'Invoices Form' to 'Validate Invoices' (Process). 'Validate Invoices' fetches 'Config Data' from 'Invoices Config' (Data Store) and passes 'Validated Invoices' to 'Update Invoices' (Process). 'Update Invoices' saves 'Saved Invoices' to 'Invoices Records' (Data Store) and issues a 'Confirmation' to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Invoices"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Invoices"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Invoices Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Invoices Records"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Validate Invoices",
          "label": "Invoices Form"
        },
        {
          "source": "Invoices Config",
          "target": "Validate Invoices",
          "label": "Config Data"
        },
        {
          "source": "Validate Invoices",
          "target": "Update Invoices",
          "label": "Validated Invoices"
        },
        {
          "source": "Update Invoices",
          "target": "Invoices Records",
          "label": "Saved Invoices"
        },
        {
          "source": "Update Invoices",
          "target": "Customer",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 534,
    "title": "Secure Retail System (Context Diagram)",
    "category": "Generated Retail",
    "level": "Context Diagram",
    "description": "A 'Guest' sends a 'Claims Request' to the 'Secure Retail System' (Process). The system processes the request and sends a 'Claims Response' back to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Secure Retail System"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Secure Retail System",
          "label": "Claims Request"
        },
        {
          "source": "Secure Retail System",
          "target": "Guest",
          "label": "Claims Response"
        }
      ]
    }
  },
  {
    "id": 535,
    "title": "Enterprise Airline System (Level 1 DFD)",
    "category": "Generated Airline",
    "level": "Level 1 DFD",
    "description": "A 'Customer' submits a 'Claims Request' to 'Generate Claims' (Process). The process checks the 'Claims DB' (Data Store) for 'Claims Data', updates the 'Claims DB' with 'New Claims Data', and sends a 'Claims Status' to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Generate Claims"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Claims DB"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Generate Claims",
          "label": "Claims Request"
        },
        {
          "source": "Claims DB",
          "target": "Generate Claims",
          "label": "Claims Data"
        },
        {
          "source": "Generate Claims",
          "target": "Claims DB",
          "label": "New Claims Data"
        },
        {
          "source": "Generate Claims",
          "target": "Customer",
          "label": "Claims Status"
        }
      ]
    }
  },
  {
    "id": 536,
    "title": "Global Hotel System (Context Diagram)",
    "category": "Generated Hotel",
    "level": "Context Diagram",
    "description": "A 'Customer' sends a 'Invoices Request' to the 'Global Hotel System' (Process). The system processes the request and sends a 'Invoices Response' back to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Global Hotel System"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Global Hotel System",
          "label": "Invoices Request"
        },
        {
          "source": "Global Hotel System",
          "target": "Customer",
          "label": "Invoices Response"
        }
      ]
    }
  },
  {
    "id": 537,
    "title": "Cloud Cinema System (Context Diagram)",
    "category": "Generated Cinema",
    "level": "Context Diagram",
    "description": "A 'Admin' sends a 'Appointments Request' to the 'Cloud Cinema System' (Process). The system processes the request and sends a 'Appointments Response' back to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Cloud Cinema System"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Cloud Cinema System",
          "label": "Appointments Request"
        },
        {
          "source": "Cloud Cinema System",
          "target": "Admin",
          "label": "Appointments Response"
        }
      ]
    }
  },
  {
    "id": 538,
    "title": "Secure Hotel System (Level 1 DFD)",
    "category": "Generated Hotel",
    "level": "Level 1 DFD",
    "description": "A 'Driver' submits a 'Appointments Request' to 'Analyze Appointments' (Process). The process checks the 'Appointments DB' (Data Store) for 'Appointments Data', updates the 'Appointments DB' with 'New Appointments Data', and sends a 'Appointments Status' to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Analyze Appointments"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Appointments DB"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Analyze Appointments",
          "label": "Appointments Request"
        },
        {
          "source": "Appointments DB",
          "target": "Analyze Appointments",
          "label": "Appointments Data"
        },
        {
          "source": "Analyze Appointments",
          "target": "Appointments DB",
          "label": "New Appointments Data"
        },
        {
          "source": "Analyze Appointments",
          "target": "Driver",
          "label": "Appointments Status"
        }
      ]
    }
  },
  {
    "id": 539,
    "title": "Pro Library System (Level 2 DFD)",
    "category": "Generated Library",
    "level": "Level 2 DFD",
    "description": "A 'Staff' sends a 'Records Form' to 'Validate Records' (Process). 'Validate Records' fetches 'Config Data' from 'Records Config' (Data Store) and passes 'Validated Records' to 'Update Records' (Process). 'Update Records' saves 'Saved Records' to 'Records Records' (Data Store) and issues a 'Confirmation' to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Records"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Records"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Records Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Records Records"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Validate Records",
          "label": "Records Form"
        },
        {
          "source": "Records Config",
          "target": "Validate Records",
          "label": "Config Data"
        },
        {
          "source": "Validate Records",
          "target": "Update Records",
          "label": "Validated Records"
        },
        {
          "source": "Update Records",
          "target": "Records Records",
          "label": "Saved Records"
        },
        {
          "source": "Update Records",
          "target": "Staff",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 540,
    "title": "Quick Pharmacy System (Context Diagram)",
    "category": "Generated Pharmacy",
    "level": "Context Diagram",
    "description": "A 'Staff' sends a 'Claims Request' to the 'Quick Pharmacy System' (Process). The system processes the request and sends a 'Claims Response' back to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Quick Pharmacy System"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Quick Pharmacy System",
          "label": "Claims Request"
        },
        {
          "source": "Quick Pharmacy System",
          "target": "Staff",
          "label": "Claims Response"
        }
      ]
    }
  },
  {
    "id": 541,
    "title": "Local School System (Context Diagram)",
    "category": "Generated School",
    "level": "Context Diagram",
    "description": "A 'Client' sends a 'Payments Request' to the 'Local School System' (Process). The system processes the request and sends a 'Payments Response' back to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Local School System"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Local School System",
          "label": "Payments Request"
        },
        {
          "source": "Local School System",
          "target": "Client",
          "label": "Payments Response"
        }
      ]
    }
  },
  {
    "id": 542,
    "title": "Local School System (Context Diagram)",
    "category": "Generated School",
    "level": "Context Diagram",
    "description": "A 'Staff' sends a 'Records Request' to the 'Local School System' (Process). The system processes the request and sends a 'Records Response' back to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Local School System"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Local School System",
          "label": "Records Request"
        },
        {
          "source": "Local School System",
          "target": "Staff",
          "label": "Records Response"
        }
      ]
    }
  },
  {
    "id": 543,
    "title": "Secure Retail System (Level 1 DFD)",
    "category": "Generated Retail",
    "level": "Level 1 DFD",
    "description": "A 'Admin' submits a 'Orders Request' to 'Approve Orders' (Process). The process checks the 'Orders DB' (Data Store) for 'Orders Data', updates the 'Orders DB' with 'New Orders Data', and sends a 'Orders Status' to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Approve Orders"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Orders DB"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Approve Orders",
          "label": "Orders Request"
        },
        {
          "source": "Orders DB",
          "target": "Approve Orders",
          "label": "Orders Data"
        },
        {
          "source": "Approve Orders",
          "target": "Orders DB",
          "label": "New Orders Data"
        },
        {
          "source": "Approve Orders",
          "target": "Admin",
          "label": "Orders Status"
        }
      ]
    }
  },
  {
    "id": 544,
    "title": "Quick Cinema System (Level 1 DFD)",
    "category": "Generated Cinema",
    "level": "Level 1 DFD",
    "description": "A 'Student' submits a 'Records Request' to 'Handle Records' (Process). The process checks the 'Records DB' (Data Store) for 'Records Data', updates the 'Records DB' with 'New Records Data', and sends a 'Records Status' to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Handle Records"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Records DB"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Handle Records",
          "label": "Records Request"
        },
        {
          "source": "Records DB",
          "target": "Handle Records",
          "label": "Records Data"
        },
        {
          "source": "Handle Records",
          "target": "Records DB",
          "label": "New Records Data"
        },
        {
          "source": "Handle Records",
          "target": "Student",
          "label": "Records Status"
        }
      ]
    }
  },
  {
    "id": 545,
    "title": "Enterprise Airline System (Level 1 DFD)",
    "category": "Generated Airline",
    "level": "Level 1 DFD",
    "description": "A 'User' submits a 'Orders Request' to 'Process Orders' (Process). The process checks the 'Orders DB' (Data Store) for 'Orders Data', updates the 'Orders DB' with 'New Orders Data', and sends a 'Orders Status' to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Process Orders"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Orders DB"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Process Orders",
          "label": "Orders Request"
        },
        {
          "source": "Orders DB",
          "target": "Process Orders",
          "label": "Orders Data"
        },
        {
          "source": "Process Orders",
          "target": "Orders DB",
          "label": "New Orders Data"
        },
        {
          "source": "Process Orders",
          "target": "User",
          "label": "Orders Status"
        }
      ]
    }
  },
  {
    "id": 546,
    "title": "Cloud Library System (Level 2 DFD)",
    "category": "Generated Library",
    "level": "Level 2 DFD",
    "description": "A 'Student' sends a 'Claims Form' to 'Validate Claims' (Process). 'Validate Claims' fetches 'Config Data' from 'Claims Config' (Data Store) and passes 'Validated Claims' to 'Update Claims' (Process). 'Update Claims' saves 'Saved Claims' to 'Claims Records' (Data Store) and issues a 'Confirmation' to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Claims"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Claims"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Claims Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Claims Records"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Validate Claims",
          "label": "Claims Form"
        },
        {
          "source": "Claims Config",
          "target": "Validate Claims",
          "label": "Config Data"
        },
        {
          "source": "Validate Claims",
          "target": "Update Claims",
          "label": "Validated Claims"
        },
        {
          "source": "Update Claims",
          "target": "Claims Records",
          "label": "Saved Claims"
        },
        {
          "source": "Update Claims",
          "target": "Student",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 547,
    "title": "Smart Hotel System (Level 2 DFD)",
    "category": "Generated Hotel",
    "level": "Level 2 DFD",
    "description": "A 'User' sends a 'Records Form' to 'Validate Records' (Process). 'Validate Records' fetches 'Config Data' from 'Records Config' (Data Store) and passes 'Validated Records' to 'Update Records' (Process). 'Update Records' saves 'Saved Records' to 'Records Records' (Data Store) and issues a 'Confirmation' to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Records"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Records"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Records Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Records Records"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Validate Records",
          "label": "Records Form"
        },
        {
          "source": "Records Config",
          "target": "Validate Records",
          "label": "Config Data"
        },
        {
          "source": "Validate Records",
          "target": "Update Records",
          "label": "Validated Records"
        },
        {
          "source": "Update Records",
          "target": "Records Records",
          "label": "Saved Records"
        },
        {
          "source": "Update Records",
          "target": "User",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 548,
    "title": "Smart Pharmacy System (Context Diagram)",
    "category": "Generated Pharmacy",
    "level": "Context Diagram",
    "description": "A 'Student' sends a 'Invoices Request' to the 'Smart Pharmacy System' (Process). The system processes the request and sends a 'Invoices Response' back to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Smart Pharmacy System"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Smart Pharmacy System",
          "label": "Invoices Request"
        },
        {
          "source": "Smart Pharmacy System",
          "target": "Student",
          "label": "Invoices Response"
        }
      ]
    }
  },
  {
    "id": 549,
    "title": "Global Cinema System (Level 1 DFD)",
    "category": "Generated Cinema",
    "level": "Level 1 DFD",
    "description": "A 'Customer' submits a 'Records Request' to 'Analyze Records' (Process). The process checks the 'Records DB' (Data Store) for 'Records Data', updates the 'Records DB' with 'New Records Data', and sends a 'Records Status' to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Analyze Records"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Records DB"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Analyze Records",
          "label": "Records Request"
        },
        {
          "source": "Records DB",
          "target": "Analyze Records",
          "label": "Records Data"
        },
        {
          "source": "Analyze Records",
          "target": "Records DB",
          "label": "New Records Data"
        },
        {
          "source": "Analyze Records",
          "target": "Customer",
          "label": "Records Status"
        }
      ]
    }
  },
  {
    "id": 550,
    "title": "Pro Retail System (Context Diagram)",
    "category": "Generated Retail",
    "level": "Context Diagram",
    "description": "A 'Driver' sends a 'Records Request' to the 'Pro Retail System' (Process). The system processes the request and sends a 'Records Response' back to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Pro Retail System"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Pro Retail System",
          "label": "Records Request"
        },
        {
          "source": "Pro Retail System",
          "target": "Driver",
          "label": "Records Response"
        }
      ]
    }
  },
  {
    "id": 551,
    "title": "Auto School System (Level 1 DFD)",
    "category": "Generated School",
    "level": "Level 1 DFD",
    "description": "A 'Patient' submits a 'Claims Request' to 'Analyze Claims' (Process). The process checks the 'Claims DB' (Data Store) for 'Claims Data', updates the 'Claims DB' with 'New Claims Data', and sends a 'Claims Status' to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Analyze Claims"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Claims DB"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Analyze Claims",
          "label": "Claims Request"
        },
        {
          "source": "Claims DB",
          "target": "Analyze Claims",
          "label": "Claims Data"
        },
        {
          "source": "Analyze Claims",
          "target": "Claims DB",
          "label": "New Claims Data"
        },
        {
          "source": "Analyze Claims",
          "target": "Patient",
          "label": "Claims Status"
        }
      ]
    }
  },
  {
    "id": 552,
    "title": "Global Retail System (Level 1 DFD)",
    "category": "Generated Retail",
    "level": "Level 1 DFD",
    "description": "A 'Driver' submits a 'Orders Request' to 'Register Orders' (Process). The process checks the 'Orders DB' (Data Store) for 'Orders Data', updates the 'Orders DB' with 'New Orders Data', and sends a 'Orders Status' to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Register Orders"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Orders DB"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Register Orders",
          "label": "Orders Request"
        },
        {
          "source": "Orders DB",
          "target": "Register Orders",
          "label": "Orders Data"
        },
        {
          "source": "Register Orders",
          "target": "Orders DB",
          "label": "New Orders Data"
        },
        {
          "source": "Register Orders",
          "target": "Driver",
          "label": "Orders Status"
        }
      ]
    }
  },
  {
    "id": 553,
    "title": "Enterprise Banking System (Level 1 DFD)",
    "category": "Generated Banking",
    "level": "Level 1 DFD",
    "description": "A 'Client' submits a 'Requests Request' to 'Update Requests' (Process). The process checks the 'Requests DB' (Data Store) for 'Requests Data', updates the 'Requests DB' with 'New Requests Data', and sends a 'Requests Status' to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Update Requests"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Requests DB"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Update Requests",
          "label": "Requests Request"
        },
        {
          "source": "Requests DB",
          "target": "Update Requests",
          "label": "Requests Data"
        },
        {
          "source": "Update Requests",
          "target": "Requests DB",
          "label": "New Requests Data"
        },
        {
          "source": "Update Requests",
          "target": "Client",
          "label": "Requests Status"
        }
      ]
    }
  },
  {
    "id": 554,
    "title": "Smart School System (Context Diagram)",
    "category": "Generated School",
    "level": "Context Diagram",
    "description": "A 'Client' sends a 'Reports Request' to the 'Smart School System' (Process). The system processes the request and sends a 'Reports Response' back to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Smart School System"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Smart School System",
          "label": "Reports Request"
        },
        {
          "source": "Smart School System",
          "target": "Client",
          "label": "Reports Response"
        }
      ]
    }
  },
  {
    "id": 555,
    "title": "Local Logistics System (Level 1 DFD)",
    "category": "Generated Logistics",
    "level": "Level 1 DFD",
    "description": "A 'User' submits a 'Records Request' to 'Generate Records' (Process). The process checks the 'Records DB' (Data Store) for 'Records Data', updates the 'Records DB' with 'New Records Data', and sends a 'Records Status' to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Generate Records"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Records DB"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Generate Records",
          "label": "Records Request"
        },
        {
          "source": "Records DB",
          "target": "Generate Records",
          "label": "Records Data"
        },
        {
          "source": "Generate Records",
          "target": "Records DB",
          "label": "New Records Data"
        },
        {
          "source": "Generate Records",
          "target": "User",
          "label": "Records Status"
        }
      ]
    }
  },
  {
    "id": 556,
    "title": "Enterprise School System (Level 2 DFD)",
    "category": "Generated School",
    "level": "Level 2 DFD",
    "description": "A 'Patient' sends a 'Tickets Form' to 'Validate Tickets' (Process). 'Validate Tickets' fetches 'Config Data' from 'Tickets Config' (Data Store) and passes 'Validated Tickets' to 'Update Tickets' (Process). 'Update Tickets' saves 'Saved Tickets' to 'Tickets Records' (Data Store) and issues a 'Confirmation' to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Tickets"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Tickets"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Tickets Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Tickets Records"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Validate Tickets",
          "label": "Tickets Form"
        },
        {
          "source": "Tickets Config",
          "target": "Validate Tickets",
          "label": "Config Data"
        },
        {
          "source": "Validate Tickets",
          "target": "Update Tickets",
          "label": "Validated Tickets"
        },
        {
          "source": "Update Tickets",
          "target": "Tickets Records",
          "label": "Saved Tickets"
        },
        {
          "source": "Update Tickets",
          "target": "Patient",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 557,
    "title": "Smart Library System (Context Diagram)",
    "category": "Generated Library",
    "level": "Context Diagram",
    "description": "A 'Driver' sends a 'Appointments Request' to the 'Smart Library System' (Process). The system processes the request and sends a 'Appointments Response' back to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Smart Library System"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Smart Library System",
          "label": "Appointments Request"
        },
        {
          "source": "Smart Library System",
          "target": "Driver",
          "label": "Appointments Response"
        }
      ]
    }
  },
  {
    "id": 558,
    "title": "Quick Hospital System (Level 1 DFD)",
    "category": "Generated Hospital",
    "level": "Level 1 DFD",
    "description": "A 'Staff' submits a 'Appointments Request' to 'Analyze Appointments' (Process). The process checks the 'Appointments DB' (Data Store) for 'Appointments Data', updates the 'Appointments DB' with 'New Appointments Data', and sends a 'Appointments Status' to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Analyze Appointments"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Appointments DB"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Analyze Appointments",
          "label": "Appointments Request"
        },
        {
          "source": "Appointments DB",
          "target": "Analyze Appointments",
          "label": "Appointments Data"
        },
        {
          "source": "Analyze Appointments",
          "target": "Appointments DB",
          "label": "New Appointments Data"
        },
        {
          "source": "Analyze Appointments",
          "target": "Staff",
          "label": "Appointments Status"
        }
      ]
    }
  },
  {
    "id": 559,
    "title": "Global Hospital System (Level 2 DFD)",
    "category": "Generated Hospital",
    "level": "Level 2 DFD",
    "description": "A 'Client' sends a 'Records Form' to 'Validate Records' (Process). 'Validate Records' fetches 'Config Data' from 'Records Config' (Data Store) and passes 'Validated Records' to 'Update Records' (Process). 'Update Records' saves 'Saved Records' to 'Records Records' (Data Store) and issues a 'Confirmation' to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Records"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Records"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Records Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Records Records"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Validate Records",
          "label": "Records Form"
        },
        {
          "source": "Records Config",
          "target": "Validate Records",
          "label": "Config Data"
        },
        {
          "source": "Validate Records",
          "target": "Update Records",
          "label": "Validated Records"
        },
        {
          "source": "Update Records",
          "target": "Records Records",
          "label": "Saved Records"
        },
        {
          "source": "Update Records",
          "target": "Client",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 560,
    "title": "Digital Airline System (Level 1 DFD)",
    "category": "Generated Airline",
    "level": "Level 1 DFD",
    "description": "A 'Driver' submits a 'Profiles Request' to 'Generate Profiles' (Process). The process checks the 'Profiles DB' (Data Store) for 'Profiles Data', updates the 'Profiles DB' with 'New Profiles Data', and sends a 'Profiles Status' to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Generate Profiles"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Profiles DB"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Generate Profiles",
          "label": "Profiles Request"
        },
        {
          "source": "Profiles DB",
          "target": "Generate Profiles",
          "label": "Profiles Data"
        },
        {
          "source": "Generate Profiles",
          "target": "Profiles DB",
          "label": "New Profiles Data"
        },
        {
          "source": "Generate Profiles",
          "target": "Driver",
          "label": "Profiles Status"
        }
      ]
    }
  },
  {
    "id": 561,
    "title": "Enterprise Banking System (Level 2 DFD)",
    "category": "Generated Banking",
    "level": "Level 2 DFD",
    "description": "A 'Staff' sends a 'Reports Form' to 'Validate Reports' (Process). 'Validate Reports' fetches 'Config Data' from 'Reports Config' (Data Store) and passes 'Validated Reports' to 'Update Reports' (Process). 'Update Reports' saves 'Saved Reports' to 'Reports Records' (Data Store) and issues a 'Confirmation' to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Reports"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Reports"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Reports Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Reports Records"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Validate Reports",
          "label": "Reports Form"
        },
        {
          "source": "Reports Config",
          "target": "Validate Reports",
          "label": "Config Data"
        },
        {
          "source": "Validate Reports",
          "target": "Update Reports",
          "label": "Validated Reports"
        },
        {
          "source": "Update Reports",
          "target": "Reports Records",
          "label": "Saved Reports"
        },
        {
          "source": "Update Reports",
          "target": "Staff",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 562,
    "title": "Smart Airline System (Level 2 DFD)",
    "category": "Generated Airline",
    "level": "Level 2 DFD",
    "description": "A 'Admin' sends a 'Records Form' to 'Validate Records' (Process). 'Validate Records' fetches 'Config Data' from 'Records Config' (Data Store) and passes 'Validated Records' to 'Update Records' (Process). 'Update Records' saves 'Saved Records' to 'Records Records' (Data Store) and issues a 'Confirmation' to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Records"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Records"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Records Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Records Records"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Validate Records",
          "label": "Records Form"
        },
        {
          "source": "Records Config",
          "target": "Validate Records",
          "label": "Config Data"
        },
        {
          "source": "Validate Records",
          "target": "Update Records",
          "label": "Validated Records"
        },
        {
          "source": "Update Records",
          "target": "Records Records",
          "label": "Saved Records"
        },
        {
          "source": "Update Records",
          "target": "Admin",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 563,
    "title": "Auto Library System (Level 2 DFD)",
    "category": "Generated Library",
    "level": "Level 2 DFD",
    "description": "A 'Staff' sends a 'Profiles Form' to 'Validate Profiles' (Process). 'Validate Profiles' fetches 'Config Data' from 'Profiles Config' (Data Store) and passes 'Validated Profiles' to 'Update Profiles' (Process). 'Update Profiles' saves 'Saved Profiles' to 'Profiles Records' (Data Store) and issues a 'Confirmation' to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Profiles"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Profiles"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Profiles Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Profiles Records"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Validate Profiles",
          "label": "Profiles Form"
        },
        {
          "source": "Profiles Config",
          "target": "Validate Profiles",
          "label": "Config Data"
        },
        {
          "source": "Validate Profiles",
          "target": "Update Profiles",
          "label": "Validated Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Profiles Records",
          "label": "Saved Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Staff",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 564,
    "title": "Global Pharmacy System (Level 1 DFD)",
    "category": "Generated Pharmacy",
    "level": "Level 1 DFD",
    "description": "A 'User' submits a 'Profiles Request' to 'Manage Profiles' (Process). The process checks the 'Profiles DB' (Data Store) for 'Profiles Data', updates the 'Profiles DB' with 'New Profiles Data', and sends a 'Profiles Status' to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Manage Profiles"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Profiles DB"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Manage Profiles",
          "label": "Profiles Request"
        },
        {
          "source": "Profiles DB",
          "target": "Manage Profiles",
          "label": "Profiles Data"
        },
        {
          "source": "Manage Profiles",
          "target": "Profiles DB",
          "label": "New Profiles Data"
        },
        {
          "source": "Manage Profiles",
          "target": "User",
          "label": "Profiles Status"
        }
      ]
    }
  },
  {
    "id": 565,
    "title": "Quick Hotel System (Level 2 DFD)",
    "category": "Generated Hotel",
    "level": "Level 2 DFD",
    "description": "A 'Student' sends a 'Orders Form' to 'Validate Orders' (Process). 'Validate Orders' fetches 'Config Data' from 'Orders Config' (Data Store) and passes 'Validated Orders' to 'Update Orders' (Process). 'Update Orders' saves 'Saved Orders' to 'Orders Records' (Data Store) and issues a 'Confirmation' to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Orders"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Orders"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Orders Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Orders Records"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Validate Orders",
          "label": "Orders Form"
        },
        {
          "source": "Orders Config",
          "target": "Validate Orders",
          "label": "Config Data"
        },
        {
          "source": "Validate Orders",
          "target": "Update Orders",
          "label": "Validated Orders"
        },
        {
          "source": "Update Orders",
          "target": "Orders Records",
          "label": "Saved Orders"
        },
        {
          "source": "Update Orders",
          "target": "Student",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 566,
    "title": "Digital Banking System (Level 2 DFD)",
    "category": "Generated Banking",
    "level": "Level 2 DFD",
    "description": "A 'Staff' sends a 'Claims Form' to 'Validate Claims' (Process). 'Validate Claims' fetches 'Config Data' from 'Claims Config' (Data Store) and passes 'Validated Claims' to 'Update Claims' (Process). 'Update Claims' saves 'Saved Claims' to 'Claims Records' (Data Store) and issues a 'Confirmation' to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Claims"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Claims"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Claims Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Claims Records"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Validate Claims",
          "label": "Claims Form"
        },
        {
          "source": "Claims Config",
          "target": "Validate Claims",
          "label": "Config Data"
        },
        {
          "source": "Validate Claims",
          "target": "Update Claims",
          "label": "Validated Claims"
        },
        {
          "source": "Update Claims",
          "target": "Claims Records",
          "label": "Saved Claims"
        },
        {
          "source": "Update Claims",
          "target": "Staff",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 567,
    "title": "Global Retail System (Context Diagram)",
    "category": "Generated Retail",
    "level": "Context Diagram",
    "description": "A 'Patient' sends a 'Claims Request' to the 'Global Retail System' (Process). The system processes the request and sends a 'Claims Response' back to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Global Retail System"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Global Retail System",
          "label": "Claims Request"
        },
        {
          "source": "Global Retail System",
          "target": "Patient",
          "label": "Claims Response"
        }
      ]
    }
  },
  {
    "id": 568,
    "title": "Secure Retail System (Level 1 DFD)",
    "category": "Generated Retail",
    "level": "Level 1 DFD",
    "description": "A 'Client' submits a 'Profiles Request' to 'Generate Profiles' (Process). The process checks the 'Profiles DB' (Data Store) for 'Profiles Data', updates the 'Profiles DB' with 'New Profiles Data', and sends a 'Profiles Status' to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Generate Profiles"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Profiles DB"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Generate Profiles",
          "label": "Profiles Request"
        },
        {
          "source": "Profiles DB",
          "target": "Generate Profiles",
          "label": "Profiles Data"
        },
        {
          "source": "Generate Profiles",
          "target": "Profiles DB",
          "label": "New Profiles Data"
        },
        {
          "source": "Generate Profiles",
          "target": "Client",
          "label": "Profiles Status"
        }
      ]
    }
  },
  {
    "id": 569,
    "title": "Pro Hospital System (Context Diagram)",
    "category": "Generated Hospital",
    "level": "Context Diagram",
    "description": "A 'Driver' sends a 'Tickets Request' to the 'Pro Hospital System' (Process). The system processes the request and sends a 'Tickets Response' back to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Pro Hospital System"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Pro Hospital System",
          "label": "Tickets Request"
        },
        {
          "source": "Pro Hospital System",
          "target": "Driver",
          "label": "Tickets Response"
        }
      ]
    }
  },
  {
    "id": 570,
    "title": "Local Hotel System (Context Diagram)",
    "category": "Generated Hotel",
    "level": "Context Diagram",
    "description": "A 'User' sends a 'Orders Request' to the 'Local Hotel System' (Process). The system processes the request and sends a 'Orders Response' back to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Local Hotel System"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Local Hotel System",
          "label": "Orders Request"
        },
        {
          "source": "Local Hotel System",
          "target": "User",
          "label": "Orders Response"
        }
      ]
    }
  },
  {
    "id": 571,
    "title": "Local Airline System (Level 1 DFD)",
    "category": "Generated Airline",
    "level": "Level 1 DFD",
    "description": "A 'Manager' submits a 'Appointments Request' to 'Process Appointments' (Process). The process checks the 'Appointments DB' (Data Store) for 'Appointments Data', updates the 'Appointments DB' with 'New Appointments Data', and sends a 'Appointments Status' to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Process Appointments"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Appointments DB"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Process Appointments",
          "label": "Appointments Request"
        },
        {
          "source": "Appointments DB",
          "target": "Process Appointments",
          "label": "Appointments Data"
        },
        {
          "source": "Process Appointments",
          "target": "Appointments DB",
          "label": "New Appointments Data"
        },
        {
          "source": "Process Appointments",
          "target": "Manager",
          "label": "Appointments Status"
        }
      ]
    }
  },
  {
    "id": 572,
    "title": "Secure Retail System (Context Diagram)",
    "category": "Generated Retail",
    "level": "Context Diagram",
    "description": "A 'Driver' sends a 'Reports Request' to the 'Secure Retail System' (Process). The system processes the request and sends a 'Reports Response' back to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Secure Retail System"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Secure Retail System",
          "label": "Reports Request"
        },
        {
          "source": "Secure Retail System",
          "target": "Driver",
          "label": "Reports Response"
        }
      ]
    }
  },
  {
    "id": 573,
    "title": "Global Pharmacy System (Level 1 DFD)",
    "category": "Generated Pharmacy",
    "level": "Level 1 DFD",
    "description": "A 'Driver' submits a 'Payments Request' to 'Approve Payments' (Process). The process checks the 'Payments DB' (Data Store) for 'Payments Data', updates the 'Payments DB' with 'New Payments Data', and sends a 'Payments Status' to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Approve Payments"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Payments DB"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Approve Payments",
          "label": "Payments Request"
        },
        {
          "source": "Payments DB",
          "target": "Approve Payments",
          "label": "Payments Data"
        },
        {
          "source": "Approve Payments",
          "target": "Payments DB",
          "label": "New Payments Data"
        },
        {
          "source": "Approve Payments",
          "target": "Driver",
          "label": "Payments Status"
        }
      ]
    }
  },
  {
    "id": 574,
    "title": "Digital Retail System (Level 1 DFD)",
    "category": "Generated Retail",
    "level": "Level 1 DFD",
    "description": "A 'Client' submits a 'Profiles Request' to 'Register Profiles' (Process). The process checks the 'Profiles DB' (Data Store) for 'Profiles Data', updates the 'Profiles DB' with 'New Profiles Data', and sends a 'Profiles Status' to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Register Profiles"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Profiles DB"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Register Profiles",
          "label": "Profiles Request"
        },
        {
          "source": "Profiles DB",
          "target": "Register Profiles",
          "label": "Profiles Data"
        },
        {
          "source": "Register Profiles",
          "target": "Profiles DB",
          "label": "New Profiles Data"
        },
        {
          "source": "Register Profiles",
          "target": "Client",
          "label": "Profiles Status"
        }
      ]
    }
  },
  {
    "id": 575,
    "title": "Secure School System (Context Diagram)",
    "category": "Generated School",
    "level": "Context Diagram",
    "description": "A 'Customer' sends a 'Payments Request' to the 'Secure School System' (Process). The system processes the request and sends a 'Payments Response' back to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Secure School System"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Secure School System",
          "label": "Payments Request"
        },
        {
          "source": "Secure School System",
          "target": "Customer",
          "label": "Payments Response"
        }
      ]
    }
  },
  {
    "id": 576,
    "title": "Local Banking System (Context Diagram)",
    "category": "Generated Banking",
    "level": "Context Diagram",
    "description": "A 'Admin' sends a 'Requests Request' to the 'Local Banking System' (Process). The system processes the request and sends a 'Requests Response' back to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Local Banking System"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Local Banking System",
          "label": "Requests Request"
        },
        {
          "source": "Local Banking System",
          "target": "Admin",
          "label": "Requests Response"
        }
      ]
    }
  },
  {
    "id": 577,
    "title": "Digital Banking System (Context Diagram)",
    "category": "Generated Banking",
    "level": "Context Diagram",
    "description": "A 'Customer' sends a 'Records Request' to the 'Digital Banking System' (Process). The system processes the request and sends a 'Records Response' back to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Digital Banking System"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Digital Banking System",
          "label": "Records Request"
        },
        {
          "source": "Digital Banking System",
          "target": "Customer",
          "label": "Records Response"
        }
      ]
    }
  },
  {
    "id": 578,
    "title": "Enterprise School System (Context Diagram)",
    "category": "Generated School",
    "level": "Context Diagram",
    "description": "A 'Customer' sends a 'Appointments Request' to the 'Enterprise School System' (Process). The system processes the request and sends a 'Appointments Response' back to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Enterprise School System"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Enterprise School System",
          "label": "Appointments Request"
        },
        {
          "source": "Enterprise School System",
          "target": "Customer",
          "label": "Appointments Response"
        }
      ]
    }
  },
  {
    "id": 579,
    "title": "Local Hospital System (Level 2 DFD)",
    "category": "Generated Hospital",
    "level": "Level 2 DFD",
    "description": "A 'Guest' sends a 'Claims Form' to 'Validate Claims' (Process). 'Validate Claims' fetches 'Config Data' from 'Claims Config' (Data Store) and passes 'Validated Claims' to 'Update Claims' (Process). 'Update Claims' saves 'Saved Claims' to 'Claims Records' (Data Store) and issues a 'Confirmation' to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Claims"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Claims"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Claims Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Claims Records"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Validate Claims",
          "label": "Claims Form"
        },
        {
          "source": "Claims Config",
          "target": "Validate Claims",
          "label": "Config Data"
        },
        {
          "source": "Validate Claims",
          "target": "Update Claims",
          "label": "Validated Claims"
        },
        {
          "source": "Update Claims",
          "target": "Claims Records",
          "label": "Saved Claims"
        },
        {
          "source": "Update Claims",
          "target": "Guest",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 580,
    "title": "Auto Hospital System (Level 1 DFD)",
    "category": "Generated Hospital",
    "level": "Level 1 DFD",
    "description": "A 'User' submits a 'Tickets Request' to 'Handle Tickets' (Process). The process checks the 'Tickets DB' (Data Store) for 'Tickets Data', updates the 'Tickets DB' with 'New Tickets Data', and sends a 'Tickets Status' to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Handle Tickets"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Tickets DB"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Handle Tickets",
          "label": "Tickets Request"
        },
        {
          "source": "Tickets DB",
          "target": "Handle Tickets",
          "label": "Tickets Data"
        },
        {
          "source": "Handle Tickets",
          "target": "Tickets DB",
          "label": "New Tickets Data"
        },
        {
          "source": "Handle Tickets",
          "target": "User",
          "label": "Tickets Status"
        }
      ]
    }
  },
  {
    "id": 581,
    "title": "Local Pharmacy System (Context Diagram)",
    "category": "Generated Pharmacy",
    "level": "Context Diagram",
    "description": "A 'Manager' sends a 'Invoices Request' to the 'Local Pharmacy System' (Process). The system processes the request and sends a 'Invoices Response' back to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Local Pharmacy System"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Local Pharmacy System",
          "label": "Invoices Request"
        },
        {
          "source": "Local Pharmacy System",
          "target": "Manager",
          "label": "Invoices Response"
        }
      ]
    }
  },
  {
    "id": 582,
    "title": "Enterprise Pharmacy System (Context Diagram)",
    "category": "Generated Pharmacy",
    "level": "Context Diagram",
    "description": "A 'Client' sends a 'Records Request' to the 'Enterprise Pharmacy System' (Process). The system processes the request and sends a 'Records Response' back to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Enterprise Pharmacy System"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Enterprise Pharmacy System",
          "label": "Records Request"
        },
        {
          "source": "Enterprise Pharmacy System",
          "target": "Client",
          "label": "Records Response"
        }
      ]
    }
  },
  {
    "id": 583,
    "title": "Global Airline System (Level 2 DFD)",
    "category": "Generated Airline",
    "level": "Level 2 DFD",
    "description": "A 'Manager' sends a 'Profiles Form' to 'Validate Profiles' (Process). 'Validate Profiles' fetches 'Config Data' from 'Profiles Config' (Data Store) and passes 'Validated Profiles' to 'Update Profiles' (Process). 'Update Profiles' saves 'Saved Profiles' to 'Profiles Records' (Data Store) and issues a 'Confirmation' to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Profiles"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Profiles"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Profiles Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Profiles Records"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Validate Profiles",
          "label": "Profiles Form"
        },
        {
          "source": "Profiles Config",
          "target": "Validate Profiles",
          "label": "Config Data"
        },
        {
          "source": "Validate Profiles",
          "target": "Update Profiles",
          "label": "Validated Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Profiles Records",
          "label": "Saved Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Manager",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 584,
    "title": "Quick Airline System (Level 1 DFD)",
    "category": "Generated Airline",
    "level": "Level 1 DFD",
    "description": "A 'Admin' submits a 'Records Request' to 'Manage Records' (Process). The process checks the 'Records DB' (Data Store) for 'Records Data', updates the 'Records DB' with 'New Records Data', and sends a 'Records Status' to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Manage Records"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Records DB"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Manage Records",
          "label": "Records Request"
        },
        {
          "source": "Records DB",
          "target": "Manage Records",
          "label": "Records Data"
        },
        {
          "source": "Manage Records",
          "target": "Records DB",
          "label": "New Records Data"
        },
        {
          "source": "Manage Records",
          "target": "Admin",
          "label": "Records Status"
        }
      ]
    }
  },
  {
    "id": 585,
    "title": "Secure Hotel System (Level 2 DFD)",
    "category": "Generated Hotel",
    "level": "Level 2 DFD",
    "description": "A 'Driver' sends a 'Records Form' to 'Validate Records' (Process). 'Validate Records' fetches 'Config Data' from 'Records Config' (Data Store) and passes 'Validated Records' to 'Update Records' (Process). 'Update Records' saves 'Saved Records' to 'Records Records' (Data Store) and issues a 'Confirmation' to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Records"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Records"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Records Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Records Records"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Validate Records",
          "label": "Records Form"
        },
        {
          "source": "Records Config",
          "target": "Validate Records",
          "label": "Config Data"
        },
        {
          "source": "Validate Records",
          "target": "Update Records",
          "label": "Validated Records"
        },
        {
          "source": "Update Records",
          "target": "Records Records",
          "label": "Saved Records"
        },
        {
          "source": "Update Records",
          "target": "Driver",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 586,
    "title": "Smart Hotel System (Context Diagram)",
    "category": "Generated Hotel",
    "level": "Context Diagram",
    "description": "A 'Manager' sends a 'Appointments Request' to the 'Smart Hotel System' (Process). The system processes the request and sends a 'Appointments Response' back to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Smart Hotel System"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Smart Hotel System",
          "label": "Appointments Request"
        },
        {
          "source": "Smart Hotel System",
          "target": "Manager",
          "label": "Appointments Response"
        }
      ]
    }
  },
  {
    "id": 587,
    "title": "Enterprise Retail System (Level 1 DFD)",
    "category": "Generated Retail",
    "level": "Level 1 DFD",
    "description": "A 'Client' submits a 'Tickets Request' to 'Verify Tickets' (Process). The process checks the 'Tickets DB' (Data Store) for 'Tickets Data', updates the 'Tickets DB' with 'New Tickets Data', and sends a 'Tickets Status' to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Verify Tickets"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Tickets DB"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Verify Tickets",
          "label": "Tickets Request"
        },
        {
          "source": "Tickets DB",
          "target": "Verify Tickets",
          "label": "Tickets Data"
        },
        {
          "source": "Verify Tickets",
          "target": "Tickets DB",
          "label": "New Tickets Data"
        },
        {
          "source": "Verify Tickets",
          "target": "Client",
          "label": "Tickets Status"
        }
      ]
    }
  },
  {
    "id": 588,
    "title": "Secure Logistics System (Level 2 DFD)",
    "category": "Generated Logistics",
    "level": "Level 2 DFD",
    "description": "A 'User' sends a 'Orders Form' to 'Validate Orders' (Process). 'Validate Orders' fetches 'Config Data' from 'Orders Config' (Data Store) and passes 'Validated Orders' to 'Update Orders' (Process). 'Update Orders' saves 'Saved Orders' to 'Orders Records' (Data Store) and issues a 'Confirmation' to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Orders"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Orders"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Orders Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Orders Records"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Validate Orders",
          "label": "Orders Form"
        },
        {
          "source": "Orders Config",
          "target": "Validate Orders",
          "label": "Config Data"
        },
        {
          "source": "Validate Orders",
          "target": "Update Orders",
          "label": "Validated Orders"
        },
        {
          "source": "Update Orders",
          "target": "Orders Records",
          "label": "Saved Orders"
        },
        {
          "source": "Update Orders",
          "target": "User",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 589,
    "title": "Digital Airline System (Level 1 DFD)",
    "category": "Generated Airline",
    "level": "Level 1 DFD",
    "description": "A 'Patient' submits a 'Reports Request' to 'Verify Reports' (Process). The process checks the 'Reports DB' (Data Store) for 'Reports Data', updates the 'Reports DB' with 'New Reports Data', and sends a 'Reports Status' to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Verify Reports"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Reports DB"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Verify Reports",
          "label": "Reports Request"
        },
        {
          "source": "Reports DB",
          "target": "Verify Reports",
          "label": "Reports Data"
        },
        {
          "source": "Verify Reports",
          "target": "Reports DB",
          "label": "New Reports Data"
        },
        {
          "source": "Verify Reports",
          "target": "Patient",
          "label": "Reports Status"
        }
      ]
    }
  },
  {
    "id": 590,
    "title": "Local Pharmacy System (Level 1 DFD)",
    "category": "Generated Pharmacy",
    "level": "Level 1 DFD",
    "description": "A 'Manager' submits a 'Invoices Request' to 'Generate Invoices' (Process). The process checks the 'Invoices DB' (Data Store) for 'Invoices Data', updates the 'Invoices DB' with 'New Invoices Data', and sends a 'Invoices Status' to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Generate Invoices"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Invoices DB"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Generate Invoices",
          "label": "Invoices Request"
        },
        {
          "source": "Invoices DB",
          "target": "Generate Invoices",
          "label": "Invoices Data"
        },
        {
          "source": "Generate Invoices",
          "target": "Invoices DB",
          "label": "New Invoices Data"
        },
        {
          "source": "Generate Invoices",
          "target": "Manager",
          "label": "Invoices Status"
        }
      ]
    }
  },
  {
    "id": 591,
    "title": "Digital Logistics System (Level 2 DFD)",
    "category": "Generated Logistics",
    "level": "Level 2 DFD",
    "description": "A 'User' sends a 'Records Form' to 'Validate Records' (Process). 'Validate Records' fetches 'Config Data' from 'Records Config' (Data Store) and passes 'Validated Records' to 'Update Records' (Process). 'Update Records' saves 'Saved Records' to 'Records Records' (Data Store) and issues a 'Confirmation' to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Records"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Records"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Records Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Records Records"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Validate Records",
          "label": "Records Form"
        },
        {
          "source": "Records Config",
          "target": "Validate Records",
          "label": "Config Data"
        },
        {
          "source": "Validate Records",
          "target": "Update Records",
          "label": "Validated Records"
        },
        {
          "source": "Update Records",
          "target": "Records Records",
          "label": "Saved Records"
        },
        {
          "source": "Update Records",
          "target": "User",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 592,
    "title": "Smart Logistics System (Level 1 DFD)",
    "category": "Generated Logistics",
    "level": "Level 1 DFD",
    "description": "A 'Driver' submits a 'Profiles Request' to 'Update Profiles' (Process). The process checks the 'Profiles DB' (Data Store) for 'Profiles Data', updates the 'Profiles DB' with 'New Profiles Data', and sends a 'Profiles Status' to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Update Profiles"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Profiles DB"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Update Profiles",
          "label": "Profiles Request"
        },
        {
          "source": "Profiles DB",
          "target": "Update Profiles",
          "label": "Profiles Data"
        },
        {
          "source": "Update Profiles",
          "target": "Profiles DB",
          "label": "New Profiles Data"
        },
        {
          "source": "Update Profiles",
          "target": "Driver",
          "label": "Profiles Status"
        }
      ]
    }
  },
  {
    "id": 593,
    "title": "Global Banking System (Level 1 DFD)",
    "category": "Generated Banking",
    "level": "Level 1 DFD",
    "description": "A 'Client' submits a 'Payments Request' to 'Update Payments' (Process). The process checks the 'Payments DB' (Data Store) for 'Payments Data', updates the 'Payments DB' with 'New Payments Data', and sends a 'Payments Status' to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Update Payments"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Payments DB"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Update Payments",
          "label": "Payments Request"
        },
        {
          "source": "Payments DB",
          "target": "Update Payments",
          "label": "Payments Data"
        },
        {
          "source": "Update Payments",
          "target": "Payments DB",
          "label": "New Payments Data"
        },
        {
          "source": "Update Payments",
          "target": "Client",
          "label": "Payments Status"
        }
      ]
    }
  },
  {
    "id": 594,
    "title": "Enterprise Pharmacy System (Context Diagram)",
    "category": "Generated Pharmacy",
    "level": "Context Diagram",
    "description": "A 'Customer' sends a 'Records Request' to the 'Enterprise Pharmacy System' (Process). The system processes the request and sends a 'Records Response' back to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Enterprise Pharmacy System"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Enterprise Pharmacy System",
          "label": "Records Request"
        },
        {
          "source": "Enterprise Pharmacy System",
          "target": "Customer",
          "label": "Records Response"
        }
      ]
    }
  },
  {
    "id": 595,
    "title": "Enterprise Hotel System (Level 2 DFD)",
    "category": "Generated Hotel",
    "level": "Level 2 DFD",
    "description": "A 'Patient' sends a 'Records Form' to 'Validate Records' (Process). 'Validate Records' fetches 'Config Data' from 'Records Config' (Data Store) and passes 'Validated Records' to 'Update Records' (Process). 'Update Records' saves 'Saved Records' to 'Records Records' (Data Store) and issues a 'Confirmation' to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Records"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Records"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Records Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Records Records"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Validate Records",
          "label": "Records Form"
        },
        {
          "source": "Records Config",
          "target": "Validate Records",
          "label": "Config Data"
        },
        {
          "source": "Validate Records",
          "target": "Update Records",
          "label": "Validated Records"
        },
        {
          "source": "Update Records",
          "target": "Records Records",
          "label": "Saved Records"
        },
        {
          "source": "Update Records",
          "target": "Patient",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 596,
    "title": "Local Retail System (Level 2 DFD)",
    "category": "Generated Retail",
    "level": "Level 2 DFD",
    "description": "A 'Driver' sends a 'Orders Form' to 'Validate Orders' (Process). 'Validate Orders' fetches 'Config Data' from 'Orders Config' (Data Store) and passes 'Validated Orders' to 'Update Orders' (Process). 'Update Orders' saves 'Saved Orders' to 'Orders Records' (Data Store) and issues a 'Confirmation' to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Orders"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Orders"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Orders Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Orders Records"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Validate Orders",
          "label": "Orders Form"
        },
        {
          "source": "Orders Config",
          "target": "Validate Orders",
          "label": "Config Data"
        },
        {
          "source": "Validate Orders",
          "target": "Update Orders",
          "label": "Validated Orders"
        },
        {
          "source": "Update Orders",
          "target": "Orders Records",
          "label": "Saved Orders"
        },
        {
          "source": "Update Orders",
          "target": "Driver",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 597,
    "title": "Global Hospital System (Context Diagram)",
    "category": "Generated Hospital",
    "level": "Context Diagram",
    "description": "A 'Customer' sends a 'Invoices Request' to the 'Global Hospital System' (Process). The system processes the request and sends a 'Invoices Response' back to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Global Hospital System"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Global Hospital System",
          "label": "Invoices Request"
        },
        {
          "source": "Global Hospital System",
          "target": "Customer",
          "label": "Invoices Response"
        }
      ]
    }
  },
  {
    "id": 598,
    "title": "Secure Hospital System (Level 2 DFD)",
    "category": "Generated Hospital",
    "level": "Level 2 DFD",
    "description": "A 'Admin' sends a 'Profiles Form' to 'Validate Profiles' (Process). 'Validate Profiles' fetches 'Config Data' from 'Profiles Config' (Data Store) and passes 'Validated Profiles' to 'Update Profiles' (Process). 'Update Profiles' saves 'Saved Profiles' to 'Profiles Records' (Data Store) and issues a 'Confirmation' to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Profiles"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Profiles"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Profiles Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Profiles Records"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Validate Profiles",
          "label": "Profiles Form"
        },
        {
          "source": "Profiles Config",
          "target": "Validate Profiles",
          "label": "Config Data"
        },
        {
          "source": "Validate Profiles",
          "target": "Update Profiles",
          "label": "Validated Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Profiles Records",
          "label": "Saved Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Admin",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 599,
    "title": "Cloud Pharmacy System (Level 2 DFD)",
    "category": "Generated Pharmacy",
    "level": "Level 2 DFD",
    "description": "A 'Guest' sends a 'Reports Form' to 'Validate Reports' (Process). 'Validate Reports' fetches 'Config Data' from 'Reports Config' (Data Store) and passes 'Validated Reports' to 'Update Reports' (Process). 'Update Reports' saves 'Saved Reports' to 'Reports Records' (Data Store) and issues a 'Confirmation' to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Reports"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Reports"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Reports Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Reports Records"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Validate Reports",
          "label": "Reports Form"
        },
        {
          "source": "Reports Config",
          "target": "Validate Reports",
          "label": "Config Data"
        },
        {
          "source": "Validate Reports",
          "target": "Update Reports",
          "label": "Validated Reports"
        },
        {
          "source": "Update Reports",
          "target": "Reports Records",
          "label": "Saved Reports"
        },
        {
          "source": "Update Reports",
          "target": "Guest",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 600,
    "title": "Enterprise Hotel System (Level 2 DFD)",
    "category": "Generated Hotel",
    "level": "Level 2 DFD",
    "description": "A 'Patient' sends a 'Reports Form' to 'Validate Reports' (Process). 'Validate Reports' fetches 'Config Data' from 'Reports Config' (Data Store) and passes 'Validated Reports' to 'Update Reports' (Process). 'Update Reports' saves 'Saved Reports' to 'Reports Records' (Data Store) and issues a 'Confirmation' to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Reports"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Reports"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Reports Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Reports Records"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Validate Reports",
          "label": "Reports Form"
        },
        {
          "source": "Reports Config",
          "target": "Validate Reports",
          "label": "Config Data"
        },
        {
          "source": "Validate Reports",
          "target": "Update Reports",
          "label": "Validated Reports"
        },
        {
          "source": "Update Reports",
          "target": "Reports Records",
          "label": "Saved Reports"
        },
        {
          "source": "Update Reports",
          "target": "Patient",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 601,
    "title": "Digital Airline System (Context Diagram)",
    "category": "Generated Airline",
    "level": "Context Diagram",
    "description": "A 'Customer' sends a 'Requests Request' to the 'Digital Airline System' (Process). The system processes the request and sends a 'Requests Response' back to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Digital Airline System"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Digital Airline System",
          "label": "Requests Request"
        },
        {
          "source": "Digital Airline System",
          "target": "Customer",
          "label": "Requests Response"
        }
      ]
    }
  },
  {
    "id": 602,
    "title": "Digital Airline System (Context Diagram)",
    "category": "Generated Airline",
    "level": "Context Diagram",
    "description": "A 'Driver' sends a 'Payments Request' to the 'Digital Airline System' (Process). The system processes the request and sends a 'Payments Response' back to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Digital Airline System"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Digital Airline System",
          "label": "Payments Request"
        },
        {
          "source": "Digital Airline System",
          "target": "Driver",
          "label": "Payments Response"
        }
      ]
    }
  },
  {
    "id": 603,
    "title": "Pro Pharmacy System (Level 2 DFD)",
    "category": "Generated Pharmacy",
    "level": "Level 2 DFD",
    "description": "A 'Manager' sends a 'Records Form' to 'Validate Records' (Process). 'Validate Records' fetches 'Config Data' from 'Records Config' (Data Store) and passes 'Validated Records' to 'Update Records' (Process). 'Update Records' saves 'Saved Records' to 'Records Records' (Data Store) and issues a 'Confirmation' to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Records"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Records"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Records Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Records Records"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Validate Records",
          "label": "Records Form"
        },
        {
          "source": "Records Config",
          "target": "Validate Records",
          "label": "Config Data"
        },
        {
          "source": "Validate Records",
          "target": "Update Records",
          "label": "Validated Records"
        },
        {
          "source": "Update Records",
          "target": "Records Records",
          "label": "Saved Records"
        },
        {
          "source": "Update Records",
          "target": "Manager",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 604,
    "title": "Local Airline System (Context Diagram)",
    "category": "Generated Airline",
    "level": "Context Diagram",
    "description": "A 'Customer' sends a 'Records Request' to the 'Local Airline System' (Process). The system processes the request and sends a 'Records Response' back to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Local Airline System"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Local Airline System",
          "label": "Records Request"
        },
        {
          "source": "Local Airline System",
          "target": "Customer",
          "label": "Records Response"
        }
      ]
    }
  },
  {
    "id": 605,
    "title": "Smart Pharmacy System (Context Diagram)",
    "category": "Generated Pharmacy",
    "level": "Context Diagram",
    "description": "A 'Client' sends a 'Payments Request' to the 'Smart Pharmacy System' (Process). The system processes the request and sends a 'Payments Response' back to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Smart Pharmacy System"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Smart Pharmacy System",
          "label": "Payments Request"
        },
        {
          "source": "Smart Pharmacy System",
          "target": "Client",
          "label": "Payments Response"
        }
      ]
    }
  },
  {
    "id": 606,
    "title": "Smart School System (Level 1 DFD)",
    "category": "Generated School",
    "level": "Level 1 DFD",
    "description": "A 'Customer' submits a 'Tickets Request' to 'Manage Tickets' (Process). The process checks the 'Tickets DB' (Data Store) for 'Tickets Data', updates the 'Tickets DB' with 'New Tickets Data', and sends a 'Tickets Status' to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Manage Tickets"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Tickets DB"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Manage Tickets",
          "label": "Tickets Request"
        },
        {
          "source": "Tickets DB",
          "target": "Manage Tickets",
          "label": "Tickets Data"
        },
        {
          "source": "Manage Tickets",
          "target": "Tickets DB",
          "label": "New Tickets Data"
        },
        {
          "source": "Manage Tickets",
          "target": "Customer",
          "label": "Tickets Status"
        }
      ]
    }
  },
  {
    "id": 607,
    "title": "Smart Hotel System (Level 2 DFD)",
    "category": "Generated Hotel",
    "level": "Level 2 DFD",
    "description": "A 'Patient' sends a 'Reports Form' to 'Validate Reports' (Process). 'Validate Reports' fetches 'Config Data' from 'Reports Config' (Data Store) and passes 'Validated Reports' to 'Update Reports' (Process). 'Update Reports' saves 'Saved Reports' to 'Reports Records' (Data Store) and issues a 'Confirmation' to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Reports"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Reports"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Reports Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Reports Records"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Validate Reports",
          "label": "Reports Form"
        },
        {
          "source": "Reports Config",
          "target": "Validate Reports",
          "label": "Config Data"
        },
        {
          "source": "Validate Reports",
          "target": "Update Reports",
          "label": "Validated Reports"
        },
        {
          "source": "Update Reports",
          "target": "Reports Records",
          "label": "Saved Reports"
        },
        {
          "source": "Update Reports",
          "target": "Patient",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 608,
    "title": "Pro Retail System (Level 1 DFD)",
    "category": "Generated Retail",
    "level": "Level 1 DFD",
    "description": "A 'Student' submits a 'Profiles Request' to 'Register Profiles' (Process). The process checks the 'Profiles DB' (Data Store) for 'Profiles Data', updates the 'Profiles DB' with 'New Profiles Data', and sends a 'Profiles Status' to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Register Profiles"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Profiles DB"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Register Profiles",
          "label": "Profiles Request"
        },
        {
          "source": "Profiles DB",
          "target": "Register Profiles",
          "label": "Profiles Data"
        },
        {
          "source": "Register Profiles",
          "target": "Profiles DB",
          "label": "New Profiles Data"
        },
        {
          "source": "Register Profiles",
          "target": "Student",
          "label": "Profiles Status"
        }
      ]
    }
  },
  {
    "id": 609,
    "title": "Pro Retail System (Level 1 DFD)",
    "category": "Generated Retail",
    "level": "Level 1 DFD",
    "description": "A 'Staff' submits a 'Requests Request' to 'Manage Requests' (Process). The process checks the 'Requests DB' (Data Store) for 'Requests Data', updates the 'Requests DB' with 'New Requests Data', and sends a 'Requests Status' to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Manage Requests"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Requests DB"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Manage Requests",
          "label": "Requests Request"
        },
        {
          "source": "Requests DB",
          "target": "Manage Requests",
          "label": "Requests Data"
        },
        {
          "source": "Manage Requests",
          "target": "Requests DB",
          "label": "New Requests Data"
        },
        {
          "source": "Manage Requests",
          "target": "Staff",
          "label": "Requests Status"
        }
      ]
    }
  },
  {
    "id": 610,
    "title": "Digital Library System (Level 1 DFD)",
    "category": "Generated Library",
    "level": "Level 1 DFD",
    "description": "A 'Staff' submits a 'Appointments Request' to 'Generate Appointments' (Process). The process checks the 'Appointments DB' (Data Store) for 'Appointments Data', updates the 'Appointments DB' with 'New Appointments Data', and sends a 'Appointments Status' to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Generate Appointments"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Appointments DB"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Generate Appointments",
          "label": "Appointments Request"
        },
        {
          "source": "Appointments DB",
          "target": "Generate Appointments",
          "label": "Appointments Data"
        },
        {
          "source": "Generate Appointments",
          "target": "Appointments DB",
          "label": "New Appointments Data"
        },
        {
          "source": "Generate Appointments",
          "target": "Staff",
          "label": "Appointments Status"
        }
      ]
    }
  },
  {
    "id": 611,
    "title": "Enterprise Retail System (Level 2 DFD)",
    "category": "Generated Retail",
    "level": "Level 2 DFD",
    "description": "A 'Admin' sends a 'Profiles Form' to 'Validate Profiles' (Process). 'Validate Profiles' fetches 'Config Data' from 'Profiles Config' (Data Store) and passes 'Validated Profiles' to 'Update Profiles' (Process). 'Update Profiles' saves 'Saved Profiles' to 'Profiles Records' (Data Store) and issues a 'Confirmation' to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Profiles"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Profiles"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Profiles Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Profiles Records"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Validate Profiles",
          "label": "Profiles Form"
        },
        {
          "source": "Profiles Config",
          "target": "Validate Profiles",
          "label": "Config Data"
        },
        {
          "source": "Validate Profiles",
          "target": "Update Profiles",
          "label": "Validated Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Profiles Records",
          "label": "Saved Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Admin",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 612,
    "title": "Enterprise Library System (Level 1 DFD)",
    "category": "Generated Library",
    "level": "Level 1 DFD",
    "description": "A 'Driver' submits a 'Claims Request' to 'Register Claims' (Process). The process checks the 'Claims DB' (Data Store) for 'Claims Data', updates the 'Claims DB' with 'New Claims Data', and sends a 'Claims Status' to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Register Claims"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Claims DB"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Register Claims",
          "label": "Claims Request"
        },
        {
          "source": "Claims DB",
          "target": "Register Claims",
          "label": "Claims Data"
        },
        {
          "source": "Register Claims",
          "target": "Claims DB",
          "label": "New Claims Data"
        },
        {
          "source": "Register Claims",
          "target": "Driver",
          "label": "Claims Status"
        }
      ]
    }
  },
  {
    "id": 613,
    "title": "Local Library System (Level 2 DFD)",
    "category": "Generated Library",
    "level": "Level 2 DFD",
    "description": "A 'User' sends a 'Orders Form' to 'Validate Orders' (Process). 'Validate Orders' fetches 'Config Data' from 'Orders Config' (Data Store) and passes 'Validated Orders' to 'Update Orders' (Process). 'Update Orders' saves 'Saved Orders' to 'Orders Records' (Data Store) and issues a 'Confirmation' to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Orders"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Orders"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Orders Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Orders Records"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Validate Orders",
          "label": "Orders Form"
        },
        {
          "source": "Orders Config",
          "target": "Validate Orders",
          "label": "Config Data"
        },
        {
          "source": "Validate Orders",
          "target": "Update Orders",
          "label": "Validated Orders"
        },
        {
          "source": "Update Orders",
          "target": "Orders Records",
          "label": "Saved Orders"
        },
        {
          "source": "Update Orders",
          "target": "User",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 614,
    "title": "Digital Airline System (Context Diagram)",
    "category": "Generated Airline",
    "level": "Context Diagram",
    "description": "A 'User' sends a 'Appointments Request' to the 'Digital Airline System' (Process). The system processes the request and sends a 'Appointments Response' back to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Digital Airline System"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Digital Airline System",
          "label": "Appointments Request"
        },
        {
          "source": "Digital Airline System",
          "target": "User",
          "label": "Appointments Response"
        }
      ]
    }
  },
  {
    "id": 615,
    "title": "Enterprise Retail System (Context Diagram)",
    "category": "Generated Retail",
    "level": "Context Diagram",
    "description": "A 'Driver' sends a 'Profiles Request' to the 'Enterprise Retail System' (Process). The system processes the request and sends a 'Profiles Response' back to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Enterprise Retail System"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Enterprise Retail System",
          "label": "Profiles Request"
        },
        {
          "source": "Enterprise Retail System",
          "target": "Driver",
          "label": "Profiles Response"
        }
      ]
    }
  },
  {
    "id": 616,
    "title": "Global Cinema System (Context Diagram)",
    "category": "Generated Cinema",
    "level": "Context Diagram",
    "description": "A 'Guest' sends a 'Appointments Request' to the 'Global Cinema System' (Process). The system processes the request and sends a 'Appointments Response' back to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Global Cinema System"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Global Cinema System",
          "label": "Appointments Request"
        },
        {
          "source": "Global Cinema System",
          "target": "Guest",
          "label": "Appointments Response"
        }
      ]
    }
  },
  {
    "id": 617,
    "title": "Quick Hospital System (Context Diagram)",
    "category": "Generated Hospital",
    "level": "Context Diagram",
    "description": "A 'Admin' sends a 'Tickets Request' to the 'Quick Hospital System' (Process). The system processes the request and sends a 'Tickets Response' back to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Quick Hospital System"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Quick Hospital System",
          "label": "Tickets Request"
        },
        {
          "source": "Quick Hospital System",
          "target": "Admin",
          "label": "Tickets Response"
        }
      ]
    }
  },
  {
    "id": 618,
    "title": "Secure Hotel System (Level 2 DFD)",
    "category": "Generated Hotel",
    "level": "Level 2 DFD",
    "description": "A 'Customer' sends a 'Appointments Form' to 'Validate Appointments' (Process). 'Validate Appointments' fetches 'Config Data' from 'Appointments Config' (Data Store) and passes 'Validated Appointments' to 'Update Appointments' (Process). 'Update Appointments' saves 'Saved Appointments' to 'Appointments Records' (Data Store) and issues a 'Confirmation' to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Appointments"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Appointments"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Appointments Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Appointments Records"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Validate Appointments",
          "label": "Appointments Form"
        },
        {
          "source": "Appointments Config",
          "target": "Validate Appointments",
          "label": "Config Data"
        },
        {
          "source": "Validate Appointments",
          "target": "Update Appointments",
          "label": "Validated Appointments"
        },
        {
          "source": "Update Appointments",
          "target": "Appointments Records",
          "label": "Saved Appointments"
        },
        {
          "source": "Update Appointments",
          "target": "Customer",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 619,
    "title": "Smart Pharmacy System (Level 1 DFD)",
    "category": "Generated Pharmacy",
    "level": "Level 1 DFD",
    "description": "A 'Customer' submits a 'Requests Request' to 'Calculate Requests' (Process). The process checks the 'Requests DB' (Data Store) for 'Requests Data', updates the 'Requests DB' with 'New Requests Data', and sends a 'Requests Status' to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Calculate Requests"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Requests DB"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Calculate Requests",
          "label": "Requests Request"
        },
        {
          "source": "Requests DB",
          "target": "Calculate Requests",
          "label": "Requests Data"
        },
        {
          "source": "Calculate Requests",
          "target": "Requests DB",
          "label": "New Requests Data"
        },
        {
          "source": "Calculate Requests",
          "target": "Customer",
          "label": "Requests Status"
        }
      ]
    }
  },
  {
    "id": 620,
    "title": "Auto Airline System (Level 1 DFD)",
    "category": "Generated Airline",
    "level": "Level 1 DFD",
    "description": "A 'Customer' submits a 'Invoices Request' to 'Update Invoices' (Process). The process checks the 'Invoices DB' (Data Store) for 'Invoices Data', updates the 'Invoices DB' with 'New Invoices Data', and sends a 'Invoices Status' to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Update Invoices"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Invoices DB"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Update Invoices",
          "label": "Invoices Request"
        },
        {
          "source": "Invoices DB",
          "target": "Update Invoices",
          "label": "Invoices Data"
        },
        {
          "source": "Update Invoices",
          "target": "Invoices DB",
          "label": "New Invoices Data"
        },
        {
          "source": "Update Invoices",
          "target": "Customer",
          "label": "Invoices Status"
        }
      ]
    }
  },
  {
    "id": 621,
    "title": "Digital Hotel System (Context Diagram)",
    "category": "Generated Hotel",
    "level": "Context Diagram",
    "description": "A 'Staff' sends a 'Invoices Request' to the 'Digital Hotel System' (Process). The system processes the request and sends a 'Invoices Response' back to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Digital Hotel System"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Digital Hotel System",
          "label": "Invoices Request"
        },
        {
          "source": "Digital Hotel System",
          "target": "Staff",
          "label": "Invoices Response"
        }
      ]
    }
  },
  {
    "id": 622,
    "title": "Digital Airline System (Context Diagram)",
    "category": "Generated Airline",
    "level": "Context Diagram",
    "description": "A 'Manager' sends a 'Requests Request' to the 'Digital Airline System' (Process). The system processes the request and sends a 'Requests Response' back to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Digital Airline System"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Digital Airline System",
          "label": "Requests Request"
        },
        {
          "source": "Digital Airline System",
          "target": "Manager",
          "label": "Requests Response"
        }
      ]
    }
  },
  {
    "id": 623,
    "title": "Digital Hospital System (Level 1 DFD)",
    "category": "Generated Hospital",
    "level": "Level 1 DFD",
    "description": "A 'User' submits a 'Reports Request' to 'Process Reports' (Process). The process checks the 'Reports DB' (Data Store) for 'Reports Data', updates the 'Reports DB' with 'New Reports Data', and sends a 'Reports Status' to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Process Reports"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Reports DB"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Process Reports",
          "label": "Reports Request"
        },
        {
          "source": "Reports DB",
          "target": "Process Reports",
          "label": "Reports Data"
        },
        {
          "source": "Process Reports",
          "target": "Reports DB",
          "label": "New Reports Data"
        },
        {
          "source": "Process Reports",
          "target": "User",
          "label": "Reports Status"
        }
      ]
    }
  },
  {
    "id": 624,
    "title": "Digital Banking System (Context Diagram)",
    "category": "Generated Banking",
    "level": "Context Diagram",
    "description": "A 'Staff' sends a 'Orders Request' to the 'Digital Banking System' (Process). The system processes the request and sends a 'Orders Response' back to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Digital Banking System"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Digital Banking System",
          "label": "Orders Request"
        },
        {
          "source": "Digital Banking System",
          "target": "Staff",
          "label": "Orders Response"
        }
      ]
    }
  },
  {
    "id": 625,
    "title": "Auto Hotel System (Level 2 DFD)",
    "category": "Generated Hotel",
    "level": "Level 2 DFD",
    "description": "A 'Driver' sends a 'Claims Form' to 'Validate Claims' (Process). 'Validate Claims' fetches 'Config Data' from 'Claims Config' (Data Store) and passes 'Validated Claims' to 'Update Claims' (Process). 'Update Claims' saves 'Saved Claims' to 'Claims Records' (Data Store) and issues a 'Confirmation' to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Claims"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Claims"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Claims Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Claims Records"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Validate Claims",
          "label": "Claims Form"
        },
        {
          "source": "Claims Config",
          "target": "Validate Claims",
          "label": "Config Data"
        },
        {
          "source": "Validate Claims",
          "target": "Update Claims",
          "label": "Validated Claims"
        },
        {
          "source": "Update Claims",
          "target": "Claims Records",
          "label": "Saved Claims"
        },
        {
          "source": "Update Claims",
          "target": "Driver",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 626,
    "title": "Auto Hospital System (Level 2 DFD)",
    "category": "Generated Hospital",
    "level": "Level 2 DFD",
    "description": "A 'Patient' sends a 'Claims Form' to 'Validate Claims' (Process). 'Validate Claims' fetches 'Config Data' from 'Claims Config' (Data Store) and passes 'Validated Claims' to 'Update Claims' (Process). 'Update Claims' saves 'Saved Claims' to 'Claims Records' (Data Store) and issues a 'Confirmation' to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Claims"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Claims"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Claims Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Claims Records"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Validate Claims",
          "label": "Claims Form"
        },
        {
          "source": "Claims Config",
          "target": "Validate Claims",
          "label": "Config Data"
        },
        {
          "source": "Validate Claims",
          "target": "Update Claims",
          "label": "Validated Claims"
        },
        {
          "source": "Update Claims",
          "target": "Claims Records",
          "label": "Saved Claims"
        },
        {
          "source": "Update Claims",
          "target": "Patient",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 627,
    "title": "Auto Retail System (Level 2 DFD)",
    "category": "Generated Retail",
    "level": "Level 2 DFD",
    "description": "A 'Manager' sends a 'Claims Form' to 'Validate Claims' (Process). 'Validate Claims' fetches 'Config Data' from 'Claims Config' (Data Store) and passes 'Validated Claims' to 'Update Claims' (Process). 'Update Claims' saves 'Saved Claims' to 'Claims Records' (Data Store) and issues a 'Confirmation' to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Claims"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Claims"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Claims Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Claims Records"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Validate Claims",
          "label": "Claims Form"
        },
        {
          "source": "Claims Config",
          "target": "Validate Claims",
          "label": "Config Data"
        },
        {
          "source": "Validate Claims",
          "target": "Update Claims",
          "label": "Validated Claims"
        },
        {
          "source": "Update Claims",
          "target": "Claims Records",
          "label": "Saved Claims"
        },
        {
          "source": "Update Claims",
          "target": "Manager",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 628,
    "title": "Auto Hospital System (Level 1 DFD)",
    "category": "Generated Hospital",
    "level": "Level 1 DFD",
    "description": "A 'Customer' submits a 'Invoices Request' to 'Verify Invoices' (Process). The process checks the 'Invoices DB' (Data Store) for 'Invoices Data', updates the 'Invoices DB' with 'New Invoices Data', and sends a 'Invoices Status' to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Verify Invoices"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Invoices DB"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Verify Invoices",
          "label": "Invoices Request"
        },
        {
          "source": "Invoices DB",
          "target": "Verify Invoices",
          "label": "Invoices Data"
        },
        {
          "source": "Verify Invoices",
          "target": "Invoices DB",
          "label": "New Invoices Data"
        },
        {
          "source": "Verify Invoices",
          "target": "Customer",
          "label": "Invoices Status"
        }
      ]
    }
  },
  {
    "id": 629,
    "title": "Quick School System (Level 1 DFD)",
    "category": "Generated School",
    "level": "Level 1 DFD",
    "description": "A 'Student' submits a 'Tickets Request' to 'Manage Tickets' (Process). The process checks the 'Tickets DB' (Data Store) for 'Tickets Data', updates the 'Tickets DB' with 'New Tickets Data', and sends a 'Tickets Status' to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Manage Tickets"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Tickets DB"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Manage Tickets",
          "label": "Tickets Request"
        },
        {
          "source": "Tickets DB",
          "target": "Manage Tickets",
          "label": "Tickets Data"
        },
        {
          "source": "Manage Tickets",
          "target": "Tickets DB",
          "label": "New Tickets Data"
        },
        {
          "source": "Manage Tickets",
          "target": "Student",
          "label": "Tickets Status"
        }
      ]
    }
  },
  {
    "id": 630,
    "title": "Digital Logistics System (Context Diagram)",
    "category": "Generated Logistics",
    "level": "Context Diagram",
    "description": "A 'Staff' sends a 'Invoices Request' to the 'Digital Logistics System' (Process). The system processes the request and sends a 'Invoices Response' back to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Digital Logistics System"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Digital Logistics System",
          "label": "Invoices Request"
        },
        {
          "source": "Digital Logistics System",
          "target": "Staff",
          "label": "Invoices Response"
        }
      ]
    }
  },
  {
    "id": 631,
    "title": "Pro Hotel System (Level 2 DFD)",
    "category": "Generated Hotel",
    "level": "Level 2 DFD",
    "description": "A 'Staff' sends a 'Claims Form' to 'Validate Claims' (Process). 'Validate Claims' fetches 'Config Data' from 'Claims Config' (Data Store) and passes 'Validated Claims' to 'Update Claims' (Process). 'Update Claims' saves 'Saved Claims' to 'Claims Records' (Data Store) and issues a 'Confirmation' to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Claims"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Claims"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Claims Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Claims Records"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Validate Claims",
          "label": "Claims Form"
        },
        {
          "source": "Claims Config",
          "target": "Validate Claims",
          "label": "Config Data"
        },
        {
          "source": "Validate Claims",
          "target": "Update Claims",
          "label": "Validated Claims"
        },
        {
          "source": "Update Claims",
          "target": "Claims Records",
          "label": "Saved Claims"
        },
        {
          "source": "Update Claims",
          "target": "Staff",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 632,
    "title": "Digital Hotel System (Context Diagram)",
    "category": "Generated Hotel",
    "level": "Context Diagram",
    "description": "A 'Student' sends a 'Claims Request' to the 'Digital Hotel System' (Process). The system processes the request and sends a 'Claims Response' back to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Digital Hotel System"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Digital Hotel System",
          "label": "Claims Request"
        },
        {
          "source": "Digital Hotel System",
          "target": "Student",
          "label": "Claims Response"
        }
      ]
    }
  },
  {
    "id": 633,
    "title": "Quick Hotel System (Context Diagram)",
    "category": "Generated Hotel",
    "level": "Context Diagram",
    "description": "A 'Client' sends a 'Orders Request' to the 'Quick Hotel System' (Process). The system processes the request and sends a 'Orders Response' back to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Quick Hotel System"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Quick Hotel System",
          "label": "Orders Request"
        },
        {
          "source": "Quick Hotel System",
          "target": "Client",
          "label": "Orders Response"
        }
      ]
    }
  },
  {
    "id": 634,
    "title": "Quick Library System (Context Diagram)",
    "category": "Generated Library",
    "level": "Context Diagram",
    "description": "A 'Patient' sends a 'Reports Request' to the 'Quick Library System' (Process). The system processes the request and sends a 'Reports Response' back to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Quick Library System"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Quick Library System",
          "label": "Reports Request"
        },
        {
          "source": "Quick Library System",
          "target": "Patient",
          "label": "Reports Response"
        }
      ]
    }
  },
  {
    "id": 635,
    "title": "Quick Banking System (Context Diagram)",
    "category": "Generated Banking",
    "level": "Context Diagram",
    "description": "A 'Student' sends a 'Reports Request' to the 'Quick Banking System' (Process). The system processes the request and sends a 'Reports Response' back to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Quick Banking System"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Quick Banking System",
          "label": "Reports Request"
        },
        {
          "source": "Quick Banking System",
          "target": "Student",
          "label": "Reports Response"
        }
      ]
    }
  },
  {
    "id": 636,
    "title": "Global Retail System (Context Diagram)",
    "category": "Generated Retail",
    "level": "Context Diagram",
    "description": "A 'Guest' sends a 'Invoices Request' to the 'Global Retail System' (Process). The system processes the request and sends a 'Invoices Response' back to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Global Retail System"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Global Retail System",
          "label": "Invoices Request"
        },
        {
          "source": "Global Retail System",
          "target": "Guest",
          "label": "Invoices Response"
        }
      ]
    }
  },
  {
    "id": 637,
    "title": "Local Retail System (Context Diagram)",
    "category": "Generated Retail",
    "level": "Context Diagram",
    "description": "A 'Customer' sends a 'Requests Request' to the 'Local Retail System' (Process). The system processes the request and sends a 'Requests Response' back to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Local Retail System"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Local Retail System",
          "label": "Requests Request"
        },
        {
          "source": "Local Retail System",
          "target": "Customer",
          "label": "Requests Response"
        }
      ]
    }
  },
  {
    "id": 638,
    "title": "Pro Retail System (Level 2 DFD)",
    "category": "Generated Retail",
    "level": "Level 2 DFD",
    "description": "A 'Staff' sends a 'Tickets Form' to 'Validate Tickets' (Process). 'Validate Tickets' fetches 'Config Data' from 'Tickets Config' (Data Store) and passes 'Validated Tickets' to 'Update Tickets' (Process). 'Update Tickets' saves 'Saved Tickets' to 'Tickets Records' (Data Store) and issues a 'Confirmation' to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Tickets"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Tickets"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Tickets Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Tickets Records"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Validate Tickets",
          "label": "Tickets Form"
        },
        {
          "source": "Tickets Config",
          "target": "Validate Tickets",
          "label": "Config Data"
        },
        {
          "source": "Validate Tickets",
          "target": "Update Tickets",
          "label": "Validated Tickets"
        },
        {
          "source": "Update Tickets",
          "target": "Tickets Records",
          "label": "Saved Tickets"
        },
        {
          "source": "Update Tickets",
          "target": "Staff",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 639,
    "title": "Secure Hotel System (Level 2 DFD)",
    "category": "Generated Hotel",
    "level": "Level 2 DFD",
    "description": "A 'Driver' sends a 'Invoices Form' to 'Validate Invoices' (Process). 'Validate Invoices' fetches 'Config Data' from 'Invoices Config' (Data Store) and passes 'Validated Invoices' to 'Update Invoices' (Process). 'Update Invoices' saves 'Saved Invoices' to 'Invoices Records' (Data Store) and issues a 'Confirmation' to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Invoices"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Invoices"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Invoices Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Invoices Records"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Validate Invoices",
          "label": "Invoices Form"
        },
        {
          "source": "Invoices Config",
          "target": "Validate Invoices",
          "label": "Config Data"
        },
        {
          "source": "Validate Invoices",
          "target": "Update Invoices",
          "label": "Validated Invoices"
        },
        {
          "source": "Update Invoices",
          "target": "Invoices Records",
          "label": "Saved Invoices"
        },
        {
          "source": "Update Invoices",
          "target": "Driver",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 640,
    "title": "Digital Retail System (Level 1 DFD)",
    "category": "Generated Retail",
    "level": "Level 1 DFD",
    "description": "A 'Guest' submits a 'Records Request' to 'Verify Records' (Process). The process checks the 'Records DB' (Data Store) for 'Records Data', updates the 'Records DB' with 'New Records Data', and sends a 'Records Status' to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Verify Records"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Records DB"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Verify Records",
          "label": "Records Request"
        },
        {
          "source": "Records DB",
          "target": "Verify Records",
          "label": "Records Data"
        },
        {
          "source": "Verify Records",
          "target": "Records DB",
          "label": "New Records Data"
        },
        {
          "source": "Verify Records",
          "target": "Guest",
          "label": "Records Status"
        }
      ]
    }
  },
  {
    "id": 641,
    "title": "Local Logistics System (Level 2 DFD)",
    "category": "Generated Logistics",
    "level": "Level 2 DFD",
    "description": "A 'Driver' sends a 'Requests Form' to 'Validate Requests' (Process). 'Validate Requests' fetches 'Config Data' from 'Requests Config' (Data Store) and passes 'Validated Requests' to 'Update Requests' (Process). 'Update Requests' saves 'Saved Requests' to 'Requests Records' (Data Store) and issues a 'Confirmation' to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Requests"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Requests"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Requests Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Requests Records"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Validate Requests",
          "label": "Requests Form"
        },
        {
          "source": "Requests Config",
          "target": "Validate Requests",
          "label": "Config Data"
        },
        {
          "source": "Validate Requests",
          "target": "Update Requests",
          "label": "Validated Requests"
        },
        {
          "source": "Update Requests",
          "target": "Requests Records",
          "label": "Saved Requests"
        },
        {
          "source": "Update Requests",
          "target": "Driver",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 642,
    "title": "Smart Hospital System (Level 2 DFD)",
    "category": "Generated Hospital",
    "level": "Level 2 DFD",
    "description": "A 'User' sends a 'Records Form' to 'Validate Records' (Process). 'Validate Records' fetches 'Config Data' from 'Records Config' (Data Store) and passes 'Validated Records' to 'Update Records' (Process). 'Update Records' saves 'Saved Records' to 'Records Records' (Data Store) and issues a 'Confirmation' to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Records"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Records"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Records Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Records Records"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Validate Records",
          "label": "Records Form"
        },
        {
          "source": "Records Config",
          "target": "Validate Records",
          "label": "Config Data"
        },
        {
          "source": "Validate Records",
          "target": "Update Records",
          "label": "Validated Records"
        },
        {
          "source": "Update Records",
          "target": "Records Records",
          "label": "Saved Records"
        },
        {
          "source": "Update Records",
          "target": "User",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 643,
    "title": "Smart School System (Context Diagram)",
    "category": "Generated School",
    "level": "Context Diagram",
    "description": "A 'Client' sends a 'Payments Request' to the 'Smart School System' (Process). The system processes the request and sends a 'Payments Response' back to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Smart School System"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Smart School System",
          "label": "Payments Request"
        },
        {
          "source": "Smart School System",
          "target": "Client",
          "label": "Payments Response"
        }
      ]
    }
  },
  {
    "id": 644,
    "title": "Cloud Banking System (Level 1 DFD)",
    "category": "Generated Banking",
    "level": "Level 1 DFD",
    "description": "A 'Staff' submits a 'Payments Request' to 'Process Payments' (Process). The process checks the 'Payments DB' (Data Store) for 'Payments Data', updates the 'Payments DB' with 'New Payments Data', and sends a 'Payments Status' to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Process Payments"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Payments DB"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Process Payments",
          "label": "Payments Request"
        },
        {
          "source": "Payments DB",
          "target": "Process Payments",
          "label": "Payments Data"
        },
        {
          "source": "Process Payments",
          "target": "Payments DB",
          "label": "New Payments Data"
        },
        {
          "source": "Process Payments",
          "target": "Staff",
          "label": "Payments Status"
        }
      ]
    }
  },
  {
    "id": 645,
    "title": "Pro Hospital System (Level 1 DFD)",
    "category": "Generated Hospital",
    "level": "Level 1 DFD",
    "description": "A 'Driver' submits a 'Payments Request' to 'Approve Payments' (Process). The process checks the 'Payments DB' (Data Store) for 'Payments Data', updates the 'Payments DB' with 'New Payments Data', and sends a 'Payments Status' to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Approve Payments"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Payments DB"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Approve Payments",
          "label": "Payments Request"
        },
        {
          "source": "Payments DB",
          "target": "Approve Payments",
          "label": "Payments Data"
        },
        {
          "source": "Approve Payments",
          "target": "Payments DB",
          "label": "New Payments Data"
        },
        {
          "source": "Approve Payments",
          "target": "Driver",
          "label": "Payments Status"
        }
      ]
    }
  },
  {
    "id": 646,
    "title": "Global Retail System (Level 1 DFD)",
    "category": "Generated Retail",
    "level": "Level 1 DFD",
    "description": "A 'Client' submits a 'Claims Request' to 'Verify Claims' (Process). The process checks the 'Claims DB' (Data Store) for 'Claims Data', updates the 'Claims DB' with 'New Claims Data', and sends a 'Claims Status' to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Verify Claims"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Claims DB"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Verify Claims",
          "label": "Claims Request"
        },
        {
          "source": "Claims DB",
          "target": "Verify Claims",
          "label": "Claims Data"
        },
        {
          "source": "Verify Claims",
          "target": "Claims DB",
          "label": "New Claims Data"
        },
        {
          "source": "Verify Claims",
          "target": "Client",
          "label": "Claims Status"
        }
      ]
    }
  },
  {
    "id": 647,
    "title": "Global Cinema System (Context Diagram)",
    "category": "Generated Cinema",
    "level": "Context Diagram",
    "description": "A 'Manager' sends a 'Records Request' to the 'Global Cinema System' (Process). The system processes the request and sends a 'Records Response' back to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Global Cinema System"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Global Cinema System",
          "label": "Records Request"
        },
        {
          "source": "Global Cinema System",
          "target": "Manager",
          "label": "Records Response"
        }
      ]
    }
  },
  {
    "id": 648,
    "title": "Enterprise Airline System (Context Diagram)",
    "category": "Generated Airline",
    "level": "Context Diagram",
    "description": "A 'User' sends a 'Orders Request' to the 'Enterprise Airline System' (Process). The system processes the request and sends a 'Orders Response' back to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Enterprise Airline System"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Enterprise Airline System",
          "label": "Orders Request"
        },
        {
          "source": "Enterprise Airline System",
          "target": "User",
          "label": "Orders Response"
        }
      ]
    }
  },
  {
    "id": 649,
    "title": "Pro Cinema System (Level 1 DFD)",
    "category": "Generated Cinema",
    "level": "Level 1 DFD",
    "description": "A 'User' submits a 'Claims Request' to 'Analyze Claims' (Process). The process checks the 'Claims DB' (Data Store) for 'Claims Data', updates the 'Claims DB' with 'New Claims Data', and sends a 'Claims Status' to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Analyze Claims"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Claims DB"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Analyze Claims",
          "label": "Claims Request"
        },
        {
          "source": "Claims DB",
          "target": "Analyze Claims",
          "label": "Claims Data"
        },
        {
          "source": "Analyze Claims",
          "target": "Claims DB",
          "label": "New Claims Data"
        },
        {
          "source": "Analyze Claims",
          "target": "User",
          "label": "Claims Status"
        }
      ]
    }
  },
  {
    "id": 650,
    "title": "Secure Airline System (Level 1 DFD)",
    "category": "Generated Airline",
    "level": "Level 1 DFD",
    "description": "A 'Customer' submits a 'Tickets Request' to 'Generate Tickets' (Process). The process checks the 'Tickets DB' (Data Store) for 'Tickets Data', updates the 'Tickets DB' with 'New Tickets Data', and sends a 'Tickets Status' to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Generate Tickets"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Tickets DB"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Generate Tickets",
          "label": "Tickets Request"
        },
        {
          "source": "Tickets DB",
          "target": "Generate Tickets",
          "label": "Tickets Data"
        },
        {
          "source": "Generate Tickets",
          "target": "Tickets DB",
          "label": "New Tickets Data"
        },
        {
          "source": "Generate Tickets",
          "target": "Customer",
          "label": "Tickets Status"
        }
      ]
    }
  },
  {
    "id": 651,
    "title": "Cloud School System (Level 2 DFD)",
    "category": "Generated School",
    "level": "Level 2 DFD",
    "description": "A 'Admin' sends a 'Requests Form' to 'Validate Requests' (Process). 'Validate Requests' fetches 'Config Data' from 'Requests Config' (Data Store) and passes 'Validated Requests' to 'Update Requests' (Process). 'Update Requests' saves 'Saved Requests' to 'Requests Records' (Data Store) and issues a 'Confirmation' to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Requests"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Requests"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Requests Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Requests Records"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Validate Requests",
          "label": "Requests Form"
        },
        {
          "source": "Requests Config",
          "target": "Validate Requests",
          "label": "Config Data"
        },
        {
          "source": "Validate Requests",
          "target": "Update Requests",
          "label": "Validated Requests"
        },
        {
          "source": "Update Requests",
          "target": "Requests Records",
          "label": "Saved Requests"
        },
        {
          "source": "Update Requests",
          "target": "Admin",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 652,
    "title": "Secure Library System (Level 2 DFD)",
    "category": "Generated Library",
    "level": "Level 2 DFD",
    "description": "A 'Manager' sends a 'Profiles Form' to 'Validate Profiles' (Process). 'Validate Profiles' fetches 'Config Data' from 'Profiles Config' (Data Store) and passes 'Validated Profiles' to 'Update Profiles' (Process). 'Update Profiles' saves 'Saved Profiles' to 'Profiles Records' (Data Store) and issues a 'Confirmation' to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Profiles"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Profiles"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Profiles Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Profiles Records"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Validate Profiles",
          "label": "Profiles Form"
        },
        {
          "source": "Profiles Config",
          "target": "Validate Profiles",
          "label": "Config Data"
        },
        {
          "source": "Validate Profiles",
          "target": "Update Profiles",
          "label": "Validated Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Profiles Records",
          "label": "Saved Profiles"
        },
        {
          "source": "Update Profiles",
          "target": "Manager",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 653,
    "title": "Auto Airline System (Level 2 DFD)",
    "category": "Generated Airline",
    "level": "Level 2 DFD",
    "description": "A 'Admin' sends a 'Invoices Form' to 'Validate Invoices' (Process). 'Validate Invoices' fetches 'Config Data' from 'Invoices Config' (Data Store) and passes 'Validated Invoices' to 'Update Invoices' (Process). 'Update Invoices' saves 'Saved Invoices' to 'Invoices Records' (Data Store) and issues a 'Confirmation' to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Invoices"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Invoices"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Invoices Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Invoices Records"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Validate Invoices",
          "label": "Invoices Form"
        },
        {
          "source": "Invoices Config",
          "target": "Validate Invoices",
          "label": "Config Data"
        },
        {
          "source": "Validate Invoices",
          "target": "Update Invoices",
          "label": "Validated Invoices"
        },
        {
          "source": "Update Invoices",
          "target": "Invoices Records",
          "label": "Saved Invoices"
        },
        {
          "source": "Update Invoices",
          "target": "Admin",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 654,
    "title": "Secure Retail System (Context Diagram)",
    "category": "Generated Retail",
    "level": "Context Diagram",
    "description": "A 'Patient' sends a 'Reports Request' to the 'Secure Retail System' (Process). The system processes the request and sends a 'Reports Response' back to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Secure Retail System"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Secure Retail System",
          "label": "Reports Request"
        },
        {
          "source": "Secure Retail System",
          "target": "Patient",
          "label": "Reports Response"
        }
      ]
    }
  },
  {
    "id": 655,
    "title": "Auto Library System (Context Diagram)",
    "category": "Generated Library",
    "level": "Context Diagram",
    "description": "A 'Guest' sends a 'Invoices Request' to the 'Auto Library System' (Process). The system processes the request and sends a 'Invoices Response' back to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Auto Library System"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Auto Library System",
          "label": "Invoices Request"
        },
        {
          "source": "Auto Library System",
          "target": "Guest",
          "label": "Invoices Response"
        }
      ]
    }
  },
  {
    "id": 656,
    "title": "Local School System (Level 1 DFD)",
    "category": "Generated School",
    "level": "Level 1 DFD",
    "description": "A 'Student' submits a 'Orders Request' to 'Approve Orders' (Process). The process checks the 'Orders DB' (Data Store) for 'Orders Data', updates the 'Orders DB' with 'New Orders Data', and sends a 'Orders Status' to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Approve Orders"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Orders DB"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Approve Orders",
          "label": "Orders Request"
        },
        {
          "source": "Orders DB",
          "target": "Approve Orders",
          "label": "Orders Data"
        },
        {
          "source": "Approve Orders",
          "target": "Orders DB",
          "label": "New Orders Data"
        },
        {
          "source": "Approve Orders",
          "target": "Student",
          "label": "Orders Status"
        }
      ]
    }
  },
  {
    "id": 657,
    "title": "Smart Banking System (Level 2 DFD)",
    "category": "Generated Banking",
    "level": "Level 2 DFD",
    "description": "A 'Staff' sends a 'Reports Form' to 'Validate Reports' (Process). 'Validate Reports' fetches 'Config Data' from 'Reports Config' (Data Store) and passes 'Validated Reports' to 'Update Reports' (Process). 'Update Reports' saves 'Saved Reports' to 'Reports Records' (Data Store) and issues a 'Confirmation' to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Reports"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Reports"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Reports Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Reports Records"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Validate Reports",
          "label": "Reports Form"
        },
        {
          "source": "Reports Config",
          "target": "Validate Reports",
          "label": "Config Data"
        },
        {
          "source": "Validate Reports",
          "target": "Update Reports",
          "label": "Validated Reports"
        },
        {
          "source": "Update Reports",
          "target": "Reports Records",
          "label": "Saved Reports"
        },
        {
          "source": "Update Reports",
          "target": "Staff",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 658,
    "title": "Enterprise Hotel System (Context Diagram)",
    "category": "Generated Hotel",
    "level": "Context Diagram",
    "description": "A 'Patient' sends a 'Profiles Request' to the 'Enterprise Hotel System' (Process). The system processes the request and sends a 'Profiles Response' back to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Enterprise Hotel System"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Enterprise Hotel System",
          "label": "Profiles Request"
        },
        {
          "source": "Enterprise Hotel System",
          "target": "Patient",
          "label": "Profiles Response"
        }
      ]
    }
  },
  {
    "id": 659,
    "title": "Auto Banking System (Level 1 DFD)",
    "category": "Generated Banking",
    "level": "Level 1 DFD",
    "description": "A 'Student' submits a 'Invoices Request' to 'Approve Invoices' (Process). The process checks the 'Invoices DB' (Data Store) for 'Invoices Data', updates the 'Invoices DB' with 'New Invoices Data', and sends a 'Invoices Status' to the 'Student'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Student"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Approve Invoices"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Invoices DB"
        }
      ],
      "edges": [
        {
          "source": "Student",
          "target": "Approve Invoices",
          "label": "Invoices Request"
        },
        {
          "source": "Invoices DB",
          "target": "Approve Invoices",
          "label": "Invoices Data"
        },
        {
          "source": "Approve Invoices",
          "target": "Invoices DB",
          "label": "New Invoices Data"
        },
        {
          "source": "Approve Invoices",
          "target": "Student",
          "label": "Invoices Status"
        }
      ]
    }
  },
  {
    "id": 660,
    "title": "Cloud Airline System (Context Diagram)",
    "category": "Generated Airline",
    "level": "Context Diagram",
    "description": "A 'Driver' sends a 'Invoices Request' to the 'Cloud Airline System' (Process). The system processes the request and sends a 'Invoices Response' back to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Cloud Airline System"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Cloud Airline System",
          "label": "Invoices Request"
        },
        {
          "source": "Cloud Airline System",
          "target": "Driver",
          "label": "Invoices Response"
        }
      ]
    }
  },
  {
    "id": 661,
    "title": "Smart School System (Level 2 DFD)",
    "category": "Generated School",
    "level": "Level 2 DFD",
    "description": "A 'Driver' sends a 'Payments Form' to 'Validate Payments' (Process). 'Validate Payments' fetches 'Config Data' from 'Payments Config' (Data Store) and passes 'Validated Payments' to 'Update Payments' (Process). 'Update Payments' saves 'Saved Payments' to 'Payments Records' (Data Store) and issues a 'Confirmation' to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Payments"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Payments"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Payments Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Payments Records"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Validate Payments",
          "label": "Payments Form"
        },
        {
          "source": "Payments Config",
          "target": "Validate Payments",
          "label": "Config Data"
        },
        {
          "source": "Validate Payments",
          "target": "Update Payments",
          "label": "Validated Payments"
        },
        {
          "source": "Update Payments",
          "target": "Payments Records",
          "label": "Saved Payments"
        },
        {
          "source": "Update Payments",
          "target": "Driver",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 662,
    "title": "Secure Retail System (Context Diagram)",
    "category": "Generated Retail",
    "level": "Context Diagram",
    "description": "A 'Customer' sends a 'Invoices Request' to the 'Secure Retail System' (Process). The system processes the request and sends a 'Invoices Response' back to the 'Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Secure Retail System"
        }
      ],
      "edges": [
        {
          "source": "Customer",
          "target": "Secure Retail System",
          "label": "Invoices Request"
        },
        {
          "source": "Secure Retail System",
          "target": "Customer",
          "label": "Invoices Response"
        }
      ]
    }
  },
  {
    "id": 663,
    "title": "Digital Cinema System (Level 2 DFD)",
    "category": "Generated Cinema",
    "level": "Level 2 DFD",
    "description": "A 'Patient' sends a 'Orders Form' to 'Validate Orders' (Process). 'Validate Orders' fetches 'Config Data' from 'Orders Config' (Data Store) and passes 'Validated Orders' to 'Update Orders' (Process). 'Update Orders' saves 'Saved Orders' to 'Orders Records' (Data Store) and issues a 'Confirmation' to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Orders"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Orders"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Orders Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Orders Records"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Validate Orders",
          "label": "Orders Form"
        },
        {
          "source": "Orders Config",
          "target": "Validate Orders",
          "label": "Config Data"
        },
        {
          "source": "Validate Orders",
          "target": "Update Orders",
          "label": "Validated Orders"
        },
        {
          "source": "Update Orders",
          "target": "Orders Records",
          "label": "Saved Orders"
        },
        {
          "source": "Update Orders",
          "target": "Patient",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 664,
    "title": "Quick Banking System (Level 1 DFD)",
    "category": "Generated Banking",
    "level": "Level 1 DFD",
    "description": "A 'Patient' submits a 'Claims Request' to 'Approve Claims' (Process). The process checks the 'Claims DB' (Data Store) for 'Claims Data', updates the 'Claims DB' with 'New Claims Data', and sends a 'Claims Status' to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Approve Claims"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Claims DB"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Approve Claims",
          "label": "Claims Request"
        },
        {
          "source": "Claims DB",
          "target": "Approve Claims",
          "label": "Claims Data"
        },
        {
          "source": "Approve Claims",
          "target": "Claims DB",
          "label": "New Claims Data"
        },
        {
          "source": "Approve Claims",
          "target": "Patient",
          "label": "Claims Status"
        }
      ]
    }
  },
  {
    "id": 665,
    "title": "Digital Hospital System (Level 2 DFD)",
    "category": "Generated Hospital",
    "level": "Level 2 DFD",
    "description": "A 'Manager' sends a 'Appointments Form' to 'Validate Appointments' (Process). 'Validate Appointments' fetches 'Config Data' from 'Appointments Config' (Data Store) and passes 'Validated Appointments' to 'Update Appointments' (Process). 'Update Appointments' saves 'Saved Appointments' to 'Appointments Records' (Data Store) and issues a 'Confirmation' to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Appointments"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Appointments"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Appointments Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Appointments Records"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Validate Appointments",
          "label": "Appointments Form"
        },
        {
          "source": "Appointments Config",
          "target": "Validate Appointments",
          "label": "Config Data"
        },
        {
          "source": "Validate Appointments",
          "target": "Update Appointments",
          "label": "Validated Appointments"
        },
        {
          "source": "Update Appointments",
          "target": "Appointments Records",
          "label": "Saved Appointments"
        },
        {
          "source": "Update Appointments",
          "target": "Manager",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 666,
    "title": "Digital School System (Level 1 DFD)",
    "category": "Generated School",
    "level": "Level 1 DFD",
    "description": "A 'Admin' submits a 'Profiles Request' to 'Process Profiles' (Process). The process checks the 'Profiles DB' (Data Store) for 'Profiles Data', updates the 'Profiles DB' with 'New Profiles Data', and sends a 'Profiles Status' to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Process Profiles"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Profiles DB"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Process Profiles",
          "label": "Profiles Request"
        },
        {
          "source": "Profiles DB",
          "target": "Process Profiles",
          "label": "Profiles Data"
        },
        {
          "source": "Process Profiles",
          "target": "Profiles DB",
          "label": "New Profiles Data"
        },
        {
          "source": "Process Profiles",
          "target": "Admin",
          "label": "Profiles Status"
        }
      ]
    }
  },
  {
    "id": 667,
    "title": "Quick Cinema System (Context Diagram)",
    "category": "Generated Cinema",
    "level": "Context Diagram",
    "description": "A 'Manager' sends a 'Invoices Request' to the 'Quick Cinema System' (Process). The system processes the request and sends a 'Invoices Response' back to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Quick Cinema System"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Quick Cinema System",
          "label": "Invoices Request"
        },
        {
          "source": "Quick Cinema System",
          "target": "Manager",
          "label": "Invoices Response"
        }
      ]
    }
  },
  {
    "id": 668,
    "title": "Pro Hospital System (Level 2 DFD)",
    "category": "Generated Hospital",
    "level": "Level 2 DFD",
    "description": "A 'Client' sends a 'Appointments Form' to 'Validate Appointments' (Process). 'Validate Appointments' fetches 'Config Data' from 'Appointments Config' (Data Store) and passes 'Validated Appointments' to 'Update Appointments' (Process). 'Update Appointments' saves 'Saved Appointments' to 'Appointments Records' (Data Store) and issues a 'Confirmation' to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Appointments"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Appointments"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Appointments Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Appointments Records"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Validate Appointments",
          "label": "Appointments Form"
        },
        {
          "source": "Appointments Config",
          "target": "Validate Appointments",
          "label": "Config Data"
        },
        {
          "source": "Validate Appointments",
          "target": "Update Appointments",
          "label": "Validated Appointments"
        },
        {
          "source": "Update Appointments",
          "target": "Appointments Records",
          "label": "Saved Appointments"
        },
        {
          "source": "Update Appointments",
          "target": "Client",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 669,
    "title": "Auto Airline System (Level 1 DFD)",
    "category": "Generated Airline",
    "level": "Level 1 DFD",
    "description": "A 'Driver' submits a 'Reports Request' to 'Verify Reports' (Process). The process checks the 'Reports DB' (Data Store) for 'Reports Data', updates the 'Reports DB' with 'New Reports Data', and sends a 'Reports Status' to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Verify Reports"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Reports DB"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Verify Reports",
          "label": "Reports Request"
        },
        {
          "source": "Reports DB",
          "target": "Verify Reports",
          "label": "Reports Data"
        },
        {
          "source": "Verify Reports",
          "target": "Reports DB",
          "label": "New Reports Data"
        },
        {
          "source": "Verify Reports",
          "target": "Driver",
          "label": "Reports Status"
        }
      ]
    }
  },
  {
    "id": 670,
    "title": "Pro Retail System (Context Diagram)",
    "category": "Generated Retail",
    "level": "Context Diagram",
    "description": "A 'Driver' sends a 'Claims Request' to the 'Pro Retail System' (Process). The system processes the request and sends a 'Claims Response' back to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Pro Retail System"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Pro Retail System",
          "label": "Claims Request"
        },
        {
          "source": "Pro Retail System",
          "target": "Driver",
          "label": "Claims Response"
        }
      ]
    }
  },
  {
    "id": 671,
    "title": "Digital Cinema System (Context Diagram)",
    "category": "Generated Cinema",
    "level": "Context Diagram",
    "description": "A 'Patient' sends a 'Records Request' to the 'Digital Cinema System' (Process). The system processes the request and sends a 'Records Response' back to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Digital Cinema System"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Digital Cinema System",
          "label": "Records Request"
        },
        {
          "source": "Digital Cinema System",
          "target": "Patient",
          "label": "Records Response"
        }
      ]
    }
  },
  {
    "id": 672,
    "title": "Quick School System (Level 1 DFD)",
    "category": "Generated School",
    "level": "Level 1 DFD",
    "description": "A 'Driver' submits a 'Orders Request' to 'Verify Orders' (Process). The process checks the 'Orders DB' (Data Store) for 'Orders Data', updates the 'Orders DB' with 'New Orders Data', and sends a 'Orders Status' to the 'Driver'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Verify Orders"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Orders DB"
        }
      ],
      "edges": [
        {
          "source": "Driver",
          "target": "Verify Orders",
          "label": "Orders Request"
        },
        {
          "source": "Orders DB",
          "target": "Verify Orders",
          "label": "Orders Data"
        },
        {
          "source": "Verify Orders",
          "target": "Orders DB",
          "label": "New Orders Data"
        },
        {
          "source": "Verify Orders",
          "target": "Driver",
          "label": "Orders Status"
        }
      ]
    }
  },
  {
    "id": 673,
    "title": "Secure Pharmacy System (Context Diagram)",
    "category": "Generated Pharmacy",
    "level": "Context Diagram",
    "description": "A 'Guest' sends a 'Invoices Request' to the 'Secure Pharmacy System' (Process). The system processes the request and sends a 'Invoices Response' back to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Secure Pharmacy System"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Secure Pharmacy System",
          "label": "Invoices Request"
        },
        {
          "source": "Secure Pharmacy System",
          "target": "Guest",
          "label": "Invoices Response"
        }
      ]
    }
  },
  {
    "id": 674,
    "title": "Pro Hospital System (Level 2 DFD)",
    "category": "Generated Hospital",
    "level": "Level 2 DFD",
    "description": "A 'User' sends a 'Invoices Form' to 'Validate Invoices' (Process). 'Validate Invoices' fetches 'Config Data' from 'Invoices Config' (Data Store) and passes 'Validated Invoices' to 'Update Invoices' (Process). 'Update Invoices' saves 'Saved Invoices' to 'Invoices Records' (Data Store) and issues a 'Confirmation' to the 'User'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Invoices"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Invoices"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Invoices Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Invoices Records"
        }
      ],
      "edges": [
        {
          "source": "User",
          "target": "Validate Invoices",
          "label": "Invoices Form"
        },
        {
          "source": "Invoices Config",
          "target": "Validate Invoices",
          "label": "Config Data"
        },
        {
          "source": "Validate Invoices",
          "target": "Update Invoices",
          "label": "Validated Invoices"
        },
        {
          "source": "Update Invoices",
          "target": "Invoices Records",
          "label": "Saved Invoices"
        },
        {
          "source": "Update Invoices",
          "target": "User",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 675,
    "title": "Local Banking System (Context Diagram)",
    "category": "Generated Banking",
    "level": "Context Diagram",
    "description": "A 'Staff' sends a 'Orders Request' to the 'Local Banking System' (Process). The system processes the request and sends a 'Orders Response' back to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Local Banking System"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Local Banking System",
          "label": "Orders Request"
        },
        {
          "source": "Local Banking System",
          "target": "Staff",
          "label": "Orders Response"
        }
      ]
    }
  },
  {
    "id": 676,
    "title": "Enterprise School System (Level 1 DFD)",
    "category": "Generated School",
    "level": "Level 1 DFD",
    "description": "A 'Admin' submits a 'Records Request' to 'Handle Records' (Process). The process checks the 'Records DB' (Data Store) for 'Records Data', updates the 'Records DB' with 'New Records Data', and sends a 'Records Status' to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Handle Records"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Records DB"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Handle Records",
          "label": "Records Request"
        },
        {
          "source": "Records DB",
          "target": "Handle Records",
          "label": "Records Data"
        },
        {
          "source": "Handle Records",
          "target": "Records DB",
          "label": "New Records Data"
        },
        {
          "source": "Handle Records",
          "target": "Admin",
          "label": "Records Status"
        }
      ]
    }
  },
  {
    "id": 677,
    "title": "Secure Library System (Level 1 DFD)",
    "category": "Generated Library",
    "level": "Level 1 DFD",
    "description": "A 'Guest' submits a 'Appointments Request' to 'Calculate Appointments' (Process). The process checks the 'Appointments DB' (Data Store) for 'Appointments Data', updates the 'Appointments DB' with 'New Appointments Data', and sends a 'Appointments Status' to the 'Guest'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Guest"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Calculate Appointments"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Appointments DB"
        }
      ],
      "edges": [
        {
          "source": "Guest",
          "target": "Calculate Appointments",
          "label": "Appointments Request"
        },
        {
          "source": "Appointments DB",
          "target": "Calculate Appointments",
          "label": "Appointments Data"
        },
        {
          "source": "Calculate Appointments",
          "target": "Appointments DB",
          "label": "New Appointments Data"
        },
        {
          "source": "Calculate Appointments",
          "target": "Guest",
          "label": "Appointments Status"
        }
      ]
    }
  },
  {
    "id": 678,
    "title": "Enterprise Logistics System (Level 2 DFD)",
    "category": "Generated Logistics",
    "level": "Level 2 DFD",
    "description": "A 'Client' sends a 'Payments Form' to 'Validate Payments' (Process). 'Validate Payments' fetches 'Config Data' from 'Payments Config' (Data Store) and passes 'Validated Payments' to 'Update Payments' (Process). 'Update Payments' saves 'Saved Payments' to 'Payments Records' (Data Store) and issues a 'Confirmation' to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Payments"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Payments"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Payments Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Payments Records"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Validate Payments",
          "label": "Payments Form"
        },
        {
          "source": "Payments Config",
          "target": "Validate Payments",
          "label": "Config Data"
        },
        {
          "source": "Validate Payments",
          "target": "Update Payments",
          "label": "Validated Payments"
        },
        {
          "source": "Update Payments",
          "target": "Payments Records",
          "label": "Saved Payments"
        },
        {
          "source": "Update Payments",
          "target": "Client",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 679,
    "title": "Local Pharmacy System (Level 1 DFD)",
    "category": "Generated Pharmacy",
    "level": "Level 1 DFD",
    "description": "A 'Client' submits a 'Appointments Request' to 'Process Appointments' (Process). The process checks the 'Appointments DB' (Data Store) for 'Appointments Data', updates the 'Appointments DB' with 'New Appointments Data', and sends a 'Appointments Status' to the 'Client'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Client"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Process Appointments"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Appointments DB"
        }
      ],
      "edges": [
        {
          "source": "Client",
          "target": "Process Appointments",
          "label": "Appointments Request"
        },
        {
          "source": "Appointments DB",
          "target": "Process Appointments",
          "label": "Appointments Data"
        },
        {
          "source": "Process Appointments",
          "target": "Appointments DB",
          "label": "New Appointments Data"
        },
        {
          "source": "Process Appointments",
          "target": "Client",
          "label": "Appointments Status"
        }
      ]
    }
  },
  {
    "id": 680,
    "title": "Auto Hospital System (Level 1 DFD)",
    "category": "Generated Hospital",
    "level": "Level 1 DFD",
    "description": "A 'Manager' submits a 'Payments Request' to 'Manage Payments' (Process). The process checks the 'Payments DB' (Data Store) for 'Payments Data', updates the 'Payments DB' with 'New Payments Data', and sends a 'Payments Status' to the 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Manage Payments"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Payments DB"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Manage Payments",
          "label": "Payments Request"
        },
        {
          "source": "Payments DB",
          "target": "Manage Payments",
          "label": "Payments Data"
        },
        {
          "source": "Manage Payments",
          "target": "Payments DB",
          "label": "New Payments Data"
        },
        {
          "source": "Manage Payments",
          "target": "Manager",
          "label": "Payments Status"
        }
      ]
    }
  },
  {
    "id": 681,
    "title": "Auto Logistics System (Level 2 DFD)",
    "category": "Generated Logistics",
    "level": "Level 2 DFD",
    "description": "A 'Patient' sends a 'Invoices Form' to 'Validate Invoices' (Process). 'Validate Invoices' fetches 'Config Data' from 'Invoices Config' (Data Store) and passes 'Validated Invoices' to 'Update Invoices' (Process). 'Update Invoices' saves 'Saved Invoices' to 'Invoices Records' (Data Store) and issues a 'Confirmation' to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Validate Invoices"
        },
        {
          "id": "n3",
          "type": "process",
          "label": "Update Invoices"
        },
        {
          "id": "n4",
          "type": "dataStore",
          "label": "Invoices Config"
        },
        {
          "id": "n5",
          "type": "dataStore",
          "label": "Invoices Records"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Validate Invoices",
          "label": "Invoices Form"
        },
        {
          "source": "Invoices Config",
          "target": "Validate Invoices",
          "label": "Config Data"
        },
        {
          "source": "Validate Invoices",
          "target": "Update Invoices",
          "label": "Validated Invoices"
        },
        {
          "source": "Update Invoices",
          "target": "Invoices Records",
          "label": "Saved Invoices"
        },
        {
          "source": "Update Invoices",
          "target": "Patient",
          "label": "Confirmation"
        }
      ]
    }
  },
  {
    "id": 682,
    "title": "Smart Airline System (Context Diagram)",
    "category": "Generated Airline",
    "level": "Context Diagram",
    "description": "A 'Admin' sends a 'Tickets Request' to the 'Smart Airline System' (Process). The system processes the request and sends a 'Tickets Response' back to the 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Smart Airline System"
        }
      ],
      "edges": [
        {
          "source": "Admin",
          "target": "Smart Airline System",
          "label": "Tickets Request"
        },
        {
          "source": "Smart Airline System",
          "target": "Admin",
          "label": "Tickets Response"
        }
      ]
    }
  },
  {
    "id": 683,
    "title": "Digital Logistics System (Level 1 DFD)",
    "category": "Generated Logistics",
    "level": "Level 1 DFD",
    "description": "A 'Staff' submits a 'Reports Request' to 'Register Reports' (Process). The process checks the 'Reports DB' (Data Store) for 'Reports Data', updates the 'Reports DB' with 'New Reports Data', and sends a 'Reports Status' to the 'Staff'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Staff"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Register Reports"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Reports DB"
        }
      ],
      "edges": [
        {
          "source": "Staff",
          "target": "Register Reports",
          "label": "Reports Request"
        },
        {
          "source": "Reports DB",
          "target": "Register Reports",
          "label": "Reports Data"
        },
        {
          "source": "Register Reports",
          "target": "Reports DB",
          "label": "New Reports Data"
        },
        {
          "source": "Register Reports",
          "target": "Staff",
          "label": "Reports Status"
        }
      ]
    }
  },
  {
    "id": 684,
    "title": "Secure Hospital System (Level 1 DFD)",
    "category": "Generated Hospital",
    "level": "Level 1 DFD",
    "description": "A 'Patient' submits a 'Tickets Request' to 'Analyze Tickets' (Process). The process checks the 'Tickets DB' (Data Store) for 'Tickets Data', updates the 'Tickets DB' with 'New Tickets Data', and sends a 'Tickets Status' to the 'Patient'.",
    "ideal": {
      "nodes": [
        {
          "id": "n1",
          "type": "entity",
          "label": "Patient"
        },
        {
          "id": "n2",
          "type": "process",
          "label": "Analyze Tickets"
        },
        {
          "id": "n3",
          "type": "dataStore",
          "label": "Tickets DB"
        }
      ],
      "edges": [
        {
          "source": "Patient",
          "target": "Analyze Tickets",
          "label": "Tickets Request"
        },
        {
          "source": "Tickets DB",
          "target": "Analyze Tickets",
          "label": "Tickets Data"
        },
        {
          "source": "Analyze Tickets",
          "target": "Tickets DB",
          "label": "New Tickets Data"
        },
        {
          "source": "Analyze Tickets",
          "target": "Patient",
          "label": "Tickets Status"
        }
      ]
    }
  }
];
