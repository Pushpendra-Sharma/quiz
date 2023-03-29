import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Question } from '../components';
import { submitAnswer, updateTimer } from '../redux/features/quiz/quizSlice';
import { questions } from '../utils/constants';

const QuestionContainer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedAnswer = useSelector(state => state.quiz.responses[id]?.answer);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const tId = setInterval(() => {
      setTimer(t => t - 1);
    }, 1000);

    return () => {
      clearInterval(tId);
    };
  }, []);

  useEffect(() => {
    dispatch(updateTimer(timer));
  }, [timer]);

  const { title, options } = questions[id];

  if (timer === 0) navigate(`/result`);

  const handleNext = v => {
    const idNum = Number(id);
    dispatch(submitAnswer({ qId: id, answer: v }));

    if (idNum === 5) navigate(`/result`);
    else navigate(`/question/${idNum + 1}`);
  };

  const handleBack = () => {
    const idNum = Number(id);

    if (idNum === 1) {
      navigate('/');
    } else {
      navigate(`/question/${idNum - 1}`);
    }
  };

  return (
    <Question
      id={id}
      title={title}
      response={selectedAnswer}
      options={options}
      handleNav={handleNext}
      timer={timer}
      handleBack={handleBack}
    />
  );
};

export default QuestionContainer;
