import React, {Component} from 'react';
import './Menu.css';

export default class Menu extends Component {
    constructor(){
        super()
        this.state ={ isExpanded: false };
    }

    render(){
        return(
           <div className="Menu">
               <div className="Menu=links">
                   <div className="Menu-link">Home</div>
                   <div className="Menu-link">About</div>
                   <div className="Menu-link">Projects</div>
                   <div className="Menu-link">Contact</div>
               </div>
           </div>
        );
    }
}