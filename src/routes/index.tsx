import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X, MapPin, Phone } from "lucide-react";
import hero from "@/assets/hero.jpg";
import studio from "@/assets/studio.jpg";
import { gallery } from "@/lib/gallery";

const WA =
  "https://wa.me/5511999556871?text=" +
  encodeURIComponent(
    "Olá! Conheci a Ink Julyz Tattoo Studio pelo site e gostaria de solicitar um orçamento para uma tatuagem.",
  );
const ADDRESS = "R. Georgina Diniz Braghiroli, 14 - Vila Curuçá, São Paulo - SP, 08031-560";
const MAPS = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(ADDRESS);
const TITLE = "Ink Julyz Tattoo Studio | Tatuadora na Vila Curuçá";
const DESC =
  "Estúdio de tatuagem na Vila Curuçá, São Paulo. Conheça os trabalhos e solicite seu orçamento pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#trabalhos", label: "Trabalhos" },
  { href: "#estudio", label: "Estúdio" },
  { href: "#contato", label: "Contato" },
];

function WhatsIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43a9.4 9.4 0 0 1 9.43 9.44c0 5.2-4.23 9.43-9.44 9.43m8.03-17.47A11.3 11.3 0 0 0 12.05.7C5.79.7.7 5.79.7 12.04c0 2 .52 3.95 1.52 5.67L.6 23.6l6.02-1.58a11.3 11.3 0 0 0 5.42 1.38h.01c6.25 0 11.34-5.09 11.35-11.34 0-3.03-1.18-5.88-3.32-8.02" />
    </svg>
  );
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Index() {
  useReveal();
  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] btn btn-wine">
        Pular para o conteúdo
      </a>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 md:px-10">
          <a href="#inicio" className="font-display text-2xl italic leading-none md:text-[1.7rem]">
            Ink Julyz <span className="not-italic text-xs tracking-[0.3em] uppercase text-wine-soft align-middle ml-1 font-sans">Tattoo Studio</span>
          </a>
          <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground">
                {n.label}
              </a>
            ))}
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-wine !py-2.5 !px-4">
              Solicitar orçamento
            </a>
          </nav>
          <button
            className="md:hidden p-2"
            aria-label={menu ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menu}
            onClick={() => setMenu((m) => !m)}
          >
            <span className="block h-px w-6 bg-foreground mb-1.5" />
            <span className="block h-px w-6 bg-foreground mb-1.5" />
            <span className="block h-px w-4 bg-foreground ml-auto" />
          </button>
        </div>
        {menu && (
          <nav aria-label="Menu móvel" className="md:hidden border-t border-border bg-background px-5 pb-6 pt-2">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setMenu(false)} className="block py-3 font-display text-2xl">
                {n.label}
              </a>
            ))}
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-wine mt-4 w-full">
              Solicitar orçamento
            </a>
          </nav>
        )}
      </header>

      <main id="conteudo">
        {/* Hero */}
        <section id="inicio" className="relative flex min-h-[100svh] items-end overflow-hidden pt-24 md:items-center">
          <img src={hero} alt="Tatuadora trabalhando em uma tatuagem de traço fino no antebraço" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover object-[70%_center]" fetchPriority="high" />
          <div className="absolute inset-0 hero-shade" />
          <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 md:px-10 md:pb-0">
            <div className="max-w-xl reveal">
              <p className="eyebrow flex items-center gap-2"><MapPin className="h-3.5 w-3.5" aria-hidden /> Vila Curuçá · São Paulo</p>
              <h1 className="mt-6 text-5xl leading-[1.02] md:text-7xl">
                Sua história merece uma <em className="text-wine-soft">arte única.</em>
              </h1>
              <span className="ink-stroke mt-8" />
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Uma ideia, uma memória ou uma nova forma de se expressar. Dê o primeiro passo para sua próxima tatuagem na Ink Julyz Tattoo Studio.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-wine"><WhatsIcon /> Conversar pelo WhatsApp</a>
                <a href="#trabalhos" className="btn btn-line">Conhecer os trabalhos</a>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="trabalhos" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
          <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Trabalhos</p>
              <h2 className="mt-4 text-4xl md:text-6xl">Arte que vive na pele</h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              As imagens marcadas como “Referência visual” são ilustrativas e serão substituídas pelos trabalhos reais do estúdio.
            </p>
          </div>
          <ul className="mt-14 grid auto-rows-[260px] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[280px] md:grid-cols-3">
            {gallery.map((g, i) => (
              <li key={g.src} className={`reveal ${g.span ?? ""}`}>
                <button
                  onClick={() => setOpen(i)}
                  className="group relative block h-full w-full overflow-hidden bg-card"
                  aria-label={`Ampliar imagem: ${g.alt}`}
                >
                  <img src={g.src} alt={g.alt} width={g.width} height={g.height} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  {g.reference && (
                    <span className="absolute left-3 top-3 bg-background/80 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                      Referência visual
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
          <div className="reveal mt-20 flex flex-col items-center border-t border-border pt-16 text-center">
            <h3 className="text-3xl md:text-5xl">Já tem uma ideia para sua próxima tattoo?</h3>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-wine mt-8"><WhatsIcon /> Quero conversar sobre minha ideia</a>
          </div>
        </section>

        {/* Studio */}
        <section id="estudio" className="bg-card">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2 md:gap-20 md:px-10 md:py-32">
            <div className="reveal relative">
              <img src={studio} alt="Referência visual: ambiente de estúdio de tatuagem com iluminação suave" width={1024} height={1280} loading="lazy" className="aspect-[4/5] w-full object-cover" />
              <span className="absolute left-3 top-3 bg-background/80 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">Referência visual</span>
              <span className="absolute -bottom-4 -right-4 hidden h-full w-full border border-wine md:block -z-0 pointer-events-none" aria-hidden />
            </div>
            <div className="reveal">
              <p className="eyebrow">O estúdio</p>
              <h2 className="mt-4 text-4xl md:text-6xl">Um espaço para a sua expressão</h2>
              <span className="ink-stroke mt-8" />
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                A Ink Julyz Tattoo Studio fica na Vila Curuçá, em São Paulo, e nasceu para transformar ideias, memórias e histórias pessoais em arte na pele.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Cada projeto começa com uma conversa: você conta o que imagina e, juntos, encontramos o caminho para uma tatuagem que seja realmente sua.
              </p>
              {/* Biografia e especialidades: preencher quando as informações forem enviadas pela tatuadora. */}
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
          <div className="reveal max-w-2xl">
            <p className="eyebrow">Orçamento</p>
            <h2 className="mt-4 text-4xl md:text-6xl">Como solicitar seu orçamento</h2>
          </div>
          <ol className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Conte sua ideia pelo WhatsApp.",
              "Envie referências visuais, se tiver.",
              "Informe o tamanho aproximado e a região do corpo.",
              "Converse com o estúdio sobre valores e disponibilidade.",
            ].map((s, i) => (
              <li key={s} className="reveal bg-background p-8">
                <span className="font-display text-6xl italic text-wine-soft">0{i + 1}</span>
                <p className="mt-6 text-lg leading-snug">{s}</p>
              </li>
            ))}
          </ol>
          <p className="reveal mt-10 max-w-2xl text-muted-foreground">
            O envio da mensagem inicia a conversa — o agendamento é confirmado diretamente pelo estúdio.
          </p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-wine mt-8"><WhatsIcon /> Solicitar orçamento</a>
        </section>

        {/* Contact */}
        <section id="contato" className="border-t border-border bg-card">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-2 md:px-10 md:py-32">
            <div className="reveal">
              <p className="eyebrow">Contato</p>
              <h2 className="mt-4 text-4xl md:text-6xl">Venha nos visitar</h2>
            </div>
            <div className="reveal space-y-8">
              <p className="font-display text-3xl italic">Ink Julyz Tattoo Studio</p>
              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-wine-soft" aria-hidden />
                <div><p className="eyebrow !text-muted-foreground">Endereço</p><address className="mt-1 not-italic text-lg">{ADDRESS}</address></div>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-wine-soft" aria-hidden />
                <div><p className="eyebrow !text-muted-foreground">Telefone e WhatsApp</p><a href="tel:+5511999556871" className="mt-1 block text-lg hover:text-wine-soft">(11) 99955-6871</a></div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn btn-line">Como chegar</a>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-wine"><WhatsIcon /> Falar com o estúdio</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-5 pb-28 pt-14 md:px-10 md:pb-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-3xl italic">Ink Julyz</p>
            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-wine-soft">Tattoo Studio</p>
          </div>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>{ADDRESS}</p>
            <p><a href="tel:+5511999556871" className="hover:text-foreground">(11) 99955-6871</a></p>
          </div>
          <nav aria-label="Rodapé" className="flex flex-wrap gap-6 text-sm">
            {NAV.map((n) => <a key={n.href} href={n.href} className="text-muted-foreground hover:text-foreground">{n.label}</a>)}
          </nav>
        </div>
        <p className="mx-auto mt-10 max-w-7xl text-xs text-muted-foreground">© {new Date().getFullYear()} Ink Julyz Tattoo Studio</p>
      </footer>

      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar pelo WhatsApp"
        className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110"
      >
        <WhatsIcon className="h-7 w-7" />
      </a>

      {open !== null && <Lightbox index={open} setIndex={setOpen} />}
    </>
  );
}

function Lightbox({ index, setIndex }: { index: number; setIndex: (i: number | null) => void }) {
  const n = gallery.length;
  const closeRef = useRef<HTMLButtonElement>(null);
  const prev = useCallback(() => setIndex((index - 1 + n) % n), [index, n, setIndex]);
  const next = useCallback(() => setIndex((index + 1) % n), [index, n, setIndex]);
  const item = gallery[index]!;

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      opener?.focus();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Tab") {
        const f = document.querySelectorAll<HTMLElement>("[data-lb] button");
        const first = f[0]!, last = f[f.length - 1]!;
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, setIndex]);

  return (
    <div data-lb role="dialog" aria-modal="true" aria-label="Imagem ampliada" className="fixed inset-0 z-50 flex items-center justify-center bg-overlay p-4 animate-in fade-in duration-300" onClick={() => setIndex(null)}>
      <button ref={closeRef} onClick={() => setIndex(null)} aria-label="Fechar" className="absolute right-4 top-4 p-3 hover:text-wine-soft"><X className="h-7 w-7" /></button>
      <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Imagem anterior" className="absolute left-2 p-3 hover:text-wine-soft md:left-6"><ChevronLeft className="h-9 w-9" /></button>
      <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.alt} className="max-h-[80vh] w-auto object-contain" />
        <figcaption className="mt-4 flex justify-between gap-4 text-sm text-muted-foreground">
          <span>{item.alt}</span><span>{index + 1} / {n}</span>
        </figcaption>
      </figure>
      <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Próxima imagem" className="absolute right-2 p-3 hover:text-wine-soft md:right-6"><ChevronRight className="h-9 w-9" /></button>
    </div>
  );
}
