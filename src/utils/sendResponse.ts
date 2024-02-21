import { Response } from 'express';

type TMeta = {
  page: number;
  limit: number;
  total: number,
}


type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string;
  metaData?:TMeta;
  data: T;
};

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  res.status(data?.statusCode).json({
    success: data.success,
    statusCode: data.statusCode,
    message: data.message,
    meta: data.metaData,
    data: data.data,
  });
};

export default sendResponse;
