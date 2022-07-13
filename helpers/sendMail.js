const { MAILJET_PUBLIC_KEY, MAILJET_PRIVATE_KEY, SENDER_EMAIL, SENDER_NAME } =
  process.env;



const mailjet = require ('node-mailjet')
	.connect(MAILJET_PUBLIC_KEY,
        MAILJET_PRIVATE_KEY);

const sendMail = async (Subject, content, recipient) => {
    await mailjet.post("send").request({
        FromEmail: SENDER_EMAIL,
        FromName: SENDER_NAME,
        Subject: Subject,
        "html-part": content,
        recipients: [{Email: recipient}],


    });

};

module.exports = sendMail