import { useEffect, useState } from 'react';
import { Button } from './';

const Question = ({ title, options, handleNav, id, response, timer }) => {
  const [value, setvalue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = e => {
    setvalue(e.target.value);
    setErrorMessage('');
  };

  const handleClick = () => {
    if (value !== '') {
      handleNav(value);
    } else {
      setErrorMessage('Please select a response!');
    }
  };

  useEffect(() => {
    if (response) setvalue(response);
    else setvalue('');
  }, [id]);

  return (
    <div className='w-full sm:px-4 md:px-8 h-full lg:px-20 xl:px-24 bg-gray-200'>
      <div className='flex flex-col justify-between gap-4 sm:mx-4 md:mx-8 lg:mx-20 xl:mx-24'>
        <div className='flex flex-col gap-4 p-4'>
          <div className='flex justify-between'>
            <span className='py-1 px-6 text-sm text-white font-medium rounded-3xl bg-green-300'>
              {id}/05
            </span>
            <span className='py-1 px-6 text-sm text-white font-medium rounded-3xl bg-purple-300'>
              <span>{timer}</span>
            </span>
          </div>
          <p htmlFor={id} className=''>
            {title}
          </p>
        </div>
        <div className='px-4'>
          <ul className=''>
            {options.map((item, index) => (
              <li
                className='bg-white shadow my-2 rounded-md flex justify-between items-center font-medium text-gray-600'
                key={item.label}
              >
                <label className='py-4 px-6 w-full cursor-pointer flex items-center justify-between'>
                  <div className='flex gap-4 items-center'>
                    <span className='border border-gray-600 rounded-md w-8 h-8 align-middle p-1 text-sm text-center'>
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span> {item.label}</span>
                  </div>
                  <input
                    name={title}
                    type='radio'
                    id={id}
                    className='w-4 h-4'
                    onChange={handleChange}
                    value={item.value}
                    checked={value === item.value}
                  />
                </label>
              </li>
            ))}
          </ul>
          {errorMessage && (
            <p className='text-sm text-rose-600 font-medium px-4'>
              {errorMessage}
            </p>
          )}
        </div>
        <div className='text-center bg-white py-8 sm:mx-4 sm:rounded-t-md'>
          <Button
            label={Number(id) === 5 ? 'Submit' : 'Next'}
            callback={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Question;
