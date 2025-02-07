module.exports = function(args, session) {
    // Set flag so that the next input is treated as a response.
    session.awaitingHelloResponse = true;
    // Return output with suppressPrompt set to true so that the usual prompt is not re‑displayed.
    return { output: "hello world\nPlease type 'hello' to continue...", suppressPrompt: true };
  };
  
