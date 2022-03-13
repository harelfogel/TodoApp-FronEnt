import * as React from 'react';
import { styled } from '@mui/system';
import TablePaginationUnstyled from '@mui/base/TablePaginationUnstyled';
import { fetchAlbums } from '../../Services/album.service';
import { fetchUserNameById, fetchUsers } from '../../Services/user.service';
import ModalPhoto from '../ModalPhoto/ModalPhoto';
import { Album } from '../../Types/album.type';
import { User } from '../../Types/user.type';

const blue = {
  200: '#A5D8FF',
  400: '#3399FF',
};

const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};

const Root = styled('div')(
  ({ theme }) => `
  table {
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    text-align: left;
    padding: 6px;
  }

  th {
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : grey[100]};
  }
  `,
);

const CustomTablePagination = styled(TablePaginationUnstyled)(
  ({ theme }) => `
  & .MuiTablePaginationUnstyled-spacer {
    display: none;
  }
  & .MuiTablePaginationUnstyled-toolbar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }
  & .MuiTablePaginationUnstyled-selectLabel {
    margin: 0;
  }
  & .MuiTablePaginationUnstyled-select {
    padding: 2px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    border-radius: 50px;
    background-color: transparent;
    &:hover {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    }
    &:focus {
      outline: 1px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
    }
  }
  & .MuiTablePaginationUnstyled-displayedRows {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }
  & .MuiTablePaginationUnstyled-actions {
    padding: 2px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    border-radius: 50px;
    text-align: center;
  }
  & .MuiTablePaginationUnstyled-actions > button {
    margin: 0 8px;
    border: transparent;
    border-radius: 2px;
    background-color: transparent;
    &:hover {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    }
    &:focus {
      outline: 1px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
    }
  }
  `,
);

type id = number;

export default function TableAlbum() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [albums, setAlbums] = React.useState<Album[]>([]);
  const [users, setUsers] = React.useState<User[]>([]);
  React.useEffect(() => {
    const getAlbums = async () => {
      const albumResponse = await fetchAlbums();
      setAlbums(albumResponse);
    }
    const getUsers = async () => {
      const userResponse = await fetchUsers();
      setUsers(userResponse);
    }
    getUsers();
    getAlbums();
  }, [])
  const getUserById = React.useCallback(
    (userId: number) => {
      return (users.length > 0) ? users[userId - 1].username : null;
    },
    [users],
  )

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Root sx={{ width: 730, marginLeft: 40, marginTop: 5 }}>
      <table aria-label="custom pagination table">
        <thead>
          <tr>
            <th>Albums Of</th>
            <th>Title</th>
            <th>View Photos</th>
          </tr>
        </thead>
        <tbody>
          {(rowsPerPage > 0
            ? albums.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : albums
          ).map((album) => (
            <tr key={album.id}>
              <td style={{ width: 490 }} align="right">
                {getUserById(album.userId)}
              </td>
              <td style={{ width: 490 }} align="right">
                {album.title}
              </td>
              <td style={{ width: 127, marginLeft: 79 }} align="right">
                <ModalPhoto id={album.id} />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <CustomTablePagination
              rowsPerPageOptions={[10, { label: 'All', value: -1 }]}
              colSpan={3}
              count={albums.length}
              rowsPerPage={rowsPerPage}
              page={page}
              componentsProps={{
                select: {
                  'aria-label': 'rows per page',
                },
                actions: {
                  showFirstButton: true,
                  showLastButton: true,
                } as any,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </tr>
        </tfoot>
      </table>
    </Root>
  );
}