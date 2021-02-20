import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { doneLoadingPage } from '~/Redux/selectors';
import { Routes } from '~/Constants';
import { ZushinLayoutContainer, PostLayoutContainer } from '~/Containers';

const { Post, Main } = Routes.Pages;

class App extends Component {
    static routesList() {
        // noinspection ES6ModulesDependencies
        return (
            <Fragment>
                <Route exact path={Post} component={PostLayoutContainer} />
                <Route exact path='/' component={ZushinLayoutContainer} />
                <Route exact path={Main} component={ZushinLayoutContainer} />
            </Fragment>
        );
    }

    static loadingSceeen() {
        return (<div>Loading...</div>);
    }

    render() {
        const { doneLoadPage } = this.props;
        return (
            <BrowserRouter>
                <Switch>
                    {
                        doneLoadPage
                            ? App.routesList()
                            : App.loadingSceeen()
                    }
                </Switch>
            </BrowserRouter>
        );
    }
}

App.propTypes = {
    doneLoadPage: PropTypes.bool.isRequired,
};

const mapStateToProps    = (state) => ({
    doneLoadPage: doneLoadingPage(state),
});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
