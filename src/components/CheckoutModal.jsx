import React, { useState } from 'react';
import { X, CreditCard, Lock, ShieldCheck, AlertCircle } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useCart } from '../context/CartContext';

// ============================================
// STRIPE SETUP INSTRUCTIONS:
// ============================================
// 1. Go to https://stripe.com and create an account
// 2. Get your PUBLISHABLE key from Developers > API Keys
//    - Use TEST key (starts with pk_test_) for development
//    - Use LIVE key (starts with pk_live_) for production
// 3. Replace the key below:
// ============================================

const STRIPE_PUBLISHABLE_KEY = 'pk_test_YOUR_STRIPE_PUBLISHABLE_KEY';

// Initialize Stripe (only if configured)
const stripePromise = STRIPE_PUBLISHABLE_KEY.includes('YOUR_STRIPE') 
  ? null 
  : loadStripe(STRIPE_PUBLISHABLE_KEY);

// Card element styling
const cardStyle = {
  style: {
    base: {
      color: '#1a1a1a',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#9ca3af',
      },
    },
    invalid: {
      color: '#ef4444',
      iconColor: '#ef4444',
    },
  },
};

// Checkout Form Component
function CheckoutForm({ onSuccess, onCancel, total }) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [billingDetails, setBillingDetails] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleInputChange = (e) => {
    setBillingDetails(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);
    setError(null);

    // In production, you would:
    // 1. Call your backend to create a PaymentIntent
    // 2. Use the client_secret from that response
    // 3. Confirm the payment with Stripe
    
    // For demo purposes, we'll simulate the flow
    try {
      const cardElement = elements.getElement(CardElement);
      
      // Create payment method
      const { error: pmError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: billingDetails.name,
          email: billingDetails.email,
          address: {
            line1: billingDetails.address,
            city: billingDetails.city,
            state: billingDetails.state,
            postal_code: billingDetails.zip,
          },
        },
      });

      if (pmError) {
        setError(pmError.message);
        setProcessing(false);
        return;
      }

      // In production: Send paymentMethod.id to your server
      // Your server creates a PaymentIntent and confirms it
      console.log('Payment Method created:', paymentMethod.id);
      console.log('Billing Details:', billingDetails);
      console.log('Total:', total);

      // Simulate successful payment
      // In production, this would be handled by your backend
      setTimeout(() => {
        setProcessing(false);
        onSuccess(paymentMethod.id);
      }, 1500);

    } catch (err) {
      setError('An unexpected error occurred.');
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Billing Details */}
      <div className="space-y-4">
        <h3 className="font-bold text-gray-900">Billing Information</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <input
              type="text"
              name="name"
              required
              value={billingDetails.name}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
              placeholder="John Doe"
            />
          </div>
          
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
            <input
              type="email"
              name="email"
              required
              value={billingDetails.email}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
              placeholder="john@example.com"
            />
          </div>
          
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
            <input
              type="text"
              name="address"
              required
              value={billingDetails.address}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
              placeholder="123 Main St"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
            <input
              type="text"
              name="city"
              required
              value={billingDetails.city}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
              placeholder="Houston"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
              <input
                type="text"
                name="state"
                required
                value={billingDetails.state}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                placeholder="TX"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ZIP *</label>
              <input
                type="text"
                name="zip"
                required
                value={billingDetails.zip}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                placeholder="77001"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Card Details */}
      <div className="space-y-4">
        <h3 className="font-bold text-gray-900 flex items-center gap-2">
          <CreditCard size={20} />
          Card Information
        </h3>
        
        <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
          <CardElement options={cardStyle} />
        </div>
        
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Lock size={14} />
          <span>Your payment info is encrypted and secure</span>
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3 text-red-700">
          <AlertCircle size={20} />
          <span>{error}</span>
        </div>
      )}

      {/* Order Summary */}
      <div className="bg-gray-100 rounded-lg p-4">
        <div className="flex justify-between items-center text-lg font-bold">
          <span>Total</span>
          <span className="text-primary">${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={!stripe || processing}
          className="flex-1 bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {processing ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Processing...
            </>
          ) : (
            <>
              <Lock size={18} />
              Pay ${total.toFixed(2)}
            </>
          )}
        </button>
      </div>
    </form>
  );
}

