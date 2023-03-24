const Answer = ({ id, title, answer }) => {
  return (
    <div className='flex flex-col gap-4 shadow rounded-md p-4 m-2 bg-white'>
      <p className=''>
        <span className='text-purple-600 font-medium'>{id}. </span>
        <span className='text-gray-600 font-semibold'>{title}</span>
      </p>
      <p className=''>
        <span className='text-purple-600 font-medium'>Answer: </span>
        <span className='text-gray-600 font-bold'>{answer}</span>
      </p>
    </div>
  );
};

export default Answer;
