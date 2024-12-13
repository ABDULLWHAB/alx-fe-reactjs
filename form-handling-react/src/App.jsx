import React from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm'; // Import controlled form
import FormikForm from './components/FormikForm'; // Import Formik-based form

function App() {
  return (
    <div className="App">
      <h1>User Registration Forms</h1>
      
      {/* Controlled Component Form */}
      <section>
        <h2>Controlled Form</h2>
        <RegistrationForm />
      </section>

      {/* Formik Form */}
      <section>
        <h2>Formik Form</h2>
        <FormikForm />
      </section>
    </div>
  );
}

export default App;
