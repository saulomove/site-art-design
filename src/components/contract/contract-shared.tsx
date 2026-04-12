"use client";

import React from "react";

/* ------------------------------------------------------------------ */
/*  Contract Data Interface                                           */
/* ------------------------------------------------------------------ */

export interface ContractData {
  slug: string;
  contractNumber: string;
  startDate: string;
  clientName: string;
  clientDocument: string;
  clientAddress: string;
  clientCityState: string;
  clientCep: string;
  clientRepresentative: string;
  monthlyValue: string;
  monthlyValueFull: string;
  paymentDay: string;
  signatureCity: string;
  signatureDate: string;
}

export interface ContractEntry extends ContractData {
  template: string;
}

/* ------------------------------------------------------------------ */
/*  Contracts Registry                                                */
/* ------------------------------------------------------------------ */

export const contracts: Record<string, ContractEntry> = {
  "dr-james-olaya": {
    slug: "dr-james-olaya",
    template: "ecossistema-digital",
    contractNumber: "049/2026",
    startDate: "15/04/2026",
    clientName: "James Olaya",
    clientDocument: "",
    clientAddress: "",
    clientCityState: "",
    clientCep: "",
    clientRepresentative: "James Olaya",
    monthlyValue: "R$ 2.250,00",
    monthlyValueFull: "dois mil duzentos e cinquenta reais",
    paymentDay: "",
    signatureCity: "Caçador/SC",
    signatureDate: "",
  },
  "dr-james-olaya-ecommerce": {
    slug: "dr-james-olaya-ecommerce",
    template: "ecommerce",
    contractNumber: "050/2026",
    startDate: "",
    clientName: "James Olaya",
    clientDocument: "",
    clientAddress: "",
    clientCityState: "",
    clientCep: "",
    clientRepresentative: "James Olaya",
    monthlyValue: "R$ 1.500,00",
    monthlyValueFull: "mil e quinhentos reais",
    paymentDay: "",
    signatureCity: "Caçador/SC",
    signatureDate: "",
  },
};

/* ------------------------------------------------------------------ */
/*  Editable Field Components                                         */
/* ------------------------------------------------------------------ */

export function EditableField({
  value,
  onChange,
  placeholder,
  className = "",
  multiline = false,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  className?: string;
  multiline?: boolean;
}) {
  if (multiline) {
    return (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={2}
        className={`editable-field border-b-2 border-dashed border-brand-blue/40 bg-brand-blue/5 px-2 py-1 text-foreground outline-none transition-colors focus:border-brand-blue focus:bg-brand-blue/10 print:border-0 print:bg-transparent print:p-0 ${className}`}
      />
    );
  }

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`editable-field border-b-2 border-dashed border-brand-blue/40 bg-brand-blue/5 px-2 py-1 text-foreground outline-none transition-colors focus:border-brand-blue focus:bg-brand-blue/10 print:border-0 print:bg-transparent print:p-0 ${className}`}
    />
  );
}

export function SelectField({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { label: string; value: string }[];
  placeholder: string;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="editable-field border-b-2 border-dashed border-brand-blue/40 bg-brand-blue/5 px-2 py-1 text-foreground outline-none transition-colors focus:border-brand-blue focus:bg-brand-blue/10 print:border-0 print:bg-transparent print:p-0 print:appearance-none"
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

/* ------------------------------------------------------------------ */
/*  Layout Helper Components                                          */
/* ------------------------------------------------------------------ */

export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-lg font-bold text-gray-900 print:text-base">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function SubSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-5 mb-4">
      <h3 className="mb-2 text-sm font-bold text-gray-800">{title}</h3>
      {children}
    </div>
  );
}

export function Hr() {
  return <hr className="my-8 border-gray-200 print:border-gray-300" />;
}

export function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2 py-0.5 text-sm">
      <span className="w-36 shrink-0 font-semibold text-gray-600">{label}:</span>
      <span>{value}</span>
    </div>
  );
}

export function HighlightBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-lg border-l-4 border-brand-orange bg-brand-orange/5 p-4 text-sm print:border-gray-400 print:bg-gray-50">
      {children}
    </div>
  );
}

