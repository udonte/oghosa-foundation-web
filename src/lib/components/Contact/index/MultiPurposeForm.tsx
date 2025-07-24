import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaPaperclip, FaSpinner } from "react-icons/fa";
import SectionHeader from "../../common/SectionHeader";

export const MultiPurposeForm = () => {
  interface MultiPurposeFormData {
    name: string;
    email: string;
    phone: string;
    purpose: string;
    organization: string;
    message: string;
    file: File | null;
  }
  const [formData, setFormData] = useState<MultiPurposeFormData>({
    name: "",
    email: "",
    phone: "",
    purpose: "",
    organization: "",
    message: "",
    file: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const formFields = [
    { type: "text", name: "name", label: "Full Name", required: true },
    { type: "email", name: "email", label: "Email", required: true },
    { type: "tel", name: "phone", label: "Phone (Optional)" },
    {
      type: "select",
      name: "purpose",
      label: "Purpose",
      options: [
        "General Inquiry",
        "Partnership Proposal",
        "Volunteer Application",
        "Media Request",
        "Donation Question",
        "Report an Issue",
      ],
      required: true,
    },
    {
      type: "textarea",
      name: "message",
      label: "Your Message",
      rows: 5,
      required: true,
    },
  ];

  interface ChangeEventTarget {
    name: keyof MultiPurposeFormData;
    value: string;
    files?: FileList;
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, files } = e.target as ChangeEventTarget;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise<void>((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        purpose: "",
        organization: "",
        message: "",
        file: null,
      });
      setSubmitSuccess(false);
    }, 3000);
  };

  const showOrganizationField = formData.purpose === "Partnership Proposal";

  return (
    <section
      id="contact-form"
      className="px-4 py-12 sm:py-16 lg:px-24 bg-gray-50"
    >
      <div className="container mx-auto">
        <SectionHeader
          title="Send Us a Message"
          subtitle="We'll respond within 24 hours"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden p-6 sm:p-8"
        >
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {formFields
                .filter((field) => field.type !== "textarea")
                .map((field, index) => (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {field.label}
                      {field.required && (
                        <span className="text-red-500"> *</span>
                      )}
                    </label>
                    {field.type === "select" ? (
                      <select
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 outline-0 rounded-lg focus:ring-1 focus:ring-oghosa-green focus:border-oghosa-green transition-all"
                        required={field.required}
                      >
                        <option value="">Select an option</option>
                        {field?.options?.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-0  focus:ring focus:ring-oghosa-green focus:border-oghosa-green transition-all"
                        required={field.required}
                      />
                    )}
                  </motion.div>
                ))}

              <AnimatePresence>
                {showOrganizationField && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:col-span-2"
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Organization Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-oghosa-green focus:border-oghosa-green transition-all"
                      required
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {formFields
              .filter((field) => field.type === "textarea")
              .map((field) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mb-6"
                >
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label}
                    {field.required && <span className="text-red-500"> *</span>}
                  </label>
                  <textarea
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    rows={field.rows}
                    className="w-full px-4 py-2 border border-gray-300 outline-0 rounded-lg focus:ring focus:ring-oghosa-green focus:border-oghosa-green transition-all"
                    required={field.required}
                  />
                </motion.div>
              ))}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Attachment (Optional)
              </label>
              <div className="flex items-center">
                <label className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <FaPaperclip className="text-oghosa-green mr-2" />
                  <span className="text-sm">
                    {formData.file ? formData.file.name : "Choose file"}
                  </span>
                  <input
                    type="file"
                    name="file"
                    onChange={handleChange}
                    className="hidden"
                    accept=".pdf,.doc,.docx,.jpg,.png"
                  />
                </label>
                {formData.file && (
                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, file: null }))
                    }
                    className="ml-2 text-sm text-red-500 hover:text-red-700 cursor-pointer"
                  >
                    Remove
                  </button>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-1">
                PDF, DOC, JPG or PNG (Max 5MB)
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center"
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 rounded-full font-medium text-white cursor-pointer ${
                  isSubmitting
                    ? "bg-oghosa-green/80"
                    : "bg-oghosa-green hover:bg-oghosa-gold"
                } transition-colors flex items-center`}
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin mr-2" />
                    Sending...
                  </>
                ) : submitSuccess ? (
                  "Message Sent!"
                ) : (
                  "Send Message"
                )}
              </button>
            </motion.div>

            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 text-center text-green-600"
                >
                  Thank you! We'll get back to you soon.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
