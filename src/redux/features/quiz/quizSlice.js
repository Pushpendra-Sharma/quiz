import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  responses: {},
  points: 0,
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    submitAnswer: (state, action) => {
      const { qId, answer } = action?.payload;
      state.responses[qId] = action.payload;
    },
    clearResponses: state => {
      state.responses = {};
    },
    updatePoints: (state, action) => {
      state.points = action.payload;
    },
    submitQuiz: (state, action) => {},
  },
});

export const { submitAnswer, clearResponses, updatePoints } = quizSlice.actions;

export default quizSlice.reducer;
