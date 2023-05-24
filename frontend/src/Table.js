import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Table.css';

function Table({ tableName }) {
  const [name, setName] = useState('');
  const [data, setChoice] = useState([]);
  const [date, setDate] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [location, setLocation] = useState([]);
  const [bloodtype, setBloodType] = useState([]);
  const [NIC, setNIC] = useState([]);
  const [username, setUsername] = useState([]);
  const [telephone, setTelephone] = useState([]);

  useEffect(() => {
    const user = 'Donor';
    axios
      .get(`http://localhost:8070/${user}/`)
      .then((response) => {
        const responseData = response.data;
        if (user === 'donation') {
          const filteredData = responseData.filter((item) => item.name === 'Isuru');
          const dates = filteredData.map((item) => item.date);
          const quantities = filteredData.map((item) => item.quantity);
          const locations = filteredData.map((item) => item.location);
          const bloodTypes = filteredData.map((item) => item.bloodtype);

          setChoice(filteredData);
          setDate(dates);
          setQuantity(quantities);
          setLocation(locations);
          setBloodType(bloodTypes);
        } else if (user === 'Donor') {
          const filteredData = responseData.filter((item) => item.name.toLowerCase().includes(name));
          const NICs = filteredData.map((item) => item.NIC);
          const names = filteredData.map((item) => item.name);
          const telephones = filteredData.map((item) => item.telephone);

          setNIC(NICs);
          setUsername(names);
          setTelephone(telephones);
        }
        else if(user === 'bloodBank'){
          const filteredData = responseData.filter((item) => item.name === 'Isuru');
          


        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);

  const tables = {
    'DONOR HISTORY': {
      columns: ['DATE OF DONATION', 'BLOOD TYPE', 'QUANTITY OF BLOOD DONATED IN PINTS', 'LOCATION'],
    },
    'DONOR SEARCH': {
      columns: [
        'NIC OF DONOR',
        'NAME OF DONOR',
        'TELEPHONE DETAILS',
        'ENTER BLOOD TYPE',
        'ENTER LOCATION OF BLOOD BANK',
        'ENTER AMOUNT OF BLOOD DONATED [IN PINTS]',
        'REWARD POINTS',
        'CONFIRM CHANGES',
      ],
    },
    'BLOOD BANK SEARCH': {
      columns: ['DATE', 'BLOOD BANK NAME', 'BLOOD TYPE', 'AMOUNT OF BLOOD'],
    },
  };

  const tableData = tables[tableName];

  if (!tableData) {
    return <div>No table found</div>;
  }

  const { columns } = tableData;
  const rows = GenerateRows(tableName, name, date, bloodtype, quantity, location, NIC, username, telephone, setLocation, setQuantity);

  return (
    <div>
      <div className="tablecover">
        <h2 className="tablename">{tableName}</h2>

        {(tableName === 'DONOR SEARCH' || tableName === 'BLOOD BANK SEARCH') && (
          <div className="search">
            <input type="text" value={name} onChange={(e) => setName(e.target.value.toLowerCase())} placeholder="Search" />
          </div>
        )}

        <table className="tablemain">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(row).map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function GenerateRows(tableName, name, date, bloodtype, quantity, location, NIC, username, telephone, setLocation, setQuantity) {
  const rows = [];

  const filteredData = username.filter((username) => username.toLowerCase().includes(name.toLowerCase()));

  const [quantity2, setQuantity2] = useState('');
  const [location2, setLocation2] = useState('');

  function sendData(e,user) {
    e.preventDefault();
    const newdonation = {
      name:user,
      quantity:quantity2,
      location:location2,
    };
    axios
      .post('http://localhost:8070/donation/add', newdonation)
      .then(() => {
        alert('donation added to the database');
        alert(name + 'name' + location + 'location');
      })
      .catch((err) => {
        alert(err);
      });
    console.log(newdonation);
  }

  switch (tableName) {
    case 'DONOR HISTORY':
      const numRows = date.length;
      for (let i = 0; i < numRows; i++) {
        const row = {
          'DATE OF DONATION': date[i],
          'BLOOD TYPE': bloodtype[i],
          'QUANTITY OF BLOOD DONATED IN PINTS': quantity[i],
          LOCATION: location[i],
        };
        rows.push(row);
      }
      break;

    case 'DONOR SEARCH':
      const numberofRows = filteredData.length;
      const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
      const locationInput = <input type="text" onChange={(e) => setLocation2(e.target.value)} />;
      const amountInput = <input type="number" min="0" onChange={(e) => setQuantity2(e.target.value)} />;
      const reward = <input type="number" min="0" />;

      for (let i = 0; i < numberofRows; i++) {
        const username2 = username[i]
        const row = {
          'NIC OF DONOR': NIC[i],
          'NAME OF DONOR': username[i],
          'TELEPHONE DETAILS': telephone[i],
          'ENTER BLOOD TYPE': (
            <select>
              {bloodTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          ),
          'ENTER LOCATION OF BLOOD BANK': locationInput,
          'ENTER AMOUNT OF BLOOD DONATED [IN PINTS]': amountInput,
          'REWARD POINTS': reward,
          'ACTION': <button className="button" onClick={(e)=>sendData(e,username2)}>Confirm Changes</button>,
        };
        rows.push(row);
      }
      break;

    case 'BLOOD BANK SEARCH':
      const date_b = ['8th', '8', '9', '9'];
      const name_b = ['monaragala', 'moratuwa'];
      const bloodtype_b = ['a'];
      const quantity_b = [1, 2, 3, 3];
      const numberofrows = 9;
      for (let i = 0; i < numberofrows; i++) {
        const row = {
          DATE: date_b[i],
          'BLOOD BANK NAME': name_b[i],
          'BLOOD TYPE': bloodtype_b[i],
          'AMOUNT OF BLOOD': quantity_b[i],
        };
        rows.push(row);
      }
      break;
  }

  return rows;
}

export default Table;