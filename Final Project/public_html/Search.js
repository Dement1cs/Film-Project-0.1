document.getElementById("searchButton").addEventListener("click", function () {
    filterTable();
});

function filterTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("filmCode");
    filter = input.value.toUpperCase();
    table = document.getElementById("filmTable");
    tr = table.getElementsByTagName("tr");

    var found = false;

    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
                found = true;
            } else {
                tr[i].style.display = "none";
            }
        }
    }

    if (!found) {
        alert("No film with the specified code was found.");
    }
}