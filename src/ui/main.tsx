import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import TitleBar from './components/desktop/titlebar'
import './index.css'
import { Provider, useSelector } from "react-redux";
import './goldenlayout-base.css'
import './goldenlayout-dark-theme.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { persistor, RootState, store } from './store/index';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { getTheme } from './theme/theme';
import ThemeUpdater from './theme/themeUpdate';
import { PersistGate } from 'redux-persist/integration/react';
import ErrorBoundary from './ErrorBoundary.tsx';
import SampleApp from './App.tsx';


const ThemeWrapper:React.FC =()=>{
  const themeMode = useSelector((state:RootState)=>state.theme.mode)
// ThemeUpdater()


  



  return(
    <ThemeProvider theme={getTheme(themeMode)}>
      <CssBaseline />
      <ThemeUpdater />
      <SampleApp id={"Text"} />
      </ThemeProvider>
  )

}

createRoot(document.getElementById('root')!).render(

  
  <StrictMode>
    {/* <ErrorBoundary> */}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <ThemeWrapper />
    </PersistGate>
      
    </Provider>
    {/* </ErrorBoundary> */}
    
  </StrictMode>,
)
