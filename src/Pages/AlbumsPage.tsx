import Typography from '@mui/material/Typography';
import './PostPage.css';
import TableAlbum from '../Components/Tables/TableAlbum';

const AlbumsPage = () => {
  return (
    <>
      <div className="headline">
        <Typography variant="h3" component="h3">
          Albums
        </Typography>
      </div>
      <div>
        <TableAlbum/>
      </div>
    </>

  )
}

export default AlbumsPage;