document.getElementById('calculatorBtn').addEventListener('click', calculateLoan);

// function calculateLoan(){

//     const loanAmount = parseFloat(document.getElementById("loanAmountInput").value);
//     const interestRate = parseFloat(document.getElementById("loanAmountInput").value);
//     const loanTerm = parseFloat(document.getElementById("loanTermInput").value);

//     if(isNaN(loanAmount) || isNaN(interestRate ) || isNan(loanTerm)){
//         alert("Enter valid Info Only");

//     }

//     const monthlyInterest = interestRate /100/12;
//     const totalPayments = loanTermInput ;
//     const monthlyPayments = (loanAmount * monthlyInterest)/(1-Math.pow(1+ monthlyInterest, -totalPayments))
//     const totalInterest = (monthlyPayments* totalInterest)-loanAmount;
// }
function calculateLoan() {
    const loanAmount = parseFloat(document.getElementById("loanAmountInput").value);
    const interestRate = parseFloat(document.getElementById("interestRateInput").value);
    const loanTerm = parseFloat(document.getElementById("loanTermInput").value);

    // Check if any input is NaN
    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
        alert("Enter valid information only.");
        return; // Exit function if inputs are invalid
    }

    const monthlyInterest = interestRate / 100 / 12;
    const totalPayments = loanTerm; // Assuming loan term is in months
    const monthlyPayments = (loanAmount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -totalPayments));
    const totalInterest = monthlyPayments * totalPayments - loanAmount;

    // Call function to display results
    displayResult(monthlyPayments, totalInterest);
}
function displayResult(monthlyPayments, totalInterest) {
    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = `
        <p><strong>Monthly Payment:</strong> $${monthlyPayments.toFixed(2)}</p>
        <p><strong>Total Interest:</strong> $${totalInterest.toFixed(2)}</p>
    `;
}


// function defaultResult(monthlyPayments, totalInterest){
    
//     const resultDiv = document.getElementById('result');

//     resultDiv.innerHTML = `
//     <p><strong>  Monthly Payment:${monthlyPayments.toFixed(2)} </p> </strong>
//     <p><strong> Total Interest:${totalInterest.toFixed(2)} </p> </strong>
//     `;
// }