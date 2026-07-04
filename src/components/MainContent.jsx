import React from 'react';
import { MarkdocRenderer } from '../utils/MarkdocRenderer';
import apiReferenceContent from '../content/api-reference.md?raw';
import './MainContent.css';

function MainContent() {
  return (
    <main className="main-content">
      <MarkdocRenderer content={apiReferenceContent} />
    </main>
  );
}

export default MainContent;
