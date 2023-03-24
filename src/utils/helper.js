/**
 *
 * @param {object[]} questions
 * @param {object[]} responses
 * @returns {object}
 */
export function calculateScore(questions, responses) {
  let result = {
    score: 0,
    percent: 0,
    correct: 0,
    total: questions.length,
  };

  for (let i = 0; i < questions.length; i++) {
    if (responses[i].answer === questions[i].answer) {
      result.score += 1;
      result.correct += 1;
    }
  }

  result.percent = (result.correct / result.total) * 100;

  return result;
}
