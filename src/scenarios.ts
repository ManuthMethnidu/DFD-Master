import { GENERATED_SCENARIOS } from './generatedScenarios';

export interface ScenarioNode {
  id: string;
  type: 'entity' | 'process' | 'dataStore';
  label: string;
}

export interface ScenarioEdge {
  source: string;
  target: string;
  label: string;
}

export interface Scenario {
  id: number;
  title: string;
  category: string;
  level: 'Context Diagram' | 'Level 1 DFD' | 'Level 2 DFD';
  difficulty?: 'Easy' | 'Medium' | 'Hard' | 'Expert';
  description: string;
  ideal: {
    nodes: ScenarioNode[];
    edges: ScenarioEdge[];
  };
}

// 1. Hand-crafted Past Papers (2011 - 2024 A/L ICT Syllabus DFD Questions)
const PAST_PAPER_SCENARIOS: Scenario[] = [
  {
    id: 1,
    title: "Bookland Enquiries (2016/2017 Past Paper)",
    category: "A/L Past Papers",
    level: "Level 1 DFD",
    description: "A 'Customer' makes a 'Book Enquiry' to 'Handle Enquiries' (Process). The process checks 'Book Details' in the 'Inventory' (Data Store). It then records a 'Hold-on Request' in the 'Hold-on Tray' (Data Store) and gives a 'Reply' to the 'Customer'.",
    ideal: {
      nodes: [
        { id: 'n1', type: 'entity', label: 'Customer' },
        { id: 'n2', type: 'process', label: 'Handle Enquiries' },
        { id: 'n3', type: 'dataStore', label: 'Inventory' },
        { id: 'n4', type: 'dataStore', label: 'Hold-on Tray' }
      ],
      edges: [
        { source: 'Customer', target: 'Handle Enquiries', label: 'Book Enquiry' },
        { source: 'Handle Enquiries', target: 'Inventory', label: 'Book Details' },
        { source: 'Inventory', target: 'Handle Enquiries', label: 'Book Details' },
        { source: 'Handle Enquiries', target: 'Hold-on Tray', label: 'Hold-on Request' },
        { source: 'Handle Enquiries', target: 'Customer', label: 'Reply' }
      ]
    }
  },
  {
    id: 2,
    title: "Bookland Payments (2016/2017 Past Paper)",
    category: "A/L Past Papers",
    level: "Level 1 DFD",
    description: "A 'Customer' makes a 'Payment' to 'Handle Payments' (Process). The process retrieves the 'Hold-on Request' from the 'Hold-on Tray' (Data Store). It updates 'Book Details' in 'Inventory' (Data Store), saves a 'Payment Receipt' in the 'Sales' (Data Store), and issues a 'Receipt Copy' to the 'Customer'.",
    ideal: {
      nodes: [
        { id: 'n1', type: 'entity', label: 'Customer' },
        { id: 'n2', type: 'process', label: 'Handle Payments' },
        { id: 'n3', type: 'dataStore', label: 'Hold-on Tray' },
        { id: 'n4', type: 'dataStore', label: 'Inventory' },
        { id: 'n5', type: 'dataStore', label: 'Sales' }
      ],
      edges: [
        { source: 'Customer', target: 'Handle Payments', label: 'Payment' },
        { source: 'Hold-on Tray', target: 'Handle Payments', label: 'Hold-on Request' },
        { source: 'Handle Payments', target: 'Inventory', label: 'Book Details' },
        { source: 'Handle Payments', target: 'Sales', label: 'Payment Receipt' },
        { source: 'Handle Payments', target: 'Customer', label: 'Receipt Copy' }
      ]
    }
  },
  {
    id: 3,
    title: "Furniture Shop Orders (2022 Past Paper)",
    category: "A/L Past Papers",
    level: "Level 1 DFD",
    description: "A 'Customer' sends a 'Customer Order' to 'Accept Order' (Process). The process sends 'Order Details' to 'Handle Inventory' (Process). The 'Handle Inventory' process checks 'Item Details' from 'Inventory DB' (Data Store) and issues a 'Delivery Note' to the 'Customer'.",
    ideal: {
      nodes: [
        { id: 'n1', type: 'entity', label: 'Customer' },
        { id: 'n2', type: 'process', label: 'Accept Order' },
        { id: 'n3', type: 'process', label: 'Handle Inventory' },
        { id: 'n4', type: 'dataStore', label: 'Inventory DB' }
      ],
      edges: [
        { source: 'Customer', target: 'Accept Order', label: 'Customer Order' },
        { source: 'Accept Order', target: 'Handle Inventory', label: 'Order Details' },
        { source: 'Inventory DB', target: 'Handle Inventory', label: 'Item Details' },
        { source: 'Handle Inventory', target: 'Customer', label: 'Delivery Note' }
      ]
    }
  },
  {
    id: 4,
    title: "School Admission Verification (2016 Past Paper)",
    category: "A/L Past Papers",
    level: "Level 1 DFD",
    description: "An 'Applicant' submits an 'Application' to 'Process Verification' (Process). The process checks 'Eligibility' from the 'Criteria DB' (Data Store). Valid applications are sent as 'Qualified Applications' to 'Schedule Interviews' (Process). This process saves the 'Interview Schedule' in 'Schedule DB' (Data Store) and sends it to the 'Education Authority' (Entity).",
    ideal: {
      nodes: [
        { id: 'n1', type: 'entity', label: 'Applicant' },
        { id: 'n2', type: 'process', label: 'Process Verification' },
        { id: 'n3', type: 'dataStore', label: 'Criteria DB' },
        { id: 'n4', type: 'process', label: 'Schedule Interviews' },
        { id: 'n5', type: 'dataStore', label: 'Schedule DB' },
        { id: 'n6', type: 'entity', label: 'Education Authority' }
      ],
      edges: [
        { source: 'Applicant', target: 'Process Verification', label: 'Application' },
        { source: 'Criteria DB', target: 'Process Verification', label: 'Eligibility' },
        { source: 'Process Verification', target: 'Schedule Interviews', label: 'Qualified Applications' },
        { source: 'Schedule Interviews', target: 'Schedule DB', label: 'Interview Schedule' },
        { source: 'Schedule Interviews', target: 'Education Authority', label: 'Interview Schedule' }
      ]
    }
  },
  {
    id: 5,
    title: "Blood Testing Centre (2018 Past Paper)",
    category: "A/L Past Papers",
    level: "Context Diagram",
    description: "A 'Patient' submits a 'Test Request' to the 'Blood Testing System' (Process). The system gives back an 'Invoice'. The 'Patient' then provides 'Payment', and eventually the system returns a 'Test Report' to the 'Patient'.",
    ideal: {
      nodes: [
        { id: 'n1', type: 'entity', label: 'Patient' },
        { id: 'n2', type: 'process', label: 'Blood Testing System' }
      ],
      edges: [
        { source: 'Patient', target: 'Blood Testing System', label: 'Test Request' },
        { source: 'Blood Testing System', target: 'Patient', label: 'Invoice' },
        { source: 'Patient', target: 'Blood Testing System', label: 'Payment' },
        { source: 'Blood Testing System', target: 'Patient', label: 'Test Report' }
      ]
    }
  },
  {
    id: 6,
    title: "NUICT Online NetAssign System (2016 Past Paper)",
    category: "A/L Past Papers",
    level: "Context Diagram",
    description: "The 'NUICT' provides 'Auth Details' to 'NetAssign' (Process). A 'Student' sends 'Auth Details' and 'Answer Script', and receives 'Grades'. An 'Examiner' submits 'Assignments' and 'Marks'.",
    ideal: {
      nodes: [
        { id: 'n1', type: 'entity', label: 'NUICT' },
        { id: 'n2', type: 'entity', label: 'Student' },
        { id: 'n3', type: 'entity', label: 'Examiner' },
        { id: 'n4', type: 'process', label: 'NetAssign' }
      ],
      edges: [
        { source: 'NUICT', target: 'NetAssign', label: 'Auth Details' },
        { source: 'Student', target: 'NetAssign', label: 'Auth Details' },
        { source: 'Student', target: 'NetAssign', label: 'Answer Script' },
        { source: 'NetAssign', target: 'Student', label: 'Grades' },
        { source: 'Examiner', target: 'NetAssign', label: 'Assignments' },
        { source: 'Examiner', target: 'NetAssign', label: 'Marks' }
      ]
    }
  },
  {
    id: 7,
    title: "LIPS Online Library Processing (2015 Past Paper)",
    category: "A/L Past Papers",
    level: "Context Diagram",
    description: "A 'User' submits an 'Application' to 'LIPS' (Process). LIPS sends an 'Activation Code' to 'NITL' (Entity). The user then submits 'Login Details' to 'LIPS' and receives 'E-Books'.",
    ideal: {
      nodes: [
        { id: 'n1', type: 'entity', label: 'User' },
        { id: 'n2', type: 'entity', label: 'NITL' },
        { id: 'n3', type: 'process', label: 'LIPS' }
      ],
      edges: [
        { source: 'User', target: 'LIPS', label: 'Application' },
        { source: 'LIPS', target: 'NITL', label: 'Activation Code' },
        { source: 'User', target: 'LIPS', label: 'Login Details' },
        { source: 'LIPS', target: 'User', label: 'E-Books' }
      ]
    }
  },
  {
    id: 8,
    title: "Parcel Sorting & Barcode Delivery (2013 Past Paper)",
    category: "A/L Past Papers",
    level: "Context Diagram",
    description: "A 'Sender' provides a 'Parcel' with postal code to 'Parcel Delivery System' (Process). The system routes parcel details to 'Delivery Driver' (Entity) and sends 'Delivery Status' back to 'Sender'.",
    ideal: {
      nodes: [
        { id: 'n1', type: 'entity', label: 'Sender' },
        { id: 'n2', type: 'process', label: 'Parcel Delivery System' },
        { id: 'n3', type: 'entity', label: 'Delivery Driver' }
      ],
      edges: [
        { source: 'Sender', target: 'Parcel Delivery System', label: 'Parcel' },
        { source: 'Parcel Delivery System', target: 'Delivery Driver', label: 'Parcel Details' },
        { source: 'Delivery Driver', target: 'Parcel Delivery System', label: 'Delivery Status' },
        { source: 'Parcel Delivery System', target: 'Sender', label: 'Delivery Status' }
      ]
    }
  },
  {
    id: 9,
    title: "Registered Post Office (2019 Past Paper)",
    category: "A/L Past Papers",
    level: "Level 1 DFD",
    description: "A 'Customer' hands over a letter to 'Determine Postage' (Process). The process reads 'Weight Table' from 'Postage Rates' (Data Store) and gives 'Postage Amount' to 'Customer'.",
    ideal: {
      nodes: [
        { id: 'n1', type: 'entity', label: 'Customer' },
        { id: 'n2', type: 'process', label: 'Determine Postage' },
        { id: 'n3', type: 'dataStore', label: 'Postage Rates' }
      ],
      edges: [
        { source: 'Customer', target: 'Determine Postage', label: 'Letter Details' },
        { source: 'Postage Rates', target: 'Determine Postage', label: 'Weight Table' },
        { source: 'Determine Postage', target: 'Customer', label: 'Postage Amount' }
      ]
    }
  },
  {
    id: 10,
    title: "Hotel Check-Out & Final Billing (2023 Past Paper)",
    category: "A/L Past Papers",
    level: "Level 1 DFD",
    description: "A 'Guest' provides 'Check-Out Request' to 'Make Final Bill' (Process). The process reads 'Room Cost' from 'Room Rates' (Data Store) and 'Restaurant Cost' from 'Services DB' (Data Store), and sends 'Final Bill' to 'Guest'.",
    ideal: {
      nodes: [
        { id: 'n1', type: 'entity', label: 'Guest' },
        { id: 'n2', type: 'process', label: 'Make Final Bill' },
        { id: 'n3', type: 'dataStore', label: 'Room Rates' },
        { id: 'n4', type: 'dataStore', label: 'Services DB' }
      ],
      edges: [
        { source: 'Guest', target: 'Make Final Bill', label: 'Check-Out Request' },
        { source: 'Room Rates', target: 'Make Final Bill', label: 'Room Cost' },
        { source: 'Services DB', target: 'Make Final Bill', label: 'Restaurant Cost' },
        { source: 'Make Final Bill', target: 'Guest', label: 'Final Bill' }
      ]
    }
  },
  {
    id: 11,
    title: "Computer Lab Reservation (2022 Past Paper)",
    category: "A/L Past Papers",
    level: "Level 1 DFD",
    description: "A 'Student' sends 'Reservation Request' to 'Manage Reservation' (Process). The process verifies 'Slot Availability' from 'Slots DB' (Data Store), saves 'Booking Data' in 'Reservations DB' (Data Store), and returns 'Confirmation' to 'Student'.",
    ideal: {
      nodes: [
        { id: 'n1', type: 'entity', label: 'Student' },
        { id: 'n2', type: 'process', label: 'Manage Reservation' },
        { id: 'n3', type: 'dataStore', label: 'Slots DB' },
        { id: 'n4', type: 'dataStore', label: 'Reservations DB' }
      ],
      edges: [
        { source: 'Student', target: 'Manage Reservation', label: 'Reservation Request' },
        { source: 'Slots DB', target: 'Manage Reservation', label: 'Slot Availability' },
        { source: 'Manage Reservation', target: 'Reservations DB', label: 'Booking Data' },
        { source: 'Manage Reservation', target: 'Student', label: 'Confirmation' }
      ]
    }
  },
  {
    id: 12,
    title: "Hospital Clinic Appointment (2021 Past Paper)",
    category: "A/L Past Papers",
    level: "Level 1 DFD",
    description: "A 'Patient' submits 'Patient Number' to 'Validity Check' (Process). The process checks 'Appointments Data' in 'Appointments DB' (Data Store). If valid, it adds the patient to 'Present DB' (Data Store) and issues an 'Appointment Ticket' to 'Patient'.",
    ideal: {
      nodes: [
        { id: 'n1', type: 'entity', label: 'Patient' },
        { id: 'n2', type: 'process', label: 'Validity Check' },
        { id: 'n3', type: 'dataStore', label: 'Appointments DB' },
        { id: 'n4', type: 'dataStore', label: 'Present DB' }
      ],
      edges: [
        { source: 'Patient', target: 'Validity Check', label: 'Patient Number' },
        { source: 'Appointments DB', target: 'Validity Check', label: 'Appointments Data' },
        { source: 'Validity Check', target: 'Present DB', label: 'Patient Entry' },
        { source: 'Validity Check', target: 'Patient', label: 'Appointment Ticket' }
      ]
    }
  }
];

// Helper procedural template generators to build 200+ distinct syllabus-compliant scenarios

export const SCENARIOS: Scenario[] = [...PAST_PAPER_SCENARIOS, ...GENERATED_SCENARIOS];
