import { AppWrapper } from "app-flat/ui";
import type { Metadata } from "next";
import { SharedProps } from "shared/config/type";

export const metadata: Metadata = {
  title: "Template web3 project",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: SharedProps) {
  return <AppWrapper>{children}</AppWrapper>;
}
