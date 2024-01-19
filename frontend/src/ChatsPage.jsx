/*in advance fromat*/
// import React from 'react';
// import {
//   MultiChatSocket,
//   MultiChatWindow,
//   useMultiChatLogic,
// } from 'react-chat-engine-advanced';
// const ChatsPage = (props) => {
//   const chatProps = useMultiChatLogic(
//     'Your ID',
//     props.user.username,
//     props.user.secret
//   );
//   return (
//     <div style={{ height: '100vh' }}>
//       <MultiChatSocket {...chatProps} />
//       <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
//     </div>
//   );
// };

// export default ChatsPage;

/*in pretty fromat*/
import React from 'react';
import { PrettyChatWindow } from 'react-chat-engine-pretty';
const ChatsPage = (props) => {
  return (
    <PrettyChatWindow
      projectId="Your ID"
      username={props.user.username}
      secret={props.user.secret}
      style={{ height: '500vh' }}
    />
  );
};

export default ChatsPage;
