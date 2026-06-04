export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-2 border-violet-500/20 border-t-violet-500 rounded-full animate-spin" />
        <div className="absolute inset-0 w-16 h-16 border-2 border-transparent border-b-indigo-500/50 rounded-full animate-spin" style={{ animationDuration: "1.5s", animationDirection: "reverse" }} />
      </div>
    </div>
  );
}
