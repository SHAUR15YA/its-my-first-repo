 let obtainedMarks = document.querySelector('input[placeholder="ENTER YOUR MARKS"]').value;
            let totalMarks = document.querySelector('input[placeholder="ENTER YOUR MARKS"]').value;
            let result = calculatePercentage(obtainedMarks, totalMarks);
            alert("Percentage: " + result + "%");
function calculatePercentage(obtained,total) {
    if (total === 0) {
        return "Total cannot be zero";
    }
    let percentage = (obtained / total) * 100;
    return percentage.toFixed(2) + "%";
}

// Example usage:

console.log("percentage: " +
calculatePercentage(obtainedMarks, 
totalMarks));
 
