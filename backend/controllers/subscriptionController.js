import { emailValidator } from '../helpers/validator.js';
import subscription from '../models/subscriptionModel.js';

export const createSubscription = async (req, res) => {
    try {
        const { email } = req.body;

        const existingSubscription = await subscription.findOne({ email });

        const emailValid = emailValidator(email);
        if (!emailValid) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email format.',
            })
        }
        
        if (existingSubscription) {
            return res.status(400).json({
                success: false,
                message: 'Email already subscribed.',
            });
        }

        const newSubscription = new subscription({
            email
        });

        await newSubscription.save();

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