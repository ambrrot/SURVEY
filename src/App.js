import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import {Button,ButtonGroup,Form,
        FormGroup,ControlLabel,
        FormControl,HelpBlock,
        Checkbox,Radio,
        Grid,Row,Col} from 'react-bootstrap';

class App extends Component {
  
  
  state = {
    name:"",
    color:"",
    movies:[],
    gender:"",
    mname:"",
    Ogame:[],
    comp:""
  };
  
  onChange = (fieldName)=>{
    return (event)=>{
    var state = this.state;
    state[fieldName]=event.target.value;
    this.setState(state);  
    }
  };
  
  checkboxChange = (fieldName)=>{
    return (event)=>{
    var targetArray = this.state[fieldName];
    if(targetArray.indexOf(event.target.value) >=0)
    targetArray.splice(
      targetArray.indexOf(event.target.value),1
      
    );
    else
    targetArray.push(event.target.value);
    
    var state = this.state;
    state[fieldName]=targetArray;
    this.setState(state);
    }
  };
   
  targetArray
  render() {
    return (
      <div className="container">
        <div className="page-header">
        <h2>Student Survey</h2>
          
   
        </div>
        <div className="jumbotron">
        
        <Grid>
        <Row>
        
        <Col md={6}>
        <Form>
          
        <FormGroup>
        <ControlLabel>Name please</ControlLabel>
        <FormControl type="text" 
        placeholder="Name here..."
        value={this.state.name}
        onChange={this.onChange('name')}
        />
        <HelpBlock>Use to identify you </HelpBlock>
        </FormGroup>
        
        <FormGroup>
        <ControlLabel>Favorite color</ControlLabel>
        <FormControl componentClass="select" 
        placeholder="Color here..."
        value={this.state.color}
        onChange={this.onChange('color')}
        >
        <option value="Red"> Red </option>
        <option value="Blue"> Blue </option>
        <option value="Green"> Green </option>
        </FormControl>
        <HelpBlock>Use to identify you </HelpBlock>
        </FormGroup>
        
        <FormGroup>
        <ControlLabel>Favorite Movie</ControlLabel>
        <Checkbox value="ONE PIECE"
                  checked={this.state.movies.indexOf('ONE PIECE') >=0 ? true:false}
                  onChange={this.checkboxChange('movies')}>
                  ONE PIECE
                  </Checkbox>
        <Checkbox value="NARUTO"
                  checked={this.state.movies.indexOf('NARUTO') >=0 ? true:false}
                  onChange={this.checkboxChange('movies')}>
                  NARUTO </Checkbox>
        <Checkbox value="ONE PUNCH MAN"
                  checked={this.state.movies.indexOf('ONE PUNCH MAN') >=0 ? true:false}
                  onChange={this.checkboxChange('movies')}>
                  ONE PUNCH MAN </Checkbox>
        </FormGroup>
        
         <FormGroup>
        <ControlLabel>Gender</ControlLabel>
        <Radio name="gender" 
        value="Male" onChange={this.onChange('gender')}> Male</Radio>
        <Radio name="gender" 
        value="Female" onChange={this.onChange('gender')}> Female</Radio>
        </FormGroup>
        
          
          
          <FormGroup>
        <ControlLabel>YOUR MIDDLE NAME</ControlLabel>
        <FormControl type="text" 
        placeholder="Mid Name Here"
        value={this.state.mname}
        onChange={this.onChange('mname')}
        />
        </FormGroup>
        
        <FormGroup>
        <ControlLabel>Your Online Game</ControlLabel>
        <Checkbox value="DOTA 2"
                  checked={this.state.Ogame.indexOf('DOTA 2') >=0 ? true:false}
                  onChange={this.checkboxChange('Ogame')}>
                  DOTA 2
                  </Checkbox>
        <Checkbox value="HON"
                  checked={this.state.Ogame.indexOf('HON') >=0 ? true:false}
                  onChange={this.checkboxChange('Ogame')}>
                  HON </Checkbox>
        <Checkbox value="LOL"
                  checked={this.state.Ogame.indexOf('LOL') >=0 ? true:false}
                  onChange={this.checkboxChange('Ogame')}>
                  LOL </Checkbox>
        <Checkbox value="CS GO"
                  checked={this.state.Ogame.indexOf('CS GO') >=0 ? true:false}
                  onChange={this.checkboxChange('Ogame')}>
                  CS GO </Checkbox>          
        </FormGroup>
        
        <FormGroup>
        <ControlLabel>Computer you Use</ControlLabel>
        <Radio name="comp" 
        value="X-BOX" onChange={this.onChange('comp')}> X-BOX</Radio>
        <Radio name="status" 
        value="Wii" onChange={this.onChange('comp')}> Wii</Radio>
        <Radio name="status" 
        value="DESKTOP COMPUTER" onChange={this.onChange('comp')}> DESKTOP COMPUTER</Radio>
        </FormGroup>
        
          </Form>
        </Col>
        
        <Col md={6}>
        <strong> Name is: {this.state.name}</strong><br/>
        <strong> Color is: {this.state.color}</strong><br/>
        <strong> Movies is: {this.state.movies.map((item,i) =>{
        return <div>
        <span className="label label-warning">{item}</span>
        </div>  
        
        
    })
          
        }</strong><br/>
        
          
        
        <strong> Gender is: {this.state.gender}</strong><br/>
        <strong> Middle Name Here: {this.state.mname}</strong><br/>
        <strong> Online Game is: {this.state.Ogame.map((item,i) =>{
        return <div>
        <span className="label label-primary">{item}</span>
        </div>  
        
        
    })
          
        }</strong><br/>
        <strong> Status is: {this.state.comp}</strong><br/>
        
      
          
        
        <br/>
        <br/>
        <ButtonGroup>
          <Button bsStyle="info">
          <span className="glyphicon glyphicon-sent"></span> 
          Info Button </Button>
          
          <Button bsStyle="primary">
           <span className="glyphicon glyphicon-save"></span>  Primary Button </Button>
           
          <Button bsStyle="warning"><span className="glyphicon glyphicon-warning"></span>  Warning Button </Button>
          <Button bsStyle="danger"> <span className="glyphicon glyphicon-close"></span>  Error Button </Button>
          </ButtonGroup>
        
        </Col>
        
        </Row>
        
        </Grid>
        
       
        </div>
      </div>
    );
  }
}

export default App;
