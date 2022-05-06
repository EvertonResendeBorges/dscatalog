import { Method } from "axios";

//Se tiver interrogação é opcional
export type AxiosParams = {
    method?: Method;
    url: string;
    data?: object;
    params?: object;
  };
  