import React from 'react';

import Link from 'next/link';
import AnchorLink from './AnchorLink';

const Hero = () => (
  <div className="hero my-5 text-center" data-testid="hero">
    <h1 className="mb-4" data-testid="hero-title">
      DemoZero
    </h1>

    <AnchorLink
      href="/api/auth/login?organization=org_0sum6KkjuJTaDjSZ"
      className="btn btn-primary btn-margin"
      testId="navbar-login-desktop">
      Log in with UA Org
    </AnchorLink>
    <br></br>
    <br></br>
    <AnchorLink
      href="/api/auth/login?connection=Okta"
      className="btn btn-primary btn-margin"
      testId="navbar-login-desktop">
      Log in with Okta SAML
    </AnchorLink>
  </div>
);


export default Hero;