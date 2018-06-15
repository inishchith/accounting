const nodemailer = require('nodemailer');
const frappe = require('frappejs');

module.exports = {
  'sendMail': async function(mailDetails) {
    const account = await frappe.getDoc('EmailAccount', mailDetails.fromEmailAddress);
    mailDetails = {
      from: account.email,
      to: mailDetails.toEmailAddress,
      subject: 'Hey',
      text: 'Hey',
    };
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: account.email,
        pass: account.password,
      }
    });
    return transporter.sendMail(mailDetails);
  }
};
