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

    //await clientMgr.createUsers(usersToCreate);
    sendemailService.sendHtmlEmail('sanandhan@salesforce.com', 'Provision Failure Notification', 'Hello from my module');
  } catch (error) {}
})();
