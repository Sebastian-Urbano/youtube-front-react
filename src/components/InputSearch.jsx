import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";

const InputSearch = (props) => {
  const handleQuery = (e) => {
    props.setStatus({ ...props.status, query: [e.target.value] });
  };

  const searchQuery = (e) => {
    if (props.status.query === "") {
      props.setStatus({ ...props.status, error: true });
      setTimeout(() => {
        props.setStatus({ ...props.status, error: false });
      }, 1000);
    } else {
      props.setStatus({
        ...props.status,
        search: true,
      });
      setTimeout(() => {
        props.setStatus({ ...props.status, search: false });
      }, 1000);
    }
  };
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <TextField
            label="Youtube Search"
            style={{ margin: 20 }}
            placeholder="Here you can search for everything that you want in Youtube"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            name="query"
            value={props.status.query}
            onChange={handleQuery}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            color="primary"
            style={{ margin: 25 }}
            onClick={searchQuery}
          >
            Search in Youtube
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default InputSearch;
