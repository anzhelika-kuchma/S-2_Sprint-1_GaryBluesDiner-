import Header from "./Header";
import OrderForm from "./OrderForm";

function Order() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div class="container-order">
          <div class="order-cover-box"></div>
          <div class="order-form">
            <OrderForm />
          </div>
        </div>
      </main>
    </>
  );
}

export default Order;
