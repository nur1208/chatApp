import "./App.css";
import { ChatEngine } from "react-chat-engine";
import { ChatFeed } from "./components/ChatFeed";
import { Login } from "./components/Login";

function App() {
  if (!localStorage.getItem("username")) return <Login />;
  return (
    <ChatEngine
      height="100vh"
      projectID="28b25b90-a10d-4e5a-8c23-74f7889769ff"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => (
        <ChatFeed {...chatAppProps} />
      )}
    />
  );
}

export default App;
