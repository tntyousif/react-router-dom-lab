import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import MailboxList from './components/MailboxList';
import MainboxForm from './components/MainboxForm';
import MailboxDetails from './components/MailboxDetails';

const initialState = [];

const App = () => {
  const [mailboxes, setMailboxes] = useState(initialState);

  const addBox = (newBoxData) => {
    newBoxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newBoxData]);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MainboxForm addBox={addBox} />} />      </Routes>
    </Router>
  );
};

export default App;