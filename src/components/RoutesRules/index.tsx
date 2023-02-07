import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { LoadingFullPage } from "../LoadingFullPage";

const { user, globalLoading } = useContext(UserContext);

export const DontProtectedRoutes = () => {
  if (globalLoading) {
    return <LoadingFullPage />;
  }

  return !user ? (
    <Outlet />
  ) : user.isWorker ? (
    <Navigate to="/dashboard" replace={true} />
  ) : (
    <Navigate to="/home" replace={true} />
  );
};

export const ProtectedRoutes = () => {
  if (globalLoading) {
    return <LoadingFullPage />;
  }

  return user ? <Outlet /> : <Navigate to="/login" replace={true} />;
};

export const WorkerRoutes = () => {
  return user?.isWorker ? <Outlet /> : <Navigate to="/home" replace={true} />;
};

export const ClientRoutes = () => {
  return !user?.isWorker ? (
    <Outlet />
  ) : (
    <Navigate to="/dashboard" replace={true} />
  );
};
