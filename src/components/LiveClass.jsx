import { JitsiMeeting } from "@jitsi/react-sdk";
import { useParams } from "react-router-dom";

const LiveClass = () => {
  const { roomName } = useParams();

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 9999 }}>
      <JitsiMeeting
        domain="meet.jit.si"
        roomName={roomName}
        configOverwrite={{ startWithVideoMuted: false }}
        userInfo={{
          displayName: "Teacher",
        }}
        getIFrameRef={(iframeRef) => {
          iframeRef.style.height = "100%";
          iframeRef.style.width = "100%";
          iframeRef.allow = "camera; microphone; fullscreen; display-capture";
        }}
      />
    </div>
  );
};

export default LiveClass;
