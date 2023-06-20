// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent form from submitting and page refreshing

    // Get the input values
    var startDate = document.getElementById("startDate").value;
    var endDate = document.getElementById("endDate").value;
    var amount = document.getElementById("amount").value;

    // Create a new row in the table
    var table = document.getElementById("dataTable");
    var newRow = table.insertRow();

    // Insert the data into the new row
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = startDate;
    cell2.innerHTML = endDate;
    cell3.innerHTML = amount;
    cell4.innerHTML = '<button type="button" class="btn btn-primary edit-btn" data-bs-toggle="modal" data-bs-target="#editModal">Edit</button>';

    // Reset the form
    document.getElementById("myForm").reset();

    // Close the modal
    var modal = bootstrap.Modal.getInstance(document.getElementById("myModal"));
    modal.hide();
}

// Function to handle editing of data
function handleEdit() {
    var row = this.parentNode.parentNode; // Get the parent row of the clicked button
    var cells = row.getElementsByTagName("td"); // Get the cells within the row

    // Extract the data from the cells
    var startDate = cells[0].innerText;
    var endDate = cells[1].innerText;
    var amount = cells[2].innerText;

    // Set the data in the edit modal
    document.getElementById("editRowId").value = row.rowIndex;
    document.getElementById("editStartDate").value = startDate;
    document.getElementById("editEndDate").value = endDate;
    document.getElementById("editAmount").value = amount;
}

// Add event listener to the form submission
document.getElementById("myForm").addEventListener("submit", handleSubmit);

// Add event listener to the edit buttons
document.querySelectorAll(".edit-btn").forEach(function(button) {
    button.addEventListener("click", handleEdit);
});

// Function to handle edit form submission
document.getElementById("editForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting and page refreshing

    // Get the edited data
    var rowIndex = document.getElementById("editRowId").value;
    var startDate = document.getElementById("editStartDate").value;
    var endDate = document.getElementById("editEndDate").value;
    var amount = document.getElementById("editAmount").value;

    // Update the data in the table
    var table = document.getElementById("dataTable");
    var row = table.rows[rowIndex];
    row.cells[0].innerText = startDate;
    row.cells[1].innerText = endDate;
    row.cells[2].innerText = amount;

    // Close the edit modal
    var modal = bootstrap.Modal.getInstance(document.getElementById("editModal"));
    modal.hide();
});
