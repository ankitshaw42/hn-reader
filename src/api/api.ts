import { Link } from './../interfaces/index';
const baseUri = 'https://api.hackerwebapp.com';

export const getNews = async (page = 1): Promise<Link[]> => {
  const response = await fetch(`${baseUri}/news?page=${page}`);
  return response.json();
};
