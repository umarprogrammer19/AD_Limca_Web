import { useEffect } from "react";

const Chat = () => {
  useEffect(() => {
    (function (d, m) {
      var kommunicateSettings = {
        appId: "3cb0f8262514eb1c171dc55a51243efae",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      (window as any).kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, (window as any).kommunicate || {});
  }, []);

  return null;
};

export default Chat;
