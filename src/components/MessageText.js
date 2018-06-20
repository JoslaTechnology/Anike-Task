import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trials: [
                {
                  id: 0,
                  name:'HARAJAKU CHAT APP',
                  image: '/Users/anikemaryfisher/Downloads/ChatApp/React/landing/src/components/assests/images/IMG_0917.png',
                  category: 'mains',
                  description:'landing.'
                }
            ],
     };
 }

 render() {
     const menu = this.state.trials.map((trial) => {
         return (
           <div key={trial.id} className="col-12 mt-5">
             <Media tag="li">
               <Media left middle>
                   <Media object src={trial.image} alt={trial.name} />
               </Media>
               <Media body className="ml-5">
                 <Media heading>{trial.name}</Media>
                 <p>{trial.description}</p>
               </Media>
             </Media>
           </div>
         );
     });

     return (
       <div className="container">
         <div className="row">
           <Media list>
               {menu}
           </Media>
         </div>
       </div>
     );
 }
}

export default Menu;