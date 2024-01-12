import style from './Header.module.css'
import logo1 from '../../assets/WhatsApp Image 2024-01-12 at 11.15.29.jpeg'


export const HeaderApp = ()=>{

    return(

        <header>
            
            <div className={style.divTitle}>

                <img 
                    src={logo1} 
                    alt="Logo Diagnostic"
                    className={style.logo}
                />
                

               
                <h1 className={style.title}>insignificant diagnosis</h1>
           

                <img 
                    src={logo1}
                    alt="Logo Diagnostic" 
                    className={style.logo}
                />

            </div>

            <div className={style.divSubtitle}>

                <strong>Ta se preocupando a toa!</strong>

            </div>

        </header>
    )
}