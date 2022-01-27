/**
 * DOM
 */
 const formStudent = document.getElementById("form-student");
 const studentListContainer = document.getElementById("student-list-container");
 const NumberOfStudent = document.getElementById("total-student");

 /**
  * List of student
  */
  let studentList = [];

  /**
   * Student render function 
   */

   const renderStudentList = (pStudentList) => {
    let template = "";
  
    if (pStudentList.length === 0) {
      // if the list of student is empty, we will show this alert.
      template = `
              <div class="alert alert-primary" role="alert">
                  Kayitli öğrenci bulunmamaktadir!
              </div>
          `;
    } else {
      // if the list of student is not empty, we will render all student list.
      template = `
          <table class="table table-bordered">
              <thead>
              <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Student Id</th>
                  <th>Delete</th>
              </tr>
              </thead>
              <tbody>
                  ${pStudentList
                    .map((student) => {
                      return `
                          <tr>
                              <td>${student.firstname}</td>
                              <td>${student.lastname}</td>
                              <td>${student.studentid}</td>
                              <td><i class="far fa-trash-alt text-danger" onclick="deleteStudent('${student.studentid}')"></i></td>
                          </tr>
                      `;
                    })
                    .join("")}
              </tbody>
          </table>
      `;
    }
  
    studentListContainer.innerHTML = template;
    studentNumber(pStudentList);
  };


  /**
   *This function works for adding students when you click the "submit" 
   */

   const addStudent = (event) => {
    event.preventDefault();
  
    let newStudent = {
      firstname: event.target["firstname"].value,
      lastname: event.target["lastname"].value,
      studentid: event.target["studentid"].value,
    };
  
    studentList.push(newStudent);
    renderStudentList(studentList);
  };

/**
 * This function calculate the number of students
 */

const studentNumber = (pStudentList)=>{
  let studentNumber = pStudentList.length;

  NumberOfStudent.innerHTML = studentNumber;
};

/**
 * This function delete the selected student
 */
 const deleteStudent = (pId) => {
  studentList = studentList.filter((student) => student.studentid !== pId);
  renderStudentList(studentList);
};



  /**
   * functions
   */

  renderStudentList(studentList);
  formStudent.addEventListener("submit", addStudent);
  