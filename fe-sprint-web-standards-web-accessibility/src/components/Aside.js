import data from "../static/staticData";

const Aside = ({ idx }) => {
  const aside = data.aside[idx];
  return (
    <aside>
      <h2>문제 가이드</h2>
      {aside ? (
        <>
          <h3>{aside.title}</h3>
          {aside.content
            ? aside.content.map((el, idx) => <li key={idx}>{el}</li>)
            : null}
        </>
      ) : null}
    </aside>
  );
};

export default Aside;
