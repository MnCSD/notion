import Sidebar from "@/components/sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { getPages, getParentPages } from "@/lib/pages";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = await getParentPages();

  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel
        className="w-[248px!important] max-w-[480px] min-w-[248px]"
        defaultSize={0}
      >
        {/* @ts-ignore */}
        <Sidebar pages={pages} />
      </ResizablePanel>
      <ResizableHandle className="bg-[#373737]" />
      <ResizablePanel className="flex-1 bg-main" defaultSize={100}>
        <main className="">{children}</main>
      </ResizablePanel>
      {/* You can add common dashboard layout elements here, such as a sidebar or header */}
    </ResizablePanelGroup>
  );
}
