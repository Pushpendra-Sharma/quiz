import logo from '../assets/logo.png';
import { Button } from './';

const Result = ({ handleNav,score }) => {
  return (
    <div className='w-full sm:px-4 md:px-8 lg:px-20 xl:px-24 bg-purple-200'>
      <div className='flex flex-col justify-between gap-4 sm:mx-4 md:mx-8 lg:mx-20 xl:mx-24'>
        <div className='flex flex-col gap-4 p-4'>
          <p className='text-2xl text-gray-700 font-bold'>
            The Daily JavaScript Quiz
          </p>
          <div className='flex flex-col gap-2 items-center py-4 px-8 bg-white shadow-md rounded-xl'>
            <p className='text-xs text-green-500 font-medium'>You Scored:</p>
            <p className='text-3xl text-purple-700 font-bold'>40%</p>
            <p className='font-medium text-gray-600'>
              Oh Snap, You can do better!
            </p>
            <p className='text-xs text-gray-500'>
              Success is not final, failure is not fatal; It is the courage to
              contine that counts.
            </p>
          </div>
        </div>
        <div className='flex justify-between px-8'>
          <div className='flex flex-col gap-1'>
            <p className='text-gray-700 font-semibold'>Your Score</p>
            <p className='text-3xl text-purple-700 font-bold'>2/5</p>
            <p className='text-xs font-medium text-gray-700'>Avg: 2 marks</p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-gray-700 font-semibold'>Time Taken</p>
            <p>
              <span className='text-3xl text-purple-700 font-bold'>0:09</span>
              <span className='text-xs font-medium text-gray-700'>min</span>
            </p>
            <p className='text-xs font-medium text-gray-600'>Avg: 1:59 mins</p>
          </div>
        </div>
        <div className='flex flex-col items-center gap-4 my-1'>
          <img src={logo} alt='logo' className='w-24' />
          <p className='flex items-center gap-2'>
            <span className='material-symbols-outlined text-base font-medium text-green-600'>
              share
            </span>
            <span className='text-sm font-medium text-gray-600'>
              Share it wth your friends!
            </span>
          </p>
        </div>
        <div className='bg-white p-4 mx-4 rounded-md shadow-sm'>
          <p className='text-gray-700 font-bold my-2'>Leaderboard</p>
          <div className='shadow p-4 flex justify-between rounded-lg'>
            <span className='material-symbols-outlined rounded-full border-green-600 border text-white'>
              account_circle
            </span>
            <p className='text-gray-700 font-bold text-ellipsis'>Pushpendra</p>
            <div className='bg-teal-500 px-2 rounded-3xl flex items-center text-white'>
              <span className='material-symbols-outlined bg-amber-500 w-4 rounded-full text-center text-xs'>
                star
              </span>
              <span className='text-sm'>256</span>
            </div>
          </div>
        </div>
        <div className='text-center bg-white py-8 sm:mx-4 sm:rounded-t-md'>
          <Button label='Answers' callback={handleNav} />
        </div>
      </div>
    </div>
  );
};

export default Result;
