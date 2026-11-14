import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyRowProps {
  label: string;
  value: string;
  copyLabel: string;
  copiedLabel: string;
}

const CopyRow = ({ label, value, copyLabel, copiedLabel }: CopyRowProps) => {
  const [copied, setCopied] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);

      setCopied(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, 1600);
    } catch (error) {
      console.error("Unable to copy:", error);
    }
  };

  if (!value.trim()) return null;

  return (
    <div className="flex items-center justify-between gap-3 border-b border-forest-900/10 py-3 last:border-0">
      <div className="min-w-0">
        <p className="font-display text-xs font-bold text-ink/60">{label}</p>

        <p className="break-words font-display text-lg font-bold text-forest-900">
          <bdi>{value}</bdi>
        </p>
      </div>

      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-forest-900/25 px-3 py-1.5 font-display text-sm font-bold text-forest-900 transition-colors hover:bg-forest-900 hover:text-paper"
      >
        {copied ? (
          <Check size={16} aria-hidden="true" />
        ) : (
          <Copy size={16} aria-hidden="true" />
        )}

        <span aria-live="polite">{copied ? copiedLabel : copyLabel}</span>
      </button>
    </div>
  );
};

export default CopyRow;
