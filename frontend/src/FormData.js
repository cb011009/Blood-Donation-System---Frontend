import React from 'react'
import LoginAndSignUpValidation from './LoginAndSignUpValidation';
import Navigation from './Navigation';

export default function FormData({ formName }) {
  let NIC='';
  let fullname='';
  let username='';
  let gender='';
  let dateOfBirth='';
  let bloodType='';
  let address ='';
  let telephone='';
  let district='';
  let password='';
  let hospitalName='';
  let bloodBankName='';

 const handleFormSubmit = (formData, formName) => {
    console.log('Form data:', formData);
    console.log('Submitted form:', formName);

    for (const name in formData) {
      const value = formData[name];
     
       switch(formName){
        case 'donorSignUp':
          if (name === 'gender') {
            gender = value;
          } else if (!formData.hasOwnProperty('gender')) {
            gender= ' ';
          }
          if (name === 'address') {
            address = value;
          } else if (!formData.hasOwnProperty('address')) {
            address = ' ';
          }
          NIC = formData.NIC; 
          fullname = formData.fullname; 
          bloodType=formData.bloodType;
          dateOfBirth=formData.dateOfBirth;
          telephone=formData.telephone;
          password=formData.password;
          break;
        case 'donorLogin':
          username=formData.username;
          password=formData.loginPassword;
        
          const donor ={
            username,password
          }
          // axios connect inside this
          break;
        case 'adminLogin':
          username=formData.username;
          password=formData.loginPassword;
            break;
        case 'adminSignUp':
          username=formData.username;
          password=formData.password;
          break;
        case 'hospitalLogin':
          username=formData.username;
          password=formData.loginPassword;
          break;
        case 'hospitalSignUp':
          username=formData.username;
          hospitalName=formData.hospitalName;
          telephone=formData.telephone;
          district=formData.district;
          address=formData.address;
          password=formData.password;
            break;
        case 'bloodBankLogin':
          username=formData.username;
          password=formData.loginPassword;
          break;
        case 'bloodBankSignUp':
          username=formData.username;
          bloodBankName=formData.bloodBankName;
          telephone=formData.telephone;
          district=formData.district;
          address=formData.address;
          password=formData.password;
          break;
        
      }
    }
 
    console.log(NIC);
    console.log(fullname);
    console.log(username);
    console.log(hospitalName);
    console.log(bloodBankName);
    console.log(gender)
    console.log(bloodType);
    console.log(dateOfBirth);
    console.log(district);
    console.log(address);
    console.log(telephone);
    console.log(password);
    console.log(formName)
   
   
  };

  const forms = [
    {
      name: 'donorSignUp',
      fields: [
        { name: 'NIC', type: 'text', label: 'NIC', placeholder: 'Enter NIC' },
        { name: 'fullname', type: 'text', label: 'Full Name', placeholder: 'Enter Full Name' },
        { name: 'gender', type: 'radio', label: 'Gender' },
        { name: 'dateOfBirth', type: 'date', label: 'Date of Birth' },
        {
          name: 'bloodType',
          type: 'select',
          label: 'Blood Type',
          options: [
            
            { value: 'A+', label: 'A+' },
            { value: 'A-', label: 'A-' },
            { value: 'B+', label: 'B+' },
            { value: 'B-', label: 'B-' },
            { value: 'AB+', label: 'AB+' },
            { value: 'AB-', label: 'AB-' },
            { value: 'O+', label: 'O+' },
            { value: 'O-', label: 'O-' },
            { value: 'unknown', label: 'unknown' },
          ],
        },
        { name: 'telephone', type: 'text', label: 'Telephone Number', placeholder: 'Enter Telephone Number' },
        { name: 'address', type: 'text', label: 'Address', placeholder: 'Enter Address' },
        { name: 'password', type: 'password',label: 'Password', placeholder: 'Enter Password' },
      ],
   
      requiredFields: ['NIC', 'fullname', 'dateOfBirth', 'telephone','password'],
     
    },
    {
      name: 'donorLogin',
      fields: [
        { name: 'username', type: 'text', label: 'Username', placeholder: 'Enter Username' },
        { name: 'loginPassword', type: 'password', label: 'Password', placeholder: 'Enter Password' },
      ],
      requiredFields: ['username','loginPassword'],
     
    },
    {
      name: 'adminSignUp',
      fields: [
        { name: 'username', type: 'text', label: 'Username', placeholder: 'Enter Username' },
        { name: 'password', type: 'password', label: 'Password', placeholder: 'Enter Password' },
      ],
      requiredFields: ['username','password'],
    },
    {
      name: 'adminLogin',
      fields: [
        { name: 'username', type: 'text', label: 'Username', placeholder: 'Enter Username' },
        { name: 'loginPassword', type: 'password', label: 'Password', placeholder: 'Enter Password' },
      ],
      requiredFields: ['username','LoginPassword'],
    },
    {
      name: 'hospitalSignUp',
      fields: [
        { name: 'username', type: 'text', label: 'Username', placeholder: 'Enter Username' },
        { name: 'hospitalName', type: 'text', label: 'Name of Hospital', placeholder: 'Enter Name Of Hospital' },
        { name: 'telephone', type: 'text', label: 'Telephone Number', placeholder: 'Enter Telephone Number' },
        {
          name: 'district',
          type: 'select',
          label: 'District Located In:',
          options: [
           
            { value: 'Ampara', label: 'Ampara' },
            { value: 'Anuradhapura', label: 'Anuradhapura' },
            { value: 'Badulla', label: 'Badulla' },
            { value: 'Batticaloa', label: 'Batticaloa' },
            { value: 'Colombo', label: 'Colombo' },
            { value: 'Galle', label: 'Galle' },
            { value: 'Gampaha', label: 'Gampaha' },
            { value: 'Hambantota', label: 'Hambantota' },
            { value: 'Jaffna', label: 'Jaffna' },
            { value: 'Kalutara', label: 'Kalutara' },
            { value: 'Kandy', label: 'Kandy' },
            { value: 'Kegalla', label: 'Kegalla' },
            { value: 'Kilinochchi', label: 'Kilinochchi' },
            { value: 'Kurunegala', label: 'Kurunegala' },
            { value: 'Mannar', label: 'Mannar' },
            { value: 'Matale', label: 'Matale' },
            { value: 'Matara', label: 'Matara' },
            { value: 'Moneragala', label: 'Moneragala' },
            { value: 'Mullaitivu', label: 'Mullaitivu' },
            { value: 'Nuwara Eliya', label: 'Nuwara Eliya' },
            { value: 'Polonnaruwa', label: 'Polonnaruwa' },
            { value: 'Puttalam', label: 'Puttalam' },
            { value: 'Ratnapura', label: 'Ratnapura' },
            { value: 'Trincomalee', label: 'Trincomalee' },
            { value: 'Vavuniya', label: 'Vavuniya' },
           
          ],
        },
        { name: 'address', type: 'text', label: 'Address', placeholder: 'Enter Address' },
        { name: 'password', type: 'password',label: 'Password', placeholder: 'Enter Password' },
      ],
      requiredFields: [ 'username','hospitalName','telephone','address','password'],
    },
    {
      name: 'hospitalLogin',
      fields: [
        { name: 'username', type: 'text', label: 'Username', placeholder: 'Enter Username' },
        { name: 'loginPassword', type: 'password', label: 'Password', placeholder: 'Enter Password' },
      ],
      requiredFields: ['username','loginPassword'],
    },
    {
      name: 'bloodBankSignUp',
      fields: [
        { name: 'username', type: 'text', label: 'Username', placeholder: 'Enter Username' },
        { name: 'bloodBankName', type: 'text', label: 'Name of Blood Bank', placeholder: 'Enter Name Of Blood Bank' },
        { name: 'telephone', type: 'text', label: 'Telephone Number', placeholder: 'Enter Telephone Number' },
        {
          name: 'district',
          type: 'select',
          label: 'District Located In:',
          options: [
          
            { value: 'Ampara', label: 'Ampara' },
            { value: 'Anuradhapura', label: 'Anuradhapura' },
            { value: 'Badulla', label: 'Badulla' },
            { value: 'Batticaloa', label: 'Batticaloa' },
            { value: 'Colombo', label: 'Colombo' },
            { value: 'Galle', label: 'Galle' },
            { value: 'Gampaha', label: 'Gampaha' },
            { value: 'Hambantota', label: 'Hambantota' },
            { value: 'Jaffna', label: 'Jaffna' },
            { value: 'Kalutara', label: 'Kalutara' },
            { value: 'Kandy', label: 'Kandy' },
            { value: 'Kegalla', label: 'Kegalla' },
            { value: 'Kilinochchi', label: 'Kilinochchi' },
            { value: 'Kurunegala', label: 'Kurunegala' },
            { value: 'Mannar', label: 'Mannar' },
            { value: 'Matale', label: 'Matale' },
            { value: 'Matara', label: 'Matara' },
            { value: 'Moneragala', label: 'Moneragala' },
            { value: 'Mullaitivu', label: 'Mullaitivu' },
            { value: 'Nuwara Eliya', label: 'Nuwara Eliya' },
            { value: 'Polonnaruwa', label: 'Polonnaruwa' },
            { value: 'Puttalam', label: 'Puttalam' },
            { value: 'Ratnapura', label: 'Ratnapura' },
            { value: 'Trincomalee', label: 'Trincomalee' },
            { value: 'Vavuniya', label: 'Vavuniya' },
           
          ]},
         
        { name: 'address', type: 'text', label: 'Address', placeholder: 'Enter Address' },
        { name: 'password', type: 'password',label: 'Password', placeholder: 'Enter Password' },
      ],
      requiredFields: [ 'username','bloodBankName','telephone','address','password'],
    },
    {
      name: 'bloodBankLogin',
      fields: [
        { name: 'username', type: 'text', label: 'Username', placeholder: 'Enter Username' },
        { name: 'loginPassword', type: 'password', label: 'Password', placeholder: 'Enter Password' },
      ],
      requiredFields: ['username','loginPassword'],
    },
  ];

  const selectedForm = forms.find((form) => form.name === formName);
  

  return (
    <div>
      
      {selectedForm && (
        <div key={selectedForm.name}>
          
          {/*<h2>{selectedForm.name}</h2>*/}
          <LoginAndSignUpValidation
            formFields={selectedForm.fields}
            requiredFields={selectedForm.requiredFields}
            onSubmit={(formData) => handleFormSubmit(formData, selectedForm.name)}
            formClassName={selectedForm.name}
          
          />
        </div>
      )}
    </div>
  );
}
 