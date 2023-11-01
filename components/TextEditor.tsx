"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import Underline from "@tiptap/extension-underline";

import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";

const TextEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: "<p>Hello World! 🌎️</p>",
  });

  return (
    <div className="">
      <div className="border-x-2 border-t-2 border-black dark:border-gray-700 ">
        <Toolbar editor={editor}></Toolbar>
      </div>

      <div className="overflow-y-auto h-48 border-2 border-black dark:border-gray-700 p-2">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TextEditor;
