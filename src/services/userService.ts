import axiosInstance from 'customAxios/customAxios';
import UserModel from 'models/UserModel';

const getUserById = async (id: number) => {
  const response = await axiosInstance.get(`${process.env.REACT_APP_BASE_URL}/user/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
  return response.data;
};

const updateUser = async (id: number, user: UserModel) => {
  const response = await axiosInstance.put(`${process.env.REACT_APP_BASE_URL}/user/${id}`, user, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });

  return response.data;
};

const userService = { getUserById, updateUser };

export default userService;
