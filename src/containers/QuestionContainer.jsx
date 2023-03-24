import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Question } from '../components';
import { submitAnswer } from '../redux/features/quiz/quizSlice';
import { questions } from '../utils/constants';

const QuestionContainer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedAnswer = useSelector(state => state.quiz.responses[id]);

  const { title, options } = questions[id];

  const handleNext = v => {
    const idNum = Number(id);
    dispatch(submitAnswer({ qId: id, answer: v }));

    if (idNum === 5) navigate(`/result`);
    else navigate(`/question/${idNum + 1}`);
  };

  return (
    <Question
      id={id}
      title={title}
      response={selectedAnswer}
      options={options}
      handleNav={handleNext}
    />
  );
};

export default QuestionContainer;
