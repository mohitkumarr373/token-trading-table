type Sub = (u: { id: string; factor: number }) => void;

export class WsMock {
  private subs = new Set<Sub>();
  private timer: any;

  start(ids: string[]) {
    this.stop();
    this.timer = setInterval(() => {
      const id = ids[Math.floor(Math.random() * ids.length)];
      const factor = 1 + (Math.random() - 0.5) * 0.02; // +/- 2%
      this.subs.forEach(fn => fn({ id, factor }));
    }, 1200);
  }
  on(fn: Sub) { this.subs.add(fn); return () => this.subs.delete(fn); }
  stop() { if (this.timer) clearInterval(this.timer); this.timer = undefined; }
}
