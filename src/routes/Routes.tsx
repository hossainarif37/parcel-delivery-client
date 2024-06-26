import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import AuthLayout from "../pages/Auth/AuthLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import MyParcels from "../pages/Dashboard/User/MyParcels/MyParcels";
import BookParcel from "../pages/Dashboard/User/BookParcel/BookParcel";
import UserDashboard from "../pages/Dashboard/User/UserDashboard";
import UserProfile from "../pages/Dashboard/User/UserProfile/UserProfile";
import AgentDashboard from "../pages/Dashboard/Agent/AgentDashboard";
import AdminDashboard from "../pages/Dashboard/Admin/AdminDashboard";
import Overview from "../pages/Dashboard/Admin/Overview/Overview";
import RequireAuth from "../pages/Auth/RequireAuth";
import RequireAgent from "../pages/Auth/RequireAgent";
import RequireAdmin from "../pages/Auth/RequireAdmin";
import AuthenticatedWrapper from "../pages/Auth/AuthenticatedWrapper";
import ErrorPage from "../components/ErrorPage";
import AllParcels from "../pages/Dashboard/Admin/AllParcels/AllParcels";
import AllUsers from "../pages/Dashboard/Admin/AllUsers/AllUsers";
import AllAgents from "../pages/Dashboard/Admin/AllAgents/AllAgents";
import AdminProfile from "../pages/Dashboard/Admin/AdminProfile/AdminProfile";
import MyDeliveryList from "../pages/Dashboard/Agent/MyDeliveryList/MyDeliveryList";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '',
                element: <AuthenticatedWrapper><AuthLayout /></AuthenticatedWrapper>,
                children: [
                    {
                        path: '/login',
                        element: <Login />
                    },
                    {
                        path: '/register',
                        element: <Register />
                    }

                ]
            },

            // User Dashboard
            {
                path: '',
                element: <RequireAuth><UserDashboard /></RequireAuth>,
                children: [
                    {
                        path: '/dashboard/user/my-parcels',
                        element: <MyParcels />
                    },
                    {
                        path: '/dashboard/user/book-parcel',
                        element: <BookParcel />
                    },
                    {
                        path: '/dashboard/user/profile',
                        element: <UserProfile />
                    }
                ]
            },

            // Agent Dashboard
            {
                path: '',
                element: <RequireAgent><AgentDashboard /></RequireAgent>,
                children: [
                    {
                        path: '/dashboard/agent/delivery-list',
                        element: <MyDeliveryList />
                    }
                ]
            },

            // Admin Dashboard
            {
                path: '',
                element: <RequireAdmin><AdminDashboard /></RequireAdmin>,
                children: [
                    {
                        path: '/dashboard/admin/overview',
                        element: <Overview />
                    },
                    {
                        path: '/dashboard/admin/all-parcels',
                        element: <AllParcels />
                    },
                    {
                        path: '/dashboard/admin/all-users',
                        element: <AllUsers />
                    },
                    {
                        path: '/dashboard/admin/all-agents',
                        element: <AllAgents />
                    },
                    {
                        path: '/dashboard/admin/profile',
                        element: <AdminProfile />
                    },
                ]
            },
        ]
    },
]);
