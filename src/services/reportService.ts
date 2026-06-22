import api from "./api";


export interface ReportData {
    programId:number;
    programName:string;
    title:string;
    severity:string;
    description:string;
    status:string;
}


export const createReport = async (data:ReportData) => {

    const response = await api.post(
        "/reports/create",
        data
    );

    return response.data;
};


export const getReports = async () => {

    const response = await api.get(
        "/reports"
    );

    return response.data;
};


export const deleteReport = async(id:string)=>{

    const response = await api.delete(
        `/reports/${id}`
    );

    return response.data;
};


export const updateReport = async(
    id:string,
    data:Partial<ReportData>
)=>{

    const response = await api.put(
        `/reports/${id}`,
        data
    );

    return response.data;
};