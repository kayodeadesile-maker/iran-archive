import { TranslationContext } from "@/context/TranslationContext";
import { useContext } from "react";

export const useTranslation = () => useContext(TranslationContext);
