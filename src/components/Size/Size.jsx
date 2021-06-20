
import styles from './Size.module.css'

const ITEMS = [
  {
    color:"White",
    size:"S",
    chest:"50 ~ 80",
    weist:"50 ~ 80",
    height:"50 ~ 80"
  },
  {
    color:"Red",
    size:"M",
    chest:"80 ~ 110",
    weist:"80 ~ 110",
    height:"80 ~ 110"
  },
  {
    color:"Black",
    size:"L",
    chest:"110 ~ 140",
    weist:"110 ~ 140",
    height:"110 ~ 140"
  },

]

export  function Size() {
  return (
    <div>
      <table className={styles.order_table}>
        <thead>
          <tr>
            <th className={styles.color}>Color</th>
            <th className={styles.size}>Size</th>
            <th className={styles.quantity}></th>
          </tr>
        </thead>
      {ITEMS.map(item => {
       return(
         <tr key={item.color}>
           <td>{item.color}</td>
           <td>{item.size}</td>
           <td>
             <select name={styles.quantity_s} id="">
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
             </select>
           </td>
         </tr>
       )
     })}
      </table>
      <a className={styles.cart_btn} href="#">ADD TO CART</a>

      <table className={styles.size_table}>
        <thead>
          <tr>
            <th class="size">Size</th>
            <th class="chest">Chest</th>
            <th class="weist">Weist</th>
            <th class="height">Height</th>
          </tr>
        </thead>
        <tbody>
          {ITEMS.map(item => {
            return(
              <tr key={item.color}>
                <th>{item.size}</th>
                <td>{item.chest}</td>
                <td>{item.weist}</td>
                <td>{item.height}</td>
              </tr>
            )
          })}
          
        </tbody>
      </table>
    </div>
    
  )
}
