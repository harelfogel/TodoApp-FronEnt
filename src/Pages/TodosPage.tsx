import Typography from '@mui/material/Typography';
import './PostPage.css';
import TableTodos from '../Components/Tables/TableTodos';

const TodosPage = () => {
  return (
    <>
      <div className="headline">
        <Typography variant="h3" component="h3">
          Todos
        </Typography>
      </div>
      <div>
        <TableTodos/>
      </div>
    </>

  )
}

export default TodosPage;