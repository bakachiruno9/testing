function myFunctionIspin() {
  // Set the name of your source and target sheets
  var sourceSheetName = "Ispin lvl 3"; // Change to the name of your source sheet (to clear cells)
  var targetSheetName = "Ispin lvl 3"; // Change to the name of your target sheet (to uncheck checkbox)

  // Define the ranges to clear in the source sheet
  var rangesToClear = [
    "A3:A6", "B3:B6", "E3:E6",
    "A11:A14", "B11:B14", "E11:E14",
    "A19:A22", "B19:B22", "E19:E22",
    "A27:A30", "B27:B30", "E27:E30",
    "A35:A38", "B35:B38", "E35:E38",
    "A43:A46", "B43:B46", "E43:E46"
  ];

  // Define the corresponding ranges in the target sheet to set to FALSE
  var targetRanges = [
    "C3:C6", "D3:D6",
    "C11:C14", "D11:D14",
    "C19:C22", "D19:D22",
    "C27:C30", "D27:D30",
    "C35:C38", "D35:D38",
    "C43:C46", "D43:D46"
  ];

  // Get the source sheet
  var sourceSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sourceSheetName);

  // Get the target sheet
  var targetSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(targetSheetName);

 // Loop through each range to clear
  for (var i = 0; i < rangesToClear.length; i++) {
    var rangeToClear = rangesToClear[i];

    // Get the range of cells to clear
    var range = sourceSheet.getRange(rangeToClear);

    // Clear the cells in the source sheet
    range.clearContent();
  }

  // Loop through each target range to set FALSE
  for (var j = 0; j < targetRanges.length; j++) {
    var targetRange = targetRanges[j];

    // Set FALSE in the corresponding cells in the target sheet
    var targetRangeObj = targetSheet.getRange(targetRange);
    targetRangeObj.setValue(false);
  }
}

function myFunctionTW() {
  // Set the name of your source and target sheets
  var sourceSheetName = "Total War"; // Change to the name of your source sheet (to clear cells)
  var targetSheetName = "Total War"; // Change to the name of your target sheet (to uncheck checkbox)

  // Define the ranges to clear in the source sheet
  var rangesToClear = [
    "A3:A6", "B3:B6", "E3:E6",
    "A11:A14", "B11:B14", "E11:E14",
    "A19:A22", "B19:B22", "E19:E22",
    "A27:A30", "B27:B30", "E27:E30"
  ];

  // Define the corresponding ranges in the target sheet to set to FALSE
  var targetRanges = [
    "C3:C6", "D3:D6",
    "C11:C14", "D11:D14",
    "C19:C22", "D19:D22",
    "C27:C30", "D27:D30"
  ];

  // Get the source sheet
  var sourceSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sourceSheetName);

  // Get the target sheet
  var targetSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(targetSheetName);

 // Loop through each range to clear
  for (var i = 0; i < rangesToClear.length; i++) {
    var rangeToClear = rangesToClear[i];

    // Get the range of cells to clear
    var range = sourceSheet.getRange(rangeToClear);

    // Clear the cells in the source sheet
    range.clearContent();
  }

  // Loop through each target range to set FALSE
  for (var j = 0; j < targetRanges.length; j++) {
    var targetRange = targetRanges[j];

    // Set FALSE in the corresponding cells in the target sheet
    var targetRangeObj = targetSheet.getRange(targetRange);
    targetRangeObj.setValue(false);
  }
}

function myFunctionHOD3() {
  // Set the name of your source and target sheets
  var sourceSheetName = "HOD lvl 3"; // Change to the name of your source sheet (to clear cells)
  var targetSheetName = "HOD lvl 3"; // Change to the name of your target sheet (to uncheck checkbox)

  // Define the ranges to clear in the source sheet
  var rangesToClear = [
    "A3:A6", "B3:B6", "E3:E6",
    "A11:A14", "B11:B14", "E11:E14",
    "A19:A22", "B19:B22", "E19:E22",
    "A27:A30", "B27:B30", "E27:E30"
  ];

  // Define the corresponding ranges in the target sheet to set to FALSE
  var targetRanges = [
    "C3:C6", "D3:D6",
    "C11:C14", "D11:D14",
    "C19:C22", "D19:D22",
    "C27:C30", "D27:D30"
  ];

  // Get the source sheet
  var sourceSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sourceSheetName);

  // Get the target sheet
  var targetSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(targetSheetName);

 // Loop through each range to clear
  for (var i = 0; i < rangesToClear.length; i++) {
    var rangeToClear = rangesToClear[i];

    // Get the range of cells to clear
    var range = sourceSheet.getRange(rangeToClear);

    // Clear the cells in the source sheet
    range.clearContent();
  }

  // Loop through each target range to set FALSE
  for (var j = 0; j < targetRanges.length; j++) {
    var targetRange = targetRanges[j];

    // Set FALSE in the corresponding cells in the target sheet
    var targetRangeObj = targetSheet.getRange(targetRange);
    targetRangeObj.setValue(false);
  }
}

