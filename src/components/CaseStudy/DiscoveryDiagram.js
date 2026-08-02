import React from "react";

const DiscoveryDiagram = () => (
    <svg className="diagram" viewBox="0 0 760 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram: hand-tagged sizing gave way to precise per-SKU scanning, validated as a $40M+ opportunity">
        <g className="diagram-node">
            <rect x="30" y="40" width="130" height="86" rx="6" className="diagram-icon-shape diagram-icon-shape--front" />
            <text x="95" y="76" textAnchor="middle" className="diagram-tag-text">S</text>
            <text x="95" y="98" textAnchor="middle" className="diagram-tag-text">M</text>
            <text x="95" y="120" textAnchor="middle" className="diagram-tag-text">L</text>
            <text x="95" y="150" textAnchor="middle" className="diagram-label">Before: Tagged by Hand</text>
        </g>

        <path d="M208 96 H312" className="diagram-arrow-line" />
        <path d="M302 86 L316 96 L302 106" className="diagram-arrow-head" />

        <g className="diagram-node">
            <rect x="330" y="40" width="130" height="86" rx="6" className="diagram-icon-shape diagram-icon-shape--front" />
            <rect x="352" y="60" width="4" height="46" className="diagram-barcode" />
            <rect x="362" y="60" width="8" height="46" className="diagram-barcode" />
            <rect x="376" y="60" width="4" height="46" className="diagram-barcode" />
            <rect x="386" y="60" width="10" height="46" className="diagram-barcode" />
            <rect x="402" y="60" width="4" height="46" className="diagram-barcode" />
            <rect x="412" y="60" width="6" height="46" className="diagram-barcode" />
            <text x="395" y="150" textAnchor="middle" className="diagram-label">After: Scanned per SKU</text>
        </g>

        <path d="M508 96 H612" className="diagram-arrow-line" />
        <path d="M602 86 L616 96 L602 106" className="diagram-arrow-head" />

        <g className="diagram-node">
            <text x="690" y="90" textAnchor="middle" className="diagram-stat-value">$40M+</text>
            <text x="690" y="115" textAnchor="middle" className="diagram-label">Validated</text>
        </g>
    </svg>
);

export default DiscoveryDiagram;
