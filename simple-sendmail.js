module.exports = function(RED) {
  function SimpleSendmail(config) {
    var nodemailer = require("nodemailer");
    RED.nodes.createNode(this, config);
    var node = this;
    node.on("input", function(msg) {
      node.status({ fill: "blue", shape: "dot", text: "Sending..." });
      try {
        var transporter = nodemailer.createTransport({
          host: msg.sendmail.host,
          port: msg.sendmail.port,
          auth: {
            user: msg.sendmail.user,
            pass: msg.sendmail.pass
          }
        });
        var mailOptions = {
          from: msg.sendmail.from,
          to: msg.sendmail.to,
          subject: msg.sendmail.subject,
          text: msg.sendmail.body
        };
        transporter.sendMail(mailOptions, function(error, info){
          if(error){
            msg.payload = error;
            node.status({ fill: "red", shape: "dot", text: "error" });
          }else{
            msg.payload = info;
            node.status({});
          }
          node.send(msg);
        });
      }
      catch (e) {
        msg.payload = e;
        node.status({ fill: "red", shape: "dot", text: "error" });
        node.send(msg);
      }
    });
  }
  RED.nodes.registerType("simple-sendmail", SimpleSendmail);
}