import { Outlet } from "react-router-dom";
import TabsContent from "./components/Tabs";
import { UserView } from "./components/features/users/userView";
import CounterPage from "./components/counter/counterLayout";
import CardPage from "./components/card/card";
import LoginPage from "./components/login/LoginPage";

export const routes = [
  {
    path: '/',
    errorElement: <TabsContent />,
    element: (
      <>
        <Outlet />
      </>
    ),
    children: [
      {
        path: 'card',
        element: <CardPage />
      },
      {
        path: 'counter',
        element: <CounterPage />
      },
      {
        path: 'user-view',
        element: <UserView />
      },
      {
        path: 'login',
        element: <LoginPage />
      }
    ]
  }
]