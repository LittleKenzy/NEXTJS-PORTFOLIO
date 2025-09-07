"use client";

const CustomFeedbackButton = () => {
    return (
        <button
            className="sentry-feedback-trigger fixed bottom-5 right-5 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors"
            title="Report a Bug"
        >
            Report a Bug
        </button>
    );
};

export default CustomFeedbackButton;
