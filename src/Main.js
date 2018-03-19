import React, {Component} from 'react'
import First from './components/First/First'
import Second from './components/Second'
import Third from './components/Third'
import Fourth from './components/Fourth'

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