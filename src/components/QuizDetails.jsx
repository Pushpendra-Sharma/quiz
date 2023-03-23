const QuizDetails = () => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='text-2xl text-gray-700 font-bold'>
        The Daily JavaScript Quiz
      </div>
      <div className='flex justify-between my-2'>
        <div className='text-sm text-gray-600 font-medium flex flex-col gap-2'>
          <div className='flex items-center gap-1'>
            <span className='material-symbols-outlined text-sm'>chat</span>
            <span className=''>Leave a comment</span>
          </div>
          <div className='flex items-center gap-1'>
            <span className='material-symbols-outlined text-sm'>bookmark</span>
            <span>Save Quiz</span>
          </div>
          <div className='flex items-center gap-1'>
            <span className='material-symbols-outlined  text-sm'>swords</span>
            <span>Challenge a Friend</span>
          </div>
        </div>
        <div className='flex flex-col font-medium'>
          <p className='text-xs text-gray-500'>1k+ people enrolled</p>
          <div className='text-amber-400'>
            <span className='material-symbols-outlined'>star</span>
            <span className='material-symbols-outlined'>star</span>
            <span className='material-symbols-outlined'>star</span>
          </div>
          <p className='text-xs text-gray-500'>3 Ratings (5.0)</p>
        </div>
      </div>
      <p className='text-ellipsis font-medium text-gray-600'>
        The JS Proficiency Test is designed to evaluate an individual's
        knowledge and skills in JavaScript. It cover wide range of topics,
        including closures, promises, callabacks etc..
      </p>
      <h2 className='text-base font-bold text-gray-700 mt-2'>
        This Quiz includes
      </h2>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-1'>
          <span className='material-symbols-outlined text-sm'>description</span>
          <span className=''>50% Passing Percentage</span>
        </div>
        <div className='flex items-center gap-1'>
          <span className='material-symbols-outlined text-sm'>help</span>
          <span className=''>5 Questions</span>
        </div>
        <div className='flex items-center gap-1'>
          <span className='material-symbols-outlined text-sm'>schedule</span>
          <span className=''>10 Mins</span>
        </div>
        <div className='flex items-center gap-1'>
          <span className='material-symbols-outlined text-sm'>
            heap_snapshot_multiple
          </span>
          <span className=''>Attempt daily</span>
        </div>
      </div>
    </div>
  );
};

export default QuizDetails;
