Student Management System

A simple Student Management System built with React.js + Vite.The application provides a clean interface for managing student records, including viewing, searching, adding, editing, deleting, and logging out of the student management section.

Preview

The project contains a student list interface with:

Student Management navigation bar

Student List page

Search student by name

Student information table

Add Student button

Edit and Delete actions

Logout button

Responsive Bootstrap-style UI

Features

Student List

Displays student information in a table with the following fields:

Name

Roll Number

Phone

Email

Age

Class

Grade

Actions

Search Student

Users can search students by their name using the search input.

Add Student

The Add Student button can be used to navigate to or open the student registration form.

Edit Student

Each student record contains an Edit button for updating student information.

Delete Student

Each student record contains a Delete button for removing a student.

Logout

The Logout button allows the user to leave the student management section.

Sample Data

The interface shown in the project contains sample student records similar to:

Name

Roll Number

Phone

Email

Age

Class

Grade

Vivek

1014

92005813544

vivekdesai@gmail.com

21

Web-development

A

Disha

1015

(437) 881-8280

disha@gmail.com

19

12

A+

Replace the sample data with data from your API, database, or local storage as required.

Tech Stack

React.js – Frontend UI library

Vite – Development server and build tool

JavaScript (ES6+) – Application logic

HTML5 – Page structure

CSS3 – Styling

Bootstrap – UI components and responsive styling

React Router DOM – Client-side routing, if routes are used in the project

Dependencies

The project is intended to use the following packages:

Runtime Dependencies

npm install react react-dom react-router-dom bootstrap

Development Dependencies

Vite's standard React setup uses:

npm install -D vite @vitejs/plugin-react

If the project was created using the current Vite React template, package.json will also contain the standard Vite development dependencies appropriate to the installed Vite version.

Recommended package.json

{
  "name": "student-management-system",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "bootstrap": "^5.3.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^7.0.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "vite": "^7.0.0"
  }
}

Important: Dependency versions should match the versions installed in your actual project. Run npm list --depth=0 or check package.json to see the exact versions.

Project Setup

1. Clone the Project

git clone <your-repository-url>
cd student-management-system

2. Install Dependencies

npm install

3. Start the Development Server

npm run dev

Vite will display a local development URL, usually similar to:

http://localhost:5173/

Open that URL in your browser.

Build for Production

Create an optimized production build:

npm run build

The generated production files will be available inside the dist directory.

To preview the production build locally:

npm run preview

Suggested Project Structure

student-management-system/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── StudentTable.jsx
│   │   └── StudentForm.jsx
│   │
│   ├── pages/
│   │   ├── StudentList.jsx
│   │   ├── AddStudent.jsx
│   │   └── EditStudent.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md

The exact structure can differ depending on how the project was implemented.

Main UI

The Student List page contains a navigation bar with:

Student Management

[Student List] [Add Student] [Logout]

The main section contains:

                 Student List

[ Search student by name                         ]

| Name  | Roll Number | Phone | Email | Age | Class | Grade | Action |
|-------|-------------|-------|-------|-----|-------|-------|--------|
| ...   | ...         | ...   | ...   | ... | ...   | ...   | Edit Delete |

Bootstrap

If Bootstrap is being used, import it in main.jsx:

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

Or, if only Bootstrap CSS is required:

import 'bootstrap/dist/css/bootstrap.min.css';

React Entry Point

A typical Vite React main.jsx looks like:

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

Example Student Data

For a frontend-only implementation, student data can initially be stored in an array:

const students = [
  {
    id: 1,
    name: 'Vivek',
    rollNumber: '1014',
    phone: '92005813544',
    email: 'vivekdesai@gmail.com',
    age: 21,
    className: 'Web-development',
    grade: 'A'
  },
  {
    id: 2,
    name: 'Disha',
    rollNumber: '1015',
    phone: '(437) 881-8280',
    email: 'disha@gmail.com',
    age: 19,
    className: '12',
    grade: 'A+'
  }
];

Search Functionality

A basic name search can be implemented using:

const filteredStudents = students.filter((student) =>
  student.name.toLowerCase().includes(searchTerm.toLowerCase())
);

CRUD Operations

The application can be extended to support complete CRUD operations:

Create – Add a new student

Read – Display student records

Update – Edit existing student details

Delete – Remove a student

For a production application, these operations can be connected to a backend API and database.

Routing

If React Router is used, typical routes can be:

/                  → Student List
/students          → Student List
/students/add      → Add Student
/students/edit/:id → Edit Student
/login             → Login

Example:

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/students/add" element={<AddStudent />} />
        <Route path="/students/edit/:id" element={<EditStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

Environment Variables

If the application communicates with a backend API, create a .env file:

VITE_API_URL=http://localhost:5000/api

Access it in React with:

const API_URL = import.meta.env.VITE_API_URL;

Do not commit private API keys or secrets to GitHub.

Available Scripts

Command

Description

npm install

Install project dependencies

npm run dev

Start the Vite development server

npm run build

Create a production build

npm run preview

Preview the production build

Browser Support

The application is designed for modern browsers such as:

Google Chrome

Microsoft Edge

Mozilla Firefox

Safari

Future Improvements

Possible improvements include:

Login and authentication

Backend API integration

Database integration

Pagination

Sorting by columns

Advanced student filtering

Form validation

Confirmation dialog before deletion

Toast notifications

Responsive mobile table

Student profile/details page

Export student data to CSV/PDF

Role-based access control

Troubleshooting

npm install fails

Delete the existing installation files and reinstall:

rm -rf node_modules package-lock.json
npm install

On Windows PowerShell:

Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install

Vite server is not starting

Check that Node.js and npm are installed:

node -v
npm -v

Then run:

npm install
npm run dev

Bootstrap styles are not appearing

Make sure Bootstrap is installed:

npm install bootstrap

and imported in your application:

import 'bootstrap/dist/css/bootstrap.min.css';

Author

Student Management System

Built using React + Vite + JavaScript.

License

This project is available for educational and development purposes. Add your preferred license here if you plan to distribute the project.
