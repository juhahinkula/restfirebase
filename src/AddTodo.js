import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

function AddTodo() {
  return(
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add todo
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New todo</DialogTitle>
        <DialogContent>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>      
    </div>
  );
}

export default AddTodo;