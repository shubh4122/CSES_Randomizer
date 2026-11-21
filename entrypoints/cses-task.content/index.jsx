// Move the topic section of the CSES task-page sidebar into a native toggle.
// Everything up to (but not including) the sidebar's <hr> goes inside it.
import './style.css';

export default defineContentScript({
    matches: ['https://cses.fi/problemset/task/*'],

    main() {
        console.log('CSES Randomizer: Task page content script loaded!');

        // Avoid wrapping twice (e.g. when the content script is re-injected).
        if (document.getElementById('cr-topic-toggle')) return;

        const sidebar = document.querySelector('div.nav.sidebar');
        const divider = sidebar?.querySelector('hr');

        if (!sidebar || !divider) {
            console.warn('CSES Randomizer: task sidebar or divider not found!');
            return;
        }

        // Create the toggle with the requested label.
        const toggle = document.createElement('details');
        toggle.id = 'cr-topic-toggle';

        const summary = document.createElement('summary');
        summary.textContent = 'Expand to know more';
        toggle.appendChild(summary);

        // Move all existing sidebar content above the <hr> into the toggle.
        // Capture the next sibling first, since appending removes the node.
        let node = sidebar.firstChild;
        while (node && node !== divider) {
            const next = node.nextSibling;
            toggle.appendChild(node);
            node = next;
        }

        // Put the toggle exactly where the moved content used to be.
        sidebar.insertBefore(toggle, divider);
    },
});
