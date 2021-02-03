import axios from 'axios';

export const postData = async (body) => {
    await axios.post("http://localhost:8001/v1jobs/jobs", body);
}