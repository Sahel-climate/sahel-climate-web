import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";

import PaymentMethods from "./PaymentMethods";

import { useModal } from "./hooks/useModal";

import type { DonateContent } from "./types/donate.types";

interface DonateModalProps {
  open: boolean;
  onClose: () => void;
}

const DonateModal = ({ open, onClose }: DonateModalProps) => {
  const { t } = useTranslation();

  const { panelRef, closeRef } = useModal(open, onClose);

  const donate = t("donate", {
    returnObjects: true,
  }) as DonateContent;

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-forest-950/70 p-0 sm:items-center sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="donate-title"
        aria-describedby="donate-intro"
        className="modal-in flex max-h-[94dvh] w-full max-w-2xl flex-col overflow-hidden rounded-t-[1.75rem] bg-paper sm:rounded-[1.75rem]"
      >
        {/* Modal header */}
        <div className="flex shrink-0 items-start justify-between gap-4 bg-forest-900 px-6 py-6 text-paper sm:px-9">
          <div>
            <h2
              id="donate-title"
              className="font-display text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl"
            >
              {donate.title}
            </h2>

            <p
              id="donate-intro"
              className="mt-2 max-w-[52ch] text-[0.98rem] leading-snug text-paper/80"
            >
              {donate.intro}
            </p>
          </div>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={donate.close}
            className="shrink-0 rounded-full p-2 text-paper transition-colors hover:bg-paper/15"
          >
            <X size={24} aria-hidden="true" />
          </button>
        </div>

        {/* Modal body */}
        <div className="min-h-0 overflow-y-auto overscroll-contain px-6 py-7 sm:px-9">
          {/* Payment accounts */}
          <PaymentMethods content={donate} />

          {/* Donation instructions */}
          <p className="mt-5 text-[0.95rem] leading-snug text-ink/80">
            {donate.reference}
          </p>

          <p className="mt-2 text-[0.95rem] leading-snug text-ink/80">
            {donate.receipt}
          </p>

          <p className="mt-4 font-display text-sm font-semibold text-forest-900/70">
            {donate.trust}
          </p>
        </div>
      </div>
    </div>,

    document.body,
  );
};

export default DonateModal;
