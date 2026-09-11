"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  MapPin, Mic, Check, ChevronRight, Wifi, WifiOff, Package, User, CalendarDays,
} from "lucide-react";
import { EloSection, EloSectionHeader, EloReveal, EloQuote } from "./elo-ui";

/* ================================================================
   O Elo no celular. Não é print: é o app rodando, com aba clicável.
   Quatro telas — o dia, o cliente, o áudio e o pedido.
   ================================================================ */

const mono = "font-mono tabular-nums";
const rot = "font-sans text-[9.5px] font-semibold uppercase tracking-[0.14em] text-[#5E6669]";

type Tela = "hoje" | "cliente" | "gravar" | "pedido";

const ABAS: { id: Tela; label: string; Icon: typeof MapPin }[] = [
  { id: "hoje", label: "Hoje", Icon: CalendarDays },
  { id: "cliente", label: "Cliente", Icon: User },
  { id: "gravar", label: "Relatório", Icon: Mic },
  { id: "pedido", label: "Pedido", Icon: Package },
];

const LEGENDA: Record<Tela, { t: string; d: string; p: string[] }> = {
  hoje: {
    t: "O dia inteiro numa tela",
    d: "O representante abre o app no carro, antes de sair. Cinco visitas, a quilometragem prevista e o que ficou pendente da última vez em cada uma.",
    p: [
      "Check-in é declaratório: ele confirma que chegou, ninguém rastreia o carro dele",
      "O motivo da visita vem do próprio histórico — amostra parada, reclamação aberta, reajuste",
      "Funciona sem sinal: a fábrica do cliente quase nunca tem",
    ],
  },
  cliente: {
    t: "Tudo do cliente, em pé no corredor da fábrica",
    d: "A ficha 360 completa cabe no bolso. Antes de entrar na sala da compradora, ele já sabe quanto ela comprou, o que reclamou e o que ficou combinado da última vez.",
    p: [
      "Doze meses de receita, com a variação contra o ano anterior",
      "Reclamação aberta em destaque — ele não é pego de surpresa",
      "A memória técnica: a BRF já reprovou amostra por selagem a 148 °C",
    ],
  },
  gravar: {
    t: "Ele fala. O Elo escreve.",
    d: "Saindo da visita, ainda no estacionamento, ele aperta o botão e fala por um minuto e meio. O relatório estruturado aparece no painel da matriz antes dele chegar no próximo cliente.",
    p: [
      "Um minuto e meio de fala vira visita registrada, pendência e próxima ação",
      "Quem não quiser instalar nada manda o mesmo áudio pelo WhatsApp",
      "Nada de formulário: digitar é exatamente o que nunca vai acontecer",
    ],
  },
  pedido: {
    t: "O pedido nasce no cliente, não no e-mail",
    d: "Produto, volume, preço da tabela vigente e margem calculada na hora. Sai do celular para a aprovação interna — e só depois vira pedido no SAP.",
    p: [
      "Alerta na tela quando o preço fica abaixo do piso da linha",
      "Prazo por planta: Videira tem FFS, Três Rios tem stretch",
      "O SAP continua sendo a verdade — o Elo só prepara o que entra nele",
    ],
  },
};

const ROTA = [
  { h: "08:30", c: "BRF S.A. — Capinzal/SC", o: "Amostra de termoformado em teste há 22 dias", km: "0 km", s: "feito" },
  { h: "10:15", c: "Coop. Languiru — Teutônia/RS", o: "Reclamação de solda fria em aberto", km: "64 km", s: "agora" },
  { h: "13:40", c: "Pamplona Alimentos — Rio do Sul/SC", o: "Reajuste de tabela a comunicar", km: "128 km", s: "" },
  { h: "16:00", c: "Frigorífico Alibem — Santa Rosa/RS", o: "Sem compra há 96 dias", km: "214 km", s: "" },
];

const TRANSCRICAO =
  "Estive na BRF Capinzal com a Marlene. A amostra de termoformado está parada no laboratório há vinte e dois dias, ela cobrou retorno. Falou também que a linha de cortes vai subir volume em novembro e que precisaria de filme FFS cento e vinte para acompanhar. Deixei combinado de mandar a cotação até sexta.";

