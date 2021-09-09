import "./App.css";
import { ChatEngine } from "react-chat-engine";
import { ChatFeed } from "./components/ChatFeed";

function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID="28b25b90-a10d-4e5a-8c23-74f7889769ff"
      userName="nur"
      userSecret="12341234"
      renderChatFeed={(chatAppProps) => (
        <ChatFeed {...chatAppProps} />
      )}
    />
  );
}

export default App;
