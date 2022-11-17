import axiosInstance from 'customAxios/customAxios';

interface RentalsParams {
  current: Boolean;
  page: number;
  size: number;
  sort: string;
}

const getRentals = async (params: RentalsParams) => {
  const response = await axiosInstance.get('/rent/book', {
    params: params,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
  return response.data.content;
};

const getRentalsByUser = async (id: number, params: RentalsParams) => {
  const response = await axiosInstance.get(`/rent/user/${id}`, {
    params: params,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
  return response.data.content;
};

const createRental = async (id: number, rentPeriod: number) => {
  const response = await axiosInstance.post(
    `/rent/book/${id}/user`,
    {},
    {
      params: { rentPeriod: rentPeriod },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }
  );
  return response;
};

const rentalsService = { getRentals, getRentalsByUser, createRental };

export default rentalsService;
