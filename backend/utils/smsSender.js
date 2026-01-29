const twilio = require('twilio');
const dotenv = require('dotenv');

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

const sendWelcomeSMS = async (name, phoneNumber) => {
    try {
        // Normalize Indian numbers to E.164 (+91XXXXXXXXXX)
        let digits = (phoneNumber || '').trim().replace(/[^\d+]/g, '');
        if (digits.startsWith('+')) {
            // Already in E.164, keep as-is
        } else {
            // Remove leading 0 if present
            if (digits.length === 11 && digits.startsWith('0')) {
                digits = digits.slice(1);
            }
            // If it's 10 digits, assume Indian mobile and prefix +91
            if (digits.length === 10) {
                digits = `+91${digits}`;
            } else if (digits.startsWith('91') && digits.length === 12) {
                digits = `+${digits}`;
            } else {
                // Fallback: enforce +91 if not clearly E.164
                digits = `+91${digits}`;
            }
        }
        const formattedPhone = digits;

        const message = `रामायण रिसर्च काउंसिल परिवार में आपका स्वागत है`;

        const response = await client.messages.create({
            body: message,
            from: twilioPhoneNumber,
            to: formattedPhone
        });

        console.log(`SMS sent successfully to ${formattedPhone}. SID: ${response.sid}`);
        return { success: true, sid: response.sid };
    } catch (error) {
        console.error(`Error sending SMS to ${phoneNumber}:`, error.message);
        // We don't want to break the registration flow if SMS fails, so we return false but don't throw
        return { success: false, error: error.message };
    }
};

module.exports = { sendWelcomeSMS };
