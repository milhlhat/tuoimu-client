import React from 'react';
import { Helmet } from 'react-helmet-async';

import LandingView from 'src/sections/landing/view';

export default function Landing() {
  return (
    <div>
      <Helmet>
        <title>Tính tuổi mụ online - dễ hiểu, chính xác</title>
      </Helmet>

      <LandingView />
    </div>
  );
}
