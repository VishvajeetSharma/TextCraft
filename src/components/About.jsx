import React from "react";

const About = (props) => {
  const textColor = props.mode === "dark" ? "white" : "black";
  const bgColor = props.mode === "dark" ? "rgb(33 37 50)" : "white";

  return (
    <div
      className="container py-3"
      style={{ color: textColor, backgroundColor: bgColor }}
    >
      <h1 className="text-center mb-4">About TextCraft</h1>

      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <p className="custom-lead text-center">
            <b>TextCraft</b> is a versatile tool that empowers users to easily manipulate and manage textual content. It offers a smooth experience for transforming text with a variety of formatting and case conversion options.
          </p>

          <h2 className="mt-4">Key Features:</h2>
          <ul>
            <li>
              <strong>Text Case Transformation:</strong>
              <ul>
                <li>UPPERCASE</li>
                <li>lowercase</li>
                <li>Sentence case</li>
                <li>camelCase</li>
                <li>PascalCase</li>
                <li>snake_case</li>
              </ul>
            </li>

            <li>
              <strong>Space Management:</strong> Remove extra spaces and clean
              your text instantly.
            </li>

            <li>
              <strong>Copy and Clear Functions:</strong> Easily copy formatted
              text or clear everything with one click.
            </li>
          </ul>

          <h2 className="mt-4">Why Choose TextCraft?</h2>
          <ul>
            <li>User-friendly and simple interface</li>
            <li>Fast and efficient text transformations</li>
            <li>Useful for students, developers, and writers</li>
          </ul>

          <p className="text-center mt-4">
            Enhance your text editing experience with TextCraft – a simple and powerful tool for transforming, formatting, and managing your text effortlessly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;