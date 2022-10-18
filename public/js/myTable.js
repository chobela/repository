$(function () {
  $("#myTable").DataTable({
    dom: "Bfrtip",
    bDestroy: true,
    buttons: ["copyHtml5", "excelHtml5", "csvHtml5", "pdfHtml5"],
    responsive: true,
  });
});
