import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../Hooks/useAuth'
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaBook, FaUsers } from 'react-icons/fa6';
// eslint-disable-next-line no-unused-vars
import { FaJediOrder, FaProductHunt } from 'react-icons/fa';

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: stats } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async() => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
           
        }
    })

    return (
        <div>
            <h2 className='text-3xl font-serif pl-5'>
                <span>Hi, Welcome   </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
            <div className="stats stats-vertical lg:stats-horizontal shadow ml-10 mt-6">
  <div className="stat">
  <div><FaUsers></FaUsers>

    <div className="stat-title">Users </div></div>
    <div className="stat-value">{stats.users}</div>
    <div className="stat-desc"></div>
  </div>

  <div className="stat">
  <div><FaProductHunt></FaProductHunt></div>
    <div className="stat-title">Products </div>
    <div className="stat-value">{stats.Products}</div>
    <div className="stat-desc"></div>
  </div>

  <div className="stat">
  <div><FaBook></FaBook></div>
    <div className="stat-title">Orders  </div>
    <div className="stat-value">{stats.orders}</div>
    <div className="stat-desc"></div>
  </div>
</div>
        </div>
    );
};

export default AdminHome;