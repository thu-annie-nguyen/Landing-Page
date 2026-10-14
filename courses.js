/* Demo courses for The Skill Atlas. Edit this list to change the map and detail pages. */
(function () {
  const icons = {
    spark:
      '<svg viewBox="0 0 32 32" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path fill="#F6D56A" stroke="currentColor" d="M16 3.8a7.4 7.4 0 0 0-4.4 13.3V20.2h8.8v-3.1A7.4 7.4 0 0 0 16 3.8z"/><path d="M16 10.2v3.2M13.6 23.4h4.8M14.6 26.2h2.8"/></svg>',
    question:
      '<svg viewBox="0 0 32 32" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="16" cy="16" r="11"/><path d="M12.2 12.4a3.8 3.8 0 0 1 7.2 1.7c0 2.4-3.4 2.6-3.4 5"/><circle cx="16" cy="23.2" r="0.9" fill="currentColor" stroke="none"/></svg>',
    table:
      '<svg viewBox="0 0 32 32" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7"><ellipse cx="16" cy="16" rx="7" ry="4.2"/><circle cx="16" cy="7.2" r="2.1" fill="currentColor"/><circle cx="7.2" cy="18" r="2.1" fill="currentColor"/><circle cx="24.8" cy="18" r="2.1" fill="currentColor"/><circle cx="16" cy="25.2" r="2.1" fill="currentColor"/></svg>',
    spotlight:
      '<svg viewBox="0 0 32 32" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round"><path d="M16 4.5l2.7 7.2 7.7.4-6 4.9 2 7.5L16 20.2 9.6 24.5l2-7.5-6-4.9 7.7-.4z"/></svg>'
  };

  window.SKILL_ATLAS = {
    view: { w: 1200, h: 800 },
    home: { x: 620, y: 448 },
    icon: function (name) {
      return icons[name] || "";
    },
    courses: [
      {
        id: "brainstorm",
        name: "Brainstorm skills",
        place: "Spark Cove",
        icon: "spark",
        hue: "#E7B84A",
        x: 268,
        y: 248,
        dock: { x: 455, y: 318 },
        duration: "Half day",
        format: "Live workshop",
        group: "Up to 16",
        summary:
          "Idea sessions often end as a wall of notes and no decision. This workshop shows a team how to frame one problem, diverge without debate, and leave with a few options someone will actually try.",
        audience:
          "Product, engineering, and BA groups who need a better hour of ideation.",
        practice: [
          "Frame a problem tight enough for a single hour",
          "Diverge in silence, then cluster out loud",
          "Leave with three options, each with an owner"
        ],
        sessions: [
          {
            title: "The frame",
            text: "Rewrite a fuzzy topic into a question the team can answer before lunch, and agree what sits inside the hour."
          },
          {
            title: "Diverge, then converge",
            text: "Two different moves, and the moment you switch. Practice both on a live problem from the group."
          },
          {
            title: "The test you leave with",
            text: "Cut the wall down to three options. Name who tries what, and by when."
          }
        ]
      },
      {
        id: "questions",
        name: "Asking the right questions",
        place: "Inquiry Gate",
        icon: "question",
        hue: "#8EB6FF",
        x: 948,
        y: 214,
        dock: { x: 760, y: 268 },
        duration: "Half day",
        format: "Live workshop",
        group: "Up to 16",
        summary:
          "A lot of status talk answers a weak question. Here you practice questions that surface assumptions, risk, and what a stakeholder actually needs — in standups, discovery, and reviews.",
        audience:
          "People who run or join technical conversations with customers, leads, or their own team.",
        practice: [
          "Catch a leading question and rewrite it",
          "Climb from a fact to the need underneath",
          "Close on the question that changes the plan"
        ],
        sessions: [
          {
            title: "Leading, lazy, and useful",
            text: "Hear how a question steers the answer, then rewrite three questions the group already uses."
          },
          {
            title: "A ladder for discovery",
            text: "Move from what happened, to why it matters, to what the room should do next."
          },
          {
            title: "The last question in the room",
            text: "End a meeting on one question people can still repeat in the corridor."
          }
        ]
      },
      {
        id: "meetings",
        name: "Facilitating meetings",
        place: "Roundtable Harbor",
        icon: "table",
        hue: "#7DCAA8",
        x: 908,
        y: 548,
        dock: { x: 690, y: 468 },
        duration: "One day",
        format: "Live workshop",
        group: "Up to 16",
        summary:
          "Give a meeting a purpose, a path, and a decision. You design that path and practice holding the room until people leave with an owner and a date.",
        audience: "Leads and ICs who are asked to run the meeting.",
        practice: [
          "Name the outcome before the invite goes out",
          "Keep a timed path when the room drifts",
          "Close with a decision, an owner, and a date"
        ],
        sessions: [
          {
            title: "Outcome, invite, and the guest list",
            text: "Decide what must be true when the meeting ends, and who needs to be there for that to happen."
          },
          {
            title: "Holding the room",
            text: "Open, park side topics, and make space for both the quiet voice and the loud one."
          },
          {
            title: "A close people can repeat",
            text: "Decision, owner, date — said out loud, and written where the team will see it."
          }
        ]
      },
      {
        id: "demo",
        name: "Making your demo shine",
        place: "Spotlight Point",
        icon: "spotlight",
        hue: "#F0A36B",
        x: 292,
        y: 552,
        dock: { x: 500, y: 500 },
        duration: "Half day",
        format: "Live workshop",
        group: "Up to 16",
        summary:
          "A demo is a story with a live product inside it. You choose one journey, say the value before the click, and stay steady when the build wobbles.",
        audience:
          "Engineers, PMs, and BAs who demo to sponsors, customers, or their own leadership.",
        practice: [
          "Cut a demo to a single user journey",
          "Say the stake before you narrate the click",
          "Recover in the sentence after something breaks"
        ],
        sessions: [
          {
            title: "The one journey worth showing",
            text: "Pick the path that carries the decision you want, and set the rest of the product aside for this telling."
          },
          {
            title: "Voice, pace, and the ask",
            text: "What you say before the click, how long you stay on a screen, and the request you leave with."
          },
          {
            title: "Rehearsing the wobble",
            text: "A line to say when the build misbehaves, practiced until it sounds like part of the story."
          }
        ]
      }
    ]
  };
})();
