

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import useAxios from "../../hooks/useAxios"; // Your axios hook
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const axiosInstance = useAxios();

  const onSubmit = async (data) => {
    try {
      const res = await axiosInstance.post('/messages', data);  // API to store message
      if (res.data.insertedId) {
        toast.success("Message sent successfully!");
        reset();
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center py-16 px-4 md:px-10">
      <Helmet>
        <title>Contact Us - WorkSync Pro</title>
      </Helmet>
      <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800 dark:text-white">
        Contact <span className="text-primary">WorkSync Pro</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg space-y-6"
        >
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Send Us a Message</h3>

          <div>
            <label className="block mb-1 font-medium text-gray-600 dark:text-gray-400">Your Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" },
              })}
              type="email"
              placeholder="Enter your email"
              className="input input-bordered dark:bg-gray-900 dark:text-white w-full"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-600 dark:text-gray-400">Your Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              rows="5"
              placeholder="Type your message here..."
              className="textarea textarea-bordered dark:bg-gray-900 dark:text-white w-full"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Send Message
          </button>
        </form>

        {/* Contact Details */}
        <div className="bg-white dark:bg-gray-800 dark:text-white p-8 rounded-xl shadow-lg space-y-6">
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Our Contact Information</h3>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-xl text-primary" />
            <p>Corporate Office: Dhaka, Bangladesh</p>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-xl text-primary" />
            <p>jahangiralam.dev@gmail.com</p>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-xl text-primary" />
            <p>+8801XXXXXXXXX</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800">Business Hours</h4>
            <p>Sunday - Thursday: 9:00 AM - 6:00 PM</p>
            <p>Friday - Saturday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
