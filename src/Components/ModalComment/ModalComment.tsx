import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import './ModalComment.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { fetchComments } from '../../Services/comment.service';
import { Comment } from '../../Types/comment.type';

const style = {
  position: 'absolute' as 'absolute',
  top: '44%',
  fontColor: 'blue',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 960,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type Props={id:number};

export default function ModalComment({ id }: Props) {
  const [open, setOpen] = React.useState(false);
  const [comments, setComments] = React.useState<Comment[]>([]);
  const handleOpen = async () =>{
    setOpen(true);
    const commentsResponse = await fetchComments(id);
    setComments(commentsResponse);
  } 
  const handleClose = () => setOpen(false);
  return (
    <div className="comment-modal">
      <div className="button-comment">
        <Button onClick={handleOpen}>Comments</Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon sx={{ marginLeft: 109, marginButton: 5, cursor: 'pointer' }}
            onClick={() => handleClose()}
          />
          <Typography id="modal-modal-title" variant="h5" component="h5">
            Comments
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 3 }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 850,border: '1px solid #000' }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Favorite Comments</TableCell>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Email&nbsp;</TableCell>
                    <TableCell align="center">Body&nbsp;</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {comments.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="right">{row.name}</TableCell>
                      <TableCell align="right">{row.email}</TableCell>
                      <TableCell align="right">{row.body}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}