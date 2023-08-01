// Write your code here
import './index.css'

const Message = props => {
  const {isLogin} = props
  return isLogin ? (
    <h1 className="description">Welcome User</h1>
  ) : (
    <h1 className="description">Please Login</h1>
  )
}

export default Message
