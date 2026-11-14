import { useState } from "react";

import CopyRow from "./CopyRow";

import { siteConfig } from "../../config/siteConfig";

import type { DonateContent, PaymentMethod } from "./types/donate.types";

interface PaymentMethodsProps {
  content: DonateContent;
}

const PaymentMethods = ({ content }: PaymentMethodsProps) => {
  const d = content;

  const cfg = siteConfig.donate;

  const [tab, setTab] = useState<PaymentMethod>("mobile");

  const tabs: {
    key: PaymentMethod;
    label: string;
  }[] = [
    {
      key: "mobile",
      label: d.mobile,
    },
    {
      key: "bank",
      label: d.bank,
    },
    {
      key: "card",
      label: d.card,
    },
  ];

  const mobileAccounts = cfg.mobileMoney.filter(
    (account) => account.number.trim() && account.holder.trim(),
  );

  const hasBankAccount = Boolean(
    cfg.bank.bankName.trim() &&
    cfg.bank.accountName.trim() &&
    cfg.bank.accountNumber.trim(),
  );

  const bankDetails = [
    {
      label: d.bankName,
      value: cfg.bank.bankName,
    },
    {
      label: d.accountName,
      value: cfg.bank.accountName,
    },
    {
      label: d.accountNumber,
      value: cfg.bank.accountNumber,
    },
    {
      label: d.iban,
      value: cfg.bank.iban,
    },
    {
      label: d.swift,
      value: cfg.bank.swift,
    },
  ];

  return (
    <div>
      <h3 className="mt-8 font-display text-lg font-bold text-forest-900">
        {d.howT}
      </h3>

      {/* Payment method selector */}
      <div
        role="group"
        aria-label={d.howT}
        className="mt-3 flex gap-1 rounded-full bg-paper-deep p-1"
      >
        {tabs.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            aria-pressed={tab === key}
            onClick={() => setTab(key)}
            className={`flex-1 rounded-full px-3 py-2 font-display text-sm font-bold transition-colors ${
              tab === key
                ? "bg-forest-900 text-paper"
                : "text-forest-900 hover:bg-white/60"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Payment details */}
      <div className="mt-4">
        {/* Mobile Money */}
        {tab === "mobile" &&
          mobileAccounts.map((account) => (
            <div
              key={account.provider}
              className="mb-4 rounded-2xl border border-forest-900/15 bg-white px-5 py-3 last:mb-0"
            >
              <p className="font-display text-base font-extrabold text-leaf-600">
                {account.provider}
              </p>

              <CopyRow
                label={d.number}
                value={account.number}
                copyLabel={d.copy}
                copiedLabel={d.copied}
              />

              <CopyRow
                label={d.holder}
                value={account.holder}
                copyLabel={d.copy}
                copiedLabel={d.copied}
              />
            </div>
          ))}

        {/* Bank transfer */}
        {tab === "bank" && hasBankAccount && (
          <div className="rounded-2xl border border-forest-900/15 bg-white px-5 py-3">
            {bankDetails.map((detail) => (
              <CopyRow
                key={detail.label}
                label={detail.label}
                value={detail.value}
                copyLabel={d.copy}
                copiedLabel={d.copied}
              />
            ))}
          </div>
        )}

        {/* International card payment */}
        {tab === "card" &&
          (cfg.international.link ? (
            <a
              href={cfg.international.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-millet-500 px-7 py-3.5 font-display text-lg font-bold text-forest-950 hover:bg-millet-600"
            >
              {d.cardCta}
            </a>
          ) : (
            <p className="rounded-2xl border border-forest-900/15 bg-white px-5 py-4 leading-snug text-ink/85">
              {d.cardSoon}
            </p>
          ))}

        {/* Missing account configuration */}
        {((tab === "mobile" && mobileAccounts.length === 0) ||
          (tab === "bank" && !hasBankAccount)) && (
          <p className="rounded-2xl border border-forest-900/15 bg-white px-5 py-4 leading-snug text-ink/85">
            {d.unavailable}
          </p>
        )}
      </div>
    </div>
  );
};

export default PaymentMethods;
