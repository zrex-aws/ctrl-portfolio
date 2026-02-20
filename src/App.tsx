import { useEffect, useState } from 'react';
import { Canvas } from './components/Canvas';
import { CommandPalette } from './components/CommandPalette';
import { IntroOverlay } from './components/IntroOverlay';
import { OnboardingHint } from './components/OnboardingHint';
import { PanelHost } from './components/PanelHost';
import { Sidebar } from './components/Sidebar';
import { Toolbar } from './components/Toolbar';
import { UtilityDock } from './components/UtilityDock';
import { WorkspaceProvider, useWorkspace } from './state/workspaceState';

const WorkspaceShell = () => {
  const { setCommandOpen } = useWorkspace();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setCommandOpen(true);
      }
      if (event.key === 'Escape') {
        setCommandOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [setCommandOpen]);

  return (
    <div className="flex h-screen overflow-hidden bg-wallpaper text-text">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col p-4 pl-0 lg:pl-0">
        <Toolbar />
        <Canvas />
      </div>
      <OnboardingHint />
      <PanelHost />
      <UtilityDock />
      <CommandPalette />
    </div>
  );
};

const App = () => {
  const [introVisible, setIntroVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIntroVisible(false), 1700);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <WorkspaceProvider>
      <IntroOverlay visible={introVisible} />
      <WorkspaceShell />
    </WorkspaceProvider>
  );
};

export default App;
