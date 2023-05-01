import axios from 'axios';

export const getCardsAPI = async (page: number) => {
  const result = await axios
    .get(
      `https://644e16f71b4567f4d57f9ab7.mockapi.io/api/card/?page=${page}&limit=10`,
    )
    .then(function (response) {
    //   console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log('getCardsAPI -->', error);
    });
  return result;
};
