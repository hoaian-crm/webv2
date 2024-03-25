import { AccessTimeOutlined, AccountCircleOutlined, ArchiveOutlined, AssignmentOutlined, ChatOutlined, CurrencyExchangeOutlined, DescriptionOutlined, DynamicFormOutlined, EmailOutlined, GradientOutlined, LocationOnOutlined, MessageOutlined, PeopleOutlineOutlined, PhoneOutlined, SettingsOutlined, SvgIconComponent, VerifiedUserOutlined } from "@mui/icons-material";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import { CustomerPage } from "./customers";

export type RouteItem = RouteObject & {
  Icon?: SvgIconComponent,
  name?: string;
  children?: Array<RouteItem>;
  group?: string;
}

export const routes: Array<RouteItem> = [
  {
    name: "Income",
    Icon: CurrencyExchangeOutlined,
    group: 'DASHBOARD',
    path: "/dashboard/income",
    element: <h1>Income</h1>
  },
  {
    name: "Performance",
    Icon: DynamicFormOutlined,
    group: 'DASHBOARD',
    path: "/dashboard/performance",
    element: <h1>Performance</h1>
  },
  {
    name: "Map",
    Icon: LocationOnOutlined,
    group: 'DASHBOARD',
    path: "/dashboard/map",
    element: <h1>Map</h1>
  },
  {
    name: "Advertisement",
    Icon: GradientOutlined,
    group: 'DASHBOARD',
    path: "/dashboard/ads",
    element: <h1>Advertisement</h1>
  },
  {
    name: "Customer",
    Icon: PeopleOutlineOutlined,
    group: "APPS",
    path: "/customers",
    element: <CustomerPage />
  },
  {
    name: "Product",
    Icon: ArchiveOutlined,
    group: "APPS",
    path: "/products",
    element: <h1>Products</h1>
  },
  {
    name: "Contact",
    Icon: PhoneOutlined,
    group: "APPS",
    path: "/contacts",
    element: <h1>Contacts</h1>
  },
  {
    name: "Invoice",
    Icon: DescriptionOutlined,
    group: "APPS",
    path: "/invoices",
    element: <h1>Invoice</h1>
  },
  {
    name: "Task",
    Icon: AssignmentOutlined,
    group: "APPS",
    path: '/tasks',
    element: <h1>Tasks</h1>
  },
  {
    name: "Check in/out",
    Icon: AccessTimeOutlined,
    group: "APPS",
    path: '/timekeeping',
    element: <h1>Check in/out</h1>
  },
  {
    name: "Email",
    Icon: EmailOutlined,
    group: "THIRD PARTY",
    path: "/mails",
    element: <h1>Email</h1>
  },
  {
    name: "Chat",
    Icon: ChatOutlined,
    group: "THIRD PARTY",
    path: "/chats",
    element: <h1>Chat</h1>
  },
  {
    name: "SMS",
    Icon: MessageOutlined,
    group: "THIRD PARTY",
    path: "/sms",
    children: [
      {
        name: 'Zalo',
        path: "/sms/zalo",
        element: <h1>Zalo</h1>,
      },
      {
        name: 'Twilo',
        path: "/sms/twilo",
        element: <h1>Twilo</h1>,
      }
    ]
  },
  {
    name: "User",
    Icon: AccountCircleOutlined,
    group: "SYSTEM",
    path: "/users",
    element: <h1>Users</h1>
  },
  {
    name: "Role",
    Icon: VerifiedUserOutlined,
    group: "SYSTEM",
    path: "/role",
    element: <h1>Role</h1>
  },
  {
    name: "Configuration",
    Icon: SettingsOutlined,
    group: "SYSTEM",
    path: "/config",
    element: <h1>Config</h1>
  },
]

const router = createBrowserRouter([
  {
    path: "/",
    children: routes,
    element: <Layout />
  }
]);

export default router;
