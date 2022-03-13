import Typography from '@mui/material/Typography';
import './PostPage.css';
import TablePost from '../Components/Tables/TablePost';

const PostPage = () => {
  return (
    <>
      <div className="headline">
        <Typography variant="h3" component="h3">
          Posts
        </Typography>
      </div>
      <div>
        <TablePost/>
      </div>
    </>

  )
}

export default PostPage;