export default function BackgroundDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full"
        style={{
          background:
            'radial-gradient(circle at center, rgba(168,213,186,0.35), rgba(168,213,186,0) 60%)',
          filter: 'blur(30px)'
        }}
      />
      <div
        className="absolute -bottom-32 -right-20 h-[32rem] w-[32rem] rounded-full"
        style={{
          background:
            'radial-gradient(circle at center, rgba(255,171,145,0.35), rgba(255,171,145,0) 60%)',
          filter: 'blur(32px)'
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(circle at center, rgba(168,213,186,0.18), rgba(168,213,186,0) 65%)',
          filter: 'blur(28px)'
        }}
      />
    </div>
  );
}
