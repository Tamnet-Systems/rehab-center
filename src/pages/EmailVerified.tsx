import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";


const EmailVerified = () => {
  const [countdown, setCountdown] = useState(3);
  const [redirecting, setRedirecting] = useState(false);
  const navigate = useNavigate();

  const handleManualRedirect = () => {
    navigate("/admin");
  };
useEffect(() => {
  let checkCount = 0;
  const maxChecks = 10; // Check up to 10 times (about 10 seconds)
  const delay = 1000; // 1 second between checks

  const intervalId = setInterval(async () => {
    checkCount++;

    const { data: { user }, error } = await supabase.auth.getUser();

    if (error || !user) {
      console.log("No user session yet. Retrying...");
      return;
    }

    console.log("User found:", user);

    if (user.email_confirmed_at) {
      console.log("Email is confirmed");

      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

      if (profileError) {
        console.error("Profile fetch error:", profileError.message);
        clearInterval(intervalId);
        return;
      }

      if (profile?.role === "admin") {
        confetti({
          particleCount: 150,
          spread: 100,
          origin: { y: 0.6 },
        });

        setRedirecting(true);
        clearInterval(intervalId);

        const timer = setInterval(() => {
          setCountdown((prev) => {
            if (prev <= 1) {
              clearInterval(timer);
              navigate("/admin");
            }
            return prev - 1;
          });
        }, 1000);
      } else {
        alert("Access denied: you are not an admin.");
        clearInterval(intervalId);
        navigate("/user-dashboard");
      }
    } else {
      console.log("Email not yet confirmed. Retrying...");
    }

    if (checkCount >= maxChecks) {
      console.warn("Stopped checking after 10 attempts.");
      clearInterval(intervalId);
    }
  }, delay);

  return () => clearInterval(intervalId);
}, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-4">
      <h1 className="text-3xl font-bold mb-4">✅ Email Verified!</h1>
      <p className="text-gray-700 mb-6">
        Your email has been successfully verified.
      </p>
      {redirecting ? (
        <p className="text-teal-600 text-lg">
          Redirecting to your dashboard in {countdown}...
        </p>
      ) : (
        <Button
          onClick={handleManualRedirect}
          className="bg-[#160e2e] hover:bg-[#ff9800] text-white"
        >
          Continue to Dashboard
        </Button>
      )}
    </div>
  );
};
export default EmailVerified;
