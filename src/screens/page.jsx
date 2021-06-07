/* eslint-disable import/no-unresolved */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import qs from 'querystring';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
 

class page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notepadId:'',
            note:'',
            title:'',
          
        };
      
        this.editnote = this.editnote.bind(this);
        
    }
    
    
 editnote() {
    const { history } = this.props;
    const { notepadId, title, note } = this.state;
     axios.put(`http://localhost:4000/notepad/${notepadId}`, {notepadId, title, note });
    history.push('/Display');
}


    render() {

        return (
            <div>
                 <AppBar position="static">
                    <Toolbar>   
                    
                   
                 
                    <Typography variant="h6" >
                    Edit your note
                     </Typography>
                    
                  </Toolbar>
              </AppBar>
           
                
                 <input
                    type="text"
                    placeholder=" Title"
                    onChange={(event) => this.setState((prev) => ({
                        
                        title: event.target.value,
                    }))}
                />
                      <textarea
                    placeholder="note"
                    rows="30"
                    cols="100"
                    onChange={(event) => this.setState((prev) => ({
                        note: event.target.value,
                        
                    }))}
                />
                  <Button variant="contained"onClick={this.editnote} color="secondary">
                  Save Edit note</Button>
                
             
            </div>
        );
    }
}


export default withRouter(page);
