/* eslint-disable prefer-template */

const Users = () => {
    const main = document.querySelector('main');

    const bloc1 = `
        <!-- Your existing HTML code -->

        <h1 class="titleUsers">Liste des utilisateurs</h1>

        <!-- Add Sushi Form -->
        <form id="addSushiForm">
            <label for="sushiName">Nom du Sushi:</label>
            <input type="text" id="sushiName" name="sushiName" required>
            <label for="sushiDescription">Description:</label>
            <input type="text" id="sushiDescription" name="sushiDescription" required>
            <label for="sushiPrice">Prix unitaire:</label>
            <input type="text" id="sushiPrice" name="sushiPrice" required>
            <label for="sushiType">Type:</label>
            <input type="text" id="sushiType" name="sushiType" required>
            <button type="button" onclick="addSushi()">Ajouter Sushi</button>
        </form>

        <!-- Delete Sushi Form -->
        <form id="deleteSushiForm">
            <label for="sushiIdToDelete">ID du Sushi à supprimer:</label>
            <input type="text" id="sushiIdToDelete" name="sushiIdToDelete" required>
            <button type="button" onclick="deleteSushi()">Supprimer Sushi</button>
        </form>

        <!-- Add Box Form -->
        <form id="addBoxForm">
            <label for="boxTotalPrice">Prix total de la Box:</label>
            <input type="text" id="boxTotalPrice" name="boxTotalPrice" required>
            <!-- Add other fields as needed -->
            <button type="button" onclick="addBox()">Ajouter Box</button>
        </form>

        <!-- Delete Box Form -->
        <form id="deleteBoxForm">
            <label for="boxIdToDelete">ID de la Box à supprimer:</label>
            <input type="text" id="boxIdToDelete" name="boxIdToDelete" required>
            <button type="button" onclick="deleteBox()">Supprimer Box</button>
        </form>

        <!-- Your existing HTML code -->
    `;

    main.innerHTML = bloc1;

    // Function to add a sushi
    window.addSushi = async () => {
        try {
          const sushiName = document.getElementById('sushiName').value;
          const sushiDescription = document.getElementById('sushiDescription').value;
          const sushiPrice = document.getElementById('sushiPrice').value;
          const sushiType = document.getElementById('sushiType').value;
      
          const response = await fetch('http://localhost:3000/add', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: sushiName,
              description: sushiDescription,
              price: sushiPrice, 
              type: sushiType,
            }),
          });
      
          console.log(response.status);
      
          if (response.ok) {
            
            const responseData = await response.json();
            console.log('Sushi added successfully:', responseData);
            
          } else {
            
            throw new Error('Error' + response.status);
          }
        } catch (error) {
          console.error('Error:', error.message);
        
        }
      };
      

      window.deleteSushi = async () => {
        try {
          const sushiIdToDelete = document.getElementById('sushiIdToDelete').value;
      
          const response = await fetch(`http://localhost:3000/delete/${sushiIdToDelete}`, {
            method: 'DELETE',
          });
      
          console.log(response.status);
      
          if (response.ok) {
            console.log('Sushi deleted successfully');
            
          } else {
            throw new Error('Error  ' + response.status);
          }
        } catch (error) {
          console.error('Error:', error.message);
     
        }
      };
      
      window.addBox = async () => {
        try {
          const boxTotalPrice = document.getElementById('boxTotalPrice').value;
      
          const response = await fetch('http://localhost:3000/addBox', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              prix_total: boxTotalPrice,
          
            }),
          });
      
          console.log(response.status);
      
          if (response.ok) {
            const responseData = await response.json();
            console.log('Box added successfully:', responseData);
        
          } else {
            throw new Error('Error ' + response.status);
          }
        } catch (error) {
          console.error('Error:', error.message);
          
        }
      };
      
      window.deleteBox = async () => {
        try {
          const boxIdToDelete = document.getElementById('boxIdToDelete').value;
      
          const response = await fetch(`http://localhost:3000/deletebox/${boxIdToDelete}`, {
            method: 'DELETE',
          });
      
          console.log(response.status);
      
          if (response.ok) {
            console.log('Box deleted successfully');

          } else {
            throw new Error('Error ' + response.status);
          }
        } catch (error) {
          console.error('Error:', error.message);
          
        }
      };
    };
      
      export default Users;
      