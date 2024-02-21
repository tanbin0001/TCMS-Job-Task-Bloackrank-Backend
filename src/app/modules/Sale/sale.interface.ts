import { Types } from "mongoose";

export type TSale = {
    sportsItemId: Types.ObjectId;
    productName: string;
    quantity: number;
    buyerName: string;
    saleDate: string;
  }