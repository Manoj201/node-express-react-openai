/* eslint-disable @typescript-eslint/no-explicit-any */

import axios, { AxiosResponse } from 'axios';

type ParamType = Record<string, string | number | null>;

const handleResponse = (response: AxiosResponse<any, any>): any => {
    try {
        const status = response.status;
        if (status === 200 || status === 201) {
            return response.data;
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const POST_FILE = async (url: string, formData: Record<string, any>): Promise<any> => {
    return await axios
        .post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((res) => {
            return handleResponse(res);
        })
        .catch((error) => {
            throw error;
        });
};

export const POST = async (url: string, data: ParamType): Promise<any> => {
    return await axios
        .post(url, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((res) => {
            return handleResponse(res);
        })
        .catch((error) => {
            throw error;
        });
};
