export const apiEventTypeName = {
  CAD: 'Asteroids & Comets',
  FD: 'Bolides & Meteors',
  SWN: 'Solar, Electro-Magnetic, & Radiation Activities',
  E: 'Eclipses',
};

export const apiEventDescription = {
  CAD: 'N/A',
  FD: `The bolide/meteor will be visible visible to the naked eye.`,
  SWN: {
    CME: 'Coronal Mass Ejection: A coronal mass ejection is a significant release of plasma and accompanying magnetic field from the solar corona. They often follow solar flares and are normally present during a solar prominence eruption.',
    GST: "Geomagnetic Storm: Ongoing space weather storm in the Earth's magnetosphere. Spacecrafts at GEO, MEO, polar and other orbits passing through or in the vicinity of the Earth's ring current and auroral regions can be impacted.",
    FLR: 'Solar Flare: Associated eruption visible. Possibly accompanied by Coronal Mass Ejection. Spacecrafts at MEO, GEO and other high-altitude orbits and high-inclination LEO can be impacted',
    SEP: 'Solar Energetic Particle: Solar energetic particle event detected. Spacecrafts at MEO, GEO and other high-altitude orbits and high-inclination LEO can be impacted',
    RBE: "Radiation Belt Enhancement: Significantly elevated energetic electron fluxes in the Earth's outer radiation belt. Spacecrafts at GEO, MEO and other orbits passing through or in the vicinity of the Earth's outer radiation belt can be impacted.",
    IPS: 'Interplanetary Shock: Strong magnetospheric compression and geomagnetic storm expected.',
    MPC: 'Magnetopause Crossing: Spacecrafts at the geosynchronous orbits may be exposed to solar wind plasma and magnetic field conditions. Strong magnetospheric compression and geomagnetic storm expected.',
  },
  //   E: type,
};

export const apiEventDefinition = {
  CAD: 'Close-approaches NEO asteroids and comets less than 0.05 AU.',
  FD: 'Fireballs and bolides are astronomical terms for exceptionally bright meteors that are spectacular enough to to be seen over a very wide area.',
  SWN: 'Solar, electro-magnetic, radiation activities in space that affect Earth and its vicinity.',
  E: "A solar eclipse occurs when the Moon passes between Earth and the Sun. A lunar eclipse occurs when the Moon moves into the Earth's shadow. ",
};

export const apiEventUrl = {
  CAD: 'https://cneos.jpl.nasa.gov/ca/',
  FD: 'https://cneos.jpl.nasa.gov/fireballs/',
  SWN: 'https://kauai.ccmc.gsfc.nasa.gov/DONKI/',
  E: 'https://eclipse.gsfc.nasa.gov/',
};
