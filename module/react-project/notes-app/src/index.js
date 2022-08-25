import React from 'react'; //? init react
import { createRoot } from 'react-dom/client'; //? call DOM
import NotesApp from './components/Notes/NotesApp';
import './styles/bootstrap.min.css';
import './styles/style.css';

const root = createRoot(document.getElementById("root")); //? set in elemnt ID in inde.html
root.render(<NotesApp />);
