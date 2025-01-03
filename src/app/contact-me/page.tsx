"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/main/MainLayout";

export default function ContactPage() {
  const [state, handleSubmit] = useForm("mjkkpwge");

  return (
    <MainLayout>
      <div className="container mx-auto max-w-lg ">
        {state.succeeded ? (
          <div className="container mx-auto max-w-lg py-10 text-center">
            <h1 className="text-2xl font-bold mb-4">Thank You!</h1>
            <p className="text-gray-600">
              Your message has been sent successfully. I&apos;ll get back to you
              soon.
            </p>
          </div>
        ) : (
          <div>
            {" "}
            <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
            <p className="text-gray-600 mb-6">
              Feel free to reach out using the form below or connect with me on
              social media!
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john.doe@example.com"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Write your message..."
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" disabled={state.submitting}>
                {state.submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
