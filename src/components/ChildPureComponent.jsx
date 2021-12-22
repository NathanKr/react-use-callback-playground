import { PureComponent } from "react";
import './ChildPureComponent.css'

class ChildPureComponent extends PureComponent {
  componentDidUpdate(){
    console.log(`render ChildPureComponent`);
  }

  componentDidMount(){
    console.log(`render ChildPureComponent`);
  }

  render() {
    return (
      <div className='ChildPureComponent'>
        <p>ChildPureComponent</p>
        <button onClick={this.props.clickHandler}>{this.props.text}</button>
      </div>
    );
  }
}

export default ChildPureComponent;
