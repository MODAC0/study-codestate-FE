function Debug(props) {
  return <div className="debug">
    {Object.keys(props).map(key =>
      <div key={key} data-testid={key}>{JSON.stringify(props[key])}</div>
    )}
  </div>
}

export default Debug