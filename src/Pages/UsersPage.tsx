import Typography from '@mui/material/Typography';
import './PostPage.css';
import TableUser from '../Components/Tables/TableUser';

const UsersPage = () => {
  return (
    <>
      <div className="headline">
        <Typography variant="h3" component="h3">
          Users
        </Typography>
      </div>
      <div>
        <TableUser/>
      </div>
    </>

  )
}

export default UsersPage;