

import { useQuery } from '@tanstack/react-query';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { toast } from 'react-toastify';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const stripePromise = loadStripe(import.meta.env.VITE_payment_key);

const PayrollRequests = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedPayroll, setSelectedPayroll] = useState(null);

  const { data: payrollRequests = [], refetch } = useQuery({
    queryKey: ['payroll-requests'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin/payroll-requests');
      return res.data;
    }
  });

  const CheckoutForm = ({ payroll, onSuccess }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!stripe || !elements) return;
      setLoading(true);

      try {
        const { data: clientSecretData } = await axiosSecure.post('/create-salary-payment-intent', {
          amountInCents: payroll.salary * 100,
        });

        const card = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: 'card',
          card,
        });

        if (error) {
          toast.error(error.message);
          setLoading(false);
          return;
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
          clientSecretData.clientSecret,
          { payment_method: paymentMethod.id }
        );

        if (confirmError) {
          toast.error(confirmError.message);
          setLoading(false);
          return;
        }

        if (paymentIntent.status === 'succeeded') {
          await axiosSecure.patch(`/payroll/${payroll._id}/pay`, {
            transactionId: paymentIntent.id,
          });
          toast.success('Payment successful!');
          onSuccess();
        }
      } catch (err) {
        console.error(err);
        toast.error('Payment failed!');
      }

      setLoading(false);
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <CardElement />
        <button type="submit" className="btn btn-success" disabled={!stripe || loading}>
          {loading ? 'Processing...' : 'Confirm Payment'}
        </button>
      </form>
    );
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* <h2 className="text-2xl font-bold mb-4">Payroll Requests</h2> */}
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">Payroll Requests</h2>
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="table table-zebra w-full">
          <thead className='bg-primary text-white'>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Month</th>
              <th>Year</th>
              <th>Salary</th>
              <th>Payment Date</th>
              <th>Status</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            {payrollRequests.map((req) => (
              <tr key={req._id}>
                <td>{req.name}</td>
                <td>{req.email}</td>
                <td>{req.month}</td>
                <td>{req.year}</td>
                <td>${req.salary}</td>
                <td>{req.payment_date ? new Date(req.payment_date).toLocaleDateString() : '—'}</td>
                <td>{req.payment_date ? 'Paid' : 'Pending'}</td>
                <td>
                  {!req.payment_date ? (
                    <button
                      onClick={() => setSelectedPayroll(req)}
                      className="btn btn-sm btn-primary"
                    >
                      Pay
                    </button>
                  ) : (
                    <button className="btn btn-sm btn-disabled">Paid</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Floating centered modal */}
      {selectedPayroll && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="relative bg-base-100 shadow-lg p-6 rounded-lg max-w-xl w-full">
            {/* Close button */}
            <button
              onClick={() => setSelectedPayroll(null)}
              className="absolute top-2 right-2 text-xl btn btn-sm btn-circle btn-error"
              title="Close"
            >
              ✕
            </button>
            <h3 className="text-xl font-semibold mb-4">
              Paying {selectedPayroll.name}
            </h3>
            <Elements stripe={stripePromise}>
              <CheckoutForm
                payroll={selectedPayroll}
                onSuccess={() => {
                  setSelectedPayroll(null);
                  refetch();
                }}
              />
            </Elements>
          </div>
        </div>
      )}
    </div>
  );
};

export default PayrollRequests;


