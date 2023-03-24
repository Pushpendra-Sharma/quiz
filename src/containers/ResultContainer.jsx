import { useNavigate } from 'react-router-dom';
import { Result } from '../components';

const ResultContainer = () => {
  const navigate = useNavigate();

  const handleNav = () => {
    navigate(`/answers`);
  };

  return <Result handleNav={handleNav} score={40} />;
};

export default ResultContainer;
