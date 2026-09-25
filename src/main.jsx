import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppRouter } from './router/AppRouter.jsx';
import './styles.css';
import './admin.css';

createRoot(document.getElementById('root')).render(<AppRouter />);
