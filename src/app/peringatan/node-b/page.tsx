"use client";

import React, { Suspense } from "react";
import DetailNodeB from "@/components/peringatan/DetailNodeB";

export default function DetailNodeBPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center text-[#64748b]">
          Memuat Detail Peringatan Node B...
        </div>
      }
    >
      <DetailNodeB />
    </Suspense>
  );
}
