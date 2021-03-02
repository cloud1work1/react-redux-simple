import React, {Component} from 'react';
import { connect } from 'react-redux';

class Form extends Component {
    render(props) {
        return(
            <div>
                <h4>{this.props.name}</h4>
                <button onClick={this.props.changeData}>Change Name</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        name: state.name
    }
}

 function mapDispatchToProps(dispatch) {
     return {
        changeData: () => {
            console.log('Change Data dispatched');
            const action= {type: 'CHANGE_DATA'};
            dispatch(action);
        }
     }
 }

export default connect(mapStateToProps, mapDispatchToProps)(Form);