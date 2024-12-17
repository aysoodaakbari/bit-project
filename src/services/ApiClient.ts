import axios, { ResponseType } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.bitpin.org/v1/',
  timeout: 50000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getData = async <T>(
  url: string,
  params?: Record<string, any>,
  responseType?: ResponseType
): Promise<T> => {
  const response = await axiosInstance.get<T>(url, {
    params: params,
    responseType: responseType,
  });
  return response.data;
};

export const postData = async <T, R>(
  url: string,
  data?: T,
  headers?: any,
  timeout?: number
): Promise<R> => {
  try {
    const response = await axiosInstance.post<R>(url, data, {
      headers: {
        ...axiosInstance.defaults.headers,
        ...headers,
      },
      timeout: timeout !== undefined ? timeout : axiosInstance.defaults.timeout,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
    } else {
    }
    throw error;
  }
};
