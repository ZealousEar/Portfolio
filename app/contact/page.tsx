import AsciiDivider from "@/components/terminal/AsciiDivider";
import TerminalLayout from "@/components/terminal/TerminalLayout";
import TerminalWindow from "@/components/terminal/TerminalWindow";

const contactLinks = [
  {
    label: "GitHub",
    value: "github://ZealousEar",
    href: "https://github.com/ZealousEar",
    description: "Open-source systems, research code, and market prototypes.",
  },
  {
    label: "LinkedIn",
    value: "{TODO: Add LinkedIn URL}",
    href: "#",
    description: "Professional updates and collaboration requests.",
  },
  {
    label: "Email",
    value: "{TODO: Add email address}",
    href: "mailto:{TODO: Add email address}",
    description: "Direct contact for opportunities and research conversations.",
  },
];

export default function ContactPage() {
  return (
    <TerminalLayout showMatrix>
      <div className="space-y-8">
        <section className="space-y-3">
          <h1 className="text-3xl font-semibold text-terminal-white sm:text-4xl">
            FARHAD@PORTFOLIO:~/contact$
          </h1>
          <p className="text-sm text-terminal-muted">
            Console prompt ready. Select a channel to open communications.
          </p>
        </section>

        <AsciiDivider label="channels" />

        <TerminalWindow title="contact.log" accent="cyan">
          <ul className="space-y-3 text-sm text-terminal-white">
            {contactLinks.map((link) => (
              <li key={link.label} className="rounded-terminal border border-terminal-primary/15 bg-terminal-bg/40 p-4">
                <a
                  href={link.href}
                  className="group flex flex-col gap-1"
                >
                  <span className="text-xs font-mono uppercase tracking-[0.35em] text-terminal-accent">
                    {link.label}
                  </span>
                  <span className="text-lg font-semibold text-terminal-primary group-hover:text-terminal-white">
                    {link.value}
                  </span>
                  <span className="text-terminal-muted">{link.description}</span>
                </a>
              </li>
            ))}
          </ul>
        </TerminalWindow>
      </div>
    </TerminalLayout>
  );
}


