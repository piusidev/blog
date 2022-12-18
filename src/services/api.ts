import { axiosClient, axiosInternalClient } from './axios-config';

export const api = axiosClient();
export const internalApi = axiosInternalClient();
