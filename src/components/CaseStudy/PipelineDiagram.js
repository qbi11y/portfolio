import React from "react";

const PipelineDiagram = () => (
    <svg className="diagram" viewBox="0 0 760 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram: a design file flows through AI token mapping to become production code">
        <g className="diagram-node">
            <rect x="30" y="40" width="120" height="80" rx="6" className="diagram-icon-shape diagram-icon-shape--back" />
            <rect x="46" y="56" width="120" height="80" rx="6" className="diagram-icon-shape diagram-icon-shape--front" />
            <text x="106" y="150" textAnchor="middle" className="diagram-label">Design File</text>
        </g>

        <path d="M198 96 H302" className="diagram-arrow-line" />
        <path d="M292 86 L306 96 L292 106" className="diagram-arrow-head" />

        <g className="diagram-node">
            <path d="M380 60 L392 88 L420 92 L400 112 L406 140 L380 126 L354 140 L360 112 L340 92 L368 88 Z" className="diagram-icon-shape diagram-icon-shape--front" />
            <text x="380" y="160" textAnchor="middle" className="diagram-label">AI Token Mapping</text>
        </g>

        <path d="M458 96 H562" className="diagram-arrow-line" />
        <path d="M552 86 L566 96 L552 106" className="diagram-arrow-head" />

        <g className="diagram-node">
            <rect x="614" y="52" width="116" height="72" rx="6" className="diagram-icon-shape diagram-icon-shape--front" />
            <path d="M636 76 L622 88 L636 100" className="diagram-code-bracket" />
            <path d="M708 76 L722 88 L708 100" className="diagram-code-bracket" />
            <text x="672" y="150" textAnchor="middle" className="diagram-label">Production Code</text>
        </g>
    </svg>
);

export default PipelineDiagram;
