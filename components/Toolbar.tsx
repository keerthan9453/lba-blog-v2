"use client";
import { type Editor } from "@tiptap/react";
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Underline,
  Heading2,
} from "lucide-react";
import { Toggle } from "./ui/toggle";

type Props = {
  editor: Editor | null;
};

const Toolbar = ({ editor }: Props) => {
  if (!editor) {
    return null;
  }
  return (
    <div>
      <Toggle
        size="sm"
        pressed={editor.isActive("heading")}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        {" "}
        <Heading2></Heading2>
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        {" "}
        <Bold></Bold>
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("italic")}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        {" "}
        <Italic></Italic>
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("underline")}
        onPressedChange={() => editor.chain().focus().toggleUnderline().run()}
      >
        {" "}
        <Underline></Underline>
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("strikethrough")}
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
      >
        {" "}
        <Strikethrough></Strikethrough>
      </Toggle>
    </div>
  );
};

export default Toolbar;
