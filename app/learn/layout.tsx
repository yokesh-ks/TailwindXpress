import React from "react"
import { ScrollArea } from "@camped-ui/scroll-area"

import { docsConfig } from "@/config/docs"
import { DocsSidebarNav } from "@/components/docs/sidebar-nav"

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="border-b">
      <div className="flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-10 px-4">
        <aside className="fixed top-7 z-30 hidden h-[calc(100vh-3.5rem)] shrink-0 md:sticky md:block pl-4 pb-10">
          <ScrollArea className="h-full pb-10 px-6">
            <DocsSidebarNav items={docsConfig.sidebarNav} />
          </ScrollArea>
        </aside>
        {children}
      </div>
    </div>
  )
}
