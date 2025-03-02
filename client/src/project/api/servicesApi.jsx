import axiosInstance from './axiosInstance';
import { useEffect, useState } from 'react';

const productApi = {
    signUp: (data) => axiosInstance.post(`/auth/register`, data),
    Verify: (data) => axiosInstance.post(`/auth/verify`, data),
    login: (data) => axiosInstance.post(`/auth/login`, data),
    ChangePassword: (data) => axiosInstance.put(`/auth/ChangePassword`, data),

    profile: (token) => axiosInstance.get(`/auth/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }),
    AdminLogin: (data) => axiosInstance.post(`/auth/login/admin`, data),
    products: (data) => axiosInstance.post(`/AddProducts`, data, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }),
    GetProducts: (params) => axiosInstance.get(`/GetProducts`, { params }),
    GetLikedProduct: (token) => axiosInstance.get(`/basket`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }),
    PutProducts: (id, token) => axiosInstance.put(`/PutProducts/${id}`),

    PasswordChangeChechk: (data) => axiosInstance.put(`/auth/forgot-password-check`, data),

    PasswordChange: (data) => axiosInstance.put(`/auth/forgot-password`, data),

    getPhoneById: (id) => axiosInstance.get(`/phone/${id}`),
    Likes: (id) => axiosInstance.put(`/add-like/${id}`),

    adminProfile: (token) => api.get("/auth/profile/admin", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }),
    addToBasket: (token, id) => axiosInstance.post(`/basket/${id}`, {}, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }),
    clearBasket: (token) => axiosInstance.delete(`/basket/clear`, {
        headers: { Authorization: `Bearer ${token}` }
    }),

    addReview: (data) => axiosInstance.post(`/review/add-review`, data),
    getAllReview: (data) => axiosInstance.get(`/review/all-reviews`, data),
    putReview: (data) => axiosInstance.put(`/review/put-reviews/:id`, data),
    doneReview: (data) => axiosInstance.get(`/review/done-reviews`, data),

};



export const useFetchProducts = (active) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await productApi.GetProducts();
                if (res.data && Array.isArray(res.data.data)) {
                    setItems([...res.data.data].reverse());
                } else {
                    console.error("API returned incorrect data format:", res.data);
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [active]);

    return items;
};

export default productApi;
