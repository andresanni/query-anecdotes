import { useMutation, useQueryClient } from '@tanstack/react-query';
import { create } from '../services/ancedotes';
import { useNotification } from '../hooks/useNotification';

const AnecdoteForm = () => {
  const queryClient = useQueryClient();
  const setNotification = useNotification();

  const newAnecdoteMutation = useMutation({
    mutationFn: create,
    onSuccess: (createdAnecdote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes']);
      queryClient.setQueryData(['anecdotes'], [...anecdotes, createdAnecdote]);
    },
    onError: (error) => {
      const errorMessage = error.response.data.error;
      setNotification(errorMessage, 5000);
    },
  });

  const onCreate = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    newAnecdoteMutation.mutate(content);
    setNotification(`anecdote "${content}" created`, 5000);
  };

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
