import axios from "axios";
export default class emailService {
  constructor(token, cookie) {
    this.baseUrl = 'https://pse-org.my.salesforce.com/services/data/v32.0/actions/standard/emailSimple';
    this.headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Cookie': cookie
    };
  }

  sendEmail(emailBody, emailAddresses, emailSubject, senderType) {
    const data = {
      inputs: [
        {
          emailBody,
          emailAddresses,
          emailSubject,
          senderType
        }
      ]
    };

    return axios.post(this.baseUrl, data, { headers: this.headers });
  }
}