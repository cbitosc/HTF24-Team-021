const responses = {
    "hello": ["Hi there! How can I help you today?"],
    "help": ["It's great that you are reaching out. Consider speaking to a professional."],
    "sad": ["I'm here for you. It's important to talk about your feelings."],
    "anxious": ["It's okay to feel anxious. Try to take deep breaths."],
    "thank you": ["You're welcome! Remember, it's okay to ask for help."],
    "bye": ["Take care! Remember, it's okay to seek help."],
    "stress" : ["It sounds like you're feeling stressed. Try some deep breathing. Inhale through your nose, hold for a moment, and exhale slowly.", "Stress can be tough. Would you like to try a quick exercise to feel more relaxed?"],
    "anxious" : ["Feeling anxious? Let's try a quick grounding exercise: Name five things you can see, four things you can touch, three things you hear, two you smell, and one you taste."],
    "breathing": ["Breathing exercises can help. Try breathing in for 4 seconds, holding for 4, and exhaling in 4seconds."],
    "relax" : ["Consider stretching or simple relaxation exercises. Your body and mind will thank you!"],
    "default" : ["I'm here to help. Try asking about stress relief, breathing exercises, or relaxation tips.", "You can try a breathing exercise to help you feel more grounded."],
    "resources": ["Here's a helpful resource on managing stress: https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response"],
    "mental health support": ["Here are some ways to seek mental health support: consider talking to a trusted friend, joining a support group, or reaching out to a mental health professional."],
    "emotional support": ["Emotional support can come from friends, family, or a therapist. Try expressing your feelings to someone you trust or consider joining an online community."],
    "therapy chatbot": ["As your therapy chatbot, I recommend exploring your feelings by journaling or talking about them. You can also seek guidance from a licensed therapist."],
    "mental wellness": ["To enhance your mental wellness, practice self-care, engage in regular physical activity, eat a balanced diet, and ensure you're getting enough sleep."],
    "stress relief": ["Here are some effective steps for stress relief: try deep breathing exercises, take a short walk, practice mindfulness or meditation, and consider engaging in a relaxing hobby."],
    "anxiety support": ["To manage anxiety, try grounding techniques, practice deep breathing, and challenge negative thoughts. Talking to someone about your feelings can also help."],
    "depression support": ["To manage depression, consider talking to a therapist, practicing self-care, and engaging in activities that bring joy. Remember, you're not alone."],
    "emotional wellbeing": ["For emotional wellbeing, try to maintain a balanced lifestyle, engage in hobbies, and reach out for support when needed. Practice gratitude by reflecting on positive aspects of your day."],
    "stress relief exercises": ["Here are some stress relief exercises: try deep breathing, take a short walk, practice mindfulness or meditation, and engage in a relaxing hobby."],
    "anxiety management": ["For anxiety management, consider using techniques like progressive muscle relaxation, deep breathing exercises, or keeping a worry journal to express your thoughts."],
    "stress management": ["To manage stress, identify stressors, practice time management, and engage in regular physical activity. Consider trying yoga or meditation."],
    "ptsd support": ["If you're dealing with PTSD, seek professional help, connect with support groups, and practice grounding techniques to help you stay in the present moment."],
    "self care tips": ["Self-care tips include setting aside time for hobbies, prioritizing sleep, engaging in physical activity, and making time for relaxation."],
    "anger management": ["For anger management, try taking deep breaths, counting to ten before reacting, and finding constructive outlets for your feelings, like exercising or journaling."],
    "relationship advice": ["When facing relationship challenges, communicate openly with your partner, practice active listening, and consider seeking couples therapy if needed."],
    "grief support": ["To cope with grief, allow yourself to feel your emotions, talk about your feelings with trusted friends or family, and consider joining a support group for those who have experienced loss."],
    "loneliness support": ["To combat loneliness, try reaching out to friends or family, participating in community activities, or exploring online forums and groups that share your interests."],
    "motivation": ["To boost motivation, set small, achievable goals, reward yourself for completing tasks, and surround yourself with supportive and positive people."],
    "24/7 support": ["I'm here 24/7. Whenever you're feeling overwhelmed, try deep breathing or journaling about your feelings."],
    "how to cope up with stress": ["To cope with stress, consider practicing time management, exercising regularly, and using relaxation techniques such as deep breathing or meditation."],
    "tips for anxiety relief": ["For anxiety relief, try grounding techniques like the 5-4-3-2-1 method, deep breathing, or talking to someone you trust."],
    "help for depression": ["If you're seeking help for depression, please consider talking to a therapist or counselor, and make sure you're engaging in activities that bring you joy."],
    "ways to improve mental health": ["To improve mental health, focus on building strong relationships, practicing self-care, and seeking professional help if needed."],
    "resources for mental health": ["I can help you find resources for mental wellness, such as books, websites, and support groups. What specific area are you interested in?"],
    "default": ["I'm here to help. Try asking about stress relief, breathing exercises, or relaxation tips.", "You can try a breathing exercise to help you feel more grounded."],
   "default2": ["I'm here to help. Try asking about stress relief, breathing exercises, or relaxation tips.", "You can try a breathing exercise to help you feel more grounded."],
};


