import React from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function CustomTextEditor(props) {
  const { description, setDescription } = props;

  const themeLight = "light";
  const body = document.getElementsByTagName("body")[0];

  return (
    <Editor
      initialValue={description}
      init={{
        plugins: "autolink link image lists print preview",
        toolbar:
          "undo redo | bold italic | alignleft aligncenter alignright | fontsizeselect  fontselect sizeselect ",
        fontsize_formats: "8pt 10pt 12pt 14pt 18pt 24pt 36pt",
        width: "100%",
        height: "500px",
        skin: body.classList.contains(themeLight) ? "" : "oxide-dark",
        content_css: body.classList.contains(themeLight) ? "" : "dark",
      }}
      onChange={(e) => setDescription(e)}
    />
  );
}