/* ---------- forma de onda ao vivo ---------- */
function Onda({ ativo }: { ativo: boolean }) {
  const barras = 44;
  return (
    <div className="flex h-12 items-center justify-center gap-[3px]" aria-hidden>
      {Array.from({ length: barras }).map((_, i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-[2px] bg-[#D51920]"
          animate={
            ativo
              ? { height: [5, 6 + ((i * 13) % 30), 5 + ((i * 7) % 18), 8 + ((i * 5) % 26), 5] }
              : { height: 5 }
          }
          transition={
            ativo
              ? { duration: 1.1 + (i % 5) * 0.16, repeat: Infinity, ease: "easeInOut", delay: (i % 9) * 0.05 }
              : { duration: 0.3 }
          }
          style={{ height: 5 }}
        />
      ))}
    </div>
  );
}

/* ---------- as quatro telas ---------- */

function TelaHoje() {
  return (
    <div className="space-y-2.5 p-3">
      <div className="border border-[#DCE0E0] bg-[#F6F7F7] p-3">
        <div className="flex items-baseline justify-between">
          <span className={rot}>Roteiro de hoje</span>
          <span className={`text-[9.5px] text-[#5E6669] ${mono}`}>11/09/2026</span>
        </div>
        <div className="mt-2.5 flex gap-6">
          {[["5", "visitas"], ["1", "concluída"], ["214", "km"]].map(([v, l]) => (
            <div key={l}>
              <p className={`text-[20px] font-bold leading-none text-[#131516] ${mono}`}>{v}</p>
              <p className="mt-1 text-[9.5px] text-[#5E6669]">{l}</p>
            </div>
          ))}
        </div>
      </div>

      {ROTA.map((r) => (
        <div
          key={r.h}
          className={`border p-3 ${r.s === "agora" ? "border-[#D51920]/50 bg-[#D51920]/[0.04]" : "border-[#DCE0E0] bg-white"}`}
        >
          <div className="flex items-center gap-2">
            <span className={`text-[11px] font-semibold text-[#131516] ${mono}`}>{r.h}</span>
            {r.s === "feito" && (
              <span className="inline-flex items-center gap-1 rounded-[3px] border border-[#2E7355]/45 bg-[#2E7355]/[0.07] px-1.5 py-[2px] text-[8.5px] font-semibold uppercase tracking-[0.1em] text-[#2E7355]">
                <Check className="h-2.5 w-2.5" /> visitado
              </span>
            )}
            {r.s === "agora" && (
              <span className="rounded-[3px] border border-[#D51920]/50 bg-[#D51920]/[0.07] px-1.5 py-[2px] text-[8.5px] font-semibold uppercase tracking-[0.1em] text-[#D51920]">
                próxima
              </span>
            )}
            <span className={`ml-auto text-[9.5px] text-[#5E6669] ${mono}`}>{r.km}</span>
          </div>
          <p className="mt-2 text-[12px] font-semibold leading-snug text-[#131516]">{r.c}</p>
          <p className="mt-1 text-[10.5px] leading-snug text-[#5E6669]">{r.o}</p>
          {r.s === "agora" && (
            <div className="mt-2.5 grid grid-cols-2 gap-2">
              <span className="rounded-[4px] bg-[#D51920] py-2 text-center font-sans text-[11px] font-semibold text-white">
                Fazer check-in
              </span>
              <span className="rounded-[4px] border border-[#DCE0E0] py-2 text-center text-[11px] text-[#5E6669]">
                Abrir ficha
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function TelaCliente() {
  return (
    <div className="space-y-2.5 p-3">
      <div className="border border-[#DCE0E0] bg-white p-3">
        <p className="font-sans text-[14px] font-bold leading-tight text-[#131516]">BRF S.A.</p>
        <p className="mt-1 text-[10.5px] text-[#5E6669]">Unidade Capinzal/SC · Marlene Kuhn, compras</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="border border-[#EDEFEF] bg-[#F6F7F7] p-2.5">
            <p className={rot}>Receita 12 m</p>
            <p className={`mt-1.5 text-[16px] font-bold leading-none text-[#131516] ${mono}`}>R$ 4,18 mi</p>
            <p className={`mt-1 text-[9.5px] text-[#C0453A] ${mono}`}>−11,4% vs. 12 m anteriores</p>
          </div>
          <div className="border border-[#EDEFEF] bg-[#F6F7F7] p-2.5">
            <p className={rot}>Última compra</p>
            <p className={`mt-1.5 text-[16px] font-bold leading-none text-[#131516] ${mono}`}>34 dias</p>
            <p className="mt-1 text-[9.5px] text-[#5E6669]">Termoformado PA/PE 150µ</p>
          </div>
        </div>
      </div>

      <div className="border border-[#C0453A]/45 bg-[#C0453A]/[0.05] p-3">
        <p className="font-sans text-[9.5px] font-semibold uppercase tracking-[0.14em] text-[#C0453A]">
          Reclamação em aberto
        </p>
        <p className="mt-1.5 text-[11.5px] leading-snug text-[#131516]">
          Solda fria em lote de 2,4 t, aberta há 9 dias. Laudo do laboratório pendente.
        </p>
      </div>

      <div className="border border-[#8A6115]/45 bg-[#8A6115]/[0.05] p-3">
        <p className="font-sans text-[9.5px] font-semibold uppercase tracking-[0.14em] text-[#8A6115]">
          Memória técnica do cliente
        </p>
        <p className="mt-1.5 text-[11.5px] leading-snug text-[#131516]">
          A BRF já reprovou 2 amostras por selagem a 148 °C. A linha dela exige 152 °C — não repetir a
          especificação anterior.
        </p>
      </div>

      <div className="border border-[#DCE0E0] bg-white p-3">
        <p className={rot}>Próxima ação sugerida</p>
        <p className="mt-1.5 text-[11.5px] leading-snug text-[#131516]">
          Cobrar o resultado da amostra de termoformado — 22 dias em teste, 7 acima do prazo típico.
        </p>
      </div>

      <div className="rounded-[4px] bg-[#D51920] py-2.5 text-center font-sans text-[11.5px] font-semibold text-white">
        Registrar visita
      </div>
    </div>
  );
}

function TelaGravar() {
  const [seg, setSeg] = useState(0);
  const todas = TRANSCRICAO.split(" ");
  const palavras = Math.min(todas.length, Math.round((seg / 62) * todas.length));

  useEffect(() => {
    const t = setInterval(() => setSeg((s) => (s > 96 ? 0 : s + 1)), 260);
    return () => clearInterval(t);
  }, []);

  const mm = String(Math.floor(seg / 60)).padStart(2, "0");
  const ss = String(seg % 60).padStart(2, "0");

  return (
    <div className="space-y-3 p-3">
      <div className="border border-[#DCE0E0] bg-white p-3">
        <p className={rot}>Relatório da visita</p>
        <p className="mt-1.5 text-[11.5px] leading-snug text-[#131516]">
          BRF S.A. — Capinzal/SC · hoje, 09:52
        </p>
      </div>

      <div className="border border-[#DCE0E0] bg-[#F6F7F7] px-3 py-4">
        <Onda ativo />
        <p className={`mt-2 text-center text-[22px] font-bold leading-none text-[#131516] ${mono}`}>
          {mm}:{ss}
        </p>
        <p className="mt-1.5 text-center text-[9.5px] uppercase tracking-[0.14em] text-[#D51920]">
          gravando
        </p>
        <div className="mt-4 flex justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D51920] shadow-[0_0_0_6px_rgba(213,25,32,0.14)]">
            <Mic className="h-6 w-6 text-white" />
          </span>
        </div>
      </div>

      <div className="border border-[#DCE0E0] bg-white p-3">
        <div className="flex items-center justify-between">
          <span className={rot}>Transcrevendo</span>
          <span className={`text-[9px] text-[#2E7355] ${mono}`}>no aparelho</span>
        </div>
        <p className="mt-2 min-h-[76px] text-[11px] leading-relaxed text-[#131516]">
          {todas.slice(0, palavras).join(" ")}
          <span className="ml-0.5 inline-block h-[11px] w-[5px] translate-y-[1px] bg-[#D51920]" />
        </p>
      </div>

      <div className="border border-[#EDEFEF] bg-[#F6F7F7] p-3">
        <p className={rot}>O Elo já separou</p>
        <ul className="mt-2 space-y-1.5">
          {[
            ["Pendência", "Amostra em teste há 22 dias — cobrar laboratório"],
            ["Oportunidade", "FFS 120µ para a linha de cortes, alta em novembro"],
            ["Compromisso", "Enviar cotação até sexta-feira, 18/09"],
          ].map(([k, v]) => (
            <li key={k} className="flex gap-2 text-[10.5px] leading-snug">
              <span className="w-[74px] flex-shrink-0 font-sans font-semibold text-[#5E6669]">{k}</span>
              <span className="min-w-0 text-[#131516]">{v}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-center text-[10px] text-[#5E6669]">
        ou mande o mesmo áudio pelo WhatsApp — dá no mesmo
      </p>
    </div>
  );
}

function TelaPedido() {
  return (
    <div className="space-y-2.5 p-3">
      <div className="border border-[#DCE0E0] bg-white p-3">
        <p className={rot}>Cliente</p>
        <p className="mt-1.5 text-[12.5px] font-semibold text-[#131516]">BRF S.A. — Capinzal/SC</p>
      </div>

      <div className="border border-[#DCE0E0] bg-white p-3">
        <p className={rot}>Item</p>
        <p className="mt-1.5 text-[12.5px] font-semibold text-[#131516]">Filme FFS 120µ</p>
        <p className="mt-1 text-[10.5px] text-[#5E6669]">Bobina 720 mm · tratamento corona · impresso 4 cores</p>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            ["Volume", "18.000 kg"],
            ["Tabela", "R$ 14,92/kg"],
            ["Praticado", "R$ 14,20/kg"],
          ].map(([k, v]) => (
            <div key={k} className="min-w-0">
              <p className={rot}>{k}</p>
              <p className={`mt-1 text-[12px] font-semibold text-[#131516] ${mono}`}>{v}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-[#8A6115]/45 bg-[#8A6115]/[0.06] p-3">
        <p className="font-sans text-[9.5px] font-semibold uppercase tracking-[0.14em] text-[#8A6115]">
          Abaixo do piso da linha
        </p>
        <p className="mt-1.5 text-[11px] leading-snug text-[#131516]">
          Piso do FFS 120µ é R$ 14,45/kg. Margem cai para 18,1%. Precisa de aprovação da gerência.
        </p>
      </div>

      <div className="border border-[#DCE0E0] bg-[#F6F7F7] p-3">
        <div className="flex items-baseline justify-between">
          <span className={rot}>Total do pedido</span>
          <span className={`text-[19px] font-bold leading-none text-[#131516] ${mono}`}>R$ 255.600</span>
        </div>
        <p className="mt-2 text-[10px] text-[#5E6669]">
          Produção em Videira/SC · entrega prevista 02/10/2026
        </p>
      </div>

      <div className="rounded-[4px] bg-[#D51920] py-2.5 text-center font-sans text-[11.5px] font-semibold text-white">
        Enviar para aprovação
      </div>
    </div>
  );
}

const TELAS: Record<Tela, () => React.JSX.Element> = {
  hoje: TelaHoje,
  cliente: TelaCliente,
  gravar: TelaGravar,
  pedido: TelaPedido,
};

export function ProposalEloMobile() {
  const [tela, setTela] = useState<Tela>("gravar");
  const [online, setOnline] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const visivel = useInView(ref, { once: false, margin: "-120px" });
  const Atual = TELAS[tela];
  const leg = LEGENDA[tela];

  /* o app alterna sozinho entre com e sem sinal, como na estrada */
  useEffect(() => {
    if (!visivel) return;
    const t = setInterval(() => setOnline((o) => !o), 4200);
    return () => clearInterval(t);
  }, [visivel]);

  return (
    <EloSection id="mobile" tone="darker">
      <div className="pointer-events-none absolute right-0 top-1/3 h-[50%] w-[60%] rounded-full bg-[#D51920]/[0.07] blur-[160px]" />

      <EloSectionHeader
        eyebrow="O sistema no celular"
        title="O representante não vai abrir um computador."
        lead="Ele está no carro, no pátio da fábrica, com o celular numa mão. Se o sistema não couber aí, não existe. Toque nas abas abaixo — é o app rodando de verdade, não uma foto."
      />

      <EloReveal>
        <div ref={ref} className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_330px] lg:items-start lg:gap-16">
          {/* coluna de leitura */}
          <div className="min-w-0 lg:pt-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={tela}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.32 }}
              >
                <p className="font-sans text-[26px] font-bold leading-[1.1] tracking-[-0.02em] text-[#EDF0EF] md:text-[38px]">
                  {leg.t}
                </p>
                <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#9BA5A7] md:text-[16.5px]">
                  {leg.d}
                </p>
                <ul className="mt-7 space-y-3.5">
                  {leg.p.map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <ChevronRight className="mt-[3px] h-3.5 w-3.5 flex-shrink-0 text-[#E8343C]" />
                      <span className="min-w-0 text-[14px] leading-snug text-[#EDF0EF]">{t}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 border-t border-[#272C2E] pt-8">
              <EloQuote t="41:12" who="Saulo · Genyus" hot>
                O objetivo principal do sistema é o representante. Se ele não usar, nada acontece —
                nenhum dado entra, nenhum painel enche.
              </EloQuote>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="min-w-0 border border-[#272C2E] bg-[#15181A] p-6">
                <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#47A87D]">
                  Para quem não quiser instalar nada
                </p>
                <p className="mt-3.5 text-[13.5px] leading-relaxed text-[#9BA5A7]">
                  Nem todo representante PJ vai aceitar um app da representada no celular dele — e
                  tudo bem. Esse continua mandando o áudio pelo WhatsApp, como já faz hoje. O Elo
                  recebe pelos dois caminhos e o resultado no painel é idêntico.
                </p>
              </div>
              <div className="min-w-0 border border-[#272C2E] bg-[#15181A] p-6">
                <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#C9A04A]">
                  Offline é o padrão, não a exceção
                </p>
                <p className="mt-3.5 text-[13.5px] leading-relaxed text-[#9BA5A7]">
                  Dentro de um frigorífico não há sinal, e é exatamente ali que o dado nasce. Tudo é
                  gravado no aparelho e sobe quando a linha volta — o representante nunca perde o que
                  falou, nem precisa pensar nisso.
                </p>
              </div>
            </div>
          </div>

          {/* o aparelho */}
          <div className="mx-auto w-full max-w-[330px]">
            <div className="relative rounded-[34px] border-[9px] border-[#272C2E] bg-[#0E1011] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.9)]">
              <div className="overflow-hidden rounded-[25px] bg-white">
                {/* barra de status */}
                <div className="flex items-center justify-between bg-[#F6F7F7] px-4 pb-1.5 pt-3">
                  <span className={`text-[10px] font-semibold text-[#131516] ${mono}`}>09:52</span>
                  <span className="flex items-center gap-1.5">
                    <AnimatePresence mode="wait">
                      {online ? (
                        <motion.span
                          key="on"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className={`flex items-center gap-1 text-[9px] text-[#2E7355] ${mono}`}
                        >
                          <Wifi className="h-3 w-3" /> SINCRONIZADO
                        </motion.span>
                      ) : (
                        <motion.span
                          key="off"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className={`flex items-center gap-1 text-[9px] text-[#8A6115] ${mono}`}
                        >
                          <WifiOff className="h-3 w-3" /> OFFLINE · 3 NA FILA
                        </motion.span>
                      )}
                    </AnimatePresence>
                    <span className={`text-[9px] text-[#5E6669] ${mono}`}>68%</span>
                  </span>
                </div>

                {/* topo do app */}
                <div className="flex items-center justify-between border-y border-[#DCE0E0] bg-white px-4 py-2.5">
                  <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#D51920]">
                    Elo
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] text-[#5E6669]">
                    <MapPin className="h-3 w-3" /> Marcos Delazeri · Oeste SC
                  </span>
                </div>

                {/* a tela */}
                <div className="h-[558px] overflow-hidden bg-[#FFFFFF]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={tela}
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -18 }}
                      transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full overflow-y-auto"
                    >
                      <Atual />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* abas */}
                <div className="flex border-t border-[#DCE0E0] bg-[#F6F7F7]">
                  {ABAS.map(({ id, label, Icon }) => {
                    const on = id === tela;
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setTela(id)}
                        aria-pressed={on}
                        className={`relative flex flex-1 flex-col items-center gap-1 py-2.5 transition-colors ${on ? "text-[#D51920]" : "text-[#5E6669] hover:text-[#131516]"}`}
                      >
                        <Icon className="h-4 w-4" strokeWidth={on ? 2.4 : 1.8} />
                        <span className={`text-[9.5px] ${on ? "font-semibold" : ""}`}>{label}</span>
                        {on && (
                          <motion.span
                            layoutId="abaMobile"
                            className="absolute inset-x-3 top-0 h-[2px] bg-[#D51920]"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <p className="mt-5 text-center text-[11.5px] leading-snug text-[#6B7576]">
              Quatro abas, alvo de toque de 44 px, offline por padrão.
              <br className="hidden sm:block" /> Toque para trocar de tela.
            </p>
          </div>
        </div>
      </EloReveal>
    </EloSection>
  );
}
