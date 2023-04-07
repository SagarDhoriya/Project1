import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobileNumber: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Here you can add your logic to submit the form data to your backend server
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    
      <div className="container my-3">
        <div className="border rounded bg-primary container-fluid">
          <h2 className="text-center my-3 text-white"> Sign Up</h2>
        </div>
        <form class="row g-3 mt-3 container" onSubmit={handleSubmit}>
          <div class="col-md-6">
            <label for="firstName" class="form-label">
              First Name
            </label>
            <input
            type="text"
            class="form-control"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          </div>
          <div class="col-md-6">
            <label for="lastName" class="form-label">
              Last Name
            </label>
            <input
            type="text"
            id="lastName"
            class="form-control"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          </div>
          <div class="col-12">
            <label for="email" class="form-label">
              Email
            </label>
            <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          </div>



          <div class="col-md-6">
            <label for="password" class="form-label">
              Password
            </label>
            <input
            type="password"
            id="password"
            name="password"
            class="form-control"
            value={formData.password}
            onChange={handleChange}
            required
          />
          </div>
          <div class="col-md-6">
            <label for="password" class="form-label">
             Confirm Password
            </label>
            <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            class="form-control"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          </div>


          <div class="col-md-6">
            <label for="mobileNumber" class="form-label">
             Mobile Number
            </label>
            <input
            type="tel"
            id="mobileNumber"
            class="form-control"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
          />
          </div>


          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
            <label class="form-check-label" for="flexRadioDefault1">
              Buyer
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label class="form-check-label" for="flexRadioDefault2">
              Seller
            </label>
          </div>

          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" required/>
              <label class="form-check-label" for="gridCheck">
                I agree to terms and conditions
              </label>
            </div>
          </div>
          <div class="col-12">
            <div className="d-grid my-2 w-75  col-6 mx-auto">
            <button className="btn btn-primary " onClick={() => navigate("/")}>
             <h5>Sign Up</h5> 
            </button>
          </div>
          </div>
        </form>
      </div>
    
  );
}

export default RegistrationForm;
