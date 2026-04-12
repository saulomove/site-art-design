"use client";

import { useState, useRef, use, useEffect, useCallback } from "react";
import { notFound } from "next/navigation";
import { Printer, Save, Check, Loader2 } from "lucide-react";
import {
  contracts,
  ContractData,
  ContractPrintStyles,
} from "@/components/contract/contract-shared";
import { TemplateEcossistemaDigital } from "@/components/contract/template-ecossistema-digital";
import { TemplateEcommerce } from "@/components/contract/template-ecommerce";

interface ContractPageProps {
  params: Promise<{ slug: string }>;
}

export default function ContractPage({ params }: ContractPageProps) {
  const { slug } = use(params);
  const entry = contracts[slug];

  if (!entry) {
    notFound();
  }

  const { template, ...contractBase } = entry;

  const [data, setData] = useState<ContractData>(contractBase);
  const [savedData, setSavedData] = useState<ContractData>(contractBase);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved">("idle");
  const [isLoading, setIsLoading] = useState(true);
  const contractRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch(`/api/contratos/${slug}`)
      .then((res) => {
        if (res.ok) return res.json();
        return null;
      })
      .then((dbData) => {
        if (dbData) {
          const loaded: ContractData = {
            slug: dbData.slug,
            contractNumber: dbData.contractNumber,
            startDate: dbData.startDate,
            clientName: dbData.clientName,
            clientDocument: dbData.clientDocument || "",
            clientAddress: dbData.clientAddress || "",
            clientCityState: dbData.clientCityState || "",
            clientCep: dbData.clientCep || "",
            clientRepresentative: dbData.clientRepresentative || "",
            monthlyValue: dbData.monthlyValue,
            monthlyValueFull: dbData.monthlyValueFull,
            paymentDay: dbData.paymentDay || "",
            signatureCity: dbData.signatureCity || "Caçador/SC",
            signatureDate: dbData.signatureDate || "",
          };
          setData(loaded);
          setSavedData(loaded);
        }
      })
      .finally(() => setIsLoading(false));
  }, [slug]);

  const hasChanges = JSON.stringify(data) !== JSON.stringify(savedData);

  const update = (field: keyof ContractData) => (value: string) =>
    setData((prev) => ({ ...prev, [field]: value }));

  const handleSave = useCallback(async () => {
    setSaveStatus("saving");
    try {
      const res = await fetch(`/api/contratos/${slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSavedData({ ...data });
        setSaveStatus("saved");
        setTimeout(() => setSaveStatus("idle"), 2000);
      }
    } catch {
      setSaveStatus("idle");
    }
  }, [data, slug]);

  const handlePrint = () => {
    window.print();
  };

  const templateProps = { data, update };

  return (
    <>
      {/* Floating action bar */}
      <div className="fixed top-4 right-4 z-50 flex gap-3 print:hidden">
        {hasChanges && (
          <button
            onClick={handleSave}
            disabled={saveStatus === "saving"}
            className="flex items-center gap-2 rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:brightness-110 active:scale-95 disabled:opacity-70"
          >
            {saveStatus === "saving" ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Save className="h-4 w-4" />
            )}
            {saveStatus === "saving" ? "Salvando..." : "Salvar Alterações"}
          </button>
        )}
        {saveStatus === "saved" && !hasChanges && (
          <span className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2.5 text-sm font-semibold text-green-700">
            <Check className="h-4 w-4" />
            Salvo
          </span>
        )}
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:brightness-110 active:scale-95"
        >
          <Printer className="h-4 w-4" />
          Imprimir / PDF
        </button>
      </div>

      {/* Loading overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-white/80">
          <div className="flex items-center gap-3 text-gray-600">
            <Loader2 className="h-6 w-6 animate-spin" />
            <span>Carregando contrato...</span>
          </div>
        </div>
      )}

      {/* Contract body */}
      <div
        ref={contractRef}
        className="contract-body mx-auto max-w-[210mm] bg-white px-8 py-12 text-[15px] leading-relaxed text-gray-800 print:max-w-none print:px-0 print:py-0 sm:px-12 md:px-16"
      >
        {template === "ecossistema-digital" && (
          <TemplateEcossistemaDigital {...templateProps} />
        )}
        {template === "ecommerce" && (
          <TemplateEcommerce {...templateProps} />
        )}
      </div>

      <ContractPrintStyles />
    </>
  );
}
