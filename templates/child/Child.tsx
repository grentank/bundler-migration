import React, { useCallback, useEffect } from 'react';
import style from './styles.module.css';
import api from './provider';
import {
  Button,
  ButtonGroup,
  Container,
  FormControl,
  FormLabel,
  Menu,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from '@mui/material';

type Props = {
  prop: {
    data: string;
  };
};

export default function ChildDETECTNAME({ prop }: Props): JSX.Element {
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
                className={style.input}
                type="text"
                variant="outlined"
              />
              <ButtonGroup variant="contained">
                <Button type="submit">Click!</Button>
              </ButtonGroup>
              <Menu open={value === prop.data}>
                <MenuItem>Some Item</MenuItem>
              </Menu>
            </FormControl>
          </form>
        </div>
      </Paper>
    </Container>
  );
}
