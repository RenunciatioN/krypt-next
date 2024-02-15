"use client";

import { useContext } from "react";
import { SwapStageContext } from "./swap-stage.context";

export const useSwapStage = () => useContext(SwapStageContext);
