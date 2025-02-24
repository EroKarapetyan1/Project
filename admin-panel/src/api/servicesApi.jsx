import axiosInstance from './axiosInstance';
import { useEffect, useState } from 'react';

const productApiAdmin = {
    putProduct: (token , id , data) => axiosInstance.put(`/PutProducts/${id}`, data , {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }),
};




export default productApiAdmin;
