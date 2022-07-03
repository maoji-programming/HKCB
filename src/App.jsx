import "./styles.css";
import * as React from "react";

import { Grid } from "@material-ui/core";
import Query from "./components/Query";
import Result from "./components/Result";
import { TextField } from "@material-ui/core";
import { InputAdornment } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { FormControl } from "@material-ui/core";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        phone: ""
      },
      output: {
        firstname: "",
        lastname: "",
        gender: "",
        address: "",
        occupation: "",
        school: "",
        email: ""
      }
    };
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.retrieveInput = this.retrieveInput.bind(this);
  }
  handlePhoneNumberChange(e) {
    const onlyNums = e.target.value.replace(/[^0-9]/g, "");
    if (onlyNums.length < 8) {
      this.setState({
        input: { phone: onlyNums },
        output: { ...this.state.output }
      });
    } else if (onlyNums.length == 8) {
      const num = onlyNums.replace(/(\d{8})/, "$1");
      this.setState({
        input: { phone: num },
        output: { ...this.state.output }
      });
    }
  }

  retrieveInput() {}

  render() {
    return <Query />;
  }

  // render() {
  //   return (
  //     <Grid container spacing={1} className="App">
  //       <Grid item sm={12} className="Query">
  //         <h1>Hong Kong Contact Book</h1>
  //         <FormControl variant="standard" className="Form">
  //           <TextField
  //             onChange={this.handlePhoneNumberChange}
  //             value={this.state.input.phone}
  //             label="Phone Number(+852)"
  //             InputProps={{
  //               startAdornment: (
  //                 <InputAdornment position="start">852</InputAdornment>
  //               )
  //             }}
  //           />

  //           <Button
  //             onClick={() => alert(this.state.input.phone)}
  //             className="Search"
  //             variant="outlined"
  //           >
  //             Search
  //           </Button>
  //         </FormControl>
  //       </Grid>
  //       <Grid item sm={12} className="Result">
  //         <h1>Result</h1>
  //       </Grid>
  //     </Grid>
  //   );
  // }
}
