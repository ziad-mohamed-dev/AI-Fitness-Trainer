"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { vapi } from "@/lib/vapi";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const GenerateProgramPage = () => {
  const [callActive, setCallActive] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const [callEnded, setCallEnded] = useState(false);

  const { user } = useUser();
  const router = useRouter();

  const messageContainerRef = useRef<HTMLDivElement>(null);

  // auto-scroll messages
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // navigate user to profile page after call ends
  useEffect(() => {
    if (callEnded) {
      const redirectTimer = setTimeout(() => {
        router.push("/profile");
      }, 1500);
      return () => {
        clearTimeout(redirectTimer);
      };
    }
  }, [callEnded, router]);

  // setup event listeners for vapi
  useEffect(() => {
    const handleCallStart = () => {
      console.log("Call started");
      setConnecting(false);
      setCallActive(true);
      setCallEnded(false);
    };

    const handleCallEnd = () => {
      console.log("Call ended");
      setMessages((prev) => [
        ...prev,
        {
          role: "system",
          content:
            "Your fitness program has been created! Redirecting to your profile...",
        },
      ]);
      setCallActive(false);
      setConnecting(false);
      setIsSpeaking(false);
      setCallEnded(true);
    };

    const handleSpeechStart = () => {
      console.log("AI started speeking");
      setIsSpeaking(true);
    };

    const handleSpeechEnd = () => {
      console.log("AI stopped Speaking");
      setIsSpeaking(false);
    };

    const handleMessage = (message: {
      type: string;
      transcriptType: string;
      transcript: string;
      role: string;
    }) => {
      if (message.type === "transcript" && message.transcriptType === "final") {
        const newMessage = { content: message.transcript, role: message.role };
        setMessages((prev) => [...prev, newMessage]);
      }
    };

    const handleError = (error: unknown) => {
      console.log("Vapi Error", error);
      setConnecting(false);
      setCallActive(false);
    };

    vapi
      .on("call-start", handleCallStart)
      .on("call-end", handleCallEnd)
      .on("speech-start", handleSpeechStart)
      .on("speech-end", handleSpeechEnd)
      .on("message", handleMessage)
      .on("error", handleError);

    return () => {
      vapi
        .off("call-start", handleCallStart)
        .off("call-end", handleCallEnd)
        .off("speech-start", handleSpeechStart)
        .off("speech-end", handleSpeechEnd)
        .off("message", handleMessage)
        .off("error", handleError);
    };
  }, []);

  const toogleCall = async () => {
    if (callActive) vapi.stop();
    else {
      try {
        setConnecting(true);
        setMessages([]);
        setCallEnded(false);
        const fullName = user?.firstName
          ? `${user.firstName} ${user.lastName || ""}`.trim()
          : "There";
        await vapi.start(process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID, {
          variableValues: {
            full_name: fullName,
            user_id: user?.id,
          },
        });
      } catch (error) {
        console.log("Faild to start the call", error);
        setConnecting(false);
      }
    }
  };

  return (
    <div className="space-y-12 container mx-auto md:px-24">
      {/* TITLE */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl">
          Generate Your <span className="text-primary">Fitness Program</span>
        </h1>
        <p className="text-muted-foreground text-sm">
          Have a voice conversation with our AI assistant to create your
          personalized plan
        </p>
      </div>
      {/* USER AND AI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* AI CARD */}
        <Card className="aspect-video bg-card/90 backdrop-blur-sm flex items-center justify-center gap-2">
          <div className="size-32 rounded-full relative border">
            {/* SoundWave Animation */}
            <div
              className={`absolute inset-x-1 h-16 top-1/2 flex justify-between ${isSpeaking ? "opacity-30" : "opacity-0"}`}
            >
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="h-0 w-1 bg-primary animate-sound-wave"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                  }}
                ></div>
              ))}
            </div>
            {/* Pulse Animation */}
            <div
              className={`absolute inset-0 bg-primary blur-lg opacity-10 rounded-full ${isSpeaking && "animate-pulse"}`}
            ></div>
            <Image
              sizes="256px"
              fill
              src="/ai-avatar.png"
              alt="ai-avatar.png"
              className="object-cover rounded-full"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-primary/10 to-secondary/10"></div>
          </div>
          <p className="text-xl font-bold">FitVoice AI</p>
          <p className="text-sm text-muted-foreground">Fitness & Deit Coach</p>
          <div
            className={`rounded-full border border-border py-1 px-3 flex items-center gap-1`}
          >
            <span
              className={`inline-block size-2 rounded-full bg-muted ${isSpeaking && "bg-primary"}`}
            ></span>
            <span className="text-muted-foreground text-xs">
              {isSpeaking
                ? "Speaking..."
                : callActive
                  ? "Listening..."
                  : callEnded
                    ? "Redirecting to profile"
                    : "Waiting..."}
            </span>
          </div>
        </Card>
        {/* USER CARD */}
        <Card className="aspect-video bg-card/90 backdrop-blur-sm flex items-center justify-center gap-2">
          {user ? (
            <>
              <div className="size-32 rounded-full overflow-hidden relative border border-border">
                <Image
                  sizes="256px"
                  fill
                  src={user.imageUrl}
                  alt="ai-avatar.png"
                  className="object-cover"
                />
              </div>
              <p className="text-xl font-bold">You</p>
              <p className="text-sm text-muted-foreground">{user.firstName}</p>
              <div className="rounded-full border border-border py-1 px-3 flex items-center gap-1">
                <span className="inline-block size-2 rounded-full bg-muted"></span>
                <span className="text-muted-foreground text-xs">Ready...</span>
              </div>
            </>
          ) : (
            <>
              <div className="size-32 rounded-full overflow-hidden relative border border-border">
                <div className="bg-gray-600 size-full animate-pulse"></div>
              </div>
              <p className="text-xl font-bold">You</p>
              <p className="bg-gray-600 size-full animate-pulse h-4 w-12 rounded-sm"></p>
              <p className="rounded-full border border-border py-1 px-3 flex items-center gap-1">
                <span className="inline-block size-2 rounded-full bg-muted"></span>
                <span className="text-muted-foreground text-xs">
                  loading...
                </span>
              </p>
            </>
          )}
        </Card>
      </div>
      {/* MESSAGES CONTAINER */}
      {messages.length > 0 && (
        <div
          ref={messageContainerRef}
          className="h-64 bg-card/90 border rounded-xl overflow-y-auto backdrop-blur-sm p-4 scroll-smooth transition-all duration-300 space-y-3"
        >
          {messages.map((msg, i) => (
            <div key={i} className="animate-fadeIn">
              <div className="font-semibold text-xs text-muted-foreground mb-1">
                {msg.role === "assistant"
                  ? "FitVoice AI:"
                  : msg.role === "system"
                    ? "System:"
                    : "You:"}
              </div>
              <p className="text-foreground">{msg.content}</p>
            </div>
          ))}
        </div>
      )}
      {/* TOGGLE CALL BUTTON */}
      <div className="flex justify-center">
        <Button
          className={`relative rounded-full text-white w-40 text-xl ${callActive ? "bg-destructive hover:bg-destructive/90" : callEnded ? "bg-green-600 hover:bg-green-700" : "bg-primary hover:bg-primary/90"}`}
          onClick={toogleCall}
          disabled={connecting || callEnded || !user}
        >
          {connecting && (
            <span className="absolute inset-0 rounded-full bg-primary/50 opacity-75 animate-ping"></span>
          )}
          <span>
            {callActive
              ? "End Call"
              : connecting
                ? "Connecting..."
                : callEnded
                  ? "View Profile"
                  : "Start Call"}
          </span>
        </Button>
      </div>
    </div>
  );
};

export default GenerateProgramPage;
