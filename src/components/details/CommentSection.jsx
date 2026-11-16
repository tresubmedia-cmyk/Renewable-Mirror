
import { useEffect, useState } from "react";
import { MessageCircle, Send } from "lucide-react";

export default function CommentSection({ articleId }) {
  const storageKey = `rm-comments-${articleId}`;

  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    try {
      const saved = JSON.parse(
        localStorage.getItem(storageKey) || "[]"
      );
      setComments(Array.isArray(saved) ? saved : []);
    } catch {
      setComments([]);
    }
  }, [storageKey]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !comment.trim()) return;

    const newComment = {
      id: Date.now(),
      name: name.trim(),
      text: comment.trim(),
      date: new Date().toLocaleDateString("en-IN"),
    };

    const updatedComments = [newComment, ...comments];

    setComments(updatedComments);
    localStorage.setItem(
      storageKey,
      JSON.stringify(updatedComments)
    );

    setName("");
    setComment("");
  };

  return (
    <section className="mt-16" id="comments">
      <div className="flex items-center gap-3">
        <MessageCircle className="text-[#A58B4D]" size={23} />

        <h2 className="font-serif text-2xl font-bold text-[#10291D]">
          Comments ({comments.length})
        </h2>
      </div>

      <p className="mt-3 text-sm text-[#7B867C]">
        Share your thoughts and join the conversation.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-4 border border-[#E1E7DF] bg-white p-5 sm:p-7"
      >
        <div>
          <label className="mb-2 block text-xs font-semibold text-[#405347]">
            Your Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
            className="w-full border border-[#E1E7DF] bg-[#FAFBF9] px-4 py-3 text-sm outline-none focus:border-[#A58B4D]"
          />
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold text-[#405347]">
            Your Comment
          </label>

          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your thoughts..."
            rows={4}
            required
            className="w-full resize-y border border-[#E1E7DF] bg-[#FAFBF9] px-4 py-3 text-sm outline-none focus:border-[#A58B4D]"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-[#10291D] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#A58B4D]"
        >
          Post Comment
          <Send size={14} />
        </button>
      </form>

      <div className="mt-8 space-y-5">
        {comments.map((item) => (
          <div
            key={item.id}
            className="border-b border-[#E1E7DF] pb-5"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-bold text-[#10291D]">
                {item.name}
              </p>

              <span className="text-[11px] text-[#929B91]">
                {item.date}
              </span>
            </div>

            <p className="mt-3 text-sm leading-7 text-[#667368]">
              {item.text}
            </p>
          </div>
        ))}

        {comments.length === 0 && (
          <p className="py-5 text-sm text-[#929B91]">
            No comments yet. Be the first to share your thoughts.
          </p>
        )}
      </div>
    </section>
  );
}
