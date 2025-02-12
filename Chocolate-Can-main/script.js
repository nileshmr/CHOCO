var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
  },
})

tl.to(
  "#can",
  {
    top: "98%",
    left: "12%",
    rotate: "30deg",
  },
  "choclate"
)
tl.to(
  "#choclate",
  {
    top: "160%",
    left: "25%",
  },
  "choclate"
)
tl.to(
  "#choclate2",
  {
    top: "165%",
    left: "50%",
    width: "20%",
    rotate: "-15deg",
  },
  "choclate"
)

tl.to(
  "#almod",
  {
    top: "110%",
    left: "70%",
    rotate: "130deg",
  },
  "choclate"
)

tl.to(
  "#almod2 ",
  {
    top: "110%",
    left: "0%",
    rotate: "130deg",
  },
  "choclate"
)
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".product",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
  },
});

tl2.to(
  "#choclate",
  {
    top: "214%",
    left: "42%",
    width: "30%",
  },
  "can"
);
tl2.to(
  "#can",
  {
    top: "218%",
    left: "35%",
    width: "30%",
    rotate: "0deg",
  },
  "can"
);

tl2.to(
  "#choclate2",
  {
    top: "280%",
    left: "35%",
    width: "15%",
  },
  "can"
);
