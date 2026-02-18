import { useEffect, useState } from "react";

interface Props {
  character: string;
}

const KanjiStrokeDiagram = ({ character }: Props) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    if (!character) return;

    const loadSvg = async () => {
      const code = character
        .codePointAt(0)!
        .toString(16)
        .padStart(5, "0")
        .toLowerCase();

      try {
        const response = await fetch(`/kanjivg/${code}.svg`);

        if (!response.ok) {
          throw new Error(`SVG not found: ${code}.svg`);
        }

        let text = await response.text();
        text = text
          .replace(/<\?xml.*?\?>/, "")
          .replace(/<!DOCTYPE.*?>/, "")
          .replace(/width="[^"]*"/, "")
          .replace(/height="[^"]*"/, "")
          .replace(
            /<svg/,
            '<svg class="w-full h-full" preserveAspectRatio="xMidYMid meet"'
          );

        setSvgContent(text);

      } catch (err) {
        console.error("Failed to load stroke SVG:", err);
        setSvgContent(null);
      }
    };

    loadSvg();
  }, [character]);

  if (!svgContent) return null;

  return (
    <div className="w-full border rounded-md bg-white p-2">
      <div className="w-40 h-40 flex items-center justify-center mx-auto overflow-hidden">
        <div className="scale-[1.125] pb-4" dangerouslySetInnerHTML={{ __html: svgContent }} />
      </div>
    </div>
  );
};

export default KanjiStrokeDiagram;
