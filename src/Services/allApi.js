import commonApi from "./commonApi";
import serverUrl from "./serverUrl";


// addDealApi
export const addJobApi = async (reqBody) => {
    return await commonApi("POST", `${serverUrl}/add-job`, reqBody)
}

// getDealApi
export const getJobApi = async () => {
    return await commonApi("GET", `${serverUrl}/get-allJobs`, {});
};


// // commonApi should support POST
// export const getJobApi = async (title, category) => {
//     return await commonApi("GET", `${serverUrl}/get-allJobs`, { title, category });
// };
