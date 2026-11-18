import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_NUMBER = "919XXXXXXXXX"; // <- apna number yahan daalo (country code ke saath, bina + ke)

// Popup me ek-ek karke type hone wale messages
const CHAT_MESSAGES = [
  "Hello! 👋 Welcome to Renewable Mirror.",
  "How can we help you today? Ask us about renewable energy news, advertising, or sharing your story with our readers.",
];

// Quick-reply options (click karne par WhatsApp me ye message prefill hoga)
const QUICK_REPLIES = [
  {
    label: "Latest industry updates",
    text: "Hello Renewable Mirror! I would like to get the latest renewable energy industry updates.",
  },
  {
    label: "Advertise with us",
    text: "Hello Renewable Mirror! I would like to know about advertising and partnership options.",
  },
  {
    label: "Share a news story",
    text: "Hello Renewable Mirror! I would like to share a news story / press release with you.",
  },
];

const TYPE_SPEED = 24; // ms per character
const DOTS_DELAY = 700; // typing-dots dikhne ka time
const GAP_AFTER_MESSAGE = 350;

const WA_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.946L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

function WhatsAppIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d={WA_PATH} />
    </svg>
  );
}

/**
 * Popup khulte hi messages ek-ek karke type hote hain.
 * Popup band hone par sab reset ho jata hai, agli baar fir se type hoga.
 */
function useChatTyping(messages, active) {
  const [done, setDone] = useState([]); // poore ho chuke messages
  const [current, setCurrent] = useState(""); // abhi type ho raha message
  const [phase, setPhase] = useState("idle"); // idle | dots | typing | finished

  useEffect(() => {
    if (!active) {
      setDone([]);
      setCurrent("");
      setPhase("idle");
      return;
    }

    // Reduced-motion: seedha poora text dikha do
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setDone(messages);
      setCurrent("");
      setPhase("finished");
      return;
    }

    let timer;
    let msgIndex = 0;
    let charIndex = 0;
    let chars = [];

    setDone([]);
    setCurrent("");

    const startMessage = () => {
      if (msgIndex >= messages.length) {
        setPhase("finished");
        return;
      }
      setPhase("dots");
      timer = setTimeout(() => {
        chars = Array.from(messages[msgIndex]); // emoji safe
        charIndex = 0;
        setPhase("typing");
        typeNext();
      }, DOTS_DELAY);
    };

    const typeNext = () => {
      charIndex += 1;
      setCurrent(chars.slice(0, charIndex).join(""));

      if (charIndex < chars.length) {
        timer = setTimeout(typeNext, TYPE_SPEED);
      } else {
        const finishedText = messages[msgIndex]; // index badalne se pehle save karo
        timer = setTimeout(() => {
          setDone((prev) => [...prev, finishedText]);
          setCurrent("");
          msgIndex += 1;
          startMessage();
        }, GAP_AFTER_MESSAGE);
      }
    };

    startMessage();
    return () => clearTimeout(timer);
  }, [active, messages]);

  return { done, current, phase };
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-1 py-1.5" aria-label="Typing">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-[#9A9F9B]"
          animate={{ y: [0, -4, 0], opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

const bubbleClass =
  "max-w-[92%] rounded-2xl rounded-tl-sm bg-white px-3.5 py-2.5 text-[13px] leading-[1.6] text-[#26352C] shadow-[0_1px_2px_rgba(0,0,0,0.08)]";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { done, current, phase } = useChatTyping(CHAT_MESSAGES, isOpen);

  const openWhatsApp = (text) => {
    const message = encodeURIComponent(
      text || "Hello Renewable Mirror! I would like to know more about your services."
    );
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div
      className="fixed bottom-6 right-5 z-[9999] flex flex-col items-end sm:bottom-8 sm:right-8"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* WHATSAPP POPUP */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.22 }}
            style={{ transformOrigin: "bottom right" }}
            className="mb-4 w-[300px] max-w-[calc(100vw-2.5rem)] overflow-hidden rounded-2xl border border-[#E8EAE8] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.14)]"
            role="dialog"
            aria-label="Chat with Renewable Mirror on WhatsApp"
          >
            {/* HEADER */}
            <div className="flex items-center gap-3 bg-[#172D21] px-4 py-3.5">
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                <WhatsAppIcon className="h-6 w-6 fill-[#25D366]" />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-[#172D21] bg-[#25D366]" />
              </div>
              <div>
                <p className="text-[14px] font-bold text-white">Renewable Mirror</p>
                <p className="mt-0.5 text-[11px] text-white/70">Online · Replies as soon as possible</p>
              </div>
            </div>

            {/* CHAT AREA */}
            <div className="flex min-h-[190px] flex-col gap-2 bg-[#EFF3EF] px-3.5 py-4">
              {done.map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0.6 }}
                  animate={{ opacity: 1 }}
                  className={bubbleClass}
                >
                  {text}
                </motion.div>
              ))}

              {phase === "dots" && (
                <div className="w-fit rounded-2xl rounded-tl-sm bg-white px-3 shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
                  <TypingDots />
                </div>
              )}

              {phase === "typing" && (
                <div className={bubbleClass}>
                  {current}
                  <motion.span
                    className="ml-0.5 inline-block h-[14px] w-[2px] translate-y-[2px] bg-[#25D366]"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </div>
              )}

              {/* QUICK REPLIES */}
              {phase === "finished" && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="mt-1 flex flex-wrap gap-1.5"
                >
                  {QUICK_REPLIES.map((reply) => (
                    <button
                      key={reply.label}
                      onClick={() => openWhatsApp(reply.text)}
                      className="rounded-full border border-[#25D366]/50 bg-white px-3 py-1.5 text-[12px] font-semibold text-[#172D21] transition-colors duration-200 hover:bg-[#25D366] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
                    >
                      {reply.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* FOOTER CTA */}
            <div className="border-t border-[#E8EAE8] bg-white p-3">
              <button
                onClick={() => openWhatsApp()}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-[13px] font-bold text-white transition-colors duration-300 hover:bg-[#1FB957] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#172D21]"
              >
                <WhatsAppIcon className="h-[19px] w-[19px] fill-current" />
                Chat with us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING WHATSAPP BUTTON */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Open WhatsApp chat options"
        aria-expanded={isOpen}
        title="Chat with us"
        className="relative flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_16px_rgba(37,211,102,0.28)] transition-shadow duration-300 hover:shadow-[0_6px_22px_rgba(37,211,102,0.4)]"
      >
        <WhatsAppIcon className="h-[30px] w-[30px] fill-current" />
      </motion.button>
    </div>
  );
}