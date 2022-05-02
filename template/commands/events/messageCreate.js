module.exports = {
  name: "messageCreate",
  execute(message) {
    console.log({ message });
    console.log({ message: message.content });
  },
};
