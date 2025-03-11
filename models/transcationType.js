import mongoose from 'mongoose';

const paymentTypeSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    typeOfPayment: {
        type: String,
        required: true
    }
});

const PaymentType = mongoose.model('PaymentType', paymentTypeSchema);

export default PaymentType;