export function ServiceBlock({
  number,
  title,
  description,
  items,
}: {
  number: string;
  title: string;
  description?: string;
  items: string[];
}) {
  return (
    <div className="mt-5 mb-4">
      <h3 className="mb-1 text-sm font-bold text-gray-800">
        {number}. {title}
      </h3>
      {description && (
        <p className="mb-2 text-sm text-gray-600">{description}</p>
      )}
      <ul className="ml-6 list-disc space-y-1 text-sm">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function DiagnosticBlock({
  works,
  issues,
}: {
  works: string[];
  issues: string[];
}) {
  return (
    <div className="space-y-3 text-sm">
      <div>
        <p className="mb-1 font-semibold text-green-700 print:text-gray-800">
          O que já funciona:
        </p>
        <ul className="ml-6 list-disc space-y-1">
          {works.map((w, i) => (
            <li key={i}>{w}</li>
          ))}
        </ul>
      </div>
      <div>
        <p className="mb-1 font-semibold text-red-600 print:text-gray-800">
          Gargalos identificados:
        </p>
        <ul className="ml-6 list-disc space-y-1">
          {issues.map((issue, i) => (
            <li key={i}>{issue}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Shared Contract Sections (Header, Parties, Signatures)            */
/* ------------------------------------------------------------------ */

export function ContractHeader({
  title,
  data,
}: {
  title: string;
  data: ContractData;
}) {
  return (
    <div className="mb-10 text-center">
      <h1 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 print:text-xl">
        {title}
      </h1>
      <div className="flex justify-center gap-8 text-sm text-gray-600">
        <span>
          <strong>CONTRATO Nº:</strong> {data.contractNumber}
        </span>
        {data.startDate && (
          <span>
            <strong>DATA DE INÍCIO:</strong> {data.startDate}
          </span>
        )}
      </div>
    </div>
  );
}

export function ContractParties({
  data,
  update,
}: {
  data: ContractData;
  update: (field: keyof ContractData) => (value: string) => void;
}) {
  return (
    <Section title="PARTES">
      <div className="mb-6 rounded-lg border border-gray-200 bg-gray-50 p-5 print:border-gray-300 print:bg-white">
        <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-brand-blue print:text-gray-900">
          Contratada
        </h3>
        <InfoRow label="Razão Social" value="51.035.885 SAULO CRISTIANO MACHADO" />
        <InfoRow label="CNPJ" value="51.035.885/0001-03" />
        <InfoRow label="Endereço" value="Rua Estefano João Fabiano, 59, Bairro Municípios" />
        <InfoRow label="Cidade/Estado" value="Caçador/SC" />
        <InfoRow label="CEP" value="89505-020" />
        <InfoRow label="Representante Legal" value="Saulo Cristiano Machado" />
        <InfoRow label="CPF" value="009.737.119-06" />
        <InfoRow label="Nome Fantasia" value="ArtDesign" />
      </div>

      <div className="rounded-lg border-2 border-brand-blue/20 bg-brand-blue/5 p-5 print:border-gray-300 print:bg-white">
        <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-brand-blue print:text-gray-900">
          Contratante
          <span className="ml-2 text-xs font-normal text-brand-orange print:hidden">
            (campos editáveis)
          </span>
        </h3>
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-36 text-sm font-semibold text-gray-600 shrink-0">
              Nome/Razão Social:
            </span>
            <EditableField
              value={data.clientName}
              onChange={update("clientName")}
              placeholder="Nome completo ou razão social"
              className="flex-1 min-w-[200px]"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-36 text-sm font-semibold text-gray-600 shrink-0">
              CNPJ/CPF:
            </span>
            <EditableField
              value={data.clientDocument}
              onChange={update("clientDocument")}
              placeholder="000.000.000-00 ou 00.000.000/0000-00"
              className="flex-1 min-w-[200px]"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-36 text-sm font-semibold text-gray-600 shrink-0">
              Endereço:
            </span>
            <EditableField
              value={data.clientAddress}
              onChange={update("clientAddress")}
              placeholder="Rua, número, bairro"
              className="flex-1 min-w-[200px]"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-36 text-sm font-semibold text-gray-600 shrink-0">
              Cidade/Estado:
            </span>
            <EditableField
              value={data.clientCityState}
              onChange={update("clientCityState")}
              placeholder="Cidade/UF"
              className="flex-1 min-w-[200px]"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-36 text-sm font-semibold text-gray-600 shrink-0">
              CEP:
            </span>
            <EditableField
              value={data.clientCep}
              onChange={update("clientCep")}
              placeholder="00000-000"
              className="flex-1 min-w-[200px]"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-36 text-sm font-semibold text-gray-600 shrink-0">
              Representante Legal:
            </span>
            <EditableField
              value={data.clientRepresentative}
              onChange={update("clientRepresentative")}
              placeholder="Nome do representante"
              className="flex-1 min-w-[200px]"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export function ContractSignatures({
  data,
  update,
}: {
  data: ContractData;
  update: (field: keyof ContractData) => (value: string) => void;
}) {
  return (
    <Section title="ASSINATURAS">
      <p className="mb-8 text-sm text-gray-600">
        E por estarem assim justas e contratadas, as partes assinam o presente
        instrumento em 2 (duas) vias de igual teor e forma, na presença de 2 (duas)
        testemunhas.
      </p>

      <p className="mb-10 text-center font-semibold">
        {data.signatureCity},{" "}
        <EditableField
          value={data.signatureDate}
          onChange={update("signatureDate")}
          placeholder="____ de _____________ de 2026"
          className="inline-block w-64 text-center"
        />
      </p>

      <div className="mt-12 grid grid-cols-1 gap-16 md:grid-cols-2 print:grid-cols-2">
        <div className="text-center">
          <div className="mx-auto mb-4 h-px w-64 bg-gray-400" />
          <p className="text-sm font-bold">51.035.885 SAULO CRISTIANO MACHADO</p>
          <p className="text-xs text-gray-500">CNPJ: 51.035.885/0001-03</p>
          <p className="text-xs text-gray-500">
            Saulo Cristiano Machado (Representante Legal)
          </p>
          <p className="text-xs text-gray-500">CPF: 009.737.119-06</p>
        </div>

        <div className="text-center">
          <div className="mx-auto mb-4 h-px w-64 bg-gray-400" />
          <p className="text-sm font-bold uppercase">{data.clientName || "JAMES OLAYA"}</p>
          <p className="text-xs text-gray-500">
            {data.clientDocument
              ? `CNPJ/CPF: ${data.clientDocument}`
              : "CNPJ/CPF: A PREENCHER"}
          </p>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-2 print:grid-cols-2">
        <div className="text-center">
          <div className="mx-auto mb-4 h-px w-64 bg-gray-400" />
          <p className="text-sm text-gray-600">Testemunha 1</p>
          <p className="text-xs text-gray-500">Nome:</p>
          <p className="text-xs text-gray-500">CPF:</p>
        </div>
        <div className="text-center">
          <div className="mx-auto mb-4 h-px w-64 bg-gray-400" />
          <p className="text-sm text-gray-600">Testemunha 2</p>
          <p className="text-xs text-gray-500">Nome:</p>
          <p className="text-xs text-gray-500">CPF:</p>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  Print Styles                                                      */
/* ------------------------------------------------------------------ */

export function ContractPrintStyles() {
  return (
    <style jsx global>{`
      @media print {
        body {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }

        .contract-body {
          font-size: 12px;
          line-height: 1.6;
          padding: 10mm 15mm;
          max-width: 100%;
        }

        .editable-field {
          border: none !important;
          background: transparent !important;
          padding: 0 !important;
        }

        select.editable-field {
          -webkit-appearance: none;
          appearance: none;
        }

        h2 {
          page-break-after: avoid;
        }

        .signature-block {
          page-break-inside: avoid;
        }
      }

      @page {
        size: A4;
        margin: 15mm;
      }
    `}</style>
  );
}
