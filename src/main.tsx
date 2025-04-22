import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { TODOS } from './constants/todos.ts';
import { BUTTON_NAMES } from './constants/button-constants.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App
      todos={TODOS}
      filterButtons={BUTTON_NAMES}
    />
  </StrictMode>
);
