// 1. Import the style
import './style.css';
import ReactDOM from 'react-dom/client';
import App from '../../components/App.jsx';

export default defineContentScript({
    //this content script runs only for below-matched webpages
    matches: ['https://cses.fi/problemset/list',
        'https://cses.fi/problemset/list/',
        'https://cses.fi/problemset/',
        'https://cses.fi/problemset'],

    // 2. Set cssInjectionMode
    cssInjectionMode: 'ui',


    async main(ctx) {
        console.log('CSES Randomizer: Content script loaded!');

        //reduce page's margin
        const pageStyles = document.createElement('style');

        pageStyles.id = 'cses-randomizer-page-styles';

        pageStyles.textContent = `
  .skeleton {
    margin-left: 10% !important;
    margin-right: 10% !important;
    max-width: 80% !important;
  }
`;

        document.head.appendChild(pageStyles);

        //Existing CSES problem list element. This is its selector, you can copy it using copy options
        const problemList = document.querySelector('body > div.skeleton > div.content-wrapper > div')

        if (!problemList) {
            console.error('CSES problem list not found!');
            return;
        }


        // Create our main flex wrapper
        const layout = document.createElement('div');
        layout.id = 'cses-extension-layout';//this will be the parent for CSES problemList and our component

        // Create the two columns
        const problemColumn = document.createElement('div');
        problemColumn.id = 'cses-problem-column';

        const randomizerColumn = document.createElement('div');
        randomizerColumn.id = 'cses-randomizer-column';

        const layoutStyle = document.createElement('style');

        layoutStyle.textContent = `
  #cses-extension-layout {
    display: flex;
    align-items: flex-start;
    gap: 24px;
    width: 100%;
  }

  #cses-problem-column {
    flex: 1 1 60%;
    min-width: 0;
  }

  #cses-randomizer-column {
    flex: 0 0 38%;
    min-width: 320px;
    box-sizing: border-box;
  }

  @media (max-width: 1000px) {
    #cses-extension-layout {
      flex-direction: column;
    }

    #cses-randomizer-column {
      width: 100%;
      min-width: 0;
    }
  }
`;

        document.head.appendChild(layoutStyle);

        // Insert our wrapper before the existing problem list
        problemList.parentNode.insertBefore(layout, problemList);

        // Move the existing problem list into the first column
        problemColumn.appendChild(problemList);

        // Assemble the layout
        layout.appendChild(problemColumn);
        layout.appendChild(randomizerColumn);


        // 3. Create the WXT Shadow Root UI in the second column
        const ui = await createShadowRootUi(ctx, {
            name: 'cses-randomizer',
            position: 'inline',
            //select element
            anchor: '#cses-randomizer-column',
            //append in above selected achor element, as per given param
            append: "first",

            onMount: (container) => {
                // Container is a body, and React warns when creating a root on the body, so create a wrapper div
                const app = document.createElement('div');
                container.append(app);

                // Create a root on the UI container and render a component
                const root = ReactDOM.createRoot(app);
                root.render(<App/>);
                return root;
            },
            onRemove: (root) => {
                // Unmount the root when the UI is removed
                root?.unmount();
            },
        });

        // 4. Mount the UI
        ui.mount();
        console.log('CSES Randomizer: UI mounted');
    },
});

