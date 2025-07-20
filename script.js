document.addEventListener('DOMContentLoaded', () => {
    const askButton = document.getElementById('askButton');
    const questionInput = document.getElementById('question');
    const answerDisplay = document.getElementById('answer');
    const apiKeyInput = document.getElementById('apiKey');

    const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

    askButton.addEventListener('click', getAnswer);

    async function getAnswer() {
        const question = questionInput.value.trim();
        const apiKey = apiKeyInput.value.trim();

        if (!apiKey) {
            alert('Please enter your OpenAI API key.');
            return;
        }

        if (!question) {
            alert('Please ask a question.');
            return;
        }

        // Disable button and show thinking state
        askButton.disabled = true;
        answerDisplay.style.opacity = 0.5;
        answerDisplay.textContent = '...';

        try {
            const response = await fetch(OPENAI_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [
                        {
                            role: 'system',
                            content: 'You are a classic Magic 8-Ball. Provide short, cryptic, classic 8-ball style answers to yes-or-no questions. Your answers must be one of the following: "It is certain.", "It is decidedly so.", "Without a doubt.", "Yes – definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don\'t count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."'
                        },
                        {
                            role: 'user',
                            content: question
                        }
                    ],
                    max_tokens: 15,
                    temperature: 0.7,
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`OpenAI API Error: ${response.status} ${response.statusText} - ${errorData.error.message}`);
            }

            const data = await response.json();
            const aiAnswer = data.choices[0].message.content.trim();
            
            answerDisplay.textContent = aiAnswer;

        } catch (error) {
            console.error('Error fetching answer:', error);
            answerDisplay.textContent = 'Error';
            alert(`An error occurred: ${error.message}`);
        } finally {
            // Re-enable button and restore opacity
            askButton.disabled = false;
            answerDisplay.style.opacity = 1;
        }
    }
});