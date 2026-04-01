
import { requestFormReset } from 'react-dom'
import Btn from './Btn'

function Card(props)
{
    return(
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',background:'red',width:'100%', maxWidth:'300px', marginTop:'20px'}}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <Btn title = {props.btn}/>
        
        </div>
    )
}
export default Card