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
    window.addSushi = () => {
        const sushiName = document.getElementById('sushiName').value;
        const sushiDescription = document.getElementById('sushiDescription').value;
        const sushiPrice = document.getElementById('sushiPrice').value;
        const sushiType = document.getElementById('sushiType').value;

        // Make a fetch request to add sushi
        // Example: fetch('http://localhost:3000/add', { method: 'POST', body: { name: sushiName, description: sushiDescription, ... } })

        // You can handle the response as needed
    };

    // Function to delete a sushi
    window.deleteSushi = () => {
        const sushiIdToDelete = document.getElementById('sushiIdToDelete').value;

        // Make a fetch request to delete sushi
        // Example: fetch(`http://localhost:3000/delete/${sushiIdToDelete}`, { method: 'DELETE' })

        // You can handle the response as needed
    };

    // Function to add a box
    window.addBox = () => {
        const boxTotalPrice = document.getElementById('boxTotalPrice').value;

        // Make a fetch request to add a box
        // Example: fetch('http://localhost:3000/addBox', { method: 'POST', body: { prix_total: boxTotalPrice, ... } })

        // You can handle the response as needed
    };

    // Function to delete a box
    window.deleteBox = () => {
        const boxIdToDelete = document.getElementById('boxIdToDelete').value;

        // Make a fetch request to delete a box
        // Example: fetch(`http://localhost:3000/deletebox/${boxIdToDelete}`, { method: 'DELETE' })

        // You can handle the response as needed
    };
};

export default Users;
