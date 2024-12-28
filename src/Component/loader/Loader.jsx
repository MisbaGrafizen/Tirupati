import React from 'react'

export default function Loader() {
  return (
    <div className="flex justify-center items-center z-[5000] h-screen bg-[#fff]">
      <div id="wifi-loader" className="relative w-[130px] h-[130px]">
        <svg className="circle-outer absolute" viewBox="0 0 86 86">
          <circle className="back" cx="43" cy="43" r="40"></circle>
          <circle className="front" cx="43" cy="43" r="40"></circle>
          <circle className="new" cx="43" cy="43" r="40"></circle>
        </svg>
        <svg className="circle-middle absolute" viewBox="0 0 60 60">
          <circle className="back" cx="30" cy="30" r="27"></circle>
          <circle className="front" cx="30" cy="30" r="27"></circle>
        </svg>
        <svg className="circle-inner absolute" viewBox="0 0 34 34">
          <circle className="back" cx="17" cy="17" r="14"></circle>
          <circle className="front" cx="17" cy="17" r="14"></circle>
        </svg>
      
      </div>
      <style jsx>{`
        #wifi-loader {
          --background: #62abff;
          --front-color: #22BCAC;
          --back-color: #c3c8de;
          --text-color: #414856;
          border-radius: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        #wifi-loader svg {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        #wifi-loader svg circle {
          position: absolute;
          fill: none;
          stroke-width: 6px;
          stroke-linecap: round;
          stroke-linejoin: round;
          transform: rotate(-100deg);
          transform-origin: center;
        }

        #wifi-loader svg circle.back {
          stroke: var(--back-color);
        }

        #wifi-loader svg circle.front {
          stroke: var(--front-color);
        }

        #wifi-loader svg.circle-outer {
          height: 130px;
          width: 130px;
        }

        #wifi-loader svg.circle-outer circle {
          stroke-dasharray: 94.8 284.4;
        }

        #wifi-loader svg.circle-outer circle.back {
          animation: circle-outer135 1.8s ease infinite 0.3s;
        }

        #wifi-loader svg.circle-outer circle.front {
          animation: circle-outer135 1.8s ease infinite 0.15s;
        }

        #wifi-loader svg.circle-middle {
          height: 90.7px;
          width: 90.7px;
        }

        #wifi-loader svg.circle-middle circle {
          stroke-dasharray: 64.4 193.2;
        }

        #wifi-loader svg.circle-middle circle.back {
          animation: circle-middle6123 1.8s ease infinite 0.25s;
        }

        #wifi-loader svg.circle-middle circle.front {
          animation: circle-middle6123 1.8s ease infinite 0.1s;
        }

        #wifi-loader svg.circle-inner {
          height: 51.4px;
          width: 51.4px;
        }

        #wifi-loader svg.circle-inner circle {
          stroke-dasharray: 33.2 99.6;
        }

        #wifi-loader svg.circle-inner circle.back {
          animation: circle-inner162 1.8s ease infinite 0.2s;
        }

        #wifi-loader svg.circle-inner circle.front {
          animation: circle-inner162 1.8s ease infinite 0.05s;
        }

        #wifi-loader .text {
          position: absolute;
          bottom: -40px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-transform: lowercase;
          font-weight: 500;
          font-size: 14px;
          letter-spacing: 0.2px;
        }

        #wifi-loader .text::before,
        #wifi-loader .text::after {
          content: attr(data-text);
        }

        #wifi-loader .text::before {
          color: var(--text-color);
        }

        #wifi-loader .text::after {
          color: var(--front-color);
          animation: text-animation76 3.6s ease infinite;
          position: absolute;
          left: 0;
        }

        @keyframes circle-outer135 {
          0% {
            stroke-dashoffset: 37.8;
          }

          25% {
            stroke-dashoffset: 0;
          }

          65% {
            stroke-dashoffset: 455.04;
          }

          80% {
            stroke-dashoffset: 417.24;
          }

          100% {
            stroke-dashoffset: 417.24;
          }
        }

        @keyframes circle-middle6123 {
          0% {
            stroke-dashoffset: 25.7;
          }

          25% {
            stroke-dashoffset: 0;
          }

          65% {
            stroke-dashoffset: 308.4;
          }

          80% {
            stroke-dashoffset: 282.7;
          }

          100% {
            stroke-dashoffset: 282.7;
          }
        }

        @keyframes circle-inner162 {
          0% {
            stroke-dashoffset: 13.6;
          }

          25% {
            stroke-dashoffset: 0;
          }

          65% {
            stroke-dashoffset: 160.2;
          }

          80% {
            stroke-dashoffset: 146.6;
          }

          100% {
            stroke-dashoffset: 146.6;
          }
        }

        @keyframes text-animation76 {
          0% {
            clip-path: inset(0 100% 0 0);
          }

          50% {
            clip-path: inset(0);
          }

          100% {
            clip-path: inset(0 0 0 100%);
          }
        }
      `}</style>
    </div>
  )
}

