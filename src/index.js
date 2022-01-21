import XLSX from "xlsx";

document.querySelector("#download").addEventListener("click", () => {
  // Sample Data Generation
  const headerrow = document.querySelector("#firstrow").value.split(";");
  const datarow = document.querySelector("#secondrow").value.split(";");

  // Excel Logic
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet([headerrow, datarow]);
  XLSX.utils.book_append_sheet(wb, ws, "Sample Data");

  // Trigger Download with `writeFile`
  XLSX.writeFile(wb, "SheetJS.xlsx");
});
