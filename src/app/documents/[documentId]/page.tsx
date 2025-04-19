import React from "react";
import Editor from "./editor";
import { DocumentIdPageProps } from "@/types/types";

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params;
  return (
    <div className="minn-h-screen bg-paper">
      <p>Document id is : {documentId}</p>
      <Editor />
    </div>
  );
};

export default DocumentIdPage;
