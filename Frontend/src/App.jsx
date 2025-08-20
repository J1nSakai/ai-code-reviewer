import "./App.css";
import "prismjs/themes/prism-tomorrow.css";
import prismjs from "prismjs";
import { useEffect, useState } from "react";
import Editor from "react-simple-code-editor";
import Markdown from "react-markdown";
import axios from "axios";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

function App() {
  const [code, setCode] = useState(`function sum() {
  return 1 + 1;
}`);
  const [review, setReview] = useState(``);
  const [buttonText, setButtonText] = useState("Review");

  useEffect(() => {
    prismjs.highlightAll();
  }, []);

  const reviewCode = async () => {
    setButtonText("Reviewing...");
    const response = await axios.post("http://localhost:3000/ai/get-review", {
      code,
    });

    setReview(response.data);
    setButtonText("Review");
  };

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(value) => setCode(value)}
              highlight={(code) =>
                prismjs.highlight(
                  code,
                  prismjs.languages.javascript,
                  "javascript"
                )
              }
              padding={10}
              style={{
                fontFamily: '"Cascadia Code", "Fira Code", monospace',
                fontSize: 16,
                border: "1px solid #ccc",
                borderRadius: "0.7rem",
                height: "100%",
                width: "100%",
                caretColor: "white",
              }}
            />
          </div>
          <div className="review" onClick={reviewCode}>
            {buttonText}
          </div>
        </div>
        <div className="right">
          <Markdown rehypePlugins={rehypeHighlight}>{review}</Markdown>
        </div>
      </main>
    </>
  );
}

export default App;
