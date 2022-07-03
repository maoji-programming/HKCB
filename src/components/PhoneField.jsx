import React from "react";
import { InputAdornment } from "@material-ui/core";
import { TextField } from "@material-ui/core";

//Child
export default class PhoneField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  handleChange(e) {
    const onlyNums = e.target.value.replace(/[^0-9]/g, "");
    if (onlyNums.length < 8) {
      this.setState({ value: onlyNums });
      //this.props.model(onlyNums);
    } else if (onlyNums.length === 8) {
      const num = onlyNums.replace(/(\d{8})/, "$1");
      this.setState({ value: num });
      //this.props.model(num);
    }
  }
  render() {
    return (
      <TextField
        onChange={this.handleChange}
        value={this.state.value}
        label="Phone Number(+852)"
        InputProps={{
          startAdornment: <InputAdornment position="start">852</InputAdornment>
        }}
      />
    );
  }
}
