import './Logo.css';
import Logotipo from './assets/Logo.svg'


const Logo = () => {
    return (
        <div> 
        <img src={Logotipo} alt='Logotipo' className='logotipo' />


        
        </div>
    )
}

export default Logo