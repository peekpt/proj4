
const drawerWidth = 260;

const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
};

const warningBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(255,152,0,0.28), 0 4px 20px 0px rgba(0,0,0,0.12), 0 7px 8px -5px rgba(255, 152,0,0.2)"
};
const successBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(76,175,80,0.28), 0 4px 20px 0px rgba(0,0,0,0.12), 0 7px 8px -5px rgba(76, 175,80,0.2)"
};
const infoBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(0,188,212,0.28), 0 4px 20px 0px rgba(0,0,0,0.12), 0 7px 8px -5px rgba(0, 188,212,0.2)"
};
const primaryBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(156,39,176,0.28), 0 4px 20px 0px rgba(0,0,0,0.12), 0 7px 8px -5px rgba(156, 39,176,0.2)"
};
const dangerBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(244,67,54,0.28), 0 4px 20px 0px rgba(0,0,0,0.12), 0 7px 8px -5px rgba(244, 67,54,0.2)"
};
const warningCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg,#ff0726,#fb8c00)",
  ...warningBoxShadow
};
const successCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg,#66bb6a,#43a047)",
  ...successBoxShadow
};
const infoCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg,#26c6da,#00acc1)",
  ...infoBoxShadow
};
const primaryCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg,#ab47bc, #8e24aa)",
  ...primaryBoxShadow
};
const dangerCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg,#ef5350, #e53935)",
  ...dangerBoxShadow
};
const containerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%",
};
const container = {
  ...containerFluid,
  "@media (min-width: 576px)": {
    maxWidth: "540px",
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px",
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px",
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px",
  },
};
const primaryColor = "#3827ff";
const warningColor = "#ff9800";
const dangerColor = "#f44336";
const successColor = "#4caf50";
const infoColor = "#00acc1";
const roseColor = "#e91e63";
const grayColor = "#999999";
const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em",
};

const boxShadow = "";
export {
  warningBoxShadow,
  warningCardHeader,
  successCardHeader,
  successBoxShadow,
  infoBoxShadow,
  primaryBoxShadow,
  dangerBoxShadow,
  infoCardHeader,
  primaryCardHeader,
  dangerCardHeader,
  container,
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  roseColor,
  grayColor,
  infoColor,
  defaultFont,
  drawerWidth,
  transition, boxShadow

}