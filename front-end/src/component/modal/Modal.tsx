import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import UserDataForm from '../../page/userDataForm/UserDataForm';
import UserTodoFrom from '../../page/userTodoForm/UserTodoForm';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
// Max width for larger screens
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '8px', // Rounded corners
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen} sx={{ margin: '20px' }}>
        Open User Data Form
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" id="modal-modal-title" gutterBottom>
            User Information Form
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            Please fill in the details below and submit the form.
          </Typography>
          {UserTodoFrom?
          <UserTodoFrom closeModal={handleClose}  />
          : 
          <UserDataForm closeModal={handleClose}  />
}
        </Box>
      </Modal>
    </div>
  );
}
