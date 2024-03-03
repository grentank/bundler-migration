import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import PageDETECTID0 from './PageDETECTID0';
import PageDETECTID1 from './PageDETECTID1';
import PageDETECTID2 from './PageDETECTID2';
import App from '../App';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/PageDETECTID0', element: <PageDETECTID0 /> },
  { path: '/PageDETECTID1', element: <PageDETECTID1 /> },
  { path: '/PageDETECTID2', element: <PageDETECTID2 /> },
]);

export default router;
