"use client";

import { useContext } from "react";
import { ExchangeContext } from "./exchange.context";

export const useExchange = () => useContext(ExchangeContext);
