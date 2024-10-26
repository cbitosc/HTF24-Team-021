// Responses with synonym matching and sentiment-based responses
const responses = {
    hello: ["Hi there! I'm here to support you. How are you feeling?", "Hello! How can I assist you today?"],
    stress: ["It sounds like you're feeling stressed. Try some deep breathing. Inhale through your nose, hold for a moment, and exhale slowly.", "Stress can be tough. Would you like to try a quick exercise to feel more relaxed?"],
    anxious: ["Feeling anxious? Let's try a quick grounding exercise: Name five things you can see, four things you can touch, three things you hear, two you smell, and one you taste."],
    breathing: ["Breathing exercises can help. Try breathing in for 4 seconds, holding for 4, and exhaling for 4."],
    relax: ["Consider stretching or simple relaxation exercises. Your body and mind will thank you!"],
    default: ["I'm here to help. Try asking about stress relief, breathing exercises, or relaxation tips.", "You can try a breathing exercise to help you feel more grounded."],
    resources: ["Here's a helpful resource on managing stress: https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response"]
};

// Synonyms for basic keyword recognition
const keywords = {
    hello: ["hi", "hello", "hey", "greetings"],
    stress: ["stress", "stressed", "overwhelmed", "tense"],
    anxious: ["anxiety", "anxious", "worried", "nervous"],
    breathing: ["breath", "breathing", "inhale", "exhale"],
    relax: ["relax", "calm", "peaceful", "rest"]
};

// Simple sentiment analysis function (very basic)
function analyzeSentiment(message) {
    const positiveWords = ["good", "happy", "great", "okay", "calm"];
    const negativeWords = ["bad", "sad", "stressed", "anxious", "overwhelmed"];

    let score = 0;
    message.split(" ").forEach(word => {
        if (positiveWords.includes(word)) score += 1;
        if (negativeWords.includes(word)) score -= 1;
    });

    return score > 0 ? "positive" : score < 0 ? "negative" : "neutral";
}

// Session tracking for user interactions
let userSession = [];

// Function to match user input with a keyword or synonym
function matchInput(input) {
    input = input.toLowerCase();
    for (const key in keywords) {
        if (keywords[key].some(word => input.includes(word))) return key;
    }
    return "default";
}

// Function to process user message and suggest responses based on sentiment
function processUserMessage() {
    const userInput = document.getElementById("userInput").value.toLowerCase();
    const chatbox = document.getElementById("chatbox");

    // Display user message
    const userMessage = document.createElement("p");
    userMessage.className = "user-message";
    userMessage.textContent = userInput;
    chatbox.appendChild(userMessage);

    // Sentiment Analysis
    const sentiment = analyzeSentiment(userInput);
    const matchedKey = matchInput(userInput);

    // Select a personalized response based on sentiment
    let response = responses[matchedKey][0];
    if (sentiment === "positive") {
        response = "I'm glad to hear that you're feeling positive! Let me know if you'd like any resources.";
    } else if (sentiment === "negative") {
        response = "I'm sorry to hear that you're feeling down. Remember, you're not alone, and I'm here to help with relaxation techniques.";
    }

    // Display chatbot response
    const botMessage = document.createElement("p");
    botMessage.className = "bot-message";
    botMessage.textContent = response;
    chatbox.appendChild(botMessage);

    // Track session history
    userSession.push({ user: userInput, bot: response });

    // Clear user input
    document.getElementById("userInput").value = "";
    chatbox.scrollTop = chatbox.scrollHeight;
}

// List of relaxation and mindfulness exercises
const exercises = [
    "Inhale for 4 seconds, hold for 4 seconds, and exhale for 4 seconds. Repeat a few times to feel more relaxed.",
    "Try the 5-4-3-2-1 grounding exercise: Name five things you see, four things you can touch, three things you hear, two you smell, and one you taste.",
    "Take a moment to stretch gently. Reach your arms up to the sky, stretch to each side, and take deep breaths while stretching.",
    "Close your eyes and take five slow, deep breaths, focusing on each breath. Imagine inhaling calmness and exhaling stress.",
    "Write down three things you are grateful for today. This can help shift your focus to positive aspects in life.",
    "Practice progressive muscle relaxation: Starting from your toes, tense each muscle group for a few seconds, then relax. Move up your body to the head.",
    "Do a simple neck stretch: Gently tilt your head to the right, bringing your ear toward your shoulder. Hold for a few seconds, then switch sides.",
    "Try visualizing a calming place. Close your eyes and imagine a peaceful scene – a beach, a forest, or any place where you feel relaxed."
];

// Function to suggest a random exercise
function suggestExercise() {
    const chatbox = document.getElementById("chatbox");

    // Select a random exercise
    const randomExercise = exercises[Math.floor(Math.random() * exercises.length)];

    // Display the selected exercise in the chatbox
    const exerciseSuggestion = document.createElement("p");
    exerciseSuggestion.className = "bot-message";
    exerciseSuggestion.textContent = randomExercise;
    chatbox.appendChild(exerciseSuggestion);

    // Auto-scroll to the latest message
    chatbox.scrollTop = chatbox.scrollHeight;
}


// Function to handle Enter key press for message sending
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        processUserMessage();
    }
}
