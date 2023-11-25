"use client";
import "./styles.scss";
import { useEditor, EditorContent } from "@tiptap/react";
import Underline from "@tiptap/extension-underline";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import Link from "@tiptap/extension-link";

import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";

const TextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      BulletList,
      OrderedList,
      ListItem,
      Link.extend({ inclusive: false }).configure({
        openOnClick: false,
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none",
      },
    },
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
