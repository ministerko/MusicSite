import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './Sections/App.tsx';
import './index.css';
import {Container} from './Components/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Container>
       <App />
     </Container>
  </StrictMode>,
);
