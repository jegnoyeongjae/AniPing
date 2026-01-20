import { Outlet, useLocation, Navigate } from 'react-router-dom';
import UserSidebar from '../../components/user/mypage/UserSidebar';

const UserMyPage = () => {
    const location = useLocation();

    // /user 경로로 직접 접근 시 /user/profile로 리디렉션
    if (location.pathname === '/user') {
        return <Navigate to="/user/profile" replace />;
    }

    return (
        <div className="min-h-screen bg-background pt-24 pb-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
                <UserSidebar />
                <main className="flex-1">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default UserMyPage;