function myFunctionHOD4() {
  // Set the name of your source and target sheets
  var sourceSheetName = "HOD lvl 4"; // Change to the name of your source sheet (to clear cells)
  var targetSheetName = "HOD lvl 4"; // Change to the name of your target sheet (to uncheck checkbox)

  // Define the ranges to clear in the source sheet
  var rangesToClear = [
    "A3:A6", "B3:B6", "E3:E6",
    "A11:A14", "B11:B14", "E11:E14",
    "A19:A22", "B19:B22", "E19:E22",
    "A27:A30", "B27:B30", "E27:E30"
  ];

  // Define the corresponding ranges in the target sheet to set to FALSE
  var targetRanges = [
    "C3:C6", "D3:D6",
    "C11:C14", "D11:D14",
    "C19:C22", "D19:D22",
    "C27:C30", "D27:D30"
  ];

  // Get the source sheet
  var sourceSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sourceSheetName);

  // Get the target sheet
  var targetSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(targetSheetName);

 // Loop through each range to clear
  for (var i = 0; i < rangesToClear.length; i++) {
    var rangeToClear = rangesToClear[i];

    // Get the range of cells to clear
    var range = sourceSheet.getRange(rangeToClear);

    // Clear the cells in the source sheet
    range.clearContent();
  }

  // Loop through each target range to set FALSE
  for (var j = 0; j < targetRanges.length; j++) {
    var targetRange = targetRanges[j];

    // Set FALSE in the corresponding cells in the target sheet
    var targetRangeObj = targetSheet.getRange(targetRange);
    targetRangeObj.setValue(false);
  }
}

function myFunctionGaebolg4() {
  // Set the name of your source and target sheets
  var sourceSheetName = "Gaebolg lvl 4"; // Change to the name of your source sheet (to clear cells)
  var targetSheetName = "Gaebolg lvl 4"; // Change to the name of your target sheet (to uncheck checkbox)

  // Define the ranges to clear in the source sheet
  var rangesToClear = [
    "A3:A6", "B3:B6", "E3:E6",
    "A11:A14", "B11:B14", "E11:E14",
    "A19:A22", "B19:B22", "E19:E22",
    "A27:A30", "B27:B30", "E27:E30"
  ];

  // Define the corresponding ranges in the target sheet to set to FALSE
  var targetRanges = [
    "C3:C6", "D3:D6",
    "C11:C14", "D11:D14",
    "C19:C22", "D19:D22",
    "C27:C30", "D27:D30"
  ];

  // Get the source sheet
  var sourceSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sourceSheetName);

  // Get the target sheet
  var targetSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(targetSheetName);

 // Loop through each range to clear
  for (var i = 0; i < rangesToClear.length; i++) {
    var rangeToClear = rangesToClear[i];

    // Get the range of cells to clear
    var range = sourceSheet.getRange(rangeToClear);

    // Clear the cells in the source sheet
    range.clearContent();
  }

  // Loop through each target range to set FALSE
  for (var j = 0; j < targetRanges.length; j++) {
    var targetRange = targetRanges[j];

    // Set FALSE in the corresponding cells in the target sheet
    var targetRangeObj = targetSheet.getRange(targetRange);
    targetRangeObj.setValue(false);
  }
}

function myFunctionGaebolg3() {
  // Set the name of your source and target sheets
  var sourceSheetName = "Gaebolg lvl 3"; // Change to the name of your source sheet (to clear cells)
  var targetSheetName = "Gaebolg lvl 3"; // Change to the name of your target sheet (to uncheck checkbox)

  // Define the ranges to clear in the source sheet
  var rangesToClear = [
    "A3:A6", "B3:B6", "E3:E6",
    "A11:A14", "B11:B14", "E11:E14",
    "A19:A22", "B19:B22", "E19:E22",
    "A27:A30", "B27:B30", "E27:E30"
  ];

  // Define the corresponding ranges in the target sheet to set to FALSE
  var targetRanges = [
    "C3:C6", "D3:D6",
    "C11:C14", "D11:D14",
    "C19:C22", "D19:D22",
    "C27:C30", "D27:D30"
  ];

  // Get the source sheet
  var sourceSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sourceSheetName);

  // Get the target sheet
  var targetSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(targetSheetName);

 // Loop through each range to clear
  for (var i = 0; i < rangesToClear.length; i++) {
    var rangeToClear = rangesToClear[i];

    // Get the range of cells to clear
    var range = sourceSheet.getRange(rangeToClear);

    // Clear the cells in the source sheet
    range.clearContent();
  }

  // Loop through each target range to set FALSE
  for (var j = 0; j < targetRanges.length; j++) {
    var targetRange = targetRanges[j];

    // Set FALSE in the corresponding cells in the target sheet
    var targetRangeObj = targetSheet.getRange(targetRange);
    targetRangeObj.setValue(false);
  }
}
//this is branch
