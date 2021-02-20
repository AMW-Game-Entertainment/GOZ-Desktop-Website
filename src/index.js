import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import registerServiceWorker from '~/registerServiceWorker';
import createStore from '~/Redux/createStore';
import { actions } from '~/Redux';
import App from '~/App';
import './CSS/Reset-CSS.css';
import './CSS/Font-CSS.css';
import './index.css';

const store = createStore();

const app = {
    init() {
        this.onStartup();
        this.renderReactApp();
    },
    renderReactApp() {
        ReactDOM.render(
            <Provider store={store}>
                <StyletronProvider value={new Styletron()}>
                    <App />
                </StyletronProvider>
            </Provider>,
            document.getElementById('root'),
        );
    },

    onStartup() {
        store.dispatch(actions.appInitialized());

        registerServiceWorker();
    },
};

app.init();
