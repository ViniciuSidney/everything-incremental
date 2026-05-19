export const milestones = [
  {
    id: "first-10-points",
    name: "Primeiros sinais",
    description: "Um sinal surge no vazio.",

    requirement: {
      metric: "totalPointsEarned",
      operator: ">=",
      value: 10,
    },

    effects: [
      {
        type: "showMessage",
        text: "Tem alguém aí?",
      },
    ],
  },

  {
    id: "first-25-points",
    name: "Forma inicial",
    description: "Ocasionando reações no ambiente.",

    requirement: {
      metric: "totalPointsEarned",
      operator: ">=",
      value: 25,
    },

    effects: [
      {
        type: "setVisualLevel",
        level: 1,
      },
      {
        type: "showMessage",
        text: "Isso está mexendo comigo...",
      },
    ],
  },

  {
    id: "observation",
    name: "Observação",
    description: "Algo começa a perceber padrões.",

    requirement: {
      metric: "totalPointsEarned",
      operator: ">=",
      value: 50,
    },

    effects: [
      {
        type: "unlockSystem",
        system: "observation",
      },
      {
        type: "showMessage",
        text: "Eu consigo sentir.",
      },
    ],
  },

  {
    id: "first-100-points",
    name: "Acumulando",
    description: "Para que acumular?",

    requirement: {
      metric: "totalPointsEarned",
      operator: ">=",
      value: 100,
    },

    effects: [
      {
        type: "showMessage",
        text: "Por que tantos pontos?",
      },
    ],
  },

  {
    id: "ideas",
    name: "Surgem Ideias",
    description: "Ideias surgem a partir das experiências.",

    requirement: {
      metric: "milestones",
      operator: ">=",
      value: 4,
    },

    effects: [
      {
        type: "unlockSystem",
        system: "ideas",
      },

      {
        type: "showMessage",
        text: "Isso me faz pensar...",
      },
    ],
  },

  {
    id: "records",
    name: "Registros",
    description: "É melhor deixar registrado.",

    requirement: {
      metric: "totalPointsEarned",
      operator: ">=",
      value: 200,
    },

    effects: [
      {
        type: "unlockSystem",
        system: "records",
      },
      {
        type: "showMessage",
        text: "É melhor registrar isso.",
      },
    ],
  },
];
