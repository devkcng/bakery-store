"use client";
import { useEffect, useState } from "react";
import HomePage from "./home/page";
type Topping = {
  id: string;
  name: string;
  initialQuantity: number;
};
export interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  img_path?: string;
}
export default function Home() {
  return <div>{/* <HomePage></HomePage> */}</div>;
}
