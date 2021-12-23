function Previewer() {
  const [markdown, setMarkdown] = React.useState(
    "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://reactjs.org/logo-og.png)\n"
  );

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1>Markdown Previewer</h1>
          <textarea
            id="editor"
            className="form-control"
            rows="10"
            value={markdown}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-md-6">
          <h1>Preview</h1>
          <div
            id="preview"
            className="preview"
            dangerouslySetInnerHTML={{
              __html: marked.parse(markdown, { breaks: true }),
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Previewer />, document.getElementById("root"));
