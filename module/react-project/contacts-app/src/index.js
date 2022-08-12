import React from 'react'; //? init react
import { createRoot } from 'react-dom/client'; //? call DOM
import ContactApp from './components/ContactApp';
 
import './styles/style.css'; //? didalam folder src
 
const root = createRoot(document.getElementById('root')); //? set in elemnt ID in inde.html
root.render(<ContactApp />);