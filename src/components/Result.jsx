import * as React from "react";
import {
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  FormLabel,
  FormControl,
  Button
} from "@material-ui/core";
//import { FormControl } from "@material-ui/core";
export default class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: {
        phone: "",
        firstname: "",
        lastname: "",

        country: "",
        address: "",

        gender: "",
        status: "",
        company: "",
        email: "",
        birthday: ""
      }
    };
  }

  setGender(event) {
    this.setState({
      output: { ...this.state.output, gender: event.target.value }
    });
    console.log(JSON.stringify(this.state));
  }

  render() {
    this.state.output = JSON.parse(this.props.model);

    return (
      <Grid item sm={12} className="Result">
        <h1>Result</h1>
        <FormControl variant="standard" className="Form">
          <Grid container spacing={5}>
            <Grid item sm={6}>
              <FormLabel id="firstname-label">First Name</FormLabel>
              <TextField
                fullWidth
                id="firstname"
                value={this.state.output.firstname}
                InputProps={{
                  readOnly: true
                }}
              />
            </Grid>
            <Grid item sm={6}>
              <FormLabel id="lastname-label">Last Name</FormLabel>
              <TextField
                fullWidth
                id="lastname"
                value={this.state.output.lastname}
                InputProps={{
                  readOnly: true
                }}
              />
            </Grid>
            <Grid item sm={4}>
              <FormLabel id="country-label">Status</FormLabel>
              <TextField
                fullWidth
                id="country"
                value={this.state.output.country}
                InputProps={{
                  readOnly: true
                }}
              />
            </Grid>

            <Grid item sm={8}>
              <FormLabel id="address-label">Address</FormLabel>
              <TextField
                fullWidth
                id="address"
                value={this.state.output.address}
                InputProps={{
                  readOnly: true
                }}
              />
            </Grid>
            <Grid item sm={4}>
              <FormLabel id="gender-label">Gender</FormLabel>
              <RadioGroup
                id="gender"
                value={this.state.output.gender}
                OnChange={this.setGender}
                aria-labelledby="gender-label"
                defaultValue=""
                name="gender-buttons-group"
                row
              >
                <FormControlLabel
                  id="female"
                  value="female"
                  control={<Radio />}
                  label="Female"
                  disable
                />
                <FormControlLabel
                  id="male"
                  value="male"
                  control={<Radio />}
                  label="Male"
                  disable
                />
              </RadioGroup>
            </Grid>
            <Grid item sm={4}>
              <FormLabel id="birthday-label">Birthday</FormLabel>
              <TextField
                id="birthday"
                fullWidth
                value={this.state.output.birthday}
                InputProps={{
                  readOnly: true
                }}
              />
            </Grid>
            <Grid item sm={4}>
              <FormLabel id="status-label">Status</FormLabel>
              <TextField
                id="status"
                fullWidth
                value={this.state.output.status}
                InputProps={{
                  readOnly: true
                }}
              />
            </Grid>
            <Grid item sm={6}>
              <FormLabel id="email-label">Email</FormLabel>
              <TextField
                id="email"
                fullWidth
                value={this.state.output.email}
                InputProps={{
                  readOnly: true
                }}
              />
            </Grid>
            <Grid item sm={6}>
              <FormLabel id="company-label">Company</FormLabel>
              <TextField
                id="company"
                fullWidth
                value={this.state.output.company}
                InputProps={{
                  readOnly: true
                }}
              />
            </Grid>
          </Grid>
        </FormControl>
      </Grid>
    );
  }
}
