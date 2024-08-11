const subheaders = document.querySelectorAll(".subheader");
const contents = document.querySelectorAll(".content");

const subheaderTexts = [
  "OUR VISION :",
  "FOCUS AND GOAL :",
  "CORE VALUE :",
  "POLICY :<br>LEADERSHIP :",
];

const contentTexts = [
  "Provide Highest Level of Quality Services above and beyond our competitors of India. We belief that nothing is more important than a quality, operational excellence,equipment reliability improvement and customer satisfaction, and we promise to you to give you the excellent quality world class service. Customer is everything to us.We must do everything possible to make it a pleasure for customers to deal with us. We should be known for providing legendary customer service in Aluminum and Steel Industry. We strive for close co-operation with our customers and business associates, best on loyalty and fare play. Rather then being contain with short lived success, we aim for a long term relationship. <br>> Growth of our Company not only through increased volume but also through technology and efficiency.<br>> Managing others while inspiring them to achieve, thereby maintaining a good term works.<br>> Turning conflicts into inspirational opportunities.<br>> Engaged experience and appropriate manpower for round the clock for operations and work executed.<br>> Most Importantly, to love and enjoy what we do.",
  "> Strong Clients/Customers Satisfaction.<br>>Increased Revenue for our Clients.<br>> Position Reputation / Image.<br>> Increased Productivity.<br>> Strong Global Presence.<br>> Increased Market Shares.<br>> Maximized Partner and Wealth<br>>Respect for Laws and Regulations.<br>> Happy Employees and Good Working Conditions.",
  "An uncompromising commitment to safety, health, and the environment is central to everything we do, we value integrity and transparency, we value excellence and efficiency, our standards are high, we continually innovate and improve through effective bench marking and best practices. <br>We value people, and are fully aware that we will succeed only if the people we work with are allowed to use their skills effectively and creatively, we value challenge, accomplishment and the satisfaction of knowing we've met or exceeded expectations - especially our own.",
  "Provide Industry leadership in establishing standard of care. Work with trade/business associations, lawmakers and regulators in the shaping of local, state, central and federal environment laws and policies.",
];

function startTyping(
  subheader,
  content,
  subheaderText,
  contentText,
  nextCallback
) {
  new Typed(subheader, {
    strings: [subheaderText],
    typeSpeed: 1,
    loop: false,
    showCursor: false,
    onComplete: () => {
      new Typed(content, {
        strings: [contentText],
        typeSpeed: 0,
        loop: false,
        showCursor: false,
        onComplete: nextCallback,
      });
    },
  });
}

function chainTyping(index) {
  if (index < subheaders.length) {
    startTyping(
      subheaders[index],
      contents[index],
      subheaderTexts[index],
      contentTexts[index],
      () => chainTyping(index + 1)
    );
  }
}

chainTyping(0);
