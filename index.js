// Change Weekly Assignment in PDF viewing window

const currentWeek = document.getElementById(`weekNumber`);
const currentPdf = document.getElementById(`pdfViewer`);
const currentStepNumber = document.getElementById("stepNumber");
const currentAssignButton = document.getElementById("assignButton");
const addMaterialButton = document.getElementById("addButton");

function weeklyAssignment() {
  let d = new Date();
  let Today = d.getDate();
  let Month = d.getMonth();

  if (
    (Month == 5 && (Today >= 26 && Today <= 30)) ||
    (Month == 6 && (Today >= 1 && Today <= 2))
  ) {
    weekNumber = 1;
    stepNumber = 1;
    pdfSrc = `"Step1Week1.pdf"`;
    addButton = `"STEP 1 Supplemental Assignment.pdf"`;
  } else if (Month == 6 && (Today >= 3 && Today <= 9)) {
    weekNumber = 2;
    stepNumber = 1;
    pdfSrc = `"Step1Week2.pdf"`;
    addButton = `"STEP 1 Supplemental Assignment.pdf"`;
  } else if (Month == 6 && (Today >= 10 && Today <= 16)) {
    weekNumber = 3;
    stepNumber = 1;
    pdfSrc = `"Step1Week3.pdf"`;
    addButton = `"STEP 1 Supplemental Assignment.pdf"`;
  } else if (Month == 6 && (Today >= 17 && Today <= 23)) {
    weekNumber = 4;
    stepNumber = 1;
    addButton = `"STEP 1 Supplemental Assignment.pdf"`;
    pdfSrc = `"Step1Week4.pdf"`;
  } else if (Month == 6 && (Today >= 24 && Today <= 30)) {
    weekNumber = 5;
    stepNumber = 1;
    pdfSrc = `"Step1Week5.pdf"`;

    addButton = `"STEP 1 Supplemental Assignment.pdf"`;
  } else if (
    (Month == 6 && (Today = 31)) ||
    (Month == 7 && (Today >= 1 && Today <= 6))
  ) {
    weekNumber = 6;
    stepNumber = 1;
    pdfSrc = `"Step1Week6.pdf"`;

    addButton = `"STEP 1 Supplemental Assignment.pdf"`;
  } else if (Month == 7 && (Today >= 7 && Today <= 13)) {
    weekNumber = 7;
    stepNumber = 1;
    pdfSrc = `"Step1Week7.pdf"`;

    addButton = `"STEP 1 Supplemental Assignment.pdf"`;
  } else if (Month == 7 && (Today >= 14 && Today <= 20)) {
    weekNumber = 8;
    stepNumber = 1;
    pdfSrc = `"Step1Week8.pdf"`;

    addButton = `"STEP 1 Supplemental Assignment.pdf"`;
  } else if (Month == 7 && (Today >= 21 && Today <= 27)) {
    weekNumber = 9;
    stepNumber = 2;
    pdfSrc = `"Step2Week9.pdf"`;
  } else if (
    (Month == 7 && (Today >= 28 && Today <= 30)) ||
    (Month == 8 && (Today >= 1 && Today <= 3))
  ) {
    weekNumber = 10;
    stepNumber = 2;
    pdfSrc = `"Step2Week10.pdf"`;
  } else if (Month == 8 && (Today >= 4 && Today <= 10)) {
    weekNumber = 11;
    stepNumber = 2;
    pdfSrc = `"Step2Week11.pdf"`;
  } else if (Month == 8 && (Today >= 11 && Today <= 17)) {
    weekNumber = 12;
    stepNumber = 2;
    pdfSrc = `"Step2Week12.pdf"`;
  } else if (Month == 8 && (Today >= 18 && Today <= 24)) {
    weekNumber = 13;
    stepNumber = 2;
    pdfSrc = `"Step2Week13.pdf"`;
  } else if (
    (Month == 8 && (Today >= 25 && Today <= 30)) ||
    (Month == 9 && Today == 1)
  ) {
    weekNumber = 14;
    stepNumber = 2;
    pdfSrc = `"Step2Week14.pdf"`;
  } else if (Month == 9 && (Today >= 2 && Today <= 8)) {
    weekNumber = 15;
    stepNumber = 2;
    pdfSrc = `"Step2Week15.pdf"`;
  } else if (Month == 9 && (Today >= 9 && Today <= 15)) {
    weekNumber = 16;
    stepNumber = 2;
    pdfSrc = `"Step2Week16.pdf"`;
  } else if (Month == 9 && (Today >= 16 && Today <= 22)) {
    weekNumber = 17;
    stepNumber = 3;
    pdfSrc = `"Step3Week17.pdf"`;
  } else if (Month == 9 && (Today >= 23 && Today <= 29)) {
    weekNumber = 18;
    stepNumber = 3;
    pdfSrc = `"Step3Week18.pdf"`;
  } else if (
    (Month == 9 && (Today >= 30 && Today <= 31)) ||
    (Month == 10 && (Today >= 1 && Today <= 5))
  ) {
    weekNumber = 19;
    stepNumber = 3;
    pdfSrc = `"Step3Week19.pdf"`;
  } else if (Month == 10 && (Today >= 6 && Today <= 12)) {
    weekNumber = 20;
    stepNumber = 3;
    pdfSrc = `"Step3Week20.pdf"`;
  } else if (Month == 10 && (Today >= 13 && Today <= 19)) {
    weekNumber = 21;
    stepNumber = 3;
    pdfSrc = `"Step3Week21.pdf"`;
  } else if (Month == 10 && (Today >= 20 && Today <= 26)) {
    weekNumber = 22;
    stepNumber = 4;
    pdfSrc = `"Step4Week22.pdf"`;
    addButton = `"Step4SuppReading.pdf"`;
  } else if (Month == 10 && (Today >= 27 && Today <= 30)) {
    weekNumber = 22;
    stepNumber = 4;
    pdfSrc = `"Step4Week22.pdf"`;
    addButton = `"thanksgivingCard.pdf"`;
  } else if (Month == 11 && (Today >= 1 && Today <= 3)) {
    weekNumber = 22;
    stepNumber = 4;
    pdfSrc = `"Step4Week22.pdf"`;
    addButton = `"Step4SuppReading.pdf"`;
  } else if (Month == 11 && (Today >= 4 && Today <= 10)) {
    weekNumber = 23;
    stepNumber = 4;
    pdfSrc = `"Step4Week23.pdf"`;
    addButton = `"Step4SuppReading.pdf"`;
  } else if (Month == 11 && (Today >= 11 && Today <= 17)) {
    weekNumber = 24;
    stepNumber = 4;
    pdfSrc = `"Step4Week24.pdf"`;
  } else if (Month == 11 && (Today >= 18 && Today <= 24)) {
    weekNumber = 25;
    stepNumber = 4;
    pdfSrc = `"Step4Week25.pdf"`;
    addButton = `"holidayCard.pdf"`;
  } else if (Month == 11 && (Today >= 25 && Today <= 31)) {
    weekNumber = 25;
    stepNumber = 4;
    pdfSrc = `"Step4Week25.pdf"`;
    addButton = `"Step4SuppReading.pdf"`;
  } else if (Month == 0 && (Today >= 1 && Today <= 7)) {
    weekNumber = 25;
    stepNumber = 4;
    pdfSrc = `"Step4Week25.pdf"`;
    addButton = `"newyearsCard.pdf"`;
  } else if (Month == 11 && (Today >= 8 && Today <= 14)) {
    weekNumber = 26;
    stepNumber = 4;
    pdfSrc = `"Step4Week26.pdf"`;
    addButton = `"Step4SuppReading.pdf"`;
  } else if (Month == 11 && (Today >= 15 && Today <= 21)) {
    weekNumber = 27;
    stepNumber = 4;
    pdfSrc = `"Step4Week27.pdf"`;
    addButton = `"Step4SuppReading.pdf"`;
  } else if (Month == 0 && (Today >= 22 && Today <= 28)) {
    weekNumber = 28;
    stepNumber = 4;
    pdfSrc = `"Step4Week28.pdf"`;
    addButton = `"Step4SuppReading.pdf"`;
  } else if (
    (Month == 0 && (Today >= 29 && Today <= 31)) ||
    (Month == 1 && (Today >= 1 && Today <= 4))
  ) {
    weekNumber = 29;
    stepNumber = 4;
    pdfSrc = `"Step4Week29.pdf"`;
    addButton = `"Step4SuppReading.pdf"`;
  } else if (Month == 1 && (Today >= 5 && Today <= 11)) {
    weekNumber = 30;
    stepNumber = 4;
    pdfSrc = `"Step4Week30.pdf"`;
    addButton = `"Step4SuppReading.pdf"`;
  } else if (Month == 1 && (Today >= 12 && Today <= 18)) {
    weekNumber = 31;
    stepNumber = 4;
    pdfSrc = `"Step4Week31.pdf"`;
    addButton = `"Step5PrepWeek31.pdf"`;
  } else if (Month == 1 && (Today >= 19 && Today <= 25)) {
    weekNumber = 32;
    stepNumber = 4;
    pdfSrc = `"Step4Week32.pdf"`;
    addButton = `"Step5PrepWeek31.pdf"`;
  } else if (
    (Month == 1 && (Today >= 26 && Today <= 29)) ||
    (Month == 2 && (Today >= 1 && Today <= 3))
  ) {
    weekNumber = 33;
    stepNumber = 5;
    pdfSrc = `"Step5Week33.pdf"`;
  } else if (Month == 2 && (Today >= 4 && Today <= 10)) {
    weekNumber = 34;
    stepNumber = 5;
    pdfSrc = `"Step5Week34.pdf"`;
  } else if (Month == 2 && (Today >= 11 && Today <= 17)) {
    weekNumber = 35;
    stepNumber = 6;
    pdfSrc = `"Step6Week35.pdf"`;
  } else if (Month == 2 && (Today >= 18 && Today <= 24)) {
    weekNumber = 36;
    stepNumber = 6;
    pdfSrc = `"Step6Week36.pdf"`;
  } else if (Month == 2 && (Today >= 25 && Today <= 31)) {
    weekNumber = 37;
    stepNumber = 7;
    pdfSrc = `"Step7Week37.pdf"`;
  } else if (Month == 3 && (Today >= 1 && Today <= 7)) {
    weekNumber = 38;
    stepNumber = 7;
    pdfSrc = `"Step7Week38.pdf"`;
  } else if (Month == 3 && (Today >= 8 && Today <= 14)) {
    weekNumber = 39;
    stepNumber = 8;
    pdfSrc = `"Step8Week39.pdf"`;
  } else if (Month == 3 && (Today >= 15 && Today <= 21)) {
    weekNumber = 40;
    stepNumber = 8;
    pdfSrc = `"Step8Week40.pdf"`;
  } else if (Month == 3 && (Today >= 22 && Today <= 28)) {
    weekNumber = 41;
    stepNumber = 9;
    pdfSrc = `"Step9Week41.pdf"`;
  } else if (
    (Month == 3 && (Today >= 29 && Today <= 30)) ||
    (Month == 4 && (Today >= 1 && Today <= 5))
  ) {
    weekNumber = 42;
    stepNumber = 9;
    pdfSrc = `"Step9Week42.pdf"`;
  } else if (Month == 4 && (Today >= 6 && Today <= 12)) {
    weekNumber = 43;
    stepNumber = 10;
    pdfSrc = `"Step10Week43.pdf"`;
  } else if (Month == 4 && (Today >= 13 && Today <= 19)) {
    weekNumber = 44;
    stepNumber = 10;
    pdfSrc = `"Step10Week44.pdf"`;
  } else if (Month == 4 && (Today >= 20 && Today <= 26)) {
    weekNumber = 45;
    stepNumber = 10;
    pdfSrc = `"Step10Week45.pdf"`;
  } else if (
    (Month == 4 && (Today >= 27 && Today <= 31)) ||
    (Month == 5 && (Today >= 1 && Today <= 2))
  ) {
    weekNumber = 46;
    stepNumber = 10;
    pdfSrc = `"Step10Week46.pdf"`;
  } else if (Month == 5 && (Today >= 3 && Today <= 9)) {
    weekNumber = 47;
    stepNumber = 11;
    pdfSrc = `"Step11Week47.pdf"`;
  } else if (Month == 5 && (Today >= 10 && Today <= 16)) {
    weekNumber = 48;
    stepNumber = 11;
    pdfSrc = `"Step11Week48.pdf"`;
  } else if (Month == 5 && (Today >= 17 && Today <= 23)) {
    weekNumber = 49;
    stepNumber = 12;
    pdfSrc = `"Step12Week49.pdf"`;
    addButton = `"Step12Week49FinalReview.pdf"`;
  }

  currentWeek.innerHTML = weekNumber;

  currentStepNumber.innerHTML = stepNumber;

  currentAssignButton.innerHTML =
    `<a class="bigButton" href=` +
    pdfSrc +
    ` target="_blank" rel="nofollow noopener">Download Assignment</a>`;

  addMaterialButton.innerHTML =
    `<a class="bigButton" href=` +
    addButton +
    ` target="_blank" rel="nofollow noopener">Download Document</a>`;

  currentPdf.innerHTML =
    `<object id="weeklyPdf"
  type="application/pdf"
  alt="Weekly Assignment Here"
  width="95%"
  height="375px"
  data=` +
    pdfSrc +
    `></object>`;
}
window.onload = weeklyAssignment();
