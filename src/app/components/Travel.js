import React from 'react';

const parosSelfie = '../../../images/paros.jpg'

export default () => {
  return <div>
  <h1>How do I get to Paros?</h1>

  From London, there are three main options:
  <br/>
  <br/>
  <ol>
  <li>Fly to Athens and then fly to Paros. Aegean operates flights 3 times a day; you can use <a href="https://en.aegeanair.com/plan/low-fare-calendar/">Aegean airlines calendar</a>  for easier search.</li>
  <li>Fly to Athens and then ferry to Paros. The port is 1h30min away from the airport with public transport and there are itineraries twice per day. You can book online using <a href="https://domestic-web.bluestarferries.com/default.aspx?lng=UK">Blue Star Ferries</a></li>
  <li>Fly to Mykonos and then ferry to Paros. There are direct flights to Mykonos from London and Paros is 1 hour away from Mykonos by boat. Boats are leaving from Mykonos to Paros 5 times per day and you can book <a href="https://www.seajets.gr/en/Schedule-824.htm">Seajets</a> () or <a href="https://hellenicseaways.gr/en/booking">Hellenic Seaways</a>.</li>
  </ol>

  <img src={parosSelfie} style={{width: '50vw'}}/>

  </div>;
};
