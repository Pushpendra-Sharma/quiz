import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  responses: {},
  points: 0,
  timeTaken: 0,
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
    updateTimer: (state, action) => {
      state.timeTaken = 60-action.payload;
    },
  },
});

export const { submitAnswer, clearResponses, updatePoints, updateTimer } =
  quizSlice.actions;

export default quizSlice.reducer;
