"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Timer, Bell, Calculator } from "lucide-react";
import {
  VinicolaDivider,
  VinicolaSectionHeader,
  VinicolaEyebrow,
} from "../proposal-vinicola/vinicola-ui";

/** Litragem real produzida na safra 2026, apurada na planilha da vinícola. */
const LITROS_SAFRA = 194748;

function brl(v: number) {
  return v.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
}

/** Faixas ilustrativas — os valores reais serão definidos pela vinícola no editor. */
const FAIXAS = [
  {
    janela: "Até 12 meses",
    rotulo: "Dentro da faixa",
    cor: "bg-[#4F7A63]",
    texto: "text-[#6D9B83]",
    borda: "border-[#4F7A63]/35",
    largura: "w-[46%]",
  },
  {
    janela: "13 a 24 meses",
    rotulo: "Faixa seguinte",
    cor: "bg-[#CA8B35]",
    texto: "text-[#CA8B35]",
    borda: "border-[#CA8B35]/35",
    largura: "w-[30%]",
  },
  {
    janela: "Acima de 24 meses",
    rotulo: "Faixa estendida",
    cor: "bg-[#B5342B]",
    texto: "text-[#D4574D]",
    borda: "border-[#B5342B]/35",
    largura: "w-[24%]",
  },
] as const;

