'use client'
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import type { ReactNode } from "react";

interface ProvidersProps {
 children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
 return <Provider store={store}>{children}</Provider>;
}