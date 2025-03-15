"use server";
import React from "react";
import { Resend } from "resend";
// import Email from "../app/components/Email.jsx";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({updatedFormData}) => {
    try {
        const response = await resend.emails.send({
            to: "forgebytesolutions@gmail.com",
            from: "Yash Gaur <onboarding@resend.dev>",
            subject: "Forgebyte Customer Queries",
            html: `
                <h1>New Contact Inquiry</h1>
                <p><strong>Name:</strong> ${updatedFormData.name}</p>
                <p><strong>Email:</strong> ${updatedFormData.email}</p>
                <p><strong>Contact:</strong> ${updatedFormData.contact}</p>
                <p><strong>Budget:</strong> ${updatedFormData.budget}</p>
                <p><strong>Country:</strong> ${updatedFormData.country}</p>
                <p><strong>Service:</strong> ${updatedFormData.service}</p>
                <p><strong>Message:</strong> ${updatedFormData.message}</p>
            `
        });

        console.log("Email response:", response);
    } catch (error) {
        console.error("Error sending email:", error);
    }
};
