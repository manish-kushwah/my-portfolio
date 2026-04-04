export const Footer = () => {
  return (
    <footer className="p-10 border-t border-(--border) bg-(--surface-1) flex justify-center items-center text-(--muted) mono text-[10px]">
      <span>© {new Date().getFullYear()} MANISH KUSHWAH</span>
    </footer>
  );
};
