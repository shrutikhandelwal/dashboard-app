import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import globalReducer from "state";
import { Provider } from 'react-redux';
import { setupListeners } from "@reduxjs/toolkit/query"
import { api } from "state/api";
import { createRoot } from 'react-dom/client';
import * as Sentry from '@sentry/react';

// Sentry.init({
//   dsn: "https://1e896e9f3dee466667457dbd16f27270@o4507052252004352.ingest.us.sentry.io/4507052253511680",
//   integrations: [
//     Sentry.browserTracingIntegration(),
//     Sentry.replayIntegration({
//       maskAllText: false,
//       blockAllMedia: false,
//     }),
//   ],
//   environment: process.env.REACT_APP_ENV,
//   // Performance Monitoring
//   tracesSampleRate: 1.0, //  Capture 100% of the transactions
//   // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
//   tracePropagationTargets: ["localhost", /^http:\/\/localhost:3000/],
//   // Session Replay
//   replaysSessionSampleRate: 1.0, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
//   replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
// });
Sentry.init({
  dsn: "https://e8fac9b97a7ca69b65cccae24f1399d5@o4507052252004352.ingest.us.sentry.io/4507221865267200",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^http:\/\/localhost:3000/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

const root = createRoot(document.getElementById("root"));

export const store = configureStore({
  reducer:{
    global: globalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware:(getDefault) => getDefault().concat(api.middleware),
});
setupListeners(store.dispatch);

// const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);


