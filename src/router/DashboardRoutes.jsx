import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Index } from '../components/Index';
import { SegScreen } from '../components/SegScreen';

export const DashboardRoutes = () => {
  return (
    <>
      <div>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/hola" component={SegScreen} />
          <Redirect to="/" />
        </Switch>

        <Footer/>
      </div>
    </>
  );
};
