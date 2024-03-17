import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import { useNavigate } from 'react-router-dom';


import DashboardNavbar from '../components/DashboardNavbar';

function EditorPage() {
    const navigate = useNavigate();
   const defaultMarkdownText = `
# Welcome to Our Markdown Editor!

## Quick Start Guide
Feel free to edit this text. Here's a quick rundown of markdown syntax:

### Headers
Use \`#\` for a main header, \`##\` for a subheader, and so on.

### Emphasis
- **Bold** text with two asterisks or underscores.
- *Italicize* text with one asterisk or underscore.
- Combine them for ***bold and italic*** text.

### Lists
    - Item 1
    - Item 2
      - Subitem 2.1
      - Subitem 2.2

    1. Numbered item 1
    2. Numbered item 2

### Links
Visit [Youtube](https://www.youtube.com)

### Code
Inline \`code\` with backticks.

\`\`\`javascript
// Multi-line code block
function helloWorld() {
  console.log('Hello, world!');
}
\`\`\`

### Blockquotes
> Markdown is a lightweight markup language with plain-text formatting syntax.

### Images
![Alt text](https://via.placeholder.com/150)

---

Click **Preview** to see how your markdown renders!
`;
    const [markdown, setMarkdown] = useState(defaultMarkdownText);
    const [preview, setPreview] = useState('');

    useEffect(() => {
        // Convert markdown to HTML and set it to the preview state
        setPreview(marked(markdown));
    }, [markdown]); // This effect runs whenever the markdown state changes

    const handleMarkdownChange = (event) => {
        // Update the markdown state with the new value from the textarea
        setMarkdown(event.target.value);
    };

    const handlePublish = () => {
        alert('Blog has been published and stored in your content database!');
        navigate('/dashboard');
    };

    return(
        <main className="editor_page">
            <DashboardNavbar />
            <div className="editor_container">
                <div className="textarea_container">
                    <textarea 
                        value={markdown}
                        onChange={handleMarkdownChange}
                    />
                </div>
                <section className="preview_container">
                    <div dangerouslySetInnerHTML={{ __html: preview }} />
                </section>
            </div>
            <button className="blog_publish_btn" onClick={handlePublish}>Publish Blog</button>
        </main>
    );
}

export default EditorPage;
