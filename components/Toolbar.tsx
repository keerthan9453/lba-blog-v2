"use client";
import { type Editor } from "@tiptap/react";
import * as SelectPrimitive from "@radix-ui/react-select";
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
import { RefObject, useEffect, useRef, useState } from "react";

type Props = {
  editor: Editor | null;
};

const Toolbar = ({ editor }: Props) => {
  if (!editor) {
    return null;
  }

  const isChecked: string[] = new Array(6).fill("unchecked");

  const normalSelectRef = useRef(null);
  const h1SelectRef = useRef(null);
  const h2SelectRef = useRef(null);
  const h3SelectRef = useRef(null);
  const h4SelectRef = useRef(null);
  const quoteSelectRef = useRef(null);

  const [selectValue, setSelectValue] = useState<String>("normal");

  const { $from } = editor.view.state.selection;

  if (normalSelectRef.current != null)
    console.log(normalSelectRef.current.getAttribute("data-state"));

  // Find the node type at the current cursor position
  const nodeType = $from.node($from.depth).type.name;

  function setChecked(nodeType: string, attrLevel: number) {
    normalSelectRef.current.setAttribute("data-state", "unchecked");
    normalSelectRef.current.setAttribute("aria-selected", "false");
    h1SelectRef.current.setAttribute("data-state", "unchecked");
    h1SelectRef.current.setAttribute("aria-selected", "false");
    h2SelectRef.current.setAttribute("data-state", "unchecked");
    h2SelectRef.current.setAttribute("aria-selected", "false");
    h3SelectRef.current.setAttribute("data-state", "unchecked");
    h3SelectRef.current.setAttribute("aria-selected", "false");
    h4SelectRef.current.setAttribute("data-state", "unchecked");
    h4SelectRef.current.setAttribute("aria-selected", "false");
    quoteSelectRef.current.setAttribute("data-state", "unchecked");
    quoteSelectRef.current.setAttribute("aria-selected", "false");

    if (nodeType === "paragraph") {
      normalSelectRef.current.setAttribute("data-state", "checked");
      normalSelectRef.current.setAttribute("aria-selected", "true");
    }
  }

  if (document.getElementById("selectValue") != null) {
    if (nodeType === "paragraph") {
      document.getElementById("selectValue").innerHTML = "Normal";
      setChecked(nodeType, 0);
    } else if (nodeType === "heading") {
      document.getElementById("selectValue")!.innerHTML =
        "Heading " + $from.parent.attrs.level;
    }
    if ($from.node($from.depth - 1).type.name === "blockquote") {
      document.getElementById("selectValue")!.innerHTML = "Quote";
    }
  }

  function setLink() {
    if (editor === null) {
      return;
    }
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    // update link
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }
  if (editor != null) {
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
    }, [selectValue]);
  }

  return (
    <div className="flex justify-start">
      <Select onValueChange={(selectValue) => setSelectValue(selectValue)}>
        <SelectTrigger id="selectValue" className="w-[180px]">
          <SelectValue placeholder="Normal"></SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem
              data-state={isChecked[0]}
              id="normSelect"
              value="normal"
              ref={normalSelectRef}
            >
              Normal
            </SelectItem>
            <SelectItem
              data-state={isChecked[1]}
              id="h1Select"
              className="text-3xl font-semibold select-text"
              value="h1"
              ref={h1SelectRef}
            >
              Heading 1
            </SelectItem>
            <SelectItem
              data-state={isChecked[2]}
              id="h2Select"
              className="text-2xl font-semibold"
              value="h2"
              ref={h2SelectRef}
            >
              Heading 2
            </SelectItem>
            <SelectItem
              data-state={isChecked[3]}
              id="h3Select"
              className="text-xl font-semibold"
              value="h3"
              ref={h3SelectRef}
            >
              Heading 3
            </SelectItem>
            <SelectItem
              data-state={isChecked[4]}
              id="h4Select"
              className="text-lg font-semibold"
              value="h4"
              ref={h4SelectRef}
            >
              Heading 4
            </SelectItem>
            <SelectItem
              data-state={isChecked[5]}
              id="quoteSelect"
              value="blockquote"
              ref={quoteSelectRef}
            >
              | Quote
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="border-l-2 border-gray-800 dark:border-gray-500">
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
      <div className="border-l-2 border-gray-800 dark:border-gray-500">
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
      <div className="border-l-2 border-gray-800 dark:border-gray-500">
        <Toggle
          size="sm"
          pressed={editor.isActive("link")}
          onPressedChange={() => setLink()}
        >
          {" "}
          <Link></Link>
        </Toggle>
      </div>
    </div>
  );
};

export default Toolbar;
