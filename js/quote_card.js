(() => {
  'use strict'; // strict mode

  const lineup = [{
    id:`card1`,
      quote1: `"Behind every exquisite thing
      that existed, <br>
     there was something tragic."`,
      quote2: `“The only way to get rid of<br>
      temptation is to yield to it.”`
  },
  {
    id:`card2`,
    quote1: `“You must have a cigarette. <br>
    A cigarette is the perfect<br>
    type of a perfect pleasure. <br>
    It is exquisite, and it leaves <br>
    one unsatisfied. <br>
    <br>
    What more can one want?”`,
    quote2: `“You will always<br> 
    be fond of  me.<br> 
    <br>
    I represent to you all <br>
    the sins you never had<br>
     the courage to commit.” `
},
{
  id:`card3`,
  quote1: `“Some things are more<br>
  precious because
  
   they don't last long.”       `,
  quote2: `“What of Art?<br>
  -It is a malady.<br>
  --Love?<br>
  -An Illusion.<br>
  --Religion?<br>
  -The fashionable substitute<br>
  for Belief.<br>
  --You are a sceptic.<br>
  -Never! Scepticism is the <br>
  beginning of Faith.<br>
  --What are you?<br>
  -To define is to limit.”`
},


  
  ]

  // Select the HTML element with id="students"
  const lineupElement = document.getElementById('box');
  if (lineupElement !== null) {

    let tempStr = '';
    lineup.forEach(lineup => {
      tempStr += `
      <div class="g-fb-row quotes" id="${lineup.id}">
                <div class="g-fb-col-12 g-fb-col-md-4 quote_card left">
                   <p>${lineup.quote1}</p> 
                </div>
                
                <div class="g-fb-col-12 g-fb-col-md-4 quote_card right">
                    <p>${lineup.quote2}</p>
                </div>
            </div>
  `;
    });
    lineupElement.innerHTML = tempStr;
  }
})();