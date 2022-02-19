/**
 * venavalnoha
 * Default feed Layout
 * 2022-03-01 16:59:00
 */
(function () {
  // Loader
  var loader = new (function () {
    (this.rC = -1),
      (this.r = []),
      (this.add = function (t) {
        this.r.push(t);
      }),
      (this.addTag = function (t, e) {
        var i = document.getElementsByTagName("head")[0],
          s = t.indexOf(".js") > 0 ? "script" : "link",
          n = document.createElement(s);
        i.appendChild(n),
          (n.onload = e),
          (n.charset = "UTF-8"),
          "script" === s
            ? ((n.type = "text/javascript"), (n.src = t))
            : "link" === s && ((n.rel = "stylesheet"), (n.href = t));
      }),
      (this.loadNext = function () {
        if ((this.rC++, this.rC >= this.r.length)) this.done();
        else {
          var t = this.r[this.rC];
          this.addTag(t, this.loadNext.bind(this));
        }
      }),
      (this.done = function () {
        this.onResourcesLoaded(window.Curator);
      }),
      (this.load = function (t) {
        (this.onResourcesLoaded = t), this.loadNext();
      });
  })();

  // Config
  var config = {
    type: "GridCarousel",
    container: "#curator-feed-default-feed-layout",
    debug: 0,
    feed: {
      id: "ce20b34a-b13e-4831-8b99-a1dd84e2cce6",
      apiEndpoint: "https://api.curator.io",
    },
    theme: "sydney",
  };
  var colours = {};
  var styles = {};

  // Bootstrap
  function loaderCallback() {
    window.Curator.loadWidget(config, colours, styles);
  }

  // Run Loader
  loader.add("https://cdn.curator.io/5.0/curator.embed.css");
  loader.add(
    "https://cdn.curator.io/published-css/ce20b34a-b13e-4831-8b99-a1dd84e2cce6.css"
  );

  loader.add("https://itsinphy.github.io/curator.embed.js");

  loader.load(loaderCallback);
})();
