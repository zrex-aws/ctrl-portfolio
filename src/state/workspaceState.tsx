import { createContext, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { WorkspaceId } from '../data/workspaceData';

type Panel = {
  id: string;
  title: string;
  workspace: WorkspaceId;
};

type WorkspaceContextShape = {
  activeWorkspace: WorkspaceId;
  setActiveWorkspace: (workspace: WorkspaceId) => void;
  openPanels: Panel[];
  openPanel: (panel: Panel) => void;
  closePanel: (panelId: string) => void;
  commandOpen: boolean;
  setCommandOpen: (open: boolean) => void;
};

const WorkspaceContext = createContext<WorkspaceContextShape | undefined>(undefined);

export const WorkspaceProvider = ({ children }: { children: ReactNode }) => {
  const [activeWorkspace, setActiveWorkspace] = useState<WorkspaceId>('work');
  const [openPanels, setOpenPanels] = useState<Panel[]>([]);
  const [commandOpen, setCommandOpen] = useState(false);

  const openPanel = (panel: Panel) => {
    setActiveWorkspace(panel.workspace);
    setOpenPanels((prev) => (prev.some((item) => item.id === panel.id) ? prev : [...prev, panel]));
  };

  const closePanel = (panelId: string) => {
    setOpenPanels((prev) => prev.filter((panel) => panel.id !== panelId));
  };

  const value = useMemo(
    () => ({
      activeWorkspace,
      setActiveWorkspace,
      openPanels,
      openPanel,
      closePanel,
      commandOpen,
      setCommandOpen,
    }),
    [activeWorkspace, openPanels, commandOpen],
  );

  return <WorkspaceContext.Provider value={value}>{children}</WorkspaceContext.Provider>;
};

export const useWorkspace = () => {
  const context = useContext(WorkspaceContext);
  if (!context) {
    throw new Error('useWorkspace must be used inside WorkspaceProvider');
  }

  return context;
};
