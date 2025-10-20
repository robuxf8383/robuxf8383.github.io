<!DOCTYPE html>
<html>
<head>
  <title>GPT Demo</title>
</head>
<body>
  <h2>GPT Prompt</h2>
  <textarea id="prompt" rows="5" cols="40" placeholder="Type your prompt here"></textarea><br><br>

  <label for="temperature">Temperature (0–1): </label>
  <input type="number" id="temperature" min="0" max="1" step="0.1" value="0.7"><br><br>

  <button onclick="generate()">Generate</button>

  <h3>Output:</h3>
  <pre id="output"></pre>

  <script>
    async function generate() {
      const prompt = document.getElementById("prompt").value;
      const temperature = parseFloat(document.getElementById("temperature").value);

      const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer YOUR_API_KEY_HERE"
        },
        body: JSON.stringify({
          model: "text-davinci-003",
          prompt: prompt,
          temperature: temperature,
          max_tokens: 150
        })
      });

      const data = await response.json();
      document.getElementById("output").innerText = data.choices[0].text;
    }
  </script>
</body>
</html>
