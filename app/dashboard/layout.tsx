import Sidebar from "@/components/sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel className="w-[248px] max-w-[480px] min-w-[248px]">
        <Sidebar />
      </ResizablePanel>
      <ResizableHandle className="bg-[#373737]" />
      <ResizablePanel className="flex-1 bg-main">
        <main className="">{children}</main>
      </ResizablePanel>
      {/* You can add common dashboard layout elements here, such as a sidebar or header */}
    </ResizablePanelGroup>
  );
}
