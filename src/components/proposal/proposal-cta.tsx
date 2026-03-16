"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Clock, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProposalCTAProps {
  clientName: string;
  contactName: string;
  validUntil: string;
  whatsappNumber: string;
}

function useCountdown(targetDate: string) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });

  useEffect(() => {
    const target = new Date(targetDate + "T23:59:59").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: true });
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
        expired: false,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

export function ProposalCTA({
  clientName,
  contactName,
  validUntil,
  whatsappNumber,
}: ProposalCTAProps) {
  const countdown = useCountdown(validUntil);

  const acceptMessage = encodeURIComponent(
    `Olá! Sou ${contactName} da ${clientName}. Gostaria de aceitar a proposta e avançar com o projeto! 🚀`
  );

  const questionMessage = encodeURIComponent(
    `Olá! Sou ${contactName} da ${clientName}. Tenho algumas dúvidas sobre a proposta que recebi. Podemos conversar?`
  );

  return (
    <section className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-brand-blue/90 to-brand-purple/90" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          {/* Countdown Timer */}
          {!countdown.expired ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center justify-center gap-2 text-brand-orange">
                <Clock className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-wider">
                  Esta proposta expira em
                </span>
              </div>

              <div className="flex justify-center gap-4">
                {[
                  { value: countdown.days, label: "Dias" },
                  { value: countdown.hours, label: "Horas" },
                  { value: countdown.minutes, label: "Min" },
                  { value: countdown.seconds, label: "Seg" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center mb-2">
                      <span className="text-2xl md:text-3xl font-black text-white tabular-nums">
                        {String(item.value).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 text-red-400"
            >
              <Clock className="w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-wider">
                Esta proposta expirou — entre em contato para renovação
              </span>
            </motion.div>
          )}

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
              Pronto para{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-blue">
                acelerar
              </span>{" "}
              seus resultados?
            </h2>
            <p className="text-lg md:text-xl text-white/70 font-light max-w-xl mx-auto">
              Estamos a um clique de transformar o digital da{" "}
              <strong className="text-white font-semibold">{clientName}</strong>. Aceite a proposta
              e vamos começar!
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Button
              size="lg"
              className="h-16 px-10 text-lg rounded-full bg-brand-green text-white hover:bg-brand-green/90 font-bold shadow-2xl shadow-brand-green/30 hover:shadow-brand-green/50 hover:-translate-y-1 transition-all duration-300 group"
              asChild
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${acceptMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Aceitar Proposta
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="h-16 px-10 text-lg rounded-full border-2 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm transition-all duration-300"
              asChild
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${questionMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <HelpCircle className="mr-2 h-5 w-5" />
                Tirar Dúvidas
              </a>
            </Button>
          </motion.div>

          {/* Trust note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-sm text-white/40 pt-4"
          >
            Ao clicar em &ldquo;Aceitar Proposta&rdquo;, você será direcionado ao nosso WhatsApp Business oficial.
          </motion.p>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo-full.png"
              alt="ArtDesign"
              className="h-8 w-auto object-contain brightness-0 invert opacity-50"
            />
          </div>
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} ArtDesign Marketing & Tecnologia. Proposta confidencial.
          </p>
        </div>
      </div>
    </section>
  );
}
