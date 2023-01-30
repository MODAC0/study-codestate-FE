const Output = ({ repo }) => {
  let arr = [];
  if (repo.discussions) {
    arr = repo.discussions.edges;
  }
  console.log(repo.discussions);
  return (
    <ul>
      {arr.map((el) => {
        const data = el.node;
        return <li key={data.id}>{data.title}</li>;
      })}
    </ul>
  );
};

export default Output;
