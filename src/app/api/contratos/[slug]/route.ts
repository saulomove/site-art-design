import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { contracts } from "@/lib/schema";
import { eq } from "drizzle-orm";

// GET - Buscar contrato por slug
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const result = await db
    .select()
    .from(contracts)
    .where(eq(contracts.slug, slug))
    .limit(1);

  if (result.length === 0) {
    return NextResponse.json(null, { status: 404 });
  }

  return NextResponse.json(result[0]);
}

// PUT - Criar ou atualizar contrato
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const body = await request.json();

  const existing = await db
    .select()
    .from(contracts)
    .where(eq(contracts.slug, slug))
    .limit(1);

  if (existing.length === 0) {
    // Criar novo
    const newContract = await db
      .insert(contracts)
      .values({
        slug,
        contractNumber: body.contractNumber,
        startDate: body.startDate,
        clientName: body.clientName,
        clientDocument: body.clientDocument || "",
        clientAddress: body.clientAddress || "",
        clientCityState: body.clientCityState || "",
        clientCep: body.clientCep || "",
        clientRepresentative: body.clientRepresentative || "",
        monthlyValue: body.monthlyValue,
        monthlyValueFull: body.monthlyValueFull,
        paymentDay: body.paymentDay || "",
        signatureCity: body.signatureCity || "Caçador/SC",
        signatureDate: body.signatureDate || "",
      })
      .returning();

    return NextResponse.json(newContract[0], { status: 201 });
  }

  // Atualizar existente
  const updated = await db
    .update(contracts)
    .set({
      contractNumber: body.contractNumber,
      startDate: body.startDate,
      clientName: body.clientName,
      clientDocument: body.clientDocument || "",
      clientAddress: body.clientAddress || "",
      clientCityState: body.clientCityState || "",
      clientCep: body.clientCep || "",
      clientRepresentative: body.clientRepresentative || "",
      monthlyValue: body.monthlyValue,
      monthlyValueFull: body.monthlyValueFull,
      paymentDay: body.paymentDay || "",
      signatureCity: body.signatureCity || "Caçador/SC",
      signatureDate: body.signatureDate || "",
      updatedAt: new Date(),
    })
    .where(eq(contracts.slug, slug))
    .returning();

  return NextResponse.json(updated[0]);
}