const keywords = {
    hello: ["hi", "hello", "hey", "greetings", "hola", "hi there"],
    help: ["help", "assist", "support", "guidance", "aid"],
    sad: ["sad", "down", "unhappy", "depressed", "blue", "low"],
    anxious: ["anxious", "worried", "nervous", "scared", "fear", "anxiety"],
    "thank you" : ["thank you", "thanks", "appreciate", "gratitude"],
    bye: ["bye", "goodbye", "see you", "later", "farewell"],
    "mental health support" : ["mental health support", "mental help", "therapy", "mental care"],
    "emotional support": ["emotional support", "emotional help", "emotional care", "support"],
    "therapy chatbot": ["therapy chatbot", "therapy bot", "chatbot for therapy", "therapy assistance"],
    "mental wellness": ["mental wellness", "mental health", "wellness", "healthy mind"],
    "stress relief": ["stress relief", "reduce stress", "calm down", "relaxation", "ease stress"],
    "anxiety support": ["anxiety support", "anxiety help", "anxious support", "help for anxiety"],
    "depression support": ["depression support", "depression help", "depressed support", "help for depression"],
    "emotional wellbeing": ["emotional wellbeing", "emotional health", "wellbeing", "healthy emotions"],
    "stress relief exercises": ["stress relief exercises", "relaxing exercises", "stress exercises"],
    "anxiety management": ["anxiety management", "manage anxiety", "control anxiety"],
    "stress management": ["stress management", "manage stress", "reduce stress", "stress control"],
    "ptsd support": ["ptsd support", "ptsd help", "post-traumatic stress support", "ptsd"],
    "self care tips": ["self care tips", "self care", "take care of myself", "self-care ideas"],
    "anger management": ["anger management", "manage anger", "anger control", "anger"],
    "relationship advice": ["relationship advice", "relationship help", "couples advice", "relationship support"],
    "grief support": ["grief support", "support for grief", "grief help", "loss support"],
    "loneliness support": ["loneliness support", "loneliness help", "feeling lonely", "combat loneliness"],
    motivation: ["motivation", "inspiration", "encourage me", "get motivated"],
    "24/7 support": ["24/7 support", "always available", "always here", "here 24/7"],
    "how to cope up with stress": ["how to cope up with stress", "cope with stress", "stress coping", "deal with stress"],
    "tips for anxiety relief": ["tips for anxiety relief", "anxiety relief", "reduce anxiety"],
    "help for depression": ["help for depression", "depression assistance", "depression help"],
    "ways to improve mental health": ["ways to improve mental health", "mental health improvement", "improve mental health"],
    "resources for mental health": ["resources for mental health", "mental health resources", "mental help resources"],
    "relief": ["relief"],
    default: ["I'm here to help", "help"]
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

function processUserMessage() {
    const userInput = document.getElementById("userInput").value.toLowerCase();
    const chatbox = document.getElementById("chatbox");

    // Display user message
    const userMessage = document.createElement("p");
    userMessage.className = "user-message";
    userMessage.textContent = userInput;
    chatbox.appendChild(userMessage);

    // we are analysing sentiments using this function
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

// List of relaxation and mindfulness exercises to give one random excercise to user when he/she clicks "excercise" button
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