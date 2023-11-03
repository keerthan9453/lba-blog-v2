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
  Link,
} from "lucide-react";
import { Toggle } from "./ui/toggle";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "./ui/select";
import { useEffect, useState } from "react";

type Props = {
  editor: Editor | null;
};

const Toolbar = ({ editor }: Props) => {
  if (!editor) {
    return null;
  }
  const [selectValue, setSelectValue] = useState<String>("normal");

  const { $from } = editor.view.state.selection;

  // Find the node type at the current cursor position
  const nodeType = $from.node($from.depth).type.name;

  if (document.getElementById("selectValue") != null) {
    if (nodeType === "paragraph") {
      document.getElementById("selectValue").innerHTML = "Normal";
    } else if (nodeType === "heading") {
      document.getElementById("selectValue").innerHTML =
        "Heading " + $from.parent.attrs.level;
    }
    if ($from.node($from.depth - 1).type.name === "blockquote") {
      document.getElementById("selectValue").innerHTML = "Quote";
    }
  }

  console.log(nodeType);

  useEffect(() => {
    if (selectValue === "h1") {
      editor.chain().focus().toggleHeading({ level: 1 }).run();
    } else if (selectValue === "h2") {
      editor.chain().focus().toggleHeading({ level: 2 }).run();
    } else if (selectValue === "h3") {
      editor.chain().focus().toggleHeading({ level: 3 }).run();
    } else if (selectValue === "h4") {
      editor.chain().focus().toggleHeading({ level: 4 }).run();
    } else if (selectValue === "blockquote") {
      if (editor.isActive("heading"))
        editor.chain().focus().toggleHeading({ level: 1 }).run();

      if (editor.isActive("heading"))
        editor.chain().focus().toggleHeading({ level: 1 }).run();
      editor.chain().focus().toggleBlockquote().run();
    } else {
      if (editor.isActive("heading"))
        editor.chain().focus().toggleHeading({ level: 1 }).run();

      if (editor.isActive("heading"))
        editor.chain().focus().toggleHeading({ level: 1 }).run();

      if (editor.isActive("blockquote"))
        editor.chain().focus().toggleBlockquote().run();
    }

    if (editor.isActive("blockquote") && editor.isActive("heading"))
      editor.chain().focus().toggleBlockquote().run();

    console.log(editor.getHTML());
  }, [selectValue]);

  return (
    <div className="flex justify-start">
      <Select onValueChange={(selectValue) => setSelectValue(selectValue)}>
        <SelectTrigger id="selectValue" className="w-[180px]">
          <SelectValue placeholder="Normal"></SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="normal">Normal</SelectItem>
            <SelectItem className="text-3xl font-semibold" value="h1">
              Heading 1
            </SelectItem>
            <SelectItem className="text-2xl font-semibold" value="h2">
              Heading 2
            </SelectItem>
            <SelectItem className="text-xl font-semibold" value="h3">
              Heading 3
            </SelectItem>
            <SelectItem className="text-lg font-semibold" value="h4">
              Heading 4
            </SelectItem>
            <SelectItem value="blockquote">| Quote</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div>
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
      <div className="border-l-2 border-black dark:border-gray-700">
        <Toggle
          size="sm"
          pressed={editor.isActive("bulletList")}
          onPressedChange={() =>
            editor.chain().focus().toggleBulletList().run()
          }
        >
          {" "}
          <List></List>
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("orderedList")}
          onPressedChange={() =>
            editor.chain().focus().toggleOrderedList().run()
          }
        >
          {" "}
          <ListOrdered></ListOrdered>
        </Toggle>
      </div>
      <div className="border-l-2 border-black dark:border-gray-700">
        <Toggle
          size="sm"
          pressed={editor.isActive("bulletList")}
          onPressedChange={() =>
            editor.chain().focus().toggleBulletList().run()
          }
        >
          {" "}
          <Link></Link>
        </Toggle>
      </div>
    </div>
  );
};

export default Toolbar;
