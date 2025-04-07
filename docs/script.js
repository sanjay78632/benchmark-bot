// script.js
fetch('https://raw.githubusercontent.com/sanjay78632/benchmark-bot/refs/heads/benchmark-history/results/2025-04-07_01-39-42/benchmark_result.json')
  .then(res => res.json())
  .then(data => {
    const result = data.results[0];
    const container = document.getElementById('results');

    container.innerHTML = `
      <h2>Benchmark Results</h2>
      <p><strong>Command:</strong> ${result.command}</p>
      <p><strong>Mean Time:</strong> ${result.mean.toFixed(4)} seconds</p>
      <p><strong>Std Dev:</strong> ${result.stddev.toFixed(4)}</p>
      <p><strong>Min:</strong> ${result.min.toFixed(4)}</p>
      <p><strong>Max:</strong> ${result.max.toFixed(4)}</p>
      <p><strong>User Time:</strong> ${result.user.toFixed(4)}</p>
      <p><strong>System Time:</strong> ${result.system.toFixed(4)}</p>
    `;
  })
  .catch(error => {
    console.error("Error loading benchmark results:", error);
    document.getElementById('results').textContent = "Failed to load results.";
  });
