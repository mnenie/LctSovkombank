import { ACCOUNT_ROUTE, AUTH_ROUTE, HOME_ROUTE, TASK_ROUTE, TABLE_ROUTE} from "../utils/consts";
import Account from "../views/Account";
import Auth from "../views/Auth/Auth";
import Home from "../views/Home/Home";
import NotFound from "../views/NotFound";
import TaskForm from "../views/TaskForm/TaskForm";
import WorkersTable from "../views/WokerksTable/WorkersTable";

export const publicRoutes = [
  {
    path: AUTH_ROUTE,
    Component: Auth
  },
  {
    path: '*', 
    Component: NotFound
  }
]

export const authRoutes = [
  {
    path: HOME_ROUTE,
    Component: Home
  },
  {
    path: ACCOUNT_ROUTE,
    Componet: Account
  },
  {
    path: TASK_ROUTE,
    Component : TaskForm
  },
  {
    path: TABLE_ROUTE,
    Component : WorkersTable
  },
  {
    path: '*', 
    Component: NotFound
  }
]