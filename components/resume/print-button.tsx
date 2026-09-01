"use client";

import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PrintButton() {
  const [printing, setPrinting] = useState(false);

  function handlePrint() {
    setPrinting(true);
    window.setTimeout(() => {
      window.print();
      setPrinting(false);
    }, 250);
  }

  return (
    <Button onClick={handlePrint} disabled={printing} size="lg">
      {printing ? (
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
      ) : (
        <Download className="h-4 w-4" aria-hidden />
      )}
      Download as PDF
    </Button>
  );
}