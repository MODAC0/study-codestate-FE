import React, { useState, useEffect } from 'react';
export default function Toast(props) {
  const { toastList } = props;
  const [list, setList] = useState(toastList);
  const dismissTime = 3000
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const deleteToast = id => {
    const listItemIndex = list.findIndex(e => e.id === id);
    const toastListItem = toastList.findIndex(e => e.id === id);
    list.splice(listItemIndex, 1);
    toastList.splice(toastListItem, 1);
    setList([...list]);
  }

  useEffect(() => {
    setList([...toastList]);
  }, [toastList]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastList.length && list.length) {
        deleteToast(toastList[0].id);
      }
    }, dismissTime);

    return () => {
      clearInterval(interval);
    }
  }, [toastList, list, deleteToast]);



  return (
    <div className={`notification-container top-right`} >
      {
        list.map((toast, i) =>
          <div
            key={i}
            className={`notification toast top-right`}
          >
            <div>
              <p className="notification-title">{toast.title}</p>
            </div>
          </div>
        )
      }
    </div>
  );
}

