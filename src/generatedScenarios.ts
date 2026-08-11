import { Scenario } from './scenarios';
export const GENERATED_SCENARIOS: Scenario[] = [
  {
    "id": 14,
    "title": "Library Flow (Q14)",
    "category": "Library",
    "level": "Context Diagram",
    "difficulty": "Easy",
    "description": "The 'Audit' sends 'Supplier Status' to 'Library System'. The 'Audit' sends 'System Request' to 'Library System'. The 'Audit 2' sends 'Member Metrics' to 'Library System'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Audit"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Audit 2"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "Library System"
        }
      ],
      "edges": [
        {
          "source": "Audit",
          "target": "Library System",
          "label": "Supplier Status"
        },
        {
          "source": "Audit",
          "target": "Library System",
          "label": "System Request"
        },
        {
          "source": "Audit 2",
          "target": "Library System",
          "label": "Member Metrics"
        }
      ]
    }
  },
  {
    "id": 15,
    "title": "Transport Flow (Q15)",
    "category": "Transport",
    "level": "Context Diagram",
    "difficulty": "Medium",
    "description": "The 'Maintenance 2' sends 'Passenger Report' to 'Transport System'. The 'Driver 3' sends 'Passenger Info' to 'Transport System'. The 'Maintenance 2' sends 'Driver Confirmation' to 'Transport System'. The 'Maintenance 2' sends 'Passenger Response' to 'Transport System'. The 'Driver 3' sends 'Dispatch Response' to 'Transport System'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Passenger"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Maintenance 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Driver 3"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "Transport System"
        }
      ],
      "edges": [
        {
          "source": "Maintenance 2",
          "target": "Transport System",
          "label": "Passenger Report"
        },
        {
          "source": "Driver 3",
          "target": "Transport System",
          "label": "Passenger Info"
        },
        {
          "source": "Maintenance 2",
          "target": "Transport System",
          "label": "Driver Confirmation"
        },
        {
          "source": "Maintenance 2",
          "target": "Transport System",
          "label": "Passenger Response"
        },
        {
          "source": "Driver 3",
          "target": "Transport System",
          "label": "Dispatch Response"
        }
      ]
    }
  },
  {
    "id": 16,
    "title": "Education Flow (Q16)",
    "category": "Education",
    "level": "Context Diagram",
    "difficulty": "Medium",
    "description": "The 'Admin 3' sends 'Teacher Data' to 'Education System'. The 'Admin 3' sends 'Parents Confirmation' to 'Education System'. The 'Teacher 2' sends 'Library Info' to 'Education System'. The 'Admin 3' sends 'Teacher Report' to 'Education System'. The 'Admin 3' sends 'Library Response' to 'Education System'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Ministry"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Teacher 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Admin 3"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "Education System"
        }
      ],
      "edges": [
        {
          "source": "Admin 3",
          "target": "Education System",
          "label": "Teacher Data"
        },
        {
          "source": "Admin 3",
          "target": "Education System",
          "label": "Parents Confirmation"
        },
        {
          "source": "Teacher 2",
          "target": "Education System",
          "label": "Library Info"
        },
        {
          "source": "Admin 3",
          "target": "Education System",
          "label": "Teacher Report"
        },
        {
          "source": "Admin 3",
          "target": "Education System",
          "label": "Library Response"
        }
      ]
    }
  },
  {
    "id": 17,
    "title": "Healthcare Flow (Q17)",
    "category": "Healthcare",
    "level": "Context Diagram",
    "difficulty": "Hard",
    "description": "The 'Nurse 4' sends 'Patient Invoice' to 'Healthcare System'. The 'Doctor 2' sends 'Lab Details' to 'Healthcare System'. The 'Nurse 4' sends 'Doctor Info' to 'Healthcare System'. The 'Nurse' sends 'Lab Confirmation' to 'Healthcare System'. The 'Nurse' sends 'Patient Report' to 'Healthcare System'. The 'Healthcare System' sends 'Nurse Invoice' to 'Doctor 2'. The 'Doctor 2' sends 'Insurance Confirmation' to 'Healthcare System'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Nurse"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Doctor 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Lab 3"
        },
        {
          "id": "e3",
          "type": "entity",
          "label": "Nurse 4"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "Healthcare System"
        }
      ],
      "edges": [
        {
          "source": "Nurse 4",
          "target": "Healthcare System",
          "label": "Patient Invoice"
        },
        {
          "source": "Doctor 2",
          "target": "Healthcare System",
          "label": "Lab Details"
        },
        {
          "source": "Nurse 4",
          "target": "Healthcare System",
          "label": "Doctor Info"
        },
        {
          "source": "Nurse",
          "target": "Healthcare System",
          "label": "Lab Confirmation"
        },
        {
          "source": "Nurse",
          "target": "Healthcare System",
          "label": "Patient Report"
        },
        {
          "source": "Healthcare System",
          "target": "Doctor 2",
          "label": "Nurse Invoice"
        },
        {
          "source": "Doctor 2",
          "target": "Healthcare System",
          "label": "Insurance Confirmation"
        }
      ]
    }
  },
  {
    "id": 18,
    "title": "Education Flow (Q18)",
    "category": "Education",
    "level": "Context Diagram",
    "difficulty": "Hard",
    "description": "The 'Parents 3' sends 'Library Request' to 'Education System'. The 'Education System' sends 'Student Metrics' to 'Teacher'. The 'Parents 2' sends 'Admin Receipt' to 'Education System'. The 'Ministry 4' sends 'Admin Request' to 'Education System'. The 'Parents 3' sends 'Admin Details' to 'Education System'. The 'Parents 3' sends 'Parents Details' to 'Education System'. The 'Education System' sends 'Ministry Details' to 'Ministry 4'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Teacher"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Parents 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Parents 3"
        },
        {
          "id": "e3",
          "type": "entity",
          "label": "Ministry 4"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "Education System"
        }
      ],
      "edges": [
        {
          "source": "Parents 3",
          "target": "Education System",
          "label": "Library Request"
        },
        {
          "source": "Education System",
          "target": "Teacher",
          "label": "Student Metrics"
        },
        {
          "source": "Parents 2",
          "target": "Education System",
          "label": "Admin Receipt"
        },
        {
          "source": "Ministry 4",
          "target": "Education System",
          "label": "Admin Request"
        },
        {
          "source": "Parents 3",
          "target": "Education System",
          "label": "Admin Details"
        },
        {
          "source": "Parents 3",
          "target": "Education System",
          "label": "Parents Details"
        },
        {
          "source": "Education System",
          "target": "Ministry 4",
          "label": "Ministry Details"
        }
      ]
    }
  },
  {
    "id": 19,
    "title": "Banking Flow (Q19)",
    "category": "Banking",
    "level": "Context Diagram",
    "difficulty": "Medium",
    "description": "The 'Customer 2' sends 'Credit Agency Alert' to 'Banking System'. The 'Teller 3' sends 'Teller Status' to 'Banking System'. The 'Customer 2' sends 'Manager Info' to 'Banking System'. The 'Manager' sends 'Central Bank Alert' to 'Banking System'. The 'Customer 2' sends 'Credit Agency Details' to 'Banking System'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Customer 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Teller 3"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "Banking System"
        }
      ],
      "edges": [
        {
          "source": "Customer 2",
          "target": "Banking System",
          "label": "Credit Agency Alert"
        },
        {
          "source": "Teller 3",
          "target": "Banking System",
          "label": "Teller Status"
        },
        {
          "source": "Customer 2",
          "target": "Banking System",
          "label": "Manager Info"
        },
        {
          "source": "Manager",
          "target": "Banking System",
          "label": "Central Bank Alert"
        },
        {
          "source": "Customer 2",
          "target": "Banking System",
          "label": "Credit Agency Details"
        }
      ]
    }
  },
  {
    "id": 20,
    "title": "Healthcare Flow (Q20)",
    "category": "Healthcare",
    "level": "Context Diagram",
    "difficulty": "Expert",
    "description": "The 'Insurance 2' sends 'Lab Request' to 'Healthcare System'. The 'Patient 5' sends 'Nurse Request' to 'Healthcare System'. The 'Insurance 2' sends 'Pharmacy Metrics' to 'Healthcare System'. The 'Pharmacy' sends 'Insurance Status' to 'Healthcare System'. The 'Nurse 3' sends 'Doctor Receipt' to 'Healthcare System'. The 'Nurse 4' sends 'Nurse Response' to 'Healthcare System'. The 'Nurse 4' sends 'Lab Status' to 'Healthcare System'. The 'Nurse 4' sends 'Pharmacy Metrics' to 'Healthcare System'. The 'Healthcare System' sends 'Lab Data' to 'Nurse 4'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Pharmacy"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Insurance 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Nurse 3"
        },
        {
          "id": "e3",
          "type": "entity",
          "label": "Nurse 4"
        },
        {
          "id": "e4",
          "type": "entity",
          "label": "Patient 5"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "Healthcare System"
        }
      ],
      "edges": [
        {
          "source": "Insurance 2",
          "target": "Healthcare System",
          "label": "Lab Request"
        },
        {
          "source": "Patient 5",
          "target": "Healthcare System",
          "label": "Nurse Request"
        },
        {
          "source": "Insurance 2",
          "target": "Healthcare System",
          "label": "Pharmacy Metrics"
        },
        {
          "source": "Pharmacy",
          "target": "Healthcare System",
          "label": "Insurance Status"
        },
        {
          "source": "Nurse 3",
          "target": "Healthcare System",
          "label": "Doctor Receipt"
        },
        {
          "source": "Nurse 4",
          "target": "Healthcare System",
          "label": "Nurse Response"
        },
        {
          "source": "Nurse 4",
          "target": "Healthcare System",
          "label": "Lab Status"
        },
        {
          "source": "Nurse 4",
          "target": "Healthcare System",
          "label": "Pharmacy Metrics"
        },
        {
          "source": "Healthcare System",
          "target": "Nurse 4",
          "label": "Lab Data"
        }
      ]
    }
  },
  {
    "id": 21,
    "title": "Banking Flow (Q21)",
    "category": "Banking",
    "level": "Context Diagram",
    "difficulty": "Hard",
    "description": "The 'Banking System' sends 'ATM Details' to 'Teller 2'. The 'Central Bank 4' sends 'Customer Response' to 'Banking System'. The 'Banking System' sends 'Central Bank Response' to 'Teller 2'. The 'Central Bank 3' sends 'Manager Report' to 'Banking System'. The 'Teller 2' sends 'Credit Agency Alert' to 'Banking System'. The 'Manager' sends 'Credit Agency Receipt' to 'Banking System'. The 'Banking System' sends 'Customer Confirmation' to 'Central Bank 3'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Teller 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Central Bank 3"
        },
        {
          "id": "e3",
          "type": "entity",
          "label": "Central Bank 4"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "Banking System"
        }
      ],
      "edges": [
        {
          "source": "Banking System",
          "target": "Teller 2",
          "label": "ATM Details"
        },
        {
          "source": "Central Bank 4",
          "target": "Banking System",
          "label": "Customer Response"
        },
        {
          "source": "Banking System",
          "target": "Teller 2",
          "label": "Central Bank Response"
        },
        {
          "source": "Central Bank 3",
          "target": "Banking System",
          "label": "Manager Report"
        },
        {
          "source": "Teller 2",
          "target": "Banking System",
          "label": "Credit Agency Alert"
        },
        {
          "source": "Manager",
          "target": "Banking System",
          "label": "Credit Agency Receipt"
        },
        {
          "source": "Banking System",
          "target": "Central Bank 3",
          "label": "Customer Confirmation"
        }
      ]
    }
  },
  {
    "id": 22,
    "title": "Manufacturing Flow (Q22)",
    "category": "Manufacturing",
    "level": "Context Diagram",
    "difficulty": "Easy",
    "description": "The 'Distributor 2' sends 'Worker Metrics' to 'Manufacturing System'. The 'Distributor 2' sends 'Management Invoice' to 'Manufacturing System'. The 'Distributor 2' sends 'Quality Control Metrics' to 'Manufacturing System'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Quality Control"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Distributor 2"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "Manufacturing System"
        }
      ],
      "edges": [
        {
          "source": "Distributor 2",
          "target": "Manufacturing System",
          "label": "Worker Metrics"
        },
        {
          "source": "Distributor 2",
          "target": "Manufacturing System",
          "label": "Management Invoice"
        },
        {
          "source": "Distributor 2",
          "target": "Manufacturing System",
          "label": "Quality Control Metrics"
        }
      ]
    }
  },
  {
    "id": 23,
    "title": "Real Estate Flow (Q23)",
    "category": "Real Estate",
    "level": "Context Diagram",
    "difficulty": "Easy",
    "description": "The 'Real Estate System' sends 'Bank Invoice' to 'Agent'. The 'Real Estate System' sends 'Bank Metrics' to 'Inspector 2'. The 'Real Estate System' sends 'Contractor Info' to 'Agent'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Agent"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Inspector 2"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "Real Estate System"
        }
      ],
      "edges": [
        {
          "source": "Real Estate System",
          "target": "Agent",
          "label": "Bank Invoice"
        },
        {
          "source": "Real Estate System",
          "target": "Inspector 2",
          "label": "Bank Metrics"
        },
        {
          "source": "Real Estate System",
          "target": "Agent",
          "label": "Contractor Info"
        }
      ]
    }
  },
  {
    "id": 24,
    "title": "Healthcare Flow (Q24)",
    "category": "Healthcare",
    "level": "Context Diagram",
    "difficulty": "Medium",
    "description": "The 'Healthcare System' sends 'Pharmacy Metrics' to 'Lab'. The 'Healthcare System' sends 'Lab Response' to 'Pharmacy 2'. The 'Pharmacy 2' sends 'Doctor Confirmation' to 'Healthcare System'. The 'Healthcare System' sends 'Lab Info' to 'Insurance 3'. The 'Lab' sends 'Pharmacy Invoice' to 'Healthcare System'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Lab"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Pharmacy 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Insurance 3"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "Healthcare System"
        }
      ],
      "edges": [
        {
          "source": "Healthcare System",
          "target": "Lab",
          "label": "Pharmacy Metrics"
        },
        {
          "source": "Healthcare System",
          "target": "Pharmacy 2",
          "label": "Lab Response"
        },
        {
          "source": "Pharmacy 2",
          "target": "Healthcare System",
          "label": "Doctor Confirmation"
        },
        {
          "source": "Healthcare System",
          "target": "Insurance 3",
          "label": "Lab Info"
        },
        {
          "source": "Lab",
          "target": "Healthcare System",
          "label": "Pharmacy Invoice"
        }
      ]
    }
  },
  {
    "id": 25,
    "title": "Library Flow (Q25)",
    "category": "Library",
    "level": "Context Diagram",
    "difficulty": "Hard",
    "description": "The 'Audit 4' sends 'Public Response' to 'Library System'. The 'Librarian 2' sends 'Librarian Report' to 'Library System'. The 'Library System' sends 'Public Alert' to 'Audit 4'. The 'Member' sends 'Audit Details' to 'Library System'. The 'Librarian 2' sends 'Public Alert' to 'Library System'. The 'Member 3' sends 'Audit Invoice' to 'Library System'. The 'Library System' sends 'Audit Receipt' to 'Librarian 2'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Member"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Librarian 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Member 3"
        },
        {
          "id": "e3",
          "type": "entity",
          "label": "Audit 4"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "Library System"
        }
      ],
      "edges": [
        {
          "source": "Audit 4",
          "target": "Library System",
          "label": "Public Response"
        },
        {
          "source": "Librarian 2",
          "target": "Library System",
          "label": "Librarian Report"
        },
        {
          "source": "Library System",
          "target": "Audit 4",
          "label": "Public Alert"
        },
        {
          "source": "Member",
          "target": "Library System",
          "label": "Audit Details"
        },
        {
          "source": "Librarian 2",
          "target": "Library System",
          "label": "Public Alert"
        },
        {
          "source": "Member 3",
          "target": "Library System",
          "label": "Audit Invoice"
        },
        {
          "source": "Library System",
          "target": "Librarian 2",
          "label": "Audit Receipt"
        }
      ]
    }
  },
  {
    "id": 26,
    "title": "Library Flow (Q26)",
    "category": "Library",
    "level": "Context Diagram",
    "difficulty": "Expert",
    "description": "The 'System 2' sends 'Member Status' to 'Library System'. The 'System 2' sends 'Member Alert' to 'Library System'. The 'System 2' sends 'System Status' to 'Library System'. The 'Librarian 4' sends 'Audit Details' to 'Library System'. The 'Public 5' sends 'Audit Status' to 'Library System'. The 'System 2' sends 'Member Confirmation' to 'Library System'. The 'Member' sends 'Audit Response' to 'Library System'. The 'Supplier 3' sends 'Member Status' to 'Library System'. The 'Library System' sends 'Public Details' to 'System 2'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Member"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "System 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Supplier 3"
        },
        {
          "id": "e3",
          "type": "entity",
          "label": "Librarian 4"
        },
        {
          "id": "e4",
          "type": "entity",
          "label": "Public 5"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "Library System"
        }
      ],
      "edges": [
        {
          "source": "System 2",
          "target": "Library System",
          "label": "Member Status"
        },
        {
          "source": "System 2",
          "target": "Library System",
          "label": "Member Alert"
        },
        {
          "source": "System 2",
          "target": "Library System",
          "label": "System Status"
        },
        {
          "source": "Librarian 4",
          "target": "Library System",
          "label": "Audit Details"
        },
        {
          "source": "Public 5",
          "target": "Library System",
          "label": "Audit Status"
        },
        {
          "source": "System 2",
          "target": "Library System",
          "label": "Member Confirmation"
        },
        {
          "source": "Member",
          "target": "Library System",
          "label": "Audit Response"
        },
        {
          "source": "Supplier 3",
          "target": "Library System",
          "label": "Member Status"
        },
        {
          "source": "Library System",
          "target": "System 2",
          "label": "Public Details"
        }
      ]
    }
  },
  {
    "id": 27,
    "title": "Entertainment Flow (Q27)",
    "category": "Entertainment",
    "level": "Context Diagram",
    "difficulty": "Easy",
    "description": "The 'Entertainment System' sends 'Studio Info' to 'Studio 2'. The 'Studio' sends 'Admin Alert' to 'Entertainment System'. The 'Studio 2' sends 'User Confirmation' to 'Entertainment System'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Studio"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Studio 2"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "Entertainment System"
        }
      ],
      "edges": [
        {
          "source": "Entertainment System",
          "target": "Studio 2",
          "label": "Studio Info"
        },
        {
          "source": "Studio",
          "target": "Entertainment System",
          "label": "Admin Alert"
        },
        {
          "source": "Studio 2",
          "target": "Entertainment System",
          "label": "User Confirmation"
        }
      ]
    }
  },
  {
    "id": 28,
    "title": "Manufacturing Flow (Q28)",
    "category": "Manufacturing",
    "level": "Context Diagram",
    "difficulty": "Easy",
    "description": "The 'Manufacturing System' sends 'Management Confirmation' to 'Distributor'. The 'Distributor' sends 'Distributor Alert' to 'Manufacturing System'. The 'Manufacturing System' sends 'Retailer Invoice' to 'Distributor'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Distributor"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Management 2"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "Manufacturing System"
        }
      ],
      "edges": [
        {
          "source": "Manufacturing System",
          "target": "Distributor",
          "label": "Management Confirmation"
        },
        {
          "source": "Distributor",
          "target": "Manufacturing System",
          "label": "Distributor Alert"
        },
        {
          "source": "Manufacturing System",
          "target": "Distributor",
          "label": "Retailer Invoice"
        }
      ]
    }
  },
  {
    "id": 29,
    "title": "Education Flow (Q29)",
    "category": "Education",
    "level": "Context Diagram",
    "difficulty": "Easy",
    "description": "The 'Parents' sends 'Library Status' to 'Education System'. The 'Education System' sends 'Parents Info' to 'Parents'. The 'Ministry 2' sends 'Parents Data' to 'Education System'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Parents"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Ministry 2"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "Education System"
        }
      ],
      "edges": [
        {
          "source": "Parents",
          "target": "Education System",
          "label": "Library Status"
        },
        {
          "source": "Education System",
          "target": "Parents",
          "label": "Parents Info"
        },
        {
          "source": "Ministry 2",
          "target": "Education System",
          "label": "Parents Data"
        }
      ]
    }
  },
  {
    "id": 30,
    "title": "Education Flow (Q30)",
    "category": "Education",
    "level": "Context Diagram",
    "difficulty": "Easy",
    "description": "The 'Teacher 2' sends 'Admin Confirmation' to 'Education System'. The 'Teacher 2' sends 'Parents Confirmation' to 'Education System'. The 'Education System' sends 'Student Report' to 'Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Teacher 2"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "Education System"
        }
      ],
      "edges": [
        {
          "source": "Teacher 2",
          "target": "Education System",
          "label": "Admin Confirmation"
        },
        {
          "source": "Teacher 2",
          "target": "Education System",
          "label": "Parents Confirmation"
        },
        {
          "source": "Education System",
          "target": "Admin",
          "label": "Student Report"
        }
      ]
    }
  },
  {
    "id": 31,
    "title": "Real Estate Flow (Q31)",
    "category": "Real Estate",
    "level": "Context Diagram",
    "difficulty": "Hard",
    "description": "The 'Agent 4' sends 'Bank Invoice' to 'Real Estate System'. The 'Contractor 3' sends 'Inspector Invoice' to 'Real Estate System'. The 'Contractor 3' sends 'Bank Details' to 'Real Estate System'. The 'Real Estate System' sends 'Contractor Request' to 'Agent 4'. The 'Agent 2' sends 'Bank Response' to 'Real Estate System'. The 'Contractor 3' sends 'Contractor Info' to 'Real Estate System'. The 'Real Estate System' sends 'Buyer Data' to 'Agent 4'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Bank"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Agent 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Contractor 3"
        },
        {
          "id": "e3",
          "type": "entity",
          "label": "Agent 4"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "Real Estate System"
        }
      ],
      "edges": [
        {
          "source": "Agent 4",
          "target": "Real Estate System",
          "label": "Bank Invoice"
        },
        {
          "source": "Contractor 3",
          "target": "Real Estate System",
          "label": "Inspector Invoice"
        },
        {
          "source": "Contractor 3",
          "target": "Real Estate System",
          "label": "Bank Details"
        },
        {
          "source": "Real Estate System",
          "target": "Agent 4",
          "label": "Contractor Request"
        },
        {
          "source": "Agent 2",
          "target": "Real Estate System",
          "label": "Bank Response"
        },
        {
          "source": "Contractor 3",
          "target": "Real Estate System",
          "label": "Contractor Info"
        },
        {
          "source": "Real Estate System",
          "target": "Agent 4",
          "label": "Buyer Data"
        }
      ]
    }
  },
  {
    "id": 32,
    "title": "Banking Flow (Q32)",
    "category": "Banking",
    "level": "Context Diagram",
    "difficulty": "Easy",
    "description": "The 'Banking System' sends 'Central Bank Request' to 'Teller 2'. The 'Manager' sends 'ATM Status' to 'Banking System'. The 'Banking System' sends 'Central Bank Metrics' to 'Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Teller 2"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "Banking System"
        }
      ],
      "edges": [
        {
          "source": "Banking System",
          "target": "Teller 2",
          "label": "Central Bank Request"
        },
        {
          "source": "Manager",
          "target": "Banking System",
          "label": "ATM Status"
        },
        {
          "source": "Banking System",
          "target": "Manager",
          "label": "Central Bank Metrics"
        }
      ]
    }
  },
  {
    "id": 33,
    "title": "Banking Flow (Q33)",
    "category": "Banking",
    "level": "Context Diagram",
    "difficulty": "Easy",
    "description": "The 'Banking System' sends 'ATM Invoice' to 'Central Bank 2'. The 'Central Bank 2' sends 'Central Bank Details' to 'Banking System'. The 'Central Bank 2' sends 'Teller Data' to 'Banking System'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Central Bank"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Central Bank 2"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "Banking System"
        }
      ],
      "edges": [
        {
          "source": "Banking System",
          "target": "Central Bank 2",
          "label": "ATM Invoice"
        },
        {
          "source": "Central Bank 2",
          "target": "Banking System",
          "label": "Central Bank Details"
        },
        {
          "source": "Central Bank 2",
          "target": "Banking System",
          "label": "Teller Data"
        }
      ]
    }
  },
  {
    "id": 34,
    "title": "Manufacturing Flow (Q34)",
    "category": "Manufacturing",
    "level": "Context Diagram",
    "difficulty": "Medium",
    "description": "The 'Worker' sends 'Retailer Report' to 'Manufacturing System'. The 'Worker' sends 'Quality Control Request' to 'Manufacturing System'. The 'Worker' sends 'Worker Info' to 'Manufacturing System'. The 'Worker' sends 'Distributor Status' to 'Manufacturing System'. The 'Quality Control 3' sends 'Management Status' to 'Manufacturing System'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Worker"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Supplier 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Quality Control 3"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "Manufacturing System"
        }
      ],
      "edges": [
        {
          "source": "Worker",
          "target": "Manufacturing System",
          "label": "Retailer Report"
        },
        {
          "source": "Worker",
          "target": "Manufacturing System",
          "label": "Quality Control Request"
        },
        {
          "source": "Worker",
          "target": "Manufacturing System",
          "label": "Worker Info"
        },
        {
          "source": "Worker",
          "target": "Manufacturing System",
          "label": "Distributor Status"
        },
        {
          "source": "Quality Control 3",
          "target": "Manufacturing System",
          "label": "Management Status"
        }
      ]
    }
  },
  {
    "id": 35,
    "title": "Manufacturing Flow (Q35)",
    "category": "Manufacturing",
    "level": "Context Diagram",
    "difficulty": "Medium",
    "description": "The 'Manufacturing System' sends 'Supplier Invoice' to 'Management 3'. The 'Retailer 2' sends 'Retailer Request' to 'Manufacturing System'. The 'Management 3' sends 'Distributor Report' to 'Manufacturing System'. The 'Management 3' sends 'Management Data' to 'Manufacturing System'. The 'Manufacturing System' sends 'Retailer Info' to 'Distributor'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Distributor"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Retailer 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Management 3"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "Manufacturing System"
        }
      ],
      "edges": [
        {
          "source": "Manufacturing System",
          "target": "Management 3",
          "label": "Supplier Invoice"
        },
        {
          "source": "Retailer 2",
          "target": "Manufacturing System",
          "label": "Retailer Request"
        },
        {
          "source": "Management 3",
          "target": "Manufacturing System",
          "label": "Distributor Report"
        },
        {
          "source": "Management 3",
          "target": "Manufacturing System",
          "label": "Management Data"
        },
        {
          "source": "Manufacturing System",
          "target": "Distributor",
          "label": "Retailer Info"
        }
      ]
    }
  },
  {
    "id": 36,
    "title": "Hospitality Flow (Q36)",
    "category": "Hospitality",
    "level": "Context Diagram",
    "difficulty": "Easy",
    "description": "The 'Manager' sends 'Housekeeping Status' to 'Hospitality System'. The 'Guest 2' sends 'Booking Agency Info' to 'Hospitality System'. The 'Guest 2' sends 'Manager Response' to 'Hospitality System'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Guest 2"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "Hospitality System"
        }
      ],
      "edges": [
        {
          "source": "Manager",
          "target": "Hospitality System",
          "label": "Housekeeping Status"
        },
        {
          "source": "Guest 2",
          "target": "Hospitality System",
          "label": "Booking Agency Info"
        },
        {
          "source": "Guest 2",
          "target": "Hospitality System",
          "label": "Manager Response"
        }
      ]
    }
  },
  {
    "id": 37,
    "title": "Transport Flow (Q37)",
    "category": "Transport",
    "level": "Context Diagram",
    "difficulty": "Hard",
    "description": "The 'Driver 3' sends 'Passenger Report' to 'Transport System'. The 'Agency' sends 'Driver Invoice' to 'Transport System'. The 'Transport System' sends 'Agency Request' to 'Maintenance 4'. The 'Transport System' sends 'Agency Data' to 'Agency 2'. The 'Agency 2' sends 'Maintenance Receipt' to 'Transport System'. The 'Agency' sends 'Agency Data' to 'Transport System'. The 'Maintenance 4' sends 'Agency Status' to 'Transport System'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Agency"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Agency 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Driver 3"
        },
        {
          "id": "e3",
          "type": "entity",
          "label": "Maintenance 4"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "Transport System"
        }
      ],
      "edges": [
        {
          "source": "Driver 3",
          "target": "Transport System",
          "label": "Passenger Report"
        },
        {
          "source": "Agency",
          "target": "Transport System",
          "label": "Driver Invoice"
        },
        {
          "source": "Transport System",
          "target": "Maintenance 4",
          "label": "Agency Request"
        },
        {
          "source": "Transport System",
          "target": "Agency 2",
          "label": "Agency Data"
        },
        {
          "source": "Agency 2",
          "target": "Transport System",
          "label": "Maintenance Receipt"
        },
        {
          "source": "Agency",
          "target": "Transport System",
          "label": "Agency Data"
        },
        {
          "source": "Maintenance 4",
          "target": "Transport System",
          "label": "Agency Status"
        }
      ]
    }
  },
  {
    "id": 38,
    "title": "Hospitality Flow (Q38)",
    "category": "Hospitality",
    "level": "Context Diagram",
    "difficulty": "Hard",
    "description": "The 'Restaurant 3' sends 'Housekeeping Status' to 'Hospitality System'. The 'Hospitality System' sends 'Manager Info' to 'Restaurant'. The 'Restaurant' sends 'Receptionist Metrics' to 'Hospitality System'. The 'Booking Agency 4' sends 'Booking Agency Metrics' to 'Hospitality System'. The 'Guest 2' sends 'Booking Agency Invoice' to 'Hospitality System'. The 'Booking Agency 4' sends 'Housekeeping Confirmation' to 'Hospitality System'. The 'Booking Agency 4' sends 'Manager Alert' to 'Hospitality System'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Restaurant"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Guest 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Restaurant 3"
        },
        {
          "id": "e3",
          "type": "entity",
          "label": "Booking Agency 4"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "Hospitality System"
        }
      ],
      "edges": [
        {
          "source": "Restaurant 3",
          "target": "Hospitality System",
          "label": "Housekeeping Status"
        },
        {
          "source": "Hospitality System",
          "target": "Restaurant",
          "label": "Manager Info"
        },
        {
          "source": "Restaurant",
          "target": "Hospitality System",
          "label": "Receptionist Metrics"
        },
        {
          "source": "Booking Agency 4",
          "target": "Hospitality System",
          "label": "Booking Agency Metrics"
        },
        {
          "source": "Guest 2",
          "target": "Hospitality System",
          "label": "Booking Agency Invoice"
        },
        {
          "source": "Booking Agency 4",
          "target": "Hospitality System",
          "label": "Housekeeping Confirmation"
        },
        {
          "source": "Booking Agency 4",
          "target": "Hospitality System",
          "label": "Manager Alert"
        }
      ]
    }
  },
  {
    "id": 39,
    "title": "Education Flow (Q39)",
    "category": "Education",
    "level": "Context Diagram",
    "difficulty": "Easy",
    "description": "The 'Admin 2' sends 'Teacher Report' to 'Education System'. The 'Admin 2' sends 'Library Data' to 'Education System'. The 'Admin' sends 'Ministry Details' to 'Education System'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Admin 2"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "Education System"
        }
      ],
      "edges": [
        {
          "source": "Admin 2",
          "target": "Education System",
          "label": "Teacher Report"
        },
        {
          "source": "Admin 2",
          "target": "Education System",
          "label": "Library Data"
        },
        {
          "source": "Admin",
          "target": "Education System",
          "label": "Ministry Details"
        }
      ]
    }
  },
  {
    "id": 40,
    "title": "Library Flow (Q40)",
    "category": "Library",
    "level": "Context Diagram",
    "difficulty": "Easy",
    "description": "The 'Library System' sends 'Audit Confirmation' to 'Supplier'. The 'Supplier' sends 'Audit Data' to 'Library System'. The 'Supplier' sends 'Librarian Info' to 'Library System'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Supplier"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Supplier 2"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "Library System"
        }
      ],
      "edges": [
        {
          "source": "Library System",
          "target": "Supplier",
          "label": "Audit Confirmation"
        },
        {
          "source": "Supplier",
          "target": "Library System",
          "label": "Audit Data"
        },
        {
          "source": "Supplier",
          "target": "Library System",
          "label": "Librarian Info"
        }
      ]
    }
  },
  {
    "id": 41,
    "title": "Library Flow (Q41)",
    "category": "Library",
    "level": "Context Diagram",
    "difficulty": "Expert",
    "description": "The 'Member 4' sends 'System Details' to 'Library System'. The 'Public 2' sends 'Member Confirmation' to 'Library System'. The 'Member 4' sends 'Public Confirmation' to 'Library System'. The 'Audit 5' sends 'Public Alert' to 'Library System'. The 'Library System' sends 'Audit Data' to 'Audit'. The 'Library System' sends 'Supplier Status' to 'Public 2'. The 'Member 4' sends 'Audit Alert' to 'Library System'. The 'Library System' sends 'System Alert' to 'Audit 5'. The 'Public 2' sends 'Librarian Report' to 'Library System'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Audit"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Public 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Audit 3"
        },
        {
          "id": "e3",
          "type": "entity",
          "label": "Member 4"
        },
        {
          "id": "e4",
          "type": "entity",
          "label": "Audit 5"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "Library System"
        }
      ],
      "edges": [
        {
          "source": "Member 4",
          "target": "Library System",
          "label": "System Details"
        },
        {
          "source": "Public 2",
          "target": "Library System",
          "label": "Member Confirmation"
        },
        {
          "source": "Member 4",
          "target": "Library System",
          "label": "Public Confirmation"
        },
        {
          "source": "Audit 5",
          "target": "Library System",
          "label": "Public Alert"
        },
        {
          "source": "Library System",
          "target": "Audit",
          "label": "Audit Data"
        },
        {
          "source": "Library System",
          "target": "Public 2",
          "label": "Supplier Status"
        },
        {
          "source": "Member 4",
          "target": "Library System",
          "label": "Audit Alert"
        },
        {
          "source": "Library System",
          "target": "Audit 5",
          "label": "System Alert"
        },
        {
          "source": "Public 2",
          "target": "Library System",
          "label": "Librarian Report"
        }
      ]
    }
  },
  {
    "id": 42,
    "title": "Transport Flow (Q42)",
    "category": "Transport",
    "level": "Context Diagram",
    "difficulty": "Hard",
    "description": "The 'Driver 3' sends 'Maintenance Alert' to 'Transport System'. The 'Driver 3' sends 'Payment Gateway Info' to 'Transport System'. The 'Transport System' sends 'Agency Data' to 'Maintenance 2'. The 'Transport System' sends 'Dispatch Info' to 'Agency'. The 'Agency 4' sends 'Dispatch Metrics' to 'Transport System'. The 'Driver 3' sends 'Agency Receipt' to 'Transport System'. The 'Transport System' sends 'Payment Gateway Request' to 'Agency'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Agency"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Maintenance 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Driver 3"
        },
        {
          "id": "e3",
          "type": "entity",
          "label": "Agency 4"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "Transport System"
        }
      ],
      "edges": [
        {
          "source": "Driver 3",
          "target": "Transport System",
          "label": "Maintenance Alert"
        },
        {
          "source": "Driver 3",
          "target": "Transport System",
          "label": "Payment Gateway Info"
        },
        {
          "source": "Transport System",
          "target": "Maintenance 2",
          "label": "Agency Data"
        },
        {
          "source": "Transport System",
          "target": "Agency",
          "label": "Dispatch Info"
        },
        {
          "source": "Agency 4",
          "target": "Transport System",
          "label": "Dispatch Metrics"
        },
        {
          "source": "Driver 3",
          "target": "Transport System",
          "label": "Agency Receipt"
        },
        {
          "source": "Transport System",
          "target": "Agency",
          "label": "Payment Gateway Request"
        }
      ]
    }
  },
  {
    "id": 43,
    "title": "Education Flow (Q43)",
    "category": "Education",
    "level": "Context Diagram",
    "difficulty": "Expert",
    "description": "The 'Student 2' sends 'Parents Response' to 'Education System'. The 'Library 5' sends 'Admin Status' to 'Education System'. The 'Ministry' sends 'Ministry Report' to 'Education System'. The 'Ministry' sends 'Teacher Request' to 'Education System'. The 'Student 2' sends 'Admin Confirmation' to 'Education System'. The 'Ministry' sends 'Parents Alert' to 'Education System'. The 'Library 5' sends 'Parents Details' to 'Education System'. The 'Ministry' sends 'Student Invoice' to 'Education System'. The 'Library 5' sends 'Parents Data' to 'Education System'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Ministry"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Student 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Ministry 3"
        },
        {
          "id": "e3",
          "type": "entity",
          "label": "Ministry 4"
        },
        {
          "id": "e4",
          "type": "entity",
          "label": "Library 5"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "Education System"
        }
      ],
      "edges": [
        {
          "source": "Student 2",
          "target": "Education System",
          "label": "Parents Response"
        },
        {
          "source": "Library 5",
          "target": "Education System",
          "label": "Admin Status"
        },
        {
          "source": "Ministry",
          "target": "Education System",
          "label": "Ministry Report"
        },
        {
          "source": "Ministry",
          "target": "Education System",
          "label": "Teacher Request"
        },
        {
          "source": "Student 2",
          "target": "Education System",
          "label": "Admin Confirmation"
        },
        {
          "source": "Ministry",
          "target": "Education System",
          "label": "Parents Alert"
        },
        {
          "source": "Library 5",
          "target": "Education System",
          "label": "Parents Details"
        },
        {
          "source": "Ministry",
          "target": "Education System",
          "label": "Student Invoice"
        },
        {
          "source": "Library 5",
          "target": "Education System",
          "label": "Parents Data"
        }
      ]
    }
  },
  {
    "id": 44,
    "title": "Real Estate Flow (Q44)",
    "category": "Real Estate",
    "level": "Context Diagram",
    "difficulty": "Hard",
    "description": "The 'Bank 2' sends 'Bank Confirmation' to 'Real Estate System'. The 'Agent 4' sends 'Inspector Status' to 'Real Estate System'. The 'Buyer 3' sends 'Inspector Metrics' to 'Real Estate System'. The 'Agent' sends 'Buyer Confirmation' to 'Real Estate System'. The 'Bank 2' sends 'Agent Status' to 'Real Estate System'. The 'Agent' sends 'Buyer Status' to 'Real Estate System'. The 'Buyer 3' sends 'Buyer Receipt' to 'Real Estate System'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Agent"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Bank 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Buyer 3"
        },
        {
          "id": "e3",
          "type": "entity",
          "label": "Agent 4"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "Real Estate System"
        }
      ],
      "edges": [
        {
          "source": "Bank 2",
          "target": "Real Estate System",
          "label": "Bank Confirmation"
        },
        {
          "source": "Agent 4",
          "target": "Real Estate System",
          "label": "Inspector Status"
        },
        {
          "source": "Buyer 3",
          "target": "Real Estate System",
          "label": "Inspector Metrics"
        },
        {
          "source": "Agent",
          "target": "Real Estate System",
          "label": "Buyer Confirmation"
        },
        {
          "source": "Bank 2",
          "target": "Real Estate System",
          "label": "Agent Status"
        },
        {
          "source": "Agent",
          "target": "Real Estate System",
          "label": "Buyer Status"
        },
        {
          "source": "Buyer 3",
          "target": "Real Estate System",
          "label": "Buyer Receipt"
        }
      ]
    }
  },
  {
    "id": 45,
    "title": "Transport Flow (Q45)",
    "category": "Transport",
    "level": "Context Diagram",
    "difficulty": "Medium",
    "description": "The 'Payment Gateway' sends 'Maintenance Invoice' to 'Transport System'. The 'Payment Gateway' sends 'Driver Request' to 'Transport System'. The 'Driver 2' sends 'Agency Confirmation' to 'Transport System'. The 'Payment Gateway' sends 'Driver Response' to 'Transport System'. The 'Driver 3' sends 'Passenger Request' to 'Transport System'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Payment Gateway"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Driver 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Driver 3"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "Transport System"
        }
      ],
      "edges": [
        {
          "source": "Payment Gateway",
          "target": "Transport System",
          "label": "Maintenance Invoice"
        },
        {
          "source": "Payment Gateway",
          "target": "Transport System",
          "label": "Driver Request"
        },
        {
          "source": "Driver 2",
          "target": "Transport System",
          "label": "Agency Confirmation"
        },
        {
          "source": "Payment Gateway",
          "target": "Transport System",
          "label": "Driver Response"
        },
        {
          "source": "Driver 3",
          "target": "Transport System",
          "label": "Passenger Request"
        }
      ]
    }
  },
  {
    "id": 46,
    "title": "Library Flow (Q46)",
    "category": "Library",
    "level": "Context Diagram",
    "difficulty": "Medium",
    "description": "The 'Library System' sends 'Public Details' to 'Librarian 2'. The 'Librarian' sends 'Public Confirmation' to 'Library System'. The 'Supplier 3' sends 'Member Details' to 'Library System'. The 'Library System' sends 'Supplier Report' to 'Librarian'. The 'Supplier 3' sends 'System Alert' to 'Library System'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Librarian"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Librarian 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Supplier 3"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "Library System"
        }
      ],
      "edges": [
        {
          "source": "Library System",
          "target": "Librarian 2",
          "label": "Public Details"
        },
        {
          "source": "Librarian",
          "target": "Library System",
          "label": "Public Confirmation"
        },
        {
          "source": "Supplier 3",
          "target": "Library System",
          "label": "Member Details"
        },
        {
          "source": "Library System",
          "target": "Librarian",
          "label": "Supplier Report"
        },
        {
          "source": "Supplier 3",
          "target": "Library System",
          "label": "System Alert"
        }
      ]
    }
  },
  {
    "id": 47,
    "title": "E-commerce Flow (Q47)",
    "category": "E-commerce",
    "level": "Level 1 DFD",
    "difficulty": "Expert",
    "description": "The '1.0 Route Payment Gateway' sends 'Shipping Co Invoice' to 'D2 Shipping Co DB'. The '1.0 Route Payment Gateway' sends 'Admin Response' to 'Shipping Co'. The 'Shipping Co' sends 'Warehouse Confirmation' to '4.0 Validate Payment Gateway'. The 'D2 Shipping Co DB' sends 'Admin Info' to '2.0 Authorize Payment Gateway'. The 'D2 Shipping Co DB' sends 'Customer Alert' to '5.0 Fetch Supplier'. The 'D2 Shipping Co DB' sends 'Warehouse Invoice' to '2.0 Authorize Payment Gateway'. The '2.0 Authorize Payment Gateway' sends 'Admin Data' to 'D1 Customer DB'. The 'D2 Shipping Co DB' sends 'Payment Gateway Confirmation' to '5.0 Fetch Supplier'. The '5.0 Fetch Supplier' sends 'Payment Gateway Info' to 'Shipping Co'. The 'Shipping Co' sends 'Warehouse Request' to '2.0 Authorize Payment Gateway'. The 'D1 Customer DB' sends 'Admin Confirmation' to '1.0 Route Payment Gateway'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Shipping Co"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Warehouse 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Customer 3"
        },
        {
          "id": "e3",
          "type": "entity",
          "label": "Supplier 4"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Route Payment Gateway"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Authorize Payment Gateway"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Handle Shipping Co"
        },
        {
          "id": "p3",
          "type": "process",
          "label": "4.0 Validate Payment Gateway"
        },
        {
          "id": "p4",
          "type": "process",
          "label": "5.0 Fetch Supplier"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Customer DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Shipping Co DB"
        },
        {
          "id": "s2",
          "type": "dataStore",
          "label": "D3 Shipping Co DB"
        },
        {
          "id": "s3",
          "type": "dataStore",
          "label": "D4 Supplier DB"
        }
      ],
      "edges": [
        {
          "source": "1.0 Route Payment Gateway",
          "target": "D2 Shipping Co DB",
          "label": "Shipping Co Invoice"
        },
        {
          "source": "1.0 Route Payment Gateway",
          "target": "Shipping Co",
          "label": "Admin Response"
        },
        {
          "source": "Shipping Co",
          "target": "4.0 Validate Payment Gateway",
          "label": "Warehouse Confirmation"
        },
        {
          "source": "D2 Shipping Co DB",
          "target": "2.0 Authorize Payment Gateway",
          "label": "Admin Info"
        },
        {
          "source": "D2 Shipping Co DB",
          "target": "5.0 Fetch Supplier",
          "label": "Customer Alert"
        },
        {
          "source": "D2 Shipping Co DB",
          "target": "2.0 Authorize Payment Gateway",
          "label": "Warehouse Invoice"
        },
        {
          "source": "2.0 Authorize Payment Gateway",
          "target": "D1 Customer DB",
          "label": "Admin Data"
        },
        {
          "source": "D2 Shipping Co DB",
          "target": "5.0 Fetch Supplier",
          "label": "Payment Gateway Confirmation"
        },
        {
          "source": "5.0 Fetch Supplier",
          "target": "Shipping Co",
          "label": "Payment Gateway Info"
        },
        {
          "source": "Shipping Co",
          "target": "2.0 Authorize Payment Gateway",
          "label": "Warehouse Request"
        },
        {
          "source": "D1 Customer DB",
          "target": "1.0 Route Payment Gateway",
          "label": "Admin Confirmation"
        }
      ]
    }
  },
  {
    "id": 48,
    "title": "Manufacturing Flow (Q48)",
    "category": "Manufacturing",
    "level": "Level 1 DFD",
    "difficulty": "Easy",
    "description": "The '1.0 Update Management' sends 'Management Alert' to 'D1 Distributor DB'. The '2.0 Authorize Supplier' sends 'Quality Control Details' to 'Worker'. The 'Worker' sends 'Retailer Invoice' to '1.0 Update Management'. The 'Worker' sends 'Retailer Confirmation' to '1.0 Update Management'. The 'D1 Distributor DB' sends 'Retailer Data' to '2.0 Authorize Supplier'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Worker"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Update Management"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Authorize Supplier"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Distributor DB"
        }
      ],
      "edges": [
        {
          "source": "1.0 Update Management",
          "target": "D1 Distributor DB",
          "label": "Management Alert"
        },
        {
          "source": "2.0 Authorize Supplier",
          "target": "Worker",
          "label": "Quality Control Details"
        },
        {
          "source": "Worker",
          "target": "1.0 Update Management",
          "label": "Retailer Invoice"
        },
        {
          "source": "Worker",
          "target": "1.0 Update Management",
          "label": "Retailer Confirmation"
        },
        {
          "source": "D1 Distributor DB",
          "target": "2.0 Authorize Supplier",
          "label": "Retailer Data"
        }
      ]
    }
  },
  {
    "id": 49,
    "title": "Transport Flow (Q49)",
    "category": "Transport",
    "level": "Level 1 DFD",
    "difficulty": "Medium",
    "description": "The 'D1 Agency DB' sends 'Driver Report' to '3.0 Fetch Payment Gateway'. The 'Agency' sends 'Passenger Confirmation' to '2.0 Calculate Dispatch'. The 'D2 Maintenance DB' sends 'Payment Gateway Info' to '2.0 Calculate Dispatch'. The 'Agency' sends 'Payment Gateway Alert' to '2.0 Calculate Dispatch'. The '1.0 Fetch Dispatch' sends 'Payment Gateway Status' to '3.0 Fetch Payment Gateway'. The '1.0 Fetch Dispatch' sends 'Agency Receipt' to 'D2 Maintenance DB'. The 'Payment Gateway 2' sends 'Driver Response' to '2.0 Calculate Dispatch'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Agency"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Payment Gateway 2"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Fetch Dispatch"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Calculate Dispatch"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Fetch Payment Gateway"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Agency DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Maintenance DB"
        }
      ],
      "edges": [
        {
          "source": "D1 Agency DB",
          "target": "3.0 Fetch Payment Gateway",
          "label": "Driver Report"
        },
        {
          "source": "Agency",
          "target": "2.0 Calculate Dispatch",
          "label": "Passenger Confirmation"
        },
        {
          "source": "D2 Maintenance DB",
          "target": "2.0 Calculate Dispatch",
          "label": "Payment Gateway Info"
        },
        {
          "source": "Agency",
          "target": "2.0 Calculate Dispatch",
          "label": "Payment Gateway Alert"
        },
        {
          "source": "1.0 Fetch Dispatch",
          "target": "3.0 Fetch Payment Gateway",
          "label": "Payment Gateway Status"
        },
        {
          "source": "1.0 Fetch Dispatch",
          "target": "D2 Maintenance DB",
          "label": "Agency Receipt"
        },
        {
          "source": "Payment Gateway 2",
          "target": "2.0 Calculate Dispatch",
          "label": "Driver Response"
        }
      ]
    }
  },
  {
    "id": 50,
    "title": "E-commerce Flow (Q50)",
    "category": "E-commerce",
    "level": "Level 1 DFD",
    "difficulty": "Hard",
    "description": "The '1.0 Verify Warehouse' sends 'Payment Gateway Invoice' to 'D1 Supplier DB'. The '3.0 Verify Supplier' sends 'Admin Metrics' to 'Supplier'. The '1.0 Verify Warehouse' sends 'Shipping Co Response' to 'Admin 2'. The 'D1 Supplier DB' sends 'Warehouse Report' to '3.0 Verify Supplier'. The 'D1 Supplier DB' sends 'Shipping Co Data' to '4.0 Route Customer'. The 'D2 Shipping Co DB' sends 'Customer Report' to '4.0 Route Customer'. The 'Shipping Co 3' sends 'Customer Response' to '3.0 Verify Supplier'. The 'D2 Shipping Co DB' sends 'Warehouse Data' to '1.0 Verify Warehouse'. The 'Supplier' sends 'Customer Invoice' to '3.0 Verify Supplier'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Supplier"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Admin 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Shipping Co 3"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Verify Warehouse"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Cancel Shipping Co"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Verify Supplier"
        },
        {
          "id": "p3",
          "type": "process",
          "label": "4.0 Route Customer"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Supplier DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Shipping Co DB"
        },
        {
          "id": "s2",
          "type": "dataStore",
          "label": "D3 Admin DB"
        }
      ],
      "edges": [
        {
          "source": "1.0 Verify Warehouse",
          "target": "D1 Supplier DB",
          "label": "Payment Gateway Invoice"
        },
        {
          "source": "3.0 Verify Supplier",
          "target": "Supplier",
          "label": "Admin Metrics"
        },
        {
          "source": "1.0 Verify Warehouse",
          "target": "Admin 2",
          "label": "Shipping Co Response"
        },
        {
          "source": "D1 Supplier DB",
          "target": "3.0 Verify Supplier",
          "label": "Warehouse Report"
        },
        {
          "source": "D1 Supplier DB",
          "target": "4.0 Route Customer",
          "label": "Shipping Co Data"
        },
        {
          "source": "D2 Shipping Co DB",
          "target": "4.0 Route Customer",
          "label": "Customer Report"
        },
        {
          "source": "Shipping Co 3",
          "target": "3.0 Verify Supplier",
          "label": "Customer Response"
        },
        {
          "source": "D2 Shipping Co DB",
          "target": "1.0 Verify Warehouse",
          "label": "Warehouse Data"
        },
        {
          "source": "Supplier",
          "target": "3.0 Verify Supplier",
          "label": "Customer Invoice"
        }
      ]
    }
  },
  {
    "id": 51,
    "title": "E-commerce Flow (Q51)",
    "category": "E-commerce",
    "level": "Level 1 DFD",
    "difficulty": "Expert",
    "description": "The 'Warehouse 2' sends 'Supplier Response' to '5.0 Store Warehouse'. The '3.0 Validate Warehouse' sends 'Customer Invoice' to 'Payment Gateway 4'. The '3.0 Validate Warehouse' sends 'Payment Gateway Alert' to 'Warehouse 3'. The 'D3 Warehouse DB' sends 'Admin Request' to '4.0 Manage Supplier'. The 'Warehouse 3' sends 'Warehouse Report' to '3.0 Validate Warehouse'. The 'Warehouse 2' sends 'Shipping Co Info' to '3.0 Validate Warehouse'. The '3.0 Validate Warehouse' sends 'Customer Report' to 'Warehouse 2'. The '2.0 Update Shipping Co' sends 'Supplier Status' to 'Warehouse'. The 'D2 Shipping Co DB' sends 'Shipping Co Info' to '4.0 Manage Supplier'. The 'D2 Shipping Co DB' sends 'Admin Info' to '1.0 Calculate Supplier'. The 'D1 Shipping Co DB' sends 'Warehouse Invoice' to '4.0 Manage Supplier'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Warehouse"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Warehouse 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Warehouse 3"
        },
        {
          "id": "e3",
          "type": "entity",
          "label": "Payment Gateway 4"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Calculate Supplier"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Update Shipping Co"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Validate Warehouse"
        },
        {
          "id": "p3",
          "type": "process",
          "label": "4.0 Manage Supplier"
        },
        {
          "id": "p4",
          "type": "process",
          "label": "5.0 Store Warehouse"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Shipping Co DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Shipping Co DB"
        },
        {
          "id": "s2",
          "type": "dataStore",
          "label": "D3 Warehouse DB"
        },
        {
          "id": "s3",
          "type": "dataStore",
          "label": "D4 Customer DB"
        }
      ],
      "edges": [
        {
          "source": "Warehouse 2",
          "target": "5.0 Store Warehouse",
          "label": "Supplier Response"
        },
        {
          "source": "3.0 Validate Warehouse",
          "target": "Payment Gateway 4",
          "label": "Customer Invoice"
        },
        {
          "source": "3.0 Validate Warehouse",
          "target": "Warehouse 3",
          "label": "Payment Gateway Alert"
        },
        {
          "source": "D3 Warehouse DB",
          "target": "4.0 Manage Supplier",
          "label": "Admin Request"
        },
        {
          "source": "Warehouse 3",
          "target": "3.0 Validate Warehouse",
          "label": "Warehouse Report"
        },
        {
          "source": "Warehouse 2",
          "target": "3.0 Validate Warehouse",
          "label": "Shipping Co Info"
        },
        {
          "source": "3.0 Validate Warehouse",
          "target": "Warehouse 2",
          "label": "Customer Report"
        },
        {
          "source": "2.0 Update Shipping Co",
          "target": "Warehouse",
          "label": "Supplier Status"
        },
        {
          "source": "D2 Shipping Co DB",
          "target": "4.0 Manage Supplier",
          "label": "Shipping Co Info"
        },
        {
          "source": "D2 Shipping Co DB",
          "target": "1.0 Calculate Supplier",
          "label": "Admin Info"
        },
        {
          "source": "D1 Shipping Co DB",
          "target": "4.0 Manage Supplier",
          "label": "Warehouse Invoice"
        }
      ]
    }
  },
  {
    "id": 52,
    "title": "Entertainment Flow (Q52)",
    "category": "Entertainment",
    "level": "Level 1 DFD",
    "difficulty": "Hard",
    "description": "The '3.0 Generate Studio' sends 'Creator Status' to 'Billing System'. The 'D1 Creator DB' sends 'Creator Invoice' to '3.0 Generate Studio'. The 'D1 Creator DB' sends 'Admin Details' to '1.0 Review Creator'. The '4.0 Handle Billing System' sends 'Studio Report' to '1.0 Review Creator'. The '2.0 Route User' sends 'User Invoice' to '1.0 Review Creator'. The 'Billing System' sends 'Billing System Details' to '1.0 Review Creator'. The '3.0 Generate Studio' sends 'Billing System Receipt' to '2.0 Route User'. The '3.0 Generate Studio' sends 'Admin Status' to 'D1 Creator DB'. The 'Studio 2' sends 'Admin Confirmation' to '4.0 Handle Billing System'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Billing System"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Studio 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Billing System 3"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Review Creator"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Route User"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Generate Studio"
        },
        {
          "id": "p3",
          "type": "process",
          "label": "4.0 Handle Billing System"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Creator DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Billing System DB"
        },
        {
          "id": "s2",
          "type": "dataStore",
          "label": "D3 Advertiser DB"
        }
      ],
      "edges": [
        {
          "source": "3.0 Generate Studio",
          "target": "Billing System",
          "label": "Creator Status"
        },
        {
          "source": "D1 Creator DB",
          "target": "3.0 Generate Studio",
          "label": "Creator Invoice"
        },
        {
          "source": "D1 Creator DB",
          "target": "1.0 Review Creator",
          "label": "Admin Details"
        },
        {
          "source": "4.0 Handle Billing System",
          "target": "1.0 Review Creator",
          "label": "Studio Report"
        },
        {
          "source": "2.0 Route User",
          "target": "1.0 Review Creator",
          "label": "User Invoice"
        },
        {
          "source": "Billing System",
          "target": "1.0 Review Creator",
          "label": "Billing System Details"
        },
        {
          "source": "3.0 Generate Studio",
          "target": "2.0 Route User",
          "label": "Billing System Receipt"
        },
        {
          "source": "3.0 Generate Studio",
          "target": "D1 Creator DB",
          "label": "Admin Status"
        },
        {
          "source": "Studio 2",
          "target": "4.0 Handle Billing System",
          "label": "Admin Confirmation"
        }
      ]
    }
  },
  {
    "id": 53,
    "title": "Healthcare Flow (Q53)",
    "category": "Healthcare",
    "level": "Level 1 DFD",
    "difficulty": "Hard",
    "description": "The '4.0 Update Insurance' sends 'Insurance Metrics' to 'Nurse 2'. The '1.0 Route Lab' sends 'Doctor Invoice' to 'D3 Pharmacy DB'. The '4.0 Update Insurance' sends 'Pharmacy Invoice' to '1.0 Route Lab'. The 'D2 Pharmacy DB' sends 'Pharmacy Invoice' to '1.0 Route Lab'. The 'Nurse 2' sends 'Doctor Report' to '1.0 Route Lab'. The '1.0 Route Lab' sends 'Pharmacy Info' to 'D1 Nurse DB'. The '2.0 Validate Nurse' sends 'Patient Metrics' to 'D2 Pharmacy DB'. The 'Pharmacy' sends 'Lab Alert' to '3.0 Review Lab'. The 'Pharmacy' sends 'Lab Details' to '2.0 Validate Nurse'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Pharmacy"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Nurse 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Lab 3"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Route Lab"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Validate Nurse"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Review Lab"
        },
        {
          "id": "p3",
          "type": "process",
          "label": "4.0 Update Insurance"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Nurse DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Pharmacy DB"
        },
        {
          "id": "s2",
          "type": "dataStore",
          "label": "D3 Pharmacy DB"
        }
      ],
      "edges": [
        {
          "source": "4.0 Update Insurance",
          "target": "Nurse 2",
          "label": "Insurance Metrics"
        },
        {
          "source": "1.0 Route Lab",
          "target": "D3 Pharmacy DB",
          "label": "Doctor Invoice"
        },
        {
          "source": "4.0 Update Insurance",
          "target": "1.0 Route Lab",
          "label": "Pharmacy Invoice"
        },
        {
          "source": "D2 Pharmacy DB",
          "target": "1.0 Route Lab",
          "label": "Pharmacy Invoice"
        },
        {
          "source": "Nurse 2",
          "target": "1.0 Route Lab",
          "label": "Doctor Report"
        },
        {
          "source": "1.0 Route Lab",
          "target": "D1 Nurse DB",
          "label": "Pharmacy Info"
        },
        {
          "source": "2.0 Validate Nurse",
          "target": "D2 Pharmacy DB",
          "label": "Patient Metrics"
        },
        {
          "source": "Pharmacy",
          "target": "3.0 Review Lab",
          "label": "Lab Alert"
        },
        {
          "source": "Pharmacy",
          "target": "2.0 Validate Nurse",
          "label": "Lab Details"
        }
      ]
    }
  },
  {
    "id": 54,
    "title": "Entertainment Flow (Q54)",
    "category": "Entertainment",
    "level": "Level 1 DFD",
    "difficulty": "Medium",
    "description": "The '1.0 Validate Admin' sends 'Creator Report' to '3.0 Route User'. The '1.0 Validate Admin' sends 'Studio Confirmation' to 'Creator'. The 'Creator' sends 'User Confirmation' to '2.0 Route User'. The 'D2 Billing System DB' sends 'Studio Report' to '3.0 Route User'. The '2.0 Route User' sends 'Creator Report' to 'D2 Billing System DB'. The '2.0 Route User' sends 'Creator Details' to 'Creator'. The 'Advertiser 2' sends 'User Request' to '3.0 Route User'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Creator"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Advertiser 2"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Validate Admin"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Route User"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Route User"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Studio DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Billing System DB"
        }
      ],
      "edges": [
        {
          "source": "1.0 Validate Admin",
          "target": "3.0 Route User",
          "label": "Creator Report"
        },
        {
          "source": "1.0 Validate Admin",
          "target": "Creator",
          "label": "Studio Confirmation"
        },
        {
          "source": "Creator",
          "target": "2.0 Route User",
          "label": "User Confirmation"
        },
        {
          "source": "D2 Billing System DB",
          "target": "3.0 Route User",
          "label": "Studio Report"
        },
        {
          "source": "2.0 Route User",
          "target": "D2 Billing System DB",
          "label": "Creator Report"
        },
        {
          "source": "2.0 Route User",
          "target": "Creator",
          "label": "Creator Details"
        },
        {
          "source": "Advertiser 2",
          "target": "3.0 Route User",
          "label": "User Request"
        }
      ]
    }
  },
  {
    "id": 55,
    "title": "Hospitality Flow (Q55)",
    "category": "Hospitality",
    "level": "Level 1 DFD",
    "difficulty": "Hard",
    "description": "The '4.0 Process Restaurant' sends 'Guest Details' to '3.0 Store Booking Agency'. The 'Booking Agency' sends 'Booking Agency Data' to '1.0 Route Booking Agency'. The '4.0 Process Restaurant' sends 'Guest Metrics' to 'Restaurant 3'. The 'D1 Guest DB' sends 'Guest Response' to '2.0 Generate Guest'. The '3.0 Store Booking Agency' sends 'Restaurant Alert' to 'Booking Agency 2'. The '2.0 Generate Guest' sends 'Housekeeping Data' to 'Booking Agency 2'. The '2.0 Generate Guest' sends 'Receptionist Report' to 'D3 Restaurant DB'. The '2.0 Generate Guest' sends 'Manager Request' to 'Booking Agency 2'. The '3.0 Store Booking Agency' sends 'Restaurant Data' to 'Booking Agency 2'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Booking Agency"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Booking Agency 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Restaurant 3"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Route Booking Agency"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Generate Guest"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Store Booking Agency"
        },
        {
          "id": "p3",
          "type": "process",
          "label": "4.0 Process Restaurant"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Guest DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Restaurant DB"
        },
        {
          "id": "s2",
          "type": "dataStore",
          "label": "D3 Restaurant DB"
        }
      ],
      "edges": [
        {
          "source": "4.0 Process Restaurant",
          "target": "3.0 Store Booking Agency",
          "label": "Guest Details"
        },
        {
          "source": "Booking Agency",
          "target": "1.0 Route Booking Agency",
          "label": "Booking Agency Data"
        },
        {
          "source": "4.0 Process Restaurant",
          "target": "Restaurant 3",
          "label": "Guest Metrics"
        },
        {
          "source": "D1 Guest DB",
          "target": "2.0 Generate Guest",
          "label": "Guest Response"
        },
        {
          "source": "3.0 Store Booking Agency",
          "target": "Booking Agency 2",
          "label": "Restaurant Alert"
        },
        {
          "source": "2.0 Generate Guest",
          "target": "Booking Agency 2",
          "label": "Housekeeping Data"
        },
        {
          "source": "2.0 Generate Guest",
          "target": "D3 Restaurant DB",
          "label": "Receptionist Report"
        },
        {
          "source": "2.0 Generate Guest",
          "target": "Booking Agency 2",
          "label": "Manager Request"
        },
        {
          "source": "3.0 Store Booking Agency",
          "target": "Booking Agency 2",
          "label": "Restaurant Data"
        }
      ]
    }
  },
  {
    "id": 56,
    "title": "Entertainment Flow (Q56)",
    "category": "Entertainment",
    "level": "Level 1 DFD",
    "difficulty": "Medium",
    "description": "The 'Studio' sends 'Admin Details' to '2.0 Calculate Billing System'. The '3.0 Schedule Admin' sends 'Admin Receipt' to 'D1 User DB'. The '3.0 Schedule Admin' sends 'Creator Invoice' to 'Billing System 2'. The 'Studio' sends 'Creator Details' to '3.0 Schedule Admin'. The 'D2 Creator DB' sends 'Billing System Invoice' to '3.0 Schedule Admin'. The '2.0 Calculate Billing System' sends 'Studio Metrics' to 'Studio'. The '1.0 Schedule User' sends 'Studio Metrics' to 'D2 Creator DB'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Studio"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Billing System 2"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Schedule User"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Calculate Billing System"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Schedule Admin"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 User DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Creator DB"
        }
      ],
      "edges": [
        {
          "source": "Studio",
          "target": "2.0 Calculate Billing System",
          "label": "Admin Details"
        },
        {
          "source": "3.0 Schedule Admin",
          "target": "D1 User DB",
          "label": "Admin Receipt"
        },
        {
          "source": "3.0 Schedule Admin",
          "target": "Billing System 2",
          "label": "Creator Invoice"
        },
        {
          "source": "Studio",
          "target": "3.0 Schedule Admin",
          "label": "Creator Details"
        },
        {
          "source": "D2 Creator DB",
          "target": "3.0 Schedule Admin",
          "label": "Billing System Invoice"
        },
        {
          "source": "2.0 Calculate Billing System",
          "target": "Studio",
          "label": "Studio Metrics"
        },
        {
          "source": "1.0 Schedule User",
          "target": "D2 Creator DB",
          "label": "Studio Metrics"
        }
      ]
    }
  },
  {
    "id": 57,
    "title": "Transport Flow (Q57)",
    "category": "Transport",
    "level": "Level 1 DFD",
    "difficulty": "Medium",
    "description": "The '3.0 Authorize Dispatch' sends 'Payment Gateway Metrics' to 'D1 Payment Gateway DB'. The 'D2 Passenger DB' sends 'Driver Report' to '3.0 Authorize Dispatch'. The 'D1 Payment Gateway DB' sends 'Dispatch Info' to '3.0 Authorize Dispatch'. The 'Passenger' sends 'Agency Status' to '3.0 Authorize Dispatch'. The 'D1 Payment Gateway DB' sends 'Payment Gateway Response' to '3.0 Authorize Dispatch'. The 'Passenger' sends 'Maintenance Data' to '2.0 Cancel Dispatch'. The '2.0 Cancel Dispatch' sends 'Maintenance Info' to '3.0 Authorize Dispatch'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Passenger"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Payment Gateway 2"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Calculate Agency"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Cancel Dispatch"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Authorize Dispatch"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Payment Gateway DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Passenger DB"
        }
      ],
      "edges": [
        {
          "source": "3.0 Authorize Dispatch",
          "target": "D1 Payment Gateway DB",
          "label": "Payment Gateway Metrics"
        },
        {
          "source": "D2 Passenger DB",
          "target": "3.0 Authorize Dispatch",
          "label": "Driver Report"
        },
        {
          "source": "D1 Payment Gateway DB",
          "target": "3.0 Authorize Dispatch",
          "label": "Dispatch Info"
        },
        {
          "source": "Passenger",
          "target": "3.0 Authorize Dispatch",
          "label": "Agency Status"
        },
        {
          "source": "D1 Payment Gateway DB",
          "target": "3.0 Authorize Dispatch",
          "label": "Payment Gateway Response"
        },
        {
          "source": "Passenger",
          "target": "2.0 Cancel Dispatch",
          "label": "Maintenance Data"
        },
        {
          "source": "2.0 Cancel Dispatch",
          "target": "3.0 Authorize Dispatch",
          "label": "Maintenance Info"
        }
      ]
    }
  },
  {
    "id": 58,
    "title": "Manufacturing Flow (Q58)",
    "category": "Manufacturing",
    "level": "Level 1 DFD",
    "difficulty": "Easy",
    "description": "The 'D1 Supplier DB' sends 'Management Status' to '1.0 Update Retailer'. The 'D1 Supplier DB' sends 'Distributor Metrics' to '1.0 Update Retailer'. The '2.0 Validate Quality Control' sends 'Management Details' to 'D1 Supplier DB'. The '1.0 Update Retailer' sends 'Distributor Invoice' to 'D1 Supplier DB'. The 'Management' sends 'Worker Data' to '1.0 Update Retailer'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Management"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Update Retailer"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Validate Quality Control"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Supplier DB"
        }
      ],
      "edges": [
        {
          "source": "D1 Supplier DB",
          "target": "1.0 Update Retailer",
          "label": "Management Status"
        },
        {
          "source": "D1 Supplier DB",
          "target": "1.0 Update Retailer",
          "label": "Distributor Metrics"
        },
        {
          "source": "2.0 Validate Quality Control",
          "target": "D1 Supplier DB",
          "label": "Management Details"
        },
        {
          "source": "1.0 Update Retailer",
          "target": "D1 Supplier DB",
          "label": "Distributor Invoice"
        },
        {
          "source": "Management",
          "target": "1.0 Update Retailer",
          "label": "Worker Data"
        }
      ]
    }
  },
  {
    "id": 59,
    "title": "Hospitality Flow (Q59)",
    "category": "Hospitality",
    "level": "Level 1 DFD",
    "difficulty": "Expert",
    "description": "The 'Housekeeping 4' sends 'Housekeeping Alert' to '1.0 Calculate Booking Agency'. The '5.0 Validate Guest' sends 'Guest Alert' to '4.0 Route Booking Agency'. The 'Receptionist' sends 'Receptionist Invoice' to '3.0 Route Receptionist'. The 'D4 Guest DB' sends 'Housekeeping Confirmation' to '5.0 Validate Guest'. The 'Receptionist' sends 'Guest Invoice' to '3.0 Route Receptionist'. The 'D1 Housekeeping DB' sends 'Receptionist Metrics' to '3.0 Route Receptionist'. The 'D2 Guest DB' sends 'Receptionist Status' to '1.0 Calculate Booking Agency'. The '2.0 Manage Housekeeping' sends 'Receptionist Receipt' to 'Housekeeping 4'. The '4.0 Route Booking Agency' sends 'Booking Agency Info' to '3.0 Route Receptionist'. The 'D2 Guest DB' sends 'Restaurant Status' to '1.0 Calculate Booking Agency'. The 'D4 Guest DB' sends 'Receptionist Details' to '3.0 Route Receptionist'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Receptionist"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Guest 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Receptionist 3"
        },
        {
          "id": "e3",
          "type": "entity",
          "label": "Housekeeping 4"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Calculate Booking Agency"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Manage Housekeeping"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Route Receptionist"
        },
        {
          "id": "p3",
          "type": "process",
          "label": "4.0 Route Booking Agency"
        },
        {
          "id": "p4",
          "type": "process",
          "label": "5.0 Validate Guest"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Housekeeping DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Guest DB"
        },
        {
          "id": "s2",
          "type": "dataStore",
          "label": "D3 Receptionist DB"
        },
        {
          "id": "s3",
          "type": "dataStore",
          "label": "D4 Guest DB"
        }
      ],
      "edges": [
        {
          "source": "Housekeeping 4",
          "target": "1.0 Calculate Booking Agency",
          "label": "Housekeeping Alert"
        },
        {
          "source": "5.0 Validate Guest",
          "target": "4.0 Route Booking Agency",
          "label": "Guest Alert"
        },
        {
          "source": "Receptionist",
          "target": "3.0 Route Receptionist",
          "label": "Receptionist Invoice"
        },
        {
          "source": "D4 Guest DB",
          "target": "5.0 Validate Guest",
          "label": "Housekeeping Confirmation"
        },
        {
          "source": "Receptionist",
          "target": "3.0 Route Receptionist",
          "label": "Guest Invoice"
        },
        {
          "source": "D1 Housekeeping DB",
          "target": "3.0 Route Receptionist",
          "label": "Receptionist Metrics"
        },
        {
          "source": "D2 Guest DB",
          "target": "1.0 Calculate Booking Agency",
          "label": "Receptionist Status"
        },
        {
          "source": "2.0 Manage Housekeeping",
          "target": "Housekeeping 4",
          "label": "Receptionist Receipt"
        },
        {
          "source": "4.0 Route Booking Agency",
          "target": "3.0 Route Receptionist",
          "label": "Booking Agency Info"
        },
        {
          "source": "D2 Guest DB",
          "target": "1.0 Calculate Booking Agency",
          "label": "Restaurant Status"
        },
        {
          "source": "D4 Guest DB",
          "target": "3.0 Route Receptionist",
          "label": "Receptionist Details"
        }
      ]
    }
  },
  {
    "id": 60,
    "title": "Hospitality Flow (Q60)",
    "category": "Hospitality",
    "level": "Level 1 DFD",
    "difficulty": "Hard",
    "description": "The 'Booking Agency' sends 'Restaurant Invoice' to '3.0 Authorize Manager'. The 'Booking Agency' sends 'Restaurant Request' to '2.0 Store Housekeeping'. The 'D1 Guest DB' sends 'Booking Agency Request' to '2.0 Store Housekeeping'. The 'D1 Guest DB' sends 'Restaurant Request' to '2.0 Store Housekeeping'. The '3.0 Authorize Manager' sends 'Receptionist Confirmation' to 'D1 Guest DB'. The 'Manager 3' sends 'Restaurant Metrics' to '3.0 Authorize Manager'. The '4.0 Fetch Housekeeping' sends 'Receptionist Data' to 'D1 Guest DB'. The 'D1 Guest DB' sends 'Housekeeping Confirmation' to '2.0 Store Housekeeping'. The '2.0 Store Housekeeping' sends 'Receptionist Data' to 'Housekeeping 2'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Booking Agency"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Housekeeping 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Manager 3"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Process Receptionist"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Store Housekeeping"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Authorize Manager"
        },
        {
          "id": "p3",
          "type": "process",
          "label": "4.0 Fetch Housekeeping"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Guest DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Restaurant DB"
        },
        {
          "id": "s2",
          "type": "dataStore",
          "label": "D3 Housekeeping DB"
        }
      ],
      "edges": [
        {
          "source": "Booking Agency",
          "target": "3.0 Authorize Manager",
          "label": "Restaurant Invoice"
        },
        {
          "source": "Booking Agency",
          "target": "2.0 Store Housekeeping",
          "label": "Restaurant Request"
        },
        {
          "source": "D1 Guest DB",
          "target": "2.0 Store Housekeeping",
          "label": "Booking Agency Request"
        },
        {
          "source": "D1 Guest DB",
          "target": "2.0 Store Housekeeping",
          "label": "Restaurant Request"
        },
        {
          "source": "3.0 Authorize Manager",
          "target": "D1 Guest DB",
          "label": "Receptionist Confirmation"
        },
        {
          "source": "Manager 3",
          "target": "3.0 Authorize Manager",
          "label": "Restaurant Metrics"
        },
        {
          "source": "4.0 Fetch Housekeeping",
          "target": "D1 Guest DB",
          "label": "Receptionist Data"
        },
        {
          "source": "D1 Guest DB",
          "target": "2.0 Store Housekeeping",
          "label": "Housekeeping Confirmation"
        },
        {
          "source": "2.0 Store Housekeeping",
          "target": "Housekeeping 2",
          "label": "Receptionist Data"
        }
      ]
    }
  },
  {
    "id": 61,
    "title": "Manufacturing Flow (Q61)",
    "category": "Manufacturing",
    "level": "Level 1 DFD",
    "difficulty": "Easy",
    "description": "The '1.0 Review Distributor' sends 'Retailer Invoice' to 'D1 Supplier DB'. The '2.0 Route Quality Control' sends 'Supplier Info' to 'Supplier'. The 'Supplier' sends 'Distributor Confirmation' to '1.0 Review Distributor'. The '2.0 Route Quality Control' sends 'Distributor Response' to 'D1 Supplier DB'. The 'D1 Supplier DB' sends 'Distributor Confirmation' to '1.0 Review Distributor'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Supplier"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Review Distributor"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Route Quality Control"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Supplier DB"
        }
      ],
      "edges": [
        {
          "source": "1.0 Review Distributor",
          "target": "D1 Supplier DB",
          "label": "Retailer Invoice"
        },
        {
          "source": "2.0 Route Quality Control",
          "target": "Supplier",
          "label": "Supplier Info"
        },
        {
          "source": "Supplier",
          "target": "1.0 Review Distributor",
          "label": "Distributor Confirmation"
        },
        {
          "source": "2.0 Route Quality Control",
          "target": "D1 Supplier DB",
          "label": "Distributor Response"
        },
        {
          "source": "D1 Supplier DB",
          "target": "1.0 Review Distributor",
          "label": "Distributor Confirmation"
        }
      ]
    }
  },
  {
    "id": 62,
    "title": "Real Estate Flow (Q62)",
    "category": "Real Estate",
    "level": "Level 1 DFD",
    "difficulty": "Medium",
    "description": "The '3.0 Verify Seller' sends 'Buyer Response' to 'D2 Buyer DB'. The 'Buyer' sends 'Buyer Response' to '2.0 Authorize Buyer'. The '1.0 Generate Contractor' sends 'Bank Invoice' to '2.0 Authorize Buyer'. The 'D1 Bank DB' sends 'Agent Alert' to '2.0 Authorize Buyer'. The '3.0 Verify Seller' sends 'Contractor Request' to 'D1 Bank DB'. The 'D2 Buyer DB' sends 'Contractor Info' to '3.0 Verify Seller'. The '2.0 Authorize Buyer' sends 'Seller Alert' to 'D2 Buyer DB'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Buyer"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Bank 2"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Generate Contractor"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Authorize Buyer"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Verify Seller"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Bank DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Buyer DB"
        }
      ],
      "edges": [
        {
          "source": "3.0 Verify Seller",
          "target": "D2 Buyer DB",
          "label": "Buyer Response"
        },
        {
          "source": "Buyer",
          "target": "2.0 Authorize Buyer",
          "label": "Buyer Response"
        },
        {
          "source": "1.0 Generate Contractor",
          "target": "2.0 Authorize Buyer",
          "label": "Bank Invoice"
        },
        {
          "source": "D1 Bank DB",
          "target": "2.0 Authorize Buyer",
          "label": "Agent Alert"
        },
        {
          "source": "3.0 Verify Seller",
          "target": "D1 Bank DB",
          "label": "Contractor Request"
        },
        {
          "source": "D2 Buyer DB",
          "target": "3.0 Verify Seller",
          "label": "Contractor Info"
        },
        {
          "source": "2.0 Authorize Buyer",
          "target": "D2 Buyer DB",
          "label": "Seller Alert"
        }
      ]
    }
  },
  {
    "id": 63,
    "title": "Healthcare Flow (Q63)",
    "category": "Healthcare",
    "level": "Level 1 DFD",
    "difficulty": "Expert",
    "description": "The '5.0 Calculate Patient' sends 'Pharmacy Metrics' to '1.0 Calculate Doctor'. The '2.0 Verify Patient' sends 'Pharmacy Confirmation' to '5.0 Calculate Patient'. The '5.0 Calculate Patient' sends 'Patient Receipt' to 'Patient 2'. The '4.0 Generate Insurance' sends 'Doctor Request' to '5.0 Calculate Patient'. The '2.0 Verify Patient' sends 'Lab Confirmation' to 'D3 Patient DB'. The 'D3 Patient DB' sends 'Nurse Receipt' to '1.0 Calculate Doctor'. The 'Insurance 3' sends 'Pharmacy Report' to '1.0 Calculate Doctor'. The '3.0 Verify Doctor' sends 'Insurance Request' to 'D2 Pharmacy DB'. The 'D4 Patient DB' sends 'Nurse Invoice' to '4.0 Generate Insurance'. The 'D4 Patient DB' sends 'Pharmacy Invoice' to '2.0 Verify Patient'. The '2.0 Verify Patient' sends 'Lab Details' to 'D1 Insurance DB'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Doctor"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Patient 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Insurance 3"
        },
        {
          "id": "e3",
          "type": "entity",
          "label": "Insurance 4"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Calculate Doctor"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Verify Patient"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Verify Doctor"
        },
        {
          "id": "p3",
          "type": "process",
          "label": "4.0 Generate Insurance"
        },
        {
          "id": "p4",
          "type": "process",
          "label": "5.0 Calculate Patient"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Insurance DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Pharmacy DB"
        },
        {
          "id": "s2",
          "type": "dataStore",
          "label": "D3 Patient DB"
        },
        {
          "id": "s3",
          "type": "dataStore",
          "label": "D4 Patient DB"
        }
      ],
      "edges": [
        {
          "source": "5.0 Calculate Patient",
          "target": "1.0 Calculate Doctor",
          "label": "Pharmacy Metrics"
        },
        {
          "source": "2.0 Verify Patient",
          "target": "5.0 Calculate Patient",
          "label": "Pharmacy Confirmation"
        },
        {
          "source": "5.0 Calculate Patient",
          "target": "Patient 2",
          "label": "Patient Receipt"
        },
        {
          "source": "4.0 Generate Insurance",
          "target": "5.0 Calculate Patient",
          "label": "Doctor Request"
        },
        {
          "source": "2.0 Verify Patient",
          "target": "D3 Patient DB",
          "label": "Lab Confirmation"
        },
        {
          "source": "D3 Patient DB",
          "target": "1.0 Calculate Doctor",
          "label": "Nurse Receipt"
        },
        {
          "source": "Insurance 3",
          "target": "1.0 Calculate Doctor",
          "label": "Pharmacy Report"
        },
        {
          "source": "3.0 Verify Doctor",
          "target": "D2 Pharmacy DB",
          "label": "Insurance Request"
        },
        {
          "source": "D4 Patient DB",
          "target": "4.0 Generate Insurance",
          "label": "Nurse Invoice"
        },
        {
          "source": "D4 Patient DB",
          "target": "2.0 Verify Patient",
          "label": "Pharmacy Invoice"
        },
        {
          "source": "2.0 Verify Patient",
          "target": "D1 Insurance DB",
          "label": "Lab Details"
        }
      ]
    }
  },
  {
    "id": 64,
    "title": "E-commerce Flow (Q64)",
    "category": "E-commerce",
    "level": "Level 1 DFD",
    "difficulty": "Easy",
    "description": "The 'D1 Warehouse DB' sends 'Admin Alert' to '1.0 Calculate Admin'. The 'Shipping Co' sends 'Shipping Co Request' to '1.0 Calculate Admin'. The '1.0 Calculate Admin' sends 'Payment Gateway Confirmation' to '2.0 Schedule Customer'. The '2.0 Schedule Customer' sends 'Payment Gateway Status' to '1.0 Calculate Admin'. The 'Shipping Co' sends 'Shipping Co Data' to '2.0 Schedule Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Shipping Co"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Calculate Admin"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Schedule Customer"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Warehouse DB"
        }
      ],
      "edges": [
        {
          "source": "D1 Warehouse DB",
          "target": "1.0 Calculate Admin",
          "label": "Admin Alert"
        },
        {
          "source": "Shipping Co",
          "target": "1.0 Calculate Admin",
          "label": "Shipping Co Request"
        },
        {
          "source": "1.0 Calculate Admin",
          "target": "2.0 Schedule Customer",
          "label": "Payment Gateway Confirmation"
        },
        {
          "source": "2.0 Schedule Customer",
          "target": "1.0 Calculate Admin",
          "label": "Payment Gateway Status"
        },
        {
          "source": "Shipping Co",
          "target": "2.0 Schedule Customer",
          "label": "Shipping Co Data"
        }
      ]
    }
  },
  {
    "id": 65,
    "title": "Real Estate Flow (Q65)",
    "category": "Real Estate",
    "level": "Level 1 DFD",
    "difficulty": "Easy",
    "description": "The '2.0 Validate Agent' sends 'Buyer Report' to 'D1 Seller DB'. The 'D1 Seller DB' sends 'Contractor Receipt' to '1.0 Authorize Bank'. The 'Bank' sends 'Agent Invoice' to '1.0 Authorize Bank'. The '1.0 Authorize Bank' sends 'Seller Info' to '2.0 Validate Agent'. The 'D1 Seller DB' sends 'Bank Invoice' to '1.0 Authorize Bank'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Bank"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Authorize Bank"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Validate Agent"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Seller DB"
        }
      ],
      "edges": [
        {
          "source": "2.0 Validate Agent",
          "target": "D1 Seller DB",
          "label": "Buyer Report"
        },
        {
          "source": "D1 Seller DB",
          "target": "1.0 Authorize Bank",
          "label": "Contractor Receipt"
        },
        {
          "source": "Bank",
          "target": "1.0 Authorize Bank",
          "label": "Agent Invoice"
        },
        {
          "source": "1.0 Authorize Bank",
          "target": "2.0 Validate Agent",
          "label": "Seller Info"
        },
        {
          "source": "D1 Seller DB",
          "target": "1.0 Authorize Bank",
          "label": "Bank Invoice"
        }
      ]
    }
  },
  {
    "id": 66,
    "title": "Entertainment Flow (Q66)",
    "category": "Entertainment",
    "level": "Level 1 DFD",
    "difficulty": "Hard",
    "description": "The 'D1 Advertiser DB' sends 'User Details' to '2.0 Fetch Studio'. The '1.0 Manage Studio' sends 'Billing System Confirmation' to 'Creator 3'. The '3.0 Schedule User' sends 'Advertiser Invoice' to 'Studio'. The 'D3 Billing System DB' sends 'Advertiser Info' to '4.0 Process Advertiser'. The '4.0 Process Advertiser' sends 'Admin Data' to 'Creator 2'. The 'D1 Advertiser DB' sends 'Studio Data' to '2.0 Fetch Studio'. The '2.0 Fetch Studio' sends 'Studio Metrics' to 'D3 Billing System DB'. The 'Studio' sends 'Admin Data' to '4.0 Process Advertiser'. The 'Creator 3' sends 'Admin Receipt' to '1.0 Manage Studio'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Studio"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Creator 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Creator 3"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Manage Studio"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Fetch Studio"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Schedule User"
        },
        {
          "id": "p3",
          "type": "process",
          "label": "4.0 Process Advertiser"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Advertiser DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Creator DB"
        },
        {
          "id": "s2",
          "type": "dataStore",
          "label": "D3 Billing System DB"
        }
      ],
      "edges": [
        {
          "source": "D1 Advertiser DB",
          "target": "2.0 Fetch Studio",
          "label": "User Details"
        },
        {
          "source": "1.0 Manage Studio",
          "target": "Creator 3",
          "label": "Billing System Confirmation"
        },
        {
          "source": "3.0 Schedule User",
          "target": "Studio",
          "label": "Advertiser Invoice"
        },
        {
          "source": "D3 Billing System DB",
          "target": "4.0 Process Advertiser",
          "label": "Advertiser Info"
        },
        {
          "source": "4.0 Process Advertiser",
          "target": "Creator 2",
          "label": "Admin Data"
        },
        {
          "source": "D1 Advertiser DB",
          "target": "2.0 Fetch Studio",
          "label": "Studio Data"
        },
        {
          "source": "2.0 Fetch Studio",
          "target": "D3 Billing System DB",
          "label": "Studio Metrics"
        },
        {
          "source": "Studio",
          "target": "4.0 Process Advertiser",
          "label": "Admin Data"
        },
        {
          "source": "Creator 3",
          "target": "1.0 Manage Studio",
          "label": "Admin Receipt"
        }
      ]
    }
  },
  {
    "id": 67,
    "title": "Real Estate Flow (Q67)",
    "category": "Real Estate",
    "level": "Level 1 DFD",
    "difficulty": "Easy",
    "description": "The 'Buyer' sends 'Agent Request' to '2.0 Update Seller'. The 'D1 Seller DB' sends 'Inspector Invoice' to '1.0 Schedule Buyer'. The 'D1 Seller DB' sends 'Bank Response' to '2.0 Update Seller'. The 'Buyer' sends 'Contractor Response' to '1.0 Schedule Buyer'. The 'D1 Seller DB' sends 'Inspector Response' to '1.0 Schedule Buyer'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Buyer"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Schedule Buyer"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Update Seller"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Seller DB"
        }
      ],
      "edges": [
        {
          "source": "Buyer",
          "target": "2.0 Update Seller",
          "label": "Agent Request"
        },
        {
          "source": "D1 Seller DB",
          "target": "1.0 Schedule Buyer",
          "label": "Inspector Invoice"
        },
        {
          "source": "D1 Seller DB",
          "target": "2.0 Update Seller",
          "label": "Bank Response"
        },
        {
          "source": "Buyer",
          "target": "1.0 Schedule Buyer",
          "label": "Contractor Response"
        },
        {
          "source": "D1 Seller DB",
          "target": "1.0 Schedule Buyer",
          "label": "Inspector Response"
        }
      ]
    }
  },
  {
    "id": 68,
    "title": "Transport Flow (Q68)",
    "category": "Transport",
    "level": "Level 1 DFD",
    "difficulty": "Hard",
    "description": "The '3.0 Validate Passenger' sends 'Maintenance Status' to 'Driver 3'. The '2.0 Generate Driver' sends 'Dispatch Response' to '4.0 Route Agency'. The 'Driver 3' sends 'Dispatch Details' to '4.0 Route Agency'. The 'Maintenance' sends 'Passenger Report' to '3.0 Validate Passenger'. The '3.0 Validate Passenger' sends 'Agency Details' to 'D2 Maintenance DB'. The '3.0 Validate Passenger' sends 'Agency Data' to 'D1 Driver DB'. The 'Maintenance' sends 'Passenger Receipt' to '3.0 Validate Passenger'. The 'D1 Driver DB' sends 'Payment Gateway Invoice' to '1.0 Validate Dispatch'. The 'Maintenance' sends 'Driver Request' to '4.0 Route Agency'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Maintenance"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Agency 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Driver 3"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Validate Dispatch"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Generate Driver"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Validate Passenger"
        },
        {
          "id": "p3",
          "type": "process",
          "label": "4.0 Route Agency"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Driver DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Maintenance DB"
        },
        {
          "id": "s2",
          "type": "dataStore",
          "label": "D3 Dispatch DB"
        }
      ],
      "edges": [
        {
          "source": "3.0 Validate Passenger",
          "target": "Driver 3",
          "label": "Maintenance Status"
        },
        {
          "source": "2.0 Generate Driver",
          "target": "4.0 Route Agency",
          "label": "Dispatch Response"
        },
        {
          "source": "Driver 3",
          "target": "4.0 Route Agency",
          "label": "Dispatch Details"
        },
        {
          "source": "Maintenance",
          "target": "3.0 Validate Passenger",
          "label": "Passenger Report"
        },
        {
          "source": "3.0 Validate Passenger",
          "target": "D2 Maintenance DB",
          "label": "Agency Details"
        },
        {
          "source": "3.0 Validate Passenger",
          "target": "D1 Driver DB",
          "label": "Agency Data"
        },
        {
          "source": "Maintenance",
          "target": "3.0 Validate Passenger",
          "label": "Passenger Receipt"
        },
        {
          "source": "D1 Driver DB",
          "target": "1.0 Validate Dispatch",
          "label": "Payment Gateway Invoice"
        },
        {
          "source": "Maintenance",
          "target": "4.0 Route Agency",
          "label": "Driver Request"
        }
      ]
    }
  },
  {
    "id": 69,
    "title": "Education Flow (Q69)",
    "category": "Education",
    "level": "Level 1 DFD",
    "difficulty": "Expert",
    "description": "The '4.0 Route Parents' sends 'Parents Response' to '1.0 Process Student'. The '5.0 Verify Library' sends 'Student Receipt' to 'D3 Admin DB'. The '1.0 Process Student' sends 'Teacher Status' to 'D2 Teacher DB'. The '2.0 Review Admin' sends 'Parents Receipt' to '5.0 Verify Library'. The 'Parents 3' sends 'Teacher Confirmation' to '2.0 Review Admin'. The '1.0 Process Student' sends 'Library Alert' to 'Admin'. The '5.0 Verify Library' sends 'Admin Info' to '1.0 Process Student'. The '1.0 Process Student' sends 'Student Receipt' to '5.0 Verify Library'. The 'D4 Teacher DB' sends 'Teacher Alert' to '2.0 Review Admin'. The 'D4 Teacher DB' sends 'Teacher Data' to '4.0 Route Parents'. The '5.0 Verify Library' sends 'Teacher Data' to 'D4 Teacher DB'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Teacher 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Parents 3"
        },
        {
          "id": "e3",
          "type": "entity",
          "label": "Teacher 4"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Process Student"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Review Admin"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Fetch Library"
        },
        {
          "id": "p3",
          "type": "process",
          "label": "4.0 Route Parents"
        },
        {
          "id": "p4",
          "type": "process",
          "label": "5.0 Verify Library"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Admin DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Teacher DB"
        },
        {
          "id": "s2",
          "type": "dataStore",
          "label": "D3 Admin DB"
        },
        {
          "id": "s3",
          "type": "dataStore",
          "label": "D4 Teacher DB"
        }
      ],
      "edges": [
        {
          "source": "4.0 Route Parents",
          "target": "1.0 Process Student",
          "label": "Parents Response"
        },
        {
          "source": "5.0 Verify Library",
          "target": "D3 Admin DB",
          "label": "Student Receipt"
        },
        {
          "source": "1.0 Process Student",
          "target": "D2 Teacher DB",
          "label": "Teacher Status"
        },
        {
          "source": "2.0 Review Admin",
          "target": "5.0 Verify Library",
          "label": "Parents Receipt"
        },
        {
          "source": "Parents 3",
          "target": "2.0 Review Admin",
          "label": "Teacher Confirmation"
        },
        {
          "source": "1.0 Process Student",
          "target": "Admin",
          "label": "Library Alert"
        },
        {
          "source": "5.0 Verify Library",
          "target": "1.0 Process Student",
          "label": "Admin Info"
        },
        {
          "source": "1.0 Process Student",
          "target": "5.0 Verify Library",
          "label": "Student Receipt"
        },
        {
          "source": "D4 Teacher DB",
          "target": "2.0 Review Admin",
          "label": "Teacher Alert"
        },
        {
          "source": "D4 Teacher DB",
          "target": "4.0 Route Parents",
          "label": "Teacher Data"
        },
        {
          "source": "5.0 Verify Library",
          "target": "D4 Teacher DB",
          "label": "Teacher Data"
        }
      ]
    }
  },
  {
    "id": 70,
    "title": "Healthcare Flow (Q70)",
    "category": "Healthcare",
    "level": "Level 1 DFD",
    "difficulty": "Easy",
    "description": "The '1.0 Schedule Insurance' sends 'Nurse Receipt' to 'Nurse'. The 'Nurse' sends 'Nurse Status' to '2.0 Verify Doctor'. The '1.0 Schedule Insurance' sends 'Pharmacy Info' to 'Nurse'. The 'D1 Pharmacy DB' sends 'Lab Info' to '2.0 Verify Doctor'. The '1.0 Schedule Insurance' sends 'Pharmacy Confirmation' to 'Nurse'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Nurse"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Schedule Insurance"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Verify Doctor"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Pharmacy DB"
        }
      ],
      "edges": [
        {
          "source": "1.0 Schedule Insurance",
          "target": "Nurse",
          "label": "Nurse Receipt"
        },
        {
          "source": "Nurse",
          "target": "2.0 Verify Doctor",
          "label": "Nurse Status"
        },
        {
          "source": "1.0 Schedule Insurance",
          "target": "Nurse",
          "label": "Pharmacy Info"
        },
        {
          "source": "D1 Pharmacy DB",
          "target": "2.0 Verify Doctor",
          "label": "Lab Info"
        },
        {
          "source": "1.0 Schedule Insurance",
          "target": "Nurse",
          "label": "Pharmacy Confirmation"
        }
      ]
    }
  },
  {
    "id": 71,
    "title": "E-commerce Flow (Q71)",
    "category": "E-commerce",
    "level": "Level 1 DFD",
    "difficulty": "Hard",
    "description": "The 'Warehouse 3' sends 'Admin Info' to '4.0 Review Payment Gateway'. The '3.0 Manage Supplier' sends 'Customer Invoice' to 'D3 Admin DB'. The 'Warehouse' sends 'Supplier Invoice' to '1.0 Generate Warehouse'. The 'D1 Shipping Co DB' sends 'Payment Gateway Request' to '3.0 Manage Supplier'. The '4.0 Review Payment Gateway' sends 'Payment Gateway Data' to '2.0 Store Supplier'. The 'Warehouse' sends 'Shipping Co Response' to '3.0 Manage Supplier'. The 'Warehouse' sends 'Supplier Info' to '4.0 Review Payment Gateway'. The '1.0 Generate Warehouse' sends 'Warehouse Metrics' to '3.0 Manage Supplier'. The '3.0 Manage Supplier' sends 'Payment Gateway Confirmation' to 'D2 Customer DB'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Warehouse"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Payment Gateway 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Warehouse 3"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Generate Warehouse"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Store Supplier"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Manage Supplier"
        },
        {
          "id": "p3",
          "type": "process",
          "label": "4.0 Review Payment Gateway"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Shipping Co DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Customer DB"
        },
        {
          "id": "s2",
          "type": "dataStore",
          "label": "D3 Admin DB"
        }
      ],
      "edges": [
        {
          "source": "Warehouse 3",
          "target": "4.0 Review Payment Gateway",
          "label": "Admin Info"
        },
        {
          "source": "3.0 Manage Supplier",
          "target": "D3 Admin DB",
          "label": "Customer Invoice"
        },
        {
          "source": "Warehouse",
          "target": "1.0 Generate Warehouse",
          "label": "Supplier Invoice"
        },
        {
          "source": "D1 Shipping Co DB",
          "target": "3.0 Manage Supplier",
          "label": "Payment Gateway Request"
        },
        {
          "source": "4.0 Review Payment Gateway",
          "target": "2.0 Store Supplier",
          "label": "Payment Gateway Data"
        },
        {
          "source": "Warehouse",
          "target": "3.0 Manage Supplier",
          "label": "Shipping Co Response"
        },
        {
          "source": "Warehouse",
          "target": "4.0 Review Payment Gateway",
          "label": "Supplier Info"
        },
        {
          "source": "1.0 Generate Warehouse",
          "target": "3.0 Manage Supplier",
          "label": "Warehouse Metrics"
        },
        {
          "source": "3.0 Manage Supplier",
          "target": "D2 Customer DB",
          "label": "Payment Gateway Confirmation"
        }
      ]
    }
  },
  {
    "id": 72,
    "title": "Banking Flow (Q72)",
    "category": "Banking",
    "level": "Level 1 DFD",
    "difficulty": "Easy",
    "description": "The '2.0 Review Customer' sends 'Credit Agency Invoice' to 'D1 ATM DB'. The '2.0 Review Customer' sends 'ATM Report' to 'D1 ATM DB'. The '2.0 Review Customer' sends 'Credit Agency Confirmation' to 'Central Bank'. The '1.0 Authorize Teller' sends 'Manager Metrics' to 'Central Bank'. The '1.0 Authorize Teller' sends 'Credit Agency Request' to 'D1 ATM DB'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Central Bank"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Authorize Teller"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Review Customer"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 ATM DB"
        }
      ],
      "edges": [
        {
          "source": "2.0 Review Customer",
          "target": "D1 ATM DB",
          "label": "Credit Agency Invoice"
        },
        {
          "source": "2.0 Review Customer",
          "target": "D1 ATM DB",
          "label": "ATM Report"
        },
        {
          "source": "2.0 Review Customer",
          "target": "Central Bank",
          "label": "Credit Agency Confirmation"
        },
        {
          "source": "1.0 Authorize Teller",
          "target": "Central Bank",
          "label": "Manager Metrics"
        },
        {
          "source": "1.0 Authorize Teller",
          "target": "D1 ATM DB",
          "label": "Credit Agency Request"
        }
      ]
    }
  },
  {
    "id": 73,
    "title": "Banking Flow (Q73)",
    "category": "Banking",
    "level": "Level 1 DFD",
    "difficulty": "Medium",
    "description": "The '1.0 Manage Teller' sends 'Customer Request' to '2.0 Calculate Manager'. The 'D2 Credit Agency DB' sends 'ATM Response' to '1.0 Manage Teller'. The '2.0 Calculate Manager' sends 'Manager Alert' to 'D1 Manager DB'. The 'D2 Credit Agency DB' sends 'Central Bank Info' to '2.0 Calculate Manager'. The '3.0 Route Manager' sends 'Manager Metrics' to 'ATM 2'. The '2.0 Calculate Manager' sends 'Customer Confirmation' to 'ATM 2'. The 'ATM 2' sends 'Central Bank Alert' to '3.0 Route Manager'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "ATM"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "ATM 2"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Manage Teller"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Calculate Manager"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Route Manager"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Manager DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Credit Agency DB"
        }
      ],
      "edges": [
        {
          "source": "1.0 Manage Teller",
          "target": "2.0 Calculate Manager",
          "label": "Customer Request"
        },
        {
          "source": "D2 Credit Agency DB",
          "target": "1.0 Manage Teller",
          "label": "ATM Response"
        },
        {
          "source": "2.0 Calculate Manager",
          "target": "D1 Manager DB",
          "label": "Manager Alert"
        },
        {
          "source": "D2 Credit Agency DB",
          "target": "2.0 Calculate Manager",
          "label": "Central Bank Info"
        },
        {
          "source": "3.0 Route Manager",
          "target": "ATM 2",
          "label": "Manager Metrics"
        },
        {
          "source": "2.0 Calculate Manager",
          "target": "ATM 2",
          "label": "Customer Confirmation"
        },
        {
          "source": "ATM 2",
          "target": "3.0 Route Manager",
          "label": "Central Bank Alert"
        }
      ]
    }
  },
  {
    "id": 74,
    "title": "Banking Flow (Q74)",
    "category": "Banking",
    "level": "Level 1 DFD",
    "difficulty": "Easy",
    "description": "The '1.0 Route Central Bank' sends 'ATM Status' to 'D1 ATM DB'. The 'D1 ATM DB' sends 'Credit Agency Request' to '2.0 Validate Teller'. The 'D1 ATM DB' sends 'Central Bank Status' to '1.0 Route Central Bank'. The 'D1 ATM DB' sends 'Customer Data' to '1.0 Route Central Bank'. The '2.0 Validate Teller' sends 'Teller Status' to '1.0 Route Central Bank'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Teller"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Route Central Bank"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Validate Teller"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 ATM DB"
        }
      ],
      "edges": [
        {
          "source": "1.0 Route Central Bank",
          "target": "D1 ATM DB",
          "label": "ATM Status"
        },
        {
          "source": "D1 ATM DB",
          "target": "2.0 Validate Teller",
          "label": "Credit Agency Request"
        },
        {
          "source": "D1 ATM DB",
          "target": "1.0 Route Central Bank",
          "label": "Central Bank Status"
        },
        {
          "source": "D1 ATM DB",
          "target": "1.0 Route Central Bank",
          "label": "Customer Data"
        },
        {
          "source": "2.0 Validate Teller",
          "target": "1.0 Route Central Bank",
          "label": "Teller Status"
        }
      ]
    }
  },
  {
    "id": 75,
    "title": "Manufacturing Flow (Q75)",
    "category": "Manufacturing",
    "level": "Level 1 DFD",
    "difficulty": "Hard",
    "description": "The '1.0 Update Distributor' sends 'Worker Metrics' to 'D3 Supplier DB'. The 'Management' sends 'Supplier Details' to '1.0 Update Distributor'. The 'Distributor 2' sends 'Quality Control Data' to '4.0 Manage Retailer'. The 'Quality Control 3' sends 'Management Receipt' to '3.0 Store Supplier'. The 'D1 Distributor DB' sends 'Quality Control Response' to '4.0 Manage Retailer'. The 'Distributor 2' sends 'Management Alert' to '3.0 Store Supplier'. The '2.0 Process Worker' sends 'Quality Control Invoice' to 'D3 Supplier DB'. The 'Management' sends 'Worker Data' to '4.0 Manage Retailer'. The '4.0 Manage Retailer' sends 'Distributor Info' to '3.0 Store Supplier'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Management"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Distributor 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Quality Control 3"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Update Distributor"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Process Worker"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Store Supplier"
        },
        {
          "id": "p3",
          "type": "process",
          "label": "4.0 Manage Retailer"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Distributor DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Distributor DB"
        },
        {
          "id": "s2",
          "type": "dataStore",
          "label": "D3 Supplier DB"
        }
      ],
      "edges": [
        {
          "source": "1.0 Update Distributor",
          "target": "D3 Supplier DB",
          "label": "Worker Metrics"
        },
        {
          "source": "Management",
          "target": "1.0 Update Distributor",
          "label": "Supplier Details"
        },
        {
          "source": "Distributor 2",
          "target": "4.0 Manage Retailer",
          "label": "Quality Control Data"
        },
        {
          "source": "Quality Control 3",
          "target": "3.0 Store Supplier",
          "label": "Management Receipt"
        },
        {
          "source": "D1 Distributor DB",
          "target": "4.0 Manage Retailer",
          "label": "Quality Control Response"
        },
        {
          "source": "Distributor 2",
          "target": "3.0 Store Supplier",
          "label": "Management Alert"
        },
        {
          "source": "2.0 Process Worker",
          "target": "D3 Supplier DB",
          "label": "Quality Control Invoice"
        },
        {
          "source": "Management",
          "target": "4.0 Manage Retailer",
          "label": "Worker Data"
        },
        {
          "source": "4.0 Manage Retailer",
          "target": "3.0 Store Supplier",
          "label": "Distributor Info"
        }
      ]
    }
  },
  {
    "id": 76,
    "title": "Manufacturing Flow (Q76)",
    "category": "Manufacturing",
    "level": "Level 1 DFD",
    "difficulty": "Medium",
    "description": "The 'D2 Distributor DB' sends 'Distributor Response' to '3.0 Authorize Retailer'. The 'D1 Quality Control DB' sends 'Management Metrics' to '3.0 Authorize Retailer'. The 'Supplier 2' sends 'Retailer Data' to '3.0 Authorize Retailer'. The '2.0 Fetch Supplier' sends 'Quality Control Info' to 'D2 Distributor DB'. The '1.0 Verify Supplier' sends 'Quality Control Receipt' to 'Management'. The 'D2 Distributor DB' sends 'Distributor Metrics' to '3.0 Authorize Retailer'. The '3.0 Authorize Retailer' sends 'Supplier Receipt' to 'D2 Distributor DB'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Management"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Supplier 2"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Verify Supplier"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Fetch Supplier"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Authorize Retailer"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Quality Control DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Distributor DB"
        }
      ],
      "edges": [
        {
          "source": "D2 Distributor DB",
          "target": "3.0 Authorize Retailer",
          "label": "Distributor Response"
        },
        {
          "source": "D1 Quality Control DB",
          "target": "3.0 Authorize Retailer",
          "label": "Management Metrics"
        },
        {
          "source": "Supplier 2",
          "target": "3.0 Authorize Retailer",
          "label": "Retailer Data"
        },
        {
          "source": "2.0 Fetch Supplier",
          "target": "D2 Distributor DB",
          "label": "Quality Control Info"
        },
        {
          "source": "1.0 Verify Supplier",
          "target": "Management",
          "label": "Quality Control Receipt"
        },
        {
          "source": "D2 Distributor DB",
          "target": "3.0 Authorize Retailer",
          "label": "Distributor Metrics"
        },
        {
          "source": "3.0 Authorize Retailer",
          "target": "D2 Distributor DB",
          "label": "Supplier Receipt"
        }
      ]
    }
  },
  {
    "id": 77,
    "title": "Manufacturing Flow (Q77)",
    "category": "Manufacturing",
    "level": "Level 1 DFD",
    "difficulty": "Expert",
    "description": "The '3.0 Validate Retailer' sends 'Quality Control Confirmation' to '2.0 Fetch Distributor'. The 'Worker 3' sends 'Worker Alert' to '2.0 Fetch Distributor'. The 'Quality Control' sends 'Quality Control Receipt' to '1.0 Process Worker'. The 'D3 Worker DB' sends 'Supplier Metrics' to '5.0 Validate Management'. The 'D1 Distributor DB' sends 'Management Data' to '2.0 Fetch Distributor'. The '5.0 Validate Management' sends 'Supplier Alert' to 'D2 Quality Control DB'. The '4.0 Handle Distributor' sends 'Worker Receipt' to 'D4 Distributor DB'. The 'Quality Control 4' sends 'Quality Control Confirmation' to '2.0 Fetch Distributor'. The 'D2 Quality Control DB' sends 'Retailer Alert' to '4.0 Handle Distributor'. The 'D4 Distributor DB' sends 'Management Status' to '1.0 Process Worker'. The 'D3 Worker DB' sends 'Distributor Status' to '1.0 Process Worker'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Quality Control"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Worker 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Worker 3"
        },
        {
          "id": "e3",
          "type": "entity",
          "label": "Quality Control 4"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Process Worker"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Fetch Distributor"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Validate Retailer"
        },
        {
          "id": "p3",
          "type": "process",
          "label": "4.0 Handle Distributor"
        },
        {
          "id": "p4",
          "type": "process",
          "label": "5.0 Validate Management"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Distributor DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Quality Control DB"
        },
        {
          "id": "s2",
          "type": "dataStore",
          "label": "D3 Worker DB"
        },
        {
          "id": "s3",
          "type": "dataStore",
          "label": "D4 Distributor DB"
        }
      ],
      "edges": [
        {
          "source": "3.0 Validate Retailer",
          "target": "2.0 Fetch Distributor",
          "label": "Quality Control Confirmation"
        },
        {
          "source": "Worker 3",
          "target": "2.0 Fetch Distributor",
          "label": "Worker Alert"
        },
        {
          "source": "Quality Control",
          "target": "1.0 Process Worker",
          "label": "Quality Control Receipt"
        },
        {
          "source": "D3 Worker DB",
          "target": "5.0 Validate Management",
          "label": "Supplier Metrics"
        },
        {
          "source": "D1 Distributor DB",
          "target": "2.0 Fetch Distributor",
          "label": "Management Data"
        },
        {
          "source": "5.0 Validate Management",
          "target": "D2 Quality Control DB",
          "label": "Supplier Alert"
        },
        {
          "source": "4.0 Handle Distributor",
          "target": "D4 Distributor DB",
          "label": "Worker Receipt"
        },
        {
          "source": "Quality Control 4",
          "target": "2.0 Fetch Distributor",
          "label": "Quality Control Confirmation"
        },
        {
          "source": "D2 Quality Control DB",
          "target": "4.0 Handle Distributor",
          "label": "Retailer Alert"
        },
        {
          "source": "D4 Distributor DB",
          "target": "1.0 Process Worker",
          "label": "Management Status"
        },
        {
          "source": "D3 Worker DB",
          "target": "1.0 Process Worker",
          "label": "Distributor Status"
        }
      ]
    }
  },
  {
    "id": 78,
    "title": "Transport Flow (Q78)",
    "category": "Transport",
    "level": "Level 1 DFD",
    "difficulty": "Easy",
    "description": "The 'D1 Driver DB' sends 'Dispatch Report' to '2.0 Manage Dispatch'. The 'Maintenance' sends 'Driver Invoice' to '2.0 Manage Dispatch'. The 'Maintenance' sends 'Payment Gateway Data' to '1.0 Schedule Agency'. The 'Maintenance' sends 'Maintenance Details' to '2.0 Manage Dispatch'. The '2.0 Manage Dispatch' sends 'Driver Report' to 'D1 Driver DB'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Maintenance"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Schedule Agency"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Manage Dispatch"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Driver DB"
        }
      ],
      "edges": [
        {
          "source": "D1 Driver DB",
          "target": "2.0 Manage Dispatch",
          "label": "Dispatch Report"
        },
        {
          "source": "Maintenance",
          "target": "2.0 Manage Dispatch",
          "label": "Driver Invoice"
        },
        {
          "source": "Maintenance",
          "target": "1.0 Schedule Agency",
          "label": "Payment Gateway Data"
        },
        {
          "source": "Maintenance",
          "target": "2.0 Manage Dispatch",
          "label": "Maintenance Details"
        },
        {
          "source": "2.0 Manage Dispatch",
          "target": "D1 Driver DB",
          "label": "Driver Report"
        }
      ]
    }
  },
  {
    "id": 79,
    "title": "Education Flow (Q79)",
    "category": "Education",
    "level": "Level 1 DFD",
    "difficulty": "Hard",
    "description": "The 'D2 Ministry DB' sends 'Parents Details' to '2.0 Generate Ministry'. The '1.0 Store Admin' sends 'Admin Details' to '2.0 Generate Ministry'. The '4.0 Generate Admin' sends 'Admin Request' to 'Library'. The '2.0 Generate Ministry' sends 'Student Details' to 'Library'. The 'D2 Ministry DB' sends 'Parents Details' to '2.0 Generate Ministry'. The 'D1 Parents DB' sends 'Student Request' to '1.0 Store Admin'. The 'D2 Ministry DB' sends 'Student Data' to '1.0 Store Admin'. The 'Admin 3' sends 'Library Confirmation' to '4.0 Generate Admin'. The '1.0 Store Admin' sends 'Admin Response' to 'Admin 3'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Library"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Student 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Admin 3"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Store Admin"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Generate Ministry"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Generate Library"
        },
        {
          "id": "p3",
          "type": "process",
          "label": "4.0 Generate Admin"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Parents DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Ministry DB"
        },
        {
          "id": "s2",
          "type": "dataStore",
          "label": "D3 Teacher DB"
        }
      ],
      "edges": [
        {
          "source": "D2 Ministry DB",
          "target": "2.0 Generate Ministry",
          "label": "Parents Details"
        },
        {
          "source": "1.0 Store Admin",
          "target": "2.0 Generate Ministry",
          "label": "Admin Details"
        },
        {
          "source": "4.0 Generate Admin",
          "target": "Library",
          "label": "Admin Request"
        },
        {
          "source": "2.0 Generate Ministry",
          "target": "Library",
          "label": "Student Details"
        },
        {
          "source": "D2 Ministry DB",
          "target": "2.0 Generate Ministry",
          "label": "Parents Details"
        },
        {
          "source": "D1 Parents DB",
          "target": "1.0 Store Admin",
          "label": "Student Request"
        },
        {
          "source": "D2 Ministry DB",
          "target": "1.0 Store Admin",
          "label": "Student Data"
        },
        {
          "source": "Admin 3",
          "target": "4.0 Generate Admin",
          "label": "Library Confirmation"
        },
        {
          "source": "1.0 Store Admin",
          "target": "Admin 3",
          "label": "Admin Response"
        }
      ]
    }
  },
  {
    "id": 80,
    "title": "Entertainment Flow (Q80)",
    "category": "Entertainment",
    "level": "Level 2 DFD",
    "difficulty": "Hard",
    "description": "The '1.0 Route Admin' sends 'Studio Request' to 'Advertiser'. The 'Advertiser' sends 'Advertiser Details' to '4.0 Fetch User'. The 'Advertiser' sends 'User Receipt' to '3.0 Generate User'. The 'Advertiser' sends 'Admin Response' to '4.0 Fetch User'. The 'D1 User DB' sends 'Billing System Data' to '3.0 Generate User'. The 'D1 User DB' sends 'Billing System Info' to '2.0 Fetch Studio'. The 'D1 User DB' sends 'Admin Alert' to '2.0 Fetch Studio'. The 'D1 User DB' sends 'Billing System Status' to '4.0 Fetch User'. The '3.0 Generate User' sends 'User Request' to '2.0 Fetch Studio'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Advertiser"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Creator 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Billing System 3"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Route Admin"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Fetch Studio"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Generate User"
        },
        {
          "id": "p3",
          "type": "process",
          "label": "4.0 Fetch User"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 User DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Creator DB"
        },
        {
          "id": "s2",
          "type": "dataStore",
          "label": "D3 Studio DB"
        }
      ],
      "edges": [
        {
          "source": "1.0 Route Admin",
          "target": "Advertiser",
          "label": "Studio Request"
        },
        {
          "source": "Advertiser",
          "target": "4.0 Fetch User",
          "label": "Advertiser Details"
        },
        {
          "source": "Advertiser",
          "target": "3.0 Generate User",
          "label": "User Receipt"
        },
        {
          "source": "Advertiser",
          "target": "4.0 Fetch User",
          "label": "Admin Response"
        },
        {
          "source": "D1 User DB",
          "target": "3.0 Generate User",
          "label": "Billing System Data"
        },
        {
          "source": "D1 User DB",
          "target": "2.0 Fetch Studio",
          "label": "Billing System Info"
        },
        {
          "source": "D1 User DB",
          "target": "2.0 Fetch Studio",
          "label": "Admin Alert"
        },
        {
          "source": "D1 User DB",
          "target": "4.0 Fetch User",
          "label": "Billing System Status"
        },
        {
          "source": "3.0 Generate User",
          "target": "2.0 Fetch Studio",
          "label": "User Request"
        }
      ]
    }
  },
  {
    "id": 81,
    "title": "Entertainment Flow (Q81)",
    "category": "Entertainment",
    "level": "Level 2 DFD",
    "difficulty": "Hard",
    "description": "The '1.0 Validate Billing System' sends 'Billing System Invoice' to 'Studio 2'. The 'Advertiser' sends 'Studio Data' to '2.0 Manage Creator'. The 'Advertiser' sends 'User Response' to '2.0 Manage Creator'. The '4.0 Fetch Billing System' sends 'Studio Confirmation' to 'D2 User DB'. The 'User 3' sends 'Admin Report' to '3.0 Schedule Billing System'. The 'D2 User DB' sends 'Studio Invoice' to '1.0 Validate Billing System'. The '3.0 Schedule Billing System' sends 'Studio Invoice' to 'User 3'. The 'Advertiser' sends 'Studio Metrics' to '3.0 Schedule Billing System'. The 'D2 User DB' sends 'Billing System Invoice' to '3.0 Schedule Billing System'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Advertiser"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Studio 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "User 3"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Validate Billing System"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Manage Creator"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Schedule Billing System"
        },
        {
          "id": "p3",
          "type": "process",
          "label": "4.0 Fetch Billing System"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Studio DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 User DB"
        },
        {
          "id": "s2",
          "type": "dataStore",
          "label": "D3 Admin DB"
        }
      ],
      "edges": [
        {
          "source": "1.0 Validate Billing System",
          "target": "Studio 2",
          "label": "Billing System Invoice"
        },
        {
          "source": "Advertiser",
          "target": "2.0 Manage Creator",
          "label": "Studio Data"
        },
        {
          "source": "Advertiser",
          "target": "2.0 Manage Creator",
          "label": "User Response"
        },
        {
          "source": "4.0 Fetch Billing System",
          "target": "D2 User DB",
          "label": "Studio Confirmation"
        },
        {
          "source": "User 3",
          "target": "3.0 Schedule Billing System",
          "label": "Admin Report"
        },
        {
          "source": "D2 User DB",
          "target": "1.0 Validate Billing System",
          "label": "Studio Invoice"
        },
        {
          "source": "3.0 Schedule Billing System",
          "target": "User 3",
          "label": "Studio Invoice"
        },
        {
          "source": "Advertiser",
          "target": "3.0 Schedule Billing System",
          "label": "Studio Metrics"
        },
        {
          "source": "D2 User DB",
          "target": "3.0 Schedule Billing System",
          "label": "Billing System Invoice"
        }
      ]
    }
  },
  {
    "id": 82,
    "title": "Real Estate Flow (Q82)",
    "category": "Real Estate",
    "level": "Level 2 DFD",
    "difficulty": "Expert",
    "description": "The 'D3 Contractor DB' sends 'Inspector Response' to '2.0 Verify Bank'. The '3.0 Update Inspector' sends 'Seller Data' to 'Contractor 4'. The '2.0 Verify Bank' sends 'Contractor Alert' to 'Contractor 4'. The '3.0 Update Inspector' sends 'Agent Invoice' to 'Contractor 2'. The 'D4 Seller DB' sends 'Bank Report' to '5.0 Process Agent'. The 'D4 Seller DB' sends 'Contractor Metrics' to '1.0 Cancel Inspector'. The '2.0 Verify Bank' sends 'Seller Report' to '5.0 Process Agent'. The '5.0 Process Agent' sends 'Contractor Report' to 'D3 Contractor DB'. The 'D3 Contractor DB' sends 'Contractor Data' to '4.0 Review Bank'. The 'Contractor 4' sends 'Contractor Request' to '1.0 Cancel Inspector'. The '1.0 Cancel Inspector' sends 'Bank Info' to 'D4 Seller DB'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Seller"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Contractor 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Seller 3"
        },
        {
          "id": "e3",
          "type": "entity",
          "label": "Contractor 4"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Cancel Inspector"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Verify Bank"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Update Inspector"
        },
        {
          "id": "p3",
          "type": "process",
          "label": "4.0 Review Bank"
        },
        {
          "id": "p4",
          "type": "process",
          "label": "5.0 Process Agent"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Seller DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Bank DB"
        },
        {
          "id": "s2",
          "type": "dataStore",
          "label": "D3 Contractor DB"
        },
        {
          "id": "s3",
          "type": "dataStore",
          "label": "D4 Seller DB"
        }
      ],
      "edges": [
        {
          "source": "D3 Contractor DB",
          "target": "2.0 Verify Bank",
          "label": "Inspector Response"
        },
        {
          "source": "3.0 Update Inspector",
          "target": "Contractor 4",
          "label": "Seller Data"
        },
        {
          "source": "2.0 Verify Bank",
          "target": "Contractor 4",
          "label": "Contractor Alert"
        },
        {
          "source": "3.0 Update Inspector",
          "target": "Contractor 2",
          "label": "Agent Invoice"
        },
        {
          "source": "D4 Seller DB",
          "target": "5.0 Process Agent",
          "label": "Bank Report"
        },
        {
          "source": "D4 Seller DB",
          "target": "1.0 Cancel Inspector",
          "label": "Contractor Metrics"
        },
        {
          "source": "2.0 Verify Bank",
          "target": "5.0 Process Agent",
          "label": "Seller Report"
        },
        {
          "source": "5.0 Process Agent",
          "target": "D3 Contractor DB",
          "label": "Contractor Report"
        },
        {
          "source": "D3 Contractor DB",
          "target": "4.0 Review Bank",
          "label": "Contractor Data"
        },
        {
          "source": "Contractor 4",
          "target": "1.0 Cancel Inspector",
          "label": "Contractor Request"
        },
        {
          "source": "1.0 Cancel Inspector",
          "target": "D4 Seller DB",
          "label": "Bank Info"
        }
      ]
    }
  },
  {
    "id": 83,
    "title": "Manufacturing Flow (Q83)",
    "category": "Manufacturing",
    "level": "Level 2 DFD",
    "difficulty": "Easy",
    "description": "The 'Management' sends 'Distributor Report' to '2.0 Route Management'. The '2.0 Route Management' sends 'Quality Control Response' to 'Management'. The 'D1 Quality Control DB' sends 'Supplier Status' to '1.0 Manage Retailer'. The 'Management' sends 'Supplier Report' to '1.0 Manage Retailer'. The 'Management' sends 'Distributor Metrics' to '1.0 Manage Retailer'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Management"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Manage Retailer"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Route Management"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Quality Control DB"
        }
      ],
      "edges": [
        {
          "source": "Management",
          "target": "2.0 Route Management",
          "label": "Distributor Report"
        },
        {
          "source": "2.0 Route Management",
          "target": "Management",
          "label": "Quality Control Response"
        },
        {
          "source": "D1 Quality Control DB",
          "target": "1.0 Manage Retailer",
          "label": "Supplier Status"
        },
        {
          "source": "Management",
          "target": "1.0 Manage Retailer",
          "label": "Supplier Report"
        },
        {
          "source": "Management",
          "target": "1.0 Manage Retailer",
          "label": "Distributor Metrics"
        }
      ]
    }
  },
  {
    "id": 84,
    "title": "Healthcare Flow (Q84)",
    "category": "Healthcare",
    "level": "Level 2 DFD",
    "difficulty": "Expert",
    "description": "The 'Pharmacy' sends 'Patient Confirmation' to '5.0 Handle Patient'. The 'Pharmacy' sends 'Lab Alert' to '4.0 Manage Doctor'. The '3.0 Handle Nurse' sends 'Insurance Report' to 'D3 Insurance DB'. The 'D3 Insurance DB' sends 'Doctor Report' to '4.0 Manage Doctor'. The 'D4 Nurse DB' sends 'Pharmacy Alert' to '1.0 Update Doctor'. The 'D1 Pharmacy DB' sends 'Nurse Invoice' to '4.0 Manage Doctor'. The '3.0 Handle Nurse' sends 'Insurance Confirmation' to 'Nurse 2'. The 'D2 Insurance DB' sends 'Pharmacy Receipt' to '5.0 Handle Patient'. The 'D2 Insurance DB' sends 'Patient Info' to '2.0 Fetch Insurance'. The '4.0 Manage Doctor' sends 'Patient Alert' to 'D4 Nurse DB'. The '4.0 Manage Doctor' sends 'Insurance Response' to 'Insurance 4'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Pharmacy"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Nurse 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Lab 3"
        },
        {
          "id": "e3",
          "type": "entity",
          "label": "Insurance 4"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Update Doctor"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Fetch Insurance"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Handle Nurse"
        },
        {
          "id": "p3",
          "type": "process",
          "label": "4.0 Manage Doctor"
        },
        {
          "id": "p4",
          "type": "process",
          "label": "5.0 Handle Patient"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Pharmacy DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Insurance DB"
        },
        {
          "id": "s2",
          "type": "dataStore",
          "label": "D3 Insurance DB"
        },
        {
          "id": "s3",
          "type": "dataStore",
          "label": "D4 Nurse DB"
        }
      ],
      "edges": [
        {
          "source": "Pharmacy",
          "target": "5.0 Handle Patient",
          "label": "Patient Confirmation"
        },
        {
          "source": "Pharmacy",
          "target": "4.0 Manage Doctor",
          "label": "Lab Alert"
        },
        {
          "source": "3.0 Handle Nurse",
          "target": "D3 Insurance DB",
          "label": "Insurance Report"
        },
        {
          "source": "D3 Insurance DB",
          "target": "4.0 Manage Doctor",
          "label": "Doctor Report"
        },
        {
          "source": "D4 Nurse DB",
          "target": "1.0 Update Doctor",
          "label": "Pharmacy Alert"
        },
        {
          "source": "D1 Pharmacy DB",
          "target": "4.0 Manage Doctor",
          "label": "Nurse Invoice"
        },
        {
          "source": "3.0 Handle Nurse",
          "target": "Nurse 2",
          "label": "Insurance Confirmation"
        },
        {
          "source": "D2 Insurance DB",
          "target": "5.0 Handle Patient",
          "label": "Pharmacy Receipt"
        },
        {
          "source": "D2 Insurance DB",
          "target": "2.0 Fetch Insurance",
          "label": "Patient Info"
        },
        {
          "source": "4.0 Manage Doctor",
          "target": "D4 Nurse DB",
          "label": "Patient Alert"
        },
        {
          "source": "4.0 Manage Doctor",
          "target": "Insurance 4",
          "label": "Insurance Response"
        }
      ]
    }
  },
  {
    "id": 85,
    "title": "Entertainment Flow (Q85)",
    "category": "Entertainment",
    "level": "Level 2 DFD",
    "difficulty": "Medium",
    "description": "The '3.0 Store Advertiser' sends 'Advertiser Alert' to '1.0 Schedule Creator'. The '2.0 Process Studio' sends 'Admin Metrics' to '3.0 Store Advertiser'. The 'User' sends 'Advertiser Request' to '1.0 Schedule Creator'. The 'Studio 2' sends 'Billing System Info' to '2.0 Process Studio'. The '1.0 Schedule Creator' sends 'Studio Info' to '2.0 Process Studio'. The 'D1 Billing System DB' sends 'Billing System Receipt' to '2.0 Process Studio'. The 'Studio 2' sends 'Billing System Info' to '2.0 Process Studio'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Studio 2"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Schedule Creator"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Process Studio"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Store Advertiser"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Billing System DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Advertiser DB"
        }
      ],
      "edges": [
        {
          "source": "3.0 Store Advertiser",
          "target": "1.0 Schedule Creator",
          "label": "Advertiser Alert"
        },
        {
          "source": "2.0 Process Studio",
          "target": "3.0 Store Advertiser",
          "label": "Admin Metrics"
        },
        {
          "source": "User",
          "target": "1.0 Schedule Creator",
          "label": "Advertiser Request"
        },
        {
          "source": "Studio 2",
          "target": "2.0 Process Studio",
          "label": "Billing System Info"
        },
        {
          "source": "1.0 Schedule Creator",
          "target": "2.0 Process Studio",
          "label": "Studio Info"
        },
        {
          "source": "D1 Billing System DB",
          "target": "2.0 Process Studio",
          "label": "Billing System Receipt"
        },
        {
          "source": "Studio 2",
          "target": "2.0 Process Studio",
          "label": "Billing System Info"
        }
      ]
    }
  },
  {
    "id": 86,
    "title": "Banking Flow (Q86)",
    "category": "Banking",
    "level": "Level 2 DFD",
    "difficulty": "Hard",
    "description": "The '1.0 Route Customer' sends 'Customer Alert' to 'D2 Credit Agency DB'. The '2.0 Update Teller' sends 'Teller Receipt' to 'Teller 2'. The 'D2 Credit Agency DB' sends 'Manager Response' to '4.0 Store Credit Agency'. The 'Customer' sends 'Central Bank Receipt' to '2.0 Update Teller'. The 'Customer' sends 'Central Bank Invoice' to '1.0 Route Customer'. The '1.0 Route Customer' sends 'Manager Report' to '4.0 Store Credit Agency'. The '3.0 Schedule Central Bank' sends 'Manager Response' to 'D2 Credit Agency DB'. The 'Customer' sends 'Customer Invoice' to '3.0 Schedule Central Bank'. The 'D3 Credit Agency DB' sends 'Credit Agency Request' to '1.0 Route Customer'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Customer"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Teller 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Teller 3"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Route Customer"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Update Teller"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Schedule Central Bank"
        },
        {
          "id": "p3",
          "type": "process",
          "label": "4.0 Store Credit Agency"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Central Bank DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Credit Agency DB"
        },
        {
          "id": "s2",
          "type": "dataStore",
          "label": "D3 Credit Agency DB"
        }
      ],
      "edges": [
        {
          "source": "1.0 Route Customer",
          "target": "D2 Credit Agency DB",
          "label": "Customer Alert"
        },
        {
          "source": "2.0 Update Teller",
          "target": "Teller 2",
          "label": "Teller Receipt"
        },
        {
          "source": "D2 Credit Agency DB",
          "target": "4.0 Store Credit Agency",
          "label": "Manager Response"
        },
        {
          "source": "Customer",
          "target": "2.0 Update Teller",
          "label": "Central Bank Receipt"
        },
        {
          "source": "Customer",
          "target": "1.0 Route Customer",
          "label": "Central Bank Invoice"
        },
        {
          "source": "1.0 Route Customer",
          "target": "4.0 Store Credit Agency",
          "label": "Manager Report"
        },
        {
          "source": "3.0 Schedule Central Bank",
          "target": "D2 Credit Agency DB",
          "label": "Manager Response"
        },
        {
          "source": "Customer",
          "target": "3.0 Schedule Central Bank",
          "label": "Customer Invoice"
        },
        {
          "source": "D3 Credit Agency DB",
          "target": "1.0 Route Customer",
          "label": "Credit Agency Request"
        }
      ]
    }
  },
  {
    "id": 87,
    "title": "Transport Flow (Q87)",
    "category": "Transport",
    "level": "Level 2 DFD",
    "difficulty": "Hard",
    "description": "The 'Dispatch 3' sends 'Payment Gateway Response' to '4.0 Cancel Agency'. The '1.0 Route Agency' sends 'Maintenance Confirmation' to '4.0 Cancel Agency'. The 'D3 Agency DB' sends 'Dispatch Request' to '1.0 Route Agency'. The 'Dispatch 3' sends 'Maintenance Report' to '2.0 Authorize Maintenance'. The 'D1 Payment Gateway DB' sends 'Passenger Status' to '4.0 Cancel Agency'. The 'D3 Agency DB' sends 'Dispatch Metrics' to '3.0 Schedule Dispatch'. The 'Dispatch 3' sends 'Agency Data' to '4.0 Cancel Agency'. The 'Dispatch 3' sends 'Driver Report' to '1.0 Route Agency'. The '1.0 Route Agency' sends 'Driver Request' to '4.0 Cancel Agency'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Maintenance"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Agency 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Dispatch 3"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Route Agency"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Authorize Maintenance"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Schedule Dispatch"
        },
        {
          "id": "p3",
          "type": "process",
          "label": "4.0 Cancel Agency"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Payment Gateway DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Passenger DB"
        },
        {
          "id": "s2",
          "type": "dataStore",
          "label": "D3 Agency DB"
        }
      ],
      "edges": [
        {
          "source": "Dispatch 3",
          "target": "4.0 Cancel Agency",
          "label": "Payment Gateway Response"
        },
        {
          "source": "1.0 Route Agency",
          "target": "4.0 Cancel Agency",
          "label": "Maintenance Confirmation"
        },
        {
          "source": "D3 Agency DB",
          "target": "1.0 Route Agency",
          "label": "Dispatch Request"
        },
        {
          "source": "Dispatch 3",
          "target": "2.0 Authorize Maintenance",
          "label": "Maintenance Report"
        },
        {
          "source": "D1 Payment Gateway DB",
          "target": "4.0 Cancel Agency",
          "label": "Passenger Status"
        },
        {
          "source": "D3 Agency DB",
          "target": "3.0 Schedule Dispatch",
          "label": "Dispatch Metrics"
        },
        {
          "source": "Dispatch 3",
          "target": "4.0 Cancel Agency",
          "label": "Agency Data"
        },
        {
          "source": "Dispatch 3",
          "target": "1.0 Route Agency",
          "label": "Driver Report"
        },
        {
          "source": "1.0 Route Agency",
          "target": "4.0 Cancel Agency",
          "label": "Driver Request"
        }
      ]
    }
  },
  {
    "id": 88,
    "title": "Education Flow (Q88)",
    "category": "Education",
    "level": "Level 2 DFD",
    "difficulty": "Medium",
    "description": "The 'Parents 2' sends 'Student Data' to '2.0 Store Teacher'. The 'D1 Student DB' sends 'Admin Response' to '1.0 Cancel Ministry'. The 'Parents 2' sends 'Library Report' to '1.0 Cancel Ministry'. The 'D1 Student DB' sends 'Admin Receipt' to '1.0 Cancel Ministry'. The 'Parents' sends 'Parents Data' to '1.0 Cancel Ministry'. The 'Parents 2' sends 'Admin Details' to '2.0 Store Teacher'. The 'D1 Student DB' sends 'Admin Report' to '1.0 Cancel Ministry'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Parents"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Parents 2"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Cancel Ministry"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Store Teacher"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Store Admin"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Student DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Student DB"
        }
      ],
      "edges": [
        {
          "source": "Parents 2",
          "target": "2.0 Store Teacher",
          "label": "Student Data"
        },
        {
          "source": "D1 Student DB",
          "target": "1.0 Cancel Ministry",
          "label": "Admin Response"
        },
        {
          "source": "Parents 2",
          "target": "1.0 Cancel Ministry",
          "label": "Library Report"
        },
        {
          "source": "D1 Student DB",
          "target": "1.0 Cancel Ministry",
          "label": "Admin Receipt"
        },
        {
          "source": "Parents",
          "target": "1.0 Cancel Ministry",
          "label": "Parents Data"
        },
        {
          "source": "Parents 2",
          "target": "2.0 Store Teacher",
          "label": "Admin Details"
        },
        {
          "source": "D1 Student DB",
          "target": "1.0 Cancel Ministry",
          "label": "Admin Report"
        }
      ]
    }
  },
  {
    "id": 89,
    "title": "Banking Flow (Q89)",
    "category": "Banking",
    "level": "Level 2 DFD",
    "difficulty": "Medium",
    "description": "The '2.0 Review Central Bank' sends 'Customer Details' to '3.0 Fetch Credit Agency'. The 'D2 Customer DB' sends 'Central Bank Status' to '1.0 Process ATM'. The 'D2 Customer DB' sends 'Customer Status' to '2.0 Review Central Bank'. The '3.0 Fetch Credit Agency' sends 'Manager Status' to 'Manager'. The '3.0 Fetch Credit Agency' sends 'Central Bank Receipt' to '2.0 Review Central Bank'. The '3.0 Fetch Credit Agency' sends 'Customer Info' to 'D1 Customer DB'. The 'Manager' sends 'ATM Metrics' to '2.0 Review Central Bank'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Manager"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Credit Agency 2"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Process ATM"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Review Central Bank"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Fetch Credit Agency"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Customer DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Customer DB"
        }
      ],
      "edges": [
        {
          "source": "2.0 Review Central Bank",
          "target": "3.0 Fetch Credit Agency",
          "label": "Customer Details"
        },
        {
          "source": "D2 Customer DB",
          "target": "1.0 Process ATM",
          "label": "Central Bank Status"
        },
        {
          "source": "D2 Customer DB",
          "target": "2.0 Review Central Bank",
          "label": "Customer Status"
        },
        {
          "source": "3.0 Fetch Credit Agency",
          "target": "Manager",
          "label": "Manager Status"
        },
        {
          "source": "3.0 Fetch Credit Agency",
          "target": "2.0 Review Central Bank",
          "label": "Central Bank Receipt"
        },
        {
          "source": "3.0 Fetch Credit Agency",
          "target": "D1 Customer DB",
          "label": "Customer Info"
        },
        {
          "source": "Manager",
          "target": "2.0 Review Central Bank",
          "label": "ATM Metrics"
        }
      ]
    }
  },
  {
    "id": 90,
    "title": "Library Flow (Q90)",
    "category": "Library",
    "level": "Level 2 DFD",
    "difficulty": "Easy",
    "description": "The 'D1 Member DB' sends 'Librarian Confirmation' to '2.0 Process Librarian'. The 'Audit' sends 'Supplier Metrics' to '2.0 Process Librarian'. The '1.0 Schedule Audit' sends 'Audit Alert' to 'Audit'. The 'Audit' sends 'Librarian Response' to '1.0 Schedule Audit'. The 'Audit' sends 'Audit Receipt' to '2.0 Process Librarian'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Audit"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Schedule Audit"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Process Librarian"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Member DB"
        }
      ],
      "edges": [
        {
          "source": "D1 Member DB",
          "target": "2.0 Process Librarian",
          "label": "Librarian Confirmation"
        },
        {
          "source": "Audit",
          "target": "2.0 Process Librarian",
          "label": "Supplier Metrics"
        },
        {
          "source": "1.0 Schedule Audit",
          "target": "Audit",
          "label": "Audit Alert"
        },
        {
          "source": "Audit",
          "target": "1.0 Schedule Audit",
          "label": "Librarian Response"
        },
        {
          "source": "Audit",
          "target": "2.0 Process Librarian",
          "label": "Audit Receipt"
        }
      ]
    }
  },
  {
    "id": 91,
    "title": "Manufacturing Flow (Q91)",
    "category": "Manufacturing",
    "level": "Level 2 DFD",
    "difficulty": "Expert",
    "description": "The 'D4 Supplier DB' sends 'Worker Confirmation' to '5.0 Schedule Retailer'. The 'Management 4' sends 'Retailer Confirmation' to '2.0 Calculate Worker'. The '4.0 Store Distributor' sends 'Retailer Invoice' to 'D4 Supplier DB'. The 'D4 Supplier DB' sends 'Retailer Response' to '5.0 Schedule Retailer'. The 'Distributor' sends 'Quality Control Details' to '2.0 Calculate Worker'. The '1.0 Generate Quality Control' sends 'Worker Response' to 'D4 Supplier DB'. The 'Management 4' sends 'Quality Control Metrics' to '5.0 Schedule Retailer'. The 'D1 Worker DB' sends 'Supplier Alert' to '4.0 Store Distributor'. The '2.0 Calculate Worker' sends 'Quality Control Invoice' to 'D1 Worker DB'. The 'D1 Worker DB' sends 'Quality Control Details' to '5.0 Schedule Retailer'. The '4.0 Store Distributor' sends 'Supplier Receipt' to 'D3 Retailer DB'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Distributor"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Distributor 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Retailer 3"
        },
        {
          "id": "e3",
          "type": "entity",
          "label": "Management 4"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Generate Quality Control"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Calculate Worker"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Route Worker"
        },
        {
          "id": "p3",
          "type": "process",
          "label": "4.0 Store Distributor"
        },
        {
          "id": "p4",
          "type": "process",
          "label": "5.0 Schedule Retailer"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Worker DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Quality Control DB"
        },
        {
          "id": "s2",
          "type": "dataStore",
          "label": "D3 Retailer DB"
        },
        {
          "id": "s3",
          "type": "dataStore",
          "label": "D4 Supplier DB"
        }
      ],
      "edges": [
        {
          "source": "D4 Supplier DB",
          "target": "5.0 Schedule Retailer",
          "label": "Worker Confirmation"
        },
        {
          "source": "Management 4",
          "target": "2.0 Calculate Worker",
          "label": "Retailer Confirmation"
        },
        {
          "source": "4.0 Store Distributor",
          "target": "D4 Supplier DB",
          "label": "Retailer Invoice"
        },
        {
          "source": "D4 Supplier DB",
          "target": "5.0 Schedule Retailer",
          "label": "Retailer Response"
        },
        {
          "source": "Distributor",
          "target": "2.0 Calculate Worker",
          "label": "Quality Control Details"
        },
        {
          "source": "1.0 Generate Quality Control",
          "target": "D4 Supplier DB",
          "label": "Worker Response"
        },
        {
          "source": "Management 4",
          "target": "5.0 Schedule Retailer",
          "label": "Quality Control Metrics"
        },
        {
          "source": "D1 Worker DB",
          "target": "4.0 Store Distributor",
          "label": "Supplier Alert"
        },
        {
          "source": "2.0 Calculate Worker",
          "target": "D1 Worker DB",
          "label": "Quality Control Invoice"
        },
        {
          "source": "D1 Worker DB",
          "target": "5.0 Schedule Retailer",
          "label": "Quality Control Details"
        },
        {
          "source": "4.0 Store Distributor",
          "target": "D3 Retailer DB",
          "label": "Supplier Receipt"
        }
      ]
    }
  },
  {
    "id": 92,
    "title": "Transport Flow (Q92)",
    "category": "Transport",
    "level": "Level 2 DFD",
    "difficulty": "Easy",
    "description": "The 'D1 Passenger DB' sends 'Payment Gateway Invoice' to '2.0 Fetch Agency'. The '2.0 Fetch Agency' sends 'Maintenance Confirmation' to '1.0 Update Agency'. The '1.0 Update Agency' sends 'Payment Gateway Receipt' to '2.0 Fetch Agency'. The '2.0 Fetch Agency' sends 'Payment Gateway Receipt' to 'D1 Passenger DB'. The 'Dispatch' sends 'Driver Alert' to '2.0 Fetch Agency'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Dispatch"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Update Agency"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Fetch Agency"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Passenger DB"
        }
      ],
      "edges": [
        {
          "source": "D1 Passenger DB",
          "target": "2.0 Fetch Agency",
          "label": "Payment Gateway Invoice"
        },
        {
          "source": "2.0 Fetch Agency",
          "target": "1.0 Update Agency",
          "label": "Maintenance Confirmation"
        },
        {
          "source": "1.0 Update Agency",
          "target": "2.0 Fetch Agency",
          "label": "Payment Gateway Receipt"
        },
        {
          "source": "2.0 Fetch Agency",
          "target": "D1 Passenger DB",
          "label": "Payment Gateway Receipt"
        },
        {
          "source": "Dispatch",
          "target": "2.0 Fetch Agency",
          "label": "Driver Alert"
        }
      ]
    }
  },
  {
    "id": 93,
    "title": "Healthcare Flow (Q93)",
    "category": "Healthcare",
    "level": "Level 2 DFD",
    "difficulty": "Hard",
    "description": "The '4.0 Fetch Doctor' sends 'Insurance Alert' to 'Pharmacy 3'. The 'D2 Patient DB' sends 'Patient Response' to '2.0 Route Lab'. The '1.0 Update Patient' sends 'Nurse Confirmation' to 'Doctor'. The 'D1 Patient DB' sends 'Doctor Report' to '2.0 Route Lab'. The 'D3 Pharmacy DB' sends 'Pharmacy Status' to '2.0 Route Lab'. The 'Lab 2' sends 'Doctor Request' to '3.0 Manage Patient'. The '4.0 Fetch Doctor' sends 'Doctor Data' to 'Pharmacy 3'. The 'D2 Patient DB' sends 'Insurance Metrics' to '1.0 Update Patient'. The '2.0 Route Lab' sends 'Patient Details' to 'D2 Patient DB'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Doctor"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Lab 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Pharmacy 3"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Update Patient"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Route Lab"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Manage Patient"
        },
        {
          "id": "p3",
          "type": "process",
          "label": "4.0 Fetch Doctor"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Patient DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Patient DB"
        },
        {
          "id": "s2",
          "type": "dataStore",
          "label": "D3 Pharmacy DB"
        }
      ],
      "edges": [
        {
          "source": "4.0 Fetch Doctor",
          "target": "Pharmacy 3",
          "label": "Insurance Alert"
        },
        {
          "source": "D2 Patient DB",
          "target": "2.0 Route Lab",
          "label": "Patient Response"
        },
        {
          "source": "1.0 Update Patient",
          "target": "Doctor",
          "label": "Nurse Confirmation"
        },
        {
          "source": "D1 Patient DB",
          "target": "2.0 Route Lab",
          "label": "Doctor Report"
        },
        {
          "source": "D3 Pharmacy DB",
          "target": "2.0 Route Lab",
          "label": "Pharmacy Status"
        },
        {
          "source": "Lab 2",
          "target": "3.0 Manage Patient",
          "label": "Doctor Request"
        },
        {
          "source": "4.0 Fetch Doctor",
          "target": "Pharmacy 3",
          "label": "Doctor Data"
        },
        {
          "source": "D2 Patient DB",
          "target": "1.0 Update Patient",
          "label": "Insurance Metrics"
        },
        {
          "source": "2.0 Route Lab",
          "target": "D2 Patient DB",
          "label": "Patient Details"
        }
      ]
    }
  },
  {
    "id": 94,
    "title": "Transport Flow (Q94)",
    "category": "Transport",
    "level": "Level 2 DFD",
    "difficulty": "Medium",
    "description": "The '2.0 Cancel Payment Gateway' sends 'Payment Gateway Status' to 'Driver'. The '1.0 Calculate Maintenance' sends 'Driver Report' to 'Agency 2'. The '1.0 Calculate Maintenance' sends 'Agency Metrics' to 'D1 Passenger DB'. The '3.0 Manage Agency' sends 'Driver Alert' to 'Driver'. The '3.0 Manage Agency' sends 'Dispatch Request' to 'D1 Passenger DB'. The 'D2 Payment Gateway DB' sends 'Agency Alert' to '3.0 Manage Agency'. The 'Driver' sends 'Dispatch Details' to '1.0 Calculate Maintenance'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Driver"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Agency 2"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Calculate Maintenance"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Cancel Payment Gateway"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Manage Agency"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Passenger DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Payment Gateway DB"
        }
      ],
      "edges": [
        {
          "source": "2.0 Cancel Payment Gateway",
          "target": "Driver",
          "label": "Payment Gateway Status"
        },
        {
          "source": "1.0 Calculate Maintenance",
          "target": "Agency 2",
          "label": "Driver Report"
        },
        {
          "source": "1.0 Calculate Maintenance",
          "target": "D1 Passenger DB",
          "label": "Agency Metrics"
        },
        {
          "source": "3.0 Manage Agency",
          "target": "Driver",
          "label": "Driver Alert"
        },
        {
          "source": "3.0 Manage Agency",
          "target": "D1 Passenger DB",
          "label": "Dispatch Request"
        },
        {
          "source": "D2 Payment Gateway DB",
          "target": "3.0 Manage Agency",
          "label": "Agency Alert"
        },
        {
          "source": "Driver",
          "target": "1.0 Calculate Maintenance",
          "label": "Dispatch Details"
        }
      ]
    }
  },
  {
    "id": 95,
    "title": "Healthcare Flow (Q95)",
    "category": "Healthcare",
    "level": "Level 2 DFD",
    "difficulty": "Easy",
    "description": "The '2.0 Cancel Doctor' sends 'Pharmacy Data' to '1.0 Schedule Nurse'. The '1.0 Schedule Nurse' sends 'Nurse Details' to '2.0 Cancel Doctor'. The '1.0 Schedule Nurse' sends 'Doctor Status' to 'Nurse'. The 'D1 Pharmacy DB' sends 'Lab Details' to '1.0 Schedule Nurse'. The 'Nurse' sends 'Doctor Info' to '2.0 Cancel Doctor'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Nurse"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Schedule Nurse"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Cancel Doctor"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Pharmacy DB"
        }
      ],
      "edges": [
        {
          "source": "2.0 Cancel Doctor",
          "target": "1.0 Schedule Nurse",
          "label": "Pharmacy Data"
        },
        {
          "source": "1.0 Schedule Nurse",
          "target": "2.0 Cancel Doctor",
          "label": "Nurse Details"
        },
        {
          "source": "1.0 Schedule Nurse",
          "target": "Nurse",
          "label": "Doctor Status"
        },
        {
          "source": "D1 Pharmacy DB",
          "target": "1.0 Schedule Nurse",
          "label": "Lab Details"
        },
        {
          "source": "Nurse",
          "target": "2.0 Cancel Doctor",
          "label": "Doctor Info"
        }
      ]
    }
  },
  {
    "id": 96,
    "title": "Manufacturing Flow (Q96)",
    "category": "Manufacturing",
    "level": "Level 2 DFD",
    "difficulty": "Easy",
    "description": "The 'D1 Retailer DB' sends 'Retailer Report' to '1.0 Store Supplier'. The 'D1 Retailer DB' sends 'Retailer Response' to '2.0 Store Quality Control'. The 'Distributor' sends 'Distributor Response' to '1.0 Store Supplier'. The 'Distributor' sends 'Supplier Status' to '1.0 Store Supplier'. The '1.0 Store Supplier' sends 'Distributor Details' to '2.0 Store Quality Control'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Distributor"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Store Supplier"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Store Quality Control"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Retailer DB"
        }
      ],
      "edges": [
        {
          "source": "D1 Retailer DB",
          "target": "1.0 Store Supplier",
          "label": "Retailer Report"
        },
        {
          "source": "D1 Retailer DB",
          "target": "2.0 Store Quality Control",
          "label": "Retailer Response"
        },
        {
          "source": "Distributor",
          "target": "1.0 Store Supplier",
          "label": "Distributor Response"
        },
        {
          "source": "Distributor",
          "target": "1.0 Store Supplier",
          "label": "Supplier Status"
        },
        {
          "source": "1.0 Store Supplier",
          "target": "2.0 Store Quality Control",
          "label": "Distributor Details"
        }
      ]
    }
  },
  {
    "id": 97,
    "title": "Library Flow (Q97)",
    "category": "Library",
    "level": "Level 2 DFD",
    "difficulty": "Hard",
    "description": "The 'D3 Member DB' sends 'Audit Receipt' to '3.0 Validate Librarian'. The '2.0 Handle Librarian' sends 'Member Details' to 'Public 3'. The '4.0 Store Member' sends 'Public Confirmation' to '3.0 Validate Librarian'. The 'Public 3' sends 'Librarian Info' to '4.0 Store Member'. The '4.0 Store Member' sends 'Public Data' to 'D3 Member DB'. The '3.0 Validate Librarian' sends 'System Metrics' to 'D3 Member DB'. The '2.0 Handle Librarian' sends 'Supplier Request' to '1.0 Update Audit'. The 'Librarian' sends 'System Alert' to '4.0 Store Member'. The '1.0 Update Audit' sends 'Supplier Status' to 'Librarian'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Librarian"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Audit 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Public 3"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Update Audit"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Handle Librarian"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Validate Librarian"
        },
        {
          "id": "p3",
          "type": "process",
          "label": "4.0 Store Member"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 System DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Supplier DB"
        },
        {
          "id": "s2",
          "type": "dataStore",
          "label": "D3 Member DB"
        }
      ],
      "edges": [
        {
          "source": "D3 Member DB",
          "target": "3.0 Validate Librarian",
          "label": "Audit Receipt"
        },
        {
          "source": "2.0 Handle Librarian",
          "target": "Public 3",
          "label": "Member Details"
        },
        {
          "source": "4.0 Store Member",
          "target": "3.0 Validate Librarian",
          "label": "Public Confirmation"
        },
        {
          "source": "Public 3",
          "target": "4.0 Store Member",
          "label": "Librarian Info"
        },
        {
          "source": "4.0 Store Member",
          "target": "D3 Member DB",
          "label": "Public Data"
        },
        {
          "source": "3.0 Validate Librarian",
          "target": "D3 Member DB",
          "label": "System Metrics"
        },
        {
          "source": "2.0 Handle Librarian",
          "target": "1.0 Update Audit",
          "label": "Supplier Request"
        },
        {
          "source": "Librarian",
          "target": "4.0 Store Member",
          "label": "System Alert"
        },
        {
          "source": "1.0 Update Audit",
          "target": "Librarian",
          "label": "Supplier Status"
        }
      ]
    }
  },
  {
    "id": 98,
    "title": "Library Flow (Q98)",
    "category": "Library",
    "level": "Level 2 DFD",
    "difficulty": "Hard",
    "description": "The 'D2 Public DB' sends 'System Receipt' to '2.0 Generate Member'. The '1.0 Cancel Member' sends 'Member Confirmation' to 'D2 Public DB'. The '3.0 Fetch System' sends 'Audit Status' to '1.0 Cancel Member'. The 'System 3' sends 'Public Details' to '2.0 Generate Member'. The 'D3 Member DB' sends 'Member Metrics' to '3.0 Fetch System'. The '1.0 Cancel Member' sends 'Public Receipt' to '2.0 Generate Member'. The 'D3 Member DB' sends 'Audit Request' to '2.0 Generate Member'. The 'System 3' sends 'System Receipt' to '4.0 Fetch Audit'. The '1.0 Cancel Member' sends 'Audit Info' to 'D3 Member DB'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Audit"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "System 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "System 3"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Cancel Member"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Generate Member"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Fetch System"
        },
        {
          "id": "p3",
          "type": "process",
          "label": "4.0 Fetch Audit"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Member DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Public DB"
        },
        {
          "id": "s2",
          "type": "dataStore",
          "label": "D3 Member DB"
        }
      ],
      "edges": [
        {
          "source": "D2 Public DB",
          "target": "2.0 Generate Member",
          "label": "System Receipt"
        },
        {
          "source": "1.0 Cancel Member",
          "target": "D2 Public DB",
          "label": "Member Confirmation"
        },
        {
          "source": "3.0 Fetch System",
          "target": "1.0 Cancel Member",
          "label": "Audit Status"
        },
        {
          "source": "System 3",
          "target": "2.0 Generate Member",
          "label": "Public Details"
        },
        {
          "source": "D3 Member DB",
          "target": "3.0 Fetch System",
          "label": "Member Metrics"
        },
        {
          "source": "1.0 Cancel Member",
          "target": "2.0 Generate Member",
          "label": "Public Receipt"
        },
        {
          "source": "D3 Member DB",
          "target": "2.0 Generate Member",
          "label": "Audit Request"
        },
        {
          "source": "System 3",
          "target": "4.0 Fetch Audit",
          "label": "System Receipt"
        },
        {
          "source": "1.0 Cancel Member",
          "target": "D3 Member DB",
          "label": "Audit Info"
        }
      ]
    }
  },
  {
    "id": 99,
    "title": "Transport Flow (Q99)",
    "category": "Transport",
    "level": "Level 2 DFD",
    "difficulty": "Expert",
    "description": "The 'Dispatch 2' sends 'Maintenance Metrics' to '2.0 Generate Passenger'. The 'Dispatch 2' sends 'Payment Gateway Metrics' to '4.0 Manage Dispatch'. The 'Dispatch 3' sends 'Dispatch Response' to '4.0 Manage Dispatch'. The 'D2 Driver DB' sends 'Agency Info' to '5.0 Fetch Maintenance'. The '3.0 Store Maintenance' sends 'Agency Confirmation' to '4.0 Manage Dispatch'. The '4.0 Manage Dispatch' sends 'Driver Alert' to 'D4 Payment Gateway DB'. The '1.0 Generate Agency' sends 'Passenger Confirmation' to 'Passenger'. The 'D3 Dispatch DB' sends 'Passenger Report' to '4.0 Manage Dispatch'. The 'D1 Agency DB' sends 'Payment Gateway Invoice' to '2.0 Generate Passenger'. The '3.0 Store Maintenance' sends 'Payment Gateway Response' to '5.0 Fetch Maintenance'. The 'Dispatch 2' sends 'Agency Report' to '5.0 Fetch Maintenance'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Passenger"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Dispatch 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Dispatch 3"
        },
        {
          "id": "e3",
          "type": "entity",
          "label": "Payment Gateway 4"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Generate Agency"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Generate Passenger"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Store Maintenance"
        },
        {
          "id": "p3",
          "type": "process",
          "label": "4.0 Manage Dispatch"
        },
        {
          "id": "p4",
          "type": "process",
          "label": "5.0 Fetch Maintenance"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Agency DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Driver DB"
        },
        {
          "id": "s2",
          "type": "dataStore",
          "label": "D3 Dispatch DB"
        },
        {
          "id": "s3",
          "type": "dataStore",
          "label": "D4 Payment Gateway DB"
        }
      ],
      "edges": [
        {
          "source": "Dispatch 2",
          "target": "2.0 Generate Passenger",
          "label": "Maintenance Metrics"
        },
        {
          "source": "Dispatch 2",
          "target": "4.0 Manage Dispatch",
          "label": "Payment Gateway Metrics"
        },
        {
          "source": "Dispatch 3",
          "target": "4.0 Manage Dispatch",
          "label": "Dispatch Response"
        },
        {
          "source": "D2 Driver DB",
          "target": "5.0 Fetch Maintenance",
          "label": "Agency Info"
        },
        {
          "source": "3.0 Store Maintenance",
          "target": "4.0 Manage Dispatch",
          "label": "Agency Confirmation"
        },
        {
          "source": "4.0 Manage Dispatch",
          "target": "D4 Payment Gateway DB",
          "label": "Driver Alert"
        },
        {
          "source": "1.0 Generate Agency",
          "target": "Passenger",
          "label": "Passenger Confirmation"
        },
        {
          "source": "D3 Dispatch DB",
          "target": "4.0 Manage Dispatch",
          "label": "Passenger Report"
        },
        {
          "source": "D1 Agency DB",
          "target": "2.0 Generate Passenger",
          "label": "Payment Gateway Invoice"
        },
        {
          "source": "3.0 Store Maintenance",
          "target": "5.0 Fetch Maintenance",
          "label": "Payment Gateway Response"
        },
        {
          "source": "Dispatch 2",
          "target": "5.0 Fetch Maintenance",
          "label": "Agency Report"
        }
      ]
    }
  },
  {
    "id": 100,
    "title": "Healthcare Flow (Q100)",
    "category": "Healthcare",
    "level": "Level 2 DFD",
    "difficulty": "Easy",
    "description": "The '2.0 Schedule Doctor' sends 'Doctor Status' to '1.0 Generate Nurse'. The 'Lab' sends 'Pharmacy Invoice' to '2.0 Schedule Doctor'. The '1.0 Generate Nurse' sends 'Pharmacy Invoice' to 'Lab'. The 'Lab' sends 'Insurance Response' to '1.0 Generate Nurse'. The '2.0 Schedule Doctor' sends 'Lab Invoice' to 'Lab'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Lab"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Generate Nurse"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Schedule Doctor"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Patient DB"
        }
      ],
      "edges": [
        {
          "source": "2.0 Schedule Doctor",
          "target": "1.0 Generate Nurse",
          "label": "Doctor Status"
        },
        {
          "source": "Lab",
          "target": "2.0 Schedule Doctor",
          "label": "Pharmacy Invoice"
        },
        {
          "source": "1.0 Generate Nurse",
          "target": "Lab",
          "label": "Pharmacy Invoice"
        },
        {
          "source": "Lab",
          "target": "1.0 Generate Nurse",
          "label": "Insurance Response"
        },
        {
          "source": "2.0 Schedule Doctor",
          "target": "Lab",
          "label": "Lab Invoice"
        }
      ]
    }
  },
  {
    "id": 101,
    "title": "Entertainment Flow (Q101)",
    "category": "Entertainment",
    "level": "Level 2 DFD",
    "difficulty": "Easy",
    "description": "The '1.0 Verify User' sends 'Billing System Info' to '2.0 Review Creator'. The '2.0 Review Creator' sends 'User Alert' to '1.0 Verify User'. The 'User' sends 'Advertiser Receipt' to '1.0 Verify User'. The 'D1 Studio DB' sends 'Advertiser Request' to '1.0 Verify User'. The 'D1 Studio DB' sends 'Advertiser Receipt' to '2.0 Review Creator'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "User"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Verify User"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Review Creator"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Studio DB"
        }
      ],
      "edges": [
        {
          "source": "1.0 Verify User",
          "target": "2.0 Review Creator",
          "label": "Billing System Info"
        },
        {
          "source": "2.0 Review Creator",
          "target": "1.0 Verify User",
          "label": "User Alert"
        },
        {
          "source": "User",
          "target": "1.0 Verify User",
          "label": "Advertiser Receipt"
        },
        {
          "source": "D1 Studio DB",
          "target": "1.0 Verify User",
          "label": "Advertiser Request"
        },
        {
          "source": "D1 Studio DB",
          "target": "2.0 Review Creator",
          "label": "Advertiser Receipt"
        }
      ]
    }
  },
  {
    "id": 102,
    "title": "Banking Flow (Q102)",
    "category": "Banking",
    "level": "Level 2 DFD",
    "difficulty": "Medium",
    "description": "The 'Teller' sends 'Manager Alert' to '1.0 Cancel Customer'. The 'D1 Teller DB' sends 'Central Bank Details' to '1.0 Cancel Customer'. The 'Manager 2' sends 'Customer Info' to '1.0 Cancel Customer'. The '2.0 Process Teller' sends 'ATM Status' to 'D1 Teller DB'. The '3.0 Validate Customer' sends 'Manager Confirmation' to 'D1 Teller DB'. The '3.0 Validate Customer' sends 'Central Bank Report' to 'D1 Teller DB'. The '3.0 Validate Customer' sends 'ATM Receipt' to 'D2 ATM DB'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Teller"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Manager 2"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Cancel Customer"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Process Teller"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Validate Customer"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Teller DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 ATM DB"
        }
      ],
      "edges": [
        {
          "source": "Teller",
          "target": "1.0 Cancel Customer",
          "label": "Manager Alert"
        },
        {
          "source": "D1 Teller DB",
          "target": "1.0 Cancel Customer",
          "label": "Central Bank Details"
        },
        {
          "source": "Manager 2",
          "target": "1.0 Cancel Customer",
          "label": "Customer Info"
        },
        {
          "source": "2.0 Process Teller",
          "target": "D1 Teller DB",
          "label": "ATM Status"
        },
        {
          "source": "3.0 Validate Customer",
          "target": "D1 Teller DB",
          "label": "Manager Confirmation"
        },
        {
          "source": "3.0 Validate Customer",
          "target": "D1 Teller DB",
          "label": "Central Bank Report"
        },
        {
          "source": "3.0 Validate Customer",
          "target": "D2 ATM DB",
          "label": "ATM Receipt"
        }
      ]
    }
  },
  {
    "id": 103,
    "title": "Manufacturing Flow (Q103)",
    "category": "Manufacturing",
    "level": "Level 2 DFD",
    "difficulty": "Expert",
    "description": "The 'D1 Distributor DB' sends 'Distributor Metrics' to '1.0 Store Supplier'. The 'D4 Retailer DB' sends 'Retailer Invoice' to '4.0 Handle Worker'. The '5.0 Route Distributor' sends 'Quality Control Data' to 'D4 Retailer DB'. The '5.0 Route Distributor' sends 'Management Alert' to 'Quality Control 3'. The 'D2 Retailer DB' sends 'Management Status' to '3.0 Authorize Supplier'. The '3.0 Authorize Supplier' sends 'Worker Status' to '2.0 Cancel Retailer'. The '4.0 Handle Worker' sends 'Supplier Response' to '5.0 Route Distributor'. The 'D4 Retailer DB' sends 'Management Confirmation' to '2.0 Cancel Retailer'. The 'D2 Retailer DB' sends 'Quality Control Data' to '4.0 Handle Worker'. The 'Quality Control 3' sends 'Distributor Info' to '3.0 Authorize Supplier'. The '3.0 Authorize Supplier' sends 'Quality Control Invoice' to 'Quality Control 3'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Worker"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Worker 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Quality Control 3"
        },
        {
          "id": "e3",
          "type": "entity",
          "label": "Retailer 4"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Store Supplier"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Cancel Retailer"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Authorize Supplier"
        },
        {
          "id": "p3",
          "type": "process",
          "label": "4.0 Handle Worker"
        },
        {
          "id": "p4",
          "type": "process",
          "label": "5.0 Route Distributor"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Distributor DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Retailer DB"
        },
        {
          "id": "s2",
          "type": "dataStore",
          "label": "D3 Distributor DB"
        },
        {
          "id": "s3",
          "type": "dataStore",
          "label": "D4 Retailer DB"
        }
      ],
      "edges": [
        {
          "source": "D1 Distributor DB",
          "target": "1.0 Store Supplier",
          "label": "Distributor Metrics"
        },
        {
          "source": "D4 Retailer DB",
          "target": "4.0 Handle Worker",
          "label": "Retailer Invoice"
        },
        {
          "source": "5.0 Route Distributor",
          "target": "D4 Retailer DB",
          "label": "Quality Control Data"
        },
        {
          "source": "5.0 Route Distributor",
          "target": "Quality Control 3",
          "label": "Management Alert"
        },
        {
          "source": "D2 Retailer DB",
          "target": "3.0 Authorize Supplier",
          "label": "Management Status"
        },
        {
          "source": "3.0 Authorize Supplier",
          "target": "2.0 Cancel Retailer",
          "label": "Worker Status"
        },
        {
          "source": "4.0 Handle Worker",
          "target": "5.0 Route Distributor",
          "label": "Supplier Response"
        },
        {
          "source": "D4 Retailer DB",
          "target": "2.0 Cancel Retailer",
          "label": "Management Confirmation"
        },
        {
          "source": "D2 Retailer DB",
          "target": "4.0 Handle Worker",
          "label": "Quality Control Data"
        },
        {
          "source": "Quality Control 3",
          "target": "3.0 Authorize Supplier",
          "label": "Distributor Info"
        },
        {
          "source": "3.0 Authorize Supplier",
          "target": "Quality Control 3",
          "label": "Quality Control Invoice"
        }
      ]
    }
  },
  {
    "id": 104,
    "title": "E-commerce Flow (Q104)",
    "category": "E-commerce",
    "level": "Level 2 DFD",
    "difficulty": "Expert",
    "description": "The 'Supplier 3' sends 'Shipping Co Status' to '3.0 Update Supplier'. The 'D2 Customer DB' sends 'Customer Metrics' to '5.0 Manage Customer'. The '2.0 Route Customer' sends 'Shipping Co Details' to 'D4 Admin DB'. The 'D4 Admin DB' sends 'Payment Gateway Alert' to '3.0 Update Supplier'. The 'Customer 2' sends 'Warehouse Confirmation' to '5.0 Manage Customer'. The 'Supplier 3' sends 'Admin Metrics' to '3.0 Update Supplier'. The '2.0 Route Customer' sends 'Admin Details' to 'Customer 4'. The 'D4 Admin DB' sends 'Shipping Co Data' to '5.0 Manage Customer'. The '3.0 Update Supplier' sends 'Admin Confirmation' to 'D3 Shipping Co DB'. The 'D4 Admin DB' sends 'Warehouse Confirmation' to '2.0 Route Customer'. The '4.0 Schedule Payment Gateway' sends 'Customer Details' to 'Supplier 3'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Supplier"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Customer 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Supplier 3"
        },
        {
          "id": "e3",
          "type": "entity",
          "label": "Customer 4"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Calculate Payment Gateway"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Route Customer"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Update Supplier"
        },
        {
          "id": "p3",
          "type": "process",
          "label": "4.0 Schedule Payment Gateway"
        },
        {
          "id": "p4",
          "type": "process",
          "label": "5.0 Manage Customer"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Customer DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Customer DB"
        },
        {
          "id": "s2",
          "type": "dataStore",
          "label": "D3 Shipping Co DB"
        },
        {
          "id": "s3",
          "type": "dataStore",
          "label": "D4 Admin DB"
        }
      ],
      "edges": [
        {
          "source": "Supplier 3",
          "target": "3.0 Update Supplier",
          "label": "Shipping Co Status"
        },
        {
          "source": "D2 Customer DB",
          "target": "5.0 Manage Customer",
          "label": "Customer Metrics"
        },
        {
          "source": "2.0 Route Customer",
          "target": "D4 Admin DB",
          "label": "Shipping Co Details"
        },
        {
          "source": "D4 Admin DB",
          "target": "3.0 Update Supplier",
          "label": "Payment Gateway Alert"
        },
        {
          "source": "Customer 2",
          "target": "5.0 Manage Customer",
          "label": "Warehouse Confirmation"
        },
        {
          "source": "Supplier 3",
          "target": "3.0 Update Supplier",
          "label": "Admin Metrics"
        },
        {
          "source": "2.0 Route Customer",
          "target": "Customer 4",
          "label": "Admin Details"
        },
        {
          "source": "D4 Admin DB",
          "target": "5.0 Manage Customer",
          "label": "Shipping Co Data"
        },
        {
          "source": "3.0 Update Supplier",
          "target": "D3 Shipping Co DB",
          "label": "Admin Confirmation"
        },
        {
          "source": "D4 Admin DB",
          "target": "2.0 Route Customer",
          "label": "Warehouse Confirmation"
        },
        {
          "source": "4.0 Schedule Payment Gateway",
          "target": "Supplier 3",
          "label": "Customer Details"
        }
      ]
    }
  },
  {
    "id": 105,
    "title": "Manufacturing Flow (Q105)",
    "category": "Manufacturing",
    "level": "Level 2 DFD",
    "difficulty": "Medium",
    "description": "The '1.0 Cancel Supplier' sends 'Distributor Data' to 'Quality Control 2'. The 'D2 Distributor DB' sends 'Supplier Info' to '1.0 Cancel Supplier'. The 'Quality Control' sends 'Quality Control Details' to '1.0 Cancel Supplier'. The 'Quality Control' sends 'Worker Details' to '3.0 Manage Worker'. The '2.0 Manage Quality Control' sends 'Worker Response' to 'Quality Control'. The '3.0 Manage Worker' sends 'Supplier Report' to 'D2 Distributor DB'. The '1.0 Cancel Supplier' sends 'Quality Control Response' to '3.0 Manage Worker'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Quality Control"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Quality Control 2"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Cancel Supplier"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Manage Quality Control"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Manage Worker"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Quality Control DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Distributor DB"
        }
      ],
      "edges": [
        {
          "source": "1.0 Cancel Supplier",
          "target": "Quality Control 2",
          "label": "Distributor Data"
        },
        {
          "source": "D2 Distributor DB",
          "target": "1.0 Cancel Supplier",
          "label": "Supplier Info"
        },
        {
          "source": "Quality Control",
          "target": "1.0 Cancel Supplier",
          "label": "Quality Control Details"
        },
        {
          "source": "Quality Control",
          "target": "3.0 Manage Worker",
          "label": "Worker Details"
        },
        {
          "source": "2.0 Manage Quality Control",
          "target": "Quality Control",
          "label": "Worker Response"
        },
        {
          "source": "3.0 Manage Worker",
          "target": "D2 Distributor DB",
          "label": "Supplier Report"
        },
        {
          "source": "1.0 Cancel Supplier",
          "target": "3.0 Manage Worker",
          "label": "Quality Control Response"
        }
      ]
    }
  },
  {
    "id": 106,
    "title": "Healthcare Flow (Q106)",
    "category": "Healthcare",
    "level": "Level 2 DFD",
    "difficulty": "Medium",
    "description": "The '3.0 Handle Pharmacy' sends 'Insurance Info' to 'D2 Doctor DB'. The 'D2 Doctor DB' sends 'Lab Invoice' to '3.0 Handle Pharmacy'. The '2.0 Route Doctor' sends 'Patient Data' to 'D1 Doctor DB'. The 'D2 Doctor DB' sends 'Patient Info' to '3.0 Handle Pharmacy'. The 'Insurance 2' sends 'Insurance Receipt' to '3.0 Handle Pharmacy'. The 'Doctor' sends 'Patient Report' to '1.0 Generate Nurse'. The '1.0 Generate Nurse' sends 'Doctor Request' to 'Doctor'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Doctor"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Insurance 2"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Generate Nurse"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Route Doctor"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Handle Pharmacy"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Doctor DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Doctor DB"
        }
      ],
      "edges": [
        {
          "source": "3.0 Handle Pharmacy",
          "target": "D2 Doctor DB",
          "label": "Insurance Info"
        },
        {
          "source": "D2 Doctor DB",
          "target": "3.0 Handle Pharmacy",
          "label": "Lab Invoice"
        },
        {
          "source": "2.0 Route Doctor",
          "target": "D1 Doctor DB",
          "label": "Patient Data"
        },
        {
          "source": "D2 Doctor DB",
          "target": "3.0 Handle Pharmacy",
          "label": "Patient Info"
        },
        {
          "source": "Insurance 2",
          "target": "3.0 Handle Pharmacy",
          "label": "Insurance Receipt"
        },
        {
          "source": "Doctor",
          "target": "1.0 Generate Nurse",
          "label": "Patient Report"
        },
        {
          "source": "1.0 Generate Nurse",
          "target": "Doctor",
          "label": "Doctor Request"
        }
      ]
    }
  },
  {
    "id": 107,
    "title": "Library Flow (Q107)",
    "category": "Library",
    "level": "Level 2 DFD",
    "difficulty": "Medium",
    "description": "The 'D2 Public DB' sends 'Audit Report' to '1.0 Update Audit'. The '1.0 Update Audit' sends 'System Request' to '3.0 Fetch System'. The 'Public' sends 'Public Alert' to '3.0 Fetch System'. The 'System 2' sends 'Supplier Data' to '2.0 Route Public'. The '2.0 Route Public' sends 'Audit Status' to 'System 2'. The '1.0 Update Audit' sends 'Member Info' to 'Public'. The '1.0 Update Audit' sends 'Public Request' to '3.0 Fetch System'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Public"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "System 2"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Update Audit"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Route Public"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Fetch System"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 System DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Public DB"
        }
      ],
      "edges": [
        {
          "source": "D2 Public DB",
          "target": "1.0 Update Audit",
          "label": "Audit Report"
        },
        {
          "source": "1.0 Update Audit",
          "target": "3.0 Fetch System",
          "label": "System Request"
        },
        {
          "source": "Public",
          "target": "3.0 Fetch System",
          "label": "Public Alert"
        },
        {
          "source": "System 2",
          "target": "2.0 Route Public",
          "label": "Supplier Data"
        },
        {
          "source": "2.0 Route Public",
          "target": "System 2",
          "label": "Audit Status"
        },
        {
          "source": "1.0 Update Audit",
          "target": "Public",
          "label": "Member Info"
        },
        {
          "source": "1.0 Update Audit",
          "target": "3.0 Fetch System",
          "label": "Public Request"
        }
      ]
    }
  },
  {
    "id": 108,
    "title": "E-commerce Flow (Q108)",
    "category": "E-commerce",
    "level": "Level 2 DFD",
    "difficulty": "Medium",
    "description": "The 'Warehouse' sends 'Customer Details' to '3.0 Validate Payment Gateway'. The 'D2 Warehouse DB' sends 'Warehouse Metrics' to '1.0 Process Shipping Co'. The 'Customer 2' sends 'Payment Gateway Data' to '1.0 Process Shipping Co'. The 'Customer 2' sends 'Warehouse Alert' to '3.0 Validate Payment Gateway'. The 'Customer 2' sends 'Supplier Data' to '3.0 Validate Payment Gateway'. The '3.0 Validate Payment Gateway' sends 'Payment Gateway Response' to '1.0 Process Shipping Co'. The '3.0 Validate Payment Gateway' sends 'Admin Metrics' to 'D2 Warehouse DB'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Warehouse"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Customer 2"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Process Shipping Co"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Calculate Supplier"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Validate Payment Gateway"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Customer DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Warehouse DB"
        }
      ],
      "edges": [
        {
          "source": "Warehouse",
          "target": "3.0 Validate Payment Gateway",
          "label": "Customer Details"
        },
        {
          "source": "D2 Warehouse DB",
          "target": "1.0 Process Shipping Co",
          "label": "Warehouse Metrics"
        },
        {
          "source": "Customer 2",
          "target": "1.0 Process Shipping Co",
          "label": "Payment Gateway Data"
        },
        {
          "source": "Customer 2",
          "target": "3.0 Validate Payment Gateway",
          "label": "Warehouse Alert"
        },
        {
          "source": "Customer 2",
          "target": "3.0 Validate Payment Gateway",
          "label": "Supplier Data"
        },
        {
          "source": "3.0 Validate Payment Gateway",
          "target": "1.0 Process Shipping Co",
          "label": "Payment Gateway Response"
        },
        {
          "source": "3.0 Validate Payment Gateway",
          "target": "D2 Warehouse DB",
          "label": "Admin Metrics"
        }
      ]
    }
  },
  {
    "id": 109,
    "title": "E-commerce Flow (Q109)",
    "category": "E-commerce",
    "level": "Level 2 DFD",
    "difficulty": "Medium",
    "description": "The 'D1 Payment Gateway DB' sends 'Payment Gateway Info' to '2.0 Calculate Warehouse'. The 'Payment Gateway' sends 'Payment Gateway Invoice' to '2.0 Calculate Warehouse'. The '1.0 Schedule Payment Gateway' sends 'Supplier Response' to 'Payment Gateway'. The 'Shipping Co 2' sends 'Shipping Co Status' to '3.0 Calculate Payment Gateway'. The '3.0 Calculate Payment Gateway' sends 'Warehouse Info' to 'Shipping Co 2'. The 'Payment Gateway' sends 'Supplier Info' to '3.0 Calculate Payment Gateway'. The 'D1 Payment Gateway DB' sends 'Admin Details' to '2.0 Calculate Warehouse'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Payment Gateway"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Shipping Co 2"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Schedule Payment Gateway"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Calculate Warehouse"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Calculate Payment Gateway"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Payment Gateway DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Warehouse DB"
        }
      ],
      "edges": [
        {
          "source": "D1 Payment Gateway DB",
          "target": "2.0 Calculate Warehouse",
          "label": "Payment Gateway Info"
        },
        {
          "source": "Payment Gateway",
          "target": "2.0 Calculate Warehouse",
          "label": "Payment Gateway Invoice"
        },
        {
          "source": "1.0 Schedule Payment Gateway",
          "target": "Payment Gateway",
          "label": "Supplier Response"
        },
        {
          "source": "Shipping Co 2",
          "target": "3.0 Calculate Payment Gateway",
          "label": "Shipping Co Status"
        },
        {
          "source": "3.0 Calculate Payment Gateway",
          "target": "Shipping Co 2",
          "label": "Warehouse Info"
        },
        {
          "source": "Payment Gateway",
          "target": "3.0 Calculate Payment Gateway",
          "label": "Supplier Info"
        },
        {
          "source": "D1 Payment Gateway DB",
          "target": "2.0 Calculate Warehouse",
          "label": "Admin Details"
        }
      ]
    }
  },
  {
    "id": 110,
    "title": "Transport Flow (Q110)",
    "category": "Transport",
    "level": "Level 2 DFD",
    "difficulty": "Easy",
    "description": "The '1.0 Manage Payment Gateway' sends 'Payment Gateway Alert' to 'D1 Payment Gateway DB'. The 'D1 Payment Gateway DB' sends 'Driver Report' to '2.0 Generate Passenger'. The '1.0 Manage Payment Gateway' sends 'Maintenance Data' to 'Dispatch'. The '2.0 Generate Passenger' sends 'Maintenance Details' to 'D1 Payment Gateway DB'. The 'Dispatch' sends 'Payment Gateway Details' to '1.0 Manage Payment Gateway'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Dispatch"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Manage Payment Gateway"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Generate Passenger"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Payment Gateway DB"
        }
      ],
      "edges": [
        {
          "source": "1.0 Manage Payment Gateway",
          "target": "D1 Payment Gateway DB",
          "label": "Payment Gateway Alert"
        },
        {
          "source": "D1 Payment Gateway DB",
          "target": "2.0 Generate Passenger",
          "label": "Driver Report"
        },
        {
          "source": "1.0 Manage Payment Gateway",
          "target": "Dispatch",
          "label": "Maintenance Data"
        },
        {
          "source": "2.0 Generate Passenger",
          "target": "D1 Payment Gateway DB",
          "label": "Maintenance Details"
        },
        {
          "source": "Dispatch",
          "target": "1.0 Manage Payment Gateway",
          "label": "Payment Gateway Details"
        }
      ]
    }
  },
  {
    "id": 111,
    "title": "Education Flow (Q111)",
    "category": "Education",
    "level": "Level 2 DFD",
    "difficulty": "Medium",
    "description": "The '1.0 Calculate Parents' sends 'Student Invoice' to 'D2 Teacher DB'. The 'Admin' sends 'Library Response' to '2.0 Update Library'. The 'Teacher 2' sends 'Ministry Metrics' to '2.0 Update Library'. The 'D2 Teacher DB' sends 'Library Request' to '2.0 Update Library'. The '3.0 Validate Admin' sends 'Student Info' to 'Teacher 2'. The 'D1 Student DB' sends 'Library Info' to '3.0 Validate Admin'. The 'D2 Teacher DB' sends 'Parents Status' to '3.0 Validate Admin'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Admin"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Teacher 2"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Calculate Parents"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Update Library"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Validate Admin"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Student DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Teacher DB"
        }
      ],
      "edges": [
        {
          "source": "1.0 Calculate Parents",
          "target": "D2 Teacher DB",
          "label": "Student Invoice"
        },
        {
          "source": "Admin",
          "target": "2.0 Update Library",
          "label": "Library Response"
        },
        {
          "source": "Teacher 2",
          "target": "2.0 Update Library",
          "label": "Ministry Metrics"
        },
        {
          "source": "D2 Teacher DB",
          "target": "2.0 Update Library",
          "label": "Library Request"
        },
        {
          "source": "3.0 Validate Admin",
          "target": "Teacher 2",
          "label": "Student Info"
        },
        {
          "source": "D1 Student DB",
          "target": "3.0 Validate Admin",
          "label": "Library Info"
        },
        {
          "source": "D2 Teacher DB",
          "target": "3.0 Validate Admin",
          "label": "Parents Status"
        }
      ]
    }
  },
  {
    "id": 112,
    "title": "Healthcare Flow (Q112)",
    "category": "Healthcare",
    "level": "Level 2 DFD",
    "difficulty": "Hard",
    "description": "The '1.0 Route Pharmacy' sends 'Doctor Details' to 'Lab 2'. The 'Patient 3' sends 'Insurance Info' to '2.0 Verify Insurance'. The 'D2 Pharmacy DB' sends 'Doctor Report' to '3.0 Schedule Insurance'. The 'D1 Lab DB' sends 'Doctor Data' to '3.0 Schedule Insurance'. The 'D3 Doctor DB' sends 'Pharmacy Metrics' to '4.0 Validate Patient'. The '3.0 Schedule Insurance' sends 'Pharmacy Metrics' to 'Lab 2'. The 'D3 Doctor DB' sends 'Doctor Report' to '1.0 Route Pharmacy'. The 'Patient 3' sends 'Insurance Invoice' to '2.0 Verify Insurance'. The '1.0 Route Pharmacy' sends 'Patient Response' to 'Lab 2'.",
    "ideal": {
      "nodes": [
        {
          "id": "e0",
          "type": "entity",
          "label": "Nurse"
        },
        {
          "id": "e1",
          "type": "entity",
          "label": "Lab 2"
        },
        {
          "id": "e2",
          "type": "entity",
          "label": "Patient 3"
        },
        {
          "id": "p0",
          "type": "process",
          "label": "1.0 Route Pharmacy"
        },
        {
          "id": "p1",
          "type": "process",
          "label": "2.0 Verify Insurance"
        },
        {
          "id": "p2",
          "type": "process",
          "label": "3.0 Schedule Insurance"
        },
        {
          "id": "p3",
          "type": "process",
          "label": "4.0 Validate Patient"
        },
        {
          "id": "s0",
          "type": "dataStore",
          "label": "D1 Lab DB"
        },
        {
          "id": "s1",
          "type": "dataStore",
          "label": "D2 Pharmacy DB"
        },
        {
          "id": "s2",
          "type": "dataStore",
          "label": "D3 Doctor DB"
        }
      ],
      "edges": [
        {
          "source": "1.0 Route Pharmacy",
          "target": "Lab 2",
          "label": "Doctor Details"
        },
        {
          "source": "Patient 3",
          "target": "2.0 Verify Insurance",
          "label": "Insurance Info"
        },
        {
          "source": "D2 Pharmacy DB",
          "target": "3.0 Schedule Insurance",
          "label": "Doctor Report"
        },
        {
          "source": "D1 Lab DB",
          "target": "3.0 Schedule Insurance",
          "label": "Doctor Data"
        },
        {
          "source": "D3 Doctor DB",
          "target": "4.0 Validate Patient",
          "label": "Pharmacy Metrics"
        },
        {
          "source": "3.0 Schedule Insurance",
          "target": "Lab 2",
          "label": "Pharmacy Metrics"
        },
        {
          "source": "D3 Doctor DB",
          "target": "1.0 Route Pharmacy",
          "label": "Doctor Report"
        },
        {
          "source": "Patient 3",
          "target": "2.0 Verify Insurance",
          "label": "Insurance Invoice"
        },
        {
          "source": "1.0 Route Pharmacy",
          "target": "Lab 2",
          "label": "Patient Response"
        }
      ]
    }
  }
];
