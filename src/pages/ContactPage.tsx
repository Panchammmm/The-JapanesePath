'use client';

import React, { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle, BookOpen, Loader2, MessageCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import useWeb3Forms from "@web3forms/react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  contactType: 'enquiry' | 'contribution' | 'other';
  subject: string;
  message: string;
  agree: boolean;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function ContactPage() {
  const { register, reset, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();
  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' });
  const [isSuccess, setIsSuccess] = useState(false);

  const accessKey = "4487efde-7c51-4aeb-8af3-96b3ec5a49e9";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "NihongoPath",
      subject: "New Contact Form Submission - NihongoPath",
      spam_check: false,
      replyto: true,
      return_json: true,
    },
    onSuccess: (msg, data) => {
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.',
      });
      setIsSuccess(true);
      reset();
    },
    onError: (msg, data) => {
      setStatus({
        type: 'error',
        message: 'Failed to send your message. Please try again later.',
      });
      setIsSuccess(false);
    },
  });

  const handleFormSubmit = async (formData: FormData) => {
    const { fullName, email, phone, contactType, subject, message, agree } = formData;

    const typeMap = {
      enquiry: "General Inquiry",
      contribution: "Study Material Contribution",
      other: "Others/General Inquiry",
    };

    const enhancedData = {
      fullName,
      email,
      phone,
      contactType: typeMap[contactType as keyof typeof typeMap],
      subject,
      message,
      timestamp: new Date().toLocaleString(),
    };

    setStatus({ type: "loading", message: "Sending your message..." });
    await onSubmit(enhancedData);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-10 md:py-16 bg-gradient-to-br from-accent via-background to-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-lg bg-accent">
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Have a question about the study materials? Want to contribute resources? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Decoration Cards Section */}
      <section className="bg-background">
        <div className="max-w-2xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-lg border-2 border-border bg-card">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">Ask a Question</span>
              </div>
              <p className="text-sm text-muted-foreground">Confused about a topic? Need clarification?</p>
            </div>

            <div className="p-6 rounded-lg border-2 border-border bg-card">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">Share Resources</span>
              </div>
              <p className="text-sm text-muted-foreground">Found great materials? Contribute to the community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-10 md:py-14 mb-12 bg-background">
        <div className="max-w-2xl mx-auto px-4 md:px-8">
          <div className="rounded-2xl p-8 md:p-12 border-2 border-border shadow-sm bg-card">
            
            <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
              {/* Purpose of Query Dropdown */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-foreground">
                  Purpose of Query <span className="text-primary">*</span>
                </label>
                <select
                  {...register("contactType", { required: "Please select the purpose of your query" })}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 outline-none cursor-pointer bg-background text-foreground ${
                    errors.contactType ? 'border-destructive' : 'border-input'
                  }`}
                >
                  <option value="">Select the purpose...</option>
                  <option value="enquiry">Ask a Question</option>
                  <option value="contribution">Share Resources</option>
                  <option value="other">Others</option>
                </select>
                {errors.contactType && (
                  <p className="text-sm text-destructive">{errors.contactType.message}</p>
                )}
              </div>

              {/* Name Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-foreground">
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  {...register("fullName", { 
                    required: "Name is required",
                    minLength: { value: 2, message: "Name must be at least 2 characters" }
                  })}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 outline-none bg-background text-foreground placeholder:text-muted-foreground ${
                    errors.fullName ? 'border-destructive' : 'border-input'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-sm text-destructive">{errors.fullName.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-foreground">
                  Email Address <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email"
                    }
                  })}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 outline-none bg-background text-foreground placeholder:text-muted-foreground ${
                    errors.email ? 'border-destructive' : 'border-input'
                  }`}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-foreground">
                  Phone Number <span className="text-primary"></span>
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  {...register("phone", { 
                    pattern: {
                      value: /^[+]?[1-9][\d]{0,15}$/,
                      message: "Please enter a valid phone number"
                    }
                  })}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 outline-none bg-background text-foreground placeholder:text-muted-foreground ${
                    errors.phone ? 'border-destructive' : 'border-input'
                  }`}
                />
                {errors.phone && (
                  <p className="text-sm text-destructive">{errors.phone.message}</p>
                )}
              </div>

              {/* Subject Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-foreground">
                  Subject <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., Question about Grammar or Study Material Title"
                  {...register("subject", { required: "Subject is required" })}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 outline-none bg-background text-foreground placeholder:text-muted-foreground ${
                    errors.subject ? 'border-destructive' : 'border-input'
                  }`}
                />
                {errors.subject && (
                  <p className="text-sm text-destructive">{errors.subject.message}</p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-foreground">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  placeholder="Tell us your question or describe the study material you'd like to contribute..."
                  rows={5}
                  {...register("message", { required: "Message is required" })}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 outline-none resize-y bg-background text-foreground placeholder:text-muted-foreground ${
                    errors.message ? 'border-destructive' : 'border-input'
                  }`}
                />
                {errors.message && (
                  <p className="text-sm text-destructive">{errors.message.message}</p>
                )}
              </div>

              {/* Agreement Checkbox */}
              <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary">
                <input
                  type="checkbox"
                  id="agree"
                  {...register("agree", { required: "You must agree to the terms" })}
                  className="mt-1"
                />
                <label htmlFor="agree" className="text-sm leading-relaxed cursor-pointer text-muted-foreground">
                  I understand my information will be used to respond to my inquiry and will be kept confidential.
                </label>
              </div>
              {errors.agree && (
                <p className="text-sm text-destructive">{errors.agree.message}</p>
              )}

              {/* Status Messages */}
              {status.type !== 'idle' && (
                <div
                  className={`p-4 rounded-lg border-2 flex items-start gap-3 animate-in fade-in ${
                    status.type === 'success'
                      ? 'bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800'
                      : status.type === 'error'
                      ? 'bg-destructive/10 border-destructive/30'
                      : 'bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800'
                  }`}
                >
                  {status.type === 'success' && (
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-green-600 dark:text-green-400" />
                  )}
                  {status.type === 'error' && (
                    <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-destructive" />
                  )}
                  {status.type === 'loading' && (
                    <Loader2 className="h-5 w-5 mt-0.5 flex-shrink-0 animate-spin text-blue-600 dark:text-blue-400" />
                  )}
                  <p
                    className={`text-sm leading-relaxed ${
                      status.type === 'success'
                        ? 'text-green-800 dark:text-green-100'
                        : status.type === 'error'
                        ? 'text-destructive'
                        : 'text-blue-800 dark:text-blue-100'
                    }`}>
                    {status.message}
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed group text-lg bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}