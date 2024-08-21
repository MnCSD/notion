import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Getting Started",
  description: "",
};

export default function GettingStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="p-6">{children}</div>;
}
