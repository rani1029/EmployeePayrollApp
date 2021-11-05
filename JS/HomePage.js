// add eventListener as the page loads
window.addEventListener('DOMContentLoaded', (event) => {
  createInnerHtml();
});

// function to create table and append it to the innerHTML 
const createInnerHtml = () => {
  // column headings
  const headerHtml = "<tr><th></th><th>Name</th><th>Gender</th>" + "<th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>";
  // data row
  const innerHtml = `${headerHtml}
      <tr>
        <td><img class="profile" src="../ASSETS/Ellipse-1.png"" alt=""></td>
        <td>Sohini</td>
        <td>Female</td>
        <td>
          <div class="dept-label">HR</div>
          <div class="dept-label">Finance</div>
        </td>
        <td>300000</td>
        <td>1 Nov 2020</td>
        <td>
         <img src="../ASSETS/delete-black-18dp.svg" alt="create">
          <img src="../ASSETS/create-black-18dp.svg" alt="create">
        </td>
      </tr>`
    ;
  document.querySelector('#display').innerHTML = innerHtml;
}