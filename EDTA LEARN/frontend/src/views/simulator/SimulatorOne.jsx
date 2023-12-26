import React, { useState, useEffect } from "react";
import "../../css/Us.css";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler,
} from "chart.js";
import Modal from "react-bootstrap/Modal";
import {
  SimulatorData,
  BufferData,
  IndicadorData,
  EDTAData,
} from "./SimulatorData";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const DescriptionText = styled.p`
  font-size: 1rem;
  color: #2a363b;
  text-align: justify;
  margin: 0.5rem;

  &.descriptionText {
    font-size: 0.8rem;
    font-style: italic;
    margin-top: 0;
    margin-bottom: 20px;
    text.align: center;
  }
`;

const SpeciesBox = styled.div`
  display: grid;
  place-content: center;
  margin-bottom: 10px;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`;

const Specie = styled.div`
  height: 200px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;

  &.midHeight {
    height: 95px;
    flex-direction: row;
    border-radius: 20px;
  }

  &.firstSpecie {
    background: #e84a5f;
  }

  &.secondSpecie {
    background: #ff847c;
  }

  &.thirdSpecie {
    background: #fecea8;
  }

  &.forthSpecie {
    background: #99b898;
  }
`;

const SpecieMiddle = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TextSpecieBox = styled.h3`
  width: 90%;
  margin: 0.8rem auto;
  font-weight: 700;

  &.midHeight {
    margin: auto 1rem;
    width: 20%;
  }

  &.formules {
    margin: auto 1rem;
  }

  &.formulesSub {
    margin: auto 1rem;
    font-size: 1.5rem;
  }

  &.firstSpecie {
    color: #2a363b;
  }

  &.secondSpecie {
    color: #2a363b;
  }

  &.thirdSpecie {
    color: #2a363b;
  }

  &.forthSpecie {
    color: #2a363b;
  }
`;

const SpeciesDataBox = styled.div`
  display: grid;
  place-content: center;
  margin-bottom: 10px;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

const SpecieData = styled.div`
  height: 200px;
  border-radius: 15px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  background-color: #ffffff;

  &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent; /* Oculta el thumb del scrollbar */
  }
  scrollbar-width: thin; /* Para Firefox */
  scrollbar-color: transparent transparent; /* Para Firefox */
`;

const BufferLogaritmicBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TextSpecieDataBox = styled.h3`
  color: #2a363b;
  font-size: 1.2rem;
  font-weight: 700;
  width: 90%;
  margin: 1rem auto 0 auto;
`;

const LabelSpecieBox = styled.div`
  display: flex;
  margin: 0 1.5rem;
  gap: 5px;
`;

const LabelSpecie = styled.label`
  color: #2a363b;
  font-weight: 500;
  font-size: 1.1rem;
`;

const LabelSpecieData = styled.label`
  color: #2a363b;
  font-weight: 500;
  font-size: 1.1rem;
`;

const IndicadorDataBox = styled.div`
  display: flex;
  width: 100%;
`;

const ConstantDataBox = styled.div`
  dislay: flex;
  flex-direction: column;
`;

const SelectList = styled.select`
  height: 55px;
  width: 89%;
  padding-left: 0.6rem;
  border-radius: 5px;
  margin: 0 auto;
  font-weight: 600;
  font-size: 1rem;

  &.firstSpecie {
    color: #2a363b;
    border: 2.5px solid #ffffff;
    background: transparent;
  }

  &.secondSpecie {
    color: #2a363b;
    border: 2.5px solid #ffffff;
    background: transparent;
  }

  &.thirdSpecie {
    color: #2a363b;
    border: 2.5px solid #ffffff;
    background: transparent;
  }

  &.forthSpecie {
    color: #2a363b;
    border: 2.5px solid #ffffff;
    background: transparent;
  }
`;

const OptionList = styled.option`
  font-weight: 600;
  font-size: 1rem;

  &.firstSpecie {
    background: #e84a5f;
  }

  &.secondSpecie {
    background: #ff847c;
  }

  &.thirdSpecie {
    background: #fecea8;
  }

  &.forthSpecie {
    background: #99b898;
  }
`;

const InputBox = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  gap: 2%;
`;

const ChartBox = styled.div`
  display: grid;
  place-content: center;
  grid-gap: 10px;
  margin-bottom: 10px;
  overflow: auto;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
`;

const DataChartBox = styled.div`
  height: 650px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ChartLineBox = styled.div`
  height: 500px;
  border-radius: 20px;
  background: #ffffff;
  padding: 1rem;
`;

const DataGraphicBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  height: 140px;
  border-radius: 20px;
  background: #ffffff;
  padding: 0.8rem 0.4rem;
  overflow: auto;
`;

const ControlAddVolumeBox = styled.div`
  height: 650px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const AddVolume = styled.div`
  height: 190px;
  width: 100%;
  gap: 1%;
  display: flex;
`;

const ButtonsBox = styled.div`
  display: flex;
  height: 100%;
  gap: 2px;
  flex-direction: column;
  width: 25%;
  align-items: center;
  justify-content: space-between;
`;

const VolumeBox = styled.div`
  height: 100%;
  border-radius: 10px;
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const AddVolumeButton = styled.button`
  width: 100%;
  height: 50%;
  color: #2a363b;
  border: none;
  outline: none;
  border-radius: 15px;
  padding: 0.8rem;
  font-size: 1.3rem;
  font-weight: 800;
  background-color: #ffffff;

  &:hover {
    background-color: #2a363b;
    color: #ffffff;
  }
`;

const Button = styled.button`
  width: 100%;
  color: #2a363b;
  border: none;
  outline: none;
  border-radius: 15px;
  padding: 0.7rem;
  font-size: 1.3rem;
  font-weight: 800;
  background-color: #ffffff;

  &:hover {
    color: white;
    background: #2a363b;
    border-color: #2a363b;
  }
`;

const DataFormulesBox = styled.div`
  height: 450px;
  border-radius: 20px;
  background-color: #ffffff;
  padding: 1rem;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent; /* Oculta el thumb del scrollbar */
  }
  scrollbar-width: thin; /* Para Firefox */
  scrollbar-color: transparent transparent; /* Para Firefox */
`;

const ImagesDataFormules = styled.img`
  margin: 1rem auto 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ImagesFormulesBox = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: center;
`;

const ImagesDataFormulesBox = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
`;

const TableBox = styled.div`
  overflow-x: auto;
  max-width: 100%;
  border: none;
  border-radius: 5px;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableRow = styled.tr``;

const TableHeader = styled.th`
  background-color: #e84a5f;
  color: white;
  padding: 10px;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 15px;
  border: 4px solid #e9e9e9;
  padding: 10px;
`;

const TableCell = styled.td`
  padding: 8px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 15px;
  border: 4px solid #e9e9e9;
  padding: 10px;
`;

