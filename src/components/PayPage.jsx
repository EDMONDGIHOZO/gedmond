import Header from './header'

export const PayPage = () => {
  return (
    <div className='page_wrapper'>
      <Header />
      <div className="paypage_wrapper">
        <h3>Web Development service.</h3>
        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_blank"
        >
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="8QDU54VMUH2TU" />
          <input type="hidden" name="currency_code" value="USD" />
          <input
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
            border="0"
            name="submit"
            title="PayPal - The safer, easier way to pay online!"
            alt="Add to Cart"
          />
        </form>
      </div>
    </div>
  )
}

export default PayPage
