import React, { useState, useEffect } from 'react';
import { useAuth } from '../store/auth';
import { useNavigate } from 'react-router-dom';
import "../components/AdminUser.css";

const AdminUsers = () => {
    const { token, isLoggedIn, LogoutUser } = useAuth();
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const getAllUsersData = async () => {
        if (!isLoggedIn) {
            navigate('/login');
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/admin/users", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            if (response.status === 401) {
                LogoutUser();
                navigate('/login');
                return;
            }

            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }

            const data = await response.json();
            setUsers(data);
            setError(null);
        } catch (error) {
            console.error(error);
            setError('Unable to retrieve users');
        }
    };

    useEffect(() => {
        getAllUsersData();
    }, [isLoggedIn, token]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section className='admin-users-section'>
            <div className='container'>
                <h1>Admin User</h1>
            </div>
            <div className='container admin-user'>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length === 0 ? (
                            <tr>
                                <td colSpan="5">No users found</td>
                            </tr>
                        ) : (
                            users.map((curUser, index) => (
                                <tr key={curUser._id || index}>
                                    <td>{curUser.username}</td>
                                    <td>{curUser.email}</td>
                                    <td>{curUser.phone || 'N/A'}</td>
                                    <td>
                                        <button>Edit</button>
                                    </td>
                                    <td>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AdminUsers;