const SimulatorOne = () => {
  const [disabled, setDisabled] = useState(false);
  const [metalSelect, setMetalSelect] = useState("");
  const [indicadorSelect, setIndicadorSelect] = useState("");
  const [bufferSelect, setBufferSelect] = useState("");
  const [dataMetal, setDataMetal] = useState(null);
  const [dataIndicador, setDataIndicador] = useState(null);
  const [dataBuffer, setDataBuffer] = useState(null);
  const [quelonConstant, setQuelonConstant] = useState("");
  const [volumeToAdd, setVolumeToAdd] = useState(1);
  const [totalVolume, setTotalVolume] = useState(0);
  const [chartLineX, setChartLineX] = useState([0]);
  const [chartLineY, setChartLineY] = useState([]);
  const [freeMetalConcentration, setFreeMetalConcentration] = useState([]);
  const [pH, setpH] = useState();
  const [volumeEquivalence, setVolumeEquivalence] = useState(0);
  const [bufferComplexConstants, setBufferComplexConstants] = useState();
  const [indicadorComplexConstants, setIndicadorComplexConstants] = useState();
  const [indicadorpKs, setIndicadorpKs] = useState();
  const [indicadorColors, setIndicadorColors] = useState();
  const [enabledSaveData, setEnabledSaveData] = useState(false);
  const [correctConcentrationBuffer, setCorrectConcentrationBuffer] =
    useState(0);
  const [FLM, setFLM] = useState(0);
  const [FHY, setFHY] = useState(0);
  const [FMHY, setFMHY] = useState(0);
  const [FHInd, setFHInd] = useState(0);
  const [QMY, setQMY] = useState(0);
  const [concentracionMPE, setConcentracionMPE] = useState(0);
  const [pMPE, setpMPE] = useState(0);
  const [concentracionMPF, setConcentracionMPF] = useState(0);
  const [pMPF, setpMPF] = useState(0);
  const [QMYVerify, setQMYVerify] = useState(false);
  const [messageAlert, setMessageAlert] = useState("");
  const [titleModal, setTitleModal] = useState("");
  const [showModal, setShowModal] = useState(false);

  const chartLineYLimited = chartLineY.map((valor) => parseFloat(valor));
  const chartLineXLimited = chartLineX.map((valor) =>
    parseFloat(valor.toFixed(2))
  );

  useEffect(() => {
    updateChartLineY();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartLineX]);

  const updateChartLineY = () => {
    if (QMYVerify) {
      let volumenMetal = document.getElementById("volumenMetal").value;
      let concentracionMetal =
        document.getElementById("concentracionMetal").value;
      let concentracionQuelon = document.getElementById(
        "concentracionQuelon"
      ).value;
      if (chartLineX[chartLineX.length - 1] !== 0) {
        if (
          parseFloat(chartLineX[chartLineX.length - 1]) <
          parseFloat(volumeEquivalence)
        ) {
          const numConcMetalBPE =
            parseFloat(volumenMetal) * parseFloat(concentracionMetal);
          const numConcQuelonBPE =
            parseFloat(chartLineX[chartLineX.length - 1]) *
            parseFloat(concentracionQuelon);
          const numConcBPE =
            parseFloat(numConcMetalBPE) - parseFloat(numConcQuelonBPE);
          const denConcBPE = parseFloat(totalVolume) * parseFloat(FLM);
          const concentrationMetalBPE =
            parseFloat(numConcBPE) / parseFloat(denConcBPE);
          const pMetalBPE = Math.log10(1 / concentrationMetalBPE);

          setChartLineY([...chartLineY, pMetalBPE]);
          setFreeMetalConcentration([
            ...freeMetalConcentration,
            concentrationMetalBPE,
          ]);
        } else if (
          parseFloat(chartLineX[chartLineX.length - 1].toFixed(2)) ===
          parseFloat(volumeEquivalence)
        ) {
          setChartLineY([...chartLineY, pMPE]);
          setFreeMetalConcentration([
            ...freeMetalConcentration,
            concentracionMPE,
          ]);
        } else if (
          parseFloat(chartLineX[chartLineX.length - 1]) >
          parseFloat(volumeEquivalence)
        ) {
          const concentrationMetalAPE =
            (parseFloat(FHY) *
              parseFloat(concentracionMetal) *
              parseFloat(volumenMetal)) /
            (10 ** parseFloat(dataMetal.logaritmicEDTA) *
              (parseFloat(concentracionQuelon) *
                parseFloat(chartLineX[chartLineX.length - 1]) -
                parseFloat(concentracionMetal) * parseFloat(volumenMetal)));
          console.log("Aquí es después del punto de equivalencia");
          const pMetalAPE = Math.log10(1 / concentrationMetalAPE);
          setChartLineY([...chartLineY, pMetalAPE]);
          setFreeMetalConcentration([
            ...freeMetalConcentration,
            concentrationMetalAPE,
          ]);
        }
      }
    }
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  const dataChartLine = {
    labels: chartLineXLimited,
    datasets: [
      {
        label: `p ${metalSelect}`,
        data: chartLineYLimited,
        fill: true,
        borderColor: "#e84a5f",
        backgroundColor: "#e84a5f50",
        tension: 0.3,
      },
    ],
  };

  const optionsChartLine = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: `Valoración ${metalSelect} vs EDTA`,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          color: "black",
          text: `Volumen de EDTA (mL)`,
          font: {
            size: 16,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: `p ${metalSelect}`,
          color: "black",
          font: {
            size: 16,
          },
        },
      },
    },
  };

  const handleElementChange = (e) => {
    const value = e.target.value;
    setMetalSelect(value);
    if (value) {
      setQuelonConstant(
        SimulatorData.find((item) => item.name === value).logaritmicEDTA
      );
      setDataMetal(SimulatorData.find((item) => item.name === value));
      setBufferSelect("");
      setIndicadorSelect("");
    } else {
      setQuelonConstant("");
      setDataMetal("");
      setIndicadorSelect("");
      setBufferSelect("");
    }
  };

  const handleIndicadorChange = (e) => {
    const value = e.target.value;
    setIndicadorSelect(value);
    if (value) {
      setDataIndicador(IndicadorData.find((item) => item.name === value));
      setIndicadorpKs(IndicadorData.find((item) => item.name === value).pK[0]);
      setIndicadorColors(
        IndicadorData.find((item) => item.name === value).colors[0]
      );
      handleIndicadorComplexChange();
    } else {
      setDataIndicador();
    }
  };

  const handlebufferChange = (e) => {
    const value = e.target.value;
    setBufferSelect(value);
    if (value) {
      setDataBuffer(BufferData.find((item) => item.name === value));
      handleBufferComplexChange();
    } else {
      setDataBuffer();
    }
  };

  const handleBufferComplexChange = () => {
    const metalName = document.getElementById("metalSelect").value;
    const bufferName = document.getElementById("bufferSelect").value;

    const metalData = SimulatorData.find((item) => item.name === metalName);
    if (metalData.bufferLogaritmic) {
      const bufferComplexData = metalData.bufferLogaritmic.find(
        (item) => item.name === bufferName
      );
      if (bufferComplexData) {
        setBufferComplexConstants(bufferComplexData.logaritmic[0]);
      } else {
        setBufferComplexConstants();
      }
    }
  };

  const handleIndicadorComplexChange = () => {
    const metalName = document.getElementById("metalSelect").value;
    const indicadorName = document.getElementById("indicadorSelect").value;

    const metalData = SimulatorData.find((item) => item.name === metalName);
    if (metalData.indicadorLogaritmic) {
      const indicadorComplexData = metalData.indicadorLogaritmic.find(
        (item) => item.name === indicadorName
      );
      if (indicadorComplexData) {
        setIndicadorComplexConstants(indicadorComplexData.logaritmic[0]);
      } else {
        setIndicadorComplexConstants();
      }
    }
  };

  const metalList = SimulatorData.map((item, index) => (
    <OptionList key={index} value={item.name} className="firstSpecie">
      {`${item.name},  (${item.abreviation}`}
      <sub>{item.oxidationState + "+"}</sub>)
    </OptionList>
  ));

  const indicadorList = IndicadorData.map((item, index) => (
    <OptionList key={index} value={item.name} className="thirdSpecie">
      {item.name}
    </OptionList>
  ));

  const bufferList = BufferData.map((item, index) => (
    <OptionList key={index} value={item.name} className="forthSpecie">
      {item.name}
    </OptionList>
  ));

  const cleanData = (e) => {
    setMessageAlert(
      "Los datos suministrados y registros de la gráfica han sido borrados"
    );
    setTitleModal("Exito");
    handleShowModal();
    e.preventDefault();
    setDisabled(false);
    setMetalSelect("");
    setBufferSelect("");
    setIndicadorSelect("");
    setDataMetal(null);
    setDataIndicador(null);
    setDataBuffer(null);
    setQuelonConstant("");
    setVolumeToAdd(1);
    setTotalVolume(0);
    setChartLineX([0]);
    setChartLineY([]);
    setFreeMetalConcentration([]);
    setpH();
    setVolumeEquivalence(0);
    setBufferComplexConstants();
    setIndicadorComplexConstants();
    setEnabledSaveData(false);
    setCorrectConcentrationBuffer(0);
    setFHY(0);
    setFLM(0);
    setFMHY(0);
    setQMY(0);
    setFHInd(0);
    setConcentracionMPE(0);
    setpMPE(0);
    setQMYVerify(false);
  };

  const cleanGraphic = (e) => {
    let volumenMetal = document.getElementById("volumenMetal").value;
    let volumenBuffer = document.getElementById("volumenBuffer").value;
    let volumenAgua = document.getElementById("volumenAgua").value;
    let concentracionMetal =
      document.getElementById("concentracionMetal").value;
    e.preventDefault();
    setMessageAlert("Los datos de la gráfica han sido borrados");
    setTitleModal("Exito");
    handleShowModal();
    setVolumeToAdd(1);
    setChartLineX([0]);
    setChartLineY([]);
    setFreeMetalConcentration([]);

    let totalVolumeSolution =
      parseFloat(volumenMetal) +
      parseFloat(volumenAgua) +
      parseFloat(volumenBuffer);
    setTotalVolume(totalVolumeSolution);

    if (QMYVerify) {
      if (chartLineY.length === 0) {
        const numConcBPE =
          parseFloat(volumenMetal) * parseFloat(concentracionMetal);
        const denConcBPE = parseFloat(totalVolume) * parseFloat(FLM);
        const concentrationMetalBPE =
          parseFloat(numConcBPE) / parseFloat(denConcBPE);
        const pMetalBPE = Math.log10(1 / concentrationMetalBPE);

        setFreeMetalConcentration([concentrationMetalBPE]);
        setChartLineY([pMetalBPE]);
      }
    }
  };

  const getData = () => {
    let volumenMetal = document.getElementById("volumenMetal").value;
    let volumenBuffer = document.getElementById("volumenBuffer").value;
    let volumenAgua = document.getElementById("volumenAgua").value;
    let concentracionMetal =
      document.getElementById("concentracionMetal").value;
    let concentracionBuffer = document.getElementById(
      "concentracionBuffer"
    ).value;
    let concentracionQuelon = document.getElementById(
      "concentracionQuelon"
    ).value;
    let pHBuffer = document.getElementById("pHBuffer").value;
    const pHBufferElement = document.getElementById("pHBuffer");
    const pHBufferFloat = parseFloat(pHBufferElement.value);

    if (
      volumenAgua === "" ||
      volumenMetal === "" ||
      volumenBuffer === "" ||
      concentracionQuelon === "" ||
      concentracionMetal === "" ||
      concentracionBuffer === "" ||
      pHBuffer === ""
    ) {
      setMessageAlert("Complete los campos para continuar");
      setTitleModal("Advertencia");
      handleShowModal();
      return false;
    } else {
      if (
        !isNaN(pHBufferFloat) &&
        pHBufferFloat >= parseFloat(pHBufferElement.min) &&
        pHBufferFloat <= parseFloat(pHBufferElement.max)
      ) {
        // SET pH
        setpH(document.getElementById("pHBuffer").value);

        // SET DISABLED DATA INPUTS
        setDisabled(true);

        // SET TOTAL VOLUME SOLUTION
        let totalVolumeSolution =
          parseFloat(volumenMetal) +
          parseFloat(volumenAgua) +
          parseFloat(volumenBuffer);
        setTotalVolume(totalVolumeSolution);

        // SET VOLUMEN DE EQUIVALENCIA
        setVolumeEquivalence(
          (parseFloat(volumenMetal) * parseFloat(concentracionMetal)) /
            parseFloat(concentracionQuelon)
        );

        // SET FHY
        setFHY(
          1 +
            10 ** (parseFloat(EDTAData.pQa4) - parseFloat(pH)) +
            10 **
              (parseFloat(EDTAData.pQa4) +
                parseFloat(EDTAData.pQa3) -
                2 * parseFloat(pH)) +
            10 **
              (parseFloat(EDTAData.pQa4) +
                parseFloat(EDTAData.pQa3) +
                parseFloat(EDTAData.pQa2) -
                3 * parseFloat(pH)) +
            10 **
              (parseFloat(EDTAData.pQa4) +
                parseFloat(EDTAData.pQa3) +
                parseFloat(EDTAData.pQa2) +
                parseFloat(EDTAData.pQa1) -
                4 * parseFloat(pH))
        );

        // SET CONCENTRACIÓN CORRECTA DEL BUFFER
        if (bufferComplexConstants) {
          if (dataBuffer.logaritmicProton) {
            const concentrationCorrect =
              (parseFloat(volumenBuffer) * parseFloat(concentracionBuffer)) /
              parseFloat(totalVolume);

            setCorrectConcentrationBuffer(
              parseFloat(concentrationCorrect) /
                (1 +
                  10 **
                    (parseFloat(dataBuffer.logaritmicProton) - parseFloat(pH)))
            );
          }
        }

        // SET FLM
        if (bufferComplexConstants) {
          if (bufferComplexConstants.B6) {
            setFLM(
              1 +
                10 ** parseFloat(bufferComplexConstants.B1) *
                  parseFloat(correctConcentrationBuffer) +
                10 ** parseFloat(bufferComplexConstants.B2) *
                  parseFloat(correctConcentrationBuffer) ** 2 +
                10 ** parseFloat(bufferComplexConstants.B3) *
                  parseFloat(correctConcentrationBuffer) ** 3 +
                10 ** parseFloat(bufferComplexConstants.B4) *
                  parseFloat(correctConcentrationBuffer) ** 4 +
                10 ** parseFloat(bufferComplexConstants.B5) *
                  parseFloat(correctConcentrationBuffer) ** 5 +
                10 ** parseFloat(bufferComplexConstants.B6) *
                  parseFloat(correctConcentrationBuffer) ** 6
            );
          } else if (bufferComplexConstants.B5) {
            setFLM(
              1 +
                10 ** parseFloat(bufferComplexConstants.B1) *
                  parseFloat(correctConcentrationBuffer) +
                10 ** parseFloat(bufferComplexConstants.B2) *
                  parseFloat(correctConcentrationBuffer) ** 2 +
                10 ** parseFloat(bufferComplexConstants.B3) *
                  parseFloat(correctConcentrationBuffer) ** 3 +
                10 ** parseFloat(bufferComplexConstants.B4) *
                  parseFloat(correctConcentrationBuffer) ** 4 +
                10 ** parseFloat(bufferComplexConstants.B5) *
                  parseFloat(correctConcentrationBuffer) ** 5
            );
          } else if (bufferComplexConstants.B4) {
            setFLM(
              1 +
                10 ** parseFloat(bufferComplexConstants.B1) *
                  parseFloat(correctConcentrationBuffer) +
                10 ** parseFloat(bufferComplexConstants.B2) *
                  parseFloat(correctConcentrationBuffer) ** 2 +
                10 ** parseFloat(bufferComplexConstants.B3) *
                  parseFloat(correctConcentrationBuffer) ** 3 +
                10 ** parseFloat(bufferComplexConstants.B4) *
                  parseFloat(correctConcentrationBuffer) ** 4
            );
          } else if (bufferComplexConstants.B3) {
            setFLM(
              1 +
                10 ** parseFloat(bufferComplexConstants.B1) *
                  parseFloat(correctConcentrationBuffer) +
                10 ** parseFloat(bufferComplexConstants.B2) *
                  parseFloat(correctConcentrationBuffer) ** 2 +
                10 ** parseFloat(bufferComplexConstants.B3) *
                  parseFloat(correctConcentrationBuffer) ** 3
            );
          } else if (bufferComplexConstants.B2) {
            setFLM(
              1 +
                10 ** parseFloat(bufferComplexConstants.B1) *
                  parseFloat(correctConcentrationBuffer) +
                10 ** parseFloat(bufferComplexConstants.B2) *
                  parseFloat(correctConcentrationBuffer) ** 2
            );
          } else if (bufferComplexConstants.B1) {
            setFLM(
              1 +
                10 ** parseFloat(bufferComplexConstants.B1) *
                  parseFloat(correctConcentrationBuffer)
            );
          }
        } else {
          setFLM(1);
        }

        // SET FMHY
        if (dataMetal.constantMHY) {
          setFMHY(
            1 + 10 ** parseFloat(dataMetal.constantMHY) * 10 ** -parseFloat(pH)
          );
          if (dataMetal.constantMOHY) {
            setFMHY(
              1 +
                10 ** parseFloat(dataMetal.constantMHY) *
                  10 ** -parseFloat(pH) +
                10 ** parseFloat(dataMetal.constantMOHY) *
                  10 ** (14 - parseFloat(pH))
            );
          }
        } else {
          setFMHY(1);
        }

        // SET FHInd
        if (indicadorpKs) {
          if (indicadorpKs.pk5) {
            setFHInd(
              1 +
                10 ** (parseFloat(indicadorpKs.pk5) - parseFloat(pH)) +
                10 **
                  (parseFloat(indicadorpKs.pk5) +
                    parseFloat(indicadorpKs.pk4) -
                    2 * parseFloat(pH)) +
                10 **
                  (parseFloat(indicadorpKs.pk5) +
                    parseFloat(indicadorpKs.pk4) +
                    parseFloat(indicadorpKs.pk3) -
                    3 * parseFloat(pH)) +
                10 **
                  (parseFloat(indicadorpKs.pk5) +
                    parseFloat(indicadorpKs.pk4) +
                    parseFloat(indicadorpKs.pk3) +
                    parseFloat(indicadorpKs.pk2) -
                    4 * parseFloat(pH)) +
                10 **
                  (parseFloat(indicadorpKs.pk5) +
                    parseFloat(indicadorpKs.pk4) +
                    parseFloat(indicadorpKs.pk3) +
                    parseFloat(indicadorpKs.pk2) +
                    parseFloat(indicadorpKs.pk1) -
                    5 * parseFloat(pH))
            );
          } else if (indicadorpKs.pk3) {
            setFHInd(
              1 +
                10 ** (parseFloat(indicadorpKs.pk3) - parseFloat(pH)) +
                10 **
                  (parseFloat(indicadorpKs.pk3) +
                    parseFloat(indicadorpKs.pk2) -
                    2 * parseFloat(pH)) +
                10 **
                  (parseFloat(indicadorpKs.pk3) +
                    parseFloat(indicadorpKs.pk2) +
                    parseFloat(indicadorpKs.pk1) -
                    3 * parseFloat(pH))
            );
          } else if (indicadorpKs.pk2) {
            setFHInd(
              1 +
                10 ** (parseFloat(indicadorpKs.pk2) - parseFloat(pH)) +
                10 **
                  (parseFloat(indicadorpKs.pk2) +
                    parseFloat(indicadorpKs.pk1) -
                    2 * parseFloat(pH))
            );
          } else if (indicadorpKs.pk1) {
            setFHInd(1 + 10 ** (parseFloat(indicadorpKs.pk1) - parseFloat(pH)));
          } else {
            setFHInd(1);
          }
        }

        setQMY(
          (10 ** parseFloat(dataMetal.logaritmicEDTA) * parseFloat(FMHY)) /
            (parseFloat(FLM) * parseFloat(FHY))
        );

        // SET CONDITIONAL CONSTANT
        if (!isNaN(QMY)) {
          if (QMY !== 0) {
            if (QMY >= 10 ** 8) {
              setQMYVerify(true);
            } else {
              setQMYVerify(false);
            }
          }
        }

        // SET CONCENTRATION METAL P.E
        if (QMYVerify) {
          const metalConcentrationPE =
            (parseFloat(concentracionMetal) * parseFloat(volumenMetal)) /
            (parseFloat(totalVolume) + parseFloat(volumeEquivalence));
          setConcentracionMPE(
            Math.sqrt(
              (parseFloat(metalConcentrationPE) * parseFloat(FHY)) /
                (10 ** parseFloat(dataMetal.logaritmicEDTA) *
                  parseFloat(FLM) *
                  parseFloat(FMHY))
            )
          );
        }

        // SET p METAL P.E
        if (QMYVerify) {
          setpMPE(Math.log10(1 / parseFloat(concentracionMPE)));
        }

        // SET CONCENTRATION METAL P.F
        if (QMYVerify) {
          if (indicadorComplexConstants) {
            setConcentracionMPF(
              parseFloat(FHInd) /
                (10 * 10 ** parseFloat(indicadorComplexConstants.KMInd))
            );
          } else {
            setConcentracionMPF(1);
          }
        }

        // SET p METAL P.F
        if (QMYVerify) {
          if (indicadorComplexConstants) {
            setpMPF(Math.log10(1 / parseFloat(concentracionMPF)));
          } else {
            setpMPF(1);
          }
        }

        // SET FIRST pM VOLUME 0
        if (QMYVerify) {
          if (chartLineY.length === 0) {
            const numConcBPE =
              parseFloat(volumenMetal) * parseFloat(concentracionMetal);
            const denConcBPE = parseFloat(totalVolume) * parseFloat(FLM);
            const concentrationMetalBPE =
              parseFloat(numConcBPE) / parseFloat(denConcBPE);
            const pMetalBPE = Math.log10(1 / concentrationMetalBPE);

            setFreeMetalConcentration([concentrationMetalBPE]);
            setChartLineY([pMetalBPE]);
          }
        }
        return true;
      } else {
        setMessageAlert(
          "El valor de pH no se encuentra dentro del rango establecido por el buffer"
        );
        setTitleModal("El pH es incorrecto");
        handleShowModal();
      }
    }
  };

  const addVolumeButton = () => {
    if (parseFloat(isFinite(Math.log10(QMY)))) {
      setMessageAlert("La constante condicional no cumple o es inválida");
      setTitleModal("Error");
      setDisabled(false);
      handleShowModal();
    } else {
      if (parseFloat(Math.log10(QMY)) > 8.0) {
        const addVolumeInput = parseFloat(volumeToAdd);

        // ADD VOLUME INPUT VERIFICATION
        if (!isNaN(addVolumeInput)) {
          if (addVolumeInput > 0) {
            const newTotalVolume = totalVolume + addVolumeInput;
            const lastTotalVolume = chartLineX[chartLineX.length - 1];
            const volumeEDTAAdded =
              parseFloat(lastTotalVolume) + addVolumeInput;

            setTotalVolume(newTotalVolume);
            setChartLineX([...chartLineX, volumeEDTAAdded]);
          } else {
            setMessageAlert("Por favor ingresa un número mayor a cero");
            setTitleModal("Error");
            handleShowModal();
          }
        } else {
          alert("Por favor, ingresa un número válido.");
        }
        setEnabledSaveData(true);
      } else {
        setMessageAlert(
          `No se puede hacer la valoración, la constante condicional debe ser igual o mayor a 10^8, la constante condicional para este problema es de 10^${Math.log10(
            QMY
          ).toFixed(2)}`
        );
        setTitleModal("Advertencia");
        handleShowModal();
        setDisabled(false);
      }
    }
  };

  return (
    <>
      <SpeciesBox>
        <Specie className="firstSpecie">
          <TextSpecieBox className="firstSpecie">Metal</TextSpecieBox>
          <SelectList
            className="firstSpecie"
            disabled={disabled}
            value={metalSelect}
            onChange={handleElementChange}
            id="metalSelect"
          >
            <OptionList value="" className="firstSpecie">
              Seleccione un metal...
            </OptionList>
            {metalList}
          </SelectList>
          {metalSelect && (
            <InputBox>
              <div className="form-floating m-auto">
                <input
                  type="number"
                  className="form-control midInput"
                  id="concentracionMetal"
                  placeholder="Conc. del metal"
                  disabled={disabled}
                  style={{
                    backgroundColor: "transparent",
                    border: "2px solid #ffffff",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                />
                <label
                  htmlFor="floatingInput"
                  style={{
                    color: "#2a363b",
                    fontSize: "1rem",
                    fontWeight: "600",
                  }}
                >
                  Conc. del metal
                </label>
              </div>
              <div className="form-floating m-auto">
                <input
                  type="number"
                  className="form-control midInput"
                  id="volumenMetal"
                  placeholder="V. sln de metal (mL)"
                  disabled={disabled}
                  style={{
                    backgroundColor: "transparent",
                    border: "2px solid #ffffff",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                />
                <label
                  htmlFor="floatingInput"
                  style={{
                    color: "#2a363b",
                    fontSize: "1rem",
                    fontWeight: "600",
                  }}
                >
                  V. sln de metal (mL)
                </label>
              </div>
            </InputBox>
          )}
        </Specie>
        <SpecieMiddle className="secondSpecie">
          <Specie className="midHeight secondSpecie">
            {metalSelect && (
              <>
                <TextSpecieBox className="midHeight secondSpace">
                  EDTA
                </TextSpecieBox>
                <InputBox>
                  <div className="form-floating" style={{ width: "95%" }}>
                    <input
                      type="number"
                      className="form-control"
                      id="concentracionQuelon"
                      placeholder="Conc. Valorante"
                      disabled={disabled}
                      style={{
                        backgroundColor: "transparent",
                        border: "2px solid #ffffff",
                        fontWeight: "600",
                        fontSize: "1rem",
                      }}
                    />
                    <label
                      htmlFor="floatingInput"
                      style={{
                        color: "#2a363b",
                        fontSize: "1rem",
                        fontWeight: "600",
                      }}
                    >
                      Conc. Valorante
                    </label>
                  </div>
                </InputBox>
              </>
            )}
          </Specie>
          <Specie className="midHeight secondSpecie">
            {metalSelect && (
              <>
                <TextSpecieBox className="midHeight seconSpecie">
                  Agua
                </TextSpecieBox>
                <InputBox>
                  <div className="form-floating" style={{ width: "95%" }}>
                    <input
                      type="number"
                      className="form-control"
                      id="volumenAgua"
                      placeholder="Vol. agua (mL)"
                      disabled={disabled}
                      style={{
                        backgroundColor: "transparent",
                        border: "2px solid #ffffff",
                        fontWeight: "600",
                        fontSize: "1rem",
                      }}
                    />
                    <label
                      htmlFor="floatingInput"
                      style={{
                        color: "#2a363b",
                        fontSize: "1rem",
                        fontWeight: "600",
                      }}
                    >
                      Vol. agua (mL)
                    </label>
                  </div>
                </InputBox>
              </>
            )}
          </Specie>
        </SpecieMiddle>
        <Specie className="thirdSpecie">
          {metalSelect && (
            <>
              <TextSpecieBox className="thirdSpecie">Indicador</TextSpecieBox>
              <SelectList
                value={indicadorSelect}
                onChange={handleIndicadorChange}
                disabled={disabled}
                id="indicadorSelect"
                className="thirdSpecie"
              >
                <OptionList value="" className="thirdSpecie">
                  Seleccione uno...
                </OptionList>
                {indicadorList}
              </SelectList>
            </>
          )}
        </Specie>
        <Specie className="forthSpecie">
          {indicadorSelect && (
            <>
              <TextSpecieBox className="forthSpecie">Buffer</TextSpecieBox>
              <SelectList
                onChange={handlebufferChange}
                value={bufferSelect}
                disabled={disabled}
                id="bufferSelect"
                className="forthSpecie"
              >
                <OptionList value="" className="forthSpecie">
                  Seleccione uno...
                </OptionList>
                {bufferList}
              </SelectList>
              {bufferSelect && (
                <InputBox>
                  <div className="form-floating m-auto">
                    <input
                      type="number"
                      className="form-control midInput"
                      id="concentracionBuffer"
                      placeholder="Conc. buffer"
                      disabled={disabled}
                      style={{
                        backgroundColor: "transparent",
                        border: "2px solid #ffffff",
                        fontWeight: "600",
                        fontSize: "1rem",
                      }}
                    />
                    <label
                      htmlFor="floatingInput"
                      style={{
                        color: "#2a363b",
                        fontSize: "1rem",
                        fontWeight: "600",
                      }}
                    >
                      Conc. buffer
                    </label>
                  </div>
                  <div className="form-floating m-auto">
                    <input
                      type="number"
                      className="form-control midInput"
                      id="volumenBuffer"
                      placeholder="Vol. buffer (mL)"
                      disabled={disabled}
                      style={{
                        backgroundColor: "transparent",
                        border: "2px solid #ffffff",
                        fontWeight: "600",
                        fontSize: "1rem",
                      }}
                    />
                    <label
                      htmlFor="floatingInput"
                      style={{
                        color: "#2a363b",
                        fontSize: "1rem",
                        fontWeight: "600",
                      }}
                    >
                      Vol. buffer (mL)
                    </label>
                  </div>
                  <div className="form-floating m-auto">
                    <input
                      type="number"
                      className="form-control midInput"
                      id="pHBuffer"
                      placeholder="pH"
                      disabled={disabled}
                      max={dataBuffer.maxpH}
                      min={dataBuffer.minpH}
                      step="0.1"
                      style={{
                        backgroundColor: "transparent",
                        border: "2px solid #ffffff",
                        fontWeight: "600",
                        fontSize: "1rem",
                      }}
                    />
                    <label
                      htmlFor="floatingInput"
                      style={{
                        color: "#2a363b",
                        fontSize: "1rem",
                        fontWeight: "600",
                      }}
                    >
                      pH
                    </label>
                  </div>
                </InputBox>
              )}{" "}
            </>
          )}
        </Specie>
      </SpeciesBox>
      <SpeciesDataBox>
        <SpecieData className="firstSpecie">
          <TextSpecieDataBox>Datos del metal</TextSpecieDataBox>
          {metalSelect && (
            <>
              <LabelSpecieBox>
                <LabelSpecie>Nombre: </LabelSpecie>
                <LabelSpecieData>{dataMetal.name}</LabelSpecieData>
              </LabelSpecieBox>
              <LabelSpecieBox>
                <LabelSpecie>Simbolo Químico: </LabelSpecie>
                <LabelSpecieData>
                  {dataMetal.abreviation}
                  <sup>{`${dataMetal.oxidationState}+`}</sup>
                </LabelSpecieData>
              </LabelSpecieBox>
              <LabelSpecieBox>
                <LabelSpecie>β EDTA: </LabelSpecie>
                <LabelSpecieData>{quelonConstant}</LabelSpecieData>
              </LabelSpecieBox>
              {dataMetal.constantMHY && (
                <LabelSpecieBox>
                  <LabelSpecie>
                    K<sub>MHY</sub>:{" "}
                  </LabelSpecie>
                  <LabelSpecieData>
                    {parseFloat(dataMetal.constantMHY).toFixed(2)}
                  </LabelSpecieData>
                </LabelSpecieBox>
              )}
              {dataMetal.constantMOHY && (
                <LabelSpecieBox>
                  <LabelSpecie>
                    K<sub>MOHY</sub>:{" "}
                  </LabelSpecie>
                  <LabelSpecieData>
                    {parseFloat(dataMetal.constantMOHY).toFixed(2)}
                  </LabelSpecieData>
                </LabelSpecieBox>
              )}
            </>
          )}
        </SpecieData>
        <SpecieData className="secondSpecie">
          <TextSpecieDataBox>Datos del quelón</TextSpecieDataBox>
          {metalSelect && (
            <>
              <LabelSpecieBox>
                <LabelSpecie>Nombre: </LabelSpecie>
                <LabelSpecieData>{EDTAData.name}</LabelSpecieData>
              </LabelSpecieBox>
              <LabelSpecieBox>
                <LabelSpecie>Abreviación: </LabelSpecie>
                <LabelSpecieData>{EDTAData.abreviation}</LabelSpecieData>
              </LabelSpecieBox>
              <ConstantDataBox>
                <LabelSpecieBox>
                  <LabelSpecie>
                    pQ<sub>a1</sub>:
                  </LabelSpecie>
                  <LabelSpecieData>{EDTAData.pQa1}</LabelSpecieData>
                </LabelSpecieBox>
                <LabelSpecieBox>
                  <LabelSpecie>
                    pQ<sub>a2</sub>:
                  </LabelSpecie>
                  <LabelSpecieData>{EDTAData.pQa2}</LabelSpecieData>
                </LabelSpecieBox>
              </ConstantDataBox>
              <ConstantDataBox>
                <LabelSpecieBox>
                  <LabelSpecie>
                    pQ<sub>a3</sub>:
                  </LabelSpecie>
                  <LabelSpecieData>{EDTAData.pQa3}</LabelSpecieData>
                </LabelSpecieBox>
                <LabelSpecieBox>
                  <LabelSpecie>
                    pQ<sub>a4</sub>:
                  </LabelSpecie>
                  <LabelSpecieData>{EDTAData.pQa4}</LabelSpecieData>
                </LabelSpecieBox>
              </ConstantDataBox>
            </>
          )}
        </SpecieData>
        <SpecieData className="thirdSpecie">
          <TextSpecieDataBox>Datos del indicador</TextSpecieDataBox>
          {indicadorSelect && (
            <>
              <LabelSpecieBox>
                <LabelSpecie>Nombre: </LabelSpecie>
                <LabelSpecieData>{dataIndicador.name}</LabelSpecieData>
              </LabelSpecieBox>
              <IndicadorDataBox>
                <ConstantDataBox>
                  {indicadorpKs &&
                    Object.keys(indicadorpKs).map((key) => (
                      <LabelSpecieBox key={key}>
                        <LabelSpecie>{key}:</LabelSpecie>
                        <LabelSpecieData>
                          {parseFloat(indicadorpKs[key]).toFixed(1)}
                        </LabelSpecieData>
                      </LabelSpecieBox>
                    ))}
                </ConstantDataBox>
                <ConstantDataBox>
                  {indicadorColors &&
                    Object.keys(indicadorColors).map((key) => (
                      <LabelSpecieBox key={key}>
                        <LabelSpecie>{indicadorColors[key]}:</LabelSpecie>
                        <LabelSpecieData>{key}</LabelSpecieData>
                      </LabelSpecieBox>
                    ))}
                </ConstantDataBox>
              </IndicadorDataBox>
              <BufferLogaritmicBox>
                {indicadorComplexConstants &&
                  Object.keys(indicadorComplexConstants).map((key) => (
                    <LabelSpecieBox key={key}>
                      <LabelSpecie>{key}:</LabelSpecie>
                      <LabelSpecieData>
                        {indicadorComplexConstants[key]}
                      </LabelSpecieData>
                    </LabelSpecieBox>
                  ))}
              </BufferLogaritmicBox>
            </>
          )}
        </SpecieData>
        <SpecieData className="forthSpecie">
          <TextSpecieDataBox>Datos del Buffer</TextSpecieDataBox>
          {bufferSelect && (
            <>
              <LabelSpecieBox>
                <LabelSpecie>Nombre: </LabelSpecie>
                <LabelSpecieData>{dataBuffer.name}</LabelSpecieData>
              </LabelSpecieBox>
              <LabelSpecieBox>
                <LabelSpecie>Rango de pH: </LabelSpecie>
                <LabelSpecieData>
                  {dataBuffer.minpH + " - " + dataBuffer.maxpH}
                </LabelSpecieData>
              </LabelSpecieBox>
              <LabelSpecieBox>
                <LabelSpecie>Ácido: </LabelSpecie>
                <LabelSpecieData>{dataBuffer.acid}</LabelSpecieData>
              </LabelSpecieBox>
              <LabelSpecieBox>
                <LabelSpecie>Base conjugado: </LabelSpecie>
                <LabelSpecieData>{dataBuffer.conjugedBase}</LabelSpecieData>
              </LabelSpecieBox>
              <BufferLogaritmicBox>
                {bufferComplexConstants &&
                  Object.keys(bufferComplexConstants).map((key) => (
                    <LabelSpecieBox key={key}>
                      <LabelSpecie>{key}:</LabelSpecie>
                      <LabelSpecieData>
                        {bufferComplexConstants[key]}
                      </LabelSpecieData>
                    </LabelSpecieBox>
                  ))}
              </BufferLogaritmicBox>
            </>
          )}
        </SpecieData>
      </SpeciesDataBox>
      <ChartBox>
        <DataChartBox>
          <DataGraphicBox>
            <LabelSpecieBox>
              <LabelSpecie>Volumen total: </LabelSpecie>
              <LabelSpecieData>
                {totalVolume.toFixed(2) + " mL"}
              </LabelSpecieData>
            </LabelSpecieBox>
            <LabelSpecieBox>
              <LabelSpecie>pH solución:</LabelSpecie>
              <LabelSpecieData>{pH}</LabelSpecieData>
            </LabelSpecieBox>
            <LabelSpecieBox>
              <LabelSpecie>Vol. punto de equivalencia:</LabelSpecie>
              <LabelSpecieData>
                {volumeEquivalence.toFixed(2) + " mL"}
              </LabelSpecieData>
            </LabelSpecieBox>
            <LabelSpecieBox>
              <LabelSpecie>
                F<sub>HY</sub>:
              </LabelSpecie>
              <LabelSpecieData>
                {`10`}
                <sup>{Math.log10(FHY).toFixed(2)}</sup>
              </LabelSpecieData>
            </LabelSpecieBox>
            <LabelSpecieBox>
              <LabelSpecie>
                F<sub>MHY</sub>:
              </LabelSpecie>
              <LabelSpecieData>
                10<sup>{Math.log10(FMHY).toFixed(2)}</sup>
              </LabelSpecieData>
            </LabelSpecieBox>
            <LabelSpecieBox>
              <LabelSpecie>
                F<sub>HInd</sub>:
              </LabelSpecie>
              <LabelSpecieData>
                {parseFloat(FHInd).toExponential(4)}
              </LabelSpecieData>
            </LabelSpecieBox>
            {bufferComplexConstants && (
              <>
                <LabelSpecieBox>
                  <LabelSpecie>[Ligando]:</LabelSpecie>
                  <LabelSpecieData>
                    {correctConcentrationBuffer.toFixed(3)}
                  </LabelSpecieData>
                </LabelSpecieBox>
                <LabelSpecieBox>
                  <LabelSpecie>
                    F<sub>LM</sub>:
                  </LabelSpecie>
                  <LabelSpecieData>
                    {`10`}
                    <sup>{Math.log10(FLM).toFixed(2)}</sup>
                  </LabelSpecieData>
                </LabelSpecieBox>
              </>
            )}
            <LabelSpecieBox>
              <LabelSpecie>
                Q'<sub>MY</sub>:
              </LabelSpecie>
              <LabelSpecieData>
                {`10`}
                <sup>{Math.log10(QMY).toFixed(2)}</sup>
              </LabelSpecieData>
            </LabelSpecieBox>
            {QMYVerify && (
              <>
                <LabelSpecieBox>
                  <LabelSpecie>
                    {`[${dataMetal.abreviation}`}
                    <sup>{dataMetal.oxidationState + "+"}</sup>]<sub>P.E</sub>:
                  </LabelSpecie>
                  <LabelSpecieData>
                    {concentracionMPE.toExponential(2)}
                  </LabelSpecieData>
                </LabelSpecieBox>
                <LabelSpecieBox>
                  <LabelSpecie>
                    {`p ${dataMetal.abreviation}`}
                    <sup>{dataMetal.oxidationState + "+"}</sup>
                    <sub>P.E.</sub>:
                  </LabelSpecie>
                  <LabelSpecieData>{pMPE.toFixed(2)}</LabelSpecieData>
                </LabelSpecieBox>
                {indicadorComplexConstants && (
                  <>
                    <LabelSpecieBox>
                      <LabelSpecie>
                        {`[${dataMetal.abreviation}`}
                        <sup>{dataMetal.oxidationState + "+"}</sup>]
                        <sub>P.F</sub>:
                      </LabelSpecie>
                      <LabelSpecieData>
                        {concentracionMPF.toExponential(2)}
                      </LabelSpecieData>
                    </LabelSpecieBox>
                    <LabelSpecieBox>
                      <LabelSpecie>
                        {`p ${dataMetal.abreviation}`}
                        <sup>{dataMetal.oxidationState + "+"}</sup>
                        <sub>P.F.</sub>:
                      </LabelSpecie>
                      <LabelSpecieData>{pMPF.toFixed(2)}</LabelSpecieData>
                    </LabelSpecieBox>
                  </>
                )}
              </>
            )}
          </DataGraphicBox>
          <ChartLineBox>
            <Line data={dataChartLine} options={optionsChartLine} />
          </ChartLineBox>
        </DataChartBox>
        <ControlAddVolumeBox>
          {bufferSelect && (
            <AddVolume>
              <ButtonsBox>
                <Button onClick={getData} disabled={enabledSaveData}>
                  Guardar datos
                </Button>
                <Button onClick={cleanData}>Reiniciar datos</Button>
                <Button onClick={cleanGraphic}>Reiniciar gráfico</Button>
              </ButtonsBox>
              <VolumeBox>
                <div className="form-floating h-100 w-100">
                  <input
                    type="number"
                    className="form-control h-100"
                    step="0.01"
                    id="addVolumeInput"
                    value={volumeToAdd}
                    min="0"
                    onChange={(e) => setVolumeToAdd(parseFloat(e.target.value))}
                    placeholder="Vol. a agregar de valorante (mL)"
                    style={{
                      backgroundColor: "#ffffff",
                      border: "none",
                      outline: "none",
                      fontWeight: "600",
                      fontSize: "1.5rem",
                      borderRadius: "20px",
                    }}
                  />
                  <label
                    htmlFor="floatingInput"
                    style={{
                      color: "#2a363b",
                      fontSize: "1.3rem",
                      fontWeight: "600",
                    }}
                  >
                    Volumen a agregar de valorante (mL)
                  </label>
                </div>
                {pH && (
                  <AddVolumeButton onClick={addVolumeButton}>
                    Adicionar
                  </AddVolumeButton>
                )}
              </VolumeBox>
            </AddVolume>
          )}
          <DataFormulesBox>
            <ol>
              <TextSpecieBox className="formules">
                <li style={{ fontWeight: "800" }}>EQUILIBRIOS PRESENTES</li>
              </TextSpecieBox>
              <ImagesFormulesBox>
                <ImagesDataFormulesBox>
                  <ImagesDataFormules
                    src={require("../../files/BALANCES1.png")}
                    alt="Equlibrio 1"
                  ></ImagesDataFormules>
                  <DescriptionText className="descriptionText">
                    Imagen 2 - Equilibrios presentes 1 (Elaboración propia)
                  </DescriptionText>
                </ImagesDataFormulesBox>
                <ImagesDataFormulesBox>
                  <ImagesDataFormules
                    src={require("../../files/BALANCES2.png")}
                    alt="Equilibrio 2"
                  ></ImagesDataFormules>
                  <DescriptionText className="descriptionText">
                    Imagen 3 - Equilibrios presentes 2 (Elaboración propia)
                  </DescriptionText>
                </ImagesDataFormulesBox>
              </ImagesFormulesBox>
              <TextSpecieBox className="formules">
                <li style={{ fontWeight: "800" }}>BALANCES DEL SISTEMA</li>
              </TextSpecieBox>
              <ul>
                <TextSpecieBox className="formulesSub">
                  <li style={{ fontWeight: "600" }}>
                    Balance de electroneutralidad
                  </li>
                </TextSpecieBox>
                <ImagesFormulesBox>
                  <ImagesDataFormulesBox>
                    <ImagesDataFormules
                      src={require("../../files/BALANCE ELECTRONEUTRALIDAD.png")}
                      alt="Balance electroneutralidad"
                    ></ImagesDataFormules>
                    <DescriptionText className="descriptionText">
                      Imagen 4 - Balance de electroneutralidad (Elaboración
                      propia)
                    </DescriptionText>
                  </ImagesDataFormulesBox>
                </ImagesFormulesBox>
                <TextSpecieBox className="formulesSub">
                  <li style={{ fontWeight: "600" }}>Balance del quelón</li>
                </TextSpecieBox>
                <ImagesFormulesBox>
                  <ImagesDataFormulesBox>
                    <ImagesDataFormules
                      src={require("../../files/BALANCE QUELON.png")}
                      alt="Balance quelon"
                    ></ImagesDataFormules>
                    <DescriptionText className="descriptionText">
                      Imagen 5 - Balance del quelón (Elaboración propia)
                    </DescriptionText>
                  </ImagesDataFormulesBox>
                </ImagesFormulesBox>
                <TextSpecieBox className="formulesSub">
                  <li style={{ fontWeight: "600" }}>Balance del metal</li>
                </TextSpecieBox>
                <ImagesFormulesBox>
                  <ImagesDataFormulesBox>
                    <ImagesDataFormules
                      src={require("../../files/BALANCE METAL.png")}
                      alt="Balance metal"
                    ></ImagesDataFormules>
                    <DescriptionText className="descriptionText">
                      Imagen 6 - Balance del metal (Elaboración propia)
                    </DescriptionText>
                  </ImagesDataFormulesBox>
                </ImagesFormulesBox>
                <TextSpecieBox className="formulesSub">
                  <li style={{ fontWeight: "600" }}>Balance del ligando</li>
                </TextSpecieBox>
                <ImagesFormulesBox>
                  <ImagesDataFormulesBox>
                    <ImagesDataFormules
                      src={require("../../files/BALANCE LIGANDO.png")}
                      alt="Balance ligando"
                    ></ImagesDataFormules>
                    <DescriptionText className="descriptionText">
                      Imagen 5 - Balance del ligando auxiliar (Elaboración
                      propia)
                    </DescriptionText>
                  </ImagesDataFormulesBox>
                </ImagesFormulesBox>
              </ul>
              <TextSpecieBox className="formules">
                <li style={{ fontWeight: "800" }}>CONSTNTE CONDICIONAL</li>
              </TextSpecieBox>
              <ImagesFormulesBox>
                <ImagesDataFormulesBox>
                  <ImagesDataFormules
                    src={require("../../files/CONSTANTE CONDICIONAL.png")}
                    alt="Constante condicional"
                  ></ImagesDataFormules>
                  <DescriptionText className="descriptionText">
                    Imagen 8 - Ecuación constante condicional (Elaboración
                    propia)
                  </DescriptionText>
                </ImagesDataFormulesBox>
              </ImagesFormulesBox>
              <TextSpecieBox className="formules">
                <li style={{ fontWeight: "800" }}>
                  CÁLCULO DE CONCENTRACIÓN DEL METAL LIBRE
                </li>
              </TextSpecieBox>
              <ul>
                <TextSpecieBox className="formulesSub">
                  <li style={{ fontWeight: "600" }}>
                    Antes del punto de equivalencia
                  </li>
                </TextSpecieBox>
                <ImagesFormulesBox>
                  <ImagesDataFormulesBox>
                    <ImagesDataFormules
                      src={require("../../files/METAL LIBRE APE.png")}
                      alt="Metal libre antes del punto de equivalencia"
                    ></ImagesDataFormules>
                    <DescriptionText className="descriptionText">
                      Imagen 9 - Ecuación concentración metal libre antes del
                      punto de equivalencia (Elaboración propia)
                    </DescriptionText>
                  </ImagesDataFormulesBox>
                </ImagesFormulesBox>
                <TextSpecieBox className="formulesSub">
                  <li style={{ fontWeight: "600" }}>
                    En el punto de equivalencia
                  </li>
                </TextSpecieBox>
                <ImagesFormulesBox>
                  <ImagesDataFormulesBox>
                    <ImagesDataFormules
                      src={require("../../files/METAL LIBRE EPE.png")}
                      alt="Metal libre en el punto de equivalencia"
                    ></ImagesDataFormules>
                    <DescriptionText className="descriptionText">
                      Imagen 10 - Ecuación concentración metal libre en el punto
                      de equivalencia (Elaboración propia)
                    </DescriptionText>
                  </ImagesDataFormulesBox>
                </ImagesFormulesBox>
                <TextSpecieBox className="formulesSub">
                  <li style={{ fontWeight: "600" }}>
                    Después del punto de equivalencia
                  </li>
                </TextSpecieBox>
                <ImagesFormulesBox>
                  <ImagesDataFormulesBox>
                    <ImagesDataFormules
                      src={require("../../files/METAL LIBRE DPE.png")}
                      alt="Metal libre después del punto de equivalencia"
                    ></ImagesDataFormules>
                    <DescriptionText className="descriptionText">
                      Imagen 11 - Ecuación concentración metal libre después del
                      punto de equivalencia (Elaboración propia)
                    </DescriptionText>
                  </ImagesDataFormulesBox>
                </ImagesFormulesBox>
              </ul>
              <TextSpecieBox className="formules">
                <li style={{ fontWeight: "800" }}>
                  CÁLCULO DE POTENCIAL DEL METAL LIBRE
                </li>
              </TextSpecieBox>
              <ImagesFormulesBox>
                <ImagesDataFormulesBox>
                  <ImagesDataFormules
                    src={require("../../files/POTENCIAL METAL LIBRE.png")}
                    alt="Potencial del metal libre"
                  ></ImagesDataFormules>
                  <DescriptionText className="descriptionText">
                    Imagen 12 - Ecuación pontencial metal libre (Elaboración
                    propia)
                  </DescriptionText>
                </ImagesDataFormulesBox>
              </ImagesFormulesBox>
            </ol>
          </DataFormulesBox>
        </ControlAddVolumeBox>
      </ChartBox>
      <TableBox>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>Volumen EDTA (mL)</TableHeader>
              <TableHeader>pH</TableHeader>
              <TableHeader>
                F<sub>HY</sub>
              </TableHeader>
              <TableHeader>
                F<sub>MYL</sub>
              </TableHeader>
              <TableHeader>
                Q'<sub>MY</sub>
              </TableHeader>
              {bufferComplexConstants && (
                <TableHeader>
                  F<sub>LM</sub>
                </TableHeader>
              )}
              {indicadorComplexConstants && (
                <TableHeader>
                  F<sub>HInd</sub>
                </TableHeader>
              )}
              {freeMetalConcentration.length > 0 && (
                <TableHeader>
                  {`[${dataMetal.abreviation}`}
                  <sup>{dataMetal.oxidationState + "+"}</sup>]<sub>L</sub>
                </TableHeader>
              )}
              {chartLineY.length > 0 && (
                <TableHeader>
                  {`p ${dataMetal.abreviation}`}
                  <sup>{dataMetal.oxidationState + "+"}</sup>
                </TableHeader>
              )}
            </TableRow>
          </thead>
          <tbody>
            {chartLineX.map((volume, key) => {
              return (
                <TableRow>
                  <TableCell>{volume.toFixed(2)}</TableCell>
                  <TableCell>{parseFloat(pH).toFixed(2)}</TableCell>
                  <TableCell>{parseFloat(FHY).toFixed(2)}</TableCell>
                  <TableCell>{parseFloat(FMHY).toFixed(2)}</TableCell>
                  {bufferComplexConstants && (
                    <TableCell>{parseFloat(FLM).toExponential(2)}</TableCell>
                  )}
                  {indicadorComplexConstants && (
                    <TableCell>{parseFloat(FHInd).toExponential(2)}</TableCell>
                  )}
                  <TableCell>{parseFloat(QMY).toExponential(2)}</TableCell>
                  {freeMetalConcentration.length > 0 && (
                    <TableCell>
                      {parseFloat(freeMetalConcentration[key]).toExponential(5)}
                    </TableCell>
                  )}
                  {chartLineY.length > 0 && (
                    <TableCell>
                      {parseFloat(chartLineY[key]).toFixed(4)}
                    </TableCell>
                  )}
                </TableRow>
              );
            })}
          </tbody>
        </Table>
      </TableBox>
      <Modal show={showModal} onHide={handleHideModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{titleModal}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{messageAlert}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleHideModal}>
            Entendido
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SimulatorOne;
