const Paiement = () => {
    // eslint-disable-next-line no-unused-vars
    const main = document.querySelector('main');

    const bloc1 = `
   
        <form action="http://localhost:3000/payement/checkout" method="post">
              
              <!-- Submit button -->
              <button type="submit">
                Checkout
              </button>

        </form>
        
    `
    main.innerHTML = bloc1;

  };
  
  export default Paiement;