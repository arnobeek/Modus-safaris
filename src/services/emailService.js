import emailjs from '@emailjs/browser';

// Constants for EmailJS
// These should be replaced with your actual service details
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const initEmailService = () => {
    if (PUBLIC_KEY) {
        emailjs.init(PUBLIC_KEY);
    }
};

/**
 * Sends an email using EmailJS
 * @param {Object} formElement - The HTML form element reference
 * @returns {Promise} - The EmailJS promise
 */
export const sendBookingInquiry = (formElement) => {
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.warn('EmailJS environment variables are missing');
        // Return a mock success for development if keys are missing
        // In a real scenario, you might want to throw an error
        /* 
           To test without keys, uncomment the line below:
           return new Promise(resolve => setTimeout(resolve, 1000));
        */
        // return new Promise(resolve => setTimeout(resolve, 1000));
        return Promise.reject(new Error('EmailJS configuration missing'));
    }

    return emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formElement, PUBLIC_KEY);
};

// Alternative method if passing raw data object instead of form ref
export const sendBookingData = (data) => {
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.warn('EmailJS environment variables are missing');
        // Mock success for verification
        // return new Promise(resolve => setTimeout(resolve, 1000));
        return Promise.reject(new Error('EmailJS configuration missing'));
    }

    return emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY);
}
