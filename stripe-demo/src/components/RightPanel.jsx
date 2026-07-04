import React from 'react';
import { Sparkles, Copy, FileCode2, Files } from 'lucide-react';
import './RightPanel.css';

function RightPanel() {
  return (
    <aside className="right-panel">
      <div className="panel-actions">
        <button className="action-btn">
          <Sparkles size={12} className="mr-2" /> Ask about this section
        </button>
        <button className="action-btn">
          <Copy size={12} className="mr-2" /> Copy for LLM
        </button>
        <button className="action-btn">
          <FileCode2 size={12} className="mr-2" /> View as Markdown
        </button>
      </div>

      <div className="panel-section">
        <h3>Just getting started?</h3>
        <p>Check out our <a href="#">development quickstart</a> guide.</p>
      </div>

      <div className="panel-section">
        <h3>Not a developer?</h3>
        <p>
          Use Stripe's <a href="#">no-code options</a> or apps from our <a href="#">partners</a> to get started with Stripe and to do more with your Stripe account—no code required.
        </p>
      </div>

      <div className="code-block-widget">
        <div className="widget-header">
          <span className="widget-title">BASE URL</span>
          <div className="widget-actions">
            <Files size={14} className="action-icon" />
            <Sparkles size={14} className="action-icon" />
          </div>
        </div>
        <div className="widget-content">
          <code>https://api.stripe.com</code>
        </div>
      </div>

      <div className="code-block-widget">
        <div className="widget-header">
          <span className="widget-title">CLIENT LIBRARIES</span>
        </div>
        {/* Placeholder for client libraries dropdown */}
      </div>
    </aside>
  );
}

export default RightPanel;
