import axios from "axios";

const LOG_INTERCEPTOR = async (req: any) => {
  if (process.env.NODE_ENV !== "production")
    console.log("[CLIENT] requesting...", req.url);
  return req;
};

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}api/v1`,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

api.interceptors.request.use(LOG_INTERCEPTOR);

export const staticContentUrl = `${process.env.NEXT_PUBLIC_API_URL}media`;

export default api;
