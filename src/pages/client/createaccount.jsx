import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/createaccount.css'; 

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: 'US',
    dob: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneCode: '+1', // Added phone code to state
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log("Creating account for:", formData.email, "Phone:", formData.phoneCode + formData.phone);
  };

  return (
    <div className="creeacc-container">
      <div className="creeacc-content">
        
        <header className="creeacc-header">
          <h1 className="creeacc-title">Create Your Account</h1>
          <p className="creeacc-subtitle">One account for everything on our store.</p>
        </header>

        <form className="creeacc-form" onSubmit={handleSubmit}>
          
          {/* Name Row */}
          <div className="creeacc-input-row">
            <div className="creeacc-input-group">
              <input 
                type="text" 
                name="firstName"
                className="creeacc-input" 
                placeholder="First Name" 
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="creeacc-input-group">
              <input 
                type="text" 
                name="lastName"
                className="creeacc-input" 
                placeholder="Last Name" 
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="creeacc-input-group">
            <span className="creeacc-floating-label">COUNTRY / REGION</span>
            <select 
              name="country"
              className="creeacc-input creeacc-select"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="CA">Canada</option>
              <option value="AU">Australia</option>
              <option value="AF">Afghanistan</option>
              <option value="AM">Armenia</option>
              <option value="BD">Bangladesh</option>
              <option value="BT">Bhutan</option>
              <option value="BN">Brunei</option>
              <option value="KH">Cambodia</option>
              <option value="CN">China</option>
              <option value="CY">Cyprus</option>
              <option value="GE">Georgia</option>
              <option value="IN">India</option>
              <option value="ID">Indonesia</option>
              <option value="IR">Iran</option>
              <option value="IQ">Iraq</option>
              <option value="IL">Israel</option>
              <option value="JP">Japan</option>
              <option value="JO">Jordan</option>
              <option value="KZ">Kazakhstan</option>
              <option value="KW">Kuwait</option>
              <option value="KG">Kyrgyzstan</option>
              <option value="LA">Laos</option>
              <option value="LB">Lebanon</option>
              <option value="MY">Malaysia</option>
              <option value="MV">Maldives</option>
              <option value="MN">Mongolia</option>
              <option value="MM">Myanmar</option>
              <option value="NP">Nepal</option>
              <option value="PK">Pakistan</option>
              <option value="PS">Palestine</option>
              <option value="PH">Philippines</option>
              <option value="QA">Qatar</option>
              <option value="SA">Saudi Arabia</option>
              <option value="SG">Singapore</option>
              <option value="KR">South Korea</option>
              <option value="LK">Sri Lanka</option>
              <option value="SY">Syria</option>
              <option value="TW">Taiwan</option>
              <option value="TJ">Tajikistan</option>
              <option value="TH">Thailand</option>
              <option value="TL">Timor-Leste</option>
              <option value="TR">Turkey</option>
              <option value="TM">Turkmenistan</option>
              <option value="AE">United Arab Emirates</option>
              <option value="UZ">Uzbekistan</option>
              <option value="VN">Vietnam</option>
             
            </select>
          </div>

          <div className="creeacc-input-group">
            <input 
              type="date" 
              name="dob"
              className="creeacc-input" 
              placeholder="Birthday" 
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>

          <div className="creeacc-divider-thin"></div>

          <div className="creeacc-input-group">
            <input 
              type="email" 
              name="email"
              className="creeacc-input" 
              placeholder="name@gmail.com" 
              value={formData.email}
              onChange={handleChange}
              required
            />
            <p className="creeacc-help-text">This will be your new Account ID.</p>
          </div>

          <div className="creeacc-input-group">
            <input 
              type="password" 
              name="password"
              className="creeacc-input" 
              placeholder="Password" 
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="creeacc-input-group">
            <input 
              type="password" 
              name="confirmPassword"
              className="creeacc-input" 
              placeholder="Confirm Password" 
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="creeacc-divider-thin"></div>

          {/* UPDATED: Phone Row with Country Code */}
          <div className="creeacc-input-group">
            <div className="creeacc-phone-row">
              <select 
                name="phoneCode"
                className="creeacc-input creeacc-select creeacc-phone-code"
                value={formData.phoneCode}
                onChange={handleChange}
              >
<option value="+1">+1 (US)</option>
<option value="+44">+44 (UK)</option>
<option value="+1">+1 (CA)</option>
<option value="+61">+61 (AU)</option>
<option value="+93">+93 (AF)</option>
<option value="+374">+374 (AM)</option>
<option value="+880">+880 (BD)</option>
<option value="+975">+975 (BT)</option>
<option value="+673">+673 (BN)</option>
<option value="+855">+855 (KH)</option>
<option value="+86">+86 (CN)</option>
<option value="+357">+357 (CY)</option>
<option value="+995">+995 (GE)</option>
<option value="+91">+91 (IN)</option>
<option value="+62">+62 (ID)</option>
<option value="+98">+98 (IR)</option>
<option value="+964">+964 (IQ)</option>
<option value="+972">+972 (IL)</option>
<option value="+81">+81 (JP)</option>
<option value="+962">+962 (JO)</option>
<option value="+7">+7 (KZ)</option>
<option value="+965">+965 (KW)</option>
<option value="+996">+996 (KG)</option>
<option value="+856">+856 (LA)</option>
<option value="+961">+961 (LB)</option>
<option value="+60">+60 (MY)</option>
<option value="+960">+960 (MV)</option>
<option value="+976">+976 (MN)</option>
<option value="+95">+95 (MM)</option>
<option value="+977">+977 (NP)</option>
<option value="+92">+92 (PK)</option>
<option value="+970">+970 (PS)</option>
<option value="+63">+63 (PH)</option>
<option value="+974">+974 (QA)</option>
<option value="+966">+966 (SA)</option>
<option value="+65">+65 (SG)</option>
<option value="+82">+82 (KR)</option>
<option value="+94">+94 (LK)</option>
<option value="+963">+963 (SY)</option>
<option value="+886">+886 (TW)</option>
<option value="+992">+992 (TJ)</option>
<option value="+66">+66 (TH)</option>
<option value="+670">+670 (TL)</option>
<option value="+90">+90 (TR)</option>
<option value="+993">+993 (TM)</option>
<option value="+971">+971 (AE)</option>
<option value="+998">+998 (UZ)</option>
<option value="+84">+84 (VN)</option>
              </select>

              <input 
                type="tel" 
                name="phone"
                className="creeacc-input creeacc-phone-number" 
                placeholder="Phone Number" 
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <p className="creeacc-help-text">Make sure you enter a phone number you can always access.</p>
          </div>

          <button type="submit" className="creeacc-submit-btn">
            Continue
          </button>
        </form>

        <div className="creeacc-footer">
          <p>Already have an account? <Link to="/signin" className="creeacc-text-link">Sign in.</Link></p>
        </div>

      </div>
    </div>
  );
};

export default CreateAccount;