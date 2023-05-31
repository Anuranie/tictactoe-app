import { FunctionComponent } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { Winner } from "../../common/type";
import { PLAYER } from "../../common/constants";
import CelebrateImage from "../../assets/winner.svg";
import SadImage from "../../assets/feeling-blue.svg";
import TieImage from "../../assets/tie.svg";

type ResultsModalProps = {
  isGameTie: boolean;
  winner: Winner;
  close: () => void;
  isModalOpen: boolean | Function;
  restartGame: Function;
};
const ResultsModal: FunctionComponent<ResultsModalProps> = ({ isGameTie, winner, close, isModalOpen, restartGame }) => {
  return isModalOpen
    ? ReactDOM.createPortal(
        <div className="modal">
          <div className="content">
            <div className="modal-header">
              <h4 className="modal-title">Results</h4>
            </div>

            <div className="modal-body">
              <div className="image-container">
                {isGameTie ? (
                  <>
                    <img className="results-image" src={TieImage} alt="Tie" />
                    Good work! You tied with the computer!
                  </>
                ) : (
                  <>
                    {winner === PLAYER ? (
                      <>
                        <img className="results-image" src={CelebrateImage} alt="celebrate" />
                        Congratulations! You won the game!
                      </>
                    ) : (
                      <>
                        <img className="results-image" src={SadImage} alt="sad" />
                        Oops! The computer won the game.. Try again?
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button className="results-button" onClick={close}>
                Close
              </button>
              <button
                className="results-button"
                onClick={() => {
                  close();
                  restartGame();
                }}
              >
                Restart
              </button>
            </div>
          </div>
        </div>,
        document.body,
      )
    : null;
};

export default ResultsModal;
