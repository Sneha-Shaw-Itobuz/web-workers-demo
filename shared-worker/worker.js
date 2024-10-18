// const mutations = {
//   ADD: "ADD",
//   SET: "SET",
// };

let browserInstances = [];
let messages = [];

onconnect = function (event) {
  const port = event.ports[0];
  browserInstances.push(port);

  // When a message is received, broadcast it to all connected tabs
  port.onmessage = function (messageEvent) {
    const data = messageEvent.data;

    // Send the message to all connected ports (other tabs)
    browserInstances.forEach((conn) => {
      conn.postMessage(data);
    });
  };

  port.onclose = function () {
    browserInstances = browserInstances.filter((conn) => conn !== port);
  };
};
