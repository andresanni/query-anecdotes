import { useNotificationDispatch } from '../context/NotificationContext';

export const useNotification = () => {
  const dispatch = useNotificationDispatch();

  const setNote = (message, timeout) => {
    dispatch({ type: 'SET_NOTIFICATION', payload: message });

    setTimeout(() => {
      dispatch({ type: 'CLEAR_NOTIFICATION' });
    }, timeout);
  };

  return setNote;
};
