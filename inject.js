// this is the code which will be injected into a given page...

(function() {

  const year = 2020;
  const monthZeroBased = 8;
  const day = 16;
  const newDate = new Date(year, monthZeroBased, day)
  const overrideDate = (new Date('2020-04-01T01:00:00')).getTime();

  Date = class extends Date {
    constructor(...options) {
      if (options.length) {
        super(...options);
      } else {
        super(year, monthZeroBased, day);
      }
    }
  };

  Date.prototype.getTime = function() { return overrideDate };

  // just place a div at top right
  var div = document.createElement('div');
  div.style.position = 'fixed';
  div.style.top = "0";
  div.style.right = "0";
  div.textContent = `Time shifted to ${new Date().toDateString()}`;
  document.body.appendChild(div);

  // alert(`date is now overridden to ${overrideDate}... `);

})();