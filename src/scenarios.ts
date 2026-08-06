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
  level: 'Context Diagram' | 'Level 1 DFD';
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
const DOMAINS = [
  {
    cat: "Education & Library",
    items: [
      { name: "School Library Book Borrowing", actor: "Student", proc: "Process Borrowing", store1: "Book Ledger", store2: "Student Records", in1: "Borrow Request", out1: "Issued Book", data1: "Book Availability", data2: "Borrow Limit" },
      { name: "University Course Registration", actor: "Undergraduate", proc: "Register Course", store1: "Course Catalog", store2: "Student Enrolment", in1: "Course Selection", out1: "Registration Slip", data1: "Prerequisites", data2: "Enrolment Data" },
      { name: "Online Assignment Submission", actor: "Student", proc: "Submit Assignment", store1: "Submission DB", store2: "Course DB", in1: "Assignment File", out1: "Submission Receipt", data1: "Saved Submission", data2: "Deadline Check" },
      { name: "School Report Card Processing", actor: "Teacher", proc: "Compile Marks", store1: "Marks DB", store2: "Student Roster", in1: "Student Marks", out1: "Report Card", data1: "Grade Records", data2: "Class List" },
      { name: "University Hostel Allocation", actor: "Applicant", proc: "Allocate Hostel", store1: "Hostel Rooms DB", store2: "Application DB", in1: "Hostel Application", out1: "Room Key Voucher", data1: "Room Status", data2: "Applicant Details" },
      { name: "School Bus Pass Issuing", actor: "Parent", proc: "Issue Bus Pass", store1: "Bus Routes DB", store2: "Pass Registry", in1: "Pass Request & Fee", out1: "Bus Pass", data1: "Route Info", data2: "Pass Record" },
      { name: "Exam Seat Number Allocation", actor: "Candidate", proc: "Allocate Seat", store1: "Exam Halls DB", store2: "Candidate List", in1: "Index Number", out1: "Admission Card", data1: "Hall Capacity", data2: "Candidate Record" },
      { name: "University Scholarship Management", actor: "Student", proc: "Process Bursary", store1: "Bursary Criteria DB", store2: "Disbursement Ledger", in1: "Income Proof", out1: "Bursary Payment", data1: "Income Criteria", data2: "Payment Record" },
      { name: "Digital Library E-Book Download", actor: "Member", proc: "Process Download", store1: "E-Books DB", store2: "User Logs", in1: "Book ID", out1: "Download Link", data1: "File Data", data2: "Download Log" },
      { name: "School Canteen Pre-order", actor: "Student", proc: "Process Meal Order", store1: "Canteen Menu", store2: "Order Ledger", in1: "Meal Request", out1: "Meal Voucher", data1: "Item Price", data2: "Saved Order" }
    ]
  },
  {
    cat: "Healthcare & Medical",
    items: [
      { name: "Hospital Channeling System", actor: "Patient", proc: "Channel Doctor", store1: "Doctor Schedule", store2: "Booking Ledger", in1: "Specialist Request", out1: "Appointment Number", data1: "Schedule Data", data2: "Booking Record" },
      { name: "Pharmacy Prescription Processing", actor: "Patient", proc: "Dispense Medicine", store1: "Medicine Inventory", store2: "Prescription DB", in1: "Doctor Prescription", out1: "Dispensed Drugs", data1: "Stock Quantity", data2: "Prescription Log" },
      { name: "Medical Laboratory Test Booking", actor: "Patient", proc: "Process Lab Test", store1: "Test Tariff DB", store2: "Test Records", in1: "Sample Details", out1: "Lab Invoice", data1: "Tariff Rates", data2: "Test Order" },
      { name: "Blood Bank Donation Registry", actor: "Donor", proc: "Register Blood Donation", store1: "Blood Inventory", store2: "Donor DB", in1: "Donor Health Form", out1: "Donor Card", data1: "Blood Unit Record", data2: "Donor Profile" },
      { name: "Vaccination Booking Portal", actor: "Citizen", proc: "Schedule Vaccination", store1: "Vaccine Stock DB", store2: "Citizen Registry", in1: "NIC Number", out1: "Appointment QR", data1: "Available Doses", data2: "Vaccine Record" },
      { name: "Inward Patient Admission", actor: "Guardian", proc: "Admit Patient", store1: "Ward Beds DB", store2: "Patient Ledger", in1: "Admission Note", out1: "Ward Slip", data1: "Bed Availability", data2: "Patient Profile" },
      { name: "Medical Insurance Claim", actor: "Policy Holder", proc: "Verify Claim", store1: "Policy DB", store2: "Claims Ledger", in1: "Hospital Bills", out1: "Claim Approval", data1: "Coverage Rules", data2: "Saved Claim" },
      { name: "Doctor On-Call Dispatch", actor: "Dispatcher", proc: "Assign Doctor", store1: "Roster DB", store2: "Emergency Calls", in1: "Emergency Request", out1: "Doctor Notification", data1: "Doctor Availability", data2: "Call Record" },
      { name: "Dental Clinic Scheduling", actor: "Patient", proc: "Schedule Dental Checkup", store1: "Dentist Calendar", store2: "Clinic DB", in1: "Checkup Request", out1: "Time Slot Confirmation", data1: "Free Slots", data2: "Patient History" },
      { name: "Optical Shop Lens Order", actor: "Customer", proc: "Process Lens Order", store1: "Lens Inventory", store2: "Customer Prescription DB", in1: "Eye Prescription", out1: "Spectacles Receipt", data1: "Lens Stock", data2: "Order Details" }
    ]
  },
  {
    cat: "Retail & Supermarket",
    items: [
      { name: "Supermarket Point of Sale", actor: "Customer", proc: "Process Checkout", store1: "Product Price DB", store2: "Sales Journal", in1: "Scanned Items & Cash", out1: "Receipt", data1: "Unit Prices", data2: "Transaction Record" },
      { name: "Online Grocery Order", actor: "Shopper", proc: "Place Grocery Order", store1: "Catalog DB", store2: "Orders Ledger", in1: "Cart Items", out1: "Order Summary", data1: "Product Info", data2: "Order Record" },
      { name: "Supermarket Loyalty Card Points", actor: "Customer", proc: "Accrue Loyalty Points", store1: "Loyalty DB", store2: "Transactions Log", in1: "Loyalty Card ID", out1: "Updated Balance", data1: "Customer Points", data2: "Point Log" },
      { name: "Supplier Goods Return", actor: "Supplier", proc: "Process Return", store1: "Purchase Orders DB", store2: "Returns Ledger", in1: "Defective Items", out1: "Credit Note", data1: "PO Info", data2: "Return Record" },
      { name: "Inventory Stock Replenishment", actor: "Storekeeper", proc: "Reorder Stock", store1: "Stock DB", store2: "Reorder Ledger", in1: "Low Stock Alert", out1: "Purchase Request", data1: "Reorder Threshold", data2: "PO Request" },
      { name: "Hardware Store Equipment Rental", actor: "Builder", proc: "Rent Equipment", store1: "Tools Inventory", store2: "Rental Agreements", in1: "Rental Request", out1: "Rental Receipt", data1: "Tool Availability", data2: "Agreement Log" },
      { name: "Electronics Warranty Claim", actor: "Buyer", proc: "Validate Warranty", store1: "Sales DB", store2: "Warranty Claims", in1: "Serial Number", out1: "Repair Token", data1: "Purchase Date", data2: "Claim Entry" },
      { name: "Bakery Advance Cake Order", actor: "Customer", proc: "Reserve Cake", store1: "Bakery Schedule DB", store2: "Deposit Ledger", in1: "Custom Cake Request", out1: "Order Token", data1: "Slot Availability", data2: "Deposit Record" },
      { name: "Fashion Boutique Gift Voucher", actor: "Customer", proc: "Issue Gift Card", store1: "Vouchers DB", store2: "Accounts Ledger", in1: "Voucher Amount", out1: "Gift Card Code", data1: "Voucher Balance", data2: "Payment Entry" },
      { name: "Wholesale Order Discount Calculation", actor: "Retailer", proc: "Apply Bulk Discount", store1: "Discount Rate DB", store2: "Wholesale Orders", in1: "Bulk Order Quantity", out1: "Discounted Invoice", data1: "Tier Rates", data2: "Order Invoice" }
    ]
  },
  {
    cat: "Logistics & Transport",
    items: [
      { name: "Sri Lanka Railway Seat Reservation", actor: "Passenger", proc: "Reserve Seat", store1: "Train Schedule DB", store2: "Ticket Reservations", in1: "Journey Request", out1: "Train Ticket", data1: "Available Seats", data2: "Reservation Entry" },
      { name: "SLTB Bus Electronic Ticketing", actor: "Commuter", proc: "Issue Bus Ticket", store1: "Fare Table DB", store2: "Daily Bus Ledger", in1: "Destination", out1: "Printed Bus Ticket", data1: "Route Fare", data2: "Ticket Record" },
      { name: "Courier Parcel Tracking", actor: "Sender", proc: "Track Package", store1: "Tracking DB", store2: "Route Logs", in1: "Tracking ID", out1: "Parcel Location Report", data1: "Tracking Status", data2: "Location Log" },
      { name: "Container Depot Storage Billing", actor: "Shipping Agent", proc: "Calculate Storage Fee", store1: "Tariff Matrix DB", store2: "Depot Ledger", in1: "Container Stay Duration", out1: "Storage Invoice", data1: "Daily Rate", data2: "Invoice Entry" },
      { name: "Taxi Ride Booking", actor: "Rider", proc: "Assign Taxi", store1: "Driver Location DB", store2: "Trips DB", in1: "Pickup Location", out1: "Driver Details", data1: "Nearby Driver", data2: "Trip Record" },
      { name: "Airport Luggage Check-In", actor: "Passenger", proc: "Check Luggage", store1: "Flight Manifest DB", store2: "Baggage DB", in1: "Baggage Weight", out1: "Bag Tag", data1: "Weight Limit", data2: "Tag Record" },
      { name: "Port Customs Duty Calculation", actor: "Importer", proc: "Calculate Customs Duty", store1: "Tariff Code DB", store2: "Customs Ledger", in1: "Declaration Form", out1: "Duty Bill", data1: "Duty Rate", data2: "Customs Record" },
      { name: "Vehicle Fleet Fuel Distribution", actor: "Fleet Driver", proc: "Authorize Fuel Issue", store1: "Fleet Quota DB", store2: "Fuel Logs", in1: "Fuel Pass QR", data1: "Fuel Receipt", data2: "Weekly Balance", data3: "Fueling Log" },
      { name: "Cargo Freight Reservation", actor: "Exporter", proc: "Book Freight Space", store1: "Vessel Schedule DB", store2: "Cargo Bookings", in1: "Cargo Volume", out1: "Bill of Lading", data1: "Capacity", data2: "Booking Record" },
      { name: "Highway Toll Collection", actor: "Driver", proc: "Deduct Highway Toll", store1: "Vehicle Category DB", store2: "Toll Ledger", in1: "Electronic Tag", out1: "Gate Barrier Signal", data1: "Toll Rate", data2: "Payment Log" }
    ]
  },
  {
    cat: "Finance & Banking",
    items: [
      { name: "ATM Cash Withdrawal", actor: "Account Holder", proc: "Dispense Cash", store1: "Accounts DB", store2: "ATM Audit Log", in1: "ATM Card & PIN", out1: "Cash & Slip", data1: "Account Balance", data2: "Audit Record" },
      { name: "Bank Loan Application", actor: "Borrower", proc: "Evaluate Loan", store1: "Credit Rating DB", store2: "Loans DB", in1: "Income Certificate", out1: "Loan Approval Letter", data1: "Credit Rating", data2: "Loan Application Record" },
      { name: "Online Fund Transfer", actor: "Bank Customer", proc: "Transfer Money", store1: "Customer Accounts DB", store2: "Transfer Ledger", in1: "Payee & Amount", out1: "Transfer Confirmation", data1: "Account Balance", data2: "Transaction Record" },
      { name: "Fixed Deposit Opening", actor: "Investor", proc: "Open FD Account", store1: "FD Rates DB", store2: "Investments Ledger", in1: "Deposit Funds", out1: "FD Certificate", data1: "Interest Rates", data2: "FD Account Entry" },
      { name: "Credit Card Payment Processing", actor: "Cardholder", proc: "Process Settlement", store1: "Credit Card DB", store2: "Payments Ledger", in1: "Payment Amount", out1: "Payment Receipt", data1: "Outstanding Balance", data2: "Payment Record" },
      { name: "Foreign Exchange Currency Swap", actor: "Traveler", proc: "Exchange Currency", store1: "Exchange Rate DB", store2: "Forex Journal", in1: "Foreign Cash", out1: "Local Cash & Receipt", data1: "Daily Rate", data2: "Swap Entry" },
      { name: "Microfinance Group Loan", actor: "Group Leader", proc: "Process Group Credit", store1: "Group DB", store2: "Repayment Ledger", in1: "Group Application", out1: "Disbursement Advice", data1: "Group Standing", data2: "Disbursement Record" },
      { name: "Share Trading Order", actor: "Investor", proc: "Execute Trade Order", store1: "Stock Exchange DB", store2: "Investor Portfolio", in1: "Buy/Sell Order", out1: "Trade Contract Note", data1: "Share Price", data2: "Portfolio Record" },
      { name: "Pawnshop Gold Loan", actor: "Customer", proc: "Assess Gold Pawn", store1: "Gold Rates DB", store2: "Pawn Ticket DB", in1: "Gold Jewellery", out1: "Pawn Advance & Ticket", data1: "Gram Rate", data2: "Pawn Entry" },
      { name: "Cheque Clearance Processing", actor: "Depositor", proc: "Clear Cheque", store1: "Accounts DB", store2: "Cheque Clearing Log", in1: "Cheque Leaf", out1: "Credit Advice", data1: "Drawer Balance", data2: "Clearing Record" }
    ]
  },
  {
    cat: "Government & Public Services",
    items: [
      { name: "National Identity Card (NIC) Renewal", actor: "Citizen", proc: "Process NIC Application", store1: "Citizens DB", store2: "NIC Registry", in1: "Birth Certificate & Photo", out1: "NIC Slip", data1: "Citizen Record", data2: "NIC Record" },
      { name: "Passport Application Processing", actor: "Applicant", proc: "Issue Passport", store1: "Immigration DB", store2: "Passport Registry", in1: "Biometric Data & Form", out1: "Passport Document", data1: "Verification Record", data2: "Passport Record" },
      { name: "Driving License Renewal", actor: "Driver", proc: "Renew License", store1: "Drivers DB", store2: "License Registry", in1: "Medical Certificate & Fee", out1: "Temporary License", data1: "Driver Record", data2: "Renewal Log" },
      { name: "Motor Vehicle Revenue License", actor: "Vehicle Owner", proc: "Issue Revenue License", store1: "Vehicle DB", store2: "License Ledger", in1: "Emission Certificate", out1: "Revenue License Sticker", data1: "Vehicle Details", data2: "License Record" },
      { name: "Inland Revenue Income Tax Filing", actor: "Taxpayer", proc: "Calculate Tax Return", store1: "Tax Tables DB", store2: "Taxpayer Ledger", in1: "Income Statement", out1: "Tax Assessment Advice", data1: "Tax Bands", data2: "Filing Entry" },
      { name: "Electoral Registration Check", actor: "Voter", proc: "Verify Voter Entry", store1: "Electoral Roll DB", store2: "Voter Inquiries", in1: "House Number & NIC", out1: "Voter Slip", data1: "Voter Record", data2: "Inquiry Log" },
      { name: "National Birth Certificate Copy", actor: "Applicant", proc: "Issue Certificate Copy", store1: "Civil Registry DB", store2: "Request Log", in1: "Registration Number", out1: "Certified Copy", data1: "Birth Entry", data2: "Request Entry" },
      { name: "National Fuel Pass QR System", actor: "Vehicle Owner", proc: "Verify Fuel Quota", store1: "Fuel Quota DB", store2: "Pumping Logs", in1: "Fuel Pass QR Code", out1: "Quota Balance Receipt", data1: "Weekly Allowance", data2: "Fueling Record" },
      { name: "Divisional Secretariat Business Registration", actor: "Entrepreneur", proc: "Register Business", store1: "Business Registry DB", store2: "Tax Ledger", in1: "Business Name Form", out1: "Registration Certificate", data1: "Existing Names", data2: "Business Entry" },
      { name: "Land Title Registration", actor: "Landowner", proc: "Register Land Deed", store1: "Land Registry DB", store2: "Deeds Log", in1: "Deed Document", out1: "Title Certificate", data1: "Parcel Info", data2: "Deed Record" }
    ]
  },
  {
    cat: "Utilities & Telecom",
    items: [
      { name: "Electricity Bill Payment", actor: "Consumer", proc: "Process Electricity Payment", store1: "Consumer Accounts DB", store2: "Payment Receipts Log", in1: "Account Number & Cash", out1: "Payment Receipt", data1: "Account Balance", data2: "Receipt Record" },
      { name: "Water Board Connection Request", actor: "Applicant", proc: "Process New Connection", store1: "Pipeline DB", store2: "Connection Ledger", in1: "Premises Plan", out1: "Estimate Advice", data1: "Pipeline Distance", data2: "Application Record" },
      { name: "Mobile Prepaid Reload", actor: "Mobile User", proc: "Apply Reload", store1: "Subscriber Accounts DB", store2: "Reload Ledger", in1: "Phone Number & Cash", out1: "SMS Confirmation", data1: "Account Balance", data2: "Reload Entry" },
      { name: "Broadband Bill Settlement", actor: "Subscriber", proc: "Settle Broadband Bill", store1: "Billing DB", store2: "Payments Log", in1: "Account ID & Card Details", out1: "e-Receipt", data1: "Billed Amount", data2: "Payment Entry" },
      { name: "LP Gas Cylinder Distribution", actor: "Consumer", proc: "Issue Gas Cylinder", store1: "Gas Inventory DB", store2: "Sales Journal", in1: "Empty Cylinder & Payment", out1: "Filled Gas Cylinder", data1: "Gas Stock", data2: "Sale Entry" },
      { name: "Solar Net Metering Billing", actor: "Household", proc: "Calculate Net Tariff", store1: "Metering Rates DB", store2: "Net Ledger", in1: "Units Exported/Imported", out1: "Net Electricity Bill", data1: "Net Tariff Rate", data2: "Billing Entry" },
      { name: "Fixed Telephone Line Repair Booking", actor: "Customer", proc: "Log Fault Ticket", store1: "Line Infrastructure DB", store2: "Fault Tickets DB", in1: "Fault Description", out1: "Ticket Number", data1: "Line Status", data2: "Ticket Record" },
      { name: "Satellite TV Package Upgrade", actor: "Subscriber", proc: "Update TV Package", store1: "Channel Packages DB", store2: "Subscriber DB", in1: "Package Selection", out1: "Channel Activation Notice", data1: "Package Rates", data2: "Subscription Entry" },
      { name: "Garbage Collection Fee Payment", actor: "Resident", proc: "Process Utility Fee", store1: "Property Registry DB", store2: "Fee Ledger", in1: "Property Assessment No", out1: "Tax Receipt", data1: "Assessment Rate", data2: "Payment Log" },
      { name: "Street Light Fault Reporting", actor: "Citizen", proc: "Log Streetlight Defect", store1: "Grid Assets DB", store2: "Maintenance Complaints", in1: "Pole ID & Location", out1: "Complaint Reference", data1: "Asset Details", data2: "Complaint Log" }
    ]
  },
  {
    cat: "Hospitality & Food",
    items: [
      { name: "Restaurant Table Reservation", actor: "Diner", proc: "Book Restaurant Table", store1: "Table Layout DB", store2: "Reservations Ledger", in1: "Party Size & Time", out1: "Table Token", data1: "Table Availability", data2: "Booking Record" },
      { name: "Hotel Room Reservation", actor: "Guest", proc: "Reserve Room", store1: "Room Rates DB", store2: "Bookings DB", in1: "Dates & Guest Info", out1: "Booking Voucher", data1: "Room Availability", data2: "Reservation Entry" },
      { name: "Food Delivery App Order", actor: "Customer", proc: "Dispatch Meal Order", store1: "Restaurant Menu DB", store2: "Orders Log", in1: "Selected Dishes", out1: "Estimated Arrival Time", data1: "Menu Prices", data2: "Order Record" },
      { name: "Movie Theater Seat Ticket Booking", actor: "Moviegoer", proc: "Book Cinema Seats", store1: "Seat Plan DB", store2: "Tickets Ledger", in1: "Showtime & Seats", out1: "e-Ticket QR", data1: "Seat Availability", data2: "Ticket Record" },
      { name: "Theme Park Day Pass", actor: "Visitor", proc: "Issue Entry Wristband", store1: "Park Pass Tariff DB", store2: "Sales Journal", in1: "Pass Type & Cash", out1: "Entry Wristband", data1: "Pass Prices", data2: "Sale Entry" },
      { name: "Coffee Shop Order & Pickup", actor: "Customer", proc: "Prepare Beverage", store1: "Beverage Menu DB", store2: "Orders Queue", in1: "Drink Order", out1: "Pickup Token", data1: "Drink Options", data2: "Queue Entry" },
      { name: "Resort Activity Tour Booking", actor: "Tourist", proc: "Book Excursion", store1: "Tours Schedule DB", store2: "Excursions Ledger", in1: "Excursion Choice", out1: "Tour Ticket", data1: "Tour Capacity", data2: "Booking Record" },
      { name: "Catering Event Booking", actor: "Host", proc: "Reserve Catering", store1: "Menu Packages DB", store2: "Events DB", in1: "Guest Count & Menu", out1: "Catering Quotation", data1: "Package Rates", data2: "Event Record" },
      { name: "Hotel Laundry Service", actor: "Guest", proc: "Process Laundry", store1: "Laundry Tariff DB", store2: "Laundry Ledger", in1: "Clothes Bag", out1: "Laundry Receipt", data1: "Service Rates", data2: "Laundry Record" },
      { name: "Buffet Dining Payment", actor: "Guest", proc: "Collect Buffet Fee", store1: "Buffet Rates DB", store2: "Cash Receipts", in1: "Number of Guests & Payment", out1: "Buffet Voucher", data1: "Buffet Rates", data2: "Payment Record" }
    ]
  }
];

