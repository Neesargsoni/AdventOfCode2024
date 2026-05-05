const fs = require('fs');

function isSafe(levels) {
    if (levels.length < 2) return true;

    const diffs = [];
    for (let i = 0; i < levels.length - 1; i++) {
        diffs.push(levels[i + 1] - levels[i]);
    }

    // Check if all differences are within [1, 3] (Increasing)
    const allIncreasing = diffs.every(d => d >= 1 && d <= 3);
    
    // Check if all differences are within [-3, -1] (Decreasing)
    const allDecreasing = diffs.every(d => d <= -1 && d >= -3);

    return allIncreasing || allDecreasing;
}


try {
    const inputData = fs.readFileSync('input.txt', 'utf8').trim().split('\n');
    
    const safeReportsCount = inputData.filter(line => {
        const levels = line.split(/\s+/).map(Number);
        return isSafe(levels);
    }).length;

    console.log(`Total Safe Reports: ${safeReportsCount}`);
} catch (error) {
    console.error("Error: Could not find or read input.txt.");
}
