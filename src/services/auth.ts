import api from "./api"

export const register = async (
    role:string,
    fullName:string,
    email:string,
    password:string
) => {
    const res = await api.post("auth/register",{role,fullName,email,password})
    return res.data
}