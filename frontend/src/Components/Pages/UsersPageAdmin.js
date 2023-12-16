/* eslint-disable prefer-template */
const Users = () => {
    const main = document.querySelector('main');

    const bloc1 = `
        <!-- Your existing HTML code -->

        <form id="addSushiForm">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xl-9">
          <h3 class="text-black mb-4">Ajouter un sushi</h3>
          <div class="card" style="border-radius: 15px;">
            <div class="card-body">
            <div class="row align-items-center pt-4 pb-3">
              <div class="col-md-3 ps-5">
              <label for="sushiName">Nom du Sushi:</label>
              </div>
              <div class="col-md-9 pe-5">
              <input type="text" id="sushiName" name="sushiName" class="form-control form-control-lg" required>
              </div>
            </div>
            <hr class="mx-n3">
            <div class="row align-items-center py-3">
              <div class="col-md-3 ps-5">
              <label for="sushiDescription">Description:</label>
              </div>
              <div class="col-md-9 pe-5">
              <input type="text" id="sushiDescription" name="sushiDescription" class="form-control form-control-lg"  required>
              </div>
            </div>
            <hr class="mx-n3">
            <div class="row align-items-center py-3">
              <div class="col-md-3 ps-5">
              <label for="sushiPrice">Prix unitaire:</label>
              </div>
              <div class="col-md-9 pe-5">
              <input type="text" id="sushiPrice" name="sushiPrice"  class="form-control" required>
              </div>
            </div>
            <hr class="mx-n3">
            <div class="row align-items-center py-3">
              <div class="col-md-3 ps-5">
              <label for="sushiType">Type:</label>
              </div>
              <div class="col-md-9 pe-5">
              <input type="text" id="sushiType" name="sushiType" class="form-control" required>
              </div>
            </div>
            <hr class="mx-n3">
            <div class="px-5 py-4">
              <button type="button" onclick="addSushi()" class="btn btn-primary btn-lg" >Ajouter Sushi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </form>

    <form id="deleteSushiForm">
    <div class="row d-flex justify-content-center align-items-center h-100">
    <div class="col-xl-9">
    <h3 class="text-black mb-4">Supprimer un sushi</h3>
      <div class="card" style="border-radius: 15px;">
        <div class="card-body">
        <div class="row align-items-center pt-4 pb-3">
          <div class="col-md-3 ps-5">
          <label for="sushiIdToDelete">ID du Sushi à supprimer:</label>
  
          </div>
          <div class="col-md-9 pe-5">
           <input type="text" id="sushiIdToDelete" name="sushiIdToDelete" class="form-control form-control-lg" required>
          </div>
        </div>
       
        <hr class="mx-n3">
        <div class="px-5 py-4">
          <button type="button" onclick="deleteSushi()" class="btn btn-primary btn-lg">Supprimer Sushi</button>
        </div>
      </div>
    </div>
  </div>
  </form>

  <form id="addBoxForm">
  <div class="row d-flex justify-content-center align-items-center h-100">
  <div class="col-xl-9">
  <h3 class="text-black mb-4">Ajouter une box</h3>
    <div class="card" style="border-radius: 15px;">
      <div class="card-body">
      <div class="row align-items-center pt-4 pb-3">
        <div class="col-md-3 ps-5">
        <label for="boxTotalPrice">Prix total de la Box:</label>
        </div>
        <div class="col-md-9 pe-5">
        <input type="text" id="boxTotalPrice" name="boxTotalPrice" class="form-control form-control-lg" required>
        </div>

        <div class="col-md-3 ps-5">
        <label for="boxQuantity">Quantité:</label>
        </div>
        <div class="col-md-9 pe-5">
        <input type="text" id="boxQuantity" name="boxQuantity" class="form-control form-control-lg" required>
        </div>

        <div class="col-md-3 ps-5">
        <label for="sushiId">sushi id:</label>
        </div>
        <div class="col-md-9 pe-5">
        <input type="text" id="sushiId" name="sushiId" class="form-control form-control-lg" required>
        </div>

        
      </div>
     
      <hr class="mx-n3">
      <div class="px-5 py-4">
     <button type="button" onclick="addBox()" class="btn btn-primary btn-lg">Ajouter Box</button>
      </div>
    </div>
  </div>
</div>

<form id="deleteBoxForm">
<div class="row d-flex justify-content-center align-items-center h-100">
<div class="col-xl-9">
<h3 class="text-black mb-4">Supprimer une box</h3>
  <div class="card" style="border-radius: 15px;">
    <div class="card-body">
    <div class="row align-items-center pt-4 pb-3">
      <div class="col-md-3 ps-5">
      <label for="boxIdToDelete">ID de la Box à supprimer:</label>

      </div>
      <div class="col-md-9 pe-5">
      <input type="text" id="boxIdToDelete" name="boxIdToDelete" class="form-control form-control-lg" required>
      </div>
    </div>
   
    <hr class="mx-n3">
    <div class="px-5 py-4">
    <button type="button" onclick="deleteBox()" class="btn btn-primary btn-lg">Supprimer Box</button>
    </div>
  </div>
</div>
</div>
</form>

  </form>

        <h1 class="titleUsers">Page Admin</h1>

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
            
            throw new Error(response.status);
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
            throw new Error( response.status);
          }
        } catch (error) {
          console.error('Error:', error.message);
     
        }
      };
      
      window.addBox = async () => {
        try {
          const boxTotalPrice = document.getElementById('boxTotalPrice').value;
          const boxQuantity = document.getElementById('boxQuantity').value; 
          const sushiId = document.getElementById('sushiId').value; 
      
          const response = await fetch('http://localhost:3000/addBox', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              prix_total: boxTotalPrice,
              quantite: boxQuantity,
              sushi: sushiId,
            }),
          });
      
          console.log(response.status);
      
          if (response.ok) {
            const responseData = await response.json();
            console.log('Box added successfully:', responseData);
          } else {
            throw new Error(response.status);
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
            throw new Error(response.status);
          }
        } catch (error) {
          console.error('Error:', error.message);
          
        }
      };
    };
      
      export default Users;
      