"use client";
import React, { FC, useState, useEffect } from "react";

function MyForm() {
  const [file, setFile] = useState<File>();
  const [imageSrc, setImageSrc] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    author: "",
    category: "",
    date: "",
  });

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    console.log("Title:", formData.title);
    console.log("Slug:", formData.slug);
    console.log("Description:", formData.description);
    console.log("Author:", formData.author);
    console.log("Category:", formData.category);
    console.log("Date:", formData.date);
    console.log("Image:", file);
  };
  const handleImageChange = (value: File) => {
    setFile(value);
  };

  useEffect(() => {
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target) {
        if (typeof event.target.result === "string") {
          setImageSrc(event.target.result);
        }
      }
    };
    if (file) reader.readAsDataURL(file);
  }, [file]);
  // const reader = new FileReader();
  // reader.onload = (event) => {
  //   if (event.target) {
  //     if (typeof event.target.result === "string") {
  //       setImageSrc(event.target.result);
  //     }
  //   }
  // };
  // if (file) reader.readAsDataURL(file);

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-28 flex align-items justify-center mb-28 w-2/3 flex-col mx-auto">
        <div className="mx-auto text-4xl">Post a Blog</div>
        <div className="mt-4">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            className="border w-full rounded py-2 text-white leading-tight bg-transparent focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="border w-full rounded py-2 text-white leading-tight bg-transparent focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="slug">Slug:</label>
          <input
            type="text"
            id="slug"
            name="slug"
            value={formData.slug}
            onChange={handleInputChange}
            className="border w-full rounded py-2 text-white leading-tight bg-transparent focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="description" className="mb-2">
            Description:
          </label>
          <div>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="border  w-full rounded py-2 text-white leading-tight bg-transparent focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="border w-full rounded py-2 text-white-700 leading-tight bg-transparent focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <div className="mt-4">
            <label htmlFor="date" className="mb-2">
              Date:
            </label>
            <div className="flex-1">
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="border  w-full rounded py-2 text-white-700 leading-tight bg-transparent focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <label className={`block mt-3 text-sm font-medium text-white `}>
            Image
          </label>
          <FileDragDrop image={file} setimage={handleImageChange} />
          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

// This is seperate code for Adding Images
interface FileDragDrop {
  image?: File;
  setimage: (value: File) => void;
}

const FileDragDrop: React.FC<FileDragDrop> = ({ image, setimage }) => {
  const [uploadedFile, setUploadedFile] = useState<File>();
  const [isDragging, setIsDragging] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (
      e.relatedTarget === undefined ||
      e.currentTarget.contains(e.relatedTarget as Node)
    ) {
      return;
    }

    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const newFile = e.dataTransfer.files[0];
    const fileExtension = newFile.name.split(".").pop()?.toLowerCase();

    if (/^image\//.test(newFile.type)) {
      setUploadedFile(newFile);
      setimage(newFile);
    } else {
      alert("Invalid file format. Only image files are accepted.");
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();

    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e: Event) => {
      const newFile = (e.target as HTMLInputElement).files?.[0];
      if (newFile && /^image\//.test(newFile.type)) {
        setUploadedFile(newFile);
        setimage(newFile);

        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target) {
            if (typeof event.target.result === "string") {
              setImageSrc(event.target.result);
            }
          }
        };
        if (newFile) reader.readAsDataURL(newFile);
      } else {
        alert("Invalid file format. Only image files are accepted.");
      }
    };
    input.click();
  };

  return (
    <div
      onClick={handleClick}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={` sm:text-lg text-base cursor-pointer w-auto min-h-[10rem] flex items-center justify-center flex-col flex-nowrap text-white border-2 border-white border-opacity-[0.35] rounded-lg ${
        isDragging ? "" : "border-dashed"
      }`}
    >
      {uploadedFile && (
        <div>You can drop another image to replace the older one</div>
      )}
      {imageSrc && (
        <img src={imageSrc} alt="Selected Image" height={400} width={400} />
      )}
      {uploadedFile ? (
        <div> {`${uploadedFile.name}`} </div>
      ) : (
        "Click or drag and drop your image here"
      )}
    </div>
  );
};

export default MyForm;
