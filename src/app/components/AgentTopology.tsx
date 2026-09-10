"use client";

import { useMemo, useState } from "react";
import {
  Background,
  BackgroundVariant,
  Controls,
  Edge,
  Handle,
  MarkerType,
  Node,
  NodeProps,
  Position,
  ReactFlow,
  ReactFlowInstance,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import styles from "./AgentTopology.module.css";

type NodeKind = "input" | "automation" | "assisted" | "production" | "human" | "output";

type WorkflowNodeData = {
  index: string;
  kind: NodeKind;
  label: string;
  engine: string;
  summary: string;
  sourceMaterials?: string[];
  briefContents?: string[];
  inputs?: string[];
  tools?: string[];
  outputs?: string[];
};

type WorkflowGraphNode = Node<WorkflowNodeData, "workflow">;

const graphNodes: WorkflowGraphNode[] = [
  {
    id: "lecture", type: "workflow", position: { x: 0, y: 40 },
    data: { index: "IN 01", kind: "input", label: "Lecture source", engine: "2:01:53 · MP4", summary: "The only source file was a screen recording containing the speaker, visible presentation slides, and audio.", sourceMaterials: ["source video"] },
  },
  {
    id: "brief", type: "workflow", position: { x: 0, y: 300 },
    data: { index: "IN 02", kind: "input", label: "Audience + editorial brief", engine: "Creative brief", summary: "The external brief defined the context used to evaluate every clip.", briefContents: ["target audience", "editorial goal", "Maven course relevance", "publishing context", "standards for honest claims"] },
  },
  {
    id: "transcript", type: "workflow", position: { x: 280, y: 40 },
    data: { index: "01", kind: "automation", label: "Local transcription", engine: "FFmpeg · Whisper", summary: "FFmpeg extracted and prepared audio from the source video, Whisper transcribed it in overlapping chunks, and a local script formatted the timestamped results for analysis.", inputs: ["source video"], tools: ["FFmpeg", "Whisper", "JSON-to-transcript formatting script"], outputs: ["raw Whisper JSON", "working transcript"] },
  },
  {
    id: "analysis", type: "workflow", position: { x: 560, y: 170 },
    data: { index: "02", kind: "assisted", label: "Research + clip analysis", engine: "AI-assisted · human-directed", summary: "AI-assisted web research assessed current demand for each topic. A rubric defined by the designer tested whether each excerpt preserved the speaker's meaning, included the main point, and worked as a complete standalone clip. Candidate wording, context, and visible slides were then checked against the source video.", inputs: ["working transcript", "audience + editorial brief", "source video"], tools: ["web search", "designer-defined editorial rubric", "video player", "frame inspection"], outputs: ["ranked shortlist", "keep/cut maps", "research evidence"] },
  },
  {
    id: "clip-approval", type: "workflow", position: { x: 850, y: 170 },
    data: { index: "GATE 01", kind: "human", label: "Clip review + selection", engine: "Motion designer", summary: "The designer listened to each proposed excerpt in context and checked its wording, pacing, start point, end point, and value to the audience.", inputs: ["ranked shortlist", "keep/cut maps", "research evidence", "source video"], tools: ["playback", "editorial judgment"], outputs: ["approved clip specification"] },
  },
  {
    id: "media", type: "workflow", position: { x: 1140, y: 40 },
    data: { index: "03", kind: "production", label: "Source edit + media prep", engine: "FFmpeg · manual timing", summary: "The approved source ranges were cut, checked for natural speech continuity, and prepared as clean media for the visual build.", inputs: ["approved clip specification", "source video"], tools: ["FFmpeg", "frame inspection", "audio playback"], outputs: ["approved source cut"] },
  },
  {
    id: "visual", type: "workflow", position: { x: 1140, y: 300 },
    data: { index: "04", kind: "assisted", label: "Visual planning + storyboards", engine: "Designer-directed · AI-generated", summary: "Using visual, layout, and animation rules defined by the designer, AI mapped the selected speech into timed sections and proposed supporting graphics for its key ideas. The proposals became full-resolution storyboard states for designer review.", inputs: ["approved clip specification", "source video", "supporting-graphics rules"], tools: ["AI visual planning", "beat mapping", "designer-defined rules"], outputs: ["visual plan", "full-resolution storyboard states"] },
  },
  {
    id: "storyboard-approval", type: "workflow", position: { x: 1430, y: 300 },
    data: { index: "GATE 02", kind: "human", label: "Storyboard review", engine: "Motion designer", summary: "The designer reviewed each AI-generated visual state at 1080×1920, approved the direction, and returned concept, hierarchy, spacing, or readability problems for revision.", inputs: ["visual plan", "full-resolution storyboard states"], tools: ["contact sheets", "visual judgment", "revision feedback"], outputs: ["approved visual direction", "revision notes"] },
  },
  {
    id: "builder", type: "workflow", position: { x: 1720, y: 170 },
    data: { index: "05", kind: "production", label: "Remotion build", engine: "AI-coded · React · Remotion", summary: "AI implemented the approved visual direction in React, TypeScript, and Remotion, combining speaker footage, typography, supporting graphics, transitions, and reusable scene components.", inputs: ["approved source cut", "approved visual direction"], tools: ["Remotion", "React", "TypeScript"], outputs: ["composition code", "review render"] },
  },
  {
    id: "validation", type: "workflow", position: { x: 2010, y: 170 },
    data: { index: "06", kind: "automation", label: "Remotion QA", engine: "Scripts · full-resolution checks", summary: "Still frames, contact sheets, alpha bounds, fonts, safe margins, and review renders were checked at full resolution; failures returned to the Remotion build.", inputs: ["composition code", "review render"], tools: ["Remotion stills", "validation scripts", "frame inspection"], outputs: ["validated review render", "revision notes"] },
  },
  {
    id: "final-polish", type: "workflow", position: { x: 2300, y: 170 },
    data: { index: "07", kind: "production", label: "Final polish + sound mix", engine: "Premiere Pro · After Effects", summary: "The designer polished the validated reel in Adobe, added pre-made sound effects, refined the mix, and exported a delivery candidate for final review.", inputs: ["validated review render", "pre-made sound effects"], tools: ["Premiere Pro", "After Effects", "audio playback"], outputs: ["delivery candidate"] },
  },
  {
    id: "final-approval", type: "workflow", position: { x: 2590, y: 170 },
    data: { index: "GATE 03", kind: "human", label: "Final playback + approval", engine: "Motion designer", summary: "The designer watched the complete delivery candidate and checked its timing, graphics, CTA, sound mix, and export settings before approval.", inputs: ["delivery candidate"], tools: ["full playback", "delivery inspection", "final judgment"], outputs: ["approved delivery master"] },
  },
  {
    id: "delivery", type: "workflow", position: { x: 2880, y: 170 },
    data: { index: "OUT", kind: "output", label: "Final vertical reel", engine: "9:16 · 1080×1920", summary: "The approved delivery was a finished vertical reel ready for publishing to LinkedIn or Instagram." },
  },
];

const baseEdge = {
  type: "smoothstep",
  markerEnd: { type: MarkerType.ArrowClosed, color: "#b0185b" },
  style: { stroke: "#b0185b", strokeWidth: 1.4 },
};

const graphEdges: Edge[] = [
  { id: "lecture-transcript", source: "lecture", target: "transcript", ...baseEdge },
  { id: "transcript-analysis", source: "transcript", target: "analysis", ...baseEdge },
  { id: "brief-analysis", source: "brief", target: "analysis", ...baseEdge },
  { id: "analysis-approval", source: "analysis", target: "clip-approval", ...baseEdge },
  { id: "approval-media", source: "clip-approval", target: "media", ...baseEdge },
  { id: "approval-visual", source: "clip-approval", target: "visual", ...baseEdge },
  { id: "visual-storyboard", source: "visual", target: "storyboard-approval", ...baseEdge },
  { id: "media-builder", source: "media", target: "builder", ...baseEdge },
  { id: "storyboard-builder", source: "storyboard-approval", target: "builder", ...baseEdge },
  { id: "builder-validation", source: "builder", target: "validation", ...baseEdge },
  { id: "validation-polish", source: "validation", target: "final-polish", ...baseEdge },
  { id: "polish-approval", source: "final-polish", target: "final-approval", ...baseEdge },
  { id: "approval-delivery", source: "final-approval", target: "delivery", ...baseEdge },
];

function WorkflowNode({ data, selected }: NodeProps<WorkflowGraphNode>) {
  const kindLabels: Record<NodeKind, string> = {
    input: "input",
    automation: "local automation",
    assisted: "AI-assisted",
    production: "production",
    human: "human gate",
    output: "output",
  };
  const kindLabel = kindLabels[data.kind];
  return (
    <div className={`${styles.node} ${styles[data.kind]} ${selected ? styles.selected : ""}`} aria-label={`${data.label}, ${kindLabel}${selected ? ", details shown below" : ""}`}>
      <Handle type="target" position={Position.Left} className={styles.handle} />
      <div className={styles.nodeTopline}><span>{data.index} · {kindLabel}</span><span className={styles.status} /></div>
      <strong>{data.label}</strong>
      <span className={styles.engine}>{data.engine}</span>
      <small className={styles.expandHint}>{selected ? "Details shown below" : "Click for details"}</small>
      <Handle type="source" position={Position.Right} className={styles.handle} />
    </div>
  );
}

const nodeTypes = { workflow: WorkflowNode };

export default function AgentTopology() {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [flowInstance, setFlowInstance] = useState<ReactFlowInstance<WorkflowGraphNode, Edge> | null>(null);
  const interactiveNodes = useMemo(
    () => graphNodes.map((node) => ({ ...node, selected: node.id === selectedNodeId })),
    [selectedNodeId],
  );
  const selectedNode = graphNodes.find((node) => node.id === selectedNodeId);

  const fitWorkflow = () => {
    flowInstance?.fitView({ padding: 0.08, duration: 300, minZoom: 0.3, maxZoom: 0.8 });
  };

  return (
    <div className={styles.topologyShell}>
      <div className={styles.topologyHeader}>
        <div><span className={styles.topologyKicker}>Repeatable workflow topology</span></div>
        <div className={styles.topologyActions}>
          <span className={styles.hint}>Pan to explore · click a stage for details</span>
          <button type="button" onClick={fitWorkflow} disabled={!flowInstance}>Fit full workflow</button>
        </div>
      </div>
      <div className={styles.phaseRail} aria-label="Pipeline phases">
        <span><i>01</i> Transcribe</span>
        <b>→</b>
        <span><i>02</i> Research + select</span>
        <b>→</b>
        <span><i>03</i> Design + build</span>
        <b>→</b>
        <span><i>04</i> Validate + finish</span>
      </div>
      <div className={styles.canvas}>
        <ReactFlow nodes={interactiveNodes} edges={graphEdges} nodeTypes={nodeTypes} nodesDraggable={false} nodesConnectable={false} zoomOnScroll={false} panOnScroll defaultViewport={{ x: 60, y: 70, zoom: 0.82 }} minZoom={0.3} maxZoom={1.35} onInit={setFlowInstance} onNodeClick={(_, node) => setSelectedNodeId((current) => current === node.id ? null : node.id)} onPaneClick={() => setSelectedNodeId(null)} proOptions={{ hideAttribution: true }} aria-label="Interactive lecture-to-reel production workflow">
          <Background variant={BackgroundVariant.Dots} gap={22} size={1} color="rgba(33, 25, 29, 0.16)" />
          <Controls showInteractive={false} position="bottom-right" />
        </ReactFlow>
      </div>
      {selectedNode ? (
        <div className={styles.detailPanel} aria-live="polite">
          <div className={styles.detailHeading}>
            <div><span>{selectedNode.data.index}</span><h3>{selectedNode.data.label}</h3></div>
            <button type="button" onClick={() => setSelectedNodeId(null)} aria-label={`Close ${selectedNode.data.label} details`}>×</button>
          </div>
          <p>{selectedNode.data.summary}</p>
          <div className={styles.expandedMeta}>
            {selectedNode.data.sourceMaterials?.length ? <div><span>Source materials</span><b>{selectedNode.data.sourceMaterials.join(" · ")}</b></div> : null}
            {selectedNode.data.briefContents?.length ? <div><span>Brief contents</span><b>{selectedNode.data.briefContents.join(" · ")}</b></div> : null}
            {selectedNode.data.inputs?.length ? <div><span>Inputs</span><b>{selectedNode.data.inputs.join(" · ")}</b></div> : null}
            {selectedNode.data.tools?.length ? <div><span>Tools</span><b>{selectedNode.data.tools.join(" · ")}</b></div> : null}
            {selectedNode.data.outputs?.length ? <div><span>Outputs</span><b>{selectedNode.data.outputs.join(" · ")}</b></div> : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
