import React, { useRef, useState } from "react";
import styled from "styled-components";
const BodyComponent = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  min-height: 50vh;
  max-width: 860px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .setting_box {
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-bottom: 25px;
    li {
      display: flex;
      align-items: center;
      width: 100%;
      max-width: 500px;
      padding: 0 10px;
    }
    label {
      font-size: 12px;
      width: 50px;
    }
    input[type="range"] {
      height: 28px;
      -webkit-appearance: none;
      width: 70%;
    }
    input[type="range"]:focus {
      outline: none;
    }
    input[type="range"]::-webkit-slider-runnable-track {
      width: 100%;
      height: 8px;
      cursor: pointer;
      animate: 0.2s;
      box-shadow: 1px 1px 1px #111111;
      background: #111111;
      border-radius: 5px;
      border: 1px solid #111111;
    }
    input[type="range"]::-webkit-slider-thumb {
      box-shadow: 0px 0px 0px #000000;
      border: 2px solid #111111;
      height: 20px;
      width: 20px;
      border-radius: 10px;
      background: #ffffff;
      cursor: pointer;
      -webkit-appearance: none;
      margin-top: -7.5px;
    }
    input[type="range"]:focus::-webkit-slider-runnable-track {
      background: #111111;
    }
    input[type="range"]::-moz-range-track {
      width: 100%;
      height: 8px;
      cursor: pointer;
      animate: 0.2s;
      box-shadow: 1px 1px 1px #111111;
      background: #111111;
      border-radius: 5px;
      border: 1px solid #111111;
    }
    input[type="range"]::-moz-range-thumb {
      box-shadow: 0px 0px 0px #000000;
      border: 2px solid #111111;
      height: 20px;
      width: 20px;
      border-radius: 10px;
      background: #ffffff;
      cursor: pointer;
    }
    input[type="range"]::-ms-track {
      width: 100%;
      height: 8px;
      cursor: pointer;
      animate: 0.2s;
      background: transparent;
      border-color: transparent;
      color: transparent;
    }
    input[type="range"]::-ms-fill-lower {
      background: #111111;
      border: 1px solid #111111;
      border-radius: 10px;
      box-shadow: 1px 1px 1px #111111;
    }
    input[type="range"]::-ms-fill-upper {
      background: #111111;
      border: 1px solid #111111;
      border-radius: 10px;
      box-shadow: 1px 1px 1px #111111;
    }
    input[type="range"]::-ms-thumb {
      margin-top: 1px;
      box-shadow: 0px 0px 0px #000000;
      border: 2px solid #111111;
      height: 20px;
      width: 20px;
      border-radius: 10px;
      background: #ffffff;
      cursor: pointer;
    }
    input[type="range"]:focus::-ms-fill-lower {
      background: #111111;
    }
    input[type="range"]:focus::-ms-fill-upper {
      background: #111111;
    }
    .value {
      font-weight: 600;
      width: 70px;
      text-align: center;
      margin-right: 10px;
    }
  }
  .result_box {
    width: 100%;
    img {
      width: auto;
      max-width: 100%;
    }
  }
`;

export default function Body() {
  const [speed, setSpeed] = useState(2);
  const speedArr = ["1", "1/2", "1/4", "1/8", "1/15", "1/30", "1/60", "1/125"];
  const speedInput = useRef();
  const speedChange = (e) => {
    setSpeed(speedInput.current.value);
  };

  const [aperture, setAperture] = useState(2);
  const apertureArr = ["2.8", "4", "5.6", "8", "11"];
  const apertureInput = useRef();
  const apertureChange = (e) => {
    setAperture(apertureInput.current.value);
  };

  const [iso, setIso] = useState(2);
  const isoArr = ["100", "200", "400", "800", "1600", "3200"];
  const isoInput = useRef();
  const isoChange = (e) => {
    setIso(isoInput.current.value);
  };
  return (
    <BodyComponent>
      <ul className="setting_box">
        <li>
          <label>
            shutter
            <br />
            speed
          </label>
          <span className="value">{speedArr[speed]}s</span>
          <input
            onChange={speedChange}
            ref={speedInput}
            type="range"
            min="0"
            max="7"
            value={speed}
          ></input>
        </li>
        <li>
          <label>aperture</label>
          <span className="value">f{apertureArr[aperture]}</span>
          <input
            onChange={apertureChange}
            ref={apertureInput}
            type="range"
            min="0"
            max="4"
            value={aperture}
          ></input>
        </li>
        <li>
          <label>iso</label>
          <span className="value">{isoArr[iso]}</span>
          <input
            onChange={isoChange}
            ref={isoInput}
            type="range"
            min="0"
            max="5"
            value={iso}
          ></input>
        </li>
      </ul>
      <div className="result_box">
        <img src={`/images/simul_photos/s${speed}_a${aperture}_i${iso}.jpg`} />
      </div>
    </BodyComponent>
  );
}
