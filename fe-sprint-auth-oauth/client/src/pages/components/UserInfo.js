import React from 'react';

export default function User({ githubUser, serverResource, logoutHandler }) {
  return (
    <>
      <img src={githubUser.avatar_url} alt='github_avatar' />
      <h3>내 정보</h3>
      <div className='userinfo-field'>
        <div>
          {`📖 Studying at `} <b>{serverResource.bootcamp}</b>
        </div>
        <div>{`📍 Living in ${githubUser.location}`}</div>
        <div>{`📬 Contact: ${githubUser.email}`}</div>
        <div>{`👩🏻‍💻 ${serverResource.position}`}</div>
        <article>
          <h3>Bio</h3>
          <span>{githubUser.bio ? githubUser.bio : serverResource.bio}</span>
        </article>
      </div>
      <button id='logout-btn' onClick={logoutHandler}>
        LOGOUT
      </button>
    </>
  );
}
