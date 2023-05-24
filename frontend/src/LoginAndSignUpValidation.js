import React,{useState} from 'react'
import Dashboards from './Dashboards';
import './Dashboards';
import Navigation from './Navigation';
import './Forms.css'

export default function LoginAndSignUpValidation({ formFields, requiredFields, onSubmit, formClassName }) {
    const [formData, setFormData] = useState({  district: 'Ampara',
    bloodType: 'unknown' });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const errors = validateForm();
  
      if (Object.keys(errors).length === 0) {
        onSubmit(formData);
        setFormData({});
        setFormErrors({});
        setIsSubmitted(true);
        
      } else {
        setFormErrors(errors);
        setIsSubmitted(true);
      }
    };
  
    const handleFieldChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
       
      }));
   
      const updatedErrors = { ...formErrors };
    
      if (requiredFields.includes(name) && !value) {
        // Validation for required fields
        if (name === 'password') {
          updatedErrors[name] = 'Password is required';
        }else if (name === 'username') {
          updatedErrors[name] = 'Username is required';
        }else if (name === 'loginPassword') {
            updatedErrors[name] = 'Password is required';
        }else if (name === 'telephone') {
          updatedErrors[name] = 'Telephone number is required';
        }else if (name === 'hospitalName') {
          updatedErrors[name] = 'Name Of Hospital is required';
        } else if (name === 'bloodBankName') {
          updatedErrors[name] = 'Name Of Blood Bank is required';
        } else if (name === 'NIC') {
          updatedErrors[name] = 'NIC is required';
        } else if (name === 'fullname') {
          updatedErrors[name] = 'Full name is required';
        } else if (name === 'gender') {
          updatedErrors[name] = 'Gender is required';
        } else if (name === 'dateOfBirth') {
          updatedErrors[name] = 'Date of birth is required';
        } else if (name === 'bloodType') {
          updatedErrors[name] = 'Blood type is required';
        } else if (name === 'address') {
          updatedErrors[name] = 'Address is required';
        }else {
          updatedErrors[name] = 'This field is required';
        }
      } else if (name === 'password') {
       
        validatePassword(value, updatedErrors);
      } else if (name === 'telephone') {
       
        validateTelephoneNumber(value, updatedErrors);
      } else if (name === 'NIC') {
       
        validateNIC(value, updatedErrors);
      } else if (name === 'dateOfBirth') {
        
        validateDateOfBirth(value, updatedErrors);
      } else {
        delete updatedErrors[name];
      }
    
      setFormErrors(updatedErrors);
      setIsSubmitted(false);
    };
  
    const validateForm = () => {
      const errors = {};
    
      for (const field of formFields) {
        if (requiredFields.includes(field.name) && !formData[field.name]) {
          if (field.name === 'password') {
            errors[field.name] = 'Password is required';
          } else if (field.name === 'loginPassword') {
            errors[field.name] = 'Password is required';
          } else if (field.name === 'username') {
            errors[field.name] = 'Username is required';
          }else if (field.name === 'telephone') {
            errors[field.name] = 'Telephone number is required';
          } else if (field.name === 'hospitalName') {
            errors[field.name] = 'Name Of Hospital is required';
          } else if (field.name === 'bloodBankName') {
            errors[field.name] = 'Name Of Blood Bank is required';
          } else if (field.name === 'NIC') {
            errors[field.name] = 'NIC is required';
          } else if (field.name === 'fullname') {
            errors[field.name] = 'Full name is required';
          } else if (field.name === 'gender') {
            errors[field.name] = 'Gender is required';
          } else if (field.name === 'dateOfBirth') {
            errors[field.name] = 'Date of birth is required';
          } else if (field.name === 'bloodType') {
            errors[field.name] = 'Blood type is required';
          } else if (field.name === 'address') {
            errors[field.name] = 'Address is required';
          } 
          else {
            errors[field.name] = 'This field is required';
          }
        } else if (field.name=== 'password' && formData[field.name] && formData[field.name].length < 8) {
          errors[field.name] = 'Password must be at least 8 characters long';
        } else if (field.name === 'password' && formData[field.name]) {
        validatePassword(formData[field.name], errors);
        } else if (field.name === 'NIC' && formData[field.name]) {
        validateNIC(formData[field.name], errors);
        } else if (field.name === 'telephone' && formData[field.name]) {
        validateTelephoneNumber(formData[field.name], errors);
        } else if (field.name === 'dateOfBirth' && formData[field.name]) {
        validateDateOfBirth(formData[field.name], errors);
        }
        }
        
        return errors;
        };
    
    
        const validatePassword = (value, errors) => {
            if (value.length < 8 || !/[a-z]/.test(value) ||!/[A-Z]/.test(value)||!/[^a-zA-Z0-9]/.test(value)||!/[^a-zA-Z0-9]/.test(value)) {
              errors.password = 'Password should be more than 8 characters, incluce uppercase and lowercase letters, numbers and symbols';
            } else {
              delete errors.password;
            }
          };    
    
    
    
    const validateTelephoneNumber = (value, errors) => {
      if (!/^\d{10}$/.test(value)) {
        errors.telephone = 'Telephone number must be a 10-digit number';
      } else {
        delete errors.telephone;
      }
    };
    
    const validateNIC = (value, errors) => {
      if (!/^\d{12}$/.test(value)) {
        errors.NIC = 'NIC must be a 12-digit number';
      } else {
        delete errors.NIC;
      }
    };
    
    const validateDateOfBirth = (value, errors) => {
      const currentDate = new Date();
      const selectedDate = new Date(value);
    
      if (selectedDate > currentDate || calculateAge(selectedDate) < 18) {
        errors.dateOfBirth = 'You must be at least 18 years old';
      } else {
        delete errors.dateOfBirth;
      }
    };
  
    const calculateAge = (birthdate) => {
      const currentDate = new Date();
      const birthYear = birthdate.getFullYear();
      const currentYear = currentDate.getFullYear();
      const age = currentYear - birthYear;
    
    
      const birthMonth = birthdate.getMonth();
      const currentMonth = currentDate.getMonth();
      const birthDay = birthdate.getDate();
      const currentDay = currentDate.getDate();
    
      if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
        return age - 1;
      }
    
      return age;
    };
   
   
  return (
    <div className='loginandsignupcontainer'>
     
    <div className='imageContainer'><Navigation user={"home"}/> 
      image</div>
    <div className='formContainer'>
      {formClassName === 'donorLogin' && <h2 className='FormHeading'>Donor Login</h2>}
      {formClassName === 'donorSignUp' && <h2 className='FormHeading'>Donor Sign Up</h2>}
      {formClassName === 'adminLogin' && <h2 className='FormHeading'>Admin Login</h2>}
      {formClassName === 'adminSignUp' && <h2 className='FormHeading'>Admin Sign Up</h2>}
      {formClassName === 'hospitalLogin' && <h2 className='FormHeading'>Hospital Login</h2>}
      {formClassName === 'hospitalSignUp' && <h2 className='FormHeading'>Hospital Sign Up</h2>}
      {formClassName === 'bloodBankLogin' && <h2 className='FormHeading'>Blood Bank Login</h2>}
      {formClassName === 'bloodBankSignUp' && <h2 className='FormHeading'>Blood Bank Sign Up</h2>}
   
      <form className={formClassName} onSubmit={handleSubmit}>
      {formFields.map((field) => (
      <div className={`${formClassName}row`} key={field.name}>
        {field.type === 'radio' ? (
          <div className={`${formClassName}row`}>
            <label className='FormLabel'>Gender</label>
            <div className={`${formClassName}Genderinput`} >
            <div><label>
              <input className='radiobtn'
                type="radio"
                name={field.name}
                value="male"
                checked={formData[field.name] === 'male'}
                onChange={handleFieldChange}
              />
              Male
            </label></div>
            <div><label>
              <input className='radiobtn'
                type="radio"
                name={field.name}
                value="female"
                checked={formData[field.name] === 'female'}
                onChange={handleFieldChange}
              />
              Female
            </label></div>
            </div>
          </div>
        ) : field.type === 'select' ? (
          <div className={`${formClassName}row`}>
            <label className='FormLabel'>{field.label}</label>
           <select
              className={`${formClassName}input`}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleFieldChange}
            >
              {field.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        ) : field.name === 'address' ? (
          <div className={`${formClassName}row`}>
            <div className='FormLabel'><label>{field.label}</label></div>
            <div className='FormInputContainer'>
               {formErrors[field.name] && <div className='errors'>{formErrors[field.name]}</div>}
              <textarea
                className={`${formClassName}Addressinput`}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name] || ''}
                onChange={handleFieldChange}
              />
                 
            </div>
          </div>
        ) : (
          <div className={`${formClassName}row`}>
            <div className='FormLabel'><label>{field.label}</label></div>
           
            <div className='FormInputContainer'>
            {formErrors[field.name] && <div className='errors'>{formErrors[field.name]}</div>}
              <input className={`${formClassName}input`}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name] || ''}
              onChange={handleFieldChange}
            />
            
            </div>
            
          </div>
        )}
       
      </div>
    ))}
    
  <div className={`${formClassName}row`} > <button className={`${formClassName}submit`} type="submit">Submit</button></div>
   
  </form>
   
    </div>
    </div>
  )
}
