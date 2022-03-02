import React from "react";

export default function Home() {
  return (
    <div>
      <header class="bg-primary bg-gradient text-white">
        <div class="container px-4 text-center">
          <h1 class="fw-bolder pt-3 pb-4">Belo Front End Challenge</h1>
          <p class="lead pb-5">
            Joseph Minard's chart on Napoleon's invasion of Russia and its
            terrible fate is one of the most famous charts in history, combining
            time-series data with movements over space. In "The Visual Display
            of Quantitative Information", Edward Tufte describes it in detail,
            and helps us understand what is so special about it:
          </p>
        </div>
      </header>
      <div className="desc">
        <h4>
          (...) Beginning at left on the Polish-Russian border near the Niemen
          River, the thick tan flow-line shows the size of the Grand Army
          (422,000) as it invaded Russia in 1812. The width of this band
          indicates the size of the army at each place on the map. In September,
          the army reahced Moscow, which was by then sacked and deserted, with
          100,000 men. The path of Napoleon's retreat from Moscow is depicted by
          the darker, lower band, which is linked to a temperature scale and
          dates at the bottom of the chart. It was a bitterly cold winder, and
          many froze on the march out of Russia. As the graphic shows, the
          crossing of the Berezina River was a disaster, and the army finally
          struggled back into Poland with only 10,000 men remaining. Also shown
          are the movements of auxiliary troops, as they sought to protect the
          rear and the flank of the advancing army. Minard's graphic tells a
          rich, coherent story with its multivariate data, far more enlightening
          than just a single number bouncing along over time. Six variables are
          plotted: the size of the army, its location, on a two-dimensional
          surface, direction of the army's movement, and temperature on various
          dates during the retreat from Moscow. (...)
        </h4>
      </div>
    </div>
  );
}
