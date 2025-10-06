import style from './App.module.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import img1 from './Chevron1.svg'
import img2 from './Chevron.svg'
function App() {

  const [value, setValue] = useState([])
  const [selectValue, setSelectValue] = useState("")
  const [flag, setFlag] = useState(false);

  async function get() {
    const response = await axios.get('https://www.nbrb.by/API/ExRates/Currencies')
    setValue(response.data)
    setSelectValue(response.data[0].Cur_Name)
  }

  useEffect(() => {
    get()
  }, [])

  return (

    <main>
      <button onClick={() => {
        !flag ? setFlag(true) : setFlag(false)
      }}>{selectValue}
        <img src={!flag ? img1 : img2} />
      </button>
      <div style={{ display: flag === false ? 'none' : 'block' }} className={style.container}>
        {value.map((el) => (
          <p className={style.item}>{el.Cur_Name}</p>
        ))}
      </div>
    </main>
    // <section className={styles.info}>
    //   <button >{selectValue}</button>
    //   <div className={styles.conteiner}>
    //     {value.map((el) => <p key={el.Cur_ID} className={styles.items}>{el.Cur_Name}</p>)}
    //   </div>
    // </section>

  );
}

export default App;
{/* <main>
<button onClick={() => {
  !flag ? setFlag(true) : setFlag(false)
}}>{selectCur}
  <img src={!flag ? img1 : img2} />
</button>
<div style={{ display: flag === false ? 'none' : 'block' }} className={style.container}>
  {value.map((el) => (
    <p className={style.item}>{el.Cur_Name}</p>
  ))}
</div>
</main> */}