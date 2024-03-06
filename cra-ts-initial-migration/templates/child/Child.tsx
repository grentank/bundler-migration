import React, { useCallback, useEffect } from 'react';
import style from './styles.module.css';
import api from './provider';
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  FormControl,
  FormLabel,
  Menu,
  MenuItem,
  Modal,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

type Props = {
  prop: {
    data: string;
  };
};

export default function ChildDETECTNAME({ prop }: Props): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  const navigate = useNavigate();

  const [value, setValue] = React.useState<string>(prop.data);
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    [],
  );
  useEffect(() => {
    api
      .getData()
      .then((data) => setValue(data))
      .catch(console.log);
  }, []);
  return (
    <Container>
      <Paper elevation={3}>
        <div className={style.mystyle}>
          <form>
            <FormControl>
              <FormLabel>
                <Typography variant="h6">{Math.random().toString(16).substring(2, 14)}</Typography>
              </FormLabel>
              <TextField
                onChange={handleChange}
                value={value}
                placeholder="Enter your name"
                name="name"
                className={style.mycolor}
                type="text"
                variant="outlined"
              />
              <ButtonGroup variant="contained">
                <Button type="submit" onClick={handleOpen}>
                  Click!
                </Button>
              </ButtonGroup>
              <Menu open={value === prop.data}>
                <MenuItem>Some Item</MenuItem>
              </Menu>
            </FormControl>
          </form>
          <Button
            onClick={() => {
              console.log(Date.now());
              navigate(value);
            }}
          >
            Go to {value}
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </div>
      </Paper>
    </Container>
  );
}
