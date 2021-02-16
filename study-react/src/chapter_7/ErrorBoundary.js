import react,{Component} from 'react'
import LifeCycleSample from "./LifeCycleSample";

class ErrorBoundary extends Component{
    state={
        error:false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error:true
        })
        console.log(error,errorInfo)
    }

    render() {
        if(this.state.error)
            return <div>에러가 발생했습니다!</div>
        return this.props.children
    }
}

export default ErrorBoundary;