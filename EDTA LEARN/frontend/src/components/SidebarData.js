import React from "react";
import * as FaIcons from "react-icons/fa";
import * as FaIcons6 from "react-icons/fa6";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
  {
    title: "Introducción",
    path: "/main",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Quienes somos",
        path: "/main/introduction/us",
        icon: <FaIcons6.FaPeopleGroup />,
      },
      {
        title: "Objetivo del OVA",
        path: "/main/introduction/objectives",
        icon: <FaIcons.FaListOl />,
      },
      {
        title: "Conocimientos previos",
        path: "/main/introduction/knowledges",
        icon: <FaIcons.FaBookReader />,
      },
      {
        title: "Recursos",
        path: "/main/introduction/resources",
        icon: <FaIcons.FaDatabase />,
      },
    ],
  },
  {
    title: "Ejemplos",
    path: "/main/examples",
    icon: <FaIcons.FaEtsy />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Un catión",
        path: "/main/examples/cation",
        icon: <BsIcons.BsFill1CircleFill />,
      },
      {
        title: "Dos cationes",
        path: "/main/examples/cation2",
        icon: <BsIcons.BsFill2CircleFill />,
      },
    ],
  },
  {
    title: "Simulador",
    path: "/main/simulator/simulatorInstructions",
    icon: <FaIcons.FaChartArea />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Uso del simulador",
        path: "/main/simulator/simulatorInstructions",
        icon: <FaIcons.FaRegChartBar />,
      },
      {
        title: "Simulador",
        path: "/main/simulator/",
        icon: <FaIcons.FaChartArea />,
      },
    ],
  },
  {
    title: "Problemas",
    path: "/main/exercises",
    icon: <FaIcons.FaTasks />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Un catión",
        path: "/main/exercises/cation",
        icon: <BsIcons.BsFill1CircleFill />,
      },
      {
        title: "Dos cationes",
        path: "/main/exercises/cation2",
        icon: <BsIcons.BsFill2CircleFill />,
      },
    ],
  },
  {
    title: "Glosario",
    path: "/main/glosary",
    icon: <FaIcons.FaBookOpen />,
  },
  {
    title: "Referencias",
    path: "/main/references",
    icon: <FaIcons.FaSwatchbook />,
  },
];
