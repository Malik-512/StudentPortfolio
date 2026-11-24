
import { useState } from "react";

function StudentForm() {

    // Store form data
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        age: "",
        subject: "",
        address: ""
    });

    // Store validation errors
    const [errors, setErrors] = useState({});

    // Store successful submission
    const [submitted, setSubmitted] = useState(false);

    // Handle input changes
    function handleChange(e) {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

        setSubmitted(false);
    }

    // Validate form
    function validateForm() {
        let newErrors = {};

        if (formData.firstName.trim() === "") {
            newErrors.firstName = "First name is required";
        }

        if (formData.lastName.trim() === "") {
            newErrors.lastName = "Last name is required";
        }

        if (formData.age === "") {
            newErrors.age = "Age is required";
        }
        else if (Number(formData.age) < 18 || Number(formData.age) > 30) {
            newErrors.age = "Age must be between 18 and 30";
        }

        if (formData.subject === "") {
            newErrors.subject = "Please select a subject";
        }

        if (formData.address.trim() === "") {
            newErrors.address = "Address is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    // Handle form submission
    function handleSubmit(e) {
        e.preventDefault();

        if (validateForm()) {
            setSubmitted(true);
        }
    }

    // Reset form
    function handleReset() {
        setFormData({
            firstName: "",
            lastName: "",
            age: "",
            subject: "",
            address: ""
        });

        setErrors({});
        setSubmitted(false);
    }

    return (
        <div className="container mt-5 mb-5">

            <div className="card shadow-lg mx-auto" style={{ maxWidth: "650px" }}>

                <div className="card-header bg-primary text-white text-center py-3">
                    <h3>Student Registration Form</h3>
                    <p className="mb-0">Enter your information below</p>
                </div>

                <div className="card-body p-4">

                    <form onSubmit={handleSubmit} noValidate>

                        {/* First Name */}
                        <div className="mb-3">
                            <label className="form-label">First Name</label>

                            <input
                                type="text"
                                name="firstName"
                                className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="Enter first name"
                            />

                            {errors.firstName && (
                                <div className="invalid-feedback">
                                    {errors.firstName}
                                </div>
                            )}
                        </div>

                        {/* Last Name */}
                        <div className="mb-3">
                            <label className="form-label">Last Name</label>

                            <input
                                type="text"
                                name="lastName"
                                className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Enter last name"
                            />

                            {errors.lastName && (
                                <div className="invalid-feedback">
                                    {errors.lastName}
                                </div>
                            )}
                        </div>

                        {/* Age */}
                        <div className="mb-3">
                            <label className="form-label">Age</label>

                            <input
                                type="number"
                                name="age"
                                className={`form-control ${errors.age ? "is-invalid" : ""}`}
                                value={formData.age}
                                onChange={handleChange}
                                placeholder="Enter age (18-30)"
                            />

                            {errors.age && (
                                <div className="invalid-feedback">
                                    {errors.age}
                                </div>
                            )}
                        </div>

                        {/* Subject */}
                        <div className="mb-3">
                            <label className="form-label">Subject</label>

                            <select
                                name="subject"
                                className={`form-select ${errors.subject ? "is-invalid" : ""}`}
                                value={formData.subject}
                                onChange={handleChange}
                            >
                                <option value="">Select Subject</option>
                                <option value="Web Engineering">Web Engineering</option>
                                <option value="OOP">Object Oriented Programming</option>
                                <option value="Database">Database Systems</option>
                                <option value="AI">Artificial Intelligence</option>
                            </select>

                            {errors.subject && (
                                <div className="invalid-feedback">
                                    {errors.subject}
                                </div>
                            )}
                        </div>

                        {/* Address */}
                        <div className="mb-3">
                            <label className="form-label">Address</label>

                            <textarea
                                name="address"
                                className={`form-control ${errors.address ? "is-invalid" : ""}`}
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Enter your address"
                                rows="3"
                            />

                            {errors.address && (
                                <div className="invalid-feedback">
                                    {errors.address}
                                </div>
                            )}
                        </div>

                        {/* Buttons */}
                        <div className="d-flex gap-2 mt-4">

                            <button
                                type="submit"
                                className="btn btn-primary w-100"
                            >
                                Submit
                            </button>

                            <button
                                type="button"
                                className="btn btn-secondary w-100"
                                onClick={handleReset}
                            >
                                Reset
                            </button>

                        </div>

                    </form>

                    {/* Success Message */}
                    {submitted && (
                        <div className="alert alert-success mt-4">
                            <h5>Registration Successful!</h5>
                            <p className="mb-0">
                                Welcome, {formData.firstName} {formData.lastName}.
                                Your form has been submitted successfully.
                            </p>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default StudentForm;
