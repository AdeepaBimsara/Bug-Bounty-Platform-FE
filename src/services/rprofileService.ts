import api from "./api";


export const getMyProfile = async () => {

  const res = await api.get(
    "/auth/profile"
  );

  return res.data;

};



export const updateMyProfile = async (
  profileData:any
) => {

  const res = await api.put(
    "/auth/profile",
    profileData
  );

  return res.data;

};



export const deleteMyAccount = async () => {

  const res = await api.delete(
    "/auth/profile"
  );

  return res.data;

};