export function ProposalGenyusGuarda() {
  const [percentual, setPercentual] = useState(30);
  const [tarifa, setTarifa] = useState(0.12);

  const litrosEmGuarda = Math.round((LITROS_SAFRA * percentual) / 100);
  const mensal = litrosEmGuarda * tarifa;
  const anual = mensal * 12;

  return (
    <section
      id="guarda"
      className="relative scroll-mt-[68px] overflow-hidden bg-[#0B0B0B] py-24 md:py-32"
    >
      <VinicolaDivider />

      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[55%] w-[80%] -translate-x-1/2 rounded-full bg-[#CA8B35]/[0.08] blur-[170px]" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <VinicolaSectionHeader
          eyebrow="O coração do sistema"
          title="O vinho fica parado por anos."
          italic="A cobrança, não."
          lead="Este é o item que nenhum ERP de prateleira resolve, porque não é engenharia de produção — é regra comercial. E é onde está o dinheiro que hoje escapa sem ninguém sentir falta."
        />

        {/* O caso real */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mb-8 border-l-2 border-[#B5342B] bg-[#121110] p-8 md:p-10"
        >
          <VinicolaEyebrow>Um caso real, da sua planilha</VinicolaEyebrow>
          <div className="mt-6 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="font-playfair text-xl font-medium leading-snug text-white md:text-2xl">
                Pinot Noir da CATA, 5.000 kg, recebido em 10 de abril de 2025.
                Consta como fermentando até hoje.
              </p>
              <p className="mt-5 text-[15px] leading-relaxed text-[#CCCCCC]/60">
                Ocupou tanque por catorze meses. Gerou 3.400 litros. Foi cobrado
                pela prensagem e pela vinificação — e nada pela guarda, porque
                não existe onde registrar isso.
              </p>
            </div>
            <div className="flex-shrink-0 text-center md:text-right">
              <p className="font-playfair text-6xl font-medium text-[#B5342B] md:text-7xl">
                14
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-[#CCCCCC]/45">
                meses parado
              </p>
            </div>
          </div>
        </motion.div>

        {/* A política */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mb-8 border border-[#CCCCCC]/10 bg-[#121110] p-8 md:p-10"
        >
          <div className="mb-8 flex items-start gap-4">
            <Timer className="mt-1 h-5 w-5 flex-shrink-0 text-[#CA8B35]" />
            <div>
              <h3 className="font-playfair text-xl font-medium text-white md:text-2xl">
                A vinícola define a política. O sistema aplica sozinho.
              </h3>
              <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#CCCCCC]/60">
                Hoje a guarda é cobrada caso a caso, o que na prática significa
                quando alguém lembra. O Genyus Wine não chega com uma regra
                pronta: ele traz o editor onde a Fran cria a dela — faixas de
                tempo, unidade e valor. O cálculo acumula por período, sem
                retroagir sobre o tempo já corrido.
              </p>
            </div>
          </div>

          {/* Barra de faixas */}
          <div className="mt-10">
            <div className="flex h-3 w-full overflow-hidden">
              {FAIXAS.map((f) => (
                <div key={f.janela} className={`${f.largura} ${f.cor}`} />
              ))}
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {FAIXAS.map((f) => (
                <div key={f.janela} className={`border-l-2 pl-4 ${f.borda}`}>
                  <p className={`text-[11px] uppercase tracking-[0.18em] ${f.texto}`}>
                    {f.rotulo}
                  </p>
                  <p className="mt-1.5 text-sm text-[#CCCCCC]/75">{f.janela}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[13px] italic text-[#CCCCCC]/40">
              Faixas ilustrativas. Os valores reais são definidos pela vinícola
              no editor de política, e podem ser alterados a qualquer momento.
            </p>
          </div>
        </motion.div>

        {/* Alertas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-16 grid gap-4 sm:grid-cols-3"
        >
          {[
            {
              dias: "90 dias",
              texto: "Aviso antecipado para renegociar a permanência com o produtor",
            },
            {
              dias: "60 dias",
              texto: "Segundo aviso, já com o valor da faixa seguinte calculado",
            },
            {
              dias: "30 dias",
              texto: "Alerta final para diretoria e financeiro antes da virada",
            },
          ].map((a) => (
            <div
              key={a.dias}
              className="border border-[#CA8B35]/20 bg-[#CA8B35]/[0.05] p-6"
            >
              <Bell className="h-4 w-4 text-[#CA8B35]" />
              <p className="mt-4 font-playfair text-2xl font-medium text-white">
                {a.dias}
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-[#CCCCCC]/55">
                {a.texto}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Simulador */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="border-2 border-[#CA8B35]/45 bg-[#161311] p-8 shadow-[0_0_90px_-30px_rgba(202,139,53,0.45)] md:p-12"
        >
          <div className="mb-10 text-center">
            <Calculator className="mx-auto h-6 w-6 text-[#CA8B35]" />
            <h3 className="mt-5 font-playfair text-2xl font-medium text-white md:text-4xl">
              Quanto isso vale por ano?
            </h3>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-[#CCCCCC]/60">
              A conta abaixo usa o volume real da safra 2026 da Santa Augusta —{" "}
              <span className="text-[#CA8B35]">
                {LITROS_SAFRA.toLocaleString("pt-BR")} litros produzidos
              </span>
              . Ajuste os dois controles com a realidade da vinícola e veja o
              resultado.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-14">
            <div className="space-y-10">
              <div>
                <div className="mb-4 flex items-baseline justify-between gap-4">
                  <label
                    htmlFor="pct-guarda"
                    className="text-[11px] uppercase tracking-[0.2em] text-[#CCCCCC]/55"
                  >
                    Quanto do volume fica em guarda
                  </label>
                  <span className="font-playfair text-2xl font-medium text-[#CA8B35]">
                    {percentual}%
                  </span>
                </div>
                <input
                  id="pct-guarda"
                  type="range"
                  min={5}
                  max={100}
                  step={5}
                  value={percentual}
                  onChange={(e) => setPercentual(Number(e.target.value))}
                  className="h-1 w-full cursor-pointer appearance-none rounded-full bg-[#CCCCCC]/15 accent-[#CA8B35]"
                />
                <p className="mt-3 text-[13px] text-[#CCCCCC]/45">
                  {litrosEmGuarda.toLocaleString("pt-BR")} litros em guarda
                </p>
              </div>

              <div>
                <div className="mb-4 flex items-baseline justify-between gap-4">
                  <label
                    htmlFor="tarifa-guarda"
                    className="text-[11px] uppercase tracking-[0.2em] text-[#CCCCCC]/55"
                  >
                    Quanto cobrar por litro, por mês
                  </label>
                  <span className="font-playfair text-2xl font-medium text-[#CA8B35]">
                    {tarifa.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </div>
                <input
                  id="tarifa-guarda"
                  type="range"
                  min={0.02}
                  max={0.5}
                  step={0.01}
                  value={tarifa}
                  onChange={(e) => setTarifa(Number(e.target.value))}
                  className="h-1 w-full cursor-pointer appearance-none rounded-full bg-[#CCCCCC]/15 accent-[#CA8B35]"
                />
                <p className="mt-3 text-[13px] text-[#CCCCCC]/45">
                  {brl(mensal)} por mês sobre esse volume
                </p>
              </div>
            </div>

            <div className="border-t border-[#CA8B35]/20 pt-8 text-center lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0 lg:text-right">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#CCCCCC]/45">
                Receita anual de guarda
              </p>
              <p className="mt-4 font-playfair text-5xl font-medium leading-none text-[#CA8B35] md:text-6xl">
                {brl(anual)}
              </p>
              <p className="mt-6 max-w-xs text-[13px] leading-relaxed text-[#CCCCCC]/50 lg:ml-auto">
                Receita que hoje não é lançada, não é cobrada e não aparece em
                relatório nenhum.
              </p>
            </div>
          </div>

          <p className="mt-10 border-t border-[#CCCCCC]/10 pt-6 text-[13px] leading-relaxed text-[#CCCCCC]/40">
            Simulação sobre o volume real da safra. Não é promessa de receita: o
            percentual em guarda e a tarifa são decisões da vinícola, e nem todo
            lote fica armazenado. Serve para dimensionar o que está em jogo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
