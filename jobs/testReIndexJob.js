import ClientMgr from '../clientMgr.js';
import SandboxMgr from '../sandboxMgr.js';
import emailService from '../emailService.js';


(async function () {
  try {
    const sandboxMgr = new SandboxMgr();
    const clientMgr = new ClientMgr();
    const sendemailService= new emailService();

    const usersToCreate = {
      users: [
        {
          mail: 'ns.rags@gmail.com',
          firstName: 'Rags',
          lastName: 'N',
        },
      ],
    };

    // Example usage:
const token = '00D6A0000003GNm!AQkAQDISTPdUgm.ECpEKf7X_31ynkQPNvEDOithkJ7io15_9WUXbJDU_K.MqMNbfKI5OgcWRFN3NT7WuGyGZ2YzN971GvjQA';
const cookie = 'BrowserId=4hCPM1XeEe2oI0dhwyZKkg; CookieConsentPolicy=0:1; LSKey-c$CookieConsentPolicy=0:1';

const emailSender = new emailService(token, cookie);

    //await clientMgr.createUsers(usersToCreate);
    emailSender.sendEmail('Email body', 'sanandhan@salesforce.com', 'Subject', 'CurrentUser')
  } catch (error) {}
})();
