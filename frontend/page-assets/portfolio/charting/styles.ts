import styled from "styled-components";
import { cssColors, cssVariables } from "src/styles/css";
import { MIN_CHART_WIDTH } from "components/LineChart/constants";

export const Root = styled.div`
`;

export const HorizontalContainer = styled.div<{ marginTop?: number }>`
  position: relative;
  min-width: ${MIN_CHART_WIDTH}px;;
  margin-top: ${({ marginTop }) => marginTop || "0"}px;
  display: flex;
  align-items: center;
`;

export const IconContainer = styled.div`
  margin-right: ${cssVariables.uiUnitDouble};
`;

export const Title = styled.div`
  color: ${cssColors.colorTitle1};
  line-height: 32px;
  font-size: ${cssVariables.xxLargeFontSize};
  font-family: ${cssVariables.titleFontFamily};
  font-weight: ${cssVariables.mediumFontWeight};
`;

export const CompanyNameText = styled.div`
  font-size: ${cssVariables.xxLargeFontSize};
  font-weight: ${cssVariables.mediumFontWeight};
  line-height: 32px;
  color: ${cssColors.colorBlack};
  font-family: ${cssVariables.titleFontFamily};
  margin-right: ${cssVariables.uiUnitDouble};
`;

export const ChangeStockButtonContainer = styled.button`
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  border-radius: 50%;
  
  &:hover {
    & > svg > circle {
      fill: ${cssColors.colorBlack};
      fill-opacity: 1;
    }
  }
  
  &:focus {
    outline: none;
  }
`;

export const Ticker = styled.div`
  font-size: ${cssVariables.largeFontSize};
  font-weight: ${cssVariables.mediumFontWeight};
  line-height: 24px;
  color: ${cssColors.colorGray4};
  font-family: ${cssVariables.titleFontFamily};
  margin-right: ${cssVariables.uiUnit};
`;

export const DateStr = styled.div`
  font-size: ${cssVariables.smallFontSize};
  line-height: 20px;
  color: ${cssColors.colorGray5};
  font-family: ${cssVariables.titleFontFamily};
`;

export const CurrentPriceText = styled.div`
  font-size: ${cssVariables.pentaLargeFontSize};
  font-weight: ${cssVariables.mediumFontWeight};
  line-height: 56px;
  color: ${cssColors.colorGray4};
  font-family: ${cssVariables.titleFontFamily};
  margin-right: ${cssVariables.uiUnitDouble};
`;

export const PriceChange = styled.div<{ isNegative: boolean }>`
  font-size: ${cssVariables.xxLargeFontSize};
  font-weight: ${cssVariables.mediumFontWeight};
  line-height: 32px;
  color: ${({ isNegative }) => isNegative ? cssColors.colorBloodRed : cssColors.colorSoftGreen};
  font-family: ${cssVariables.titleFontFamily};
  margin-right: ${cssVariables.uiUnit};
`;

export const DateRangeSelectorContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const TickerCompared = styled.div`
  font-size: ${cssVariables.pentaLargeFontSize};
  font-weight: ${cssVariables.mediumFontWeight};
  line-height: 64px;
  font-family: ${cssVariables.titleFontFamily};
  margin-right: ${cssVariables.uiUnitDouble};
`;

export const ConnectorIconContainer = styled.div`
  margin-right: ${cssVariables.uiUnitDouble};
`;
