export const SimulatorData = [
  {
    name: "Aluminio",
    abreviation: "Al",
    oxidationState: 3,
    logaritmicEDTA: 16.1,
    constantMHY: 2.5,
    constantMOHY: 8.1,
  },
  {
    name: "Bario",
    abreviation: "Ba",
    oxidationState: 2,
    logaritmicEDTA: 7.8,
    constantMHY: 4.6,
    bufferLogaritmic: [
      {
        name: "Acético - Acetato de Sodio",
        logaritmic: [
          {
            B1: 0.4,
          },
        ],
      },
    ],
    indicadorLogaritmic: [
      {
        name: "Negro de Eriocromo T",
        logaritmic: [
          {
            KMInd: 3.0,
          },
        ],
      },
    ],
  },
  {
    name: "Cadmio",
    abreviation: "Cd",
    oxidationState: 2,
    logaritmicEDTA: 16.5,
    constantMHY: 2.9,
    bufferLogaritmic: [
      {
        name: "Acético - Acetato de Sodio",
        logaritmic: [
          {
            B1: 1.0,
            B2: 1.9,
            B3: 1.8,
            B4: 1.3,
          },
        ],
      },
      {
        name: "Amoniacal",
        logaritmic: [
          {
            B1: 2.6,
            B2: 4.65,
            B3: 6.04,
            B4: 6.92,
            B5: 6.6,
            B6: 4.9,
          },
        ],
      },
    ],
  },
  {
    name: "Calcio",
    abreviation: "Ca",
    oxidationState: 2,
    logaritmicEDTA: 10.7,
    constantMHY: 3.1,
    bufferLogaritmic: [
      {
        name: "Acético - Acetato de Sodio",
        logaritmic: [
          {
            B1: 0.5,
          },
        ],
      },
      {
        name: "Amoniacal",
        logaritmic: [
          {
            B1: -0.2,
            B2: -0.8,
            B3: -1.6,
            B4: -2.7,
          },
        ],
      },
    ],
    indicadorLogaritmic: [
      {
        name: "Negro de Eriocromo T",
        logaritmic: [
          {
            KMInd: 5.4,
          },
        ],
      },
      {
        name: "Negro de Eriocromo A",
        logaritmic: [
          {
            KMInd: 5.3,
          },
        ],
      },
      {
        name: "Calcón",
        logaritmic: [
          {
            KMInd: 5.3,
          },
        ],
      },
      {
        name: "Negro - azul de Eriocromo B",
        logaritmic: [
          {
            KMInd: 5.7,
          },
        ],
      },
      {
        name: "Calmagita",
        logaritmic: [
          {
            KMInd: 6.1,
          },
        ],
      },
      {
        name: "Violeta de Solocromo R",
        logaritmic: [
          {
            KMInd: 5.6,
          },
        ],
      },
      {
        name: "Murexida",
        logaritmic: [
          {
            KMInd: 5.0,
          },
        ],
      },
    ],
  },
  {
    name: "Cobalto (II)",
    abreviation: "Co",
    oxidationState: 2,
    logaritmicEDTA: 16.3,
    constantMHY: 3.1,
    bufferLogaritmic: [
      {
        name: "Acético - Acetato de Sodio",
        logaritmic: [
          {
            B1: 1.1,
            B2: 1.5,
          },
        ],
      },
      {
        name: "Amoniacal",
        logaritmic: [
          {
            B1: 2.05,
            B2: 3.62,
            B3: 4.61,
            B4: 5.31,
            B5: 5.43,
            B6: 4.75,
          },
        ],
      },
    ],
  },
  {
    name: "Cobre",
    abreviation: "Cu",
    oxidationState: 2,
    logaritmicEDTA: 18.8,
    constantMHY: 3.0,
    constantMOHY: 2.5,
    bufferLogaritmic: [
      {
        name: "Acético - Acetato de Sodio",
        logaritmic: [
          {
            B1: 1.7,
            B2: 2.7,
            B3: 3.1,
            B4: 2.9,
          },
        ],
      },
      {
        name: "Amoniacal",
        logaritmic: [
          {
            B1: 4.13,
            B2: 7.61,
            B3: 10.48,
            B4: 12.59,
          },
        ],
      },
    ],
    indicadorLogaritmic: [
      {
        name: "Negro de Eriocromo T",
        logaritmic: [
          {
            KMInd: 3.0,
          },
        ],
      },
      {
        name: "Violeta de Solocromo R",
        logaritmic: [
          {
            KMInd: 20.8,
          },
        ],
      },
      {
        name: "1-(2-pirilidazol)-2-noftol (PAN)",
        logaritmic: [
          {
            KMInd: 16.0,
          },
        ],
      },
    ],
  },
  {
    name: "Estroncio",
    abreviation: "Sr",
    oxidationState: 2,
    logaritmicEDTA: 8.6,
    constantMHY: 3.9,
    bufferLogaritmic: [
      {
        name: "Acético - Acetato de Sodio",
        logaritmic: [
          {
            B1: 0.4,
          },
        ],
      },
    ],
  },
  {
    name: "Hierro (II)",
    abreviation: "Fe",
    oxidationState: 2,
    logaritmicEDTA: 14.3,
    constantMHY: 2.8,
    bufferLogaritmic: [
      {
        name: "Amoniacal",
        logaritmic: [
          {
            B1: 1.4,
            B2: 2.2,
            B3: 0,
            B4: 3.7,
          },
        ],
      },
    ],
  },
  {
    name: "Hierro (III)",
    abreviation: "Fe",
    oxidationState: 3,
    logaritmicEDTA: 25.1,
    constantMHY: 1.4,
    constantMOHY: 6.5,
    bufferLogaritmic: [
      {
        name: "Acético - Acetato de Sodio",
        logaritmic: [
          {
            B1: 3.4,
            B2: 6.1,
            B3: 8.7,
          },
        ],
      },
    ],
  },
  {
    name: "Magnesio",
    abreviation: "Mg",
    oxidationState: 2,
    logaritmicEDTA: 8.7,
    constantMHY: 3.9,
    bufferLogaritmic: [
      {
        name: "Acético - Acetato de Sodio",
        logaritmic: [
          {
            B1: 0.5,
          },
        ],
      },
      {
        name: "Amoniacal",
        logaritmic: [
          {
            B1: 0.23,
            B2: 0.08,
            B3: -0.36,
            B4: -1.1,
          },
        ],
      },
    ],
    indicadorLogaritmic: [
      {
        name: "Negro de Eriocromo T",
        logaritmic: [
          {
            KMInd: 7.0,
          },
        ],
      },
      {
        name: "Negro de Eriocromo A",
        logaritmic: [
          {
            KMInd: 7.2,
          },
        ],
      },
      {
        name: "Calcón",
        logaritmic: [
          {
            KMInd: 7.6,
          },
        ],
      },
      {
        name: "Negro - azul de Eriocromo B",
        logaritmic: [
          {
            KMInd: 7.4,
          },
        ],
      },
      {
        name: "Calmagita",
        logaritmic: [
          {
            KMInd: 8.1,
          },
        ],
      },
      {
        name: "Violeta de Solocromo R",
        logaritmic: [
          {
            KMInd: 7.6,
          },
        ],
      },
    ],
  },
  {
    name: "Manganeso",
    abreviation: "Mn",
    oxidationState: 2,
    logaritmicEDTA: 14.0,
    constantMHY: 3.1,
    bufferLogaritmic: [
      {
        name: "Acético - Acetato de Sodio",
        logaritmic: [
          {
            B1: 0.5,
          },
        ],
      },
      {
        name: "Amoniacal",
        logaritmic: [
          {
            B1: 0.8,
            B2: 1.3,
          },
        ],
      },
    ],
  },
  {
    name: "Mercurio",
    abreviation: "Hg",
    oxidationState: 2,
    logaritmicEDTA: 21.8,
    constantMHY: 3.1,
    constantMOHY: 4.9,
    bufferLogaritmic: [
      {
        name: "Amoniacal",
        logaritmic: [
          {
            B1: 8.8,
            B2: 17.5,
            B3: 18.5,
            B4: 19.4,
          },
        ],
      },
    ],
  },

  {
    name: "Niquel",
    abreviation: "Ni",
    oxidationState: 2,
    logaritmicEDTA: 18.6,
    constantMHY: 3.2,
    bufferLogaritmic: [
      {
        name: "Acético - Acetato de Sodio",
        logaritmic: [
          {
            B1: 0.7,
            B2: 1.25,
          },
        ],
      },
      {
        name: "Amoniacal",
        logaritmic: [
          {
            B1: 2.75,
            B2: 4.95,
            B3: 6.64,
            B4: 7.79,
            B5: 8.5,
            B6: 8.49,
          },
        ],
      },
    ],
    indicadorLogaritmic: [
      {
        name: "Violeta de Solocromo R",
        logaritmic: [
          {
            KMInd: 14.9,
          },
        ],
      },
    ],
  },

  {
    name: "Plomo",
    abreviation: "Pb",
    oxidationState: 2,
    logaritmicEDTA: 18,
    constantMHY: 2.8,
    bufferLogaritmic: [
      {
        name: "Acético - Acetato de Sodio",
        logaritmic: [
          {
            B1: 1.9,
            B2: 3.3,
          },
        ],
      },
    ],
    indicadorLogaritmic: [
      {
        name: "Naranja de Xilenol",
        logaritmic: [
          {
            KMInd: 20.5,
          },
        ],
      },
    ],
  },
  {
    name: "Zinc",
    abreviation: "Zn",
    oxidationState: 2,
    logaritmicEDTA: 16.5,
    constantMHY: 3.0,
    bufferLogaritmic: [
      {
        name: "Acético - Acetato de Sodio",
        logaritmic: [
          {
            B1: 1.3,
            B2: 2.1,
          },
        ],
      },
      {
        name: "Amoniacal",
        logaritmic: [
          {
            B1: 2.27,
            B2: 4.61,
            B3: 7.01,
            B4: 9.06,
          },
        ],
      },
    ],
    indicadorLogaritmic: [
      {
        name: "Negro de Eriocromo T",
        logaritmic: [
          {
            KMInd: 12.9,
          },
        ],
      },
      {
        name: "Negro - azul de Eriocromo B",
        logaritmic: [
          {
            KMInd: 12.9,
          },
        ],
      },
      {
        name: "Violeta de Solocromo R",
        logaritmic: [
          {
            KMInd: 12.5,
          },
        ],
      },
      {
        name: "Naranja de Xilenol",
        logaritmic: [
          {
            KMInd: 18.8,
          },
        ],
      },
    ],
  },
];

