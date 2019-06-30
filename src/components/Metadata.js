import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { HttpClient } from '../api/http-service';
class Metadata extends Component {
    constructor() {
        super();
        this.state = {
            myName: 'Ray'
        };
    }
    componentDidMount() {
        HttpClient.get('api/getlist')
        .then(data => {
            console.log(data);
        })
        .catch(errorMessage =>{
            console.log(errorMessage);
        });
    }

    render(){
        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Metadata
      </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField required id="service" name="Choose service"label="Choose service" fullWidth 
                        autoComplete="Choose service"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField required id="userlist" name="User list" label="User list" fullWidth 
                        autoComplete=""
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="compenentname" name="Component Name" label="Component Name" fullWidth 
                        autoComplete="Component Name"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="date" label="Maintenance Start" type="date" defaultValue="2017-05-24" InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="date" label="Maintenance End" type="date" defaultValue="2017-05-24" InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default Metadata;
