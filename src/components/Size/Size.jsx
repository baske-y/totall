
import styles from './Size.module.css'

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
        <tbody>
          <tr>
            <td>White</td>
            <td>S</td>
            <td>
              <select name={styles.quantity_s} id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>White</td>
            <td>M</td>
            <td>
              <select name={styles.quantity_m} id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>White</td>
            <td>L</td>
            <td>
              <select name={styles.quantity_l} id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </td>
          </tr>

        </tbody>
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
          <tr>
            <th>S</th>
            <td>99 ~ 99</td>
            <td>99 ~ 99</td>
            <td>99 ~ 99</td>
          </tr>
          <tr>
            <th>M</th>
            <td>99 ~ 99</td>
            <td>99 ~ 99</td>
            <td>99 ~ 99</td>
          </tr>
          <tr>
            <th>L</th>
            <td>99 ~ 99</td>
            <td>99 ~ 99</td>
            <td>99 ~ 99</td>
          </tr>
        </tbody>
      </table>
    </div>
    
  )
}
