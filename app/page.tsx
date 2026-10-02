import DeckNav from "./DeckNav";
import { GAUGES, HAZARDS, META, PHASES, PRINCIPLES, RITUALS, STATS, TICKER } from "./content";

function Hazard() {
  const run = [...TICKER, ...TICKER, ...TICKER, ...TICKER];
  return (
    <div className="hazard" aria-hidden="true">
      <div className="hazard__stripe" />
      <div className="hazard__ticker">
        {run.map((item, i) => (
          <span key={i}>
            <b>{"///"}</b> {item}
          </span>
        ))}
      </div>
      <div className="hazard__stripe" />
    </div>
  );
}

function SheetHead({ title, caption }: { title: string; caption: string }) {
  return (
    <header className="head">
      <h2 className="head__title">{title}</h2>
      <p className="head__caption">{caption}</p>
    </header>
  );
}

type Row = { code: string; reads: string; metric: string; shows: string; habit: string };

function Datasheet({ columns, rows }: { columns: string[]; rows: Row[] }) {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((c) => (
            <th key={c} scope="col">
              {c}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.code} className="row">
            <td className="code">{r.code}</td>
            <td className="param">{r.reads}</td>
            <th scope="row" className="value">
              {r.metric}
            </th>
            <td className="note">{r.shows}</td>
            <td className="note">{r.habit}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function Page() {
  return (
    <div className="root">
      <header className="bar">
        <a className="bar__cell bar__brand" href="#top">
          Devteam<sup>®</sup>
        </a>
        <p className="bar__cell bar__doc">Doc. TEAM-001 / Rev A / 6 sheets</p>
        <DeckNav />
      </header>

      <main>
        <section id="top" className="sheet hero">
          <dl className="meta">
            {META.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd className={k === "Status" ? "live" : undefined}>{v}</dd>
              </div>
            ))}
          </dl>

          <h1 className="headline">
            <span>Effective</span>
            <span>
              Dev Team<sup>®</sup>
            </span>
          </h1>

          <div className="hero__body">
            <p className="lead">
              A working drawing for teams that ship. Four principles, four gauges and a 90-day
              schedule: <em>built on purpose</em>, then maintained every week.
            </p>
            <dl className="stats">
              {STATS.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <a className="cta" href="#principles">
              <span>[ Read the sheet ]</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <Hazard />
        </section>

        <section id="principles" className="sheet">
          <SheetHead
            title="Principles"
            caption="Sheet 02 / Section A. Four load-bearing parts. Remove one and the others crack."
          />
          <ol className="cells cells--two">
            {PRINCIPLES.map((p) => (
              <li key={p.code} className="cell">
                <p className="code">
                  <b>■</b> {p.code}
                </p>
                <h3 className="cell__title">{p.title}</h3>
                <p className="cell__text">{p.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="rituals" className="sheet">
          <SheetHead
            title="Rituals"
            caption="Sheet 03 / Section B. The operating rhythm: four meetings, each with one job."
          />
          <ol className="cells cells--four">
            {RITUALS.map((r) => (
              <li key={r.code} className="cell">
                <p className="code">
                  <b>■</b> {r.code} / {r.cadence}
                </p>
                <h3 className="cell__title">{r.title}</h3>
                <p className="cell__text">{r.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="gauges" className="sheet">
          <SheetHead
            title="Gauges"
            caption="Sheet 04 / Section C. The four DORA key metrics. Track the team, never the individual."
          />
          <Datasheet
            columns={["Code", "Reads", "Gauge", "What it shows", "Habit that improves it"]}
            rows={GAUGES}
          />
        </section>

        <section id="hazards" className="sheet">
          <SheetHead
            title="Hazards"
            caption="Sheet 05 / Section D. Four failure modes to inspect for, and the countermeasure for each."
          />
          <Datasheet
            columns={["Code", "Risk to", "Failure mode", "How it shows", "Countermeasure"]}
            rows={HAZARDS}
          />
        </section>

        <section id="schedule" className="sheet">
          <SheetHead
            title="90 days"
            caption="Sheet 06 / Section E. Construction schedule: three phases, thirty days each."
          />
          <ol className="cells cells--three">
            {PHASES.map((phase) => (
              <li key={phase.days} className="cell">
                <p className="code">
                  <b>■</b> {phase.days}
                </p>
                <h3 className="cell__title">{phase.title}</h3>
                <ul className="cell__list">
                  {phase.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
          <p className="statement">
            Great teams are designed first, <em>then maintained every week.</em>
          </p>
        </section>
      </main>

      <footer className="colophon">
        <span>Effective Dev Team / TEAM-001 / Rev A</span>
        <span>Drawn by [Presenter name] for [Team or event]</span>
        <a href="#top">[ Back to sheet 01 ↑ ]</a>
      </footer>
    </div>
  );
}
