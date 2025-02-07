import React, { Component } from 'react';

export class Chat extends Component {
  componentDidMount() {
    (function initKommunicate(d, m) {
      const kommunicateSettings = {
        appId: '1724a3eb19be21181d4a35a83815af99e',
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };

      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://widget.kommunicate.io/v2/kommunicate.app';

      const head = document.getElementsByTagName('head')[0];
      head.appendChild(script);

      window.kommunicate = m;
      m._globals = kommunicateSettings; // eslint-disable-line no-param-reassign, no-underscore-dangle
    }(document, window.kommunicate || {}));
  }

  render() {
    return <div />;
  }
}

export default Chat;