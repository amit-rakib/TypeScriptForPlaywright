function simplePyramid(rows: number): void {
    for (let i = 1; i <= rows; i++) {
        console.log(" ".repeat(rows - i) + "*".repeat(2 * i - 1));
    }
}

// Example usage
simplePyramid(5);