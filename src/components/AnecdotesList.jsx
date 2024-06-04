import { getAll } from '../services/ancedotes';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import VoteButton from './VoteButton';

const AnecdotesList = () => {
  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAll,
  });

  const anecdotes = result.data;

  if (result.isLoading) return <div>Loading...</div>;

  if (result.isError)
    return <div>anecdote service not avaiable due to problems in server</div>;

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes} <VoteButton anecdote={anecdote} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdotesList;
