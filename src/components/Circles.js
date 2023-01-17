function Circles() {
  return (
    <>
      {new Array(40).fill(0).map((a, x) =>
        new Array(15).fill(0).map((b, y) => (
          <Circle
            style={{
              top: `${(14 - y) * 7}vmin`,
              left: `${(39 - x) * 7}vmin`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))
      )}
    </>
  );
}

function Circle({ style = {} }) {
  const innerStyle = {
    width: "15vmin",
    height: "15vmin",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    ...style,
    zIndex: -1,
  };

  return (
    <div style={innerStyle}>
      <InnerCircle toGo={7} />
    </div>
  );
}

function InnerCircle({ toGo }) {
  if (toGo === 0) {
    return null;
  }

  const style = {
    boxSizing: "border-box",
    backgroundColor: "firebrick",
    width: `${(toGo / 7) * 15}vmin`,
    height: `${(toGo / 7) * 15}vmin`,
    borderRadius: "100%",
    border: "3px solid rgba(0, 0, 0, 0.25)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={style}>
      <InnerCircle toGo={toGo - 1} />
    </div>
  );
}

export default Circles;
