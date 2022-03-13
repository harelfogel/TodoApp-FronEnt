import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import './ModalPhoto.css';
import { fetchPhotos } from '../../Services/photo.service';
import { IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader } from '@mui/material';
import { Photo } from '../../Types/photo.type';

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

type ModalPhotoProps={id:number};

const ModalPhoto = ({id}:ModalPhotoProps) => {
    const [open, setOpen] = React.useState(false);
    const [photos, setPhotos] = React.useState<Photo[]>([]);
    const handleOpen = async () => {
        setOpen(true);
        const photosResponse = await fetchPhotos(id);
        setPhotos(photosResponse);
    }
    const handleClose = () => setOpen(false);
    return (
        <div className="photo-modal">
            <div className="button-comment">
                <Button onClick={handleOpen}>Photos</Button>
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
                        Photos
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 3 }}>
                        <ImageList sx={{ width: 800, height: 390 ,marginLeft:5,marginButtom:37}}>
                            {photos.map((photo) => (
                                <ImageListItem key={photo.id}>
                                    <img
                                        src={`${photo.thumbnailUrl}?w=248&fit=crop&auto=format`}
                                        srcSet={`${photo.thumbnailUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        alt={photo.title}
                                        loading="lazy"
                                    />
                                    <ImageListItemBar
                                        title={photo.title}
                                        actionIcon={
                                            <IconButton
                                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                                aria-label={`info about ${photo.title}`}
                                            >
                                            </IconButton>
                                        }
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default ModalPhoto;