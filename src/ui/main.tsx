import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import TitleBar from './components/desktop/titlebar'
import './index.css'
import App from './App.tsx'
import { Provider } from "react-redux";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { store } from './store/index.ts';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      {/* <TitleBar/> */}
      <App />

    </Provider>
    
  </StrictMode>,
)
