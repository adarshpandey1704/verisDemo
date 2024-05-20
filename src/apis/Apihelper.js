import axios from 'axios';

export const getCaller = async (payload) => {
  try {
    const resp = await axios.get(`http://127.0.0.1:8080/events/${payload}`);

    return { success: true, message: 'Successfully!', data: resp };
  } catch (e) {
    return { message: 'Something went wrong!', success: false };
  }
};

export const postCaller = async (path, payload) => {
  try {
    const resp = await axios.post(`http://127.0.0.1:8080/events/${path}`, { payload });

    return { message: 'Successfully!', data: resp, success: true };
  } catch (e) {
    return { message: 'Something went wrong!', success: true };
  }
};