export const IndicadorData = [
  {
    name: "Negro de Eriocromo T",
    pK: [
      {
        pk1: 6.3,
        pk2: 11.6,
      },
    ],
    colors: [
      {
        Rojo: "H2Ind-",
        Azul: "HInd2-",
        Naranja: "Ind3-",
      },
    ],
  },
  {
    name: "Negro de Eriocromo A",
    pK: [
      {
        pk1: 6.2,
        pk2: 13,
      },
    ],
    colors: [
      {
        Rojo: "H2Ind-",
        Azul: "HInd2-",
        Naranja: "Ind3-",
      },
    ],
  },
  {
    name: "Calcón",
    pK: [
      {
        pk1: 7.0,
        pk2: 13.5,
      },
    ],
    colors: [
      {
        Rojo: "H2Ind-",
        Azul: "HInd2-",
        Naranja: "Ind3-",
      },
    ],
  },
  {
    name: "Negro - azul de Eriocromo B",
    pK: [
      {
        pk1: 6.2,
        pk2: 12.5,
      },
    ],
    colors: [
      {
        Rojo: "H2Ind-",
        Azul: "HInd2-",
        Naranja: "Ind3-",
      },
    ],
  },
  {
    name: "Calmagita",
    pK: [
      {
        pk1: 8.1,
        pk2: 12.4,
      },
    ],
    colors: [
      {
        Rojo: "H2Ind-",
        Azul: "HInd2-",
        Naranja: "Ind3-",
      },
    ],
  },
  {
    name: "Violeta de Solocromo R",
    pK: [
      {
        pk1: 7.0,
        pk2: 13.0,
      },
    ],
    colors: [
      {
        Rojo: "H2Ind-",
        Azul: "HInd2-",
        Naranja: "Ind3-",
      },
    ],
  },
  {
    name: "1-(2-pirilidazol)-2-noftol (PAN)",
    pK: [
      {
        pk1: 1.9,
        pk2: 12.2,
      },
    ],
    colors: [
      {
        Amarillo: "H2Ind-",
      },
    ],
  },
  {
    name: "Murexida",
    pK: [
      {
        pk1: 9.2,
        pk2: 10.5,
      },
    ],
    colors: [
      {
        Rojo: "H4Ind-",
        Violeta: "H3Ind2-",
        Azul: "H2Ind3-",
      },
    ],
  },
  {
    name: "Violeta de pirocatecol",
    pK: [
      {
        pk1: 7.8,
        pk2: 9.8,
        pk3: 11.7,
      },
    ],
    colors: [
      {
        Rojo: "H4Ind-",
        Amarillo: "H3Ind2-",
        Violeta: "H2Ind3-",
        Magenta: "HInd4-",
      },
    ],
  },
  {
    name: "Naranja de Xilenol",
    pK: [
      {
        pk1: 2.32,
        pk2: 2.85,
        pk3: 6.70,
        pk4: 10.47,
        pk5: 12.23,
      },
    ],
    colors: [
      {
        Amarillo1: "H5Ind-",
        Amarillo2: "H4Ind2-",
        Amarillo3: "H3Ind3-",
        Violeta1: "H2Ind4-",
        Violeta2: "HInd5-",
        Violeta3: "Ind6-",
      },
    ],
  },
];

export const BufferData = [
  {
    name: "Acético - Acetato de Sodio",
    minpH: 4.5,
    maxpH: 5.5,
    acid: "Ácido acético",
    conjugedBase: "Acetato de sodio",
    logaritmicProton: 4.65,
  },
  {
    name: "Amoniacal",
    minpH: 9,
    maxpH: 11,
    acid: "Amoniaco",
    conjugedBase: "Ion amonio",
    logaritmicProton: 9.37,
  },
  {
    name: "Fosfato",
    minpH: 6,
    maxpH: 8,
    acid: "Ácido fosfórico",
    conjugedBase: "Fosfato monobásico y dibásico",
  },
];

export const EDTAData = {
  name: "Ácido etilendiamitetraacético",
  abreviation: "EDTA",
  pQa1: 1.99,
  pQa2: 2.68,
  pQa3: 6.11,
  pQa4: 10.17,
};
