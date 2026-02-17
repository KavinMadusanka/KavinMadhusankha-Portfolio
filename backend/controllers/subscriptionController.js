import { emailValidator } from '../helpers/validator.js';
import subscription from '../models/subscriptionModel.js';

export const createSubscription = async (req, res) => {
    try {
        const { email } = req.body;

        //validate email address
        const emailValid = emailValidator(email);
        if (!emailValid) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email format.',
            })
        }

        //check if the email already exists in the database
        const existingSubscription = await subscription.findOne({ email });

        
        if (existingSubscription) {
            return res.status(400).json({
                success: false,
                message: 'You already subscribed.',
            });
        }

        const newSubscription =await new subscription({
            email
        }).save();

        res.status(201).json({
            success: true,
            message: 'Subscribed successfully.',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Side Error.",
        })
    }
}