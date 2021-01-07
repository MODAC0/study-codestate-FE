import { useSelector } from 'react-redux';

function NofiticationCenter() {
  const state = useSelector(state => state.notificationReducer);

  return <div className="notification-container top-right">
    {
      state.notifications.map((toast, i) =>
        <div
          key={i}
          className="notification toast top-right"
        >
          <div>
            <p className="notification-title">{toast}</p>
          </div>
        </div>
      )
    }
  </div>
}

export default NofiticationCenter