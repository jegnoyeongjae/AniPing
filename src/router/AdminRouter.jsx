import { Outlet } from 'react-router-dom';
import AdminHeader from '../components/common/AdminHeader';
import '../pages/admin/AdminRouter.css';

const AdminRouter = () => {

  return (
    <div className='adminRouter'>
      <AdminHeader  />
      <Outlet />
    </div>
  );
};

export default AdminRouter;