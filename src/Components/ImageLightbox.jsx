import { useEffect } from "react";
import { createPortal } from "react-dom";

/**
 * @param {object} props
 * @param {boolean} props.open
 * @param {() => void} props.onClose
 * @param {{ src: string; alt: string; label?: string; when?: string } | null} props.item
 */
const ImageLightbox = ({ open, onClose, item }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open || !item) return null;

  const node = (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Enlarged view: ${item.alt}`}
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default bg-zinc-950/88 backdrop-blur-[2px]"
        aria-label="Close image"
        onClick={onClose}
      />
      <div className="relative z-10 flex w-full max-w-[min(96rem,calc(100vw-2rem))] flex-col items-stretch gap-3">
        <div className="flex justify-end">
          <button
            type="button"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-white/20 bg-zinc-900/90 text-white shadow-lg transition hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            onClick={onClose}
            aria-label="Close"
          >
            <span aria-hidden className="text-2xl leading-none">
              ×
            </span>
          </button>
        </div>
        <img
          src={item.src}
          alt={item.alt}
          className="mx-auto max-h-[min(85vh,1080px)] w-auto max-w-full rounded-lg object-contain shadow-2xl ring-1 ring-white/10"
        />
        {(item.label || item.when) && (
          <p className="text-center text-base text-zinc-200 sm:text-lg">
            {item.label && (
              <strong className="font-medium text-white">{item.label}</strong>
            )}
            {item.label && item.when && (
              <span className="text-zinc-400"> · </span>
            )}
            {item.when && <span className="text-zinc-400">{item.when}</span>}
          </p>
        )}
      </div>
    </div>
  );

  return createPortal(node, document.body);
};

export default ImageLightbox;
