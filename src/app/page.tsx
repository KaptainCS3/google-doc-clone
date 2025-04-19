import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const DocumentsPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Button asChild>
        <Link href={"/documents/93457398573"}>Click here</Link>
      </Button>
    </div>
  );
};

export default DocumentsPage;
