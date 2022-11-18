import axiosInstance from 'customAxios/customAxios';

interface RentalsParams {
  current: Boolean;
  page: number;
  size: number;
  sort: string;
}

export const getRentals = async (params: RentalsParams) => {
  const response = await axiosInstance.get('/rent/book', {
    params: params
  });
  return response.data.content;
};

export const getRentalsByUser = async (id: number, params: RentalsParams) => {
  const response = await axiosInstance.get(`/rent/user/${id}`, {
    params: params
  });
  return response.data.content;
};

export const createRental = async (id: number, rentPeriod: number) => {
  return await axiosInstance.post(`/rent/book/${id}/user`);
};
