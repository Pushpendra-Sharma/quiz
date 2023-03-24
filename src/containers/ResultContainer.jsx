import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Result } from '../components';
import { questions } from '../utils/constants';
import { calculateScore } from '../utils/helper';

const ResultContainer = () => {
  const navigate = useNavigate();
  const responses = useSelector(state => state.quiz.responses);

  const data = calculateScore(
    Object.values(questions),
    Object.values(responses)
  );

  const handleNav = () => {
    navigate(`/answers`);
  };

  return <Result handleNav={handleNav} data={data}/>;
};

export default ResultContainer;
