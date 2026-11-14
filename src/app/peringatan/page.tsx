"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PeringatanOverview from "@/components/peringatan/PeringatanOverview";
import DetailNodeA from "@/components/peringatan/DetailNodeA";
import DetailNodeB from "@/components/peringatan/DetailNodeB";

function PeringatanRouter() {
  const searchParams = useSearchParams();
  const nodeParam = searchParams.get("node")?.toLowerCase();

  if (nodeParam === "a" || nodeParam === "node-a") {
    return <DetailNodeA />;
  }

  if (nodeParam === "b" || nodeParam === "node-b") {
    return <DetailNodeB />;
  }

  return <PeringatanOverview />;
}

export default function PeringatanPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center text-[#64748b]">
          Memuat Peringatan...
        </div>
      }
    >
      <PeringatanRouter />
    </Suspense>
  );
}
