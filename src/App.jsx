import AnecdoteForm from './components/AnecdoteForm';
import Notification from './components/Notification';
import AnecdotesList from './components/AnecdotesList';
import { getAll } from './services/ancedotes';

const App = () => {
  return (
    <div>
      <h3>Anecdote app</h3>
      <Notification />
      <AnecdoteForm />
      <AnecdotesList />
    </div>
  );
};

export default App;
