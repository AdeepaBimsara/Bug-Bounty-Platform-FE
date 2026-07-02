import api from "./api";

export const getCompanyProfile = async () => {
    const res = await api.get("/auth/profile");
    return res.data.data;
};