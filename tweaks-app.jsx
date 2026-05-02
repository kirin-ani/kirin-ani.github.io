/* global React, ReactDOM, TweaksPanel, useTweaks, TweakSection, TweakRadio, TweakSelect, TweakToggle */
const { useEffect } = React;

function applyTweaks(t) {
  const html = document.documentElement;
  html.dataset.palette = t.palette;
  html.dataset.accent  = t.accent;
  html.dataset.fonts   = t.fonts;
  html.dataset.density = t.density;
  html.dataset.hero    = t.heroLayout;
}

function App() {
  const [tweaks, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  useEffect(() => { applyTweaks(tweaks); }, [tweaks]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Palette">
        <TweakRadio
          label="Background"
          value={tweaks.palette}
          options={[
            { value: 'paper', label: 'Paper' },
            { value: 'ivory', label: 'Ivory' },
            { value: 'cool',  label: 'Cool' },
            { value: 'dark',  label: 'Dark' },
          ]}
          onChange={(v) => setTweak('palette', v)}
        />
        <TweakRadio
          label="Accent"
          value={tweaks.accent}
          options={[
            { value: 'moss',       label: 'Moss' },
            { value: 'ochre',      label: 'Ochre' },
            { value: 'terracotta', label: 'Terracotta' },
            { value: 'sky',        label: 'Sky' },
            { value: 'ink',        label: 'Ink' },
          ]}
          onChange={(v) => setTweak('accent', v)}
        />
      </TweakSection>

      <TweakSection title="Type">
        <TweakRadio
          label="Pairing"
          value={tweaks.fonts}
          options={[
            { value: 'editorial', label: 'Editorial' },
            { value: 'technical', label: 'Technical' },
            { value: 'serifBoth', label: 'All-serif' },
          ]}
          onChange={(v) => setTweak('fonts', v)}
        />
      </TweakSection>

      <TweakSection title="Layout">
        <TweakRadio
          label="Hero"
          value={tweaks.heroLayout}
          options={[
            { value: 'asymmetric', label: 'Asymmetric' },
            { value: 'centered',   label: 'Centered' },
          ]}
          onChange={(v) => setTweak('heroLayout', v)}
        />
        <TweakRadio
          label="Density"
          value={tweaks.density}
          options={[
            { value: 'airy',  label: 'Airy' },
            { value: 'tight', label: 'Tight' },
          ]}
          onChange={(v) => setTweak('density', v)}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.createRoot(root).render(<App />);
