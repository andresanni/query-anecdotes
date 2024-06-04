import { update } from '../services/ancedotes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNotification } from '../hooks/useNotification';

const VoteButton = ({ anecdote }) => {
  const queryClient = useQueryClient();

  const updateAnecdoteMutation = useMutation({
    mutationFn: update,
    onSuccess: (updatedAnecdote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes']);
      queryClient.setQueryData(
        ['anecdotes'],
        anecdotes.map((anecdote) =>
          anecdote.id !== updatedAnecdote.id ? anecdote : updatedAnecdote
        )
      );
    },
  });

  const setNotification = useNotification();

  const handleVote = (anecdote) => {
    const votedAnecdote = { ...anecdote, votes: anecdote.votes + 1 };
    updateAnecdoteMutation.mutate(votedAnecdote);
    setNotification(`anecdote "${anecdote.content}" voted`, 5000);
  };

  return <button onClick={() => handleVote(anecdote)}>vote</button>;
};

export default VoteButton;
