import styled from "styled-components";
import { cssVariables } from "src/styles/css";

export const Title = styled.div`
  font-family: ${cssVariables.titleFontFamily};
  font-size: ${cssVariables.xxLargeFontSize};
  line-height: 32px;
  font-weight: ${cssVariables.heavyFontWeight};
  margin-top: 64px;
`;

export const Description = styled.div`
  font-family: ${cssVariables.contentFontFamily};
  font-size: ${cssVariables.largeFontSize};
  line-height: ${cssVariables.paragraphFontSize};
  margin-top: ${cssVariables.uiUnitDouble};
`;

// The following defines a responsive iframe with 16:9 aspect ratio
export const DemoIFrameContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: 64px;
  width: 100%;
  padding-top: 56.25%; // 16:9 Aspect Ratio (divide 9 by 16 = 0.5625)
  border: 1px solid black;
`;

export const DemoIFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
