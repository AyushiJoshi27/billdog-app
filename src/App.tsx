import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  RouterProvider,
  RouterProviderProps,
  createBrowserRouter,
} from 'react-router-dom';
import { routes } from './route';
import { useIsHydrated } from './hooks/useIsHydrated';
import { Loader } from './layout/Loader';

function App() {
  const routerRef = useRef<RouterProviderProps['router']>();
  const isHydrated = useIsHydrated();

  if (!routerRef.current && isHydrated) {
    routerRef.current = createBrowserRouter(routes);
  }

  if (!routerRef.current) return <Loader />;

  return <RouterProvider router={routerRef.current} />;
}

export default App;
