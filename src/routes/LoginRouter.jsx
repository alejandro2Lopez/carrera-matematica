// src/routers/LoginRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppRouter from './AppRouter';
import LoginGame from '../pages/logingame';
import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';
import Background from '../pages/background';

const LoginRouter = () => {
  return (
    <Router>
      <Background />
      <Routes>
        <Route
          path="/loginGame"
          element={
            <PublicRouter>
              <LoginGame />
            </PublicRouter>
          }
        />
        <Route
          path="*"
          element={
            <PrivateRouter>
              <AppRouter />
            </PrivateRouter>
          }
        />
      </Routes>
    </Router>
  );
};

export default LoginRouter;
