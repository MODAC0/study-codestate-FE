function Debug(props) {
  return (
    <div className="debug">
      <div>condition: </div>
      {Object.keys(props).map((key) => (
        <div key={key} data-testid={key}>
          {JSON.stringify(props[key])}
        </div>
      ))}
    </div>
  );
}

export default Debug;
