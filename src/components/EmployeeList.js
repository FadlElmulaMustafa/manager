//import liraries
import  _ from 'lodash';
import React, { Component } from 'react';
import { ListView, View, Text} from 'react-native';
import { connect } from 'react-redux';
import { employeeFetch } from '../actions';
import ListItem  from './ListItem';

// create a component
class EmployeeList extends Component {

    componentWillMount(){
        this.props.employeeFetch();
        this.createDataSource(this.props);        
    }

    componentWillReceiveProps(nextProps){
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee){
        return <ListItem employee={employee}/>;
    }

    render() {

        return (
           <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
           />
        );
    }
}
const mapStateToProps = state => {

   const employees = _.map(state.empList, (val, uid) => {
       return { ...val, uid };
   });

   return { employees };
}
 
//make this component available to the app
export default connect(mapStateToProps, { employeeFetch })(EmployeeList);
