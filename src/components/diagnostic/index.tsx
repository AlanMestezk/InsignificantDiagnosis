import style        from './Diagnostic.module.css'
import imgAdeus     from '../../assets/WhatsApp Image 2024-01-12 at 11.15.30 (1).jpeg'
import imgMotiv     from '../../assets/WhatsApp Image 2024-01-12 at 11.15.30 (3).jpeg'
import imgMalOl     from '../../assets/WhatsApp Image 2024-01-12 at 12.23.01.jpeg'
import logoIcon     from '../../assets/WhatsApp Video 2024-01-12 at 11.15.29.gif'
import imgDiego     from '../../assets/WhatsApp Image 2024-01-12 at 11.15.30.jpeg'
import { useState } from 'react'


export const Diagnostic = ()=>{

    const [textoFrase,                     setTextoFrase] = useState<string>("")
    const [categoriaSelecionada, setCategoriaSelecionada] = useState<number>(0)

    const allFrases = [
        {
            id: 1,
            categoria: "Motivação",
            frases: [
                "Não há a necessidade de caminhar rápido. Apenas siga caminhando. ~wesley✍",
                "Nós somos como o clima: feitos de dias de chuva e de sol! ~wesley✍",
                "Os dias difíceis são a forma mais rápida de aprendermos a apreciar os bons. ~wesley✍",
                "Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos. ~wesley✍"
            ]
        },
        {
            id: 2,
            categoria: "Despedida",
            frases:[
                "A hora do encontro é também despedida. A plataforma desta estação é a vida. ~wesley✍",
                "Em cada despedida existe a imagem da morte. ~wesley✍",
                "Se me esqueceres, só uma coisa, esquece-me bem devagarinho. ~wesley✍",
                "A vida me ensinou a dizer adeus às pessoas que amo, sem tirá-las do meu coração. ~wesley✍"
            ]
        },
        {
            id: 3,
            categoria: "Inveja",
            frases:[
                "O pobre de espírito tem dó de quem está pior e deseja o mal de quem está melhor do que ele. ~wesley✍",
                "O pior sentimento do ser humano não é a inveja, mas sim a indiferença! ~wesley✍",
                "Invejosos e caluniadores vão de mal a pior, afundar-se em suas próprias mentiras!! ~wesley✍",
                "Significado de pior inimigo: fala mal e anda junto. ~wesley✍"
            ]
        }
    ]

    const handleCategory = (index : number)=>{
        
        setCategoriaSelecionada(index)

    }

    const handleShowFrases = ()=>{
        let randomNumber = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length) //0 ate 4

        setTextoFrase(allFrases[categoriaSelecionada].frases[randomNumber])
    }


    return(

        <main className={style.mainContainer}>

            <div className={style.logoTitle}>

                <img 
                    src={logoIcon}
                    alt="logo" 
                    className={style.logoIcon}
                />

            </div>

            <div className={style.divTitle}>
                <h2 className={style.title}>Escolha a categoria do seu diagnóstico</h2>
            </div>


            <section className={style.buttonArea}>
                
                <div className={style.divContainer}>

                    <div className={style.divImgs}>

                        <img 
                            src={imgMotiv} 
                            alt="imagem motiva"
                            className={style.img}
                            width={30} 
                        />

                        <img 
                            src={imgAdeus} 
                            alt="imagem motiva"
                            className={style.img}
                            width={30} 
                        />

                        <img 
                            src={imgMalOl} 
                            alt="imagem motiva"
                            className={style.img}
                        />
                    </div>

                    <div className={style.divButtons}>
                        {
                            allFrases.map(
                                (item, index)=>(
                                    
                                    <button 
                                        key={item.id}
                                        className={style.button}
                                        style={{
                                            borderWidth: item.categoria === allFrases[categoriaSelecionada].categoria ? 4 : 0
                                        }}
                                        onClick={()=> handleCategory(index)}
                                    >
                                        {item.categoria}
                                    </button>
                                )
                            )
                        }
                    </div>

                  
                </div>

            </section>
            

            <div className={style.divButtonFrase}>
                <button 
                    className={style.buttonFrase}
                    onClick={handleShowFrases}
                >
                    Gerar diagnostico
                </button>

            </div>
            
            <div className={style.divFrase}> 

               {
                    /*toda vez que textoFrase estiver vazio, 
                    o campo não aparece*/

                    textoFrase !== '' &&  
                        <h3 className={style.frase}>
                                    <img 
                                        src={imgDiego} 
                                        alt="diego"
                                        className={style.imgDiego}
                                        width={80}
                                    />
                                    {textoFrase}
                        </h3>

               }

            </div>

        </main>
    )
}