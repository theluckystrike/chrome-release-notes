/**
 * Release Notes — In-app "What's New" UI
 */
export class ReleaseNotes {
    /** Show release notes modal */
    static show(containerId: string, version: string, notes: Array<{ emoji: string; title: string; desc: string }>): void {
        const container = document.getElementById(containerId);
        if (!container) return;
        const items = notes.map((n) => `<div style="display:flex;gap:12px;padding:12px 0;border-bottom:1px solid #F3F4F6"><span style="font-size:24px">${n.emoji}</span><div><div style="font-weight:500;color:#1F2937;font-size:14px">${n.title}</div><div style="color:#6B7280;font-size:13px;margin-top:2px">${n.desc}</div></div></div>`).join('');
        container.innerHTML = `
      <div style="position:fixed;inset:0;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:999999;font-family:-apple-system,sans-serif" id="__rn_overlay__">
        <div style="background:#fff;border-radius:16px;padding:24px;max-width:420px;width:90%;max-height:80vh;overflow-y:auto;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
          <div style="text-align:center;margin-bottom:16px"><span style="font-size:40px">🎉</span></div>
          <h2 style="margin:0 0 4px;text-align:center;font-size:20px;font-weight:600;color:#1F2937">What's New in v${version}</h2>
          <p style="margin:0 0 20px;text-align:center;font-size:13px;color:#9CA3AF">Here's what we've been working on</p>
          ${items}
          <button id="__rn_close__" style="width:100%;margin-top:20px;padding:12px;background:#3B82F6;color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:500;cursor:pointer">Got it!</button>
        </div>
      </div>`;
        container.querySelector('#__rn_close__')?.addEventListener('click', () => { container.innerHTML = ''; this.markSeen(version); });
        container.querySelector('#__rn_overlay__')?.addEventListener('click', (e) => { if ((e.target as HTMLElement).id === '__rn_overlay__') { container.innerHTML = ''; this.markSeen(version); } });
    }

    /** Check if notes have been seen */
    static async hasSeen(version: string): Promise<boolean> {
        const r = await chrome.storage.local.get('__release_notes_seen__');
        return r.__release_notes_seen__ === version;
    }

    /** Mark notes as seen */
    static async markSeen(version: string): Promise<void> { await chrome.storage.local.set({ __release_notes_seen__: version }); }

    /** Auto-show if version is new */
    static async autoShow(containerId: string, version: string, notes: Array<{ emoji: string; title: string; desc: string }>): Promise<void> {
        if (!(await this.hasSeen(version))) this.show(containerId, version, notes);
    }
}
