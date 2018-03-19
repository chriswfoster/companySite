import React, {Component} from 'react'
import First from './First/First'
import Second from './Second'
import Third from './Third'
import Fourth from './Fourth'

class Main extends Component{

render(){
return(
<div>
<div className="appheight">
        <First />
        <Second />
        <Third />
        <Fourth />
        
      </div>
</div>
)
}
}
export default Main