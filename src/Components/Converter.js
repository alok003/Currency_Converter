import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './converter.css'

const Converter = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputC, setInputC] = useState('INR');
  const [outputC, setOutputC] = useState('USD');
  const [outputValue, setOutputValue] = useState('');
  const [allCurrencies, setAllCurrencies] = useState({
    INR: 'Indian Rupee',
    USD: 'United States Dollar',
    EUR: 'Euro',
    GBP: 'British Pound',
    AED: 'Arab Dirham'
    // ... (add more currencies)
  });

  useEffect(() => {
    if (inputValue === '' || isNaN(inputValue)) {
      setOutputValue('');
      return;
    } else {
      const cnv = async () => {
        const response = await axios.get(
          `https://api.api-ninjas.com/v1/convertcurrency?have=${inputC}&want=${outputC}&amount=${inputValue}`
        );
        setOutputValue(response.data.new_amount);
        console.log(response);
      };
      cnv();
    }
  }, [inputValue, inputC, outputC]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputCurrChange = (e) => {
    setInputC(e.target.value);
  };

  const handleOutputCurrChange = (e) => {
    setOutputC(e.target.value);
  };

  return (
    <>
      <div className='maindiv'>
        <div className='focusdiv'>
          <div className='iodiv'>
            <h2>INPUT VALUE</h2>
            <label htmlFor="initype">Choose your input currency</label>
            <select id="inputCurr" name="inputCurr" value={inputC} onChange={handleInputCurrChange}>
              {Object.keys(allCurrencies).map(currency => (
                <option value={currency}>{allCurrencies[currency]}</option>
              ))}
            </select>
            <label htmlFor="value">Enter your Amount</label>
            <input type="number" placeholder="Enter amount" value={inputValue} onChange={handleInputChange} />
          </div>
          <div className='iodiv'>
            <h2>OUTPUT VALUE</h2>
            <label htmlFor="initype">Choose your output currency</label>
            <select id="outCurr" name="outCurr" value={outputC} onChange={handleOutputCurrChange}>
              {Object.keys(allCurrencies).map(currency => (
                <option value={currency}>{allCurrencies[currency]}</option>
              ))}
            </select>
            <label htmlFor="value">The Amount in {outputC} is:</label>
            <input type="number" value={outputValue} disabled />
          </div>
        </div>
      </div>

    </>
  );
};

export default Converter;




