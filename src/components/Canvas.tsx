import { motion } from 'framer-motion';
import { projects, services, processFlow, clients } from '../data/workspaceData';
import { useWorkspace } from '../state/workspaceState';

const boardTitles: Record<string, string> = {
  work: 'Work Gallery',
  caseStudies: 'Case Study Board',
  services: 'Service Library',
  process: 'Process Flow',
  assets: 'Asset Library',
  clients: 'Client Wall',
  about: 'Founder Notes',
  contact: 'Start a Build Session',
};

export const Canvas = () => {
  const { activeWorkspace, openPanel } = useWorkspace();

  return (
    <main className="relative flex-1 overflow-hidden p-6">
      <div className="absolute inset-0 bg-grid bg-[size:32px_32px] opacity-35" />
      <div className="relative z-10 h-full overflow-auto rounded-2xl border border-white/10 bg-glass p-5 shadow-panel backdrop-blur-2xl">
        <div className="mb-6 flex items-end justify-between">
          <h3 className="text-2xl font-semibold">{boardTitles[activeWorkspace]}</h3>
          <p className="text-xs text-muted">This portfolio should feel like a product designers use, not a website they browse.</p>
        </div>

        {(activeWorkspace === 'work' || activeWorkspace === 'caseStudies') && (
          <section className="grid gap-4 xl:grid-cols-3">
            {projects.map((project) => (
              <motion.article
                layout
                key={project.id}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-white/10 bg-panel/80 p-4"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">{project.category}</p>
                <h4 className="mt-2 text-lg font-semibold">{project.title}</h4>
                <p className="mt-2 text-sm text-muted">{project.summary}</p>
                <div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-3 text-xs text-muted">{project.hero}</div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-md bg-black/20 p-2">
                      <p className="text-[10px] text-muted">{metric.label}</p>
                      <p className="text-sm font-medium text-accent">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </section>
        )}

        {activeWorkspace === 'services' && (
          <section className="grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <button
                key={service.title}
                onClick={() => openPanel({ id: service.title, title: service.title, workspace: 'services' })}
                className="rounded-xl border border-white/10 bg-panel/80 p-4 text-left transition hover:border-accent/50"
              >
                <h4 className="text-lg font-semibold">{service.title}</h4>
                <p className="mt-2 text-sm text-muted">{service.detail}</p>
              </button>
            ))}
          </section>
        )}

        {activeWorkspace === 'process' && (
          <section className="space-y-3">
            {processFlow.map((step, index) => (
              <div key={step} className="flex items-center gap-3 rounded-lg border border-white/10 bg-panel/70 p-3">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-accent/20 text-xs text-accent">{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </section>
        )}

        {activeWorkspace === 'assets' && (
          <section className="grid gap-4 md:grid-cols-3">
            {['Typography Kit', 'Color Tokens', 'Motion Presets', 'Layout Grids', 'Icon System', 'Voice + Tone'].map((asset) => (
              <div key={asset} className="rounded-xl border border-white/10 bg-panel/75 p-4">
                <p className="text-sm font-medium">{asset}</p>
                <p className="mt-2 text-xs text-muted">Reusable source files and rationale linked to production components.</p>
              </div>
            ))}
          </section>
        )}

        {activeWorkspace === 'clients' && (
          <section className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {clients.map((client) => (
              <div key={client} className="rounded-xl border border-white/10 bg-panel/75 p-4 text-center text-sm text-muted hover:text-white">
                {client}
              </div>
            ))}
          </section>
        )}

        {activeWorkspace === 'about' && (
          <article className="prose prose-invert max-w-none">
            <h4 className="text-xl">Founder Notes</h4>
            <p className="text-muted">
              CTRL is a design operating system for teams building fast without sacrificing craft. We combine strategy,
              systems, and storytelling into a single studio workflow.
            </p>
          </article>
        )}

        {activeWorkspace === 'contact' && (
          <section className="rounded-xl border border-accent/30 bg-accent/10 p-6">
            <h4 className="text-xl font-semibold">Book a Design Sprint</h4>
            <p className="mt-2 text-muted">Tell us what you are launching and we will assemble the right board, team, and timeline.</p>
          </section>
        )}
      </div>
    </main>
  );
};
