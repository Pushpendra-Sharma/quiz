import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from './';

const Question = ({ title, options }) => {
  const [value, setvalue] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const handleChange = e => {
    setvalue(e.target.value);
  };

  const handleNext = e => {
    const idNum = Number(id);
    if (idNum === 5) {
      navigate(`/result`);
    } else {
      navigate(`/question/${idNum + 1}`);
    }
  };

  return (
    <div className='w-full sm:px-4 md:px-8 lg:px-20 xl:px-24 bg-gray-200'>
      <div className='flex flex-col justify-between gap-4 sm:mx-4 md:mx-8 lg:mx-20 xl:mx-24'>
        <div className='flex flex-col gap-4 p-4'>
          <div className='flex justify-between'>
            <span className='py-1 px-6 text-sm text-white font-medium rounded-3xl bg-green-300'>
              01/05
            </span>
            <span className='py-1 px-6 text-sm text-white font-medium rounded-3xl bg-purple-300'>
              10:00
            </span>
          </div>
          <p htmlFor={id} className=''>
            {title}
          </p>
        </div>
        <div className='p-4'>
          <ul className=''>
            {options.map((item, index) => (
              <li
                className='bg-white shadow my-2 py-4 px-6 rounded-md flex justify-between items-center font-medium text-gray-600'
                key={item.label}
              >
                <div className='flex gap-4 items-center'>
                  <span className='border border-gray-600 rounded-md w-8 h-8 align-middle p-1 text-sm text-center'>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <label className=''>{item.label}</label>
                </div>
                <input
                  name={title}
                  type='radio'
                  id={id}
                  className='w-4 h-4'
                  onChange={handleChange}
                  value={item.value}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className='text-center bg-white py-8 sm:mx-4 sm:rounded-t-md'>
          <Button
            label={Number(id) === 5 ? 'Submit' : 'Next'}
            callback={handleNext}
          />
        </div>
      </div>
    </div>
  );
};

export default Question;
