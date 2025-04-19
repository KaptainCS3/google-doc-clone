import React from "react";
import Editor from "./editor";
// import { DocumentIdPageProps } from "@/types/types";
import { Toolbar } from "./toolbar";

const DocumentIdPage = async () => {
  return (
    <div className="minn-h-screen bg-paper">
      <div className="px-8 pt-4">
        <Toolbar />
      </div>
      <Editor />
    </div>
  );
};

export default DocumentIdPage;
