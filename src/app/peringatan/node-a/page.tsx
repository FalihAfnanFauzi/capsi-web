"use client";

import React, { Suspense } from "react";
import DetailNodeA from "@/components/peringatan/DetailNodeA";

export default function DetailNodeAPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center text-[#64748b]">
          Memuat Detail Peringatan Node A...
        </div>
      }
    >
      <DetailNodeA />
    </Suspense>
  );
}
