### Chrome Extension Contexts Overview

#### 1. Popup Context

- **Purpose:** User interface that appears when the extension icon is clicked.
- **Components:** HTML, CSS for UI; JavaScript (or TypeScript) for interactivity.
- **Manifest:** Specify popup HTML file in `manifest.json` (`browser_action` -> `default_popup`).

#### 2. Service Worker Context

- **Purpose:** Handles background tasks and events independently of browser tabs.
- **Components:** JavaScript (or TypeScript) for event handling and background tasks.
- **Manifest:** Register service worker in `manifest.json` (`background` -> `service_worker`).

#### 3. Page Context (Content Scripts)

- **Purpose:** Interacts with and modifies content of web pages.
- **Components:** JavaScript (or TypeScript) for DOM manipulation and interaction.
- **Manifest:** Declare content scripts in `manifest.json` (`content_scripts` -> specify web pages and scripts).

### Integration

- **Communication:** Use Chrome extension APIs (`chrome.runtime.sendMessage`, etc.) for messaging between contexts.
- **Permissions:** Declare necessary permissions in `manifest.json` for extension functionalities.
