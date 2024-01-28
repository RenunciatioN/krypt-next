"use client";

import { useContext } from "react";
import { StageContext } from "./stage.context";

export const useStage = () => useContext(StageContext);
