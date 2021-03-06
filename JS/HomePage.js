// add eventListener as the page loads
window.addEventListener('DOMContentLoaded', (event) => {
  createInnerHtml();
});

// function to create table and append it to the innerHTML 
const createInnerHtml = () => {
  // column headings
  const headerHtml = "<tr><th></th><th>Name</th><th>Gender</th>" + "<th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>";
  // add table header 
  let innerHtml = `${headerHtml}`;
  // read from JSON object
  let empPayrollList = createEmployeePayrollJSON();
  // data row loop through JSON object
  for (let empPayrollData of empPayrollList) {
    // append row to the existing rows
    innerHtml = `${innerHtml}
      <tr>
        <td><img class="profile" alt="${empPayrollData._name}" src ="${empPayrollData._profilePic}"></td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>${getDepartmentHtml(empPayrollData._department)}</td>
        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData._startDate}</td>
        <td>
          <img id ="${empPayrollData._id}" src="../assets/delete-black-18dp.svg" alt="Delete" onClick="remove(this)">
          <img id ="${empPayrollData._id}" src="../assets/create-black-18dp.svg" alt="Edit" onClick="update(this)">
        </td>
      </tr>`
      ;
  }
  document.querySelector('#display').innerHTML = innerHtml;
}

// function to return JSON object
const createEmployeePayrollJSON = () => {
  let empPayrollListLocal = [
    {
      _name: 'Akshay Kumar',
      _gender: 'Male',
      _department: [
        'HR',
        'Finance'
      ],
      _salary: '400000',
      _startDate: '2 Aug 2021',
      _note: '',
      _id: new Date().getTime(),
      _profilePic: '../assets/Ellipse-2.png'
    },
    {
      _name: 'sumit Kumar',
      _gender: 'Male',
      _department: [
        'Engineer'
      ],
      _salary: '450000',
      _startDate: '12 Sep 2021',
      _note: '',
      _id: new Date().getTime(),
      _profilePic: '../assets/Ellipse-3.png'
    }
  ];
  return empPayrollListLocal;
}

// function to get department from array and create label for each
const getDepartmentHtml = (data) => {
  let deptHtml = '';
  for (let dept of data) {
    deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`;
  }
  return deptHtml;
}