const Users = () => {
    const main = document.querySelector('main');


    const bloc1 = ` 
    <div class="retour">
    <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="black" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
        </svg>
    </a>
    </div>

    <h1 class="titleUsers">
        Liste des utilisateurs 
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
        </svg>
    </h1>
    <div class="tab">
   
            <table class="table align-middle mb-0 table-bordered ">
                <thead class="bg-dark">
                <tr class="table-dark">
                    <th>Id</th>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Email</th>
                    <th>isAdmin</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr class="table-secondary">
                        <td>
                            <p class="fw-normal mb-1">1</p>
                        </td>

                        <td>
                            <p class="fw-normal mb-1">Nkolongo</p>
                        </td>
                        <td>
                            <p class="fw-normal mb-1">Bellerose</p>
                        </td>
                        <td>
                            <p class="fw-normal mb-1">bellerose@student.vinci.be</p>
                        </td>
                        <td>
                            <span class="badge badge-success rounded-pill d-inline">Admin</span>
                        </td>
                    </tr>
                    

                    
                    <tr class="table-secondary">
                        <td>
                            <p class="fw-normal mb-1">1</p>
                        </td>

                        <td>
                            <p class="fw-normal mb-1">Nkolongo</p>
                        </td>
                        <td>
                            <p class="fw-normal mb-1">Bellerose</p>
                        </td>
                        <td>
                            <p class="fw-normal mb-1">bellerose@student.vinci.be</p>
                        </td>
                        <td>
                            <span class="badge badge-success rounded-pill d-inline"></span>
                        </td>
                    </tr>

                    
                    <tr class="table-secondary">
                        <td>
                            <p class="fw-normal mb-1">1</p>
                        </td>

                        <td>
                            <p class="fw-normal mb-1">Nkolongo</p>
                        </td>
                        <td>
                            <p class="fw-normal mb-1">Bellerose</p>
                        </td>
                        <td>
                            <p class="fw-normal mb-1">bellerose@student.vinci.be</p>
                        </td>
                        <td>
                            <span class="badge badge-success rounded-pill d-inline"></span>
                        </td>
                    </tr>

                    <tr class="table-secondary">
                        <td>
                            <p class="fw-normal mb-1">1</p>
                        </td>

                        <td>
                            <p class="fw-normal mb-1">Nkolongo</p>
                        </td>
                        <td>
                            <p class="fw-normal mb-1">Bellerose</p>
                        </td>
                        <td>
                            <p class="fw-normal mb-1">bellerose@student.vinci.be</p>
                        </td>
                        <td>
                            <span class="badge badge-success rounded-pill d-inline"></span>
                        </td>
                    </tr>

                    <tr class="table-secondary">
                        <td>
                            <p class="fw-normal mb-1">1</p>
                        </td>

                        <td>
                            <p class="fw-normal mb-1">Nkolongo</p>
                        </td>
                        <td>
                            <p class="fw-normal mb-1">Bellerose</p>
                        </td>
                        <td>
                            <p class="fw-normal mb-1">bellerose@student.vinci.be</p>
                        </td>
                        <td>
                            <span class="badge badge-success rounded-pill d-inline"></span>
                        </td>
                    </tr>

                    <tr class="table-secondary">
                        <td>
                            <p class="fw-normal mb-1">1</p>
                        </td>

                        <td>
                            <p class="fw-normal mb-1">Nkolongo</p>
                        </td>
                        <td>
                            <p class="fw-normal mb-1">Bellerose</p>
                        </td>
                        <td>
                            <p class="fw-normal mb-1">bellerose@student.vinci.be</p>
                        </td>
                        <td>
                            <span class="badge badge-success rounded-pill d-inline"></span>
                        </td>
                    </tr>
                   
                </tbody>
                </table>
        </div>
    `


    main.innerHTML = bloc1;
  };
  
  export default Users;