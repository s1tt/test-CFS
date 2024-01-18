import axios from 'axios';
import { BASE_URL, POSTS_PER_PAGE } from 'shared/config/constants/constants';
import { Post } from './models';

export async function getPosts(
  limit = POSTS_PER_PAGE,
  page = 1,
  searchQuery = ''
) {
  try {
    const response = await axios.get<Post[]>(`${BASE_URL}posts`, {
      params: {
        _limit: limit,
        _page: page,
        q: searchQuery
      }
    });
    return { posts: response.data, headers: response.headers };
  } catch (e) {
    throw new Error('Error fetching posts');
  }
}

export async function getPostById(id: number) {
  try {
    const response = await axios.get<Post>(`${BASE_URL}posts/${id}`);
    return response.data;
  } catch (e) {
    throw new Error('Error fetching posts');
  }
}
