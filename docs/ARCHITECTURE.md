# CTRL Design OS Architecture

## UI Component Hierarchy
- `App`
  - `WorkspaceProvider`
    - `IntroOverlay`
    - `WorkspaceShell`
      - `Sidebar`
      - `Toolbar`
      - `Canvas`
      - `OnboardingHint`
      - `PanelHost`
      - `UtilityDock`
      - `CommandPalette`

## Workspace State Logic
`src/state/workspaceState.tsx` stores:
- `activeWorkspace`: current board id
- `openPanels`: stack of panel metadata (`id`, `title`, `workspace`)
- `commandOpen`: command palette visibility

Public actions:
- `setActiveWorkspace(workspace)`
- `openPanel(panel)`
- `closePanel(panelId)`
- `setCommandOpen(open)`

## Panel System Logic
Panel host (`PanelHost`) renders latest three floating panels with:
- Motion enter/exit transitions
- Layer offset via indexed `y` value
- Close action per panel
- Docking-ready metadata stored in global state

## Example Project Schema
```ts
export type Project = {
  id: string;
  title: string;
  category: string;
  hero: string;
  metrics: { label: string; value: string }[];
  summary: string;
  video?: string;
};
```

## Styling Tokens
Defined in `tailwind.config.ts`:
- Colors: `bg`, `panel`, `glass`, `text`, `muted`, `accent`
- Shadows: `panel`
- Radius: `xl2`
- Background pattern: `grid`

## Extend Modules
1. Add a new workspace id in `WorkspaceId` and `sidebarItems`.
2. Add module data in `src/data/workspaceData.ts`.
3. Add a canvas renderer branch in `Canvas.tsx`.
4. Add quick-jump entry (automatic if `sidebarItems` includes it).
5. Use `openPanel` to attach floating details without changing layout.