// Generates 200+ distinct Level 1 and Context Diagram scenarios
function generateFullScenariosList(): Scenario[] {
  const scenarios: Scenario[] = [...PAST_PAPER_SCENARIOS];
  let currentId = scenarios.length + 1;

  // Generate variants across 10 categories to reach 210 scenarios
  DOMAINS.forEach((domain) => {
    domain.items.forEach((item, idx) => {
      // Version A: Level 1 DFD
      scenarios.push({
        id: currentId++,
        title: `${item.name} (Level 1)`,
        category: domain.cat,
        level: "Level 1 DFD",
        description: `A '${item.actor}' sends a '${item.in1}' to '${item.proc}' (Process). The process verifies '${item.data1}' from '${item.store1}' (Data Store), saves '${item.data2}' in '${item.store2}' (Data Store), and sends '${item.out1}' to '${item.actor}'.`,
        ideal: {
          nodes: [
            { id: 'n1', type: 'entity', label: item.actor },
            { id: 'n2', type: 'process', label: item.proc },
            { id: 'n3', type: 'dataStore', label: item.store1 },
            { id: 'n4', type: 'dataStore', label: item.store2 }
          ],
          edges: [
            { source: item.actor, target: item.proc, label: item.in1 },
            { source: item.store1, target: item.proc, label: item.data1 },
            { source: item.proc, target: item.store2, label: item.data2 },
            { source: item.proc, target: item.actor, label: item.out1 }
          ]
        }
      });

      // Version B: Context Diagram
      scenarios.push({
        id: currentId++,
        title: `${item.name} (Context Diagram)`,
        category: domain.cat,
        level: "Context Diagram",
        description: `A '${item.actor}' submits '${item.in1}' to '${item.name} System' (Process). The system processes the request and issues '${item.out1}' to the '${item.actor}'.`,
        ideal: {
          nodes: [
            { id: 'n1', type: 'entity', label: item.actor },
            { id: 'n2', type: 'process', label: `${item.name} System` }
          ],
          edges: [
            { source: item.actor, target: `${item.name} System`, label: item.in1 },
            { source: `${item.name} System`, target: item.actor, label: item.out1 }
          ]
        }
      });
    });
  });

  return scenarios;
}

export const SCENARIOS: Scenario[] = generateFullScenariosList();
