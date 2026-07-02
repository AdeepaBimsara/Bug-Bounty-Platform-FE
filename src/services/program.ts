import api from "./api";

export const createProgram = async (programData: any) => {
  const res = await api.post("/programs", programData);

  return res.data;
};

export const getMyPrograms = async () => {
  const res = await api.get("/programs/my-programs");
  return res.data.data;
};

export const deleteProgram = async (
  id: string
) => {
  const res = await api.delete(
    `/programs/${id}`
  );

  return res.data;
};

export const updateProgram = async (
  id: string,
  programData: any
) => {
  const res = await api.put(
    `/programs/${id}`,
    programData
  );

  return res.data;
};

export const getProgramById = async (id: string) => {
    const res = await api.get(`/programs/${id}`);
    return res.data.data;
};

export const browsePrograms = async () => {
  const res = await api.get("/programs");
  return res.data.data;
};