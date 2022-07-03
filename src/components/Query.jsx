import "../styles.css";
import * as React from "react";

import { Grid } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { InputAdornment } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import Result from "./Result";
import { findContactByPhone } from "../utils/DataUtil";
const INITIAL = {
  input: {
    phone: "",
    exportphone: ""
  },
  output: {
    firstname: "",
    lastname: "",

    country: "",
    address: "",

    gender: "",
    status: "",
    occupation: "",
    school: "",
    email: "",
    birthday: ""
  }
};

export default class Query extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL;
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
  }
  retrieveFromDB(p) {
    return this.data.find((element) => element.phone === p);
  }
  handlePhoneNumberChange(e) {
    const onlyNums = e.target.value.replace(/[^0-9]/g, "");
    if (onlyNums.length < 8) {
      this.setState({
        input: { phone: onlyNums, exportphone: "" },
        output: { ...INITIAL.output }
      });
    } else if (onlyNums.length == 8) {
      const num = onlyNums.replace(/(\d{8})/, "$1");
      this.setState({
        input: { phone: num, exportphone: num },
        output: findContactByPhone(num)
      });
    }
  }

  render() {
    return (
      <Grid container spacing={1} className="App">
        <Grid item sm={12} className="Query">
          <h1>Hong Kong Contact Book</h1>
          <FormControl variant="standard" className="Form">
            <TextField
              onChange={this.handlePhoneNumberChange}
              value={this.state.input.phone}
              label="Phone Number(+852)"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">852</InputAdornment>
                )
              }}
            />
          </FormControl>
        </Grid>
        <Result model={JSON.stringify(this.state.output)} />
      </Grid>
    );
  }
}
