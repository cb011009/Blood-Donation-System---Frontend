import React, {  useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Navigation from "./Navigation";
import Dropdown from "./Dropdown";
import './LoginAndSignUp.css';
import { DropDown , FormNames ,InputType ,InputFieldName, UserTypes } from "./utils/Enums";
import { validateForm, validateField } from './Validation';

export const NICField =  { name: InputFieldName.NIC,  type: InputType.TEXT, label: "NIC",  placeholder: "Enter NIC"};
export const fullNameField = { name: InputFieldName.FULLNAME, type: InputType.TEXT, label: "Full Name", placeholder: "Enter Full Name" };
export const hospitalNameField = { name: InputFieldName.HOSPITALNAME,type: InputType.TEXT, label: "Name Of Hospital", placeholder: "Enter Name Of Hospital" };
export const bloodBankNameField = { name: InputFieldName.BLOODBANKNAME ,type: InputType.TEXT, label: "Name Of Blood Bank", placeholder: "Enter Name Of Blood Bank"};
export const userNameField = { name: InputFieldName.USERNAME , type: InputType.TEXT, label: "Username",placeholder: "Enter Username",};
export const genderField =  { name: InputFieldName.GENDER, type: InputType.RADIO, label: "Gender", placeholder: "Gender",options: ["Male", "Female"],};
export const birthDateField = { name: InputFieldName.BIRTHDATE, type: InputType.DATE, label: "Date Of Birth", };
export const bloodTypeField =  { name: InputFieldName.BLOODTYPE, type: InputType.DROPDOWN, label: "Blood Type", placeholder: "Blood Type"} ;
export const telephoneField ={ name: InputFieldName.TELEPHONE, type: InputType.TEXT, label: "Telephone Number",placeholder: "Enter Telephone Number"}; 
export const donorAddressField = { name: InputFieldName.DONORADDRESS,type: InputType.TEXTAREA, label: "Address",  placeholder: "Enter Address" };
export const addressField = { name: InputFieldName.ADDRESS, type: InputType.TEXTAREA, label: "Address",  placeholder: "Enter Address" };
export const districtField = { name: InputFieldName.DISTRICT, type: InputType.DROPDOWN, label: "District Located In" };
export const passwordField = { name: InputFieldName.PASSWORD, type: InputType.PASSWORD, label: "Password", placeholder: "Enter Password" };
export const loginPasswordField = { name: InputFieldName.LOGINPASSWORD, type: InputType.PASSWORD, label: "Password", placeholder: "Enter Password" };

export default function Test(props) {
  const history = useHistory();

  let BloodType='';


  
   function generateForm(formName, required, field) {
    if (formName === FormNames.BLOODBANK_SIGNUP || formName === FormNames.HOSPITAL_SIGNUP) {
      return {
        formName,
        requiredFields:[required,userNameField.name,districtField.name,telephoneField.name,addressField.name,passwordField.name],
        fields:[userNameField,field,districtField,telephoneField,addressField,passwordField] ,
      };
    }
    if (formName === FormNames.BLOODBANK_LOGIN || formName === FormNames.HOSPITAL_LOGIN ||formName === FormNames.ADMIN_LOGIN) {
      return {
        formName,
        requiredFields:[userNameField.name, loginPasswordField.name],
        fields: [ userNameField, loginPasswordField,],
      };
    }
   }
 
  const forms = [
    {
      formName: FormNames.DONOR_SIGNUP,
      requiredFields: [ NICField.name,fullNameField.name,birthDateField.name,telephoneField.name,passwordField.name],
      fields: [ NICField,fullNameField,birthDateField,bloodTypeField,telephoneField,passwordField],
    },
    {
      formName: FormNames.DONOR_LOGIN,
      requiredFields: [ NICField.name, loginPasswordField.name ],
      fields: [  NICField, loginPasswordField,],
    },
    generateForm(FormNames.BLOODBANK_SIGNUP, bloodBankNameField.name, bloodBankNameField),
    generateForm(FormNames.HOSPITAL_SIGNUP, hospitalNameField.name, hospitalNameField),
    {
      formName: FormNames.ADMIN_SIGNUP,
      requiredFields: [userNameField.name, passwordField.name],
      fields: [ userNameField, passwordField,],
    },
    generateForm(FormNames.ADMIN_LOGIN, null, null),
    generateForm(FormNames.HOSPITAL_LOGIN,null, null),
    generateForm(FormNames.BLOODBANK_LOGIN,null, null),
   
  ];
  
  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleInputChange = (fieldName, value) => {
    const newFormValues = {
      ...formValues,
      [fieldName]: value,
    };
    setFormValues(newFormValues);
   
    const error = validateField(fieldName, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: error,
    }));
  };

  const formSubmitted = async (formValues, formName) => {
    
    if (formName === FormNames.DONOR_SIGNUP) {
      console.log("Donor Signup form submitted");
        
         for (const key in formValues) {
         if (key === bloodTypeField.name) {
             BloodType = formValues[key];
          }
        }

        console.log(formValues[InputFieldName.NIC]);
        console.log(formValues[InputFieldName.FULLNAME]);
        console.log(formValues[InputFieldName.BIRTHDATE]);
        console.log( BloodType);
        console.log(formValues[InputFieldName.PASSWORD]);
        console.log(formValues[InputFieldName.TELEPHONE]); 
      /*const dobString = BirthDate.toString().slice(0, 10);

      const newDonor = {
        NIC: formValues[InputFieldName.NIC],
        password:formValues[InputFieldName.PASSWORD] ,
        gender: Gender,
        dob: dobString,
        name: formValues[InputFieldName.FULLNAME],
        bloodtype:formValues[InputFieldName.BLOODTYPE],
        telephone: Number(formValues[InputFieldName.TELEPHONE]),
        address: Address,
      };
      try {
        const { data } = await axios.post(
          "http://localhost:8070/Donor/add",
          newDonor,
          {
            withCredentials: true,
          }
        );
        const { success, message } = data;
        if (success) {
          alert(message);
          setTimeout(() => {
            history.push("/donorLoginPage");
          }, 2000);
        } else {
          alert(message);
        }
      } catch (error) {
        console.log(error);
      }
      return;*/
    } else if (formName === FormNames.DONOR_LOGIN) {
      console.log("Donor Login form submitted");
        console.log(formValues[InputFieldName.NIC]);
        console.log(formValues[InputFieldName.LOGINPASSWORD]);
        
      /*const donor = {
        NIC: NIC,
        password: Password,
      };

      try {
        const { data } = await axios.post(
          "http://localhost:8070/Donor/login",
          donor,
          {
            withCredentials: true,
          }
        );
        const { success, message } = data;
        if (success) {
          alert(message);
          setTimeout(() => {
            history.push("/donorDashboard");
          }, 2000);
        } else {
          alert(message);
        }
      } catch (error) {
        console.log(error);
      }
      return;*/
    } else if (formName === FormNames.ADMIN_SIGNUP) {
      console.log("Admin Signup form submitted");
      console.log(formValues[InputFieldName.USERNAME]);
      console.log(formValues[InputFieldName.PASSWORD]);
      /*const newadmin = {
        username: UserName,
        password: Password,
      };
      console.log(newadmin)
      try {
        const { data } = await axios.post(
          "http://localhost:8070/admin/add",
          newadmin,
          {
            withCredentials: true,
          }
        );
        const { success, message } = data;
        if (success) {
          alert(message);
          setTimeout(() => {
            history.push("/adminLoginPage");
          }, 2000);
        } else {
          alert(message);
        }
      } catch (error) {
        console.log(error);
      }

      return;*/
    } else if (formName === FormNames.ADMIN_LOGIN) {
      console.log("Admin Login form submitted");
      console.log(formValues[InputFieldName.USERNAME]);
      console.log(formValues[InputFieldName.LOGINPASSWORD]);
     /*
      const Admin = {
        username: UserName,
        password: Password,
      };
      try {
        const { data } = await axios.post(
          "http://localhost:8070/admin/login",
          Admin,
          {
            withCredentials: true,
          }
        );
        const { success, message } = data;
        if (success) {
          alert(message);
          setTimeout(() => {
            history.push("/adminDashboard");
          }, 2000);
        } else {
          alert(message);
        }
      } catch (error) {
        console.log(error);
      }
      return;
      // console.log(UserName);
      // console.log(Password);*/
    } else if (formName === FormNames.HOSPITAL_SIGNUP) {
      console.log("Hospital Signup form submitted");
      console.log(formValues[InputFieldName.USERNAME]);
      console.log(formValues[InputFieldName.HOSPITALNAME]);
      console.log(formValues[InputFieldName.DISTRICT]);
      console.log(formValues[InputFieldName.TELEPHONE]); 
      console.log(formValues[InputFieldName.ADDRESS]); 
      console.log(formValues[InputFieldName.PASSWORD]);
      /*const newhospital = {
        username: UserName,
        password: Password,
        name: HospitalName,
        district: District,
        telephone: Number(Telephone),
        address: Address,
      };
      console.log(newhospital)
      try {
        const { data } = await axios.post(
          "http://localhost:8070/hospital/add",
          newhospital,
          {
            withCredentials: true,
          }
        );
        const { success, message } = data;
        if (success) {
          alert(message);
          setTimeout(() => {
            history.push("/hospitalLoginPage");
          }, 2000);
        } else {
          alert(message);
        }
      } catch (error) {
        console.log(error);
      }
      return;*/
    } else if (formName === FormNames.HOSPITAL_LOGIN) {
      console.log("Hospital Login form submitted");
      console.log(formValues[InputFieldName.USERNAME]);
      console.log(formValues[InputFieldName.LOGINPASSWORD]);
      /*
      const Hospital = {
        username: UserName,
        password: Password,
      };
      try {
        const { data } = await axios.post(
          "http://localhost:8070/hospital/login",
          Hospital,
          {
            withCredentials: true,
          }
        );
        const { success, message } = data;
        if (success) {
          alert(message);
          setTimeout(() => {
            history.push("/hospitalDashboard");
          }, 2000);
        } else {
          alert(message);
        }
      } catch (error) {
        console.log(error);
      }
      return;*/
    } else if (formName === FormNames.BLOODBANK_SIGNUP) {
      console.log("Bloodbank Signup form submitted");
      console.log(formValues[InputFieldName.USERNAME]);
      console.log(formValues[InputFieldName.BLOODBANKNAME]);
      console.log(formValues[InputFieldName.DISTRICT]);
      console.log(formValues[InputFieldName.TELEPHONE]); 
      console.log(formValues[InputFieldName.ADDRESS]); 
      console.log(formValues[InputFieldName.PASSWORD]);
     /*
      const newbloodBank = {
        username: UserName,
        password: Password,
        name: BloodBankName,
        district: District,
        telephone: Number(Telephone),
        address: Address,
      };
      console.log(newbloodBank)
      try {
        const { data } = await axios.post(
          "http://localhost:8070/bloodBank/add",
          newbloodBank,
          {
            withCredentials: true,
          }
        );
        const { success, message } = data;
        if (success) {
          alert(message);
          setTimeout(() => {
            history.push("/bloodBankLoginPage");
          }, 2000);
        } else {
          alert(message);
        }
      } catch (error) {
        console.log(error);
      }
      return;*/
    } else if (formName === FormNames.BLOODBANK_LOGIN) {
      console.log("BLOODBANK Login form submitted");
      console.log(formValues[InputFieldName.USERNAME]);
      console.log(formValues[InputFieldName.LOGINPASSWORD]);
      /*
      const BloodBank = {
        username: UserName,
        password: Password,
      };
      try {
        const { data } = await axios.post(
          "http://localhost:8070/bloodBank/login",
          BloodBank,
          {
            withCredentials: true,
          }
        );
        const { success, message } = data;
        if (success) {
          alert(message);
          setTimeout(() => {
            history.push("/bloodBankDashboard");
          }, 2000);
        } else {
          alert(message);
        }
      } catch (error) {
        console.log(error);
      }
      return;*/
    }
  };

  let currentPage=props.page;

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validateForm(forms, currentPage, formValues);

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      formSubmitted(formValues, props.page);
      console.log(formValues);
    }
   
  };

  const currentForm = forms.find((form) => form.formName === props.page);
  let page=props.page;
  let typeOfForm = "";
  let submitText=" ";

  if (page.includes("SIGNUP")) {
    if (page.includes("ADMIN")) {
      typeOfForm = "login";
      
    } else {
      typeOfForm = "signup";
    }
  } else if (page.includes("LOGIN")) {
    typeOfForm = "login";
  }

  submitText = typeOfForm.replace(/([A-Z])/g, ' $1').toUpperCase();
  return (
   <div className="loginAndSingupContainer">
      <div className="loginAndSignupSide"><Navigation user={UserTypes.ABOUT}/></div>
      <div className={`${typeOfForm}Container`}>
        
        <h2 className="loginandsingupheading">{props.page}</h2>
        <hr className="loginAndSingUpLine"></hr>
        <form onSubmit={handleSubmit} className={`${typeOfForm}Form`}>
        
          {currentForm.fields.map((field) => (
           
            <div key={field.name} className={`${typeOfForm}formRows`}>
              <div className="formLabel"><label htmlFor={field.name}>hello</label></div>
              <div className="errorContainer">{errors[field.name] && (
                <span className="error">{errors[field.name]}<br/></span>
              )}</div>
              {(field.type === InputType.TEXT||field.type === InputType.PASSWORD||field.type === InputType.DATE) && (
                <input className="formInputBox"
                  placeholder={field.placeholder} type={field.type} id={field.name} name={field.name} value={formValues[field.name] || ""}
                  onChange={(e) =>handleInputChange(field.name, e.target.value)}
                />
              )}
              {field.type === InputType.DROPDOWN && (
                (field.name === InputFieldName.BLOODTYPE && (
                  <div className="dropSignLog">
                  <Dropdown dropdown={DropDown.BLOODTYPEDROPDOWN}  value={formValues[field.name] || ""}
                       onChange={(e) => handleInputChange(field.name, e.target.value)} />
                  </div>
                 ))||
                (field.name === InputFieldName.DISTRICT && (
                  <div className="dropSignLog">
                    <Dropdown dropdown={DropDown.DISTRICTDROPDOWN}  value={formValues[field.name] || ""}
                        onChange={(e) => handleInputChange(field.name, e.target.value )} /> 
                  </div>
                ))
              )}
              {field.type === InputType.TEXTAREA && (
                <textarea className="formInputBox"
                  placeholder={field.placeholder} id={field.name} name={field.name} value={formValues[field.name] || ""}
                  onChange={(e) =>handleInputChange(field.name, e.target.value)}
                />
              )}
             
            </div>
          ))}
          <button className={`${typeOfForm}Btn`} type="submit">{submitText}</button>
        </form>
      </div>
    </div>
  );
}




