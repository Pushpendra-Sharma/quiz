import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Result } from '../components';
import { questions } from '../utils/constants';
import { calculateScore } from '../utils/helper';

const ResultContainer = () => {
  const navigate = useNavigate();
  const responses = useSelector(state => state.quiz.responses);
  const timeElapsed = useSelector(state => state.quiz.timeTaken);

  const data = calculateScore(
    Object.values(questions),
    Object.values(responses)
  );

  const handleNav = () => {
    navigate(`/answers`);
  };

  let timeString =
    timeElapsed === 60
      ? '1:00'
      : timeElapsed < 10
      ? '0:0' + timeElapsed
      : '0:' + timeElapsed;

  return <Result handleNav={handleNav} data={data} time={timeString} />;
};

export default ResultContainer;
