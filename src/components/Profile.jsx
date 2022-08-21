import "../styles.scss";
import male from "../resources/man.png";
import female from "../resources/girl.png";
import nosex from "../resources/user.png";
//import nosex from "";
import config from "../config.json"
import Axios from "axios";
import * as React from "react";
import { Skeleton } from "@material-ui/lab";
import { Grid, FormLabel, TextField } from "@material-ui/core";
import PublicIcon from "@material-ui/icons/Public";
import HomeIcon from "@material-ui/icons/Home";
import BusinessIcon from "@material-ui/icons/Business";
import { InputAdornment } from "@material-ui/core";
import { findContactByPhone } from "./Interaction";

const INITIAL = {
  input: {
    phone: "",
    exportphone: ""
  },
  output: {
    gender: "",

    firstname: "",
    lastname: "",
    birthday: "",
    love_status: "",

    country: "",
    address: "",
    company: "",
    create_date:"",
    email: "",
    fuid: ""
  }
};

export default class Profile extends React.Component {
  loading = false;
  state = INITIAL;

  constructor(props) {
    super(props);
    
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleSexChange = this.handleSexChange.bind(this);
    
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
    } else if (onlyNums.length === 8) {
      this.loading = true;
      this.setState({
        input: { phone: onlyNums, exportphone: "" },
        output: { ...INITIAL.output }
      });
      const num = onlyNums.replace(/(\d{8})/, "$1");
      findContactByPhone(num).then(
        (res) => {
          this.setState({
            input: { phone: onlyNums, exportphone: num},
            output: JSON.parse(res)
          });
          this.loading = false;
        }
      )
    }
  }

  handleSexChange() {
    if (this.state.output.gender === "male") {
      return male;
    } else if (this.state.output.gender === "female") {
      return female;
    } else {
      return nosex;
    }
  }

  query() {
    return (
      <Grid item className="Bottom">
        <Grid container spacing={2}>
          <Grid item sm={4} xs={12}>
            <FormLabel id="email-label">Phone</FormLabel>
            <TextField
              fullWidth
              onChange={this.handlePhoneNumberChange}
              value={this.state.input.phone}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">852</InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item sm={8} xs={12}>
            <FormLabel id="company-label">Email</FormLabel>
            <TextField
              id="company"
              fullWidth
              value={this.state.output.email}
              InputProps={{
                readOnly: true
              }}
            />
          </Grid>
          <Grid item sm={12} xs={12}>
            <FormLabel id="company-label">Facebook Link</FormLabel>
            <TextField
              id="company"
              fullWidth
              value={
                "https://facebook.com/profile.php?id=" + this.state.output.fuid
              }
              InputProps={{
                readOnly: true
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }
  render() {
    return this.loading ? (
      <Grid container spacing={1} className="Profile">
        <Grid item className="Top"></Grid>
        <Grid container spacing={2} className="Basic">
          <Grid item>
            <Skeleton variant="circle" className="Avatar" />
          </Grid>
          <Grid item container spacing={1} className="Intro">
            <Grid item sm={10} xs={11}>
              <Skeleton variant="rect" />
            </Grid>
            <Grid item className="I2" sm={5} xs={11}>
              <Skeleton variant="rect" />
              <br />
              <Skeleton variant="rect" />
            </Grid>
            <Grid item className="I2" sm={5} xs={11}>
              <Skeleton variant="rect" />
              <br />
              <Skeleton variant="rect" />
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2} item className="Detail">
          <Grid item className="DC" sm={4} xs={12}>
            <Skeleton variant="rect" />
            <br />
            <Skeleton variant="rect" height="flex" />
          </Grid>
          <Grid item className="DC" sm={4} xs={12}>
            <Skeleton variant="rect" />
            <br />
            <Skeleton variant="rect" height="flex" />
          </Grid>
          <Grid item className="DC" sm={4} xs={12}>
            <Skeleton variant="rect" />
            <br />
            <Skeleton variant="rect" height="flex" />
          </Grid>
        </Grid>
        {this.query()}
      </Grid>
    ) : (
      <Grid container spacing={1} className="Profile">
        <Grid item className="Top"></Grid>
        <Grid container spacing={2} item className="Basic">
          <Grid item>
            <img className="Avatar" src={this.handleSexChange()} alt="avatar" />
          </Grid>
          <Grid item container className="Intro">
            <Grid item className="I1" sm={12} xs={12}>
              {this.state.output.firstname} {this.state.output.lastname}
            </Grid>
            <Grid item className="I2" sm={6} xs={12}>
              <div className="Tag">Birthday</div>
              <span>{this.state.output.birthday}</span>
            </Grid>
            <Grid item className="I2" sm={6} xs={12}>
              <div className="Tag">Status</div>
              <span>{this.state.output.love_status}</span>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2} item className="Detail">
          <Grid item className="DC" sm={4} xs={12}>
            <div className="Tag">
              <PublicIcon fontSize="inherit" />
              country
            </div>
            <span>{this.state.output.country}</span>
          </Grid>
          <Grid item className="DC" sm={4} xs={12}>
            <div className="Tag">
              <HomeIcon fontSize="inherit" />
              address
            </div>
            <span>{this.state.output.address}</span>
          </Grid>
          <Grid item className="DC" sm={4} xs={12}>
            <div className="Tag">
              <BusinessIcon fontSize="inherit" />
              company
            </div>
            <span>{this.state.output.company}</span>
          </Grid>
        </Grid>
        {this.query()}
      </Grid>
    );
  }
}
