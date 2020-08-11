import React from 'react';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

import ToastContainer from './components/ToastContainer';

import { AuthProvider } from './hooks/AuthContext';

import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <ToastContainer />

    <GlobalStyles />
  </>
);

export default App;
