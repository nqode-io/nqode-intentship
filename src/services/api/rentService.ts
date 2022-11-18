import axios from '../../axios/axiosConfig';

const rentBook = (id: string, days: string) => {
  return axios
    .post(`/rent/book/${id}/user?rentPeriod=${days}`)
    .then((res) => res)
    .catch((err) => err);
};

const rentService = { rentBook };

export default rentService;