// Demo Checkout Form (when Stripe is not configured)
function DemoCheckoutForm({ onSuccess, onCancel, total }) {
  const [processing, setProcessing] = useState(false);
  const [billingDetails, setBillingDetails] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
  });

  const handleInputChange = (e) => {
    let value = e.target.value;
    
    // Format card number with spaces
    if (e.target.name === 'cardNumber') {
      value = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
      if (value.length > 19) value = value.slice(0, 19);
    }
    
    // Format expiry
    if (e.target.name === 'expiry') {
      value = value.replace(/\D/g, '');
      if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4);
      }
    }
    
    // Format CVC
    if (e.target.name === 'cvc') {
      value = value.replace(/\D/g, '').slice(0, 4);
    }

    setBillingDetails(prev => ({
      ...prev,
      [e.target.name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProcessing(true);
    
    console.log('🔒 Demo Payment Processing');
    console.log('Billing Details:', billingDetails);
    console.log('Total:', total);
    console.log('To enable real payments, add your Stripe key to CheckoutModal.jsx');
    
    setTimeout(() => {
      setProcessing(false);
      onSuccess('demo_payment_' + Date.now());
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-yellow-800 text-sm">
        <strong>Demo Mode:</strong> No real charges will be made. Configure Stripe to accept real payments.
      </div>

      {/* Billing Details */}
      <div className="space-y-4">
        <h3 className="font-bold text-gray-900">Billing Information</h3>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input
            type="text"
            name="name"
            required
            value={billingDetails.name}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
            placeholder="John Doe"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input
            type="email"
            name="email"
            required
            value={billingDetails.email}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
            placeholder="john@example.com"
          />
        </div>
      </div>

      {/* Card Details */}
      <div className="space-y-4">
        <h3 className="font-bold text-gray-900 flex items-center gap-2">
          <CreditCard size={20} />
          Card Information
        </h3>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Card Number *</label>
          <input
            type="text"
            name="cardNumber"
            required
            value={billingDetails.cardNumber}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none font-mono"
            placeholder="4242 4242 4242 4242"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Expiry *</label>
            <input
              type="text"
              name="expiry"
              required
              value={billingDetails.expiry}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none font-mono"
              placeholder="MM/YY"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">CVC *</label>
            <input
              type="text"
              name="cvc"
              required
              value={billingDetails.cvc}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none font-mono"
              placeholder="123"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Lock size={14} />
          <span>Demo mode - no real charges</span>
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-gray-100 rounded-lg p-4">
        <div className="flex justify-between items-center text-lg font-bold">
          <span>Total</span>
          <span className="text-primary">${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={processing}
          className="flex-1 bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {processing ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Processing...
            </>
          ) : (
            <>
              <Lock size={18} />
              Pay ${total.toFixed(2)}
            </>
          )}
        </button>
      </div>
    </form>
  );
}

// Main Checkout Modal Component
export default function CheckoutModal({ isOpen, onClose }) {
  const { items, getCartTotal, clearCart } = useCart();
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const total = getCartTotal();
  const tax = total * 0.0825; // 8.25% Texas tax
  const shipping = total >= 500 ? 0 : 49.99;
  const grandTotal = total + tax + shipping;

  const handleSuccess = (paymentMethodId) => {
    const newOrderId = 'ORD-' + Date.now().toString(36).toUpperCase();
    setOrderId(newOrderId);
    setPaymentSuccess(true);
    clearCart();
  };

  const handleClose = () => {
    setPaymentSuccess(false);
    setOrderId('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center gap-3">
            <ShieldCheck size={24} className="text-green-600" />
            <h2 className="text-xl font-bold">Secure Checkout</h2>
          </div>
          <button 
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {paymentSuccess ? (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck size={40} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h3>
              <p className="text-gray-600 mb-4">Thank you for your order</p>
              <div className="bg-gray-100 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-500">Order ID</p>
                <p className="text-xl font-mono font-bold">{orderId}</p>
              </div>
              <p className="text-sm text-gray-500 mb-6">
                A confirmation email will be sent to your email address.
              </p>
              <button
                onClick={handleClose}
                className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-dark transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              {/* Order Items Summary */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Order Summary ({items.length} items)</h3>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-gray-600">{item.name} × {item.quantity}</span>
                      <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>{shipping === 0 ? <span className="text-green-600">FREE</span> : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax (8.25%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Payment Form */}
              {stripePromise ? (
                <Elements stripe={stripePromise}>
                  <CheckoutForm 
                    onSuccess={handleSuccess} 
                    onCancel={handleClose}
                    total={grandTotal}
                  />
                </Elements>
              ) : (
                <DemoCheckoutForm 
                  onSuccess={handleSuccess} 
                  onCancel={handleClose}
                  total={grandTotal}
                />
              )}
            </>
          )}
        </div>

        {/* Security Footer */}
        <div className="border-t border-gray-200 p-4 bg-gray-50 rounded-b-2xl">
          <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Lock size={12} />
              <span>256-bit SSL</span>
            </div>
            <div className="flex items-center gap-1">
              <ShieldCheck size={12} />
              <span>PCI Compliant</span>
            </div>
            <div className="flex items-center gap-1">
              <CreditCard size={12} />
              <span>Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
