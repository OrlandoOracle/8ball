# AI Magic 8-Ball

A simple web-based Magic 8-Ball that uses the OpenAI API to provide answers to your yes-or-no questions.

## How to Use (Live Version on GitHub Pages)

1.  **Get an OpenAI API Key:**
    - If you don't have one, sign up at [OpenAI](https://platform.openai.com/signup) and create an API key in your dashboard.

2.  **Enter Your Details:**
    - Paste your OpenAI API key into the designated field on the web page. Your key is only used for the current session and is not stored.
    - Type your yes-or-no question into the question box.

3.  **Ask the Ball:**
    - Click the "Ask the Ball" button and wait for your answer to appear inside the 8-ball.

## How to Use (Local Development)

1.  **Get an OpenAI API Key:**
    - If you don't have one, sign up at [OpenAI](https://platform.openai.com/signup) and create an API key in your dashboard.

2.  **Configure the Application:**
    - In the project folder, open the `config.js` file.
    - Paste your OpenAI API key inside the quotes for the `API_KEY` variable.
    - **Note:** The `config.js` file is listed in `.gitignore`, so your secret key will not be committed to GitHub.

3.  **Run the Application:**
    - Open the `index.html` file in your web browser.
