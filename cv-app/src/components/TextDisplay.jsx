const TextDisplay = (props) => {
    return (
        <div className="right tile">
          <div className="textDisplay">{props.children}</div>
        </div>
    );
};

export default TextDisplay;