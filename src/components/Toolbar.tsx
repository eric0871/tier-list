interface ToolbarProps {
  onReset: () => void;
  onExport: () => void;
}

export default function Toolbar({ onReset, onExport }: ToolbarProps) {
  return (
    <div className="toolbar">
      <button className="toolbar__btn toolbar__btn--reset" onClick={onReset}>
        Reset
      </button>
      <button className="toolbar__btn toolbar__btn--export" onClick={onExport}>
        Export as Image
      </button>
    </div>
  );
}
