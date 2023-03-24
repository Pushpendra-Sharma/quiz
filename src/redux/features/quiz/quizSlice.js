import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  responses: {},
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    submitAnswer: (state, action) => {
      const { qId, answer } = action?.payload;
      state.responses[qId] = answer;
    },
    submitQuiz: (state, action) => {},
  },
});

export const { submitAnswer } = quizSlice.actions;

export default quizSlice.reducer;
