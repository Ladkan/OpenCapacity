import { Link } from "react-router-dom"
import './style.scss'

function Button(props:any){
    
    const {size, variant, className, action, redirect,children, css } = props
    
    if(action){
        return (
            <button onClick={action} className={`btn ${size} ${variant} ${className}`} style={css}>
                {children}
            </button>
        )
    }

    if(redirect){
        return(
            <Link to={redirect} className={`btn ${size} ${variant} ${className}`} style={css} >
                {children}
            </Link>
        )
    }
}

export default Button